"""Draws the link-preview card of the site, `public/og-image.png`, at 1200 by 630.

The card is the same in both languages, so it carries the name of the certification, the brand and a
line in each language. Run it through `make og-image`, which supplies Pillow in a container.
"""

import sys
from pathlib import Path

from PIL import Image, ImageDraw, ImageFilter, ImageFont

WIDTH, HEIGHT = 1200, 630
SQUID, ORANGE, WHITE, MUTED = '#232f3e', '#ff9900', '#ffffff', '#c3ccd8'
FONTS = Path(__file__).parent / 'fonts'


def font(weight: int, size: int) -> ImageFont.FreeTypeFont:
    """The Nunito face of the given weight, at the given size."""
    return ImageFont.truetype(str(FONTS / f'nunito-latin-{weight}.ttf'), size)


def glows(card: Image.Image) -> None:
    """Paints the orange and the blue glow, blurred so their edges disappear."""
    layer = Image.new('RGBA', card.size, (0, 0, 0, 0))
    draw = ImageDraw.Draw(layer)
    draw.ellipse((780, -260, 1380, 340), fill=(255, 153, 0, 110))
    draw.ellipse((-260, 380, 260, 900), fill=(0, 115, 187, 120))
    blurred = layer.filter(ImageFilter.GaussianBlur(110))
    card.paste(blurred, (0, 0), blurred)


def dots(draw: ImageDraw.ImageDraw) -> None:
    """Draws the faint dotted grid the bands of the site wear."""
    for x in range(0, WIDTH, 24):
        for y in range(0, HEIGHT, 24):
            draw.ellipse((x, y, x + 2, y + 2), fill=(255, 255, 255, 22))


def cloud(card: Image.Image) -> None:
    """Draws the brand tile and the cloud inside it, supersampled so the curves come out smooth."""
    ImageDraw.Draw(card, 'RGBA').rounded_rectangle(
        (80, 80, 152, 152), 18, fill=(255, 153, 0, 40), outline=(255, 153, 0, 150), width=2
    )
    scale = 4
    mask = Image.new('L', (WIDTH * scale, HEIGHT * scale), 0)
    draw = ImageDraw.Draw(mask)
    for box in ((96, 112, 118, 134), (106, 99, 132, 125), (122, 108, 142, 128)):
        draw.ellipse(tuple(value * scale for value in box), fill=255)
    draw.rounded_rectangle(tuple(value * scale for value in (104, 118, 136, 134)), 6 * scale, fill=255)
    card.paste(Image.new('RGB', card.size, ORANGE), (0, 0), mask.resize(card.size, Image.LANCZOS))


def main(output: str) -> None:
    card = Image.new('RGB', (WIDTH, HEIGHT), SQUID)
    glows(card)
    draw = ImageDraw.Draw(card, 'RGBA')
    dots(draw)
    cloud(card)
    draw.text((172, 96), 'Cloud Practitioner', font=font(600, 34), fill=WHITE)
    draw.text((80, 230), 'AWS Certified', font=font(600, 92), fill=WHITE)
    draw.text((80, 335), 'Cloud Practitioner', font=font(600, 92), fill=ORANGE)
    draw.text((82, 470), 'Notas de estudo  ·  Study notes  ·  CLF-C02', font=font(400, 34), fill=MUTED)
    card.save(output, optimize=True)


if __name__ == '__main__':
    main(sys.argv[1] if len(sys.argv) > 1 else 'public/og-image.png')
