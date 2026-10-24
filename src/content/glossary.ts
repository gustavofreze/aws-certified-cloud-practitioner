/**
 * What the acronyms in the notes stand for, and the way a page tells the reader.
 *
 * On each page, the first time an acronym is read it is followed by its meaning, as in
 * "EC2 (Elastic Compute Cloud)". Every occurrence is also wrapped in `<abbr>`, so the meaning stays one
 * hover away further down. An acronym whose meaning the page already spells out, in the text or in the
 * full name of a section, is not explained again.
 *
 * The first occurrence is found before anything is rendered, from every text of the page in reading
 * order, so the result does not depend on the order the components happen to render in.
 */
import type { Locale } from '../i18n/strings'
import type { Inline, Section } from './types'

/** The meaning in English, then in Portuguese when it differs, then the Portuguese plural when used. */
type Term = readonly [en: string, pt?: string | undefined, ptPlural?: string]

const TERMS: Readonly<Record<string, Term>> = {
  ACL: ['access control list', 'lista de controle de acesso', 'listas de controle de acesso'],
  ACM: ['Certificate Manager'],
  ACME: ['Automated Certificate Management Environment'],
  ACU: ['Aurora Capacity Unit', undefined, 'Aurora Capacity Units'],
  AD: ['Active Directory'],
  AES: ['Advanced Encryption Standard'],
  ALB: ['Application Load Balancer'],
  AMI: ['Amazon Machine Image', undefined, 'Amazon Machine Images'],
  AMQP: ['Advanced Message Queuing Protocol'],
  API: ['application programming interface', 'interface de programação de aplicações', 'interfaces de programação'],
  APN: ['AWS Partner Network'],
  AR: ['augmented reality', 'realidade aumentada'],
  ARC: ['Application Recovery Controller'],
  AS2: ['Applicability Statement 2'],
  AZ: ['Availability Zone', 'Zona de Disponibilidade', 'Zonas de Disponibilidade'],
  BAA: ['Business Associate Addendum'],
  BGP: ['Border Gateway Protocol'],
  BI: ['business intelligence'],
  BYOL: ['bring your own license', 'traga sua própria licença'],
  CA: ['certificate authority', 'autoridade certificadora'],
  CAF: ['Cloud Adoption Framework'],
  CDC: ['change data capture', 'captura de dados de alteração'],
  CDK: ['Cloud Development Kit'],
  CDN: ['content delivery network', 'rede de entrega de conteúdo'],
  'CI/CD': ['continuous integration and continuous delivery', 'integração e entrega contínuas'],
  CIDR: ['Classless Inter-Domain Routing', undefined, 'blocos CIDR'],
  CIS: ['Center for Internet Security'],
  CLI: ['command line interface', 'interface de linha de comando'],
  CNG: ['Cryptography API: Next Generation'],
  CPU: ['central processing unit', 'unidade central de processamento'],
  CRR: ['Cross-Region Replication', 'replicação entre Regiões'],
  CSPM: ['cloud security posture management', 'gerenciamento de postura de segurança na nuvem'],
  CUR: ['Cost and Usage Report'],
  CVE: ['Common Vulnerabilities and Exposures'],
  DAX: ['DynamoDB Accelerator'],
  DB: ['database', 'banco de dados'],
  DLQ: ['dead-letter queue', 'fila de mensagens mortas'],
  DMS: ['Database Migration Service'],
  DNS: ['Domain Name System'],
  DR: ['disaster recovery', 'recuperação de desastres'],
  DRS: ['Elastic Disaster Recovery'],
  DSSE: ['dual-layer server-side encryption', 'criptografia de duas camadas no servidor'],
  DX: ['Direct Connect'],
  EBS: ['Elastic Block Store'],
  EC2: ['Elastic Compute Cloud'],
  ECMP: ['equal-cost multi-path', 'múltiplos caminhos de mesmo custo'],
  ECR: ['Elastic Container Registry'],
  ECS: ['Elastic Container Service'],
  EFA: ['Elastic Fabric Adapter'],
  EFS: ['Elastic File System'],
  EKS: ['Elastic Kubernetes Service'],
  ELB: ['Elastic Load Balancing'],
  EMR: ['Elastic MapReduce'],
  ENA: ['Elastic Network Adapter'],
  ENI: ['elastic network interface', 'interface de rede elástica'],
  ESG: ['environmental, social and governance', 'ambiental, social e governança'],
  ETL: ['extract, transform and load', 'extrair, transformar e carregar'],
  FAQ: ['frequently asked questions', 'perguntas frequentes', 'perguntas frequentes'],
  FIFO: ['first in, first out', 'primeiro a entrar, primeiro a sair'],
  FIPS: ['Federal Information Processing Standards'],
  FOCUS: ['FinOps Open Cost and Usage Specification'],
  FPGA: ['field-programmable gate array', undefined, 'field-programmable gate arrays'],
  FTP: ['File Transfer Protocol'],
  FTPS: ['FTP over TLS', 'FTP sobre TLS'],
  GENEVE: ['Generic Network Virtualization Encapsulation'],
  GPU: ['graphics processing unit', 'unidade de processamento gráfico', 'unidades de processamento gráfico'],
  GSI: ['global secondary index', 'índice secundário global'],
  GWLB: ['Gateway Load Balancer'],
  HA: ['high availability', 'alta disponibilidade'],
  HDD: ['hard disk drive', 'disco rígido'],
  HDFS: ['Hadoop Distributed File System'],
  HLS: ['HTTP Live Streaming'],
  HPC: ['high performance computing', 'computação de alto desempenho'],
  HRI: ['high-risk issue', 'problema de alto risco', 'problemas de alto risco'],
  HSM: ['hardware security module', 'módulo de segurança de hardware', 'módulos de segurança de hardware'],
  HTTP: ['Hypertext Transfer Protocol'],
  HTTPS: ['HTTP Secure', 'HTTP seguro'],
  IA: ['Infrequent Access'],
  IAM: ['Identity and Access Management'],
  IDE: ['integrated development environment', 'ambiente de desenvolvimento integrado'],
  IDS: ['intrusion detection system', 'sistema de detecção de intrusão'],
  IOPS: ['input/output operations per second', 'operações de entrada e saída por segundo'],
  IP: ['Internet Protocol', undefined, 'endereços IP'],
  IPS: ['intrusion prevention system', 'sistema de prevenção de intrusão'],
  ISP: ['internet service provider', 'provedor de internet'],
  ISV: ['independent software vendor', 'fornecedor independente de software', 'fornecedores independentes de software'],
  JCE: ['Java Cryptography Extension'],
  JMS: ['Java Message Service'],
  JWT: ['JSON Web Token'],
  KMS: ['Key Management Service'],
  KSP: ['Key Storage Provider'],
  KVM: ['Kernel-based Virtual Machine'],
  'LF-Tags': ['Lake Formation tags', 'tags do Lake Formation'],
  LSI: ['local secondary index', 'índice secundário local'],
  MFA: ['multi-factor authentication', 'autenticação multifator'],
  MGN: ['Application Migration Service'],
  ML: ['machine learning'],
  MPI: ['Message Passing Interface'],
  MQTT: ['Message Queuing Telemetry Transport'],
  MREC: ['multi-Region eventual consistency', 'consistência eventual multi-Região'],
  MRI: ['medium-risk issue', 'problema de médio risco', 'problemas de médio risco'],
  MRSC: ['multi-Region strong consistency', 'consistência forte multi-Região'],
  MSK: ['Managed Streaming for Apache Kafka'],
  MWAA: ['Managed Workflows for Apache Airflow'],
  NACL: ['network access control list', 'lista de controle de acesso de rede', 'listas de controle de acesso de rede'],
  NAS: ['network-attached storage', 'armazenamento conectado à rede'],
  NAT: ['network address translation', 'tradução de endereços de rede'],
  NCCL: ['NVIDIA Collective Communications Library'],
  NFS: ['Network File System'],
  NLB: ['Network Load Balancer'],
  NLP: ['natural language processing', 'processamento de linguagem natural'],
  NMS: ['.NET Message Service'],
  OAC: ['origin access control', 'controle de acesso à origem'],
  OAI: ['origin access identity', 'identidade de acesso à origem'],
  OCI: ['Open Container Initiative'],
  OCR: ['optical character recognition', 'reconhecimento óptico de caracteres'],
  OIDC: ['OpenID Connect'],
  OLAP: ['online analytical processing', 'processamento analítico online'],
  OLTP: ['online transaction processing', 'processamento de transações online'],
  OS: ['operating system', 'sistema operacional'],
  OU: ['organizational unit', 'unidade organizacional', 'unidades organizacionais'],
  'PCI DSS': ['Payment Card Industry Data Security Standard'],
  PCI: ['Payment Card Industry'],
  PII: ['personally identifiable information', 'informações de identificação pessoal'],
  PITR: ['point-in-time recovery', 'recuperação para um ponto no tempo'],
  PKCS: ['Public-Key Cryptography Standards'],
  PKI: ['public key infrastructure', 'infraestrutura de chave pública'],
  POSIX: ['Portable Operating System Interface'],
  PPS: ['packets per second', 'pacotes por segundo'],
  RADIUS: ['Remote Authentication Dial-In User Service'],
  RAM: ['Resource Access Manager'],
  RCP: ['resource control policy', 'política de controle de recursos', 'políticas de controle de recursos'],
  RCU: ['read capacity unit', 'unidade de capacidade de leitura', 'unidades de capacidade de leitura'],
  RDS: ['Relational Database Service'],
  REST: ['Representational State Transfer'],
  RI: ['Reserved Instance', 'Instância Reservada', 'Instâncias Reservadas'],
  RPO: ['recovery point objective', 'objetivo de ponto de recuperação'],
  RPU: ['Redshift Processing Unit', undefined, 'Redshift Processing Units'],
  RTC: ['Replication Time Control'],
  RTO: ['recovery time objective', 'objetivo de tempo de recuperação'],
  S3: ['Simple Storage Service'],
  SAM: ['Serverless Application Model'],
  SAML: ['Security Assertion Markup Language'],
  SCP: ['service control policy', 'política de controle de serviço', 'políticas de controle de serviço'],
  SCT: ['Schema Conversion Tool'],
  SDK: ['software development kit', 'kit de desenvolvimento de software', 'kits de desenvolvimento de software'],
  SES: ['Simple Email Service'],
  SFTP: ['SSH File Transfer Protocol'],
  SLA: ['service level agreement', 'acordo de nível de serviço'],
  SMB: ['Server Message Block'],
  SMS: ['Short Message Service'],
  SMTP: ['Simple Mail Transfer Protocol'],
  SNS: ['Simple Notification Service'],
  SO: ['sistema operacional', 'sistema operacional'],
  SOC: ['System and Organization Controls'],
  SPARQL: ['SPARQL Protocol and RDF Query Language'],
  SPICE: ['Super-fast, Parallel, In-memory Calculation Engine'],
  SQL: ['Structured Query Language'],
  SQS: ['Simple Queue Service'],
  'SR-IOV': ['single root I/O virtualization', 'virtualização de E/S de raiz única'],
  SRD: ['Scalable Reliable Datagram'],
  SRR: ['Same-Region Replication', 'replicação na mesma Região'],
  SSD: ['solid state drive', 'unidade de estado sólido'],
  SSE: ['server-side encryption', 'criptografia no lado do servidor'],
  SSH: ['Secure Shell'],
  SSM: ['Systems Manager'],
  SSO: ['single sign-on', 'login único'],
  STOMP: ['Simple Text Oriented Messaging Protocol'],
  STS: ['Security Token Service'],
  TAM: ['Technical Account Manager'],
  TCO: ['total cost of ownership', 'custo total de propriedade'],
  TCP: ['Transmission Control Protocol'],
  TLS: ['Transport Layer Security'],
  TTL: ['time to live', 'tempo de vida'],
  UDP: ['User Datagram Protocol'],
  URL: ['Uniform Resource Locator', undefined, 'endereços URL'],
  VIF: ['virtual interface', 'interface virtual'],
  VM: ['virtual machine', 'máquina virtual', 'máquinas virtuais'],
  VPC: ['Virtual Private Cloud'],
  VPN: ['virtual private network', 'rede privada virtual'],
  VR: ['virtual reality', 'realidade virtual'],
  WAF: ['Web Application Firewall'],
  WAN: ['wide area network', 'rede de longa distância'],
  WCU: ['write capacity unit', 'unidade de capacidade de gravação', 'unidades de capacidade de gravação'],
  WORM: ['write once, read many', 'grava uma vez, lê muitas'],
  XSS: ['cross-site scripting'],
}

