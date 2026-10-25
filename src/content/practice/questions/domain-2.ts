import type { Question } from '../types'

export const enUS: readonly Question[] = [
  {
    id: 'd2-001',
    task: '2.1',
    stem: 'Which tasks are the responsibility of AWS under the AWS shared responsibility model? (Select TWO.)',
    options: [
      'Physical security of the data centers',
      'Configuration of security groups',
      'Encryption of customer data at rest',
      'Maintenance of the global network infrastructure',
      'Management of IAM users and permissions',
    ],
    answers: [0, 3],
    reasons: [
      'AWS protects the infrastructure that runs all of its services, and that includes the facilities where the hardware lives.',
      'Security groups are firewall rules that the customer configures on its own instances, so they are part of security in the cloud.',
      'The customer manages its data, including the encryption options, even when AWS provides the encryption features.',
      'The infrastructure that AWS protects is made of the hardware, software, networking and facilities that run AWS services.',
      'The customer decides who can access its resources and uses IAM to apply the appropriate permissions.',
    ],
    evidence: [
      {
        url: 'https://aws.amazon.com/compliance/shared-responsibility-model/#content-0',
        quote:
          'AWS is responsible for protecting the infrastructure that runs all of the services offered in the AWS Cloud. This infrastructure is composed of the hardware, software, networking, and facilities that run AWS Cloud services.',
      },
      {
        url: 'https://aws.amazon.com/compliance/shared-responsibility-model/#content-0',
        quote:
          'AWS is responsible for protecting the infrastructure that runs all of the services offered in the AWS Cloud. This infrastructure is composed of the hardware, software, networking, and facilities that run AWS Cloud services.',
      },
    ],
  },
  {
    id: 'd2-002',
    task: '2.1',
    stem: 'A company runs its application on Amazon EC2 instances. Under the AWS shared responsibility model, which task is the responsibility of the company?',
    options: [
      'Replacing failed disks in the host servers',
      'Patching the guest operating system',
      'Maintaining the virtualization layer',
      'Securing the data center facilities',
    ],
    answers: [1],
    reasons: [
      'Host hardware belongs to the infrastructure that AWS operates. The customer never touches the physical servers.',
      'Customers that deploy EC2 instances manage the guest operating system, including updates and security patches, and the software they install on it.',
      'AWS operates the components from the host operating system and the virtualization layer down to the physical security of the facilities.',
      'Physical security of the facilities is an AWS responsibility that the customer inherits.',
    ],
    evidence: [
      {
        url: 'https://aws.amazon.com/compliance/shared-responsibility-model/#content-1',
        quote:
          'Customers that deploy an Amazon EC2 instance are responsible for management of the guest operating system (including updates and security patches), any application software or utilities installed by the customer on the instances, and the configuration of the AWS-provided firewall (called a security group) on each instance.',
      },
    ],
  },
  {
    id: 'd2-003',
    task: '2.1',
    stem: 'A company moves its database from Amazon EC2 instances to Amazon RDS. Which task moves from the company to AWS?',
    options: [
      'Optimizing the queries of the application',
      'Controlling which users can access the database',
      'Classifying the data stored in the tables',
      'Patching the database engine',
    ],
    answers: [3],
    reasons: [
      'Application and query optimization stay with the customer on EC2 and on RDS alike.',
      'The customer still controls access to the database, through database users, IAM and security groups.',
      'The customer remains responsible for its data and for deciding how sensitive it is.',
      'On EC2 the customer patches the operating system and the database engine. Amazon RDS takes over software patching, backups and high availability.',
    ],
    evidence: [
      {
        url: 'https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Welcome.html#Welcome.Concepts.on-prem',
        quote: 'Amazon RDS manages backups, software patching, automatic failure detection, and recovery.',
      },
    ],
  },
  {
    id: 'd2-004',
    task: '2.1',
    stem: 'Which controls does the AWS shared responsibility model classify as shared controls, which apply to both AWS and the customer at different layers? (Select TWO.)',
    options: [
      'Physical and environmental controls',
      'Patch management',
      'Awareness and training',
      'Zone security for customer data',
      'Disposal of data center hardware',
    ],
    answers: [1, 2],
    reasons: [
      'Physical and environmental controls are inherited controls. The customer fully inherits them from AWS.',
      'AWS patches flaws in its infrastructure, and the customer patches its guest operating systems and applications.',
      'AWS trains its own employees, and the customer must train its own employees.',
      'Routing or zoning data within security environments is a customer specific control, the sole responsibility of the customer.',
      'Disposing of hardware in the data centers belongs to the physical infrastructure that AWS alone operates.',
    ],
    evidence: [
      {
        url: 'https://aws.amazon.com/compliance/shared-responsibility-model/#content-3',
        quote:
          'Patch Management – AWS is responsible for patching and fixing flaws within the infrastructure, but customers are responsible for patching their guest OS and applications.',
      },
      {
        url: 'https://aws.amazon.com/compliance/shared-responsibility-model/#content-3',
        quote: 'Awareness & Training - AWS trains AWS employees, but a customer must train their own employees.',
      },
    ],
  },
  {
    id: 'd2-005',
    task: '2.1',
    stem: 'A company runs code in AWS Lambda functions. Under the AWS shared responsibility model, which task is the responsibility of AWS?',
    options: [
      'Patching the servers that run the functions',
      'Writing secure code for the functions',
      'Granting least privilege permissions to the functions',
      'Protecting the sensitive data that the functions process',
    ],
    answers: [0],
    reasons: [
      'Lambda manages the underlying infrastructure, including server maintenance, capacity provisioning, scaling and patching.',
      'The function code is written and owned by the customer, so its security stays with the customer.',
      'The customer configures the IAM permissions that the functions use.',
      'The customer is always responsible for its data, whatever service processes it.',
    ],
    evidence: [
      {
        url: 'https://docs.aws.amazon.com/lambda/latest/dg/welcome.html#welcome',
        quote:
          'Lambda automatically manages the underlying infrastructure – including server maintenance, capacity provisioning, scaling, and patching – so you can focus on your application logic.',
      },
    ],
  },
  {
    id: 'd2-006',
    task: '2.1',
    stem: 'Which AWS service requires the customer to perform the MOST security configuration and management tasks?',
    options: ['Amazon S3', 'AWS Lambda', 'Amazon EC2', 'Amazon DynamoDB'],
    answers: [2],
    reasons: [
      'S3 is an abstracted service. AWS operates the infrastructure, the operating system and the platform, and the customer manages its data and access.',
      'With Lambda, AWS manages the servers, their operating system and the patching, which leaves less to the customer.',
      'EC2 is infrastructure as a service. The customer manages the guest operating system, the software it installs and the security groups of each instance.',
      'DynamoDB is an abstracted service. AWS operates the infrastructure and the platform, and the customer manages its data and permissions.',
    ],
    evidence: [
      {
        url: 'https://aws.amazon.com/compliance/shared-responsibility-model/#content-1',
        quote:
          'For example, a service such as Amazon Elastic Compute Cloud (Amazon EC2) is categorized as Infrastructure as a Service (IaaS) and, as such, requires the customer to perform all of the necessary security configuration and management tasks.',
      },
    ],
  },
  {
    id: 'd2-007',
    task: '2.1',
    stem: 'A company stores sensitive customer records in Amazon DynamoDB. Under the AWS shared responsibility model, which task is the responsibility of the company?',
    options: [
      'Patching the database software',
      'Replacing failed storage hardware',
      'Managing the data and the permissions to access it',
      'Maintaining the servers behind the tables',
    ],
    answers: [2],
    reasons: [
      'For abstracted services such as DynamoDB, AWS operates the infrastructure layer, the operating system and the platform, including the database software.',
      'Storage hardware is part of the infrastructure that AWS protects and maintains.',
      'For abstracted services, customers manage their data, including encryption options and classification, and use IAM to apply the appropriate permissions.',
      'DynamoDB is a managed service, so AWS operates the servers behind the tables.',
    ],
    evidence: [
      {
        url: 'https://aws.amazon.com/compliance/shared-responsibility-model/#content-1',
        quote:
          'Customers are responsible for managing their data (including encryption options), classifying their assets, and using IAM tools to apply the appropriate permissions.',
      },
    ],
  },
  {
    id: 'd2-008',
    task: '2.1',
    stem: 'A company migrates an application from its own data center to Amazon EC2 instances. Which responsibility moves from the company to AWS?',
    options: [
      'Maintaining the physical servers and their hardware',
      'Patching the operating system of the instances',
      'Installing and updating the application software',
      'Backing up the data stored by the application',
    ],
    answers: [0],
    reasons: [
      'With EC2, AWS takes over server maintenance, the hardware lifecycle, and the power, network and cooling that the company handled on premises.',
      'On EC2 the customer still patches the operating system, as it did on premises.',
      'The customer still installs and updates the software that runs on its instances.',
      'Backups of an application on EC2 remain with the customer, unlike on a managed service such as Amazon RDS.',
    ],
    evidence: [
      {
        url: 'https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Welcome.html#Welcome.Concepts.comparison',
        quote:
          'AWS manages the hardware layers, which eliminates some of the burden of managing an on-premises database server.',
      },
    ],
  },
  {
    id: 'd2-009',
    task: '2.2',
    stem: 'An external auditor asks a company for the AWS SOC and ISO reports that show how AWS operates its security controls. Where can the company download these reports?',
    options: ['AWS Trusted Advisor', 'AWS Security Hub', 'AWS Config', 'AWS Artifact'],
    answers: [3],
    reasons: [
      'Trusted Advisor checks the account of the customer against best practices. It does not provide AWS audit reports.',
      'Security Hub assesses the resources of the customer against security standards. It does not publish the reports that auditors wrote about AWS.',
      'Config records and evaluates the configuration of the resources of the customer, not the controls of AWS.',
      'AWS Artifact provides on demand downloads of AWS security and compliance documents, such as SOC reports and ISO certifications, at no cost.',
    ],
    evidence: [
      {
        url: 'https://docs.aws.amazon.com/artifact/latest/ug/what-is-aws-artifact.html#what-is-aws-artifact',
        quote:
          'AWS Artifact provides on-demand downloads of AWS security and compliance documents. For example, reports on compliance with International Organization for Standardization (ISO) standards and Payment Card Industry (PCI) Security Standards, and System and Organization Controls (SOC) reports.',
      },
    ],
  },
  {
    id: 'd2-010',
    task: '2.2',
    stem: 'A healthcare company must accept a Business Associate Addendum (BAA) with AWS before it processes protected health information. Which AWS service should the company use to review and accept the agreement?',
    options: ['AWS Organizations', 'AWS Artifact', 'AWS Control Tower', 'AWS Marketplace'],
    answers: [1],
    reasons: [
      'Organizations manages many accounts centrally. The agreement itself is reviewed and accepted in AWS Artifact, which can apply it to all the accounts of an organization.',
      'AWS Artifact lets customers review, accept and track agreements with AWS, such as the BAA, for one account or for a whole organization.',
      'Control Tower sets up a governed multi-account environment. It does not handle agreements with AWS.',
      'Marketplace is a catalog for buying third-party software, not a place to accept agreements with AWS.',
    ],
    evidence: [
      {
        url: 'https://docs.aws.amazon.com/artifact/latest/ug/managing-agreements.html#managing-agreements',
        quote:
          'In the AWS Artifact console, you can review and accept such agreements, and you can designate an AWS account that can legally process PHI.',
      },
    ],
  },
  {
    id: 'd2-011',
    task: '2.2',
    stem: 'A security team wants to find out which IAM user deleted an Amazon S3 bucket yesterday and from which IP address the request came. Which AWS service provides this information?',
    options: ['Amazon CloudWatch', 'Amazon GuardDuty', 'AWS Config', 'AWS CloudTrail'],
    answers: [3],
    reasons: [
      'CloudWatch collects metrics, logs and alarms about performance and operational health. It is not the record of who called each API.',
      'GuardDuty analyzes logs to detect threats, but it is not the record of every API call and its caller.',
      'Config records how resources were configured over time, not the identity and IP address of the caller that changed them.',
      'CloudTrail records API calls with the identity of the caller, the time of the call, the source IP address and the request parameters.',
    ],
    evidence: [
      {
        url: 'https://docs.aws.amazon.com/whitepapers/latest/aws-overview/management-governance.html#aws-cloudtrail',
        quote:
          'The recorded information includes the identity of the API caller, the time of the API call, the source IP address of the API caller, the request parameters, and the response elements returned by the AWS service.',
      },
    ],
  },
  {
    id: 'd2-012',
    task: '2.2',
    stem: 'Which actions help protect data in transit? (Select TWO.)',
    options: [
      'Using HTTPS listeners with TLS on an Application Load Balancer',
      'Turning on default encryption for an Amazon S3 bucket',
      'Encrypting Amazon EBS volumes with AWS KMS keys',
      'Encrypting the snapshots of an Amazon RDS database',
      'Connecting the on-premises network to the VPC with an IPsec VPN',
    ],
    answers: [0, 4],
    reasons: [
      'TLS encrypts the traffic between the clients and the load balancer while it travels over the network.',
      'Default bucket encryption protects objects while they are stored, which is encryption at rest.',
      'EBS encryption protects the data stored on the volumes, which is encryption at rest.',
      'Encrypting snapshots protects backup data while it is stored, which is encryption at rest.',
      'An IPsec VPN encrypts the traffic between the two networks, which protects the data while it moves between them.',
    ],
    evidence: [
      {
        url: 'https://docs.aws.amazon.com/elasticloadbalancing/latest/userguide/data-protection.html#encryption-transit',
        quote:
          'Elastic Load Balancing simplifies the process of building secure web applications by terminating HTTPS and TLS traffic from clients at the load balancer. The load balancer performs the work of encrypting and decrypting the traffic, instead of requiring each EC2 instance to handle the work for TLS termination.',
      },
      {
        url: 'https://docs.aws.amazon.com/vpn/latest/s2svpn/VPC_VPN.html#concepts',
        quote: 'An encrypted link where data can pass from the customer network to or from AWS.',
      },
    ],
  },
  {
    id: 'd2-013',
    task: '2.2',
    stem: 'A company must show auditors how its security groups were configured at any point in the last year and must be notified when a resource breaks one of its compliance rules. Which AWS service meets these requirements?',
    options: ['AWS CloudTrail', 'AWS Config', 'Amazon Inspector', 'AWS Trusted Advisor'],
    answers: [1],
    reasons: [
      'CloudTrail records the API calls that changed resources, but it does not keep a configuration history or evaluate resources against rules.',
      'Config keeps the configuration history of resources, including security group rules, and its rules flag noncompliant resources and send notifications.',
      'Inspector scans workloads for software vulnerabilities and network exposure. It does not keep configuration history.',
      'Trusted Advisor runs best practice checks, but it does not record the past configuration of each resource for audits.',
    ],
    evidence: [
      {
        url: 'https://docs.aws.amazon.com/config/latest/developerguide/WhatIsConfig.html#scenarios-resource-administration',
        quote:
          'You can use AWS Config rules to evaluate the configuration settings of your AWS resources. When AWS Config detects that a resource violates the conditions in one of your rules, AWS Config flags the resource as noncompliant and sends a notification.',
      },
    ],
  },
  {
    id: 'd2-014',
    task: '2.2',
    stem: 'A company wants to centralize the log files from its applications and Amazon EC2 instances, search them for error patterns and be notified when errors exceed a threshold. Which AWS service meets these requirements?',
    options: ['AWS CloudTrail', 'AWS Config', 'Amazon CloudWatch Logs', 'Amazon Detective'],
    answers: [2],
    reasons: [
      'CloudTrail records API activity in the account. It does not collect application log files from instances.',
      'Config records resource configurations, not application logs.',
      'CloudWatch Logs centralizes logs from systems, applications and AWS services, lets the team search them and turns log patterns into metrics that can trigger alarms.',
      'Detective helps investigate security findings. It is not a central store for application logs.',
    ],
    evidence: [
      {
        url: 'https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/WhatIsCloudWatchLogs.html#WhatIsCloudWatchLogs',
        quote:
          'CloudWatch Logs enables you to centralize the logs from all of your systems, applications, and AWS services that you use, in a single, highly scalable service. You can then easily view them, search them for specific error codes or patterns, filter them based on specific fields, or archive them securely for future analysis.',
      },
    ],
  },
  {
    id: 'd2-015',
    task: '2.2',
    stem: 'A company wants users to reach its website on an Application Load Balancer over HTTPS. Which AWS service creates, stores and renews the SSL/TLS certificates that encrypt this traffic?',
    options: ['AWS Certificate Manager', 'AWS Key Management Service', 'AWS Secrets Manager', 'AWS CloudHSM'],
    answers: [0],
    reasons: [
      'ACM creates, stores and renews public and private SSL/TLS certificates for integrated services such as Elastic Load Balancing and CloudFront.',
      'KMS creates and controls the keys that encrypt and sign data. It does not issue TLS certificates for websites.',
      'Secrets Manager stores and rotates secrets such as database credentials. For certificates, AWS recommends ACM.',
      'CloudHSM provides dedicated hardware security modules that the customer manages. It does not issue and renew website certificates.',
    ],
    evidence: [
      {
        url: 'https://docs.aws.amazon.com/acm/latest/userguide/acm-overview.html#acm-overview',
        quote:
          'AWS Certificate Manager (ACM) handles the complexity of creating, storing, and renewing public and private SSL/TLS X.509 certificates and keys that protect your AWS websites and applications.',
      },
    ],
  },
  {
    id: 'd2-016',
    task: '2.2',
    stem: 'A company must encrypt data at rest in Amazon S3 and Amazon EBS and must control which users can use the encryption keys. Which AWS service should the company use to create and manage the keys?',
    options: ['AWS Key Management Service', 'AWS Certificate Manager', 'Amazon Macie', 'AWS Secrets Manager'],
    answers: [0],
    reasons: [
      'KMS creates and controls the keys that encrypt data, protects them in validated hardware security modules and uses key policies so only trusted users can use them.',
      'ACM manages SSL/TLS certificates for encryption in transit, not keys for data at rest.',
      'Macie discovers sensitive data in S3. It does not create or manage encryption keys.',
      'Secrets Manager stores secrets such as passwords. For encryption keys, AWS recommends KMS.',
    ],
    evidence: [
      {
        url: 'https://docs.aws.amazon.com/kms/latest/developerguide/overview.html#overview',
        quote:
          'AWS Key Management Service (AWS KMS) is an AWS managed service that makes it easy for you to create and control the keys used to encrypt and sign your data.',
      },
    ],
  },
  {
    id: 'd2-017',
    task: '2.2',
    stem: 'A company that processes credit card payments must confirm that a specific AWS service has been assessed under the PCI DSS compliance program. Where should the company look?',
    options: [
      'AWS Health Dashboard',
      'AWS Trusted Advisor',
      'AWS Services in Scope by Compliance Program',
      'AWS Security Hub',
    ],
    answers: [2],
    reasons: [
      'The Health Dashboard reports events that affect AWS services and the resources of the account. It does not list compliance programs.',
      'Trusted Advisor checks the account against best practices. It does not show which services each compliance program covers.',
      'This AWS page lists the services in scope of each assurance program, such as PCI, SOC and the HIPAA BAA, because coverage varies from one service to another.',
      'Security Hub can check the resources of the company against the PCI DSS standard, but it does not show which AWS services auditors assessed.',
    ],
    evidence: [
      {
        url: 'https://aws.amazon.com/compliance/services-in-scope/',
        quote: 'This webpage provides a list of AWS Services in Scope of AWS assurance programs.',
      },
    ],
  },
  {
    id: 'd2-018',
    task: '2.2',
    stem: 'A regulation requires a European company to keep its customer data inside the European Union. How does AWS help the company meet this requirement?',
    options: [
      'AWS keeps the data in edge locations near the customers',
      'The company chooses the AWS Regions where its content is stored',
      'AWS Shield prevents the data from leaving the continent',
      'AWS Artifact moves the data to a compliant Region',
    ],
    answers: [1],
    reasons: [
      'Edge locations cache content for low latency delivery. They are not a way to keep data within a jurisdiction.',
      'Customers choose the Regions where their content is stored, and AWS does not move or replicate it outside those Regions without their agreement.',
      'Shield protects against DDoS attacks. It does not control where data is stored.',
      'Artifact provides compliance reports and agreements. It does not store or move customer data.',
    ],
    evidence: [
      {
        url: 'https://aws.amazon.com/compliance/data-privacy-faq/#commitments--1yvnqhg',
        quote: 'You choose the AWS Region(s) in which your content is stored.',
      },
    ],
  },
  {
    id: 'd2-019',
    task: '2.2',
    stem: 'Which capabilities does AWS Security Hub CSPM provide? (Select TWO.)',
    options: [
      'Scanning EC2 instances for software vulnerabilities',
      'Filtering malicious HTTP requests to web applications',
      'Running automated checks against standards such as CIS and PCI DSS',
      'Aggregating findings from GuardDuty, Inspector and Macie',
      'Providing AWS compliance reports for auditors',
    ],
    answers: [2, 3],
    reasons: [
      'Scanning workloads for known software vulnerabilities is the job of Amazon Inspector, which can send its findings to Security Hub CSPM.',
      'Filtering web requests is the job of AWS WAF.',
      'Security Hub CSPM, the original Security Hub posture service under its current name, runs checks against AWS best practices and external frameworks such as CIS, PCI DSS and NIST.',
      'Security Hub CSPM collects findings from GuardDuty, Inspector, Macie and supported third-party products, which gives a single view of security issues.',
      'AWS compliance reports such as SOC reports are downloaded from AWS Artifact.',
    ],
    evidence: [
      {
        url: 'https://docs.aws.amazon.com/securityhub/latest/userguide/what-is-securityhub.html#what-is-securityhub',
        quote:
          'These include the AWS Foundational Security Best Practices (FSBP) standard developed by AWS, and external compliance frameworks such as the Center for Internet Security (CIS), the Payment Card Industry Data Security Standard (PCI DSS), and the National Institute of Standards and Technology (NIST).',
      },
      {
        url: 'https://docs.aws.amazon.com/securityhub/latest/userguide/what-is-securityhub.html#what-is-securityhub',
        quote:
          'In addition to generating control findings, Security Hub CSPM also receives findings from other AWS services—such as Amazon GuardDuty, Amazon Inspector, and Amazon Macie— and supported third-party products. This gives you a single pane of glass into a variety of security-related issues.',
      },
    ],
  },
  {
    id: 'd2-020',
    task: '2.2',
    stem: 'An auditor asks for a list of all IAM users in an account with the status of their passwords, access keys and MFA devices. Which feature provides this information in one report?',
    options: [
      'AWS CloudTrail event history',
      'AWS Config configuration history',
      'AWS Artifact reports',
      'IAM credential report',
    ],
    answers: [3],
    reasons: [
      'Event history shows recent API activity, not the current state of the credentials of every user.',
      'Config records configuration changes of resources, but it does not produce a report of passwords, access keys and MFA status for every user.',
      'Artifact reports document the controls of AWS, not the credentials in the account of the customer.',
      'The credential report lists all users in the account and the status of their passwords, access keys and MFA devices, and it supports audit and compliance work.',
    ],
    evidence: [
      {
        url: 'https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_getting-report.html#id_credentials_getting-report',
        quote:
          'You can generate and download a credential report that lists all users in your account and the status of their various credentials, including passwords, access keys, and MFA devices.',
      },
    ],
  },
  {
    id: 'd2-021',
    task: '2.2',
    stem: 'A company wants to continuously scan its Amazon EC2 instances and the container images in Amazon ECR for known software vulnerabilities. Which AWS service meets this requirement?',
    options: ['Amazon GuardDuty', 'Amazon Inspector', 'Amazon Macie', 'Amazon Detective'],
    answers: [1],
    reasons: [
      'GuardDuty detects suspicious activity such as compromised credentials and cryptomining. It does not assess software packages for known vulnerabilities.',
      'Inspector automatically discovers EC2 instances, ECR container images and Lambda functions and scans them for software vulnerabilities and unintended network exposure.',
      'Macie discovers sensitive data in Amazon S3. It does not scan instances or images.',
      'Detective helps investigate the root cause of security findings. It does not scan for vulnerabilities.',
    ],
    evidence: [
      {
        url: 'https://docs.aws.amazon.com/inspector/latest/user/what-is-inspector.html#what-is-inspector',
        quote:
          'Amazon Inspector is a vulnerability management service that automatically discovers workloads and continually scans them for software vulnerabilities and unintended network exposure.',
      },
    ],
  },
  {
    id: 'd2-022',
    task: '2.2',
    stem: 'A company must be able to prove who made each change to its AWS resources and what the configuration of each resource was at any point in time. Which AWS services should the company use? (Select TWO.)',
    options: ['Amazon Inspector', 'AWS CloudTrail', 'AWS Artifact', 'Amazon Macie', 'AWS Config'],
    answers: [1, 4],
    reasons: [
      'Inspector finds software vulnerabilities. It does not record changes or configurations.',
      'CloudTrail records the identity of the API caller, the time and the request parameters, which shows who made each change.',
      'Artifact provides AWS compliance documents, not records of activity in the account.',
      'Macie discovers sensitive data in S3. It does not track configuration changes.',
      'Config keeps a configuration history, so the company can see the details of a resource at any point in time.',
    ],
    evidence: [
      {
        url: 'https://docs.aws.amazon.com/whitepapers/latest/aws-overview/management-governance.html#aws-cloudtrail',
        quote:
          'The recorded information includes the identity of the API caller, the time of the API call, the source IP address of the API caller, the request parameters, and the response elements returned by the AWS service.',
      },
      {
        url: 'https://docs.aws.amazon.com/whitepapers/latest/aws-overview/management-governance.html#aws-config',
        quote:
          'With AWS Config, you can discover existing and deleted AWS resources, determine your overall compliance against rules, and dive into configuration details of a resource at any point in time.',
      },
    ],
  },
  {
    id: 'd2-023',
    task: '2.3',
    stem: 'A developer needs to read objects from one specific Amazon S3 bucket and nothing else. Which approach follows the principle of least privilege?',
    options: [
      'Attach a customer managed policy that allows read actions on that bucket only',
      'Attach the AWS managed policy `AmazonS3ReadOnlyAccess`',
      'Attach the AWS managed policy `AmazonS3FullAccess`',
      'Add the developer to a group with the `PowerUserAccess` policy',
    ],
    answers: [0],
    reasons: [
      'Least privilege means granting only the permissions required for the task, as specific actions on specific resources. A custom policy scoped to one bucket does that.',
      'This policy allows reading every bucket in the account, which is more access than the task needs.',
      'This policy also allows writing and deleting in every bucket, far beyond reading one bucket.',
      'This policy grants full access to almost every AWS service, which is the opposite of least privilege.',
    ],
    evidence: [
      {
        url: 'https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html#grant-least-privilege',
        quote: 'When you set permissions with IAM policies, grant only the permissions required to perform a task.',
      },
    ],
  },
  {
    id: 'd2-024',
    task: '2.3',
    stem: 'A company has a standalone AWS account that is not part of AWS Organizations. Which task requires the company to sign in as the AWS account root user?',
    options: [
      'Creating an IAM user with administrator permissions',
      'Updating the alternate contacts of the account',
      'Turning on AWS CloudTrail for the account',
      'Closing the AWS account',
    ],
    answers: [3],
    reasons: [
      'Any identity with the right IAM permissions can create users. AWS recommends an administrative user for everyday tasks like this.',
      'Alternate contacts and contact information can be updated without root user credentials.',
      'CloudTrail can be configured by IAM users or roles that have the right permissions.',
      'A standalone account that is not part of AWS Organizations requires root user credentials to be closed.',
    ],
    evidence: [
      {
        url: 'https://docs.aws.amazon.com/IAM/latest/UserGuide/id_root-user.html#root-user-tasks',
        quote:
          'Standalone AWS accounts that are not part of AWS Organizations require root credentials to close the account.',
      },
    ],
  },
  {
    id: 'd2-025',
    task: '2.3',
    stem: 'Which actions are AWS recommended best practices for protecting the AWS account root user? (Select TWO.)',
    options: [
      'Enable multi-factor authentication for the root user',
      'Store the root user access keys in AWS Secrets Manager',
      'Avoid creating access keys for the root user',
      'Use the root user for daily administrative tasks',
      'Share the root user password with every administrator',
    ],
    answers: [0, 2],
    reasons: [
      'MFA adds a second factor to the email address and password, and AWS lists securing root user sign-in with MFA as a root user best practice.',
      'AWS recommends not creating root user access keys at all. Storing them anywhere still leaves highly privileged long-term credentials in existence.',
      'The root user has full access to every service and resource, including billing, so AWS strongly recommends not creating access keys for it.',
      'AWS recommends using the root user only for the tasks that require it and creating an administrative user for everyday work.',
      'AWS recommends not sharing the root user credentials with anyone except those with a strict business need.',
    ],
    evidence: [
      {
        url: 'https://docs.aws.amazon.com/IAM/latest/UserGuide/root-user-best-practices.html#ru-bp-mfa',
        quote:
          "Because a root user can perform privileged actions, it's crucial to add MFA for the root user as a second authentication factor in addition to the email address and password as sign-in credentials.",
      },
      {
        url: 'https://docs.aws.amazon.com/IAM/latest/UserGuide/root-user-best-practices.html#ru-bp-access',
        quote:
          'We strongly recommend that you do not create access keys for your root user because the root user has full access to all AWS services and resources in the account, including billing information.',
      },
    ],
  },
  {
    id: 'd2-026',
    task: '2.3',
    stem: 'A company requires IAM users to prove their identity with a device they own, in addition to their password, when they sign in to the AWS Management Console. What should the company configure?',
    options: [
      'A custom IAM password policy',
      'Access keys for each IAM user',
      'Multi-factor authentication',
      'An IAM role for each IAM user',
    ],
    answers: [2],
    reasons: [
      'A password policy sets complexity and expiration rules for passwords, but the password stays the only factor.',
      'Access keys sign programmatic requests. They do not add a factor to console sign-in.',
      'MFA requires a response from a device, such as a passkey, a security key or an authenticator app, in addition to the sign-in credentials.',
      'Roles provide temporary permissions. They do not add a second factor to the console sign-in of a user.',
    ],
    evidence: [
      {
        url: 'https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_mfa.html#id_credentials_mfa',
        quote:
          'MFA adds extra security that requires users to provide unique authentication from an AWS supported MFA mechanism in addition to their sign-in credentials when they access AWS websites or services.',
      },
    ],
  },
  {
    id: 'd2-027',
    task: '2.3',
    stem: 'Which requirements can a company enforce for its IAM users with a custom account password policy? (Select TWO.)',
    options: [
      'Lock the user out after several failed sign-in attempts',
      'Require an MFA device during sign-in',
      'Apply the same rules to the root user password',
      'Set a minimum password length',
      'Prevent the reuse of previous passwords',
    ],
    answers: [3, 4],
    reasons: [
      'IAM does not support a lockout policy. AWS recommends combining a strong password policy with MFA instead.',
      'MFA is configured for each identity separately. It is not a setting of the password policy.',
      'The IAM password policy does not apply to the root user password.',
      'The custom password policy can require a minimum number of characters for IAM user passwords.',
      'The custom password policy can prevent users from reusing a specified number of previous passwords.',
    ],
    evidence: [
      {
        url: 'https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_passwords_account-policy.html#password-policy-details',
        quote: 'Password minimum length – You can specify a minimum of 6 characters and a maximum of 128 characters.',
      },
      {
        url: 'https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_passwords_account-policy.html#password-policy-details',
        quote:
          'Prevent password reuse – You can prevent IAM users from reusing a specified number of previous passwords.',
      },
    ],
  },
  {
    id: 'd2-028',
    task: '2.3',
    stem: 'An application on Amazon EC2 connects to a database with a password that is written in its source code. The company wants to remove the password from the code and rotate it automatically. Which AWS service meets these requirements?',
    options: ['AWS Key Management Service', 'AWS Certificate Manager', 'AWS Secrets Manager', 'Amazon Cognito'],
    answers: [2],
    reasons: [
      'KMS manages encryption keys. It does not store database passwords or rotate them.',
      'ACM manages SSL/TLS certificates, not database credentials.',
      'Secrets Manager stores credentials that the application retrieves at runtime instead of hard coding them, and it can rotate them on an automatic schedule.',
      'Cognito handles sign-up and sign-in for the users of web and mobile apps. It does not store database passwords.',
    ],
    evidence: [
      {
        url: 'https://docs.aws.amazon.com/secretsmanager/latest/userguide/intro.html#intro',
        quote:
          'With Secrets Manager, you can configure an automatic rotation schedule for your secrets. This enables you to replace long-term secrets with short-term ones, significantly reducing the risk of compromise.',
      },
    ],
  },
  {
    id: 'd2-029',
    task: '2.3',
    stem: 'A company wants a central store for application configuration data such as AMI IDs, endpoint URLs and license keys, with optional encryption through AWS KMS. Which solution meets these requirements MOST cost-effectively?',
    options: ['AWS Secrets Manager', 'AWS Config', 'AWS Key Management Service', 'AWS Systems Manager Parameter Store'],
    answers: [3],
    reasons: [
      'Secrets Manager is built for credentials that need automatic rotation and is billed per secret, which is more than this configuration data needs.',
      'Config records the configuration of AWS resources. It is not a store for application settings.',
      'KMS creates and manages encryption keys. It can encrypt the values but does not store configuration data.',
      'Parameter Store securely stores, organizes and retrieves configuration data such as AMI IDs and license keys, encrypts `SecureString` values with KMS, and its standard tier is free.',
    ],
    evidence: [
      {
        url: 'https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-parameter-store.html#parameter-store-use-cases',
        quote: 'Standard tier free; advanced tier and higher throughput billed',
      },
    ],
  },
  {
    id: 'd2-030',
    task: '2.3',
    stem: 'An application on an Amazon EC2 instance needs to upload files to an Amazon S3 bucket. What is the MOST secure way to give the application AWS credentials?',
    options: [
      'Attach an IAM role to the instance',
      'Store IAM user access keys in the application code',
      'Save IAM user access keys in a file on the instance',
      'Use the access keys of the root user',
    ],
    answers: [0],
    reasons: [
      'A role delivers temporary credentials to the instance and renews them automatically, so no long-term credentials are distributed.',
      'AWS recommends never putting access keys in application files, because anyone who reads the code gains the access.',
      'Long-term keys on the instance must be distributed and updated by hand, and they stay valid until someone revokes them.',
      'The root user has full access to the account, and AWS recommends not creating root user access keys at all.',
    ],
    evidence: [
      {
        url: 'https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_switch-role-ec2.html#id_roles_use_switch-role-ec2',
        quote:
          "Instead, you can and should use an IAM role to manage temporary credentials for applications that run on an Amazon EC2 instance. When you use a role, you don't have to distribute long-term credentials (such as sign-in credentials or access keys) to an Amazon EC2 instance.",
      },
    ],
  },
  {
    id: 'd2-031',
    task: '2.3',
    stem: 'Auditors who sign in to Account A need read-only access to resources in Account B. The company does not want to create IAM users for them in Account B. Which solution meets these requirements?',
    options: [
      'Share the access keys of an IAM user from Account B',
      'Create an IAM role in Account B that users from Account A can assume',
      'Attach a service control policy to Account B',
      'Create an Amazon Cognito user pool for the auditors',
    ],
    answers: [1],
    reasons: [
      'Sharing long-term access keys goes against best practices and still relies on an IAM user in Account B.',
      'A cross-account role in Account B trusts Account A and hands out temporary credentials, so no IAM users are needed in Account B.',
      'SCPs set the maximum permissions for accounts in an organization. They never grant access by themselves.',
      'Cognito user pools manage sign-in for the users of web and mobile apps, not workforce access to AWS accounts.',
    ],
    evidence: [
      {
        url: 'https://docs.aws.amazon.com/IAM/latest/UserGuide/tutorial_cross-account-with-roles.html#tutorial_cross-account-with-roles',
        quote:
          "You share resources in one account with users in a different account. By setting up cross-account access in this way, you don't have to create individual IAM users in each account.",
      },
    ],
  },
  {
    id: 'd2-032',
    task: '2.3',
    stem: 'A company uses AWS Organizations with 40 accounts. Employees must sign in once with their existing corporate identity provider and then reach the accounts they are assigned to. Which AWS service meets these requirements?',
    options: ['Amazon Cognito', 'IAM users in each account', 'AWS Resource Access Manager', 'AWS IAM Identity Center'],
    answers: [3],
    reasons: [
      'Cognito is designed for the customers of web and mobile apps, not for workforce access to many AWS accounts.',
      'IAM users in each account mean separate long-term credentials in every account, the opposite of signing in once.',
      'RAM shares resources such as subnets across accounts. It does not authenticate users.',
      'IAM Identity Center connects to an existing identity provider and gives workforce users access to their assigned AWS accounts from one portal.',
    ],
    evidence: [
      {
        url: 'https://docs.aws.amazon.com/singlesignon/latest/userguide/what-is.html#what-is',
        quote:
          'The AWS access portal is a user-friendly web portal that provides your users with seamless access to all their assigned applications, AWS accounts, or both.',
      },
    ],
  },
  {
    id: 'd2-033',
    task: '2.3',
    stem: 'A company wants its employees to access AWS with the identities they already have in the corporate directory, instead of creating IAM users with separate passwords. Which concept describes this approach?',
    options: [
      'Principle of least privilege',
      'Cross-account access',
      'Identity federation',
      'Service control policies',
    ],
    answers: [2],
    reasons: [
      'Least privilege is about granting only the permissions a task needs, not about where identities are managed.',
      'Cross-account access lets identities in one account use resources in another. It does not bring in identities from outside AWS.',
      'With federation, an identity provider manages the user identities outside AWS and those identities receive permissions to use AWS resources, so no IAM users are needed.',
      'SCPs set the maximum permissions for accounts in an organization. They do not authenticate users.',
    ],
    evidence: [
      {
        url: 'https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers.html#id_roles_providers',
        quote:
          'With an identity provider (IdP), you can manage your user identities outside of AWS and give these external user identities permissions to use AWS resources in your account. This is useful if your organization already has its own identity system, such as a corporate user directory.',
      },
    ],
  },
  {
    id: 'd2-034',
    task: '2.3',
    stem: 'Twenty developers in a company need the same set of permissions, and new developers join every month. What is the MOST efficient way to manage their permissions in IAM?',
    options: [
      'Attach an inline policy to each developer',
      'Attach the policy to an IAM user group and add the developers to it',
      'Create one IAM user that all developers share',
      'Create a service control policy for the developers',
    ],
    answers: [1],
    reasons: [
      'Inline policies are embedded in one identity each, so every change must be repeated for all twenty users.',
      'Every user in a group receives the permissions of the policies attached to the group, and a new developer only needs to be added to it.',
      'Sharing one IAM user removes individual credentials and makes it impossible to tell who did what.',
      'SCPs limit the maximum permissions of accounts in an organization. They do not grant permissions to users.',
    ],
    evidence: [
      {
        url: 'https://docs.aws.amazon.com/IAM/latest/UserGuide/id_groups.html#id_groups',
        quote:
          "You can attach an identity-based policy to a user group so that all of the users in the user group receive the policy's permissions.",
      },
    ],
  },
  {
    id: 'd2-035',
    task: '2.3',
    stem: 'Which statements about AWS managed policies in IAM are correct? (Select TWO.)',
    options: [
      'Customers can edit their permissions to fit a use case',
      'They are created and administered by AWS',
      'They are deleted when the identity they belong to is deleted',
      'They can be attached to many users, groups and roles',
      'They always grant least privilege for every use case',
    ],
    answers: [1, 3],
    reasons: [
      'Customers cannot change the permissions in AWS managed policies. They create customer managed policies for that.',
      'An AWS managed policy is a standalone policy that AWS creates and administers, and AWS updates it when new services or actions appear.',
      'That describes inline policies, which keep a one-to-one relationship with a single identity.',
      'A single AWS managed policy can be attached to many principal entities, in one account or in different accounts.',
      'AWS managed policies serve every customer, so they might not grant least privilege for a specific use case.',
    ],
    evidence: [
      {
        url: 'https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_managed-vs-inline.html#aws-managed-policies',
        quote: 'An AWS managed policy is a standalone policy that is created and administered by AWS.',
      },
      {
        url: 'https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_managed-vs-inline.html#aws-managed-policies',
        quote:
          'Notice that a single AWS managed policy can be attached to principal entities in different AWS accounts, and to different principal entities in a single AWS account.',
      },
    ],
  },
  {
    id: 'd2-036',
    task: '2.3',
    stem: 'A developer accidentally published the access keys of an IAM user in a public code repository. What should the company do to protect the account?',
    options: [
      'Replace the access key and delete the exposed one',
      'Change the console password of the IAM user',
      'Turn on MFA for the IAM user',
      'Turn on AWS CloudTrail logging for the account',
    ],
    answers: [0],
    reasons: [
      'When an access key might be compromised, AWS recommends updating the access key and deleting the previous one, so the exposed key stops working.',
      'Access keys are separate from the console password, so changing the password leaves the exposed keys valid.',
      'MFA protects console sign-in, but the exposed keys can still sign API requests unless policies require MFA.',
      'CloudTrail helps monitor how the keys are used, but it does not stop anyone from using them.',
    ],
    evidence: [
      {
        url: 'https://docs.aws.amazon.com/IAM/latest/UserGuide/securing_access-keys.html#iam-user-access-keys',
        quote:
          'If there is a risk that the access key could be compromised, update the access key and delete the previous access key.',
      },
    ],
  },
  {
    id: 'd2-037',
    task: '2.4',
    stem: 'A company wants to protect its web application behind Amazon CloudFront from SQL injection and cross-site scripting attacks. Which AWS service should the company use?',
    options: ['AWS WAF', 'AWS Shield Standard', 'Amazon GuardDuty', 'Amazon Inspector'],
    answers: [0],
    reasons: [
      'AWS WAF is a web application firewall that inspects HTTP(S) requests to resources such as CloudFront and can block attack patterns like SQL injection and XSS.',
      'Shield Standard defends against common network and transport layer DDoS attacks, not against malicious content inside web requests.',
      'GuardDuty detects threats by analyzing logs. It does not filter requests to the application.',
      'Inspector scans workloads for software vulnerabilities. It does not block incoming requests.',
    ],
    evidence: [
      {
        url: 'https://aws.amazon.com/waf/#why-aws-waf',
        quote:
          'With AWS WAF, you can create security rules that control bot traffic and block common attack patterns such as SQL injection or cross-site scripting (XSS).',
      },
    ],
  },
  {
    id: 'd2-038',
    task: '2.4',
    stem: 'A company with an online store wants protection against larger and more sophisticated DDoS attacks, access to the AWS Shield Response Team and cost protection against scaling charges caused by an attack. Which AWS service meets these requirements?',
    options: ['AWS Shield Standard', 'AWS WAF', 'AWS Firewall Manager', 'AWS Shield Advanced'],
    answers: [3],
    reasons: [
      'Shield Standard is automatic and free, but it does not include the Shield Response Team or cost protection.',
      'WAF filters web requests with rules. It does not provide DDoS cost protection or a response team.',
      'Firewall Manager applies protections across accounts centrally. The response team and the cost protection come from Shield Advanced.',
      'Shield Advanced adds protection against larger attacks, 24/7 access to the Shield Response Team with an eligible support plan, and DDoS cost protection against scaling charges.',
    ],
    evidence: [
      {
        url: 'https://aws.amazon.com/shield/features/#aws-shield-advanced--15i3hzr',
        quote:
          'Shield Advanced also gives you 24/7 access to the AWS Shield Response Team (SRT) and protection against DDoS-related spikes in your EC2, ELB, CloudFront, Global Accelerator, and Route 53 charges.',
      },
    ],
  },
  {
    id: 'd2-039',
    task: '2.4',
    stem: 'A company uses AWS Organizations and wants to configure its AWS WAF rules once and have them applied automatically to every account, including accounts added later. Which AWS service meets this requirement?',
    options: ['AWS Shield Advanced', 'AWS Firewall Manager', 'AWS Security Hub', 'AWS Config'],
    answers: [1],
    reasons: [
      'Shield Advanced protects resources against DDoS attacks. It does not deploy WAF rules across accounts.',
      'Firewall Manager lets the company set up protections such as WAF rules once and applies them across accounts and resources, even as new ones are added.',
      'Security Hub aggregates findings and checks security posture. It does not deploy firewall rules.',
      'Config evaluates resource configurations against rules, but it does not deploy WAF rules to accounts.',
    ],
    evidence: [
      {
        url: 'https://docs.aws.amazon.com/waf/latest/developerguide/what-is-aws-waf.html#fms-intro',
        quote:
          'With Firewall Manager, you set up your protections just once and the service automatically applies them across your accounts and resources, even as you add new accounts and resources.',
      },
    ],
  },
  {
    id: 'd2-040',
    task: '2.4',
    stem: 'A company wants a service that continuously analyzes AWS CloudTrail events, VPC flow logs and DNS logs to detect threats such as compromised credentials and cryptomining on its EC2 instances. Which AWS service meets these requirements?',
    options: ['Amazon Inspector', 'Amazon Macie', 'Amazon GuardDuty', 'AWS Trusted Advisor'],
    answers: [2],
    reasons: [
      'Inspector scans for software vulnerabilities and network exposure, not for suspicious activity in logs.',
      'Macie discovers sensitive data in S3. It does not analyze flow logs or DNS logs for threats.',
      'GuardDuty ingests CloudTrail management events, VPC flow logs and DNS logs and uses threat intelligence and machine learning to detect activity such as compromised credentials and cryptomining.',
      'Trusted Advisor checks configurations against best practices. It does not detect active threats in logs.',
    ],
    evidence: [
      {
        url: 'https://docs.aws.amazon.com/guardduty/latest/ug/what-is-guardduty.html#features-of-guardduty',
        quote:
          'When you enable GuardDuty in an AWS account, GuardDuty automatically starts ingesting the foundational data sources associated with that account. These data sources include AWS CloudTrail management events, VPC flow logs (from Amazon EC2 instances), and DNS logs.',
      },
    ],
  },
  {
    id: 'd2-041',
    task: '2.4',
    stem: 'A company wants to buy a third-party security product, such as a next-generation firewall, deploy it in its AWS environment and pay for it on its AWS bill. Where should the company look?',
    options: ['AWS Artifact', 'AWS Service Catalog', 'AWS Marketplace', 'AWS Security Hub'],
    answers: [2],
    reasons: [
      'Artifact provides AWS compliance documents, not third-party products.',
      'Service Catalog lets an organization manage catalogs of IT services it has already approved. It is not where the company buys software from vendors.',
      'AWS Marketplace is a curated catalog to find, buy and deploy third-party software, including security products, with the charges on the AWS bill.',
      'Security Hub aggregates security findings, including those from partner products, but it is not a store for buying them.',
    ],
    evidence: [
      {
        url: 'https://docs.aws.amazon.com/marketplace/latest/buyerguide/what-is-marketplace.html#what-is-marketplace',
        quote:
          'AWS Marketplace is a curated digital catalog that you can use to find, buy, deploy, and manage third-party software, data, and services that you need to build solutions and run your businesses.',
      },
    ],
  },
  {
    id: 'd2-042',
    task: '2.4',
    stem: 'A security engineer wants to read articles from AWS about new security features, best practices and solutions built with AWS security services. Which resource should the engineer use?',
    options: ['AWS Artifact', 'AWS Security Blog', 'AWS Health Dashboard', 'AWS Trusted Advisor'],
    answers: [1],
    reasons: [
      'Artifact provides compliance reports and agreements, not articles about security features.',
      'The AWS Security Blog publishes posts about AWS security services, features and best practices.',
      'The Health Dashboard shows events that affect AWS services and the resources of the account, not best practice articles.',
      'Trusted Advisor runs checks on the account. It does not publish articles.',
    ],
    evidence: [
      {
        url: 'https://aws.amazon.com/blogs/aws/the-new-aws-security-blog/',
        quote:
          'The new AWS Security Blog is your one-stop shop for best practices, how-to guides, customer stories, and more.',
      },
    ],
  },
  {
    id: 'd2-043',
    task: '2.4',
    stem: 'A company wants an AWS service that checks its account for security groups that allow unrestricted access to specific ports and for whether MFA is turned on for the root user. Which service meets these requirements?',
    options: ['Amazon Inspector', 'Amazon Macie', 'Amazon Detective', 'AWS Trusted Advisor'],
    answers: [3],
    reasons: [
      'Inspector finds software vulnerabilities and network exposure of workloads, but it does not check whether the root user has MFA.',
      'Macie evaluates S3 buckets and finds sensitive data. It does not check security groups or the root user.',
      'Detective investigates the root cause of security findings. It does not run best practice checks.',
      'Trusted Advisor security checks include Security Groups Specific Ports Unrestricted and MFA on Root Account.',
    ],
    evidence: [
      {
        url: 'https://docs.aws.amazon.com/awssupport/latest/user/security-checks.html#security-checks',
        quote:
          'Checks the root user credentials of an account and warns if multi-factor authentication (MFA) is not enabled.',
      },
    ],
  },
  {
    id: 'd2-044',
    task: '2.4',
    stem: 'A company must find out which of its Amazon S3 buckets contain personally identifiable information (PII), such as passport numbers. Which AWS service meets this requirement?',
    options: ['Amazon Macie', 'Amazon Inspector', 'Amazon GuardDuty', 'AWS Config'],
    answers: [0],
    reasons: [
      'Macie uses machine learning and pattern matching to discover sensitive data, including many types of PII, in S3 objects.',
      'Inspector scans compute workloads for vulnerabilities. It does not inspect the content of S3 objects.',
      'GuardDuty detects threats and malware, but it does not report which objects contain sensitive data.',
      'Config records bucket configurations, not the data inside the objects.',
    ],
    evidence: [
      {
        url: 'https://docs.aws.amazon.com/macie/latest/user/what-is-macie.html#macie-features',
        quote:
          'To discover sensitive data with Macie, you can use built-in criteria and techniques, such as machine learning and pattern matching, to analyze objects in S3 buckets.',
      },
    ],
  },
  {
    id: 'd2-045',
    task: '2.4',
    stem: 'Which statements describe AWS Shield Standard? (Select TWO.)',
    options: [
      'It protects all AWS customers automatically at no additional charge',
      'It includes 24/7 access to the Shield Response Team',
      'It blocks SQL injection in web requests',
      'It must be subscribed to separately for each resource',
      'It defends against common network and transport layer DDoS attacks',
    ],
    answers: [0, 4],
    reasons: [
      'All AWS customers benefit from the automatic protection of Shield Standard at no additional charge.',
      'Access to the Shield Response Team is a feature of Shield Advanced.',
      'Blocking SQL injection is the job of AWS WAF rules.',
      'Shield Standard needs no subscription. Shield Advanced is the tier that requires subscribing and adding protection to resources.',
      'Shield Standard defends against the most common, frequently occurring network and transport layer DDoS attacks.',
    ],
    evidence: [
      {
        url: 'https://docs.aws.amazon.com/waf/latest/developerguide/ddos-standard-summary.html#ddos-standard-summary',
        quote: 'All AWS customers benefit from the automatic protection of Shield Standard, at no additional charge.',
      },
      {
        url: 'https://docs.aws.amazon.com/waf/latest/developerguide/ddos-standard-summary.html#ddos-standard-summary',
        quote:
          'Shield Standard defends against the most common, frequently occurring network and transport layer DDoS attacks that target your website or applications.',
      },
    ],
  },
]

