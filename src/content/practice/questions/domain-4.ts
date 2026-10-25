import type { Question } from '../types'

export const enUS: readonly Question[] = [
  {
    id: 'd4-001',
    task: '4.1',
    stem: 'A company runs a steady workload on Amazon EC2 24 hours a day and will keep it running for the next 3 years. The company expects to move the workload to a different instance family and operating system during that time. Which purchasing option provides a discount and allows these changes?',
    options: ['On-Demand Instances', 'Spot Instances', 'Standard Reserved Instances', 'Convertible Reserved Instances'],
    answers: [3],
    reasons: [
      'On-Demand Instances allow any change but give no discount for the long, steady commitment the company can make.',
      'Spot Instances can be interrupted when AWS needs the capacity back, which does not suit a workload that must run 24 hours a day.',
      'Standard Reserved Instances can be modified but cannot be exchanged, so they do not allow a move to a different instance family and operating system.',
      'Convertible Reserved Instances give a discount for a 1 or 3 year term and can be exchanged for a different instance family, operating system and tenancy.',
    ],
    evidence: [
      {
        url: 'https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/reserved-instances-types.html#offering-class-differences',
        quote:
          'Can be exchanged during the term for another Convertible Reserved Instance with new attributes, including instance family, instance type, platform, scope, or tenancy.',
      },
    ],
  },
  {
    id: 'd4-002',
    task: '4.1',
    stem: 'A company runs nightly batch jobs that analyze data. The jobs can be stopped and restarted at any time without affecting the results, and the start time is flexible. Which EC2 purchasing option is the MOST cost-effective?',
    options: ['Spot Instances', 'On-Demand Instances', 'Dedicated Instances', 'On-Demand Capacity Reservations'],
    answers: [0],
    reasons: [
      'Spot Instances use spare EC2 capacity at steep discounts and suit flexible workloads that can be interrupted, such as batch jobs and data analysis.',
      'On-Demand Instances are never interrupted by AWS, but they cost more than Spot for a workload that tolerates interruptions.',
      'Dedicated Instances run on hardware dedicated to one account, which adds cost and solves an isolation need the company does not have.',
      'Capacity Reservations guarantee capacity in an Availability Zone but give no billing discount, which a flexible job does not need.',
    ],
    evidence: [
      {
        url: 'https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-spot-instances.html',
        quote:
          'Spot Instances are a cost-effective choice if you can be flexible about when your applications run and if your applications can be interrupted. For example, Spot Instances are well-suited for data analysis, batch jobs, background processing, and optional tasks.',
      },
    ],
  },
  {
    id: 'd4-003',
    task: '4.1',
    stem: 'A company wants to move an application to Amazon EC2 and keep using its existing software licenses, which are billed per physical core and per socket. The company needs visibility of the sockets and cores of the server. Which purchasing option meets these requirements?',
    options: ['Dedicated Instances', 'Reserved Instances', 'Dedicated Hosts', 'Compute Savings Plans'],
    answers: [2],
    reasons: [
      'Dedicated Instances run on dedicated hardware but give no visibility of sockets and physical cores, so they do not fit per-core and per-socket licenses.',
      'Reserved Instances are a billing discount on instances and do not give control of the physical server.',
      'A Dedicated Host is a physical server fully dedicated to the company, with visibility of sockets and cores, which supports per-socket and per-core licenses.',
      'Compute Savings Plans lower the price of compute usage but do not give visibility of the physical server.',
    ],
    evidence: [
      {
        url: 'https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/dedicated-hosts-overview.html',
        quote:
          'Dedicated Hosts provide comprehensive Bring Your Own License (BYOL) support. They allow you to use your existing per-socket, per-core, or per-VM software licenses, including Windows Server, SQL Server, SUSE Linux Enterprise Server, Red Hat Enterprise Linux, or other software licenses that are bound to VMs, sockets, or physical cores, subject to your license terms.',
      },
    ],
  },
  {
    id: 'd4-004',
    task: '4.1',
    stem: 'A company wants a discount in exchange for a 1 year commitment. Its usage changes often across Amazon EC2 instance families and Regions, and part of it is moving to AWS Fargate and AWS Lambda. Which option provides the MOST flexibility?',
    options: [
      'EC2 Instance Savings Plans',
      'Compute Savings Plans',
      'Standard Reserved Instances',
      'Zonal Reserved Instances',
    ],
    answers: [1],
    reasons: [
      'EC2 Instance Savings Plans commit to one instance family in one Region and do not cover Fargate or Lambda.',
      'Compute Savings Plans apply to EC2 usage in any instance family, size, Region, operating system and tenancy, and also to Fargate and Lambda usage.',
      'Standard Reserved Instances apply to EC2 only, in one Region, and cannot be exchanged for a different instance family.',
      'Zonal Reserved Instances are tied to one Availability Zone and one instance type, which is the least flexible choice.',
    ],
    evidence: [
      {
        url: 'https://docs.aws.amazon.com/savingsplans/latest/userguide/plan-types.html',
        quote:
          'Compute Savings Plans provide the most flexibility and prices that are up to 66% off of On-Demand rates.',
      },
    ],
  },
  {
    id: 'd4-005',
    task: '4.1',
    stem: 'A company uses AWS Organizations with consolidated billing. One member account bought Reserved Instances that it does not fully use. Which statements about these Reserved Instances are correct? (Select TWO.)',
    options: [
      'The discount applies only to usage in the account that bought them',
      'The unused discount can apply to matching usage in other accounts of the organization',
      'Each member account must open a support case to receive the discount',
      'The discount sharing moves the reservation to the management account',
      'The management account can turn off discount sharing for member accounts',
    ],
    answers: [1, 4],
    reasons: [
      'With discount sharing on, the discount benefits the purchasing account first and then other accounts in the organization.',
      'After the purchasing account is covered, the remaining discount can be shared with matching usage in other accounts of the organization.',
      'No support case is needed. Discount sharing is controlled in the billing preferences of the Billing and Cost Management console.',
      'The reservation stays with the account that bought it. Only the discount is shared across the organization.',
      'The management account controls Reserved Instance and Savings Plans discount sharing and can deactivate it for individual member accounts.',
    ],
    evidence: [
      {
        url: 'https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/ri-turn-off.html#sharing-modes',
        quote: 'After satisfying the account owner, remaining benefits can be shared with other organization accounts',
      },
      {
        url: 'https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/ri-turn-off.html#ri-turn-off-process',
        quote: 'You can deactivate sharing discounts for individual member accounts.',
      },
    ],
  },
  {
    id: 'd4-006',
    task: '4.1',
    stem: 'A company is reviewing the data transfer charges of an application that runs on Amazon EC2. Which types of data transfer are free of charge? (Select TWO.)',
    options: [
      'Data transferred in from the internet',
      'Data transferred out to the internet',
      'Data transferred to another AWS Region',
      'Data transferred within the same Availability Zone',
      'Data transferred between Availability Zones in the same Region',
    ],
    answers: [0, 3],
    reasons: [
      'Inbound data transfer from the internet has no charge across all services in all Regions.',
      'Data transfer from AWS to the internet is charged per service, with rates specific to the source Region.',
      'Data transfer across Regions is charged, with a rate that depends on the source and destination Regions.',
      'Data transfer within the same Availability Zone is free.',
      'Traffic that crosses an Availability Zone boundary typically incurs a data transfer charge.',
    ],
    evidence: [
      {
        url: 'https://aws.amazon.com/blogs/architecture/overview-of-data-transfer-costs-for-common-architectures/',
        quote: 'There is no charge for inbound data transfer across all services in all Regions.',
      },
      {
        url: 'https://aws.amazon.com/ec2/pricing/on-demand/#Data_Transfer_within_the_same_AWS_Region',
        quote:
          'Data transferred between Amazon EC2, Amazon RDS, Amazon Redshift, Amazon ElastiCache instances, and Elastic Network Interfaces in the same Availability Zone is free.',
      },
    ],
  },
  {
    id: 'd4-007',
    task: '4.1',
    stem: 'A company stores data in Amazon S3 and cannot predict how often each object will be accessed. The company wants to lower storage costs automatically without paying retrieval fees. Which storage class meets these requirements?',
    options: [
      'S3 Standard-Infrequent Access',
      'S3 One Zone-Infrequent Access',
      'S3 Glacier Flexible Retrieval',
      'S3 Intelligent-Tiering',
    ],
    answers: [3],
    reasons: [
      'S3 Standard-IA charges a retrieval fee and does not move objects automatically when their access pattern changes.',
      'S3 One Zone-IA stores data in a single Availability Zone, charges for retrievals and does not adapt to changing access patterns.',
      'S3 Glacier Flexible Retrieval is for archives and requires a retrieval before the data can be read, which does not fit unpredictable access.',
      'S3 Intelligent-Tiering moves objects to lower-cost access tiers when they are not accessed and has no retrieval charges, for a small monitoring fee.',
    ],
    evidence: [
      {
        url: 'https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage-class-intro.html#sc-dynamic-data-access',
        quote:
          'S3 Intelligent-Tiering is the ideal storage class when you want to optimize storage costs for data that has unknown or changing access patterns. There are no retrieval fees for S3 Intelligent-Tiering.',
      },
    ],
  },
  {
    id: 'd4-008',
    task: '4.2',
    stem: 'A company wants to receive an email when its forecasted monthly AWS costs exceed a set amount, before the costs are incurred. Which AWS service meets this requirement?',
    options: ['AWS Cost Explorer', 'AWS Budgets', 'AWS Pricing Calculator', 'AWS Cost and Usage Report'],
    answers: [1],
    reasons: [
      'Cost Explorer analyzes and forecasts costs in charts, but it is not the service that sends alerts when a threshold is crossed.',
      'AWS Budgets sends notifications by email or Amazon SNS when actual or forecasted costs exceed the budgeted amount.',
      'Pricing Calculator estimates the cost of a planned solution and does not monitor real spending.',
      'The Cost and Usage Report delivers detailed billing files to Amazon S3 and does not send alerts.',
    ],
    evidence: [
      {
        url: 'https://docs.aws.amazon.com/cost-management/latest/userguide/budgets-managing-costs.html',
        quote:
          'You can set up optional notifications that warn you if you exceed, or are forecasted to exceed, your budgeted amount for cost or usage budgets.',
      },
    ],
  },
  {
    id: 'd4-009',
    task: '4.2',
    stem: 'A finance team wants to view the AWS costs of the last 12 months in charts, grouped by service, and see a forecast of spending for the coming months. Which AWS service should the team use?',
    options: ['AWS Budgets', 'AWS Pricing Calculator', 'AWS Cost Explorer', 'AWS Trusted Advisor'],
    answers: [2],
    reasons: [
      'AWS Budgets tracks spending against a target and alerts, but it is not the tool for exploring the cost history by service in charts.',
      'Pricing Calculator estimates the cost of services before they are used, not the costs already incurred.',
      'Cost Explorer shows up to the last 13 months of costs and usage, with filters and groupings, and forecasts spending for the coming months.',
      'Trusted Advisor gives best practice recommendations, including cost savings, but does not chart the cost history.',
    ],
    evidence: [
      {
        url: 'https://docs.aws.amazon.com/cost-management/latest/userguide/ce-what-is.html',
        quote:
          "You can view data for up to the last 13 months, forecast how much you're likely to spend for the next 18 months, and get recommendations for what Reserved Instances to purchase.",
      },
    ],
  },
  {
    id: 'd4-010',
    task: '4.2',
    stem: 'A company that does not yet have an AWS account wants to estimate the monthly cost of moving its application to AWS and share the estimate with its managers. Which AWS tool meets this requirement?',
    options: ['AWS Pricing Calculator', 'AWS Cost Explorer', 'AWS Budgets', 'AWS Cost and Usage Report'],
    answers: [0],
    reasons: [
      'Pricing Calculator is a free web tool that models solutions before they are built, and estimates can be saved as a link or exported to CSV or PDF.',
      'Cost Explorer analyzes the costs of an existing account, so it has no data for a workload that does not run on AWS yet.',
      'AWS Budgets tracks costs that the account incurs and cannot estimate a workload that is not on AWS.',
      'The Cost and Usage Report details the usage of an existing account and has no data before the migration.',
    ],
    evidence: [
      {
        url: 'https://docs.aws.amazon.com/pricing-calculator/latest/userguide/what-is-pricing-calculator.html#features-apc',
        quote: 'Save your estimates – Save the link to each estimate to share or revisit at a later time.',
      },
    ],
  },
  {
    id: 'd4-011',
    task: '4.2',
    stem: 'A company has several AWS accounts and is considering the consolidated billing feature of AWS Organizations. Which benefits does consolidated billing provide? (Select TWO.)',
    options: [
      'One bill for multiple accounts',
      'Business Support+ for member accounts at no cost',
      'Combined usage across accounts for volume pricing discounts',
      'A separate invoice that each member account pays',
      'Automatic rightsizing of instances in member accounts',
    ],
    answers: [0, 2],
    reasons: [
      'The management account receives one bill and pays the charges of all member accounts.',
      'Consolidated billing has no extra fee, but it does not include a support plan for the member accounts.',
      'Usage is combined across all accounts, which shares volume pricing discounts, Reserved Instance discounts and Savings Plans.',
      'The management account pays the charges of all member accounts. Member account bills are for information only.',
      'Consolidated billing changes how charges are paid and combined, and does not resize any resource.',
    ],
    evidence: [
      {
        url: 'https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/consolidated-billing.html',
        quote:
          'Every organization in AWS Organizations has a management account that pays the charges of all the member accounts',
      },
      {
        url: 'https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/consolidated-billing.html',
        quote:
          'You can combine the usage across all accounts in the organization. This shares the volume pricing discounts, Reserved Instance discounts, and Savings Plans.',
      },
    ],
  },
  {
    id: 'd4-012',
    task: '4.2',
    stem: 'A company added a `CostCenter` tag to all of its resources so that it can split costs by department. The tag does not appear in AWS Cost Explorer or in the billing reports. What should the company do?',
    options: [
      'Apply the tag again by using AWS Tag Editor',
      'Enable AWS Budgets for each department',
      'Move each department to its own Region',
      'Activate the tag as a cost allocation tag',
    ],
    answers: [3],
    reasons: [
      'The tag is already applied to the resources. Applying it again does not make it show up in billing reports.',
      'Budgets track spending against targets, but they do not make a tag appear in billing reports.',
      'Regions do not split costs by department, and the tag would still not appear in the reports.',
      'User-defined tags must be activated in the Billing and Cost Management console before they appear in Cost Explorer and billing reports.',
    ],
    evidence: [
      {
        url: 'https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/activating-tags.html',
        quote:
          'For tags to appear on your billing reports, you must activate them. Your user-defined cost allocation tags represent the tag key, which you activate in the Billing and Cost Management console.',
      },
    ],
  },
  {
    id: 'd4-013',
    task: '4.2',
    stem: 'A company wants the most detailed cost and usage data available, with line items by resource and by cost allocation tag, delivered to an Amazon S3 bucket so that it can query the data with Amazon Athena. Which AWS tool meets this requirement?',
    options: ['AWS Budgets', 'AWS Cost and Usage Report', 'AWS Pricing Calculator', 'AWS Trusted Advisor'],
    answers: [1],
    reasons: [
      'AWS Budgets tracks spending against targets and sends alerts, but it does not deliver detailed billing files to Amazon S3.',
      'The Cost and Usage Report contains the most comprehensive cost and usage data, broken down by resource and tags, and delivers it to an S3 bucket for queries with Athena.',
      'Pricing Calculator estimates future costs and does not report on real usage.',
      'Trusted Advisor checks the account against best practices and does not produce billing data.',
    ],
    evidence: [
      {
        url: 'https://docs.aws.amazon.com/cur/latest/userguide/what-is-cur.html',
        quote:
          'AWS Cost and Usage Reports (AWS CUR) contains the most comprehensive set of cost and usage data available. You can use Cost and Usage Reports to publish your AWS billing reports to an Amazon Simple Storage Service (Amazon S3) bucket that you own.',
      },
    ],
  },
  {
    id: 'd4-014',
    task: '4.2',
    stem: 'A company on the Basic Support plan has a question about an unexpected charge on its AWS bill. What is the MOST direct way to get help?',
    options: [
      'Upgrade to Business Support+ and open a technical case',
      'Post the question on AWS re:Post',
      'Open an account and billing case in the AWS Support Center',
      'Contact the AWS Trust & Safety team',
    ],
    answers: [2],
    reasons: [
      'A paid plan is needed only for technical support. Account and billing support is free for all account owners.',
      're:Post is a community Q&A site, which is not where AWS handles questions about the charges of a specific account.',
      'All account owners have account and billing support at no cost, and a case in the Support Center reaches an associate directly.',
      'Trust & Safety handles reports of abuse of AWS resources, not billing questions.',
    ],
    evidence: [
      {
        url: 'https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-get-answers.html#billing-support',
        quote:
          'Contacting Support is the fastest and most direct method for communicating with an AWS associate about your questions.',
      },
    ],
  },
  {
    id: 'd4-015',
    task: '4.3',
    stem: 'A small company is starting to run production workloads on AWS. It needs 24/7 access to AWS experts by phone, chat and email for technical issues at the LOWEST cost. Which AWS Support plan meets these requirements?',
    options: ['Basic Support', 'AWS Business Support+', 'AWS Enterprise Support', 'AWS Unified Operations'],
    answers: [1],
    reasons: [
      'Basic Support includes customer service for account and billing questions, but not technical support from AWS engineers.',
      'Business Support+ is the entry paid plan, with 24/7 access to AWS experts, and AWS recommends it as the minimum plan for production workloads.',
      'Enterprise Support meets the requirement but adds a designated TAM and other services at a much higher minimum price.',
      'Unified Operations is the highest tier, for mission-critical operations, which costs more than the company needs.',
    ],
    evidence: [
      {
        url: 'https://aws.amazon.com/premiumsupport/plans/#recommended-for',
        quote: 'Minimum recommended plan for production workloads by AWS.',
      },
    ],
  },
  {
    id: 'd4-016',
    task: '4.3',
    stem: 'A company runs business-critical workloads on AWS. It wants a designated Technical Account Manager (TAM) for strategic guidance and a response within 15 minutes for production-critical issues. Which option meets these requirements?',
    options: ['Basic Support', 'AWS Business Support+', 'AWS Enterprise Support', 'AWS Professional Services'],
    answers: [2],
    reasons: [
      'Basic Support has no technical support cases and no TAM.',
      'Business Support+ responds within 30 minutes for critical cases and does not include a designated TAM.',
      'Enterprise Support includes a designated TAM and a response within 15 minutes for production-critical issues.',
      'Professional Services delivers consulting engagements for projects such as migrations, not a support plan with response times.',
    ],
    evidence: [
      {
        url: 'https://aws.amazon.com/premiumsupport/plans/enterprise/#benefits',
        quote:
          'Achieve operational efficiency through your designated Technical Account Manager who leverages AI-powered insights to identify optimization opportunities and guide strategic initiatives. For production-critical issues, get a response within 15 minutes* from support engineers who receive personalized context about your environment.',
      },
    ],
  },
  {
    id: 'd4-017',
    task: '4.3',
    stem: 'A company runs mission-critical operations on AWS. It wants 24/7 monitoring of its workloads and a response within 5 minutes from AWS Incident Management Engineers during critical incidents. Which AWS Support plan meets these requirements?',
    options: ['Basic Support', 'AWS Business Support+', 'AWS Enterprise Support', 'AWS Unified Operations'],
    answers: [3],
    reasons: [
      'Basic Support offers customer service and documentation, without technical support or workload monitoring.',
      'Business Support+ responds within 30 minutes for critical cases and does not include 24/7 workload monitoring.',
      'Enterprise Support responds within 15 minutes for critical cases, which does not meet the 5 minute requirement.',
      'Unified Operations is the highest tier, with 24/7 monitoring and Incident Management Engineers who respond within 5 minutes.',
    ],
    evidence: [
      {
        url: 'https://aws.amazon.com/premiumsupport/plans/unified-operations/#operational-excellence-at-scale',
        quote:
          'With 24/7 security and performance monitoring, we detect and mitigate incidents early while reducing alert volume. When a critical incident occurs, we respond within five-minutes with context of your environment, to further shorten resolution time and help you maintain peak operational performance.',
      },
    ],
  },
  {
    id: 'd4-018',
    task: '4.3',
    stem: 'Which features are included in the Basic Support plan at no additional cost? (Select TWO.)',
    options: [
      'Technical support cases with AWS engineers',
      '24/7 customer service for account and billing questions',
      'A designated Technical Account Manager',
      'Core AWS Trusted Advisor checks',
      'Access to the AWS Health API',
    ],
    answers: [1, 3],
    reasons: [
      'Technical support cases require a paid plan such as Business Support+.',
      'Every plan, including Basic, has 24/7 access to customer service for account and billing questions.',
      'A designated TAM is part of the Enterprise Support plan.',
      'Basic includes the core Trusted Advisor checks. The full set of checks requires a paid plan.',
      'The AWS Health API requires Business Support+, Enterprise Support or Unified Operations. Basic includes the AWS Health Dashboard.',
    ],
    evidence: [
      {
        url: 'https://docs.aws.amazon.com/awssupport/latest/user/aws-support-plans.html#features',
        quote:
          'All AWS customers automatically have 24x7 access to these features of Basic Support: One-on-one responses to account and billing questions',
      },
      {
        url: 'https://aws.amazon.com/premiumsupport/plans/#basic-support-included-for-all-aws-customers',
        quote:
          'Core checks and guidance to provision your resources following best practices to increase performance and improve security.',
      },
    ],
  },
  {
    id: 'd4-019',
    task: '4.3',
    stem: 'A company notices that an IP address that belongs to AWS is sending port scans and intrusion attempts to its servers. Whom should the company report this activity to?',
    options: ['AWS Trust & Safety', 'AWS Support Center', 'AWS Professional Services', 'AWS Partner Network'],
    answers: [0],
    reasons: [
      'The AWS Trust & Safety team receives reports of activity or content on AWS that is suspected to be abusive.',
      'AWS Support handles questions about your own account and technical issues, and does not handle abuse reports.',
      'Professional Services delivers consulting engagements and does not investigate abuse.',
      'The Partner Network is a community of partners that build on AWS and does not receive abuse reports.',
    ],
    evidence: [
      {
        url: 'https://aws.amazon.com/about-aws/whats-new/2024/10/aws-trust-safety-center-re-post/',
        quote:
          'The AWS Trust & Safety Center provides AWS customers with information on how to report activity or content on AWS that they suspect is abusive, and how to handle abuse notices sent by AWS Trust & Safety.',
      },
    ],
  },
  {
    id: 'd4-020',
    task: '4.3',
    stem: 'A developer on the Basic Support plan wants to ask a technical question and receive answers from a community of AWS customers, Partners and AWS employees. Which AWS resource meets this requirement?',
    options: ['AWS Knowledge Center', 'AWS Prescriptive Guidance', 'AWS Trusted Advisor', 'AWS re:Post'],
    answers: [3],
    reasons: [
      'Knowledge Center has articles written by AWS that answer frequent questions, but it is not where a developer posts a new question.',
      'Prescriptive Guidance publishes guides and patterns from AWS experts, not community answers to individual questions.',
      'Trusted Advisor checks the account against best practices and does not answer questions.',
      're:Post is a community-driven Q&A service where community experts, including AWS customers, Partners, and employees, answer questions.',
    ],
    evidence: [
      {
        url: 'https://aws.amazon.com/about-aws/whats-new/2021/12/aws-repost-community-question-answer-service/',
        quote:
          'AWS re:Post enables you to ask questions about anything related to designing, building, deploying, and operating workloads on AWS, and get answers from community experts, including AWS customers, Partners, and employees.',
      },
    ],
  },
  {
    id: 'd4-021',
    task: '4.3',
    stem: 'A company is planning a large migration to AWS. Its team wants guides and patterns from AWS experts that include steps, architectures, tools and code for common migration and modernization scenarios. Which AWS resource should the team use?',
    options: ['AWS Prescriptive Guidance', 'AWS re:Post', 'AWS Knowledge Center', 'AWS Health Dashboard'],
    answers: [0],
    reasons: [
      'Prescriptive Guidance offers guides and patterns from AWS experts with steps, architectures, tools and code for migration, optimization and modernization.',
      're:Post is a community Q&A site, which answers individual questions instead of providing planned guidance for a migration.',
      'Knowledge Center answers frequent questions in short articles and does not provide migration patterns.',
      'The Health Dashboard shows events that affect AWS services and resources and has no migration guidance.',
    ],
    evidence: [
      {
        url: 'https://docs.aws.amazon.com/prescriptive-guidance/latest/patterns/welcome.html',
        quote:
          'Amazon Web Services (AWS) Prescriptive Guidance patterns provide step-by-step instructions, architecture, tools, and code for implementing specific cloud migration, modernization, and deployment scenarios.',
      },
    ],
  },
  {
    id: 'd4-022',
    task: '4.3',
    stem: 'A company wants to lower its AWS bill by finding idle load balancers, Elastic IP addresses that are not associated with running instances and Amazon EC2 instances with low utilization. Which AWS service provides these checks?',
    options: ['AWS Health Dashboard', 'AWS Budgets', 'AWS Trusted Advisor', 'AWS Pricing Calculator'],
    answers: [2],
    reasons: [
      'The Health Dashboard reports events that affect AWS services and resources, not unused resources that waste money.',
      'AWS Budgets alerts when spending crosses a threshold but does not identify the resources that cause the waste.',
      'Trusted Advisor cost optimization checks include idle load balancers, unassociated Elastic IP addresses and low utilization EC2 instances.',
      'Pricing Calculator estimates the cost of planned services and does not inspect the resources in the account.',
    ],
    evidence: [
      {
        url: 'https://docs.aws.amazon.com/awssupport/latest/user/cost-optimization-checks.html#idle-load-balancers',
        quote: 'Checks your Elastic Load Balancing configuration for load balancers that are idle.',
      },
    ],
  },
  {
    id: 'd4-023',
    task: '4.3',
    stem: 'A company wants its own operations tools to receive events about AWS scheduled maintenance and service issues that affect its resources, without anyone checking the console. Which AWS option meets this requirement?',
    options: ['AWS Trusted Advisor', 'AWS Health API', 'AWS Cost Explorer', 'AWS Budgets'],
    answers: [1],
    reasons: [
      'Trusted Advisor checks the account against best practices, but it does not report AWS events that affect the resources.',
      'The AWS Health API gives programmatic access to the same events shown in the AWS Health Dashboard, so other systems can consume them.',
      'Cost Explorer analyzes costs and usage and does not report service events.',
      'AWS Budgets sends alerts about spending and usage, not about maintenance or service issues.',
    ],
    evidence: [
      {
        url: 'https://docs.aws.amazon.com/health/latest/ug/what-is-aws-health.html',
        quote:
          'If you have an AWS Business Support+, AWS Enterprise Support, or AWS Unified Operations plan, you can use the AWS Health API to integrate with in-house and third-party systems.',
      },
    ],
  },
  {
    id: 'd4-024',
    task: '4.3',
    stem: 'A company plans to buy third-party security software through AWS Marketplace. Which benefits does AWS Marketplace provide? (Select TWO.)',
    options: [
      'AWS provides technical support for every third-party product',
      'Every listing is free for the first 12 months',
      'Charges for the software appear on the AWS bill',
      'Third-party software is exempt from the shared responsibility model',
      'Flexible pricing options, including free trials and Bring Your Own License',
    ],
    answers: [2, 4],
    reasons: [
      'The seller defines the product and its terms of use. AWS curates the catalog but does not support every third-party product.',
      'Products can be free or have a charge set by the seller. There is no general 12 month free period.',
      'AWS handles billing and payments, and the charges appear on the AWS bill.',
      'Running third-party software does not change the shared responsibility model. The customer still secures what it deploys.',
      'Marketplace offers free trial, hourly, monthly, annual, multi-year and Bring Your Own License pricing, all billed from one source.',
    ],
    evidence: [
      {
        url: 'https://docs.aws.amazon.com/marketplace/latest/buyerguide/what-is-marketplace.html',
        quote:
          'All of these pricing options are billed from one source. AWS handles billing and payments, and charges appear on your AWS bill.',
      },
      {
        url: 'https://docs.aws.amazon.com/marketplace/latest/buyerguide/what-is-marketplace.html',
        quote:
          'Flexible pricing options include free trial, hourly, monthly, annual, multi-year, and a Bring Your Own License (BYOL) model. All of these pricing options are billed from one source.',
      },
    ],
  },
  {
    id: 'd4-025',
    task: '4.3',
    stem: 'A company wants to hire a third-party consulting firm with proven AWS expertise to plan and carry out the migration of its data center to AWS. Where should the company look for this firm?',
    options: ['AWS Partner Network', 'AWS Professional Services', 'AWS Prescriptive Guidance', 'AWS re:Post'],
    answers: [0],
    reasons: [
      'The AWS Partner Network includes consulting and services partners, such as system integrators, that help customers migrate and build on AWS.',
      'Professional Services is a team from AWS itself, not a third-party firm.',
      'Prescriptive Guidance publishes guides and patterns, but it does not provide a firm to carry out the migration.',
      're:Post answers questions from the community, but it does not provide a firm to run a migration project.',
    ],
    evidence: [
      {
        url: 'https://aws.amazon.com/migration-and-modernization/partners/#transform-your-cloud-migration-with-aws-partners-and-modernize-with-confidence',
        quote:
          'AWS Partners enable cloud transformation with proven expertise in migrating and modernizing mission-critical workloads.',
      },
    ],
  },
]

