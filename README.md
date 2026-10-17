# AWS Certified Cloud Practitioner

Notas de estudo para a certificação
[AWS Certified Cloud Practitioner](https://aws.amazon.com/pt/certification/certified-cloud-practitioner), publicadas
como site em português e inglês, com tema claro e escuro.

**[Acessar as notas](https://gustavofreze.github.io/aws-certified-cloud-practitioner/)** ·
**[English version](https://gustavofreze.github.io/aws-certified-cloud-practitioner/en/)**

## Conteúdo

- Fundamentos: computação em nuvem, infraestrutura global, acesso e Well-Architected Framework.
- Serviços: armazenamento, banco de dados, computação, análises, governança, gerenciamento financeiro, integração,
  segurança, redes, IA e machine learning, migração e os demais serviços no escopo da prova.
- Suporte e materiais de apoio: planos de suporte, guia do exame, artigos, cursos e simulados.
- Busca em todas as notas e uma página de revisão em cartões, nos dois idiomas.

## Desenvolvimento

O site é estático, feito com [Astro](https://astro.build) e [Tailwind CSS](https://tailwindcss.com), com busca
gerada pelo [Pagefind](https://pagefind.app). As notas ficam em `src/content/pt-BR.ts` e `src/content/en-US.ts`,
com os mesmos tópicos e seções nos dois idiomas. O build falha se divergirem.

Tudo roda em Docker, só Docker e GNU Make são necessários na máquina.

```bash
make configure  # instala as dependências
make start      # http://localhost:4321/aws-certified-cloud-practitioner/
make build      # gera dist/ e o índice de busca
make preview    # serve o site gerado, com a busca
make review     # Biome e astro check
make help       # lista todos os targets
```
