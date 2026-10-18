# AWS Certified Cloud Practitioner

[![License](https://img.shields.io/badge/license-MIT-green)](LICENSE)

* [Overview](#overview)
    - [Topics](#topics)
    - [Other certifications](#other-certifications)
* [Installation](#installation)
    - [Repository](#repository)
    - [Configuration](#configuration)
    - [Tests](#tests)
    - [Review](#review)
* [Environment setup](#environment-setup)
    - [Access URLs](#access-urls)
* [Deployment](#deployment)

## Overview

Study notes for the [AWS Certified Cloud Practitioner](https://aws.amazon.com/certification/certified-cloud-practitioner)
exam (CLF-C02), in English and Portuguese, published at
[gustavofreze.github.io/aws-certified-cloud-practitioner](https://gustavofreze.github.io/aws-certified-cloud-practitioner/).
The notes follow the domains of the official exam guide and link to the AWS documentation of every service they cover.

### Topics

- Foundations: cloud computing, global infrastructure, access and the Well-Architected Framework.
- Services: storage, databases, compute, networking, security and the other services in scope for the exam.
- Support and resources: support plans, exam guide, courses and practice exams.

### Other certifications

| Certification                                 | Site                                                                                | Repository                                                                                |
|:----------------------------------------------|:------------------------------------------------------------------------------------|:------------------------------------------------------------------------------------------|
| AWS Certified Solutions Architect - Associate | [Site](https://gustavofreze.github.io/aws-certified-solutions-architect-associate/) | [Repository](https://github.com/gustavofreze/aws-certified-solutions-architect-associate) |

## Installation

### Repository

```bash
git clone https://github.com/gustavofreze/aws-certified-cloud-practitioner.git
```

### Configuration

```bash
make configure
make start
```

### Tests

```bash
make tests
```

### Review

```bash
make review
```

> You can check other available commands by running `make help`.

## Environment setup

### Access URLs

| Environment  | URL                                                             |
|:-------------|:----------------------------------------------------------------|
| `Local`      | http://localhost:4321/aws-certified-cloud-practitioner/         |
| `Production` | https://gustavofreze.github.io/aws-certified-cloud-practitioner |

## Deployment

The `CD (Deploy site)` workflow builds the site and publishes it on GitHub Pages. It runs on demand from the Actions tab.
