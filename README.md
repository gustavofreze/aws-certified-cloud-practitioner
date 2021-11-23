# AWS Certified Cloud Practitioner

* [Overview](#overview)
* [Roadmap](#roadmap)
    - [Computação em nuvem](#cloud_computing)
    - [Infraestrutura global](#infrastructure)
    - [Acesso](#access)
    - [Arquitetura](#well_architected_framework)
    - [Serviços](#services)
        - [Armazenamento](#storage)
        - [Banco de dados](#database)
        - [Computação](#computing)
        - [Data lakes e análises](#analytics)
        - [Gerenciamento e governança](#governance)
        - [Gerenciamento financeiro na nuvem](#financial_management)
        - [Integração de aplicativos](#application)
        - [Segurança, identidade e conformidade](#security)
        - [Redes e entrega de conteúdo](#network)
    - [Suporte](#support)
* [Materiais de apoio](#links)

<div id="overview"></div> 

## Overview

Este repositório é um compilado de informações do conteúdo estudado em cursos, artigos, simulados e outros, que me
ajudaram na preparação para a certificação
[AWS Certified Cloud Practitioner](https://aws.amazon.com/pt/certification/certified-cloud-practitioner).

<div id="roadmap"></div> 

## Roadmap

<div id="cloud_computing"></div> 

### Computação em nuvem

É a entrega sob demanda (on demand) de recursos de computação, banco de dados, armazenamento, aplicações ou qualquer
outro recurso de tecnologia que é entregue através de uma plataforma via internet, onde o pagamento e preço é baseado em
consumo (pay as you go).

**Vantagens**

- **Mudança na modalidade gastos**: muda da modalidade de despesas de
  capital, [CAPEx](https://pt.wikipedia.org/wiki/CAPEX), para modelo de despesa variável,
  [OPEx](https://pt.wikipedia.org/wiki/OPEX).


- **Economia de escala**: com a computação em nuvem, você pode chegar a um custo variável menor do que seria possível
  por conta própria. Como o uso de centenas de milhares de clientes é agregado na nuvem, os fornecedores como a AWS
  podem ter maiores economias em escala, o que se converte em um menor preço pago conforme o uso.


- **Capacidade**: você cresce ou diminui a capacidade necessária para atender suas demandas, pagando apenas o que
  consumir.


- **Agilidade e velocidade**: recursos estão disponíveis imediatamente.


- **Economia**: você deixa de gastar dinheiro para comprar e manter data centers.


- **Global em poucos minutos**: permite que você tenha recursos disponíveis globalmente em poucos minutos com baixa
  latência e custo, melhorando a experiência do cliente

<div id="infrastructure"></div> 

### Infraestrutura global

A [infraestrutura global da AWS](https://aws.amazon.com/pt/about-aws/global-infrastructure) é uma plataforma de nuvem e
oferece mais de 200 serviços completos de datacenters em todo o mundo.

- **Regiões (Regions)**: são as localidades físicas onde a AWS está disponível ao redor do mundo.


- **Zonas de disponibilidades (Availability Zone - AZ)**: é a quantidade de datacenter que a AWS tem em cada uma das
  regiões para prover serviços e produtos. No mínimo são duas zonas de disponibilidade por região, a fim de proporcionar
  alta disponibilidade, tolerância a falhas e escalabilidade.


- **Pontos de presença (Edge locations)**: uma edge location é basicamente um pequeno servidor de cache. Eles estão
  localizados na maioria das principais cidades do mundo e são usados especificamente pelo CloudFront (CDN) para
  distribuir conteúdo ao usuário final e reduzir a latência do acesso.

<div id="access"></div> 

### Acesso

- **Management Console**: interface gráfica com suporte para a maioria dos serviços da AWS. Pode ser usada via navegador
  ou aplicativo.


- **Command Line Interface - CLI**: acesso aos serviços via linha de comando.


- **Software Development Kit - SDK**: suporta diversas linguagens de programação e permite a incorporação de serviços
  AWS em aplicações.

<div id="well_architected_framework"></div> 

### Arquitetura

O [Well Architected Framework](https://aws.amazon.com/pt/architecture/well-architected)  ajuda você a entender como
projetar e operar sistemas confiáveis, seguros, eficientes e econômicos na nuvem AWS. Ele fornece uma maneira de avaliar
de forma consistente suas arquiteturas em relação às melhores práticas e identificar áreas para melhorias.

**Pilares**

- **Excelência operacional**: se concentra em executar e monitorar sistemas para entregar valor empresarial e melhorar
  continuamente processos e procedimentos.


- **Segurança**: se concentra em proteger informações e sistemas.


- **Confiabilidade**: se concentra em garantir que uma carga de trabalho execute sua função pretendida corretamente e de
  modo consistente quando esperado.


- **Eficiência de performance**: se concentra no uso eficiente de recursos de TI e computação.


- **Otimização de custos**: se concentra em evitar custos desnecessários.

<div id="services"></div> 

### Serviços

<div id="storage"></div> 

### Armazenamento

**Elastic File System - EFS**

O [EFS](https://aws.amazon.com/pt/efs) é um serviço de armazenamento que aumenta e diminui automaticamente conforme você
adiciona e remove arquivos, sem a necessidade de gerenciamento ou provisionamento.

**Elastic Block Store - EBS**

O [EBS](https://aws.amazon.com/pt/ebs) é um tipo de armazenamento em blocos, persistente e customizável para instâncias
EC2.

**Características**

- Permite habilitar encriptação dos dados armazenados (Encryption on Rest).
- Podem ser criadas várias cópias do volume (Snapshots).

**Simple Storage Service - S3**

O [S3](https://aws.amazon.com/pt/s3) é um serviço de armazenamento de objetos que permite armazenar e recuperar qualquer
quantidade de informações via internet, pagando apenas pelo que usar. Os objetos no S3 são armazenados em `buckets`, os
nomes dos objetos são chamados de `object key`. As versões dos objetos são chamadas de `version ID`, e o endereço dos
objetos é chamado de `link Address`.

Para criar um bucket, o nome do bucket deve:

- Ser único em todo o Amazon S3.
- Ter entre 3 e 63 caracteres.
- Não possuir caracteres maiúsculos.
- Começar com uma letra minúscula ou um número.

<div id="database"></div>

### Banco de dados

**Redshift**

O [Redshift](https://aws.amazon.com/pt/redshift) é um banco de dados colunar (column-oriented), de alta escalabilidade,
baixa latência, processamento massivo e paralelo, e armazenamento em escala, para o processamento de dados. Simples de
usar, custo efetivo para utilização em data warehouse e data lakes.

**DynamoDB**

O [DynamoDB](https://aws.amazon.com/pt/dynamodb) é um banco de dados NoSQL, sem servidor e totalmente gerenciado,
projetado para executar aplicações de alta performance em qualquer escala.

**Aurora**

O [Aurora](https://aws.amazon.com/pt/rds/aurora) é um banco de dados relacional compatível com MySQL e PostgreSQL. O
Aurora é até cinco vezes mais rápido que bancos de dados MySQL padrão e três vezes mais rápido que bancos de dados
PostgreSQL padrão.

**Características**

- Armazenamento distribuído.
- Tolerante a falhas e com recuperação automática.
- Replicação entre três zonas de disponibilidade.

**Neptune**

O [Neptune](https://aws.amazon.com/pt/neptune) é um serviço de banco de dados gráfico rápido, confiável e totalmente
gerenciado que facilita a criação e a execução de aplicativos.

**Relational Database Service - RDS**

O [RDS](https://aws.amazon.com/pt/rds) é um serviço de banco de dados relacional gerenciado, escalável e de alta
disponibilidade. O RDS oferece seis mecanismos de bancos de dados comuns, incluindo Amazon Aurora, PostgreSQL, MySQL,
MariaDB, Oracle Database e SQL Server.

**Database Migration Service - DMS**

O [DMS](https://aws.amazon.com/pt/dms) é um serviço que permite migrar bancos de dados relacionais, bancos de dados não
relacionais e outros tipos de armazenamentos de dados. O banco de dados de origem permanece totalmente operacional
durante a migração, minimizando o tempo de inatividade de aplicações que dependem do banco de dados.

<div id="computing"></div>

### Computação

**Auto Scaling**

O [Auto Scaling](https://aws.amazon.com/pt/autoscaling) é um serviço que monitora os aplicativos e ajusta
automaticamente a capacidade para manter um desempenho constante e previsível pelo menor custo possível.

**Lambda**

O [Lambda](https://aws.amazon.com/pt/lambda) é um serviço de computação sem servidor e orientado a eventos que permite
executar código para praticamente qualquer tipo de aplicação ou serviço de backend sem provisionar ou gerenciar
servidores.

Lambda functions é um microsserviço (código) que roda na plataforma do AWS Lambda baseado em eventos, também conhecido
como Function as a Service - FaaS.

**Fargate**

O [Fargate](https://aws.amazon.com/pt/fargate) é um mecanismo de computação sem servidor para contêineres. Ele funciona
com o Amazon ECS e o Amazon EKS. Ao usar o Fargate, você não precisa provisionar ou gerenciar servidores. O AWS Fargate
gerencia sua infraestrutura de servidor para você.

**Elastic BeanStalk**

O [Elastic BeanStalk](https://aws.amazon.com/pt/elasticbeanstalk) é um serviço que permite a implantação de aplicações
apenas fornecendo o código fonte, sem conhecimento ou definição prévia da infraestrutura.

**Elastic Compute Cloud - EC2**

O [EC2](https://aws.amazon.com/pt/ec2) é um serviço web que disponibiliza capacidade computacional segura e
redimensionável na nuvem.

**Características**

- Máquina virtual.
- Windows/Linux.
- Baixo custo.
- Configurações e tamanhos variados.
- Seguro.
- Escalável.
- Usado para Big data, ERP, e-commerce e outros.

**Modalidade de gastos**

|  Modalidade   |    Características                                                                                                                     |
|     :---      |       :---                                                                                                                             |
|  `Spot`       |  - Leilão. <br> - O cliente define um preço a pagar pela capacidade ociosa da AWS, se o preço é aceito, a instância é provisionada.    |
|  `Dedicado`   |  - Servidor dedicado. <br> - Preços por hora. <br> - Descontos de até 70%.                                                             |
|  `Reservada`  |  - Reserva por 01 ou 03 anos. <br> - Descontos de até 75%. <br> - Pagamento à vista, ou com entrada e o restante pago em mensalidades. |
|  `On demand`  |  - Sob demanda. <br> - Pay as you go. <br> - Preços por hora.                                                                          |

**Tipos de instância**

Os tipos de instância EC2 são otimizados para tarefas diferentes.

|  Tipos                            |    Características                                                                                                                                         |
|     :---                          |       :---                                                                                                                                                 |
|  `Uso geral`                      |  Fornecem um equilíbrio de recursos de computação, memória e rede.                                                                                         |
|  `Computação acelerada`           |  Usam aceleradores de hardware, ou coprocessadores, para executar algumas funções de forma mais eficiente do que é possível no software executado em CPUs. |
|  `Otimizada para memória`        |  São projetadas para fornecer rápida performance para cargas de trabalho que processam grandes conjuntos de dados na memória.                              |
|  `Otimizada para computação`     |  São ideais para aplicações vinculadas à computação que se beneficiam de processadores de alta performance.                                                |
|  `Otimizada para armazenamento`  |  São projetadas para cargas de trabalho que exigem alto acesso sequencial de leitura e gravação a grandes conjuntos de dados no armazenamento local.       |

**Elastic Load Balancing - ELB**

O [ELB](https://aws.amazon.com/pt/elasticloadbalancing) é um serviço que distribui automaticamente o tráfego de
aplicações de entrada entre vários destinos e dispositivos virtuais em uma ou mais zonas de disponibilidade (AZ).

**Elastic Container Service - ECS**

O [ECS](https://aws.amazon.com/pt/ecs) é um serviço de orquestração de contêineres totalmente gerenciado que facilita a
implantação, o gerenciamento e a escala de aplicações em contêineres.

**Elastic Kubernetes Service - EKS**

O [EKS](https://aws.amazon.com/pt/eks) é um serviço de contêiner gerenciado para executar e escalar aplicações do
Kubernetes na nuvem ou on-premises.

<div id="analytics"></div>

### Data lakes e análises

**EMR**

O [EMR](https://aws.amazon.com/pt/emr) é uma plataforma para processamento, análise e aplicação rápida de machine
learning (ML) em big data usando frameworks de código aberto.

**Glue**

O [Glue](https://aws.amazon.com/pt/glue) é um serviço de integração de dados sem servidor que facilita descobrir,
preparar e combinar dados para análise, machine learning e desenvolvimento de aplicações.

**Athena**

O [Athena](https://aws.amazon.com/pt/athena) é um serviço de consultas interativas que facilita a análise de dados no
Amazon S3 usando SQL padrão. O Athena não precisa de servidor. Portanto, não há infraestrutura para gerenciar e você
paga apenas pelas consultas executadas.

**CloudSearch**

O [CloudSearch](https://aws.amazon.com/pt/cloudsearch) é um serviço gerenciado na nuvem AWS com o qual é possível
configurar, gerenciar e dimensionar uma solução de pesquisa para o seu site ou aplicativo de forma simples e econômica.

<div id="governance"></div>

### Gerenciamento e governança

**Config**

O [Config](https://aws.amazon.com/pt/config) é um serviço que permite acessar, auditar e avaliar as configurações dos
recursos da AWS. O Config monitora e grava continuamente registros das configurações de recursos da AWS e lhe permite
automatizar a avaliação das configurações registradas com base nas configurações desejadas.

**CloudWatch**

O [CloudWatch](https://aws.amazon.com/pt/cloudwatch) é um serviço de monitoração integrado da AWS que permite a coleta,
monitoração, análise e ação sobre os comportamentos dos recursos da AWS. Ele coleta dados de monitoramento e operações
na forma de logs, métricas e eventos.

**CloudTrail**

O [CloudTrail](https://aws.amazon.com/pt/cloudtrail) é um serviço que monitora, registra e retém todas as atividades e
ações realizadas por uma conta AWS na infraestrutura e serviços AWS. Resumindo, ele registra **quem** fez **o que**,
em **qual recurso** e **quando**. É usado principalmente para auxílio a governança, auditoria, segurança, análise de
riscos e outros.

**CloudFormation**

O [CloudFormation](https://aws.amazon.com/pt/cloudformation) é um serviço que permite descrever e modelar toda a
infraestrutura na AWS utilizando um arquivo de texto ou linguagem de programação.

**Características**

- Infraestrutura como código (versionamento).
- Fonte única e confiável para concentrar todos os recursos.
- Permite automação.
- Suporta formato JSON ou YAML.
- Cada design é chamado de stacks (pilhas).

**Trusted Advisor**

O [Trusted Advisor](https://aws.amazon.com/pt/premiumsupport/technology/trusted-advisor) é um serviço que inspeciona seu
ambiente da AWS e fornece recomendações em tempo real de acordo com as melhores práticas da AWS.

O Trusted Advisor avalia seus recursos em relação a cinco pilares:

- Otimização de custo.
- Performance.
- Segurança.
- Tolerância a falhas.
- Limites de serviço.

Algumas verificações são gratuitas e estão inclusas em sua conta da AWS e outras estão disponíveis dependendo do nível
do seu plano de suporte.

<div id="financial_management"></div> 

## Gerenciamento financeiro na nuvem

**Cost Explorer**

O [Cost Explorer](https://aws.amazon.com/pt/aws-cost-management/aws-cost-explorer) é um serviço que permite visualizar,
entender e gerenciar os custos e o uso da AWS ao longo do tempo.

**Budget**

O [Budget](https://aws.amazon.com/pt/aws-cost-management/aws-budgets) é um serviço que permite que você defina
orçamentos personalizados para rastrear seu custo e uso. Você pode escolher ser alertado por e-mail ou notificação SNS
quando o custo real ou previsto, e o uso excederem o limite do seu orçamento.

**Savings Plans**

O [Savings Plans](https://aws.amazon.com/pt/savingsplans) é um modelo de preços flexíveis que oferece preços mais baixos
em comparação com os preços sob demanda, em troca de um compromisso de uso específico (medido em USD/hora) por um
período de um ou três anos. A AWS oferece três tipos de Savings Plans: Compute Savings Plans, EC2 Instance Savings Plans
e Amazon SageMaker Savings Plans.

<div id="application"></div>

### Integração de aplicativos

**Amazon MQ**

O [Amazon MQ](https://aws.amazon.com/pt/amazon-mq) é um serviço gerenciado de agente de mensagens para o Apache ActiveMQ
e RabbitMQ que facilita a configuração e a operação de agentes de mensagens na AWS.

**Simple Queue Service - SQS**

O [SQS](https://aws.amazon.com/pt/sqs) é um serviço de filas de mensagens gerenciado que permite o desacoplamento e a
escalabilidade de microsserviços, sistemas distribuídos e aplicações sem servidor.

**Características**

- Filas e mensagens ilimitadas.
- Retenha as mensagens nas filas por até 14 dias.
- Envie e releia as mensagens simultaneamente.
- Bloqueio de mensagens.
- Compartilhamento de filas.
- Criptografia no lado do servidor.

**Simple Notification Service - SNS**

O [SNS](https://aws.amazon.com/pt/sns) é um serviço de notificação totalmente gerenciado, altamente disponível, seguro e
durável, que permite o desacoplamento de microsserviços, sistemas distribuídos e aplicativos sem servidor.

**Características**

- Criptografia de mensagens.
- Filtro de mensagens.
- Notificações mobile.
- Configuração de privacidade de mensagens.

<div id="security"></div>

### Segurança, identidade e conformidade

**Shield**

O [Shield](https://aws.amazon.com/pt/shield) é um serviço gerenciado de proteção contra DDoS que protege os aplicativos
executados na AWS.

**Cognito**

O [Cognito](https://aws.amazon.com/pt/cognito) é um serviço que permite adicionar cadastramento, login e controle de
acesso de usuários a aplicações web e móveis com rapidez e facilidade.

**Inspector**

O [Inspector](https://aws.amazon.com/pt/inspector) é um serviço e avaliação de segurança automático que ajuda a melhorar
a segurança e a conformidade dos aplicativos implantados na AWS. O Amazon Inspector avalia automaticamente aplicativos
em busca de exposições, vulnerabilidades ou discrepâncias em relação às melhores práticas.

**Organizations**

O [Organizations](https://aws.amazon.com/pt/organizations) é um serviço que ajuda você a gerenciar e controlar seu
ambiente de maneira centralizada à medida que os negócios e seus recursos da AWS expandem.

**Características**

- Gerencia todas as suas contas.
- Permite a consolidação de faturamento (consolidated bills).
- Com muitas contas e grandes volumes de utilização pode-se obter descontos na AWS.
- Políticas de segurança podem ser controladas de forma “organizacional”.

**Web Application Firewall - WAF**

O [WAF](https://aws.amazon.com/pt/waf) é um firewall de aplicações web que ajuda a proteger suas aplicações web ou APIs
contra bots e exploits comuns na web que podem afetar a disponibilidade, comprometer a segurança ou consumir recursos em
excesso.

**Identity and Access Management - IAM**

O [IAM](https://aws.amazon.com/pt/iam) é um serviço que controla o acesso aos recursos na AWS. Ele permite criar e
controlar usuário, autenticação ou limitar acesso de usuário a recursos. Resumindo, o IAM controla **quem** pode fazer
**o que** na sua conta AWS.

**GuardDuty**

O [GuardDuty](https://aws.amazon.com/pt/guardduty) é um serviço de detecção de ameaças que monitora continuamente suas
contas e cargas de trabalho da AWS para atividade maliciosa e fornece resultados de segurança detalhados para
visibilidade e remediação.

**Macie**

O [Macie](https://aws.amazon.com/pt/macie) é um serviço de segurança e privacidade de dados totalmente gerenciado que
usa machine learning e correspondência de padrões para descobrir e proteger seus dados confidenciais na AWS.

<div id="network"></div> 

### Redes e entrega de conteúdo

**Direct Connect**

O [Direct Connect](https://aws.amazon.com/pt/directconnect) é um serviço de nuvem que vincula sua rede diretamente à
AWS, ignorando a internet para oferecer uma performance mais consistente e de menor latência.

**Route 53**

O [Route 53](https://aws.amazon.com/pt/route53) é um serviço DNS altamente disponível e escalável.

**Características**

- Oferece serviços de registro de nome de domínio.
- É possível obter DNS recursivo para o Amazon VPC e as redes on-premises.
- Regras de firewall que filtram o tráfego de DNS de saída em relação a essas regras.
- Gerenciamento de tráfego global.

**CloudFront**

O [CloudFront](https://aws.amazon.com/pt/cloudfront) é um serviço de rede de entrega de conteúdo (CDN) criado para alta
performance, segurança e conveniência do desenvolvedor.

**Virtual Private Cloud - VPC**

A [VPC](https://aws.amazon.com/pt/vpc) é um serviço que oferece controle total sobre seu ambiente de rede virtual,
incluindo posicionamento de recursos, conectividade e segurança.

**Virtual Private Network - VPN**

A [VPN](https://aws.amazon.com/pt/vpn) é um serviço que estabelece conexões seguras entre redes locais, escritórios
remotos, dispositivos de clientes e a rede global da AWS.

**API Gateway**

O [API Gateway](https://aws.amazon.com/pt/api-gateway) é um serviço gerenciado que permite que desenvolvedores criem,
publiquem, mantenham, monitorem e protejam APIs em qualquer escala com facilidade. APIs agem como a “porta de entrada”
para aplicativos acessarem dados, lógica de negócios ou funcionalidade de seus serviços de back-end.

<div id="support"></div> 

## Suporte

Os [planos](https://aws.amazon.com/pt/premiumsupport/plans) de suporte da AWS estão divididos em 04 categorias:

- Basic (está incluído para todos os clientes da AWS).
- [Developer](https://aws.amazon.com/pt/premiumsupport/plans/developers).
- [Business](https://aws.amazon.com/pt/premiumsupport/plans/business).
- [Enterprise](https://aws.amazon.com/pt/premiumsupport/plans/enterprise).

<div id="links"></div> 

## Materiais de apoio

### Guia do exame

- [AWS Certified Cloud Practitioner (CLF-C01)](https://d1.awsstatic.com/pt_BR/training-and-certification/docs-cloud-practitioner/AWS-Certified-Cloud-Practitioner_Exam-Guide.pdf)

### Artigos

- [Glossário da AWS](https://docs.aws.amazon.com/pt_br/general/latest/gr/glos-chap.html)
- [Whitepaper da AWS](https://d1.awsstatic.com/whitepapers/pt_BR/aws-overview.pdf)

### Cursos

- [AWS Cloud Practitioner Essentials](https://explore.skillbuilder.aws/learn/course/8287/aws-cloud-practitioner-essentials-portuguese)
- [AWS Certified Cloud Practitioner - Preparatório AWS CCP](https://www.udemy.com/course/aws-certified-cloud-practitioner-aws-ccp)

### Simulados

- [AWS Certified Cloud Practitioner - Exemplos de Perguntas](https://d1.awsstatic.com/pt_BR/training-and-certification/docs-cloud-practitioner/AWS-Certified-Cloud-Practitioner_Sample-Questions.pdf)
- [AWS Certified Cloud Practitioner - Simulados em Português](https://www.udemy.com/course/aws-practitioner-em-portugues)