export const ptBR: readonly Question[] = [
  {
    id: 'd4-001',
    task: '4.1',
    stem: 'Uma empresa executa uma carga de trabalho constante no Amazon EC2 24 horas por dia e vai mantê-la nos próximos 3 anos. A empresa espera mudar a carga para outra família de instâncias e outro sistema operacional nesse período. Qual opção de compra oferece desconto e permite essas mudanças?',
    options: ['On-Demand Instances', 'Spot Instances', 'Standard Reserved Instances', 'Convertible Reserved Instances'],
    answers: [3],
    reasons: [
      'On-Demand Instances permitem qualquer mudança, mas não dão desconto pelo compromisso longo e constante que a empresa pode assumir.',
      'Spot Instances podem ser interrompidas quando a AWS precisa da capacidade de volta, o que não serve para uma carga que precisa rodar 24 horas por dia.',
      'Standard Reserved Instances podem ser modificadas, mas não podem ser trocadas, então não permitem mudar de família de instâncias e de sistema operacional.',
      'Convertible Reserved Instances dão desconto por um prazo de 1 ou 3 anos e podem ser trocadas por outra família de instâncias, sistema operacional e tenancy.',
    ],
    evidence: [
      {
        url: 'https://docs.aws.amazon.com/pt_br/AWSEC2/latest/UserGuide/reserved-instances-types.html#offering-class-differences',
        quote:
          'Pode ser trocada durante o período de vigência por outra Instância reservada convertível com novos atributos, incluindo a família de instâncias, o tipo de instância, a plataforma, o escopo ou a locação.',
      },
    ],
  },
  {
    id: 'd4-002',
    task: '4.1',
    stem: 'Uma empresa executa jobs em lote todas as noites para analisar dados. Os jobs podem ser parados e reiniciados a qualquer momento sem afetar o resultado, e o horário de início é flexível. Qual opção de compra do EC2 é a MAIS econômica?',
    options: ['Spot Instances', 'On-Demand Instances', 'Dedicated Instances', 'On-Demand Capacity Reservations'],
    answers: [0],
    reasons: [
      'Spot Instances usam a capacidade ociosa do EC2 com grandes descontos e servem para cargas flexíveis que toleram interrupção, como jobs em lote e análise de dados.',
      'On-Demand Instances nunca são interrompidas pela AWS, mas custam mais que Spot para uma carga que tolera interrupções.',
      'Dedicated Instances rodam em hardware dedicado a uma conta, o que aumenta o custo e resolve uma necessidade de isolamento que a empresa não tem.',
      'Capacity Reservations garantem capacidade em uma Zona de Disponibilidade, mas não dão desconto na cobrança, e um job flexível não precisa dessa garantia.',
    ],
    evidence: [
      {
        url: 'https://docs.aws.amazon.com/pt_br/AWSEC2/latest/UserGuide/using-spot-instances.html',
        quote:
          'As Instâncias spot são uma opção econômica se houver flexibilidade quanto ao momento em que as aplicações serão executadas e se as aplicações poderão ser interrompidas. Por exemplo, as Instâncias spot são adequadas para análise de dados, trabalhos em lote, processamento em segundo plano e tarefas opcionais.',
      },
    ],
  },
  {
    id: 'd4-003',
    task: '4.1',
    stem: 'Uma empresa quer levar uma aplicação para o Amazon EC2 e continuar usando suas licenças de software atuais, cobradas por núcleo físico e por soquete. A empresa precisa de visibilidade dos soquetes e núcleos do servidor. Qual opção de compra atende a esses requisitos?',
    options: ['Dedicated Instances', 'Reserved Instances', 'Dedicated Hosts', 'Compute Savings Plans'],
    answers: [2],
    reasons: [
      'Dedicated Instances rodam em hardware dedicado, mas não dão visibilidade de soquetes e núcleos físicos, então não servem para licenças por núcleo e por soquete.',
      'Reserved Instances são um desconto na cobrança das instâncias e não dão controle sobre o servidor físico.',
      'Um Dedicated Host é um servidor físico inteiro dedicado à empresa, com visibilidade de soquetes e núcleos, o que permite licenças por soquete e por núcleo.',
      'Compute Savings Plans reduzem o preço do uso de computação, mas não dão visibilidade do servidor físico.',
    ],
    evidence: [
      {
        url: 'https://docs.aws.amazon.com/pt_br/AWSEC2/latest/UserGuide/dedicated-hosts-overview.html',
        quote:
          'O hosts dedicados fornecem compatibilidade abrangente com o modelo traga a sua própria licença (BYOL). Eles permitem que você use suas licenças de software existentes por soquete, por núcleo ou por VM, incluindo o Windows Server, o SQL Server, o SUSE Linux Enterprise Server, o Red Hat Enterprise Linux ou outras licenças de software vinculadas a VMs, soquetes ou núcleos físicos, de acordo com os termos de sua licença.',
      },
    ],
  },
  {
    id: 'd4-004',
    task: '4.1',
    stem: 'Uma empresa quer um desconto em troca de um compromisso de 1 ano. O uso dela muda com frequência entre famílias de instâncias do Amazon EC2 e entre Regiões, e parte dele está migrando para o AWS Fargate e o AWS Lambda. Qual opção oferece MAIS flexibilidade?',
    options: [
      'EC2 Instance Savings Plans',
      'Compute Savings Plans',
      'Standard Reserved Instances',
      'Zonal Reserved Instances',
    ],
    answers: [1],
    reasons: [
      'EC2 Instance Savings Plans se comprometem com uma família de instâncias em uma Região e não cobrem Fargate nem Lambda.',
      'Compute Savings Plans se aplicam ao uso do EC2 em qualquer família, tamanho, Região, sistema operacional e tenancy, e também ao uso de Fargate e Lambda.',
      'Standard Reserved Instances valem só para o EC2, em uma Região, e não podem ser trocadas por outra família de instâncias.',
      'Zonal Reserved Instances ficam presas a uma Zona de Disponibilidade e a um tipo de instância, que é a opção menos flexível.',
    ],
    evidence: [
      {
        url: 'https://docs.aws.amazon.com/pt_br/savingsplans/latest/userguide/plan-types.html',
        quote:
          'Os Compute Savings Plans oferecem a maior flexibilidade e preços com até 66% de desconto nas tarifas sob demanda.',
      },
    ],
  },
  {
    id: 'd4-005',
    task: '4.1',
    stem: 'Uma empresa usa o AWS Organizations com faturamento consolidado. Uma conta membro comprou Reserved Instances que não usa por completo. Quais afirmações sobre essas Reserved Instances estão corretas? (Selecione DUAS.)',
    options: [
      'O desconto vale apenas para o uso da conta que as comprou',
      'O desconto não usado pode valer para o uso compatível em outras contas da organização',
      'Cada conta membro precisa abrir um caso de suporte para receber o desconto',
      'O compartilhamento do desconto transfere a reserva para a conta de gerenciamento',
      'A conta de gerenciamento pode desativar o compartilhamento de desconto para contas membro',
    ],
    answers: [1, 4],
    reasons: [
      'Com o compartilhamento ativo, o desconto beneficia primeiro a conta que comprou e depois as outras contas da organização.',
      'Depois de cobrir a conta que comprou, o desconto que sobra pode ser compartilhado com o uso compatível em outras contas da organização.',
      'Não é preciso caso de suporte. O compartilhamento é controlado nas preferências de faturamento do console do Billing and Cost Management.',
      'A reserva continua na conta que a comprou. Só o desconto é compartilhado na organização.',
      'A conta de gerenciamento controla o compartilhamento de desconto de Reserved Instances e Savings Plans e pode desativá-lo para contas membro específicas.',
    ],
    evidence: [
      {
        url: 'https://docs.aws.amazon.com/pt_br/awsaccountbilling/latest/aboutv2/ri-turn-off.html#sharing-modes',
        quote:
          'Depois de satisfazer o proprietário da conta, os benefícios restantes podem ser compartilhados com outras contas da organização',
      },
      {
        url: 'https://docs.aws.amazon.com/pt_br/awsaccountbilling/latest/aboutv2/ri-turn-off.html#ri-turn-off-process',
        quote: 'Você pode desativar descontos de compartilhamento para contas de membros individuais.',
      },
    ],
  },
  {
    id: 'd4-006',
    task: '4.1',
    stem: 'Uma empresa está revisando as cobranças de transferência de dados de uma aplicação que roda no Amazon EC2. Quais tipos de transferência de dados são gratuitos? (Selecione DUAS.)',
    options: [
      'Dados que entram vindos da internet',
      'Dados que saem para a internet',
      'Dados transferidos para outra Região da AWS',
      'Dados transferidos dentro da mesma Zona de Disponibilidade',
      'Dados transferidos entre Zonas de Disponibilidade da mesma Região',
    ],
    answers: [0, 3],
    reasons: [
      'A transferência de entrada vinda da internet não tem cobrança em nenhum serviço e em nenhuma Região.',
      'A transferência da AWS para a internet é cobrada por serviço, com preços que dependem da Região de origem.',
      'A transferência entre Regiões é cobrada, com um preço que depende das Regiões de origem e de destino.',
      'A transferência de dados dentro da mesma Zona de Disponibilidade é gratuita.',
      'O tráfego que atravessa a fronteira de uma Zona de Disponibilidade normalmente gera cobrança de transferência de dados.',
    ],
    evidence: [
      {
        url: 'https://aws.amazon.com/pt/blogs/architecture/overview-of-data-transfer-costs-for-common-architectures/',
        quote: 'There is no charge for inbound data transfer across all services in all Regions.',
      },
      {
        url: 'https://aws.amazon.com/pt/ec2/pricing/on-demand/#Data_Transfer_within_the_same_AWS_Region',
        quote:
          'Os dados transferidos entre instâncias dos serviços Amazon EC2, Amazon RDS, Amazon Redshift, Amazon ElastiCache e interfaces de rede elásticas na mesma zona de disponibilidade não são cobrados.',
      },
    ],
  },
  {
    id: 'd4-007',
    task: '4.1',
    stem: 'Uma empresa guarda dados no Amazon S3 e não consegue prever com que frequência cada objeto será acessado. A empresa quer reduzir o custo de armazenamento automaticamente, sem pagar taxas de recuperação. Qual classe de armazenamento atende a esses requisitos?',
    options: [
      'S3 Standard-Infrequent Access',
      'S3 One Zone-Infrequent Access',
      'S3 Glacier Flexible Retrieval',
      'S3 Intelligent-Tiering',
    ],
    answers: [3],
    reasons: [
      'O S3 Standard-IA cobra taxa de recuperação e não move os objetos automaticamente quando o padrão de acesso muda.',
      'O S3 One Zone-IA guarda os dados em uma única Zona de Disponibilidade, cobra pelas recuperações e não se adapta a mudanças no padrão de acesso.',
      'O S3 Glacier Flexible Retrieval é para arquivamento e exige uma recuperação antes da leitura, o que não serve para acesso imprevisível.',
      'O S3 Intelligent-Tiering move os objetos para camadas de acesso mais baratas quando não são acessados e não cobra recuperação, mediante uma pequena taxa de monitoramento.',
    ],
    evidence: [
      {
        url: 'https://docs.aws.amazon.com/pt_br/AmazonS3/latest/userguide/storage-class-intro.html#sc-dynamic-data-access',
        quote:
          'O S3 Intelligent-Tiering é a classe de armazenamento ideal quando você quer otimizar os custos de armazenamento dos dados com padrões de acesso desconhecidos ou variáveis. Não há taxas de recuperação para o S3 Intelligent-Tiering.',
      },
    ],
  },
  {
    id: 'd4-008',
    task: '4.2',
    stem: 'Uma empresa quer receber um e-mail quando a previsão dos custos mensais na AWS ultrapassar um valor definido, antes que os custos aconteçam. Qual serviço da AWS atende a esse requisito?',
    options: ['AWS Cost Explorer', 'AWS Budgets', 'AWS Pricing Calculator', 'AWS Cost and Usage Report'],
    answers: [1],
    reasons: [
      'O Cost Explorer analisa e prevê custos em gráficos, mas não é o serviço que envia alertas quando um limite é ultrapassado.',
      'O AWS Budgets envia notificações por e-mail ou Amazon SNS quando os custos reais ou previstos ultrapassam o valor do orçamento.',
      'O Pricing Calculator estima o custo de uma solução planejada e não monitora o gasto real.',
      'O Cost and Usage Report entrega arquivos detalhados de cobrança no Amazon S3 e não envia alertas.',
    ],
    evidence: [
      {
        url: 'https://docs.aws.amazon.com/pt_br/cost-management/latest/userguide/budgets-managing-costs.html',
        quote:
          'Você pode configurar notificações opcionais que avisarão se você exceder (ou estiver previsto para exceder) o valor orçado para custo ou uso.',
      },
    ],
  },
  {
    id: 'd4-009',
    task: '4.2',
    stem: 'Uma equipe de finanças quer ver em gráficos os custos da AWS dos últimos 12 meses, agrupados por serviço, e uma previsão de gastos para os próximos meses. Qual serviço da AWS a equipe deve usar?',
    options: ['AWS Budgets', 'AWS Pricing Calculator', 'AWS Cost Explorer', 'AWS Trusted Advisor'],
    answers: [2],
    reasons: [
      'O AWS Budgets acompanha o gasto em relação a uma meta e envia alertas, mas não é a ferramenta para explorar o histórico de custos por serviço em gráficos.',
      'O Pricing Calculator estima o custo dos serviços antes do uso, e não os custos que já aconteceram.',
      'O Cost Explorer mostra até os últimos 13 meses de custos e uso, com filtros e agrupamentos, e prevê os gastos dos próximos meses.',
      'O Trusted Advisor dá recomendações de boas práticas, incluindo economia de custos, mas não mostra o histórico de custos em gráficos.',
    ],
    evidence: [
      {
        url: 'https://docs.aws.amazon.com/pt_br/cost-management/latest/userguide/ce-what-is.html',
        quote:
          'Você pode visualizar os dados dos últimos 13 meses, prever quanto provavelmente gastará nos próximos 18 meses e obter recomendações sobre quais instâncias reservadas comprar.',
      },
    ],
  },
  {
    id: 'd4-010',
    task: '4.2',
    stem: 'Uma empresa que ainda não tem conta na AWS quer estimar o custo mensal de levar sua aplicação para a AWS e compartilhar a estimativa com os gestores. Qual ferramenta da AWS atende a esse requisito?',
    options: ['AWS Pricing Calculator', 'AWS Cost Explorer', 'AWS Budgets', 'AWS Cost and Usage Report'],
    answers: [0],
    reasons: [
      'O Pricing Calculator é uma ferramenta web gratuita que modela soluções antes de construí-las, e as estimativas podem ser salvas como link ou exportadas em CSV ou PDF.',
      'O Cost Explorer analisa os custos de uma conta existente, então não tem dados de uma carga que ainda não roda na AWS.',
      'O AWS Budgets acompanha os custos que a conta gera e não consegue estimar uma carga que ainda não está na AWS.',
      'O Cost and Usage Report detalha o uso de uma conta existente e não tem dados de antes da migração.',
    ],
    evidence: [
      {
        url: 'https://docs.aws.amazon.com/pt_br/pricing-calculator/latest/userguide/what-is-pricing-calculator.html#features-apc',
        quote:
          'Salvar suas estimativas — salve o link de cada estimativa para compartilhar ou revisitar posteriormente.',
      },
    ],
  },
  {
    id: 'd4-011',
    task: '4.2',
    stem: 'Uma empresa tem várias contas da AWS e está avaliando o recurso de faturamento consolidado do AWS Organizations. Quais benefícios o faturamento consolidado oferece? (Selecione DUAS.)',
    options: [
      'Uma única fatura para várias contas',
      'Business Support+ sem custo para as contas membro',
      'Uso somado entre as contas para descontos por volume',
      'Uma fatura separada que cada conta membro paga',
      'Ajuste automático do tamanho das instâncias nas contas membro',
    ],
    answers: [0, 2],
    reasons: [
      'A conta de gerenciamento recebe uma única fatura e paga as cobranças de todas as contas membro.',
      'O faturamento consolidado não tem custo extra, mas não inclui plano de suporte para as contas membro.',
      'O uso é somado entre todas as contas, o que compartilha os descontos por volume, os descontos de Reserved Instances e os Savings Plans.',
      'A conta de gerenciamento paga as cobranças de todas as contas membro. As faturas das contas membro são apenas informativas.',
      'O faturamento consolidado muda como as cobranças são pagas e somadas, e não redimensiona nenhum recurso.',
    ],
    evidence: [
      {
        url: 'https://docs.aws.amazon.com/pt_br/awsaccountbilling/latest/aboutv2/consolidated-billing.html',
        quote:
          'Cada organização AWS Organizations tem uma conta de gerenciamento que paga as despesas de todas as contas dos membros',
      },
      {
        url: 'https://docs.aws.amazon.com/pt_br/awsaccountbilling/latest/aboutv2/consolidated-billing.html',
        quote:
          'Você pode combinar o uso em todas as contas da organização. Isso compartilha os descontos nos preços por volume, os descontos em Instâncias Reservadas e os Savings Plans.',
      },
    ],
  },
  {
    id: 'd4-012',
    task: '4.2',
    stem: 'Uma empresa adicionou a tag `CostCenter` a todos os seus recursos para dividir os custos por departamento. A tag não aparece no AWS Cost Explorer nem nos relatórios de cobrança. O que a empresa deve fazer?',
    options: [
      'Aplicar a tag de novo com o AWS Tag Editor',
      'Habilitar o AWS Budgets para cada departamento',
      'Mover cada departamento para uma Região própria',
      'Ativar a tag como cost allocation tag',
    ],
    answers: [3],
    reasons: [
      'A tag já está aplicada nos recursos. Aplicá-la de novo não faz com que ela apareça nos relatórios de cobrança.',
      'Orçamentos acompanham o gasto em relação a metas, mas não fazem uma tag aparecer nos relatórios de cobrança.',
      'Regiões não dividem os custos por departamento, e a tag continuaria fora dos relatórios.',
      'Tags definidas pelo usuário precisam ser ativadas no console do Billing and Cost Management antes de aparecer no Cost Explorer e nos relatórios de cobrança.',
    ],
    evidence: [
      {
        url: 'https://docs.aws.amazon.com/pt_br/awsaccountbilling/latest/aboutv2/activating-tags.html',
        quote:
          'Para que as tags apareçam em seus relatórios de cobrança, você deve ativá-las. Suas tags de alocação de custos definidas pelo usuário representam a chave de tag, que você ativa no console do Billing and Cost Management.',
      },
    ],
  },
  {
    id: 'd4-013',
    task: '4.2',
    stem: 'Uma empresa quer os dados de custo e uso mais detalhados disponíveis, com itens por recurso e por cost allocation tag, entregues em um bucket do Amazon S3 para consultá-los com o Amazon Athena. Qual ferramenta da AWS atende a esse requisito?',
    options: ['AWS Budgets', 'AWS Cost and Usage Report', 'AWS Pricing Calculator', 'AWS Trusted Advisor'],
    answers: [1],
    reasons: [
      'O AWS Budgets acompanha o gasto em relação a metas e envia alertas, mas não entrega arquivos detalhados de cobrança no Amazon S3.',
      'O Cost and Usage Report contém o conjunto mais completo de dados de custo e uso, detalhado por recurso e por tags, e o entrega em um bucket do S3 para consultas com o Athena.',
      'O Pricing Calculator estima custos futuros e não informa o uso real.',
      'O Trusted Advisor verifica a conta em relação a boas práticas e não gera dados de cobrança.',
    ],
    evidence: [
      {
        url: 'https://docs.aws.amazon.com/pt_br/cur/latest/userguide/what-is-cur.html',
        quote:
          'Os Relatórios de AWS Custo e Uso (CUR) contêm o conjunto mais abrangente de dados de custo e uso disponível. Você pode usar os Relatórios de Custo e Uso para publicar seus relatórios de AWS faturamento em um bucket do Amazon Simple Storage Service (Amazon S3) de sua propriedade.',
      },
    ],
  },
  {
    id: 'd4-014',
    task: '4.2',
    stem: 'Uma empresa no plano Basic Support tem uma dúvida sobre uma cobrança inesperada na fatura da AWS. Qual é a forma MAIS direta de conseguir ajuda?',
    options: [
      'Mudar para o Business Support+ e abrir um caso técnico',
      'Publicar a dúvida no AWS re:Post',
      'Abrir um caso de conta e cobrança no AWS Support Center',
      'Entrar em contato com a equipe AWS Trust & Safety',
    ],
    answers: [2],
    reasons: [
      'Um plano pago só é necessário para suporte técnico. O suporte de conta e cobrança é gratuito para todos os titulares de conta.',
      'O re:Post é um site comunitário de perguntas e respostas, que não é onde a AWS trata dúvidas sobre as cobranças de uma conta específica.',
      'Todos os titulares de conta têm suporte de conta e cobrança sem custo, e um caso no Support Center chega direto a um atendente.',
      'O Trust & Safety trata denúncias de abuso de recursos da AWS, e não dúvidas de cobrança.',
    ],
    evidence: [
      {
        url: 'https://docs.aws.amazon.com/pt_br/awsaccountbilling/latest/aboutv2/billing-get-answers.html#billing-support',
        quote:
          'O contato Suporte é o método mais rápido e direto de se comunicar com um AWS associado sobre suas perguntas.',
      },
    ],
  },
  {
    id: 'd4-015',
    task: '4.3',
    stem: 'Uma pequena empresa está começando a rodar cargas de produção na AWS. Ela precisa de acesso 24/7 a especialistas da AWS por telefone, chat e e-mail para problemas técnicos, com o MENOR custo. Qual plano do AWS Support atende a esses requisitos?',
    options: ['Basic Support', 'AWS Business Support+', 'AWS Enterprise Support', 'AWS Unified Operations'],
    answers: [1],
    reasons: [
      'O Basic Support inclui atendimento ao cliente para dúvidas de conta e cobrança, mas não suporte técnico de engenheiros da AWS.',
      'O Business Support+ é o plano pago de entrada, com acesso 24/7 a especialistas da AWS, e a AWS o recomenda como plano mínimo para cargas de produção.',
      'O Enterprise Support atende ao requisito, mas adiciona um TAM designado e outros serviços por um preço mínimo bem mais alto.',
      'O Unified Operations é o nível mais alto, para operações de missão crítica, e custa mais do que a empresa precisa.',
    ],
    evidence: [
      {
        url: 'https://aws.amazon.com/pt/premiumsupport/plans/#recommended-for',
        quote: 'Plano mínimo recomendado para workloads de produção da AWS.',
      },
    ],
  },
  {
    id: 'd4-016',
    task: '4.3',
    stem: 'Uma empresa roda cargas críticas para o negócio na AWS. Ela quer um Technical Account Manager (TAM) designado para orientação estratégica e resposta em até 15 minutos para problemas críticos de produção. Qual opção atende a esses requisitos?',
    options: ['Basic Support', 'AWS Business Support+', 'AWS Enterprise Support', 'AWS Professional Services'],
    answers: [2],
    reasons: [
      'O Basic Support não tem casos de suporte técnico nem TAM.',
      'O Business Support+ responde em até 30 minutos nos casos críticos e não inclui TAM designado.',
      'O Enterprise Support inclui um TAM designado e resposta em até 15 minutos para problemas críticos de produção.',
      'O Professional Services entrega consultoria para projetos como migrações, e não um plano de suporte com tempos de resposta.',
    ],
    evidence: [
      {
        url: 'https://aws.amazon.com/pt/premiumsupport/plans/enterprise/#beneficios',
        quote:
          'Alcance eficiência operacional por meio do seu gerente técnico da conta dedicado, que usa os insights por IA para identificar oportunidades de otimização e orientar iniciativas estratégicas. Para problemas críticos de produção, receba respostas em até 15 minutos* dos engenheiros de suporte que conhecem o contexto específico do ambiente.',
      },
    ],
  },
  {
    id: 'd4-017',
    task: '4.3',
    stem: 'Uma empresa roda operações de missão crítica na AWS. Ela quer monitoramento 24/7 das suas cargas e resposta em até 5 minutos dos Incident Management Engineers da AWS durante incidentes críticos. Qual plano do AWS Support atende a esses requisitos?',
    options: ['Basic Support', 'AWS Business Support+', 'AWS Enterprise Support', 'AWS Unified Operations'],
    answers: [3],
    reasons: [
      'O Basic Support oferece atendimento ao cliente e documentação, sem suporte técnico nem monitoramento das cargas.',
      'O Business Support+ responde em até 30 minutos nos casos críticos e não inclui monitoramento 24/7 das cargas.',
      'O Enterprise Support responde em até 15 minutos nos casos críticos, o que não atende ao requisito de 5 minutos.',
      'O Unified Operations é o nível mais alto, com monitoramento 24/7 e Incident Management Engineers que respondem em até 5 minutos.',
    ],
    evidence: [
      {
        url: 'https://aws.amazon.com/pt/premiumsupport/plans/unified-operations/#excelencia-operacional-em-grande-escala',
        quote:
          'Com monitoramento de segurança e desempenho 24 horas por dia, 7 dias por semana, detectamos e mitigamos incidentes precocemente, ao mesmo tempo em que reduzimos o volume de alertas. Quando ocorre um incidente crítico, respondemos em cinco minutos dentro do contexto do seu ambiente, para reduzir ainda mais o tempo de resolução e ajudar você a manter o desempenho operacional máximo.',
      },
    ],
  },
  {
    id: 'd4-018',
    task: '4.3',
    stem: 'Quais recursos estão incluídos no plano Basic Support sem custo adicional? (Selecione DUAS.)',
    options: [
      'Casos de suporte técnico com engenheiros da AWS',
      'Atendimento ao cliente 24/7 para dúvidas de conta e cobrança',
      'Um Technical Account Manager designado',
      'As verificações principais do AWS Trusted Advisor',
      'Acesso à AWS Health API',
    ],
    answers: [1, 3],
    reasons: [
      'Casos de suporte técnico exigem um plano pago, como o Business Support+.',
      'Todos os planos, inclusive o Basic, têm acesso 24/7 ao atendimento ao cliente para dúvidas de conta e cobrança.',
      'Um TAM designado faz parte do plano Enterprise Support.',
      'O Basic inclui as verificações principais do Trusted Advisor. O conjunto completo exige um plano pago.',
      'A AWS Health API exige Business Support+, Enterprise Support ou Unified Operations. O Basic inclui o AWS Health Dashboard.',
    ],
    evidence: [
      {
        url: 'https://docs.aws.amazon.com/pt_br/awssupport/latest/user/aws-support-plans.html#features',
        quote:
          'Todos os AWS clientes têm acesso automático 24 horas por dia, 7 dias por semana, a esses recursos do Suporte Básico: One-on-one respostas a perguntas sobre contas e cobranças',
      },
      {
        url: 'https://aws.amazon.com/pt/premiumsupport/plans/#basic-support-incluso-para-todos-os-clientes-da-aws',
        quote:
          'verificações essenciais e orientação para provisionar seus recursos conforme práticas recomendadas a fim de melhorar o desempenho e aumentar a segurança.',
      },
    ],
  },
  {
    id: 'd4-019',
    task: '4.3',
    stem: 'Uma empresa percebe que um endereço IP da AWS está fazendo varreduras de portas e tentativas de invasão contra seus servidores. A quem a empresa deve denunciar essa atividade?',
    options: ['AWS Trust & Safety', 'AWS Support Center', 'AWS Professional Services', 'AWS Partner Network'],
    answers: [0],
    reasons: [
      'A equipe AWS Trust & Safety recebe denúncias de atividades ou conteúdos na AWS suspeitos de abuso.',
      'O AWS Support trata dúvidas sobre a sua própria conta e problemas técnicos, e não trata denúncias de abuso.',
      'O Professional Services entrega consultoria e não investiga abusos.',
      'A Partner Network é uma comunidade de parceiros que constroem na AWS e não recebe denúncias de abuso.',
    ],
    evidence: [
      {
        url: 'https://aws.amazon.com/pt/about-aws/whats-new/2024/10/aws-trust-safety-center-re-post/',
        quote:
          'O AWS Trust & Safety Center fornece aos clientes da AWS informações sobre como denunciar atividades ou conteúdo na AWS que eles suspeitam ser abusivos e, por outro lado, como lidar com avisos de abuso recebidos do AWS Trust & Safety.',
      },
    ],
  },
  {
    id: 'd4-020',
    task: '4.3',
    stem: 'Um desenvolvedor no plano Basic Support quer fazer uma pergunta técnica e receber respostas de uma comunidade de clientes, parceiros e funcionários da AWS. Qual recurso da AWS atende a esse requisito?',
    options: ['AWS Knowledge Center', 'AWS Prescriptive Guidance', 'AWS Trusted Advisor', 'AWS re:Post'],
    answers: [3],
    reasons: [
      'O Knowledge Center tem artigos escritos pela AWS que respondem às dúvidas mais frequentes, mas não é onde o desenvolvedor publica uma pergunta nova.',
      'O Prescriptive Guidance publica guias e padrões de especialistas da AWS, e não respostas da comunidade a perguntas individuais.',
      'O Trusted Advisor verifica a conta em relação a boas práticas e não responde perguntas.',
      'O re:Post é um serviço comunitário de perguntas e respostas em que especialistas da comunidade, incluindo clientes, parceiros e funcionários da AWS, respondem às perguntas.',
    ],
    evidence: [
      {
        url: 'https://aws.amazon.com/about-aws/whats-new/2021/12/aws-repost-community-question-answer-service/',
        quote:
          'AWS re:Post enables you to ask questions about anything related to designing, building, deploying, and operating workloads on AWS, and get answers from community experts, including AWS customers, Partners, and employees.',
      },
    ],
  },
  {
    id: 'd4-021',
    task: '4.3',
    stem: 'Uma empresa está planejando uma grande migração para a AWS. A equipe quer guias e padrões de especialistas da AWS com passos, arquiteturas, ferramentas e código para cenários comuns de migração e modernização. Qual recurso da AWS a equipe deve usar?',
    options: ['AWS Prescriptive Guidance', 'AWS re:Post', 'AWS Knowledge Center', 'AWS Health Dashboard'],
    answers: [0],
    reasons: [
      'O Prescriptive Guidance oferece guias e padrões de especialistas da AWS com passos, arquiteturas, ferramentas e código para migração, otimização e modernização.',
      'O re:Post é um site comunitário de perguntas e respostas, que responde dúvidas individuais em vez de oferecer orientação planejada para uma migração.',
      'O Knowledge Center responde às dúvidas frequentes em artigos curtos e não oferece padrões de migração.',
      'O Health Dashboard mostra eventos que afetam os serviços e recursos da AWS e não tem orientação de migração.',
    ],
    evidence: [
      {
        url: 'https://docs.aws.amazon.com/pt_br/prescriptive-guidance/latest/patterns/welcome.html',
        quote:
          'Os padrões de Orientação prescritiva da Amazon Web Services (AWS) fornecem instruções passo a passo, arquitetura, ferramentas e código para implementar cenários específicos de migração, modernização e implantação na nuvem.',
      },
    ],
  },
  {
    id: 'd4-022',
    task: '4.3',
    stem: 'Uma empresa quer reduzir a fatura da AWS encontrando load balancers ociosos, endereços Elastic IP não associados a instâncias em execução e instâncias do Amazon EC2 com baixa utilização. Qual serviço da AWS oferece essas verificações?',
    options: ['AWS Health Dashboard', 'AWS Budgets', 'AWS Trusted Advisor', 'AWS Pricing Calculator'],
    answers: [2],
    reasons: [
      'O Health Dashboard informa eventos que afetam os serviços e recursos da AWS, e não recursos sem uso que desperdiçam dinheiro.',
      'O AWS Budgets avisa quando o gasto passa de um limite, mas não identifica os recursos que causam o desperdício.',
      'As verificações de otimização de custos do Trusted Advisor incluem load balancers ociosos, endereços Elastic IP não associados e instâncias EC2 com baixa utilização.',
      'O Pricing Calculator estima o custo de serviços planejados e não inspeciona os recursos da conta.',
    ],
    evidence: [
      {
        url: 'https://docs.aws.amazon.com/pt_br/awssupport/latest/user/cost-optimization-checks.html#idle-load-balancers',
        quote:
          'Verifica a configuração do Elastic Load Balancing em busca de balanceadores de carga que estão ociosos.',
      },
    ],
  },
  {
    id: 'd4-023',
    task: '4.3',
    stem: 'Uma empresa quer que suas próprias ferramentas de operação recebam os eventos de manutenção programada e de problemas nos serviços da AWS que afetam seus recursos, sem que ninguém precise consultar o console. Qual opção da AWS atende a esse requisito?',
    options: ['AWS Trusted Advisor', 'AWS Health API', 'AWS Cost Explorer', 'AWS Budgets'],
    answers: [1],
    reasons: [
      'O Trusted Advisor verifica a conta em relação a boas práticas, mas não informa os eventos da AWS que afetam os recursos.',
      'A AWS Health API dá acesso programático aos mesmos eventos mostrados no AWS Health Dashboard, para que outros sistemas os consumam.',
      'O Cost Explorer analisa custos e uso e não informa eventos dos serviços.',
      'O AWS Budgets envia alertas sobre gasto e uso, e não sobre manutenção ou problemas nos serviços.',
    ],
    evidence: [
      {
        url: 'https://docs.aws.amazon.com/pt_br/health/latest/ug/what-is-aws-health.html',
        quote:
          'Se você tiver um plano AWS Business Support+, Enterprise AWS Support ou AWS Unified Operations, poderá usar a AWS Health API para integrar-se a sistemas internos e de terceiros.',
      },
    ],
  },
  {
    id: 'd4-024',
    task: '4.3',
    stem: 'Uma empresa pretende comprar um software de segurança de terceiros pelo AWS Marketplace. Quais benefícios o AWS Marketplace oferece? (Selecione DUAS.)',
    options: [
      'A AWS presta suporte técnico para todo produto de terceiros',
      'Todo anúncio é gratuito nos primeiros 12 meses',
      'As cobranças do software aparecem na fatura da AWS',
      'Software de terceiros fica fora do modelo de responsabilidade compartilhada',
      'Opções de preço flexíveis, incluindo testes gratuitos e Bring Your Own License',
    ],
    answers: [2, 4],
    reasons: [
      'O vendedor define o produto e seus termos de uso. A AWS faz a curadoria do catálogo, mas não dá suporte a todo produto de terceiros.',
      'Os produtos podem ser gratuitos ou ter um preço definido pelo vendedor. Não existe um período gratuito geral de 12 meses.',
      'A AWS cuida da cobrança e dos pagamentos, e as cobranças aparecem na fatura da AWS.',
      'Usar software de terceiros não muda o modelo de responsabilidade compartilhada. O cliente continua protegendo o que implanta.',
      'O Marketplace oferece preços por teste gratuito, por hora, mensais, anuais, plurianuais e Bring Your Own License, todos cobrados por uma única fonte.',
    ],
    evidence: [
      {
        url: 'https://docs.aws.amazon.com/pt_br/marketplace/latest/buyerguide/what-is-marketplace.html',
        quote:
          'Todas essas opções de preços são cobradas de uma única fonte. AWS lida com faturamento e pagamentos, e as cobranças aparecem na sua AWS fatura.',
      },
      {
        url: 'https://docs.aws.amazon.com/pt_br/marketplace/latest/buyerguide/what-is-marketplace.html',
        quote:
          'As opções flexíveis de definição de preço incluem avaliação gratuita, por hora, mensal, anual, vários anos e um modelo Traga sua própria licença (BYOL). Todas essas opções de preços são cobradas de uma única fonte.',
      },
    ],
  },
  {
    id: 'd4-025',
    task: '4.3',
    stem: 'Uma empresa quer contratar uma consultoria terceirizada com experiência comprovada em AWS para planejar e executar a migração do seu data center para a AWS. Onde a empresa deve procurar essa consultoria?',
    options: ['AWS Partner Network', 'AWS Professional Services', 'AWS Prescriptive Guidance', 'AWS re:Post'],
    answers: [0],
    reasons: [
      'A AWS Partner Network reúne parceiros de consultoria e serviços, como integradores de sistemas, que ajudam os clientes a migrar e construir na AWS.',
      'O Professional Services é uma equipe da própria AWS, e não uma empresa terceirizada.',
      'O Prescriptive Guidance publica guias e padrões, mas não fornece uma empresa para executar a migração.',
      'O re:Post responde perguntas da comunidade, mas não fornece uma empresa para conduzir um projeto de migração.',
    ],
    evidence: [
      {
        url: 'https://aws.amazon.com/pt/migration-and-modernization/partners/#transforme-sua-migracao-para-a-nuvem-com-os-parceiros-da-aws-e-modernize-com-confianca',
        quote:
          'Os parceiros da AWS possibilitam a transformação na nuvem com experiência comprovada na migração e modernização de workloads essenciais à missão.',
      },
    ],
  },
]