export const ptBR: readonly Question[] = [
  {
    id: 'd2-001',
    task: '2.1',
    stem: 'Quais tarefas são responsabilidade da AWS no modelo de responsabilidade compartilhada da AWS? (Selecione DUAS.)',
    options: [
      'Segurança física dos data centers',
      'Configuração dos security groups',
      'Criptografia em repouso dos dados do cliente',
      'Manutenção da infraestrutura de rede global',
      'Gestão dos usuários e permissões do IAM',
    ],
    answers: [0, 3],
    reasons: [
      'A AWS protege a infraestrutura que executa todos os seus serviços, e isso inclui as instalações onde fica o hardware.',
      'Security groups são regras de firewall que o cliente configura nas próprias instâncias, então fazem parte da segurança na nuvem.',
      'O cliente gerencia os próprios dados, incluindo as opções de criptografia, mesmo quando a AWS oferece os recursos de criptografia.',
      'A infraestrutura que a AWS protege é formada pelo hardware, software, rede e instalações que executam os serviços da AWS.',
      'O cliente decide quem pode acessar seus recursos e usa o IAM para aplicar as permissões adequadas.',
    ],
    evidence: [
      {
        url: 'https://aws.amazon.com/pt/compliance/shared-responsibility-model/#content-0',
        quote:
          'A AWS é responsável pela proteção da infraestrutura global que executa todos os serviços oferecidos na Nuvem AWS. Essa infraestrutura é composta por hardware, software, redes e instalações que executam os Serviços de Nuvem AWS.',
      },
      {
        url: 'https://aws.amazon.com/pt/compliance/shared-responsibility-model/#content-0',
        quote:
          'A AWS é responsável pela proteção da infraestrutura global que executa todos os serviços oferecidos na Nuvem AWS. Essa infraestrutura é composta por hardware, software, redes e instalações que executam os Serviços de Nuvem AWS.',
      },
    ],
  },
  {
    id: 'd2-002',
    task: '2.1',
    stem: 'Uma empresa executa sua aplicação em instâncias do Amazon EC2. No modelo de responsabilidade compartilhada da AWS, qual tarefa é responsabilidade da empresa?',
    options: [
      'Trocar discos com falha nos servidores físicos',
      'Aplicar patches no sistema operacional convidado',
      'Manter a camada de virtualização',
      'Proteger as instalações do data center',
    ],
    answers: [1],
    reasons: [
      'O hardware dos hosts pertence à infraestrutura que a AWS opera. O cliente nunca mexe nos servidores físicos.',
      'Quem implanta instâncias do EC2 gerencia o sistema operacional convidado, incluindo atualizações e patches de segurança, e o software que instala nele.',
      'A AWS opera os componentes desde o sistema operacional do host e a camada de virtualização até a segurança física das instalações.',
      'A segurança física das instalações é responsabilidade da AWS, e o cliente a herda.',
    ],
    evidence: [
      {
        url: 'https://aws.amazon.com/pt/compliance/shared-responsibility-model/#content-1',
        quote:
          'Os clientes que implantam uma instância do Amazon EC2 são responsáveis pelo gerenciamento do sistema operacional convidado (o que inclui atualizações e patches de segurança), por qualquer utilitário ou software de aplicativo instalado pelo cliente nas instâncias, bem como pela configuração do firewall disponibilizado pela AWS (chamado de grupo de segurança) em cada instância.',
      },
    ],
  },
  {
    id: 'd2-003',
    task: '2.1',
    stem: 'Uma empresa move seu banco de dados de instâncias do Amazon EC2 para o Amazon RDS. Qual tarefa passa da empresa para a AWS?',
    options: [
      'Otimizar as consultas da aplicação',
      'Controlar quais usuários acessam o banco',
      'Classificar os dados guardados nas tabelas',
      'Aplicar patches no mecanismo do banco',
    ],
    answers: [3],
    reasons: [
      'A otimização da aplicação e das consultas continua com o cliente, tanto no EC2 quanto no RDS.',
      'O cliente continua controlando o acesso ao banco, com usuários do banco, IAM e security groups.',
      'O cliente continua responsável pelos próprios dados e por decidir quão sensíveis eles são.',
      'No EC2, o cliente aplica os patches no sistema operacional e no mecanismo de banco. O Amazon RDS assume os patches de software, os backups e a alta disponibilidade.',
    ],
    evidence: [
      {
        url: 'https://docs.aws.amazon.com/pt_br/AmazonRDS/latest/UserGuide/Welcome.html#Welcome.Concepts.on-prem',
        quote: 'O Amazon RDS gerencia backups, patches de software, detecção automática de falhas e recuperação.',
      },
    ],
  },
  {
    id: 'd2-004',
    task: '2.1',
    stem: 'Quais controles o modelo de responsabilidade compartilhada da AWS classifica como controles compartilhados, que se aplicam à AWS e ao cliente em camadas diferentes? (Selecione DUAS.)',
    options: [
      'Controles físicos e ambientais',
      'Gerenciamento de patches',
      'Conscientização e treinamento',
      'Segurança por zonas para os dados do cliente',
      'Descarte do hardware dos data centers',
    ],
    answers: [1, 2],
    reasons: [
      'Controles físicos e ambientais são controles herdados. O cliente os herda integralmente da AWS.',
      'A AWS corrige falhas na sua infraestrutura, e o cliente aplica os patches nos seus sistemas operacionais convidados e aplicações.',
      'A AWS treina os próprios funcionários, e o cliente precisa treinar os dele.',
      'Rotear ou separar dados por zonas dentro de ambientes de segurança é um controle específico do cliente, de responsabilidade exclusiva dele.',
      'Descartar o hardware dos data centers faz parte da infraestrutura física que só a AWS opera.',
    ],
    evidence: [
      {
        url: 'https://aws.amazon.com/pt/compliance/shared-responsibility-model/#content-3',
        quote:
          'Gerenciamento de patches: a AWS é responsável pela aplicação de patches e pela correção de falhas na infraestrutura, mas os clientes são responsáveis pela aplicação de patches em seu SO convidado e nos seus aplicativos.',
      },
      {
        url: 'https://aws.amazon.com/pt/compliance/shared-responsibility-model/#content-3',
        quote:
          'Conhecimentos e treinamento: a AWS treina funcionários da AWS, mas o cliente deve treinar seus próprios funcionários.',
      },
    ],
  },
  {
    id: 'd2-005',
    task: '2.1',
    stem: 'Uma empresa executa código em funções do AWS Lambda. No modelo de responsabilidade compartilhada da AWS, qual tarefa é responsabilidade da AWS?',
    options: [
      'Aplicar patches nos servidores que executam as funções',
      'Escrever código seguro para as funções',
      'Conceder permissões de menor privilégio às funções',
      'Proteger os dados sensíveis que as funções processam',
    ],
    answers: [0],
    reasons: [
      'O Lambda gerencia a infraestrutura por baixo, incluindo manutenção dos servidores, provisionamento de capacidade, escalabilidade e patches.',
      'O código da função é escrito pelo cliente e pertence a ele, então sua segurança continua com o cliente.',
      'O cliente configura as permissões do IAM que as funções usam.',
      'O cliente é sempre responsável pelos próprios dados, qualquer que seja o serviço que os processa.',
    ],
    evidence: [
      {
        url: 'https://docs.aws.amazon.com/pt_br/lambda/latest/dg/welcome.html#welcome',
        quote:
          'O Lambda gerencia automaticamente a infraestrutura subjacente, inclusive a manutenção de servidores, o provisionamento de capacidade, a escalabilidade e a aplicação de patches, para que você possa se concentrar na lógica da aplicação.',
      },
    ],
  },
  {
    id: 'd2-006',
    task: '2.1',
    stem: 'Qual serviço da AWS exige que o cliente execute a MAIOR quantidade de tarefas de configuração e gerenciamento de segurança?',
    options: ['Amazon S3', 'AWS Lambda', 'Amazon EC2', 'Amazon DynamoDB'],
    answers: [2],
    reasons: [
      'O S3 é um serviço abstraído. A AWS opera a infraestrutura, o sistema operacional e a plataforma, e o cliente gerencia seus dados e acessos.',
      'No Lambda, a AWS gerencia os servidores, o sistema operacional deles e os patches, o que deixa menos tarefas para o cliente.',
      'O EC2 é infraestrutura como serviço. O cliente gerencia o sistema operacional convidado, o software que instala e os security groups de cada instância.',
      'O DynamoDB é um serviço abstraído. A AWS opera a infraestrutura e a plataforma, e o cliente gerencia seus dados e permissões.',
    ],
    evidence: [
      {
        url: 'https://aws.amazon.com/pt/compliance/shared-responsibility-model/#content-1',
        quote:
          'Por exemplo, um serviço como o Amazon Elastic Compute Cloud (Amazon EC2) é categorizado como Infrastructure as a Service (IaaS – Infraestrutura como serviço) e, dessa forma, exige que o cliente execute todas as tarefas necessárias de configuração e gerenciamento da segurança.',
      },
    ],
  },
  {
    id: 'd2-007',
    task: '2.1',
    stem: 'Uma empresa guarda registros sensíveis de clientes no Amazon DynamoDB. No modelo de responsabilidade compartilhada da AWS, qual tarefa é responsabilidade da empresa?',
    options: [
      'Aplicar patches no software do banco',
      'Trocar o hardware de armazenamento com falha',
      'Gerenciar os dados e as permissões de acesso a eles',
      'Manter os servidores por trás das tabelas',
    ],
    answers: [2],
    reasons: [
      'Em serviços abstraídos como o DynamoDB, a AWS opera a camada de infraestrutura, o sistema operacional e a plataforma, incluindo o software do banco.',
      'O hardware de armazenamento faz parte da infraestrutura que a AWS protege e mantém.',
      'Em serviços abstraídos, o cliente gerencia os próprios dados, incluindo opções de criptografia e classificação, e usa o IAM para aplicar as permissões adequadas.',
      'O DynamoDB é um serviço gerenciado, então a AWS opera os servidores por trás das tabelas.',
    ],
    evidence: [
      {
        url: 'https://aws.amazon.com/pt/compliance/shared-responsibility-model/#content-1',
        quote:
          'Os clientes são responsáveis por gerenciar os dados deles (o que inclui opções de criptografia), classificando os ativos e usando as ferramentas de IAM para aplicar as permissões apropriadas.',
      },
    ],
  },
  {
    id: 'd2-008',
    task: '2.1',
    stem: 'Uma empresa migra uma aplicação do próprio data center para instâncias do Amazon EC2. Qual responsabilidade passa da empresa para a AWS?',
    options: [
      'Manter os servidores físicos e seu hardware',
      'Aplicar patches no sistema operacional das instâncias',
      'Instalar e atualizar o software da aplicação',
      'Fazer backup dos dados guardados pela aplicação',
    ],
    answers: [0],
    reasons: [
      'Com o EC2, a AWS assume a manutenção dos servidores, o ciclo de vida do hardware e a energia, a rede e a refrigeração que a empresa cuidava no local.',
      'No EC2, o cliente continua aplicando patches no sistema operacional, como fazia no próprio data center.',
      'O cliente continua instalando e atualizando o software que roda nas suas instâncias.',
      'Os backups de uma aplicação no EC2 continuam com o cliente, ao contrário de um serviço gerenciado como o Amazon RDS.',
    ],
    evidence: [
      {
        url: 'https://docs.aws.amazon.com/pt_br/AmazonRDS/latest/UserGuide/Welcome.html#Welcome.Concepts.comparison',
        quote:
          'A AWS gerencia as camadas de hardware, o que elimina parte do trabalho de gerenciar um servidor de banco de dados on-premises.',
      },
    ],
  },
  {
    id: 'd2-009',
    task: '2.2',
    stem: 'Um auditor externo pede a uma empresa os relatórios SOC e ISO da AWS que mostram como a AWS opera seus controles de segurança. Onde a empresa pode baixar esses relatórios?',
    options: ['AWS Trusted Advisor', 'AWS Security Hub', 'AWS Config', 'AWS Artifact'],
    answers: [3],
    reasons: [
      'O Trusted Advisor verifica a conta do cliente em relação às boas práticas. Ele não fornece relatórios de auditoria da AWS.',
      'O Security Hub avalia os recursos do cliente em relação a padrões de segurança. Ele não publica os relatórios que auditores escreveram sobre a AWS.',
      'O Config registra e avalia a configuração dos recursos do cliente, e não os controles da AWS.',
      'O AWS Artifact oferece downloads sob demanda de documentos de segurança e conformidade da AWS, como relatórios SOC e certificações ISO, sem custo.',
    ],
    evidence: [
      {
        url: 'https://docs.aws.amazon.com/pt_br/artifact/latest/ug/what-is-aws-artifact.html#what-is-aws-artifact',
        quote:
          'AWS Artifact fornece downloads sob demanda de documentos de AWS segurança e conformidade. Por exemplo, relatórios sobre conformidade com os padrões da Organização Internacional de Padronização (ISO) e os Padrões de Segurança do Setor de Cartões de Pagamento (PCI) e relatórios de Controles Organizacionais e de Sistemas (SOC).',
      },
    ],
  },
  {
    id: 'd2-010',
    task: '2.2',
    stem: 'Uma empresa de saúde precisa aceitar um Business Associate Addendum (BAA) com a AWS antes de processar informações de saúde protegidas. Qual serviço da AWS a empresa deve usar para revisar e aceitar o acordo?',
    options: ['AWS Organizations', 'AWS Artifact', 'AWS Control Tower', 'AWS Marketplace'],
    answers: [1],
    reasons: [
      'O Organizations gerencia várias contas de forma centralizada. O acordo em si é revisado e aceito no AWS Artifact, que pode aplicá-lo a todas as contas de uma organização.',
      'O AWS Artifact permite revisar, aceitar e acompanhar acordos com a AWS, como o BAA, para uma conta ou para uma organização inteira.',
      'O Control Tower configura um ambiente multicontas governado. Ele não trata de acordos com a AWS.',
      'O Marketplace é um catálogo para comprar software de terceiros, e não um lugar para aceitar acordos com a AWS.',
    ],
    evidence: [
      {
        url: 'https://docs.aws.amazon.com/pt_br/artifact/latest/ug/managing-agreements.html#managing-agreements',
        quote:
          'No AWS Artifact console, você pode revisar e aceitar esses contratos e designar um Conta da AWS que possa processar legalmente a PHI.',
      },
    ],
  },
  {
    id: 'd2-011',
    task: '2.2',
    stem: 'Uma equipe de segurança quer descobrir qual usuário do IAM apagou um bucket do Amazon S3 ontem e de qual endereço IP veio a requisição. Qual serviço da AWS fornece essa informação?',
    options: ['Amazon CloudWatch', 'Amazon GuardDuty', 'AWS Config', 'AWS CloudTrail'],
    answers: [3],
    reasons: [
      'O CloudWatch coleta métricas, logs e alarmes sobre desempenho e saúde operacional. Ele não é o registro de quem chamou cada API.',
      'O GuardDuty analisa logs para detectar ameaças, mas não é o registro de cada chamada de API e de quem a fez.',
      'O Config registra como os recursos estavam configurados ao longo do tempo, e não a identidade e o IP de quem os alterou.',
      'O CloudTrail registra as chamadas de API com a identidade de quem chamou, o horário, o endereço IP de origem e os parâmetros da requisição.',
    ],
    evidence: [
      {
        url: 'https://docs.aws.amazon.com/pt_br/whitepapers/latest/aws-overview/management-governance.html#aws-cloudtrail',
        quote:
          'Entre as informações registradas estão a identidade do chamador da API, a hora da chamada de API, o endereço IP de origem do chamador da API, os parâmetros de solicitação e os elementos de resposta retornados pelo serviço da AWS.',
      },
    ],
  },
  {
    id: 'd2-012',
    task: '2.2',
    stem: 'Quais ações ajudam a proteger dados em trânsito? (Selecione DUAS.)',
    options: [
      'Usar listeners HTTPS com TLS em um Application Load Balancer',
      'Ativar a criptografia padrão em um bucket do Amazon S3',
      'Criptografar volumes do Amazon EBS com chaves do AWS KMS',
      'Criptografar os snapshots de um banco do Amazon RDS',
      'Conectar a rede local à VPC com uma VPN IPsec',
    ],
    answers: [0, 4],
    reasons: [
      'O TLS criptografa o tráfego entre os clientes e o load balancer enquanto ele passa pela rede.',
      'A criptografia padrão do bucket protege os objetos enquanto estão armazenados, ou seja, é criptografia em repouso.',
      'A criptografia do EBS protege os dados guardados nos volumes, ou seja, é criptografia em repouso.',
      'Criptografar snapshots protege os dados de backup enquanto estão armazenados, ou seja, é criptografia em repouso.',
      'Uma VPN IPsec criptografa o tráfego entre as duas redes, o que protege os dados enquanto circulam entre elas.',
    ],
    evidence: [
      {
        url: 'https://docs.aws.amazon.com/pt_br/elasticloadbalancing/latest/userguide/data-protection.html#encryption-transit',
        quote:
          'O Elastic Load Balancing simplifica o processo de criação de aplicações Web seguras ao encerrar o tráfego HTTPS e TLS dos clientes no balanceador de carga. O load balancer executa o trabalho de criptografar e descriptografar o tráfego, em vez de exigir que cada instância do EC2 lide com o trabalho de encerramento do TLS.',
      },
      {
        url: 'https://docs.aws.amazon.com/pt_br/vpn/latest/s2svpn/VPC_VPN.html#concepts',
        quote: 'um link criptografado em que os dados podem transmitir da rede do cliente para a AWS ou vice-versa.',
      },
    ],
  },
  {
    id: 'd2-013',
    task: '2.2',
    stem: 'Uma empresa precisa mostrar aos auditores como seus security groups estavam configurados em qualquer momento do último ano e precisa ser avisada quando um recurso violar uma de suas regras de conformidade. Qual serviço da AWS atende a esses requisitos?',
    options: ['AWS CloudTrail', 'AWS Config', 'Amazon Inspector', 'AWS Trusted Advisor'],
    answers: [1],
    reasons: [
      'O CloudTrail registra as chamadas de API que alteraram recursos, mas não mantém histórico de configuração nem avalia recursos contra regras.',
      'O Config mantém o histórico de configuração dos recursos, incluindo as regras dos security groups, e suas regras marcam recursos fora de conformidade e enviam notificações.',
      'O Inspector procura vulnerabilidades de software e exposição de rede nas cargas de trabalho. Ele não guarda histórico de configuração.',
      'O Trusted Advisor executa verificações de boas práticas, mas não registra a configuração passada de cada recurso para auditorias.',
    ],
    evidence: [
      {
        url: 'https://docs.aws.amazon.com/pt_br/config/latest/developerguide/WhatIsConfig.html#scenarios-resource-administration',
        quote:
          'Você pode usar as regras do AWS Config para avaliar as definições de configuração de seus recursos da AWS. Quando o AWS Config detecta que um recurso viola as condições de uma de suas regras, o AWS Config sinaliza o recurso como não compatível e envia uma notificação.',
      },
    ],
  },
  {
    id: 'd2-014',
    task: '2.2',
    stem: 'Uma empresa quer centralizar os arquivos de log das suas aplicações e instâncias do Amazon EC2, pesquisar padrões de erro neles e ser avisada quando os erros passarem de um limite. Qual serviço da AWS atende a esses requisitos?',
    options: ['AWS CloudTrail', 'AWS Config', 'Amazon CloudWatch Logs', 'Amazon Detective'],
    answers: [2],
    reasons: [
      'O CloudTrail registra a atividade de API na conta. Ele não coleta arquivos de log das aplicações nas instâncias.',
      'O Config registra configurações de recursos, e não logs de aplicação.',
      'O CloudWatch Logs centraliza logs de sistemas, aplicações e serviços da AWS, permite pesquisá-los e transforma padrões dos logs em métricas que podem disparar alarmes.',
      'O Detective ajuda a investigar achados de segurança. Ele não é um repositório central de logs de aplicação.',
    ],
    evidence: [
      {
        url: 'https://docs.aws.amazon.com/pt_br/AmazonCloudWatch/latest/logs/WhatIsCloudWatchLogs.html#WhatIsCloudWatchLogs',
        quote:
          'CloudWatch O Logs permite que você centralize os registros de todos os seus sistemas, aplicativos e AWS serviços que você usa, em um único serviço altamente escalável. Em seguida, você pode facilmente visualizá-los, pesquisá-los em busca de códigos de erro ou padrões específicos, filtrá-los com base em campos específicos ou arquivá-los com segurança para futuras análises.',
      },
    ],
  },
  {
    id: 'd2-015',
    task: '2.2',
    stem: 'Uma empresa quer que os usuários acessem seu site em um Application Load Balancer por HTTPS. Qual serviço da AWS cria, armazena e renova os certificados SSL/TLS que criptografam esse tráfego?',
    options: ['AWS Certificate Manager', 'AWS Key Management Service', 'AWS Secrets Manager', 'AWS CloudHSM'],
    answers: [0],
    reasons: [
      'O ACM cria, armazena e renova certificados SSL/TLS públicos e privados para serviços integrados como o Elastic Load Balancing e o CloudFront.',
      'O KMS cria e controla as chaves que criptografam e assinam dados. Ele não emite certificados TLS para sites.',
      'O Secrets Manager armazena e rotaciona segredos como credenciais de banco. Para certificados, a AWS recomenda o ACM.',
      'O CloudHSM oferece módulos de segurança de hardware dedicados, que o cliente gerencia. Ele não emite nem renova certificados de sites.',
    ],
    evidence: [
      {
        url: 'https://docs.aws.amazon.com/pt_br/acm/latest/userguide/acm-overview.html#acm-overview',
        quote:
          'Gerenciador de certificados da AWS (ACM) lida com a complexidade de criar, armazenar e renovar SSL/TLS X.509 certificados e chaves públicos e privados que protegem seus AWS sites e aplicativos.',
      },
    ],
  },
  {
    id: 'd2-016',
    task: '2.2',
    stem: 'Uma empresa precisa criptografar dados em repouso no Amazon S3 e no Amazon EBS e precisa controlar quais usuários podem usar as chaves de criptografia. Qual serviço da AWS a empresa deve usar para criar e gerenciar as chaves?',
    options: ['AWS Key Management Service', 'AWS Certificate Manager', 'Amazon Macie', 'AWS Secrets Manager'],
    answers: [0],
    reasons: [
      'O KMS cria e controla as chaves que criptografam os dados, as protege em módulos de segurança de hardware validados e usa key policies para que só usuários confiáveis as usem.',
      'O ACM gerencia certificados SSL/TLS para criptografia em trânsito, e não chaves para dados em repouso.',
      'O Macie descobre dados sensíveis no S3. Ele não cria nem gerencia chaves de criptografia.',
      'O Secrets Manager guarda segredos como senhas. Para chaves de criptografia, a AWS recomenda o KMS.',
    ],
    evidence: [
      {
        url: 'https://docs.aws.amazon.com/pt_br/kms/latest/developerguide/overview.html#overview',
        quote:
          'AWS Key Management Service (AWS KMS) é um serviço AWS gerenciado que facilita a criação e o controle das chaves usadas para criptografar e assinar seus dados.',
      },
    ],
  },
  {
    id: 'd2-017',
    task: '2.2',
    stem: 'Uma empresa que processa pagamentos com cartão de crédito precisa confirmar que um serviço específico da AWS foi avaliado no programa de conformidade PCI DSS. Onde a empresa deve consultar?',
    options: [
      'AWS Health Dashboard',
      'AWS Trusted Advisor',
      'AWS Services in Scope by Compliance Program',
      'AWS Security Hub',
    ],
    answers: [2],
    reasons: [
      'O Health Dashboard informa eventos que afetam os serviços da AWS e os recursos da conta. Ele não lista programas de conformidade.',
      'O Trusted Advisor verifica a conta em relação às boas práticas. Ele não mostra quais serviços cada programa de conformidade cobre.',
      'Essa página da AWS lista os serviços no escopo de cada programa de garantia, como PCI, SOC e o BAA da HIPAA, porque a cobertura varia de um serviço para outro.',
      'O Security Hub pode verificar os recursos da empresa em relação ao padrão PCI DSS, mas não mostra quais serviços da AWS os auditores avaliaram.',
    ],
    evidence: [
      {
        url: 'https://aws.amazon.com/pt/compliance/services-in-scope/',
        quote: 'Essa página oferece uma lista de serviços da AWS no escopo de programas de garantia da AWS.',
      },
    ],
  },
  {
    id: 'd2-018',
    task: '2.2',
    stem: 'Uma regulamentação exige que uma empresa europeia mantenha os dados dos seus clientes dentro da União Europeia. Como a AWS ajuda a empresa a cumprir esse requisito?',
    options: [
      'A AWS mantém os dados em edge locations perto dos clientes',
      'A empresa escolhe as Regiões da AWS onde seu conteúdo fica armazenado',
      'O AWS Shield impede que os dados saiam do continente',
      'O AWS Artifact move os dados para uma Região em conformidade',
    ],
    answers: [1],
    reasons: [
      'Edge locations guardam conteúdo em cache para entrega com baixa latência. Elas não são uma forma de manter os dados dentro de uma jurisdição.',
      'O cliente escolhe as Regiões onde seu conteúdo fica armazenado, e a AWS não move nem replica esse conteúdo para fora delas sem a concordância dele.',
      'O Shield protege contra ataques DDoS. Ele não controla onde os dados ficam armazenados.',
      'O Artifact fornece relatórios e acordos de conformidade. Ele não armazena nem move dados de clientes.',
    ],
    evidence: [
      {
        url: 'https://aws.amazon.com/pt/compliance/data-privacy-faq/#commitments--1yvnqhg',
        quote: 'You choose the AWS Region(s) in which your content is stored.',
      },
    ],
  },
  {
    id: 'd2-019',
    task: '2.2',
    stem: 'Quais recursos o AWS Security Hub CSPM oferece? (Selecione DUAS.)',
    options: [
      'Procurar vulnerabilidades de software em instâncias do EC2',
      'Filtrar requisições HTTP maliciosas para aplicações web',
      'Executar verificações automáticas contra padrões como CIS e PCI DSS',
      'Agregar achados do GuardDuty, do Inspector e do Macie',
      'Fornecer relatórios de conformidade da AWS para auditores',
    ],
    answers: [2, 3],
    reasons: [
      'Procurar vulnerabilidades conhecidas de software nas cargas de trabalho é o papel do Amazon Inspector, que pode enviar seus achados ao Security Hub CSPM.',
      'Filtrar requisições web é o papel do AWS WAF.',
      'O Security Hub CSPM, nome atual do serviço original de postura do Security Hub, executa verificações contra as boas práticas da AWS e frameworks externos como CIS, PCI DSS e NIST.',
      'O Security Hub CSPM coleta achados do GuardDuty, do Inspector, do Macie e de produtos de terceiros compatíveis, o que dá uma visão única dos problemas de segurança.',
      'Relatórios de conformidade da AWS, como os relatórios SOC, são baixados no AWS Artifact.',
    ],
    evidence: [
      {
        url: 'https://docs.aws.amazon.com/pt_br/securityhub/latest/userguide/what-is-securityhub.html#what-is-securityhub',
        quote:
          'Isso inclui o padrão AWS Foundational Security Best Practices (FSBP) desenvolvido por e estruturas externas de conformidade AWS, como o Center for Internet Security (CIS), o Payment Card Industry Data Security Standard (PCI DSS) e o National Institute of Standards and Technology (NIST).',
      },
      {
        url: 'https://docs.aws.amazon.com/pt_br/securityhub/latest/userguide/what-is-securityhub.html#what-is-securityhub',
        quote:
          'Além de gerar descobertas de controle, o Security Hub CSPM também recebe descobertas de outros, Serviços da AWS como Amazon, Amazon GuardDuty Inspector e Amazon Macie, e de produtos de terceiros compatíveis. Isso fornece um único painel de controle sobre uma variedade de problemas relacionados à segurança.',
      },
    ],
  },
  {
    id: 'd2-020',
    task: '2.2',
    stem: 'Um auditor pede uma lista de todos os usuários do IAM de uma conta com a situação de suas senhas, chaves de acesso e dispositivos MFA. Qual recurso fornece essa informação em um único relatório?',
    options: [
      'Histórico de eventos do AWS CloudTrail',
      'Histórico de configuração do AWS Config',
      'Relatórios do AWS Artifact',
      'Relatório de credenciais do IAM',
    ],
    answers: [3],
    reasons: [
      'O histórico de eventos mostra a atividade de API recente, e não a situação atual das credenciais de cada usuário.',
      'O Config registra mudanças de configuração dos recursos, mas não gera um relatório de senhas, chaves de acesso e MFA de cada usuário.',
      'Os relatórios do Artifact documentam os controles da AWS, e não as credenciais da conta do cliente.',
      'O relatório de credenciais lista todos os usuários da conta e a situação de suas senhas, chaves de acesso e dispositivos MFA, e apoia o trabalho de auditoria e conformidade.',
    ],
    evidence: [
      {
        url: 'https://docs.aws.amazon.com/pt_br/IAM/latest/UserGuide/id_credentials_getting-report.html#id_credentials_getting-report',
        quote:
          'Você pode gerar e fazer o download de um relatório de credenciais que lista todos os usuários em sua conta e o status de diversas credenciais deles, incluindo senhas, chaves de acesso e dispositivos MFA.',
      },
    ],
  },
  {
    id: 'd2-021',
    task: '2.2',
    stem: 'Uma empresa quer verificar continuamente suas instâncias do Amazon EC2 e as imagens de contêiner no Amazon ECR em busca de vulnerabilidades de software conhecidas. Qual serviço da AWS atende a esse requisito?',
    options: ['Amazon GuardDuty', 'Amazon Inspector', 'Amazon Macie', 'Amazon Detective'],
    answers: [1],
    reasons: [
      'O GuardDuty detecta atividades suspeitas, como credenciais comprometidas e mineração de criptomoedas. Ele não avalia pacotes de software em busca de vulnerabilidades conhecidas.',
      'O Inspector descobre automaticamente instâncias do EC2, imagens de contêiner no ECR e funções Lambda e as verifica em busca de vulnerabilidades de software e exposição de rede não intencional.',
      'O Macie descobre dados sensíveis no Amazon S3. Ele não verifica instâncias nem imagens.',
      'O Detective ajuda a investigar a causa raiz de achados de segurança. Ele não procura vulnerabilidades.',
    ],
    evidence: [
      {
        url: 'https://docs.aws.amazon.com/pt_br/inspector/latest/user/what-is-inspector.html#what-is-inspector',
        quote:
          'O Amazon Inspector é um serviço de gerenciamento de vulnerabilidades que descobre workloads e as verifica continuamente em busca de vulnerabilidades de software e exposições não intencionais da rede.',
      },
    ],
  },
  {
    id: 'd2-022',
    task: '2.2',
    stem: 'Uma empresa precisa conseguir provar quem fez cada alteração nos seus recursos da AWS e qual era a configuração de cada recurso em qualquer momento. Quais serviços da AWS a empresa deve usar? (Selecione DUAS.)',
    options: ['Amazon Inspector', 'AWS CloudTrail', 'AWS Artifact', 'Amazon Macie', 'AWS Config'],
    answers: [1, 4],
    reasons: [
      'O Inspector encontra vulnerabilidades de software. Ele não registra alterações nem configurações.',
      'O CloudTrail registra a identidade de quem chamou a API, o horário e os parâmetros da requisição, o que mostra quem fez cada alteração.',
      'O Artifact fornece documentos de conformidade da AWS, e não registros da atividade na conta.',
      'O Macie descobre dados sensíveis no S3. Ele não acompanha mudanças de configuração.',
      'O Config mantém um histórico de configuração, então a empresa consegue ver os detalhes de um recurso em qualquer momento.',
    ],
    evidence: [
      {
        url: 'https://docs.aws.amazon.com/pt_br/whitepapers/latest/aws-overview/management-governance.html#aws-cloudtrail',
        quote:
          'Entre as informações registradas estão a identidade do chamador da API, a hora da chamada de API, o endereço IP de origem do chamador da API, os parâmetros de solicitação e os elementos de resposta retornados pelo serviço da AWS.',
      },
      {
        url: 'https://docs.aws.amazon.com/pt_br/whitepapers/latest/aws-overview/management-governance.html#aws-config',
        quote:
          'Com o AWS Config, você pode descobrir recursos existentes e excluídos da AWS, determinar sua conformidade geral com as regras e examinar detidamente os detalhes da configuração de um recurso a qualquer momento.',
      },
    ],
  },
  {
    id: 'd2-023',
    task: '2.3',
    stem: 'Um desenvolvedor precisa ler objetos de um bucket específico do Amazon S3 e de mais nada. Qual abordagem segue o princípio do menor privilégio?',
    options: [
      'Anexar uma política gerenciada pelo cliente que permite leitura apenas nesse bucket',
      'Anexar a política gerenciada pela AWS `AmazonS3ReadOnlyAccess`',
      'Anexar a política gerenciada pela AWS `AmazonS3FullAccess`',
      'Colocar o desenvolvedor em um grupo com a política `PowerUserAccess`',
    ],
    answers: [0],
    reasons: [
      'Menor privilégio é conceder só as permissões necessárias para a tarefa, como ações específicas em recursos específicos. Uma política personalizada restrita a um bucket faz isso.',
      'Essa política permite ler todos os buckets da conta, o que é mais acesso do que a tarefa exige.',
      'Essa política também permite gravar e apagar em todos os buckets, muito além de ler um bucket.',
      'Essa política dá acesso total a quase todos os serviços da AWS, o oposto do menor privilégio.',
    ],
    evidence: [
      {
        url: 'https://docs.aws.amazon.com/pt_br/IAM/latest/UserGuide/best-practices.html#grant-least-privilege',
        quote:
          'Ao definir permissões com as políticas do IAM, conceda apenas as permissões necessárias para executar uma tarefa.',
      },
    ],
  },
  {
    id: 'd2-024',
    task: '2.3',
    stem: 'Uma empresa tem uma conta da AWS independente, que não faz parte do AWS Organizations. Qual tarefa exige que a empresa entre como usuário root da conta?',
    options: [
      'Criar um usuário do IAM com permissões de administrador',
      'Atualizar os contatos alternativos da conta',
      'Ativar o AWS CloudTrail na conta',
      'Encerrar a conta da AWS',
    ],
    answers: [3],
    reasons: [
      'Qualquer identidade com as permissões certas do IAM pode criar usuários. A AWS recomenda um usuário administrativo para tarefas do dia a dia como essa.',
      'Os contatos alternativos e as informações de contato podem ser atualizados sem as credenciais do usuário root.',
      'O CloudTrail pode ser configurado por usuários ou roles do IAM que tenham as permissões certas.',
      'Uma conta independente, fora do AWS Organizations, exige as credenciais do usuário root para ser encerrada.',
    ],
    evidence: [
      {
        url: 'https://docs.aws.amazon.com/pt_br/IAM/latest/UserGuide/id_root-user.html#root-user-tasks',
        quote:
          'Contas da AWS autônomas que não fazem parte do AWS Organizations requerem credenciais de usuário-raiz para serem fechadas.',
      },
    ],
  },
  {
    id: 'd2-025',
    task: '2.3',
    stem: 'Quais ações são boas práticas recomendadas pela AWS para proteger o usuário root da conta? (Selecione DUAS.)',
    options: [
      'Ativar a autenticação multifator no usuário root',
      'Guardar as chaves de acesso do usuário root no AWS Secrets Manager',
      'Evitar criar chaves de acesso para o usuário root',
      'Usar o usuário root nas tarefas administrativas diárias',
      'Compartilhar a senha do usuário root com todos os administradores',
    ],
    answers: [0, 2],
    reasons: [
      'O MFA adiciona um segundo fator ao e-mail e à senha, e a AWS lista proteger o login do usuário root com MFA como uma boa prática para o usuário root.',
      'A AWS recomenda não criar chaves de acesso para o usuário root. Guardá-las em qualquer lugar ainda mantém credenciais de longo prazo muito privilegiadas.',
      'O usuário root tem acesso total a todos os serviços e recursos, incluindo o faturamento, então a AWS recomenda fortemente não criar chaves de acesso para ele.',
      'A AWS recomenda usar o usuário root só nas tarefas que o exigem e criar um usuário administrativo para o trabalho do dia a dia.',
      'A AWS recomenda não compartilhar as credenciais do usuário root com ninguém, exceto quem tem uma necessidade de negócio estrita.',
    ],
    evidence: [
      {
        url: 'https://docs.aws.amazon.com/pt_br/IAM/latest/UserGuide/root-user-best-practices.html#ru-bp-mfa',
        quote:
          'Como um usuário-raiz pode executar ações privilegiadas, é crucial adicionar a MFA (autenticação de múltiplos fatores) para o usuário-raiz como um segundo fator de autenticação, além do endereço de e-mail e senha como credenciais de login.',
      },
      {
        url: 'https://docs.aws.amazon.com/pt_br/IAM/latest/UserGuide/root-user-best-practices.html#ru-bp-access',
        quote:
          'É altamente recomendável que você não crie pares de chaves de acesso para seu usuário-raiz porque o usuário-raiz tem acesso total a todos os recursos e Serviços da AWS na conta, incluindo informações de faturamento.',
      },
    ],
  },
  {
    id: 'd2-026',
    task: '2.3',
    stem: 'Uma empresa exige que os usuários do IAM provem sua identidade com um dispositivo que possuem, além da senha, ao entrar no AWS Management Console. O que a empresa deve configurar?',
    options: [
      'Uma política de senha personalizada do IAM',
      'Chaves de acesso para cada usuário do IAM',
      'Autenticação multifator',
      'Uma role do IAM para cada usuário do IAM',
    ],
    answers: [2],
    reasons: [
      'Uma política de senha define regras de complexidade e expiração das senhas, mas a senha continua sendo o único fator.',
      'Chaves de acesso assinam requisições programáticas. Elas não acrescentam um fator ao login no console.',
      'O MFA exige uma resposta de um dispositivo, como uma passkey, uma chave de segurança ou um aplicativo autenticador, além das credenciais de login.',
      'Roles fornecem permissões temporárias. Elas não acrescentam um segundo fator ao login de um usuário no console.',
    ],
    evidence: [
      {
        url: 'https://docs.aws.amazon.com/pt_br/IAM/latest/UserGuide/id_credentials_mfa.html#id_credentials_mfa',
        quote:
          'A MFA adiciona segurança extra que exige que os usuários forneçam autenticação exclusiva de um mecanismo de MFA compatível com a AWS, além de credenciais de login, quando acessam sites ou serviços da AWS.',
      },
    ],
  },
  {
    id: 'd2-027',
    task: '2.3',
    stem: 'Quais requisitos uma empresa pode impor aos seus usuários do IAM com uma política de senha personalizada da conta? (Selecione DUAS.)',
    options: [
      'Bloquear o usuário após várias tentativas de login com falha',
      'Exigir um dispositivo MFA durante o login',
      'Aplicar as mesmas regras à senha do usuário root',
      'Definir um tamanho mínimo de senha',
      'Impedir a reutilização de senhas anteriores',
    ],
    answers: [3, 4],
    reasons: [
      'O IAM não oferece política de bloqueio. A AWS recomenda combinar uma política de senha forte com MFA.',
      'O MFA é configurado em cada identidade separadamente. Ele não é uma opção da política de senha.',
      'A política de senha do IAM não se aplica à senha do usuário root.',
      'A política de senha personalizada pode exigir um número mínimo de caracteres nas senhas dos usuários do IAM.',
      'A política de senha personalizada pode impedir que os usuários reutilizem um número definido de senhas anteriores.',
    ],
    evidence: [
      {
        url: 'https://docs.aws.amazon.com/pt_br/IAM/latest/UserGuide/id_credentials_passwords_account-policy.html#password-policy-details',
        quote:
          'Password minimum length (Comprimento mínimo da senha): especifique um mínimo de seis caracteres e um máximo de 128 caracteres.',
      },
      {
        url: 'https://docs.aws.amazon.com/pt_br/IAM/latest/UserGuide/id_credentials_passwords_account-policy.html#password-policy-details',
        quote:
          'Prevent password reuse (Impedir a reutilização de senha): você pode impedir que os usuários do IAM reutilizem um número específico de senhas anteriores.',
      },
    ],
  },
  {
    id: 'd2-028',
    task: '2.3',
    stem: 'Uma aplicação no Amazon EC2 se conecta a um banco de dados com uma senha escrita no código-fonte. A empresa quer tirar a senha do código e rotacioná-la automaticamente. Qual serviço da AWS atende a esses requisitos?',
    options: ['AWS Key Management Service', 'AWS Certificate Manager', 'AWS Secrets Manager', 'Amazon Cognito'],
    answers: [2],
    reasons: [
      'O KMS gerencia chaves de criptografia. Ele não guarda senhas de banco nem as rotaciona.',
      'O ACM gerencia certificados SSL/TLS, e não credenciais de banco.',
      'O Secrets Manager guarda as credenciais, que a aplicação busca em tempo de execução em vez de tê-las no código, e pode rotacioná-las em um agendamento automático.',
      'O Cognito cuida do cadastro e do login dos usuários de aplicações web e móveis. Ele não guarda senhas de banco.',
    ],
    evidence: [
      {
        url: 'https://docs.aws.amazon.com/pt_br/secretsmanager/latest/userguide/intro.html#intro',
        quote:
          'Com o Secrets Manager, é possível configurar uma programação de alternância automática para seus segredos. Isso permite que você substitua os segredos de longo prazo por outros de curto prazo, reduzindo significativamente o risco de comprometimento.',
      },
    ],
  },
  {
    id: 'd2-029',
    task: '2.3',
    stem: 'Uma empresa quer um repositório central para dados de configuração de aplicações, como IDs de AMI, URLs de endpoints e chaves de licença, com criptografia opcional pelo AWS KMS. Qual solução atende a esses requisitos com o MENOR custo?',
    options: ['AWS Secrets Manager', 'AWS Config', 'AWS Key Management Service', 'AWS Systems Manager Parameter Store'],
    answers: [3],
    reasons: [
      'O Secrets Manager foi feito para credenciais que precisam de rotação automática e é cobrado por segredo, o que é mais do que esses dados de configuração exigem.',
      'O Config registra a configuração dos recursos da AWS. Ele não é um repositório de configurações de aplicação.',
      'O KMS cria e gerencia chaves de criptografia. Ele pode criptografar os valores, mas não guarda dados de configuração.',
      'O Parameter Store armazena, organiza e recupera com segurança dados de configuração como IDs de AMI e chaves de licença, criptografa valores `SecureString` com o KMS e seu nível padrão é gratuito.',
    ],
    evidence: [
      {
        url: 'https://docs.aws.amazon.com/pt_br/systems-manager/latest/userguide/systems-manager-parameter-store.html#parameter-store-use-cases',
        quote: 'O plano padrão é gratuito; o plano avançado e os planos com maior throughput são cobrados',
      },
    ],
  },
  {
    id: 'd2-030',
    task: '2.3',
    stem: 'Uma aplicação em uma instância do Amazon EC2 precisa enviar arquivos para um bucket do Amazon S3. Qual é a forma MAIS segura de fornecer credenciais da AWS à aplicação?',
    options: [
      'Associar uma role do IAM à instância',
      'Guardar chaves de acesso de um usuário do IAM no código da aplicação',
      'Salvar chaves de acesso de um usuário do IAM em um arquivo na instância',
      'Usar as chaves de acesso do usuário root',
    ],
    answers: [0],
    reasons: [
      'Uma role entrega credenciais temporárias à instância e as renova automaticamente, então nenhuma credencial de longo prazo é distribuída.',
      'A AWS recomenda nunca colocar chaves de acesso em arquivos da aplicação, porque quem lê o código ganha o acesso.',
      'Chaves de longo prazo na instância precisam ser distribuídas e atualizadas manualmente, e continuam válidas até alguém revogá-las.',
      'O usuário root tem acesso total à conta, e a AWS recomenda não criar chaves de acesso para ele.',
    ],
    evidence: [
      {
        url: 'https://docs.aws.amazon.com/pt_br/IAM/latest/UserGuide/id_roles_use_switch-role-ec2.html#id_roles_use_switch-role-ec2',
        quote:
          'Em vez disso, você pode e deve usar um perfil do IAM para gerenciar credenciais temporárias para aplicações executadas em uma instância do Amazon EC2. Quando você usa um perfil, não é necessário distribuir credenciais de longo prazo (como credenciais de login ou chaves de acesso) para uma instância do Amazon EC2.',
      },
    ],
  },
  {
    id: 'd2-031',
    task: '2.3',
    stem: 'Auditores que entram na Conta A precisam de acesso somente leitura a recursos da Conta B. A empresa não quer criar usuários do IAM para eles na Conta B. Qual solução atende a esses requisitos?',
    options: [
      'Compartilhar as chaves de acesso de um usuário do IAM da Conta B',
      'Criar na Conta B uma role do IAM que usuários da Conta A possam assumir',
      'Anexar uma service control policy à Conta B',
      'Criar um user pool do Amazon Cognito para os auditores',
    ],
    answers: [1],
    reasons: [
      'Compartilhar chaves de acesso de longo prazo vai contra as boas práticas e ainda depende de um usuário do IAM na Conta B.',
      'Uma role entre contas na Conta B confia na Conta A e entrega credenciais temporárias, então não é preciso criar usuários do IAM na Conta B.',
      'SCPs definem as permissões máximas das contas de uma organização. Elas nunca concedem acesso sozinhas.',
      'User pools do Cognito gerenciam o login dos usuários de aplicações web e móveis, e não o acesso de funcionários a contas da AWS.',
    ],
    evidence: [
      {
        url: 'https://docs.aws.amazon.com/pt_br/IAM/latest/UserGuide/tutorial_cross-account-with-roles.html#tutorial_cross-account-with-roles',
        quote:
          'Você compartilha recursos em uma conta com usuários em outra conta. Ao configurar o acesso entre contas dessa forma, você não precisa criar usuários individuais do IAM em cada conta.',
      },
    ],
  },
  {
    id: 'd2-032',
    task: '2.3',
    stem: 'Uma empresa usa o AWS Organizations com 40 contas. Os funcionários precisam entrar uma única vez com o provedor de identidade corporativo que já existe e então acessar as contas atribuídas a eles. Qual serviço da AWS atende a esses requisitos?',
    options: [
      'Amazon Cognito',
      'Usuários do IAM em cada conta',
      'AWS Resource Access Manager',
      'AWS IAM Identity Center',
    ],
    answers: [3],
    reasons: [
      'O Cognito foi feito para os clientes de aplicações web e móveis, e não para o acesso de funcionários a várias contas da AWS.',
      'Usuários do IAM em cada conta significam credenciais de longo prazo separadas em todas as contas, o oposto de entrar uma única vez.',
      'O RAM compartilha recursos como sub-redes entre contas. Ele não autentica usuários.',
      'O IAM Identity Center se conecta a um provedor de identidade existente e dá aos funcionários acesso às contas da AWS atribuídas a eles a partir de um único portal.',
    ],
    evidence: [
      {
        url: 'https://docs.aws.amazon.com/pt_br/singlesignon/latest/userguide/what-is.html#what-is',
        quote:
          'O portal de AWS acesso é um portal da Web fácil de usar que fornece aos usuários acesso contínuo a todos os aplicativos atribuídos Contas da AWS, ou a ambos.',
      },
    ],
  },
  {
    id: 'd2-033',
    task: '2.3',
    stem: 'Uma empresa quer que seus funcionários acessem a AWS com as identidades que já têm no diretório corporativo, em vez de criar usuários do IAM com senhas separadas. Qual conceito descreve essa abordagem?',
    options: [
      'Princípio do menor privilégio',
      'Acesso entre contas',
      'Federação de identidades',
      'Service control policies',
    ],
    answers: [2],
    reasons: [
      'Menor privilégio é conceder só as permissões que uma tarefa exige, e não define onde as identidades são gerenciadas.',
      'O acesso entre contas permite que identidades de uma conta usem recursos de outra. Ele não traz identidades de fora da AWS.',
      'Na federação, um provedor de identidade gerencia as identidades dos usuários fora da AWS, e essas identidades recebem permissões para usar recursos da AWS, sem precisar de usuários do IAM.',
      'SCPs definem as permissões máximas das contas de uma organização. Elas não autenticam usuários.',
    ],
    evidence: [
      {
        url: 'https://docs.aws.amazon.com/pt_br/IAM/latest/UserGuide/id_roles_providers.html#id_roles_providers',
        quote:
          'Com um provedor de identidade (IdP), você pode gerenciar suas identidades de usuários fora da AWS e fornecer a esses usuários externos permissões para usar recursos da AWS na sua conta. Isso será útil se a sua organização já tiver seu próprio sistema de identidade, como um diretório de usuários corporativos.',
      },
    ],
  },
  {
    id: 'd2-034',
    task: '2.3',
    stem: 'Vinte desenvolvedores de uma empresa precisam do mesmo conjunto de permissões, e novos desenvolvedores entram todo mês. Qual é a forma MAIS eficiente de gerenciar essas permissões no IAM?',
    options: [
      'Anexar uma política inline a cada desenvolvedor',
      'Anexar a política a um grupo de usuários do IAM e colocar os desenvolvedores nele',
      'Criar um único usuário do IAM compartilhado por todos os desenvolvedores',
      'Criar uma service control policy para os desenvolvedores',
    ],
    answers: [1],
    reasons: [
      'Políticas inline ficam embutidas em uma identidade cada, então toda mudança precisa ser repetida nos vinte usuários.',
      'Todo usuário de um grupo recebe as permissões das políticas anexadas ao grupo, e um novo desenvolvedor só precisa ser adicionado a ele.',
      'Compartilhar um usuário do IAM elimina as credenciais individuais e torna impossível saber quem fez o quê.',
      'SCPs limitam as permissões máximas das contas de uma organização. Elas não concedem permissões a usuários.',
    ],
    evidence: [
      {
        url: 'https://docs.aws.amazon.com/pt_br/IAM/latest/UserGuide/id_groups.html#id_groups',
        quote:
          'Você pode anexar uma política baseada em identidade a um grupo de usuários para que todos os usuários do grupo de usuários recebem as permissões da política.',
      },
    ],
  },
  {
    id: 'd2-035',
    task: '2.3',
    stem: 'Quais afirmações sobre as políticas gerenciadas pela AWS no IAM estão corretas? (Selecione DUAS.)',
    options: [
      'O cliente pode editar suas permissões para cada caso de uso',
      'Elas são criadas e administradas pela AWS',
      'Elas são apagadas quando a identidade à qual pertencem é apagada',
      'Elas podem ser anexadas a vários usuários, grupos e roles',
      'Elas sempre concedem o menor privilégio em qualquer caso de uso',
    ],
    answers: [1, 3],
    reasons: [
      'O cliente não pode alterar as permissões das políticas gerenciadas pela AWS. Para isso, ele cria políticas gerenciadas pelo cliente.',
      'Uma política gerenciada pela AWS é uma política independente que a AWS cria e administra, e a AWS a atualiza quando surgem novos serviços ou ações.',
      'Isso descreve as políticas inline, que mantêm uma relação de um para um com uma única identidade.',
      'Uma mesma política gerenciada pela AWS pode ser anexada a várias entidades principais, em uma conta ou em contas diferentes.',
      'As políticas gerenciadas pela AWS servem a todos os clientes, então podem não conceder o menor privilégio para um caso de uso específico.',
    ],
    evidence: [
      {
        url: 'https://docs.aws.amazon.com/pt_br/IAM/latest/UserGuide/access_policies_managed-vs-inline.html#aws-managed-policies',
        quote: 'Uma política gerenciada pela AWS é uma política independente que é criada e administrada pela AWS.',
      },
      {
        url: 'https://docs.aws.amazon.com/pt_br/IAM/latest/UserGuide/access_policies_managed-vs-inline.html#aws-managed-policies',
        quote:
          'Uma única política gerenciada pela AWS pode ser anexada a entidades principais em diferentes Contas da AWS e a entidades principais diferentes em uma única Conta da AWS.',
      },
    ],
  },
  {
    id: 'd2-036',
    task: '2.3',
    stem: 'Um desenvolvedor publicou sem querer as chaves de acesso de um usuário do IAM em um repositório de código público. O que a empresa deve fazer para proteger a conta?',
    options: [
      'Substituir a chave de acesso e apagar a que foi exposta',
      'Trocar a senha de console do usuário do IAM',
      'Ativar o MFA para o usuário do IAM',
      'Ativar o registro do AWS CloudTrail na conta',
    ],
    answers: [0],
    reasons: [
      'Quando uma chave de acesso pode ter sido comprometida, a AWS recomenda atualizar a chave e apagar a anterior, para que a chave exposta pare de funcionar.',
      'As chaves de acesso são independentes da senha de console, então trocar a senha deixa as chaves expostas válidas.',
      'O MFA protege o login no console, mas as chaves expostas ainda conseguem assinar requisições de API, a menos que as políticas exijam MFA.',
      'O CloudTrail ajuda a monitorar o uso das chaves, mas não impede ninguém de usá-las.',
    ],
    evidence: [
      {
        url: 'https://docs.aws.amazon.com/pt_br/IAM/latest/UserGuide/securing_access-keys.html#iam-user-access-keys',
        quote:
          'Se houver risco de comprometimento da chave de acesso, atualize a chave de acesso e exclua a chave de acesso anterior.',
      },
    ],
  },
  {
    id: 'd2-037',
    task: '2.4',
    stem: 'Uma empresa quer proteger sua aplicação web, que fica atrás do Amazon CloudFront, contra ataques de SQL injection e cross-site scripting. Qual serviço da AWS a empresa deve usar?',
    options: ['AWS WAF', 'AWS Shield Standard', 'Amazon GuardDuty', 'Amazon Inspector'],
    answers: [0],
    reasons: [
      'O AWS WAF é um firewall de aplicações web que inspeciona as requisições HTTP(S) para recursos como o CloudFront e pode bloquear padrões de ataque como SQL injection e XSS.',
      'O Shield Standard defende contra ataques DDoS comuns nas camadas de rede e de transporte, e não contra conteúdo malicioso dentro das requisições web.',
      'O GuardDuty detecta ameaças analisando logs. Ele não filtra as requisições para a aplicação.',
      'O Inspector procura vulnerabilidades de software nas cargas de trabalho. Ele não bloqueia requisições recebidas.',
    ],
    evidence: [
      {
        url: 'https://aws.amazon.com/pt/waf/#por-que-usar-o-aws-waf',
        quote:
          'Com o AWS WAF, você pode criar regras de segurança que controlam o tráfego de bots e bloqueiam padrões de ataque comuns, como injeção de SQL ou cross-site scripting (XSS).',
      },
    ],
  },
  {
    id: 'd2-038',
    task: '2.4',
    stem: 'Uma empresa com uma loja online quer proteção contra ataques DDoS maiores e mais sofisticados, acesso ao AWS Shield Response Team e proteção de custos contra cobranças de escalabilidade causadas por um ataque. Qual serviço da AWS atende a esses requisitos?',
    options: ['AWS Shield Standard', 'AWS WAF', 'AWS Firewall Manager', 'AWS Shield Advanced'],
    answers: [3],
    reasons: [
      'O Shield Standard é automático e gratuito, mas não inclui o Shield Response Team nem a proteção de custos.',
      'O WAF filtra requisições web com regras. Ele não oferece proteção de custos contra DDoS nem uma equipe de resposta.',
      'O Firewall Manager aplica proteções em várias contas de forma centralizada. A equipe de resposta e a proteção de custos vêm do Shield Advanced.',
      'O Shield Advanced acrescenta proteção contra ataques maiores, acesso 24/7 ao Shield Response Team com um plano de suporte elegível e proteção de custos contra cobranças de escalabilidade causadas por DDoS.',
    ],
    evidence: [
      {
        url: 'https://aws.amazon.com/pt/shield/features/#aws-shield-avancado--15i3hzr',
        quote:
          'Além disso, o Shield Avançado disponibiliza acesso contínuo, 24 horas por dia e 7 dias por semana, à AWS Shield Response Team (SRT) e proteção contra aumentos de cobranças relacionados a DDoS em suas cobranças do EC2, do ELB, do CloudFront, do Global Accelerator e do Route 53.',
      },
    ],
  },
  {
    id: 'd2-039',
    task: '2.4',
    stem: 'Uma empresa usa o AWS Organizations e quer configurar suas regras do AWS WAF uma única vez e aplicá-las automaticamente a todas as contas, incluindo as que forem adicionadas depois. Qual serviço da AWS atende a esse requisito?',
    options: ['AWS Shield Advanced', 'AWS Firewall Manager', 'AWS Security Hub', 'AWS Config'],
    answers: [1],
    reasons: [
      'O Shield Advanced protege recursos contra ataques DDoS. Ele não distribui regras do WAF entre contas.',
      'O Firewall Manager permite configurar proteções como regras do WAF uma única vez e as aplica em todas as contas e recursos, mesmo quando novos são adicionados.',
      'O Security Hub agrega achados e verifica a postura de segurança. Ele não distribui regras de firewall.',
      'O Config avalia configurações de recursos contra regras, mas não distribui regras do WAF para as contas.',
    ],
    evidence: [
      {
        url: 'https://docs.aws.amazon.com/pt_br/waf/latest/developerguide/what-is-aws-waf.html#fms-intro',
        quote:
          'Com o Firewall Manager, você configura suas proteções apenas uma vez e o serviço aplica-as automaticamente em todas as contas e recursos, mesmo quando novos recursos e contas forem adicionados.',
      },
    ],
  },
  {
    id: 'd2-040',
    task: '2.4',
    stem: 'Uma empresa quer um serviço que analise continuamente os eventos do AWS CloudTrail, os VPC flow logs e os logs de DNS para detectar ameaças como credenciais comprometidas e mineração de criptomoedas nas suas instâncias do EC2. Qual serviço da AWS atende a esses requisitos?',
    options: ['Amazon Inspector', 'Amazon Macie', 'Amazon GuardDuty', 'AWS Trusted Advisor'],
    answers: [2],
    reasons: [
      'O Inspector procura vulnerabilidades de software e exposição de rede, e não atividade suspeita nos logs.',
      'O Macie descobre dados sensíveis no S3. Ele não analisa flow logs nem logs de DNS em busca de ameaças.',
      'O GuardDuty consome eventos de gerenciamento do CloudTrail, VPC flow logs e logs de DNS e usa inteligência de ameaças e machine learning para detectar atividades como credenciais comprometidas e mineração de criptomoedas.',
      'O Trusted Advisor verifica configurações em relação às boas práticas. Ele não detecta ameaças ativas nos logs.',
    ],
    evidence: [
      {
        url: 'https://docs.aws.amazon.com/pt_br/guardduty/latest/ug/what-is-guardduty.html#features-of-guardduty',
        quote:
          'Quando você ativa GuardDuty uma Conta da AWS, começa GuardDuty automaticamente a ingerir as fontes de dados fundamentais associadas a essa conta. Essas fontes de dados incluem eventos AWS CloudTrail de gerenciamento, registros de fluxo da VPC (de instâncias do Amazon EC2) e registros de DNS.',
      },
    ],
  },
  {
    id: 'd2-041',
    task: '2.4',
    stem: 'Uma empresa quer comprar um produto de segurança de terceiros, como um firewall de nova geração, implantá-lo no seu ambiente da AWS e pagar por ele na fatura da AWS. Onde a empresa deve procurar?',
    options: ['AWS Artifact', 'AWS Service Catalog', 'AWS Marketplace', 'AWS Security Hub'],
    answers: [2],
    reasons: [
      'O Artifact fornece documentos de conformidade da AWS, e não produtos de terceiros.',
      'O Service Catalog permite que uma organização gerencie catálogos de serviços de TI que já aprovou. Ele não é onde a empresa compra software de fornecedores.',
      'O AWS Marketplace é um catálogo curado para encontrar, comprar e implantar software de terceiros, incluindo produtos de segurança, com a cobrança na fatura da AWS.',
      'O Security Hub agrega achados de segurança, inclusive de produtos de parceiros, mas não é uma loja para comprá-los.',
    ],
    evidence: [
      {
        url: 'https://docs.aws.amazon.com/pt_br/marketplace/latest/buyerguide/what-is-marketplace.html#what-is-marketplace',
        quote:
          'AWS Marketplace é um catálogo digital com curadoria que você pode usar para encontrar, comprar, implantar e gerenciar software, dados e serviços de terceiros necessários para criar soluções e administrar seus negócios.',
      },
    ],
  },
  {
    id: 'd2-042',
    task: '2.4',
    stem: 'Um engenheiro de segurança quer ler artigos da AWS sobre novos recursos de segurança, boas práticas e soluções criadas com os serviços de segurança da AWS. Qual recurso o engenheiro deve usar?',
    options: ['AWS Artifact', 'AWS Security Blog', 'AWS Health Dashboard', 'AWS Trusted Advisor'],
    answers: [1],
    reasons: [
      'O Artifact fornece relatórios e acordos de conformidade, e não artigos sobre recursos de segurança.',
      'O AWS Security Blog publica posts sobre os serviços, os recursos e as boas práticas de segurança da AWS.',
      'O Health Dashboard mostra eventos que afetam os serviços da AWS e os recursos da conta, e não artigos de boas práticas.',
      'O Trusted Advisor executa verificações na conta. Ele não publica artigos.',
    ],
    evidence: [
      {
        url: 'https://aws.amazon.com/pt/blogs/aws/the-new-aws-security-blog/',
        quote:
          'The new AWS Security Blog is your one-stop shop for best practices, how-to guides, customer stories, and more.',
      },
    ],
  },
  {
    id: 'd2-043',
    task: '2.4',
    stem: 'Uma empresa quer um serviço da AWS que verifique na conta se há security groups que permitem acesso irrestrito a portas específicas e se o MFA está ativado no usuário root. Qual serviço atende a esses requisitos?',
    options: ['Amazon Inspector', 'Amazon Macie', 'Amazon Detective', 'AWS Trusted Advisor'],
    answers: [3],
    reasons: [
      'O Inspector encontra vulnerabilidades de software e exposição de rede das cargas de trabalho, mas não verifica se o usuário root tem MFA.',
      'O Macie avalia buckets do S3 e encontra dados sensíveis. Ele não verifica security groups nem o usuário root.',
      'O Detective investiga a causa raiz de achados de segurança. Ele não executa verificações de boas práticas.',
      'As verificações de segurança do Trusted Advisor incluem Security Groups Specific Ports Unrestricted e MFA on Root Account.',
    ],
    evidence: [
      {
        url: 'https://docs.aws.amazon.com/pt_br/awssupport/latest/user/security-checks.html#security-checks',
        quote:
          'Verifica as credenciais do usuário raiz de uma conta e avisa se a autenticação multifator (MFA) não estiver habilitada.',
      },
    ],
  },
  {
    id: 'd2-044',
    task: '2.4',
    stem: 'Uma empresa precisa descobrir quais dos seus buckets do Amazon S3 contêm informações de identificação pessoal (PII), como números de passaporte. Qual serviço da AWS atende a esse requisito?',
    options: ['Amazon Macie', 'Amazon Inspector', 'Amazon GuardDuty', 'AWS Config'],
    answers: [0],
    reasons: [
      'O Macie usa machine learning e correspondência de padrões para descobrir dados sensíveis, incluindo vários tipos de PII, nos objetos do S3.',
      'O Inspector procura vulnerabilidades nas cargas de computação. Ele não inspeciona o conteúdo dos objetos do S3.',
      'O GuardDuty detecta ameaças e malware, mas não informa quais objetos contêm dados sensíveis.',
      'O Config registra as configurações dos buckets, e não os dados dentro dos objetos.',
    ],
    evidence: [
      {
        url: 'https://docs.aws.amazon.com/pt_br/macie/latest/user/what-is-macie.html#macie-features',
        quote:
          'Para descobrir dados confidenciais com o Macie, é possível usar técnicas e critérios incorporados, como machine learning e comparação de padrões, para analisar objetos nos buckets do S3.',
      },
    ],
  },
  {
    id: 'd2-045',
    task: '2.4',
    stem: 'Quais afirmações descrevem o AWS Shield Standard? (Selecione DUAS.)',
    options: [
      'Ele protege todos os clientes da AWS automaticamente, sem custo adicional',
      'Ele inclui acesso 24/7 ao Shield Response Team',
      'Ele bloqueia SQL injection nas requisições web',
      'Ele precisa ser assinado separadamente para cada recurso',
      'Ele defende contra ataques DDoS comuns nas camadas de rede e de transporte',
    ],
    answers: [0, 4],
    reasons: [
      'Todos os clientes da AWS contam com a proteção automática do Shield Standard, sem custo adicional.',
      'O acesso ao Shield Response Team é um recurso do Shield Advanced.',
      'Bloquear SQL injection é o papel das regras do AWS WAF.',
      'O Shield Standard não exige assinatura. O Shield Advanced é o nível que exige assinar e adicionar proteção aos recursos.',
      'O Shield Standard defende contra os ataques DDoS mais comuns e frequentes nas camadas de rede e de transporte.',
    ],
    evidence: [
      {
        url: 'https://docs.aws.amazon.com/pt_br/waf/latest/developerguide/ddos-standard-summary.html#ddos-standard-summary',
        quote: 'Todos os AWS clientes se beneficiam da proteção automática do Shield Standard, sem custo adicional.',
      },
      {
        url: 'https://docs.aws.amazon.com/pt_br/waf/latest/developerguide/ddos-standard-summary.html#ddos-standard-summary',
        quote:
          'O Shield Standard se defende contra os ataques mais comuns e frequentes da camada DDo S de rede e transporte que têm como alvo seu site ou aplicativos.',
      },
    ],
  },
]
