import { en, pt } from '../links'
import type { Topic } from '../types'

const SKILL_BUILDER = 'https://skillbuilder.aws/category/exam-prep/cloud-practitioner-foundational-CLF-C02'

export const enUS: readonly Topic[] = [
  {
    slug: 'support',
    group: 'support',
    icon: 'lifebuoy',
    title: 'Support',
    summary: 'Support plans, technical resources and the partner network.',
    lede: `AWS [support plans](${en.aws('premiumsupport/plans/')}) changed at the end of 2025. The current exam guide lists **Basic**, **Business Support+**, **Enterprise** and **Unified Operations**.`,
    sections: [
      {
        id: 'basic',
        name: 'Basic',
        link: en.aws('premiumsupport/plans/'),
        summary: 'Included with every account, at no cost.',
        points: [
          '24/7 customer service for account and billing.',
          'Documentation, whitepapers and AWS re:Post.',
          'Core Trusted Advisor checks and the AWS Health Dashboard.',
        ],
        tip: 'Basic **does not include** technical support cases with AWS engineers.',
      },
      {
        id: 'business-support-plus',
        name: 'Business Support+',
        link: en.aws('premiumsupport/plans/business-plus/'),
        summary:
          'The entry paid plan, with AI-powered assistance and 24/7 access to experts. From US$ 29 per month per account.',
        points: [
          'Phone, chat, web and email, 24/7, with unlimited cases and contacts.',
          'Response in under 30 minutes for the most critical cases.',
          'The full set of Trusted Advisor checks.',
        ],
        tip: '**Production** workloads that need 24/7 technical support at low cost: **Business Support+**.',
      },
      {
        id: 'enterprise',
        name: 'Enterprise',
        link: en.aws('premiumsupport/plans/enterprise/'),
        summary:
          'For business-critical workloads, with a designated **TAM** (Technical Account Manager). US$ 5,000 per month minimum.',
        points: [
          'Response in under 15 minutes for business-critical systems down.',
          '**Designated TAM** and proactive services such as critical workload reviews.',
          'Trusted Advisor Priority and AWS Security Incident Response at no extra cost.',
        ],
        tip: 'If the question mentions a **designated TAM** or a **15-minute** response, the plan is **Enterprise**.',
      },
      {
        id: 'unified-operations',
        name: 'Unified Operations',
        link: en.aws('premiumsupport/plans/unified-operations/'),
        summary: 'The highest tier: 24/7 monitored operations and incident management engineers.',
        points: [
          'Response in under 5 minutes from an incident management engineer for critical cases.',
          'Continuous workload monitoring.',
          'Continuous service-specific recommendations.',
        ],
        tip: 'A **5-minute** response and 24/7 workload monitoring: **Unified Operations**.',
      },
      {
        id: 'retiring-plans',
        name: 'Plans being retired',
        link: en.docs('awssupport/latest/user/support-plans-eos.html'),
        summary: 'Developer, Business and Enterprise On-Ramp end on **January 1, 2027**.',
        points: [
          'Developer and Business customers can move to Business Support+.',
          'Enterprise On-Ramp customers are upgraded to Enterprise automatically during 2026.',
          'All three remain available in the AWS GovCloud (US) Region.',
        ],
        tip: 'Older material mentions **Developer** and **Enterprise On-Ramp**. Always check the latest exam guide.',
      },
      {
        id: 'technical-resources',
        name: 'Technical resources',
        link: 'https://repost.aws/',
        summary: 'Where to find answers and documentation without opening a support case.',
        points: [
          '**AWS Support Center**: where support cases are opened and tracked.',
          '**AWS re:Post**: a Q&A community with experts.',
          '**Knowledge Center**: answers to the most common questions.',
          '**Prescriptive Guidance**, whitepapers, blogs and the official documentation.',
          '**AWS Trust & Safety**: to report abuse of AWS resources.',
        ],
        tip: 'AWS resources used for **spam or attacks**: report it to the **Trust & Safety** team.',
      },
      {
        id: 'partners',
        name: 'Partners and Marketplace',
        link: en.aws('partners/'),
        summary: 'The partner network, the software catalog and professional help from AWS itself.',
        points: [
          '**AWS Partner Network (APN)**: system integrators and independent software vendors (ISVs).',
          '**AWS Marketplace**: a catalog of third-party software, billed on the AWS bill.',
          '**AWS Professional Services** and AWS solutions architects.',
        ],
        tip: 'Buy third-party software **ready for AWS**: **Marketplace**. Help to migrate: an **APN partner** or **Professional Services**.',
      },
    ],
  },
  {
    slug: 'resources',
    group: 'support',
    icon: 'book',
    title: 'Study resources',
    summary: 'The exam format, the official guide, articles, courses and practice exams.',
    lede: 'Everything that helped with preparation, starting with what the official **CLF-C02** guide says about the exam.',
    sections: [
      {
        id: 'exam',
        name: 'The exam',
        fullName: 'CLF-C02',
        link: en.aws('certification/certified-cloud-practitioner/'),
        summary: 'A 90-minute exam with multiple choice and multiple response questions, available in many languages.',
        points: [
          '**65 questions**: 50 are scored and 15 are unscored (and not identified).',
          'Scaled score from **100 to 1,000**. Passing score: **700**.',
          'Costs **US$ 100**. There is no penalty for guessing.',
        ],
        tip: 'Never leave a question blank: unanswered questions count as wrong and guessing is not penalized.',
        table: {
          title: 'Domains',
          head: ['Domain', 'Weight'],
          rows: [
            { key: 'Cloud Concepts', cells: ['24%'] },
            { key: 'Security and Compliance', cells: ['30%'] },
            { key: 'Cloud Technology and Services', cells: ['34%'] },
            { key: 'Billing, Pricing, and Support', cells: ['12%'] },
          ],
        },
      },
      {
        id: 'exam-guide',
        name: 'Exam guide',
        summary: 'The official guide lists the domains, the tasks assessed and the services in and out of scope.',
        links: [
          {
            label: 'AWS Certified Cloud Practitioner (CLF-C02) exam guide',
            href: en.docs('aws-certification/latest/cloud-practitioner-02/cloud-practitioner-02.html'),
          },
        ],
        tip: 'Use the guide’s list of **in-scope services** as a final checklist.',
      },
      {
        id: 'articles',
        name: 'Articles',
        summary: 'Official references to look up terms and get an overview of the services.',
        links: [
          { label: 'AWS glossary', href: en.docs('glossary/latest/reference/glos-chap.html') },
          {
            label: 'Overview of Amazon Web Services (whitepaper)',
            href: en.docs('whitepapers/latest/aws-overview/introduction.html'),
          },
        ],
        tip: 'The overview whitepaper covers almost every service mentioned on the exam.',
      },
      {
        id: 'courses',
        name: 'Courses',
        summary: 'Courses that cover the exam content end to end.',
        links: [
          {
            label: 'Exam prep plan on AWS Skill Builder',
            href: SKILL_BUILDER,
          },
          {
            label: 'AWS Certified Cloud Practitioner: Preparatório AWS CCP, in Portuguese',
            href: 'https://www.udemy.com/course/aws-certified-cloud-practitioner-aws-ccp',
          },
        ],
        tip: 'The official course on AWS Skill Builder is free and follows the domains of the guide.',
      },
      {
        id: 'practice-exams',
        name: 'Practice exams',
        summary: 'Questions in the exam format to measure your preparation.',
        links: [
          {
            label: 'Practice exam of these notes, with 65 questions and a timer',
            href: 'https://gustavofreze.github.io/aws-certified-cloud-practitioner/practice/',
          },
          {
            label: 'AWS Certified Cloud Practitioner: sample questions',
            href: 'https://d1.awsstatic.com/training-and-certification/docs-cloud-practitioner/AWS-Certified-Cloud-Practitioner_Sample-Questions.pdf',
          },
          {
            label: 'AWS Certified Cloud Practitioner: practice exams, in Portuguese',
            href: 'https://www.udemy.com/course/aws-practitioner-em-portugues',
          },
        ],
        tip: 'Read the explanation for **every option**, including the ones you got right.',
      },
      {
        id: 'next-step',
        name: 'Next step',
        fullName: 'AWS Certified Solutions Architect Associate',
        summary: 'The usual next certification after Cloud Practitioner, with study notes in the same format.',
        links: [
          {
            label: 'AWS Certified Solutions Architect Associate (SAA-C03) study notes',
            href: 'https://gustavofreze.github.io/aws-certified-solutions-architect-associate/',
          },
        ],
        tip: 'The Associate exam builds on the same services, but asks which design best meets a requirement.',
      },
    ],
  },
]