/** Acronyms that read the same in both languages but mean something else in one of them. */
const ONLY_IN: Readonly<Record<string, Locale>> = {
  IA: 'en-US',
  OS: 'en-US',
  SO: 'pt-BR',
}

/** A text of the page, and whether the reader sees it rendered as notes or only as a plain label. */
export interface Reading {
  readonly text: string
  readonly rendered: boolean
}

const KEYS = Object.keys(TERMS).sort((a, b) => b.length - a.length)
const escapeRegex = (key: string): string => key.replace(/[.*+?^${}()|[\]\\/]/g, '\\$&')
const pattern = (): RegExp => new RegExp(`(?<!\\w)(${KEYS.map(escapeRegex).join('|')})(s?)(?![\\w])`, 'g')

/** An occurrence followed by a hyphen or a slash is part of a compound, such as "CI/CD", and is not explained. */
function inCompound(text: string, end: number): boolean {
  return /^[-/]\w/.test(text.slice(end, end + 2))
}

function plain(text: Inline): string {
  return text.replace(/`[^`]+`/g, ' ').replace(/\]\([^)\s]+\)/g, ']')
}

function englishPlural(meaning: string): string {
  if (/[^aeiou]y$/.test(meaning)) return `${meaning.slice(0, -1)}ies`
  if (/(s|x)$/.test(meaning)) return `${meaning}es`
  return `${meaning}s`
}

export class Glossary {
  private readonly owners = new Map<string, string>()

  constructor(
    private readonly locale: Locale,
    readings: readonly Reading[],
  ) {
    const settled = new Set<string>()
    for (const { text, rendered } of readings) {
      const source = plain(text)
      const lower = source.toLowerCase()
      for (const key of KEYS) {
        if (settled.has(key) || !this.knows(key)) continue
        if (lower.includes(this.meaning(key, false).toLowerCase())) {
          settled.add(key)
        }
      }
      if (!rendered) continue
      for (const match of source.matchAll(pattern())) {
        const key = match[1] ?? ''
        if (settled.has(key) || !this.knows(key) || inCompound(source, (match.index ?? 0) + match[0].length)) continue
        settled.add(key)
        this.owners.set(key, text)
      }
    }
  }

  /** Marks the acronyms in the HTML rendered from `text`, explaining the ones this text reads first. */
  mark(text: Inline, html: string): string {
    const explained = new Set<string>()
    let inCode = false
    return html
      .split(/(<[^>]+>)/)
      .map((part) => {
        if (part.startsWith('<')) {
          if (part.startsWith('<code')) inCode = true
          if (part.startsWith('</code')) inCode = false
          return part
        }
        if (inCode) return part
        return part.replace(pattern(), (token: string, key: string, plural: string, offset: number) => {
          if (!this.knows(key)) return token
          const title = this.meaning(key, false)
          const abbr = `<abbr title="${title}">${token}</abbr>`
          if (this.owners.get(key) !== text || explained.has(key) || inCompound(part, offset + token.length)) {
            return abbr
          }
          explained.add(key)
          return `${abbr} (${this.meaning(key, plural === 's')})`
        })
      })
      .join('')
  }

  private knows(key: string): boolean {
    const only = ONLY_IN[key]
    return only === undefined || only === this.locale
  }

  private meaning(key: string, plural: boolean): string {
    const [en, pt, ptPlural] = TERMS[key] ?? ['']
    if (this.locale === 'en-US') return plural ? englishPlural(en) : en
    const singular = pt ?? en
    if (!plural) return singular
    return ptPlural ?? (pt === undefined ? englishPlural(en) : singular)
  }
}

/** Every acronym the glossary explains, for the test that keeps the notes covered. */
export const ACRONYMS: readonly string[] = KEYS

/** The texts of a section in the order a reader meets them on the page. */
export function readingsOf(section: Section): Reading[] {
  return [
    { text: section.fullName ?? '', rendered: false },
    { text: section.summary, rendered: true },
    ...(section.points ?? []).map((text) => ({ text, rendered: true })),
    { text: section.tip, rendered: true },
    ...(section.table?.rows ?? []).flatMap((row) => [
      { text: row.key, rendered: false },
      ...row.cells.map((text) => ({ text, rendered: true })),
    ]),
  ]
}
