# AWS Certified Cloud Practitioner

[![License](https://img.shields.io/badge/license-MIT-green)](LICENSE)
[![Credly](https://img.shields.io/badge/Credly-AWS_Certified_Cloud_Practitioner-FF9900)](https://www.credly.com/badges/325a54ad-47c6-4d82-9c7d-b6c246c0b0dd)

**Site:** https://gustavofreze.github.io/aws-certified-cloud-practitioner/
([Português](https://gustavofreze.github.io/aws-certified-cloud-practitioner/pt-br/))

**Other notes:** [AWS Certified Solutions Architect - Associate](https://gustavofreze.github.io/aws-certified-solutions-architect-associate/)
([repository](https://github.com/gustavofreze/aws-certified-solutions-architect-associate))

* [Overview](#overview)
    - [Topics](#topics)
    - [Study tools](#study-tools)
    - [Related notes](#related-notes)
* [Installation](#installation)
    - [Repository](#repository)
    - [Configuration](#configuration)
    - [Build](#build)
    - [Tests](#tests)
    - [Review](#review)
    - [Reports](#reports)
    - [Maintenance](#maintenance)
* [Environment setup](#environment-setup)
    - [Access URLs](#access-urls)
* [Deployment](#deployment)

## Overview

Study notes for the
[AWS Certified Cloud Practitioner](https://aws.amazon.com/certification/certified-cloud-practitioner)
exam (CLF-C02), in English and Portuguese. The notes follow the four domains of the official exam guide and link to
the AWS documentation of every service they cover.

### Topics

- Foundations: cloud computing, global infrastructure, access and the Well-Architected Framework.
- Services: storage, databases, compute, analytics, governance, financial management, application integration,
  security, networking, AI and machine learning, migration and the other services in scope for the exam.
- Support and resources: support plans, exam guide, articles, courses and practice exams.

### Study tools

- Search across every note, in both languages.
- A review page with flash cards. The reader can mark a card as known and hide the known cards. The progress is kept in
  the browser only.

### Related notes

- [AWS Certified Solutions Architect - Associate](https://gustavofreze.github.io/aws-certified-solutions-architect-associate/):
  the usual next certification, with notes in the same format.

## Installation

The notes live in `src/content/topics/`, one file per group of the roadmap, with the same topics and sections in both
languages. The build fails when the two languages diverge. `src/content/site.ts` holds what sets this certification
apart: its names, its exam and the groups of its roadmap.

Every command runs inside a Docker container, so the host needs only Docker and GNU Make.

### Repository

To clone the repository using the command line, run:

```bash
git clone https://github.com/gustavofreze/aws-certified-cloud-practitioner.git
```

### Configuration

To install project dependencies locally, run:

```bash
make configure
```

To start the development server with live reload, run:

```bash
make start
```

To stop the development server, run:

```bash
make stop
```

### Build

Build the static site and its search index into `dist/`:

```bash
make build
```

Serve the built site, search included, on the development port:

```bash
make preview
```

Draw the link-preview card into `public/og-image.png`:

```bash
make og-image
```

### Tests

Run the unit tests:

```bash
make tests
```

Check the script every built page ships against its budget of 4000 bytes (run after `make build`):

```bash
make budgets
```

### Review

Run the linter, the formatter check and the type checks:

```bash
make review
```

Apply the linter and formatter fixes:

```bash
make fix-review
```

### Reports

Open the development server in the browser:

```bash
make show-site
```

Show outdated direct dependencies:

```bash
make show-outdated
```

### Maintenance

Remove dependencies and generated artifacts:

```bash
make clean
```

> You can check other available commands by running `make help`.

## Environment setup

### Access URLs

| Environment  | URL                                                                        |
|:-------------|:---------------------------------------------------------------------------|
| `Local`      | http://localhost:4321/aws-certified-cloud-practitioner/         |
| `Production` | https://gustavofreze.github.io/aws-certified-cloud-practitioner |

## Deployment

The site is hosted on GitHub Pages. The `CD (Deploy site)` workflow builds the site and publishes it, and runs on demand
from the Actions tab.