export const ptBR: readonly Topic[] = [
  {
    slug: 'support',
    group: 'support',
    icon: 'lifebuoy',
    title: 'Suporte',
    summary: 'Planos de suporte, recursos técnicos e a rede de parceiros.',
    lede: `Os [planos de suporte](${pt.aws('premiumsupport/plans/')}) mudaram no fim de 2025. O guia atual da prova cita **Basic**, **Business Support+**, **Enterprise** e **Unified Operations**.`,
    sections: [
      {
        id: 'basic',
        name: 'Basic',
        link: pt.aws('premiumsupport/plans/'),
        summary: 'Incluído em todas as contas, sem custo.',
        points: [
          'Atendimento ao cliente 24/7 para conta e cobrança.',
          'Documentação, whitepapers e AWS re:Post.',
          'Verificações essenciais do Trusted Advisor e AWS Health Dashboard.',
        ],
        tip: 'O plano Basic **não inclui** suporte técnico por casos com engenheiros da AWS.',
      },
      {
        id: 'business-support-plus',
        name: 'Business Support+',
        link: pt.aws('premiumsupport/plans/business-plus/'),
        summary:
          'O plano de entrada pago, com assistência por IA e acesso 24/7 a especialistas. A partir de US$ 29 por mês por conta.',
        points: [
          'Telefone, chat, web e e-mail, 24/7, com casos e contatos ilimitados.',
          'Resposta em menos de 30 minutos nos casos mais críticos.',
          'Todas as verificações do Trusted Advisor.',
        ],
        tip: 'Cargas em **produção** que precisam de suporte técnico 24/7 sem custo alto: **Business Support+**.',
      },
      {
        id: 'enterprise',
        name: 'Enterprise',
        link: pt.aws('premiumsupport/plans/enterprise/'),
        summary:
          'Para cargas críticas de negócio, com um **TAM** (Technical Account Manager) designado. Mínimo de US$ 5.000 por mês.',
        points: [
          'Resposta em menos de 15 minutos para sistemas críticos fora do ar.',
          '**TAM designado** e serviços proativos, como revisão de cargas críticas.',
          'Trusted Advisor Priority e AWS Security Incident Response sem custo adicional.',
        ],
        tip: 'Se a questão cita **TAM designado** ou resposta em **15 minutos**, o plano é o **Enterprise**.',
      },
      {
        id: 'unified-operations',
        name: 'Unified Operations',
        link: pt.aws('premiumsupport/plans/unified-operations/'),
        summary: 'O nível mais alto: operações monitoradas 24/7 e engenheiros de gerenciamento de incidentes.',
        points: [
          'Resposta em menos de 5 minutos de um engenheiro de incidentes em casos críticos.',
          'Monitoramento contínuo das cargas de trabalho.',
          'Recomendações contínuas por serviço.',
        ],
        tip: 'Resposta em **5 minutos** e monitoramento 24/7 das cargas: **Unified Operations**.',
      },
      {
        id: 'retiring-plans',
        name: 'Planos em descontinuação',
        link: 'https://docs.aws.amazon.com/awssupport/latest/user/support-plans-eos.html',
        summary: 'Developer, Business e Enterprise On-Ramp deixam de existir em **1º de janeiro de 2027**.',
        points: [
          'Clientes Developer e Business podem migrar para o Business Support+.',
          'Clientes Enterprise On-Ramp são migrados automaticamente para o Enterprise ao longo de 2026.',
          'Os três continuam disponíveis na Região AWS GovCloud (US).',
        ],
        tip: 'Materiais antigos citam **Developer** e **Enterprise On-Ramp**. Confira sempre o guia mais recente da prova.',
      },
      {
        id: 'technical-resources',
        name: 'Recursos técnicos',
        link: 'https://repost.aws/',
        summary: 'Onde encontrar respostas e documentação sem abrir um caso de suporte.',
        points: [
          '**AWS Support Center**: onde se abrem e acompanham casos de suporte.',
          '**AWS re:Post**: comunidade de perguntas e respostas com especialistas.',
          '**Knowledge Center**: respostas às dúvidas mais comuns.',
          '**Prescriptive Guidance**, whitepapers, blogs e documentação oficial.',
          '**AWS Trust & Safety**: para denunciar abuso de recursos da AWS.',
        ],
        tip: 'Recursos da AWS sendo usados para **spam ou ataques**: a denúncia vai para o time **Trust & Safety**.',
      },
      {
        id: 'partners',
        name: 'Parceiros e Marketplace',
        link: pt.aws('partners/'),
        summary: 'A rede de parceiros, o catálogo de software e a ajuda profissional da própria AWS.',
        points: [
          '**AWS Partner Network (APN)**: integradores de sistemas e fornecedores de software (ISVs).',
          '**AWS Marketplace**: catálogo de software de terceiros, cobrado na fatura da AWS.',
          '**AWS Professional Services** e arquitetos de soluções da AWS.',
        ],
        tip: 'Comprar software de terceiros **já pronto para a AWS**: **Marketplace**. Ajuda para migrar: **parceiro APN** ou **Professional Services**.',
      },
    ],
  },
  {
    slug: 'resources',
    group: 'support',
    icon: 'book',
    title: 'Materiais de apoio',
    summary: 'O formato da prova, o guia oficial, artigos, cursos e simulados.',
    lede: 'Tudo o que ajudou na preparação, começando pelo que o guia oficial do **CLF-C02** diz sobre a prova.',
    sections: [
      {
        id: 'exam',
        name: 'O exame',
        fullName: 'CLF-C02',
        link: pt.aws('certification/certified-cloud-practitioner/'),
        summary:
          'Prova de 90 minutos, com questões de múltipla escolha e de múltiplas respostas, disponível em português.',
        points: [
          '**65 questões**: 50 contam para a nota e 15 não são pontuadas (e não são identificadas).',
          'Nota de **100 a 1.000**. Mínimo para aprovação: **700**.',
          'Custa **US$ 100**. Não há penalidade por chutar.',
        ],
        tip: 'Nunca deixe questão em branco: resposta em branco conta como errada e o chute não penaliza.',
        table: {
          title: 'Domínios',
          head: ['Domínio', 'Peso'],
          rows: [
            { key: 'Conceitos de nuvem', cells: ['24%'] },
            { key: 'Segurança e conformidade', cells: ['30%'] },
            { key: 'Tecnologia e serviços', cells: ['34%'] },
            { key: 'Cobrança, preços e suporte', cells: ['12%'] },
          ],
        },
      },
      {
        id: 'exam-guide',
        name: 'Guia do exame',
        summary: 'O guia oficial lista os domínios, as tarefas cobradas e os serviços dentro e fora do escopo.',
        links: [
          {
            label: 'Guia do exame AWS Certified Cloud Practitioner (CLF-C02)',
            href: pt.docs('aws-certification/latest/cloud-practitioner-02/cloud-practitioner-02.html'),
          },
        ],
        tip: 'Use a lista de **serviços no escopo** do guia como checklist final.',
      },
      {
        id: 'articles',
        name: 'Artigos',
        summary: 'Referências oficiais para consultar termos e ter uma visão geral dos serviços.',
        links: [
          { label: 'Glossário da AWS', href: pt.docs('glossary/latest/reference/glos-chap.html') },
          {
            label: 'Visão geral da Amazon Web Services (whitepaper)',
            href: pt.docs('whitepapers/latest/aws-overview/introduction.html'),
          },
        ],
        tip: 'O whitepaper de visão geral cobre quase todos os serviços citados na prova.',
      },
      {
        id: 'courses',
        name: 'Cursos',
        summary: 'Cursos que cobrem o conteúdo da prova do início ao fim.',
        links: [
          {
            label: 'Plano de preparação no AWS Skill Builder',
            href: SKILL_BUILDER,
          },
          {
            label: 'AWS Certified Cloud Practitioner: Preparatório AWS CCP',
            href: 'https://www.udemy.com/course/aws-certified-cloud-practitioner-aws-ccp',
          },
        ],
        tip: 'O curso oficial no AWS Skill Builder é gratuito e segue os domínios do guia.',
      },
      {
        id: 'practice-exams',
        name: 'Simulados',
        summary: 'Questões no formato da prova para medir a preparação.',
        links: [
          {
            label: 'Simulado destas notas, com 65 questões e cronômetro',
            href: 'https://gustavofreze.github.io/aws-certified-cloud-practitioner/pt-br/practice/',
          },
          {
            label: 'AWS Certified Cloud Practitioner: exemplos de perguntas',
            href: 'https://d1.awsstatic.com/pt_BR/training-and-certification/docs-cloud-practitioner/AWS-Certified-Cloud-Practitioner_Sample-Questions.pdf',
          },
          {
            label: 'AWS Certified Cloud Practitioner: simulados em português',
            href: 'https://www.udemy.com/course/aws-practitioner-em-portugues',
          },
        ],
        tip: 'Leia a explicação de **cada alternativa**, inclusive das que você acertou.',
      },
      {
        id: 'next-step',
        name: 'Próximo passo',
        fullName: 'AWS Certified Solutions Architect Associate',
        summary: 'A certificação que costuma vir depois do Cloud Practitioner, com notas de estudo no mesmo formato.',
        links: [
          {
            label: 'Notas de estudo do AWS Certified Solutions Architect Associate (SAA-C03)',
            href: 'https://gustavofreze.github.io/aws-certified-solutions-architect-associate/pt-br/',
          },
        ],
        tip: 'O exame Associate cobra os mesmos serviços, mas pergunta qual arquitetura atende melhor a um requisito.',
      },
    ],
  },
]
