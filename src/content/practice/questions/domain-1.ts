import type { Question } from '../types'

export const enUS: readonly Question[] = [
  {
    id: 'd1-001',
    task: '1.1',
    stem: 'A company buys servers sized for its yearly sales peak, and most of them sit idle for the rest of the year. Which advantage of cloud computing addresses this problem?',
    options: [
      'Benefit from massive economies of scale',
      'Stop guessing capacity',
      'Go global in minutes',
      'Stop spending money running and maintaining data centers',
    ],
    answers: [1],
    reasons: [
      'Economies of scale lower the price AWS charges for every unit, but they do not stop the company from paying for idle servers.',
      'The company provisions for the peak because it cannot predict demand. In the cloud it uses the capacity it needs and scales when demand changes.',
      'Going global is about deploying in more Regions with a few clicks, not about matching capacity to demand.',
      'This removes the work of racking and powering servers, but the company could still overprovision in the cloud if it kept guessing capacity.',
    ],
    evidence: [
      {
        url: 'https://docs.aws.amazon.com/whitepapers/latest/aws-overview/six-advantages-of-cloud-computing.html',
        quote:
          'When you make a capacity decision prior to deploying an application, you often end up either sitting on expensive idle resources or dealing with limited capacity. With cloud computing, these problems go away.',
      },
    ],
  },
  {
    id: 'd1-002',
    task: '1.2',
    stem: 'Which design principles belong to the reliability pillar of the AWS Well-Architected Framework? (Select TWO.)',
    options: [
      'Automatically recover from failure',
      'Implement a strong identity foundation',
      'Test recovery procedures',
      'Analyze and attribute expenditure',
      'Use serverless architectures',
    ],
    answers: [0, 2],
    reasons: [
      'Monitoring the workload for key performance indicators and starting automation when a threshold is breached is a reliability design principle.',
      'This is a design principle of the security pillar.',
      'Testing how the workload fails and validating recovery procedures is a reliability design principle.',
      'This is a design principle of the cost optimization pillar.',
      'This is a design principle of the performance efficiency pillar.',
    ],
    evidence: [
      {
        url: 'https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/design-principles.html',
        quote:
          'Automatically recover from failure: By monitoring a workload for key performance indicators (KPIs), you can run automation when a threshold is breached.',
      },
      {
        url: 'https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/design-principles.html',
        quote: 'In the cloud, you can test how your workload fails, and you can validate your recovery procedures.',
      },
    ],
  },
  {
    id: 'd1-003',
    task: '1.1',
    stem: 'A retail company in Brazil wants to serve customers in Japan with low latency. It does not want to build or lease a data center in Japan, and it wants to be ready in days, not months. Which advantage of cloud computing does this describe?',
    options: [
      'Go global in minutes',
      'Benefit from massive economies of scale',
      'Trade fixed expense for variable expense',
      'Stop guessing capacity',
    ],
    answers: [0],
    reasons: [
      'The company can deploy its application in an AWS Region close to its new customers with a few clicks, which gives them lower latency at minimal cost.',
      'Economies of scale explain why AWS prices are low, not how the company reaches customers in another country.',
      'This advantage is about paying for consumption instead of investing upfront, not about reaching users in a new geography.',
      'This advantage is about matching capacity to demand, not about deploying close to users in another country.',
    ],
    evidence: [
      {
        url: 'https://docs.aws.amazon.com/whitepapers/latest/aws-overview/six-advantages-of-cloud-computing.html',
        quote:
          'Easily deploy your application in multiple regions around the world with just a few clicks. This means you can provide lower latency and a better experience for your customers at minimal cost.',
      },
    ],
  },
  {
    id: 'd1-004',
    task: '1.1',
    stem: 'A development team used to wait weeks for new servers before it could test an idea. On AWS, the team creates resources in minutes and deletes them when an experiment fails, at low cost. Which advantage of cloud computing does this BEST describe?',
    options: [
      'Benefit from massive economies of scale',
      'Go global in minutes',
      'Increase speed and agility',
      'Stop guessing capacity',
    ],
    answers: [2],
    reasons: [
      'Economies of scale lower unit prices, but the scenario is about how fast the team gets resources and how cheap it is to experiment.',
      'The team is not deploying to new geographies. It is shortening the time to get resources.',
      'New resources are a click away, so the time to make them available drops from weeks to minutes and experimenting costs much less.',
      'Stopping capacity guesses is about sizing for demand. The scenario is about the time and cost of trying new ideas.',
    ],
    evidence: [
      {
        url: 'https://docs.aws.amazon.com/whitepapers/latest/aws-overview/six-advantages-of-cloud-computing.html',
        quote:
          'In a cloud computing environment, new IT resources are only a click away, which means that you reduce the time to make those resources available to your developers from weeks to just minutes.',
      },
    ],
  },
  {
    id: 'd1-005',
    task: '1.1',
    stem: 'The traffic of a news website multiplies when there is breaking news and falls back to normal a few hours later. The company wants its capacity to grow and shrink with that traffic so that it does not pay for capacity it does not use. Which cloud concept describes this?',
    options: ['High availability', 'Elasticity', 'Durability', 'Fault tolerance'],
    answers: [1],
    reasons: [
      'High availability keeps the application running when a component fails. It does not adjust capacity to traffic.',
      'Elasticity is the ability to scale resources up or down to grow and shrink capacity as demand changes, without buying for the peak.',
      'Durability is about not losing stored data, not about adjusting capacity.',
      'Fault tolerance is about continuing to operate when components fail, not about matching capacity to changes in traffic.',
    ],
    evidence: [
      {
        url: 'https://aws.amazon.com/what-is-cloud-computing/#benefits-of-cloud-computing',
        quote:
          'Instead, you provision the amount of resources that you actually need. You can scale these resources up or down to instantly grow and shrink capacity as your business needs change.',
      },
    ],
  },
  {
    id: 'd1-006',
    task: '1.1',
    stem: 'A company runs its web application on Amazon EC2 instances in a single Availability Zone. It wants the application to keep running if a data center in the Region fails. What should the company do?',
    options: [
      'Move the application to a larger instance type',
      'Serve the application from Amazon CloudFront edge locations',
      'Take daily snapshots of the instances',
      'Run instances in multiple Availability Zones',
    ],
    answers: [3],
    reasons: [
      'A larger instance still runs in one Availability Zone, so the failure of that location still takes the application down.',
      'CloudFront caches content close to users, but the application itself still runs in a single Availability Zone.',
      'Snapshots help restore data after a failure, but the application stops until the company restores it somewhere else.',
      'Availability Zones are isolated and physically separate, with independent power and networking, so spreading instances across them keeps the application available when one fails.',
    ],
    evidence: [
      {
        url: 'https://aws.amazon.com/about-aws/global-infrastructure/regions_az/#aws-infrastructure-offerings',
        quote:
          'Each AZ has independent power, cooling, and physical security and is connected via redundant, ultra-low-latency networks. AWS customers focused on high availability can design their applications to run in multiple AZs to achieve even greater fault-tolerance.',
      },
    ],
  },
  {
    id: 'd1-007',
    task: '1.1',
    stem: 'Which statements about AWS Availability Zones are correct? (Select TWO.)',
    options: [
      'Each Availability Zone is located in a different AWS Region',
      'Each Availability Zone consists of one or more discrete data centers',
      'All Availability Zones in a Region share the same data center',
      'Availability Zones in a Region are linked by low-latency networking',
      'Each Region contains a single Availability Zone',
    ],
    answers: [1, 3],
    reasons: [
      'Availability Zones belong to a Region. A Region is made of several Availability Zones in the same geographic area.',
      'An Availability Zone is one or more discrete data centers with redundant power, networking, and connectivity.',
      'Availability Zones are physically separated by a meaningful distance, so they do not share a data center or single points of failure.',
      'All Availability Zones in a Region are interconnected with high-bandwidth, low-latency networking.',
      'Each AWS Region has a minimum of three isolated and physically separate Availability Zones.',
    ],
    evidence: [
      {
        url: 'https://aws.amazon.com/about-aws/global-infrastructure/regions_az/#aws-infrastructure-offerings',
        quote:
          'An Availability Zone (AZ) is one or more discrete data centers with redundant power, networking, and connectivity in an AWS Region.',
      },
      {
        url: 'https://aws.amazon.com/about-aws/global-infrastructure/regions_az/#aws-infrastructure-offerings',
        quote:
          'All AZs in an AWS Region are interconnected with high-bandwidth, low-latency networking, over fully redundant, dedicated metro fiber providing high-throughput, low-latency networking between AZs.',
      },
    ],
  },
  {
    id: 'd1-008',
    task: '1.1',
    stem: 'A company wants its IT staff to stop racking, stacking, and powering servers so that they can focus on projects that differentiate the business. Which advantage of cloud computing does this describe?',
    options: [
      'Increase speed and agility',
      'Go global in minutes',
      'Benefit from massive economies of scale',
      'Stop spending money running and maintaining data centers',
    ],
    answers: [3],
    reasons: [
      'Agility is about getting resources in minutes to experiment faster, not about removing the work of operating data centers.',
      'Going global is about deploying in more Regions, not about the physical work of running servers.',
      'Economies of scale lower prices through aggregated usage, but they do not describe where the staff spends its time.',
      'With the cloud, the company focuses on its customers instead of the heavy lifting of racking, stacking, and powering servers.',
    ],
    evidence: [
      {
        url: 'https://docs.aws.amazon.com/whitepapers/latest/aws-overview/six-advantages-of-cloud-computing.html',
        quote:
          'Focus on projects that differentiate your business, not the infrastructure. Cloud computing lets you focus on your own customers, rather than on the heavy lifting of racking, stacking, and powering servers.',
      },
    ],
  },
  {
    id: 'd1-009',
    task: '1.1',
    stem: 'A media company wants to deliver videos and images to viewers on several continents with low latency, without running servers in each country. Which AWS service meets this requirement?',
    options: ['Amazon CloudFront', 'AWS Direct Connect', 'AWS Outposts', 'Amazon EC2 Auto Scaling'],
    answers: [0],
    reasons: [
      'CloudFront delivers content through a worldwide network of edge locations and routes each request to the location with the lowest latency.',
      'Direct Connect is a dedicated network connection between a data center and AWS. It does not deliver content to viewers around the world.',
      'Outposts runs AWS infrastructure inside the customer data center. It does not bring content close to viewers on other continents.',
      'Auto Scaling adjusts the number of instances in a Region. It does not place content close to viewers worldwide.',
    ],
    evidence: [
      {
        url: 'https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html',
        quote:
          "CloudFront delivers your content through a worldwide network of data centers called edge locations. When a user requests content that you're serving with CloudFront, the request is routed to the edge location that provides the lowest latency (time delay), so that content is delivered with the best possible performance.",
      },
    ],
  },
  {
    id: 'd1-010',
    task: '1.1',
    stem: 'Which of the following are advantages of cloud computing as described by AWS? (Select TWO.)',
    options: [
      'Benefit from massive economies of scale',
      'Trade variable expense for fixed expense',
      'Provision capacity for the expected peak',
      'Keep control of the physical hardware',
      'Increase speed and agility',
    ],
    answers: [0, 4],
    reasons: [
      'Aggregated usage from hundreds of thousands of customers lets AWS achieve higher economies of scale, which means lower pay-as-you-go prices.',
      'The advantage goes the other way. The cloud trades fixed expense for variable expense, so the company pays only for what it consumes.',
      'Provisioning for the peak is the on-premises problem the cloud removes. In the cloud the company stops guessing capacity.',
      'In the cloud AWS owns and operates the physical hardware. The advantage is no longer having to run data centers.',
      'New resources are a click away, which reduces the time to make them available from weeks to minutes.',
    ],
    evidence: [
      {
        url: 'https://docs.aws.amazon.com/whitepapers/latest/aws-overview/six-advantages-of-cloud-computing.html',
        quote:
          'Because usage from hundreds of thousands of customers is aggregated in the cloud, providers such as AWS can achieve higher economies of scale, which translates into lower pay as-you-go prices.',
      },
      {
        url: 'https://docs.aws.amazon.com/whitepapers/latest/aws-overview/six-advantages-of-cloud-computing.html',
        quote:
          'In a cloud computing environment, new IT resources are only a click away, which means that you reduce the time to make those resources available to your developers from weeks to just minutes.',
      },
    ],
  },
  {
    id: 'd1-011',
    task: '1.1',
    stem: 'A startup needs a test environment in a new AWS Region for three days and will delete it afterward. Which option makes this possible at the LOWEST cost?',
    options: [
      'Buy Reserved Instances with a one-year term',
      'Install AWS Outposts racks on premises',
      'Use on-demand resources with pay-as-you-go pricing',
      'Allocate Dedicated Hosts for the project',
    ],
    answers: [2],
    reasons: [
      'A one-year commitment would charge the startup for far longer than the three days it needs.',
      'Outposts installs AWS hardware in the customer facility, which does not fit a short test in an AWS Region.',
      'Cloud computing delivers IT resources on demand with pay-as-you-go pricing, so the startup pays only for the three days and stops paying when it deletes them.',
      'A Dedicated Host is a whole physical server reserved for one customer, which costs more than needed for a short test.',
    ],
    evidence: [
      {
        url: 'https://aws.amazon.com/what-is-cloud-computing/',
        quote:
          'Cloud computing is the on-demand delivery of IT resources over the Internet with pay-as-you-go pricing.',
      },
    ],
  },
  {
    id: 'd1-012',
    task: '1.1',
    stem: 'A company must keep a critical application available even if an entire AWS Region becomes unavailable. What should the company do?',
    options: [
      'Deploy the application across multiple Availability Zones in one Region',
      'Deploy the application in more than one AWS Region',
      'Cache the application in Amazon CloudFront edge locations',
      'Buy Reserved Instances for the application',
    ],
    answers: [1],
    reasons: [
      'Multiple Availability Zones protect against the failure of one location, but all of them are in the same Region, which is the failure in this scenario.',
      'If the application also runs in another Region, it is still available when one Region becomes unavailable.',
      'Edge locations cache content, but the application still depends on its origin in a single Region.',
      'Reserved Instances are a billing discount. They do not add any protection against the loss of a Region.',
    ],
    evidence: [
      {
        url: 'https://docs.aws.amazon.com/wellarchitected/latest/framework/rel_fault_isolation_multiaz_region_system.html#implementation-steps',
        quote: 'If you replicate data and resources across Regions, you can recover service in another Region.',
      },
    ],
  },
  {
    id: 'd1-013',
    task: '1.2',
    stem: 'Which pillar of the AWS Well-Architected Framework covers the ability of a workload to perform its intended function correctly and consistently when it is expected to?',
    options: ['Reliability', 'Performance efficiency', 'Operational excellence', 'Security'],
    answers: [0],
    reasons: [
      'The reliability pillar covers performing the intended function correctly and consistently, and operating and testing the workload through its total lifecycle.',
      'Performance efficiency is about using resources efficiently to meet performance requirements as demand changes.',
      'Operational excellence is about organizing teams, designing, operating at scale, and evolving the workload over time.',
      'Security is about protecting data, systems, and assets.',
    ],
    evidence: [
      {
        url: 'https://docs.aws.amazon.com/wellarchitected/latest/framework/reliability.html',
        quote:
          'The Reliability pillar encompasses the ability of a workload to perform its intended function correctly and consistently when it’s expected to. This includes the ability to operate and test the workload through its total lifecycle.',
      },
    ],
  },
  {
    id: 'd1-014',
    task: '1.2',
    stem: 'A company wants to set goals to reduce the compute and storage resources each transaction requires and to lower the energy its cloud workloads consume. Which pillar of the AWS Well-Architected Framework addresses these goals?',
    options: ['Cost optimization', 'Performance efficiency', 'Sustainability', 'Operational excellence'],
    answers: [2],
    reasons: [
      'Cost optimization is about delivering business value at the lowest price point. The goals here are about resource use and energy, which is environmental impact.',
      'Performance efficiency is about meeting performance requirements, not about reducing environmental impact.',
      'The sustainability pillar focuses on environmental impact, especially energy consumption and efficiency, and its principles include establishing goals such as fewer resources per transaction.',
      'Operational excellence is about running and improving the workload, not about its energy use.',
    ],
    evidence: [
      {
        url: 'https://docs.aws.amazon.com/wellarchitected/latest/framework/sus-design-principles.html',
        quote:
          'Establish sustainability goals: For each cloud workload, establish long-term sustainability goals such as reducing the compute and storage resources required per transaction.',
      },
    ],
  },
  {
    id: 'd1-015',
    task: '1.2',
    stem: 'Which design principle belongs to the security pillar of the AWS Well-Architected Framework?',
    options: [
      'Automatically recover from failure',
      'Experiment more often',
      'Make frequent, small, reversible changes',
      'Apply security at all layers',
    ],
    answers: [3],
    reasons: [
      'This is a design principle of the reliability pillar.',
      'This is a design principle of the performance efficiency pillar.',
      'This is a design principle of the operational excellence pillar.',
      'Applying defense in depth with controls at every layer, from the network edge to the application code, is a security design principle.',
    ],
    evidence: [
      {
        url: 'https://docs.aws.amazon.com/wellarchitected/latest/framework/sec-design.html',
        quote: 'Apply security at all layers: Apply a defense in depth approach with multiple security controls.',
      },
    ],
  },
  {
    id: 'd1-016',
    task: '1.2',
    stem: 'A company stops its development and test environments outside business hours so that it pays only for the resources it uses. Which design principle of the AWS Well-Architected Framework does this follow?',
    options: [
      'Scale horizontally to increase aggregate workload availability',
      'Adopt a consumption model',
      'Democratize advanced technologies',
      'Maintain traceability',
    ],
    answers: [1],
    reasons: [
      'This reliability principle replaces one large resource with several small ones to reduce the impact of a failure. It is not about turning resources off.',
      'This cost optimization principle says to pay only for the resources you require. Stopping environments used only during work hours is the example the framework gives.',
      'This performance efficiency principle is about consuming complex technologies as services.',
      'This security principle is about monitoring, alerting, and auditing actions and changes.',
    ],
    evidence: [
      {
        url: 'https://docs.aws.amazon.com/wellarchitected/latest/framework/cost-dp.html',
        quote:
          'For example, development and test environments are typically only used for eight hours a day during the work week. You can stop these resources when they are not in use for a potential cost savings of 75% (40 hours versus 168 hours).',
      },
    ],
  },
  {
    id: 'd1-017',
    task: '1.2',
    stem: 'A company defines its infrastructure and its operations procedures as code and runs them automatically in response to events, with guardrails such as approvals and error thresholds. Which design principle of the operational excellence pillar does this follow?',
    options: [
      'Safely automate where possible',
      'Use serverless architectures',
      'Protect data in transit and at rest',
      'Measure overall efficiency',
    ],
    answers: [0],
    reasons: [
      'This principle is about defining the workload and its operations as code, automating them in response to events, and adding guardrails to limit human error.',
      'This is a performance efficiency principle about removing the need to run servers.',
      'This is a security principle about encryption, tokenization, and access control.',
      'This is a cost optimization principle about comparing business output with its cost.',
    ],
    evidence: [
      {
        url: 'https://docs.aws.amazon.com/wellarchitected/latest/framework/oe-design-principles.html',
        quote:
          'You can then automate your workload’s operations by initiating them in response to events. In the cloud, you can employ automation safety by configuring guardrails, including rate control, error thresholds, and approvals.',
      },
    ],
  },
  {
    id: 'd1-018',
    task: '1.2',
    stem: 'A company wants to add machine learning features to its application. Instead of training its IT team to host and run machine learning infrastructure, it plans to use an AWS managed machine learning service. Which design principle of the performance efficiency pillar does this follow?',
    options: [
      'Go global in minutes',
      'Consider mechanical sympathy',
      'Experiment more often',
      'Democratize advanced technologies',
    ],
    answers: [3],
    reasons: [
      'This principle is about deploying in multiple Regions to lower latency, not about how the team adopts a new technology.',
      'This principle is about choosing the technology that matches how the workload uses it, such as its data access patterns.',
      'This principle is about quickly comparing instance types, storage, or configurations.',
      'Consuming a complex technology such as machine learning as a service lets the team focus on the product instead of learning to host it.',
    ],
    evidence: [
      {
        url: 'https://docs.aws.amazon.com/wellarchitected/latest/framework/perf-dp.html',
        quote:
          'Rather than asking your IT team to learn about hosting and running a new technology, consider consuming the technology as a service. For example, NoSQL databases, media transcoding, and machine learning are all technologies that require specialized expertise.',
      },
    ],
  },
  {
    id: 'd1-019',
    task: '1.2',
    stem: 'Which of the following are design principles of the operational excellence pillar of the AWS Well-Architected Framework? (Select TWO.)',
    options: [
      'Keep people away from data',
      'Stop guessing capacity',
      'Make frequent, small, reversible changes',
      'Analyze and attribute expenditure',
      'Anticipate failure',
    ],
    answers: [2, 4],
    reasons: [
      'This is a design principle of the security pillar.',
      'This is a design principle of the reliability pillar.',
      'Small, incremental changes that can be reversed reduce the blast radius and allow faster reversal when failures occur.',
      'This is a design principle of the cost optimization pillar.',
      'Driving failure scenarios and testing procedures against them is an operational excellence design principle.',
    ],
    evidence: [
      {
        url: 'https://docs.aws.amazon.com/wellarchitected/latest/framework/oe-design-principles.html',
        quote:
          'Automated deployment techniques together with smaller, incremental changes reduces the blast radius and allows for faster reversal when failures occur.',
      },
      {
        url: 'https://docs.aws.amazon.com/wellarchitected/latest/framework/oe-design-principles.html',
        quote:
          'Anticipate failure: Maximize operational success by driving failure scenarios to understand the workload’s risk profile and its impact on your business outcomes.',
      },
    ],
  },
  {
    id: 'd1-020',
    task: '1.2',
    stem: 'A company replaces one large Amazon EC2 instance with several smaller instances behind a load balancer, so that the failure of one instance has less impact on the workload. Which design principle does this follow?',
    options: [
      'Consider mechanical sympathy',
      'Anticipate and adopt new, more efficient hardware and software offerings',
      'Scale horizontally to increase aggregate workload availability',
      'Implement a strong identity foundation',
    ],
    answers: [2],
    reasons: [
      'This performance efficiency principle is about matching the technology to how the workload uses it, not about reducing the impact of failures.',
      'This sustainability principle is about moving to more efficient hardware and software as it becomes available, not about availability.',
      'This reliability principle replaces one large resource with multiple small ones so that a single failure does not affect the whole workload.',
      'This security principle is about least privilege and centralized identity management.',
    ],
    evidence: [
      {
        url: 'https://docs.aws.amazon.com/wellarchitected/latest/framework/rel-dp.html',
        quote:
          'Replace one large resource with multiple small resources to reduce the impact of a single failure on the overall workload.',
      },
    ],
  },
  {
    id: 'd1-021',
    task: '1.2',
    stem: 'Which AWS service helps a company review its workloads against the best practices of the AWS Well-Architected Framework and get an improvement plan?',
    options: ['AWS Trusted Advisor', 'AWS Well-Architected Tool', 'AWS Config', 'AWS Compute Optimizer'],
    answers: [1],
    reasons: [
      'Trusted Advisor runs automated checks on the account and recommends improvements, but it does not run a review of a workload against the framework.',
      'The Well-Architected Tool, available in the AWS Management Console, evaluates workloads against the framework best practices and gives an action plan, with milestones to track progress.',
      'Config records resource configurations and evaluates them against rules, not against the best practices of the framework.',
      'Compute Optimizer recommends rightsizing for resources based on utilization. It does not review a workload against the framework.',
    ],
    evidence: [
      {
        url: 'https://docs.aws.amazon.com/wellarchitected/latest/userguide/tool.html',
        quote:
          'You can use AWS WA Tool to document and measure your workload using the best practices from the AWS Well-Architected Framework.',
      },
    ],
  },
  {
    id: 'd1-022',
    task: '1.2',
    stem: 'A company is reviewing its workload against the security pillar of the AWS Well-Architected Framework. Which actions follow the design principles of that pillar? (Select TWO.)',
    options: [
      'Grant least privilege through centralized identity management',
      'Replace one large server with several smaller servers',
      'Stop development servers outside business hours',
      'Monitor, alert, and audit changes to the environment in real time',
      'Deploy the workload in more Regions to lower latency',
    ],
    answers: [0, 3],
    reasons: [
      'Least privilege and centralized identity management are part of the principle to implement a strong identity foundation.',
      'This follows the reliability principle to scale horizontally, not a security principle.',
      'This follows the cost optimization principle to adopt a consumption model.',
      'Monitoring, alerting, and auditing actions and changes in real time is the security principle to maintain traceability.',
      'This follows the performance efficiency principle to go global in minutes.',
    ],
    evidence: [
      {
        url: 'https://docs.aws.amazon.com/wellarchitected/latest/framework/sec-design.html',
        quote:
          'Implement the principle of least privilege and enforce separation of duties with appropriate authorization for each interaction with your AWS resources. Centralize identity management, and aim to eliminate reliance on long-term static credentials.',
      },
      {
        url: 'https://docs.aws.amazon.com/wellarchitected/latest/framework/sec-design.html',
        quote: 'Maintain traceability: Monitor, alert, and audit actions and changes to your environment in real time.',
      },
    ],
  },
  {
    id: 'd1-023',
    task: '1.3',
    stem: 'A company must move 200 on-premises servers to AWS before its data center lease ends in a few months. It wants to move the applications as they are, without changing them. Which migration strategy should the company use?',
    options: ['Replatform', 'Refactor', 'Repurchase', 'Rehost'],
    answers: [3],
    reasons: [
      'Replatforming introduces some optimization during the move, such as switching to a managed database, which the company does not want.',
      'Refactoring redesigns the application to use cloud-native features. It is the most complex and costly strategy and does not fit a fast move without changes.',
      'Repurchasing replaces the application with a different product, such as a SaaS offering.',
      'Rehosting, also called lift and shift, moves applications to AWS without changes and handles large numbers of servers.',
    ],
    evidence: [
      {
        url: 'https://docs.aws.amazon.com/prescriptive-guidance/latest/large-migration-guide/migration-strategies.html#rehost',
        quote:
          'Using this strategy, you move your applications from your source environment to the AWS Cloud without making any changes to the application.',
      },
    ],
  },
  {
    id: 'd1-024',
    task: '1.3',
    stem: 'A company runs Microsoft SQL Server on its own servers. It wants to move the database to Amazon RDS for SQL Server so that AWS handles backups and patching, without rewriting the application. Which migration strategy is this?',
    options: ['Replatform', 'Rehost', 'Refactor', 'Relocate'],
    answers: [0],
    reasons: [
      'Replatforming moves the application and adds some optimization, such as a fully managed service. Moving SQL Server to Amazon RDS for SQL Server is the example AWS gives.',
      'Rehosting moves the servers as they are. The company would still manage the database software itself.',
      'Refactoring changes the architecture of the application to use cloud-native features, which the company does not plan to do.',
      'Relocating moves a whole virtualization platform, or resources between VPCs, Regions, or accounts, without changing the platform the workload runs on.',
    ],
    evidence: [
      {
        url: 'https://docs.aws.amazon.com/prescriptive-guidance/latest/large-migration-guide/migration-strategies.html#replatform',
        quote:
          'Using this migration strategy, you move the application to the cloud, and you introduce some level of optimization in order to operate the application efficiently, to reduce costs, or to take advantage of cloud capabilities. For example, you might replatform a Microsoft SQL Server database to Amazon RDS for SQL Server.',
      },
    ],
  },
  {
    id: 'd1-025',
    task: '1.3',
    stem: 'A company runs a custom customer relationship management (CRM) application in its data center. It plans to stop maintaining that application and move its users to a software as a service (SaaS) CRM product. Which migration strategy is this?',
    options: ['Rehost', 'Retain', 'Repurchase', 'Refactor'],
    answers: [2],
    reasons: [
      'Rehosting would move the same custom application to AWS, so the company would keep maintaining it.',
      'Retaining keeps the application where it is, but the company wants to replace it.',
      'Repurchasing, also called drop and shop, replaces the application with a different product, such as moving from a custom or licensed application to SaaS.',
      'Refactoring would redesign the custom application for the cloud, which means the company would keep maintaining it.',
    ],
    evidence: [
      {
        url: 'https://docs.aws.amazon.com/prescriptive-guidance/latest/large-migration-guide/migration-strategies.html#repurchase',
        quote:
          'Replacing a custom application – You can avoid recoding and re-architecting a custom application by repurchasing a vendor-based SaaS or cloud-based application.',
      },
    ],
  },
  {
    id: 'd1-026',
    task: '1.3',
    stem: 'During a migration assessment, a company finds an application that has had no inbound connections for the last 90 days and no longer has business value. The company wants to eliminate the cost of hosting it. Which migration strategy should the company apply?',
    options: ['Retain', 'Retire', 'Relocate', 'Rehost'],
    answers: [1],
    reasons: [
      'Retaining keeps the application running in the source environment, so the company would keep paying to host it.',
      'Retiring decommissions or archives the application and shuts down its servers, which removes the cost of maintaining and hosting it.',
      'Relocating moves the application to AWS unchanged, so the company would keep paying to host it.',
      'Rehosting moves the application to AWS unchanged, so the company would keep paying to host it.',
    ],
    evidence: [
      {
        url: 'https://docs.aws.amazon.com/prescriptive-guidance/latest/large-migration-guide/migration-strategies.html#retire',
        quote:
          'This is the migration strategy for the applications that you want to decommission or archive. Retiring the application means that you can shut down the servers within that application stack.',
      },
    ],
  },
  {
    id: 'd1-027',
    task: '1.3',
    stem: 'A company wants to migrate an on-premises database to AWS with minimal downtime. The source database must stay in use during the migration, and ongoing changes must be replicated to the target until cutover. Which AWS service meets these requirements?',
    options: [
      'AWS Schema Conversion Tool (AWS SCT)',
      'Migration Evaluator',
      'AWS Backup',
      'AWS Database Migration Service (AWS DMS)',
    ],
    answers: [3],
    reasons: [
      'AWS SCT converts a database schema from one engine to another. It does not replicate ongoing changes.',
      'Migration Evaluator builds the business case for migrating. It does not move data.',
      'AWS Backup centralizes backups of AWS resources. It does not keep a source and a target database in sync.',
      'AWS DMS performs one-time migrations or replicates ongoing changes to keep the source and the target in sync until cutover.',
    ],
    evidence: [
      {
        url: 'https://docs.aws.amazon.com/dms/latest/userguide/Welcome.html',
        quote: 'You can perform one-time migrations or replicate ongoing changes to keep sources and targets in sync.',
      },
    ],
  },
  {
    id: 'd1-028',
    task: '1.3',
    stem: 'A company wants to migrate an on-premises Oracle database to Amazon Aurora PostgreSQL-Compatible Edition. Which AWS services should it use to convert the schema and to move the data? (Select TWO.)',
    options: [
      'AWS Application Migration Service',
      'AWS Schema Conversion Tool (AWS SCT)',
      'AWS Database Migration Service (AWS DMS)',
      'AWS Backup',
      'AWS Storage Gateway',
    ],
    answers: [1, 2],
    reasons: [
      'AWS Application Migration Service, now named AWS Transform MGN, rehosts whole servers. It does not convert a database to a different engine.',
      'AWS SCT converts the schema from one database engine to another, and Oracle to Aurora PostgreSQL is a supported conversion.',
      'After the schema is converted, AWS DMS migrates the data. AWS SCT can even create the AWS DMS endpoints and tasks.',
      'AWS Backup protects data with backups. It does not convert schemas between engines.',
      'Storage Gateway gives on-premises applications access to cloud storage. It does not migrate databases between engines.',
    ],
    evidence: [
      {
        url: 'https://docs.aws.amazon.com/SchemaConversionTool/latest/userguide/CHAP_Source.Oracle.ToPostgreSQL.html',
        quote:
          'When you convert an Oracle database to RDS for PostgreSQL or Amazon Aurora PostgreSQL, be aware of the following.',
      },
      {
        url: 'https://docs.aws.amazon.com/dms/latest/userguide/Welcome.html',
        quote:
          'After you convert your source schemas and apply the converted code to your target database, you can use AWS DMS to migrate your data.',
      },
    ],
  },
  {
    id: 'd1-029',
    task: '1.3',
    stem: 'A company adopting AWS finds that its staff lacks cloud skills and that teams resist the new ways of working. It wants guidance on training, leadership, and organizational change. Which perspective of the AWS Cloud Adoption Framework (AWS CAF) focuses on this?',
    options: ['People', 'Governance', 'Operations', 'Platform'],
    answers: [0],
    reasons: [
      'The People perspective bridges technology and business, with a focus on culture, organizational structure, leadership, and workforce, including cloud fluency and change acceleration.',
      'The Governance perspective orchestrates cloud initiatives and manages risk, benefits, and cloud spend.',
      'The Operations perspective makes sure cloud services are delivered at the level the business needs.',
      'The Platform perspective builds a scalable hybrid cloud platform and modernizes workloads.',
    ],
    evidence: [
      {
        url: 'https://docs.aws.amazon.com/whitepapers/latest/overview-aws-cloud-adoption-framework/people-perspective.html',
        quote:
          'The people perspective serves as a bridge between technology and business, accelerating the cloud journey to help organizations more rapidly evolve to a culture of continuous growth, learning, and where change becomes business-as-normal, with focus on culture, organizational structure, leadership, and workforce.',
      },
    ],
  },
  {
    id: 'd1-030',
    task: '1.3',
    stem: 'A company plans to use AWS to launch new digital products, reach new customers, and enter new market segments. Which business outcome of the AWS Cloud Adoption Framework (AWS CAF) does this target?',
    options: [
      'Reduced business risk',
      'Improved environmental, social, and governance (ESG) performance',
      'Increased revenue',
      'Increased operational efficiency',
    ],
    answers: [2],
    reasons: [
      'Reducing business risk is about improved reliability, performance, and security.',
      'Improving ESG performance is about sustainability and corporate transparency.',
      'Growing revenue means creating new products and services, reaching new customers, and entering new market segments.',
      'Increasing operational efficiency is about lower operating costs and higher productivity.',
    ],
    evidence: [
      {
        url: 'https://aws.amazon.com/cloud-adoption-framework/#benefits',
        quote: 'Create new products and services, reach new customers, and enter new market segments.',
      },
    ],
  },
  {
    id: 'd1-031',
    task: '1.3',
    stem: 'A company wants a data-driven business case before it moves its on-premises servers to AWS. It needs projected AWS costs based on its current usage, including a comparison of Bring Your Own License and License Included options. Which AWS offering should it use?',
    options: ['AWS Cost Explorer', 'AWS Budgets', 'AWS Compute Optimizer', 'Migration Evaluator'],
    answers: [3],
    reasons: [
      'Cost Explorer analyzes costs and usage that the company already has on AWS, not the on-premises environment.',
      'Budgets alerts when AWS costs or usage exceed a threshold. It does not project the cost of an on-premises environment on AWS.',
      'Compute Optimizer recommends rightsizing for resources already running on AWS.',
      'Migration Evaluator builds a data-driven business case, finds overprovisioned on-premises servers, and compares BYOL and License Included costs.',
    ],
    evidence: [
      {
        url: 'https://aws.amazon.com/migration-evaluator/#benefits',
        quote:
          'Efficiently plan your migration by identifying existing licenses and running cost comparisons of Bring Your Own License (BYOL) and License Included (LI) options.',
      },
    ],
  },
  {
    id: 'd1-032',
    task: '1.4',
    stem: 'A company used to buy servers every three years with large upfront payments. After moving to AWS, it pays each month only for the resources it consumes. Which statement describes this change in its cost structure?',
    options: [
      'Fixed upfront expenses are replaced by variable expenses',
      'Variable expenses are replaced by fixed expenses',
      'Operating expenses are replaced by capital expenses',
      'Costs no longer depend on how much is consumed',
    ],
    answers: [0],
    reasons: [
      'Instead of investing heavily in data centers and servers before knowing how they will be used, the company pays only when it consumes resources and only for how much it consumes.',
      'The change goes the other way. The upfront investment was the fixed expense, and consumption-based billing is variable.',
      'The change goes the other way. Upfront hardware purchases are capital expenses, and paying for consumption is an operating expense.',
      'With pay-as-you-go pricing, the cost follows consumption. Using more costs more and using less costs less.',
    ],
    evidence: [
      {
        url: 'https://docs.aws.amazon.com/whitepapers/latest/aws-overview/six-advantages-of-cloud-computing.html',
        quote:
          'Instead of having to invest heavily in data centers and servers before you know how you’re going to use them, you can pay only when you consume computing resources, and pay only for how much you consume.',
      },
    ],
  },
  {
    id: 'd1-033',
    task: '1.4',
    stem: 'A company moves a database from servers in its own data center to an Amazon EC2 instance. Which costs does the company no longer carry directly after the move? (Select TWO.)',
    options: [
      'Staff time to patch the operating system',
      'Staff time to back up the database',
      'Staff time to optimize the application',
      'Power, network, and cooling for the servers',
      'Replacement of server hardware at the end of its life',
    ],
    answers: [3, 4],
    reasons: [
      'On Amazon EC2 the customer still installs and patches the operating system.',
      'On Amazon EC2 the customer still manages database backups. A managed service such as Amazon RDS would take this over.',
      'Application optimization stays with the customer in every model, on premises, on EC2, and on RDS.',
      'On premises the company pays for power, network, and cooling. On Amazon EC2, AWS takes care of them.',
      'On premises the company manages the hardware lifecycle. On Amazon EC2, AWS manages the servers and their replacement.',
    ],
    evidence: [
      {
        url: 'https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Welcome.html#Welcome.Concepts.comparison',
        quote:
          'AWS manages the hardware layers, which eliminates some of the burden of managing an on-premises database server.',
      },
      {
        url: 'https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Welcome.html#Welcome.Concepts.comparison',
        quote:
          'AWS manages the hardware layers, which eliminates some of the burden of managing an on-premises database server.',
      },
    ],
  },
  {
    id: 'd1-034',
    task: '1.4',
    stem: 'A company owns Windows Server licenses that are licensed per physical core. It wants to use these licenses on AWS to avoid paying for new ones. Which Amazon EC2 option supports this requirement?',
    options: [
      'Amazon EC2 Spot Instances',
      'Amazon EC2 Dedicated Hosts',
      'Amazon EC2 Dedicated Instances',
      'Amazon EC2 Reserved Instances',
    ],
    answers: [1],
    reasons: [
      'Spot Instances are a pricing option for spare capacity. They do not give visibility into the physical cores needed for per-core licenses.',
      'A Dedicated Host is a physical server fully dedicated to the customer, with visibility of sockets and cores, so it supports existing per-socket, per-core, and per-VM licenses (BYOL).',
      'Dedicated Instances run on hardware dedicated to one account but give no visibility of sockets and cores, so they do not fit per-core licenses.',
      'Reserved Instances are a billing discount for a commitment. They do not change the licensing of the instance.',
    ],
    evidence: [
      {
        url: 'https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/dedicated-hosts-overview.html',
        quote:
          'They allow you to use your existing per-socket, per-core, or per-VM software licenses, including Windows Server, SQL Server, SUSE Linux Enterprise Server, Red Hat Enterprise Linux, or other software licenses that are bound to VMs, sockets, or physical cores, subject to your license terms.',
      },
    ],
  },
  {
    id: 'd1-035',
    task: '1.4',
    stem: 'A company wants to run Oracle Database Standard Edition 2 on Amazon RDS. It does not own Oracle licenses and does not want to buy them separately. Which licensing model should it choose?',
    options: [
      'Bring Your Own License (BYOL)',
      'Self-managed licenses in AWS License Manager',
      'License Included (LI)',
      'Per-core licensing on Dedicated Hosts',
    ],
    answers: [2],
    reasons: [
      'With BYOL the company uses Oracle licenses it already owns, and it owns none.',
      'License Manager tracks licenses the company owns. It does not provide a license.',
      'With License Included, AWS holds the Oracle license and the company does not purchase licenses separately. Amazon RDS supports this model for Standard Edition 2.',
      'Dedicated Hosts are an Amazon EC2 option for bringing licenses the company already owns, and it owns none.',
    ],
    evidence: [
      {
        url: 'https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Oracle.Concepts.Licensing.html#Oracle.Concepts.Licensing.LicenseIncluded',
        quote:
          "In the License Included model, you don't need to purchase Oracle Database licenses separately. AWS holds the license for the Oracle database software.",
      },
    ],
  },
  {
    id: 'd1-036',
    task: '1.4',
    stem: 'A company brings its own Microsoft and Oracle licenses to AWS. It wants to track license usage across its accounts and set limits that stop new deployments from exceeding the licenses it owns. Which AWS service meets these requirements?',
    options: ['AWS Config', 'AWS Budgets', 'AWS Artifact', 'AWS License Manager'],
    answers: [3],
    reasons: [
      'Config records and evaluates resource configurations. It does not count license usage against entitlements.',
      'Budgets tracks spending against a threshold, not license usage.',
      'Artifact provides AWS compliance reports and agreements. It does not track software licenses.',
      'License Manager tracks software licenses across accounts and Regions and sets hard or soft limits that stop non-compliant usage before it happens.',
    ],
    evidence: [
      {
        url: 'https://docs.aws.amazon.com/license-manager/latest/userguide/license-manager.html',
        quote:
          'With rule-based controls on the consumption of licenses, administrators can set hard or soft limits on new and existing cloud deployments. Based on these limits, License Manager helps stop non-compliant server usage before it happens.',
      },
    ],
  },
  {
    id: 'd1-037',
    task: '1.4',
    stem: 'A company reviews its Amazon EC2 instances and finds that most of them use less than 10% of their CPU and memory. It plans to switch them to smaller instance types that still meet its performance needs. What is this practice called?',
    options: ['Horizontal scaling', 'Rightsizing', 'Replatforming', 'Overprovisioning'],
    answers: [1],
    reasons: [
      'Horizontal scaling changes the number of instances, not the size of each instance.',
      'Rightsizing matches the type and size of each resource to its real utilization, which lowers cost while still meeting performance requirements.',
      'Replatforming is a migration strategy that changes the platform of a workload during the move to the cloud.',
      'Overprovisioning is the problem the company found, paying for capacity that sits idle.',
    ],
    evidence: [
      {
        url: 'https://docs.aws.amazon.com/wellarchitected/latest/framework/perf_compute_hardware_configure_and_right_size_compute_resources.html#implementation-guidance',
        quote:
          'Right-sizing allows organizations to operate their cloud infrastructure in an efficient and cost-effective manner while addressing their business needs.',
      },
    ],
  },
  {
    id: 'd1-038',
    task: '1.4',
    stem: 'Which AWS service analyzes the configuration and utilization metrics of AWS resources to provide rightsizing recommendations and identify idle resources?',
    options: ['AWS Compute Optimizer', 'AWS Budgets', 'AWS CloudTrail', 'AWS Cost and Usage Reports'],
    answers: [0],
    reasons: [
      'Compute Optimizer analyzes configuration and utilization metrics to recommend rightsizing and to find idle resources, which reduces cost.',
      'Budgets alerts when costs or usage exceed a threshold. It does not analyze resource utilization.',
      'CloudTrail records API activity in the account. It does not recommend resource sizes.',
      'Cost and Usage Reports deliver detailed billing data, but they do not analyze utilization or recommend sizes.',
    ],
    evidence: [
      {
        url: 'https://docs.aws.amazon.com/compute-optimizer/latest/ug/what-is-compute-optimizer.html',
        quote:
          "AWS Compute Optimizer is a service that analyzes your AWS resources' configuration and utilization metrics to provide you with rightsizing recommendations and identify idle resources.",
      },
    ],
  },
  {
    id: 'd1-039',
    task: '1.4',
    stem: 'A company starts using AWS CloudFormation templates to create its environments instead of configuring each resource by hand in the console. Which benefits does this automation provide? (Select TWO.)',
    options: [
      'Resources cost less than when created in the console',
      'Environments are created in a consistent and repeatable way',
      'AWS becomes responsible for configuring the resources',
      'Resources are rightsized automatically after creation',
      'The team spends less time managing resources',
    ],
    answers: [1, 4],
    reasons: [
      'A resource costs the same however it is created. The savings come from less manual work, not from a lower price.',
      'A template describes every resource once, so the same environment can be provisioned again and again in a consistent and repeatable way.',
      'The customer still writes the template and decides how each resource is configured. CloudFormation only provisions what the template describes.',
      'CloudFormation creates what the template describes. Rightsizing recommendations come from services such as AWS Compute Optimizer.',
      'CloudFormation provisions and configures the resources and their dependencies, so the team spends less time managing them and more time on its applications.',
    ],
    evidence: [
      {
        url: 'https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/Welcome.html#welcome-quickly-replicate-your-infrastructure',
        quote:
          'Reuse your CloudFormation template to create your resources in a consistent and repeatable manner. To reuse your template, describe your resources once and then provision the same resources over and over in multiple regions.',
      },
      {
        url: 'https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/Welcome.html',
        quote:
          'CloudFormation is a service that helps you model and set up your AWS resources so that you can spend less time managing those resources and more time focusing on your applications that run in AWS.',
      },
    ],
  },
  {
    id: 'd1-040',
    task: '1.4',
    stem: 'AWS aggregates the usage of hundreds of thousands of customers. How does this benefit each customer?',
    options: [
      'Each customer receives dedicated physical hardware',
      'Prices stay fixed for the lifetime of the account',
      'Customers pay lower pay-as-you-go prices',
      'Customers pay nothing for outbound data transfer',
    ],
    answers: [2],
    reasons: [
      'Aggregated usage means customers share the infrastructure. Dedicated hardware is a separate option that costs more.',
      'Economies of scale lower prices. They do not freeze a price for the life of an account.',
      'The aggregated usage gives AWS higher economies of scale, which translate into lower pay-as-you-go prices than a company could achieve on its own.',
      'Outbound data transfer is still charged. Economies of scale lower prices but do not make services free.',
    ],
    evidence: [
      {
        url: 'https://docs.aws.amazon.com/whitepapers/latest/aws-overview/six-advantages-of-cloud-computing.html',
        quote:
          'By using cloud computing, you can achieve a lower variable cost than you can get on your own. Because usage from hundreds of thousands of customers is aggregated in the cloud, providers such as AWS can achieve higher economies of scale, which translates into lower pay as-you-go prices.',
      },
    ],
  },
]

export const ptBR: readonly Question[] = [
  {
    id: 'd1-001',
    task: '1.1',
    stem: 'Uma empresa compra servidores dimensionados para o pico anual de vendas, e a maioria fica ociosa no resto do ano. Qual vantagem da computação em nuvem resolve esse problema?',
    options: [
      'Beneficiar-se de enormes economias de escala',
      'Parar de adivinhar a capacidade',
      'Tornar-se global em minutos',
      'Parar de gastar dinheiro para operar e manter data centers',
    ],
    answers: [1],
    reasons: [
      'A economia de escala reduz o preço que a AWS cobra por unidade, mas não impede a empresa de pagar por servidores ociosos.',
      'A empresa provisiona para o pico porque não consegue prever a demanda. Na nuvem, ela usa a capacidade de que precisa e escala quando a demanda muda.',
      'Tornar-se global é implantar em mais Regiões com poucos cliques, e não ajustar a capacidade à demanda.',
      'Isso elimina o trabalho de instalar e alimentar servidores, mas a empresa ainda poderia superprovisionar na nuvem se continuasse adivinhando a capacidade.',
    ],
    evidence: [
      {
        url: 'https://docs.aws.amazon.com/pt_br/whitepapers/latest/aws-overview/six-advantages-of-cloud-computing.html',
        quote:
          'Quando você toma uma decisão de capacidade antes de implantar uma aplicação, geralmente acaba usando recursos ociosos caros ou lidando com capacidade limitada. Com a computação em nuvem, esses problemas deixam de existir.',
      },
    ],
  },
  {
    id: 'd1-002',
    task: '1.2',
    stem: 'Quais princípios de design pertencem ao pilar de confiabilidade do AWS Well-Architected Framework? (Selecione DUAS.)',
    options: [
      'Recuperar-se automaticamente de falhas',
      'Implementar uma base sólida de identidade',
      'Testar os procedimentos de recuperação',
      'Analisar e atribuir despesas',
      'Usar arquiteturas serverless',
    ],
    answers: [0, 2],
    reasons: [
      'Monitorar a carga de trabalho com indicadores-chave de desempenho e disparar automação quando um limite é ultrapassado é um princípio de design de confiabilidade.',
      'Este é um princípio de design do pilar de segurança.',
      'Testar como a carga de trabalho falha e validar os procedimentos de recuperação é um princípio de design de confiabilidade.',
      'Este é um princípio de design do pilar de otimização de custos.',
      'Este é um princípio de design do pilar de eficiência de desempenho.',
    ],
    evidence: [
      {
        url: 'https://docs.aws.amazon.com/pt_br/wellarchitected/latest/reliability-pillar/design-principles.html',
        quote:
          'Recupere-se de falhas automaticamente: ao monitorar os indicadores-chave de performance (KPIs) de uma workloads, você pode executar a automação quando um limite é violado.',
      },
      {
        url: 'https://docs.aws.amazon.com/pt_br/wellarchitected/latest/reliability-pillar/design-principles.html',
        quote:
          'Na nuvem, você pode testar o comportamento de falha da workload e validar os procedimentos de recuperação.',
      },
    ],
  },
  {
    id: 'd1-003',
    task: '1.1',
    stem: 'Uma varejista no Brasil quer atender clientes no Japão com baixa latência. Ela não quer construir nem alugar um data center no Japão e quer estar pronta em dias, não em meses. Qual vantagem da computação em nuvem isso descreve?',
    options: [
      'Tornar-se global em minutos',
      'Beneficiar-se de enormes economias de escala',
      'Trocar despesas fixas por despesas variáveis',
      'Parar de adivinhar a capacidade',
    ],
    answers: [0],
    reasons: [
      'A empresa pode implantar a aplicação em uma Região da AWS perto dos novos clientes com poucos cliques, o que dá a eles menor latência a um custo mínimo.',
      'A economia de escala explica por que os preços da AWS são baixos, e não como a empresa alcança clientes em outro país.',
      'Essa vantagem trata de pagar pelo consumo em vez de investir antecipadamente, e não de alcançar usuários em outra região do mundo.',
      'Essa vantagem trata de ajustar a capacidade à demanda, e não de implantar perto de usuários em outro país.',
    ],
    evidence: [
      {
        url: 'https://docs.aws.amazon.com/pt_br/whitepapers/latest/aws-overview/six-advantages-of-cloud-computing.html',
        quote:
          'implante facilmente sua aplicação em várias regiões ao redor do mundo com apenas alguns cliques. Isso significa oferecer menor latência e uma melhor experiência para seus clientes por um custo mínimo.',
      },
    ],
  },
  {
    id: 'd1-004',
    task: '1.1',
    stem: 'Uma equipe de desenvolvimento esperava semanas por novos servidores antes de testar uma ideia. Na AWS, a equipe cria recursos em minutos e os exclui quando um experimento falha, a baixo custo. Qual vantagem da computação em nuvem isso descreve MELHOR?',
    options: [
      'Beneficiar-se de enormes economias de escala',
      'Tornar-se global em minutos',
      'Aumentar a velocidade e a agilidade',
      'Parar de adivinhar a capacidade',
    ],
    answers: [2],
    reasons: [
      'A economia de escala reduz o preço por unidade, mas o cenário trata da rapidez com que a equipe obtém recursos e de quão barato é experimentar.',
      'A equipe não está implantando em novas regiões do mundo. Ela está reduzindo o tempo para obter recursos.',
      'Novos recursos estão a um clique de distância, então o tempo para disponibilizá-los cai de semanas para minutos e experimentar custa muito menos.',
      'Parar de adivinhar a capacidade trata do dimensionamento para a demanda. O cenário trata do tempo e do custo de testar novas ideias.',
    ],
    evidence: [
      {
        url: 'https://docs.aws.amazon.com/pt_br/whitepapers/latest/aws-overview/six-advantages-of-cloud-computing.html',
        quote:
          'em um ambiente de computação em nuvem, os novos recursos de TI estão a apenas um clique de distância, o que significa que você reduz o tempo de disponibilização desses recursos para seus desenvolvedores de semanas para apenas alguns minutos.',
      },
    ],
  },
  {
    id: 'd1-005',
    task: '1.1',
    stem: 'O tráfego de um site de notícias se multiplica quando há notícias urgentes e volta ao normal algumas horas depois. A empresa quer que a capacidade cresça e diminua com esse tráfego, para não pagar por capacidade que não usa. Qual conceito de nuvem descreve isso?',
    options: ['Alta disponibilidade', 'Elasticidade', 'Durabilidade', 'Tolerância a falhas'],
    answers: [1],
    reasons: [
      'A alta disponibilidade mantém a aplicação no ar quando um componente falha. Ela não ajusta a capacidade ao tráfego.',
      'Elasticidade é a capacidade de aumentar ou reduzir os recursos conforme a demanda muda, sem comprar para o pico.',
      'Durabilidade trata de não perder dados armazenados, e não de ajustar a capacidade.',
      'Tolerância a falhas trata de continuar operando quando componentes falham, e não de acompanhar as variações de tráfego.',
    ],
    evidence: [
      {
        url: 'https://aws.amazon.com/pt/what-is-cloud-computing/#beneficios-da-computacao-em-nuvem',
        quote:
          'Em vez disso, você provisiona a quantidade de recursos realmente necessária. Você pode aumentar ou diminuir instantaneamente a escala desses recursos para ajustar a capacidade de acordo com a evolução das necessidades empresariais.',
      },
    ],
  },
  {
    id: 'd1-006',
    task: '1.1',
    stem: 'Uma empresa executa sua aplicação web em instâncias Amazon EC2 em uma única Zona de Disponibilidade. Ela quer que a aplicação continue funcionando se um data center da Região falhar. O que a empresa deve fazer?',
    options: [
      'Mover a aplicação para um tipo de instância maior',
      'Servir a aplicação a partir de edge locations do Amazon CloudFront',
      'Tirar snapshots diários das instâncias',
      'Executar instâncias em várias Zonas de Disponibilidade',
    ],
    answers: [3],
    reasons: [
      'Uma instância maior continua em uma única Zona de Disponibilidade, então a falha desse local ainda derruba a aplicação.',
      'O CloudFront armazena conteúdo em cache perto dos usuários, mas a aplicação continua rodando em uma única Zona de Disponibilidade.',
      'Snapshots ajudam a restaurar dados depois de uma falha, mas a aplicação fica parada até a empresa restaurá-la em outro lugar.',
      'As Zonas de Disponibilidade são isoladas e fisicamente separadas, com energia e rede independentes, então distribuir as instâncias entre elas mantém a aplicação disponível quando uma falha.',
    ],
    evidence: [
      {
        url: 'https://aws.amazon.com/pt/about-aws/global-infrastructure/regions_az/#ofertas-de-infraestrutura-da-aws',
        quote:
          'Cada AZ tem energia, refrigeração e segurança física independentes e está conectada por meio de redes redundantes de latência ultrabaixa. Os clientes da AWS, focados em alta disponibilidade, podem projetar seus aplicativos para serem executados em várias AZs, a fim de obter tolerância a falhas ainda maior.',
      },
    ],
  },
  {
    id: 'd1-007',
    task: '1.1',
    stem: 'Quais afirmações sobre as Zonas de Disponibilidade da AWS estão corretas? (Selecione DUAS.)',
    options: [
      'Cada Zona de Disponibilidade fica em uma Região diferente da AWS',
      'Cada Zona de Disponibilidade é formada por um ou mais data centers distintos',
      'Todas as Zonas de Disponibilidade de uma Região compartilham o mesmo data center',
      'As Zonas de Disponibilidade de uma Região são ligadas por rede de baixa latência',
      'Cada Região contém uma única Zona de Disponibilidade',
    ],
    answers: [1, 3],
    reasons: [
      'As Zonas de Disponibilidade pertencem a uma Região. Uma Região é formada por várias Zonas de Disponibilidade na mesma área geográfica.',
      'Uma Zona de Disponibilidade é um ou mais data centers distintos, com energia, rede e conectividade redundantes.',
      'As Zonas de Disponibilidade ficam a uma distância significativa umas das outras, então não compartilham data center nem pontos únicos de falha.',
      'Todas as Zonas de Disponibilidade de uma Região são interligadas por rede de alta largura de banda e baixa latência.',
      'Cada Região da AWS tem no mínimo três Zonas de Disponibilidade isoladas e fisicamente separadas.',
    ],
    evidence: [
      {
        url: 'https://aws.amazon.com/pt/about-aws/global-infrastructure/regions_az/#ofertas-de-infraestrutura-da-aws',
        quote:
          'Uma zona de disponibilidade (AZ) é um ou mais datacenters distintos com energia, rede e conectividade redundantes em uma região da AWS.',
      },
      {
        url: 'https://aws.amazon.com/pt/about-aws/global-infrastructure/regions_az/#ofertas-de-infraestrutura-da-aws',
        quote:
          'Todas as AZs em uma região da AWS estão interconectadas por redes de alta largura de banda e baixa latência, usando fibra metropolitana dedicada e totalmente redundante para proporcionar redes de alto throughput e baixa latência entre AZs.',
      },
    ],
  },
  {
    id: 'd1-008',
    task: '1.1',
    stem: 'Uma empresa quer que sua equipe de TI pare de montar, empilhar e alimentar servidores para se concentrar em projetos que diferenciam o negócio. Qual vantagem da computação em nuvem isso descreve?',
    options: [
      'Aumentar a velocidade e a agilidade',
      'Tornar-se global em minutos',
      'Beneficiar-se de enormes economias de escala',
      'Parar de gastar dinheiro para operar e manter data centers',
    ],
    answers: [3],
    reasons: [
      'Agilidade trata de obter recursos em minutos para experimentar mais rápido, e não de eliminar o trabalho de operar data centers.',
      'Tornar-se global trata de implantar em mais Regiões, e não do trabalho físico de manter servidores.',
      'A economia de escala reduz preços pelo uso agregado, mas não descreve onde a equipe gasta seu tempo.',
      'Com a nuvem, a empresa se concentra nos clientes em vez do trabalho pesado de montar, empilhar e alimentar servidores.',
    ],
    evidence: [
      {
        url: 'https://docs.aws.amazon.com/pt_br/whitepapers/latest/aws-overview/six-advantages-of-cloud-computing.html',
        quote:
          'A computação em nuvem permite que você se concentre em seus próprios clientes, não no trabalho pesado do armazenamento em rack, no empilhamento e na alimentação de servidores.',
      },
    ],
  },
  {
    id: 'd1-009',
    task: '1.1',
    stem: 'Uma empresa de mídia quer entregar vídeos e imagens a espectadores em vários continentes com baixa latência, sem manter servidores em cada país. Qual serviço da AWS atende a esse requisito?',
    options: ['Amazon CloudFront', 'AWS Direct Connect', 'AWS Outposts', 'Amazon EC2 Auto Scaling'],
    answers: [0],
    reasons: [
      'O CloudFront entrega conteúdo por uma rede mundial de edge locations e encaminha cada requisição para o local com a menor latência.',
      'O Direct Connect é uma conexão de rede dedicada entre um data center e a AWS. Ele não entrega conteúdo a espectadores pelo mundo.',
      'O Outposts executa infraestrutura da AWS dentro do data center do cliente. Ele não leva conteúdo para perto de espectadores em outros continentes.',
      'O Auto Scaling ajusta a quantidade de instâncias em uma Região. Ele não coloca conteúdo perto de espectadores no mundo todo.',
    ],
    evidence: [
      {
        url: 'https://docs.aws.amazon.com/pt_br/AmazonCloudFront/latest/DeveloperGuide/Introduction.html',
        quote:
          'O CloudFront distribui o conteúdo por meio de uma rede global de datacenters denominados pontos de presença.',
      },
    ],
  },
  {
    id: 'd1-010',
    task: '1.1',
    stem: 'Quais das opções a seguir são vantagens da computação em nuvem segundo a AWS? (Selecione DUAS.)',
    options: [
      'Beneficiar-se de enormes economias de escala',
      'Trocar despesas variáveis por despesas fixas',
      'Provisionar capacidade para o pico esperado',
      'Manter o controle do hardware físico',
      'Aumentar a velocidade e a agilidade',
    ],
    answers: [0, 4],
    reasons: [
      'O uso agregado de centenas de milhares de clientes dá à AWS maior economia de escala, o que se traduz em preços menores no modelo de pagamento conforme o uso.',
      'A vantagem é o contrário. A nuvem troca despesas fixas por despesas variáveis, e a empresa paga só pelo que consome.',
      'Provisionar para o pico é o problema do ambiente on-premises que a nuvem elimina. Na nuvem, a empresa para de adivinhar a capacidade.',
      'Na nuvem, a AWS é dona do hardware físico e o opera. A vantagem é não precisar mais manter data centers.',
      'Novos recursos estão a um clique de distância, o que reduz o tempo para disponibilizá-los de semanas para minutos.',
    ],
    evidence: [
      {
        url: 'https://docs.aws.amazon.com/pt_br/whitepapers/latest/aws-overview/six-advantages-of-cloud-computing.html',
        quote:
          'Como o uso de centenas de milhares de clientes é agregado na nuvem, provedores, como a AWS, podem ter maiores economias de escala, o que se traduz em menor preço conforme o uso.',
      },
      {
        url: 'https://docs.aws.amazon.com/pt_br/whitepapers/latest/aws-overview/six-advantages-of-cloud-computing.html',
        quote:
          'em um ambiente de computação em nuvem, os novos recursos de TI estão a apenas um clique de distância, o que significa que você reduz o tempo de disponibilização desses recursos para seus desenvolvedores de semanas para apenas alguns minutos.',
      },
    ],
  },
  {
    id: 'd1-011',
    task: '1.1',
    stem: 'Uma startup precisa de um ambiente de testes em uma nova Região da AWS por três dias e vai excluí-lo depois. Qual opção torna isso possível com o MENOR custo?',
    options: [
      'Comprar Reserved Instances com prazo de um ano',
      'Instalar racks do AWS Outposts on-premises',
      'Usar recursos sob demanda com pagamento conforme o uso',
      'Alocar Dedicated Hosts para o projeto',
    ],
    answers: [2],
    reasons: [
      'Um compromisso de um ano cobraria da startup por muito mais tempo do que os três dias de que ela precisa.',
      'O Outposts instala hardware da AWS nas instalações do cliente, o que não serve para um teste curto em uma Região da AWS.',
      'A computação em nuvem entrega recursos de TI sob demanda com pagamento conforme o uso, então a startup paga só pelos três dias e para de pagar quando exclui os recursos.',
      'Um Dedicated Host é um servidor físico inteiro reservado para um cliente, o que custa mais do que o necessário para um teste curto.',
    ],
    evidence: [
      {
        url: 'https://aws.amazon.com/pt/what-is-cloud-computing/',
        quote:
          'A computação em nuvem é a entrega de recursos de TI sob demanda por meio da Internet com preço conforme o uso.',
      },
    ],
  },
  {
    id: 'd1-012',
    task: '1.1',
    stem: 'Uma empresa precisa manter uma aplicação crítica disponível mesmo se uma Região inteira da AWS ficar indisponível. O que a empresa deve fazer?',
    options: [
      'Implantar a aplicação em várias Zonas de Disponibilidade de uma Região',
      'Implantar a aplicação em mais de uma Região da AWS',
      'Armazenar a aplicação em cache nas edge locations do Amazon CloudFront',
      'Comprar Reserved Instances para a aplicação',
    ],
    answers: [1],
    reasons: [
      'Várias Zonas de Disponibilidade protegem contra a falha de um local, mas todas ficam na mesma Região, que é a falha deste cenário.',
      'Se a aplicação também roda em outra Região, ela continua disponível quando uma Região fica indisponível.',
      'As edge locations armazenam conteúdo em cache, mas a aplicação continua dependendo da origem em uma única Região.',
      'Reserved Instances são um desconto de faturamento. Elas não protegem contra a perda de uma Região.',
    ],
    evidence: [
      {
        url: 'https://docs.aws.amazon.com/pt_br/wellarchitected/latest/framework/rel_fault_isolation_multiaz_region_system.html#implementation-steps',
        quote: 'Se você replicar dados e recursos entre regiões, poderá recuperar o serviço em outra região.',
      },
    ],
  },
  {
    id: 'd1-013',
    task: '1.2',
    stem: 'Qual pilar do AWS Well-Architected Framework trata da capacidade de uma carga de trabalho executar sua função de forma correta e consistente quando se espera que ela o faça?',
    options: ['Confiabilidade', 'Eficiência de desempenho', 'Excelência operacional', 'Segurança'],
    answers: [0],
    reasons: [
      'O pilar de confiabilidade trata de executar a função pretendida de forma correta e consistente, e de operar e testar a carga de trabalho durante todo o seu ciclo de vida.',
      'Eficiência de desempenho trata de usar os recursos de forma eficiente para atender aos requisitos de desempenho conforme a demanda muda.',
      'Excelência operacional trata de organizar as equipes, projetar, operar em escala e evoluir a carga de trabalho ao longo do tempo.',
      'Segurança trata de proteger dados, sistemas e ativos.',
    ],
    evidence: [
      {
        url: 'https://docs.aws.amazon.com/pt_br/wellarchitected/latest/framework/reliability.html',
        quote:
          'O pilar Confiabilidade abrange a capacidade de uma workload de executar a função pretendida correta e consistentemente quando esperado. Isso inclui a capacidade de operar e testar a workload durante todo o ciclo de vida dela.',
      },
    ],
  },
  {
    id: 'd1-014',
    task: '1.2',
    stem: 'Uma empresa quer definir metas para reduzir os recursos de computação e armazenamento que cada transação exige e diminuir a energia que suas cargas de trabalho na nuvem consomem. Qual pilar do AWS Well-Architected Framework trata dessas metas?',
    options: ['Otimização de custos', 'Eficiência de desempenho', 'Sustentabilidade', 'Excelência operacional'],
    answers: [2],
    reasons: [
      'Otimização de custos trata de entregar valor de negócio pelo menor preço. As metas aqui tratam de uso de recursos e de energia, ou seja, de impacto ambiental.',
      'Eficiência de desempenho trata de atender aos requisitos de desempenho, e não de reduzir o impacto ambiental.',
      'O pilar de sustentabilidade foca no impacto ambiental, principalmente no consumo e na eficiência de energia, e seus princípios incluem definir metas como menos recursos por transação.',
      'Excelência operacional trata de operar e melhorar a carga de trabalho, e não do seu consumo de energia.',
    ],
    evidence: [
      {
        url: 'https://docs.aws.amazon.com/pt_br/wellarchitected/latest/framework/sus-design-principles.html',
        quote:
          'Defina metas de sustentabilidade: para cada workload na nuvem, estabeleça metas de sustentabilidade de longo prazo, por exemplo, reduzir os recursos de computação e armazenamento exigidos por transação.',
      },
    ],
  },
  {
    id: 'd1-015',
    task: '1.2',
    stem: 'Qual princípio de design pertence ao pilar de segurança do AWS Well-Architected Framework?',
    options: [
      'Recuperar-se automaticamente de falhas',
      'Experimentar com mais frequência',
      'Fazer alterações frequentes, pequenas e reversíveis',
      'Aplicar segurança em todas as camadas',
    ],
    answers: [3],
    reasons: [
      'Este é um princípio de design do pilar de confiabilidade.',
      'Este é um princípio de design do pilar de eficiência de desempenho.',
      'Este é um princípio de design do pilar de excelência operacional.',
      'Aplicar defesa em profundidade, com controles em cada camada, da borda da rede ao código da aplicação, é um princípio de design de segurança.',
    ],
    evidence: [
      {
        url: 'https://docs.aws.amazon.com/pt_br/wellarchitected/latest/framework/sec-design.html',
        quote:
          'Aplicar segurança em todas as camadas: aplique uma abordagem de defesa detalhada com vários controles de segurança.',
      },
    ],
  },
  {
    id: 'd1-016',
    task: '1.2',
    stem: 'Uma empresa desliga seus ambientes de desenvolvimento e teste fora do horário comercial para pagar apenas pelos recursos que usa. Qual princípio de design do AWS Well-Architected Framework isso segue?',
    options: [
      'Escalar horizontalmente para aumentar a disponibilidade agregada da carga de trabalho',
      'Adotar um modelo de consumo',
      'Democratizar tecnologias avançadas',
      'Manter a rastreabilidade',
    ],
    answers: [1],
    reasons: [
      'Este princípio de confiabilidade troca um recurso grande por vários pequenos para reduzir o impacto de uma falha. Ele não trata de desligar recursos.',
      'Este princípio de otimização de custos diz para pagar apenas pelos recursos de que você precisa. Desligar ambientes usados só no horário de trabalho é o exemplo que o framework dá.',
      'Este princípio de eficiência de desempenho trata de consumir tecnologias complexas como serviço.',
      'Este princípio de segurança trata de monitorar, alertar e auditar ações e mudanças.',
    ],
    evidence: [
      {
        url: 'https://docs.aws.amazon.com/pt_br/wellarchitected/latest/framework/cost-dp.html',
        quote:
          'Por exemplo, ambientes de desenvolvimento e teste são geralmente usados apenas por oito horas ao dia durante a semana de trabalho. Você poderá parar esses recursos quando eles não estiverem em uso para obter uma economia potencial de 75% (40 horas versus 168 horas).',
      },
    ],
  },
  {
    id: 'd1-017',
    task: '1.2',
    stem: 'Uma empresa define sua infraestrutura e seus procedimentos de operação como código e os executa automaticamente em resposta a eventos, com proteções como aprovações e limites de erro. Qual princípio de design do pilar de excelência operacional isso segue?',
    options: [
      'Automatizar com segurança sempre que possível',
      'Usar arquiteturas serverless',
      'Proteger os dados em trânsito e em repouso',
      'Medir a eficiência geral',
    ],
    answers: [0],
    reasons: [
      'Este princípio trata de definir a carga de trabalho e suas operações como código, automatizá-las em resposta a eventos e adicionar proteções para limitar o erro humano.',
      'Este é um princípio de eficiência de desempenho sobre eliminar a necessidade de manter servidores.',
      'Este é um princípio de segurança sobre criptografia, tokenização e controle de acesso.',
      'Este é um princípio de otimização de custos sobre comparar o resultado do negócio com o seu custo.',
    ],
    evidence: [
      {
        url: 'https://docs.aws.amazon.com/pt_br/wellarchitected/latest/framework/oe-design-principles.html',
        quote:
          'Em seguida, você pode automatizar as operações da workload iniciando-as em resposta a eventos. Na nuvem, você pode usar a segurança de automação configurando barreiras de proteção, incluindo controle de taxa, limites de erro e aprovações.',
      },
    ],
  },
  {
    id: 'd1-018',
    task: '1.2',
    stem: 'Uma empresa quer adicionar recursos de machine learning à sua aplicação. Em vez de treinar a equipe de TI para hospedar e operar infraestrutura de machine learning, ela planeja usar um serviço gerenciado de machine learning da AWS. Qual princípio de design do pilar de eficiência de desempenho isso segue?',
    options: [
      'Tornar-se global em minutos',
      'Considerar a simpatia mecânica',
      'Experimentar com mais frequência',
      'Democratizar tecnologias avançadas',
    ],
    answers: [3],
    reasons: [
      'Este princípio trata de implantar em várias Regiões para reduzir a latência, e não de como a equipe adota uma nova tecnologia.',
      'Este princípio trata de escolher a tecnologia que combina com o uso da carga de trabalho, como seus padrões de acesso a dados.',
      'Este princípio trata de comparar rapidamente tipos de instância, armazenamento ou configurações.',
      'Consumir uma tecnologia complexa como machine learning na forma de serviço permite que a equipe foque no produto em vez de aprender a hospedá-la.',
    ],
    evidence: [
      {
        url: 'https://docs.aws.amazon.com/pt_br/wellarchitected/latest/framework/perf-dp.html',
        quote:
          'Em vez de solicitar que sua equipe de TI aprenda a hospedar e executar uma nova tecnologia, avalie a possibilidade de consumir a tecnologia como um serviço. Por exemplo, bancos de dados NoSQL, transcodificação de mídia e machine learning são tecnologias que exigem altos níveis de especialização.',
      },
    ],
  },
  {
    id: 'd1-019',
    task: '1.2',
    stem: 'Quais das opções a seguir são princípios de design do pilar de excelência operacional do AWS Well-Architected Framework? (Selecione DUAS.)',
    options: [
      'Manter as pessoas longe dos dados',
      'Parar de adivinhar a capacidade',
      'Fazer alterações frequentes, pequenas e reversíveis',
      'Analisar e atribuir despesas',
      'Antecipar falhas',
    ],
    answers: [2, 4],
    reasons: [
      'Este é um princípio de design do pilar de segurança.',
      'Este é um princípio de design do pilar de confiabilidade.',
      'Mudanças pequenas e incrementais que podem ser revertidas reduzem o raio de impacto e permitem reverter mais rápido quando há falhas.',
      'Este é um princípio de design do pilar de otimização de custos.',
      'Provocar cenários de falha e testar os procedimentos contra eles é um princípio de design de excelência operacional.',
    ],
    evidence: [
      {
        url: 'https://docs.aws.amazon.com/pt_br/wellarchitected/latest/framework/oe-design-principles.html',
        quote:
          'Técnicas de implantação automatizadas, bem como mudanças menores e incrementais, reduzem o raio de expansão e permitem uma reversão mais rápida se ocorrerem falhas.',
      },
      {
        url: 'https://docs.aws.amazon.com/pt_br/wellarchitected/latest/framework/oe-design-principles.html',
        quote:
          'Preveja a falha: maximize o sucesso operacional conduzindo cenários de falha para entender o perfil de risco da workload e seu impacto nos resultados comerciais.',
      },
    ],
  },
  {
    id: 'd1-020',
    task: '1.2',
    stem: 'Uma empresa troca uma instância Amazon EC2 grande por várias instâncias menores atrás de um load balancer, para que a falha de uma instância tenha menos impacto na carga de trabalho. Qual princípio de design isso segue?',
    options: [
      'Considerar a simpatia mecânica',
      'Antecipar e adotar ofertas de hardware e software novas e mais eficientes',
      'Escalar horizontalmente para aumentar a disponibilidade agregada da carga de trabalho',
      'Implementar uma base sólida de identidade',
    ],
    answers: [2],
    reasons: [
      'Este princípio de eficiência de desempenho trata de combinar a tecnologia com o uso da carga de trabalho, e não de reduzir o impacto de falhas.',
      'Este princípio de sustentabilidade trata de migrar para hardware e software mais eficientes quando ficam disponíveis, e não de disponibilidade.',
      'Este princípio de confiabilidade troca um recurso grande por vários pequenos, para que uma única falha não afete a carga de trabalho inteira.',
      'Este princípio de segurança trata de menor privilégio e de gerenciamento centralizado de identidades.',
    ],
    evidence: [
      {
        url: 'https://docs.aws.amazon.com/pt_br/wellarchitected/latest/framework/rel-dp.html',
        quote:
          'substitua um recurso grande por vários recursos pequenos para reduzir o impacto de uma única falha na workload geral.',
      },
    ],
  },
  {
    id: 'd1-021',
    task: '1.2',
    stem: 'Qual serviço da AWS ajuda uma empresa a revisar suas cargas de trabalho em relação às melhores práticas do AWS Well-Architected Framework e obter um plano de melhorias?',
    options: ['AWS Trusted Advisor', 'AWS Well-Architected Tool', 'AWS Config', 'AWS Compute Optimizer'],
    answers: [1],
    reasons: [
      'O Trusted Advisor faz verificações automáticas na conta e recomenda melhorias, mas não faz a revisão de uma carga de trabalho em relação ao framework.',
      'O Well-Architected Tool, disponível no AWS Management Console, revisa as cargas de trabalho em relação às melhores práticas do framework e entrega um plano de ação, com marcos para acompanhar a evolução.',
      'O Config registra as configurações dos recursos e as avalia em relação a regras, e não às melhores práticas do framework.',
      'O Compute Optimizer recomenda rightsizing de recursos com base na utilização. Ele não revisa uma carga de trabalho em relação ao framework.',
    ],
    evidence: [
      {
        url: 'https://docs.aws.amazon.com/pt_br/wellarchitected/latest/userguide/tool.html',
        quote:
          'You can use AWS WA Tool to document and measure your workload using the best practices from the AWS Well-Architected Framework.',
      },
    ],
  },
  {
    id: 'd1-022',
    task: '1.2',
    stem: 'Uma empresa está revisando sua carga de trabalho em relação ao pilar de segurança do AWS Well-Architected Framework. Quais ações seguem os princípios de design desse pilar? (Selecione DUAS.)',
    options: [
      'Conceder o menor privilégio com gerenciamento centralizado de identidades',
      'Trocar um servidor grande por vários servidores menores',
      'Desligar os servidores de desenvolvimento fora do horário comercial',
      'Monitorar, alertar e auditar as mudanças no ambiente em tempo real',
      'Implantar a carga de trabalho em mais Regiões para reduzir a latência',
    ],
    answers: [0, 3],
    reasons: [
      'Menor privilégio e gerenciamento centralizado de identidades fazem parte do princípio de implementar uma base sólida de identidade.',
      'Isso segue o princípio de confiabilidade de escalar horizontalmente, e não um princípio de segurança.',
      'Isso segue o princípio de otimização de custos de adotar um modelo de consumo.',
      'Monitorar, alertar e auditar ações e mudanças em tempo real é o princípio de segurança de manter a rastreabilidade.',
      'Isso segue o princípio de eficiência de desempenho de tornar-se global em minutos.',
    ],
    evidence: [
      {
        url: 'https://docs.aws.amazon.com/pt_br/wellarchitected/latest/framework/sec-design.html',
        quote:
          'implemente o princípio do privilégio mínimo e separe as tarefas com autorização apropriada para cada interação com os recursos da AWS. Centralize o gerenciamento de identidades e procure eliminar a dependência de credenciais estáticas de longo prazo.',
      },
      {
        url: 'https://docs.aws.amazon.com/pt_br/wellarchitected/latest/framework/sec-design.html',
        quote: 'Manter a rastreabilidade: monitore, alerte e examine ações e alterações em seu ambiente em tempo real.',
      },
    ],
  },
  {
    id: 'd1-023',
    task: '1.3',
    stem: 'Uma empresa precisa levar 200 servidores on-premises para a AWS antes que o contrato do data center termine, daqui a poucos meses. Ela quer mover as aplicações como estão, sem alterá-las. Qual estratégia de migração a empresa deve usar?',
    options: ['Replatform', 'Refactor', 'Repurchase', 'Rehost'],
    answers: [3],
    reasons: [
      'O replatform introduz alguma otimização durante a mudança, como trocar para um banco de dados gerenciado, o que a empresa não quer.',
      'O refactor redesenha a aplicação para usar recursos nativos da nuvem. É a estratégia mais complexa e cara e não serve para uma mudança rápida sem alterações.',
      'O repurchase substitui a aplicação por outro produto, como uma oferta SaaS.',
      'O rehost, também chamado de lift-and-shift, move as aplicações para a AWS sem alterações e atende a grandes quantidades de servidores.',
    ],
    evidence: [
      {
        url: 'https://docs.aws.amazon.com/pt_br/prescriptive-guidance/latest/large-migration-guide/migration-strategies.html#rehost',
        quote:
          'Usando essa estratégia, você move seus aplicativos do ambiente de origem para o Nuvem AWS sem fazer nenhuma alteração no aplicativo.',
      },
    ],
  },
  {
    id: 'd1-024',
    task: '1.3',
    stem: 'Uma empresa executa o Microsoft SQL Server em servidores próprios. Ela quer mover o banco de dados para o Amazon RDS for SQL Server para que a AWS cuide de backups e patches, sem reescrever a aplicação. Qual estratégia de migração é essa?',
    options: ['Replatform', 'Rehost', 'Refactor', 'Relocate'],
    answers: [0],
    reasons: [
      'O replatform move a aplicação e acrescenta alguma otimização, como um serviço totalmente gerenciado. Levar o SQL Server para o Amazon RDS for SQL Server é o exemplo que a AWS dá.',
      'O rehost move os servidores como estão. A empresa continuaria gerenciando o software do banco de dados.',
      'O refactor muda a arquitetura da aplicação para usar recursos nativos da nuvem, o que a empresa não planeja fazer.',
      'O relocate move uma plataforma de virtualização inteira, ou recursos entre VPCs, Regiões ou contas, sem mudar a plataforma em que a carga de trabalho roda.',
    ],
    evidence: [
      {
        url: 'https://docs.aws.amazon.com/pt_br/prescriptive-guidance/latest/large-migration-guide/migration-strategies.html#replatform',
        quote:
          'Usando essa estratégia de migração, você move o aplicativo para a nuvem e introduz algum nível de otimização para operar o aplicativo com eficiência, reduzir custos ou aproveitar os recursos da nuvem. Por exemplo, você pode reformatar um banco de dados Microsoft SQL Server para Amazon RDS for SQL Server.',
      },
    ],
  },
  {
    id: 'd1-025',
    task: '1.3',
    stem: 'Uma empresa executa uma aplicação própria de gestão de relacionamento com o cliente (CRM) em seu data center. Ela planeja parar de manter essa aplicação e migrar seus usuários para um produto de CRM em software como serviço (SaaS). Qual estratégia de migração é essa?',
    options: ['Rehost', 'Retain', 'Repurchase', 'Refactor'],
    answers: [2],
    reasons: [
      'O rehost levaria a mesma aplicação própria para a AWS, e a empresa continuaria a mantê-la.',
      'O retain mantém a aplicação onde está, mas a empresa quer substituí-la.',
      'O repurchase, também chamado de drop and shop, substitui a aplicação por outro produto, como trocar uma aplicação própria ou licenciada por um SaaS.',
      'O refactor redesenharia a aplicação própria para a nuvem, e a empresa continuaria a mantê-la.',
    ],
    evidence: [
      {
        url: 'https://docs.aws.amazon.com/pt_br/prescriptive-guidance/latest/large-migration-guide/migration-strategies.html#repurchase',
        quote:
          'Substituindo um aplicativo personalizado — você pode evitar a recodificação e a rearquitetura de um aplicativo personalizado recomprando um aplicativo SaaS baseado no fornecedor ou baseado na nuvem.',
      },
    ],
  },
  {
    id: 'd1-026',
    task: '1.3',
    stem: 'Durante uma avaliação de migração, uma empresa encontra uma aplicação que não recebe conexões há 90 dias e já não tem valor para o negócio. A empresa quer eliminar o custo de hospedá-la. Qual estratégia de migração a empresa deve aplicar?',
    options: ['Retain', 'Retire', 'Relocate', 'Rehost'],
    answers: [1],
    reasons: [
      'O retain mantém a aplicação rodando no ambiente de origem, então a empresa continuaria pagando para hospedá-la.',
      'O retire desativa ou arquiva a aplicação e desliga seus servidores, o que elimina o custo de mantê-la e hospedá-la.',
      'O relocate leva a aplicação para a AWS sem alterações, então a empresa continuaria pagando para hospedá-la.',
      'O rehost leva a aplicação para a AWS sem alterações, então a empresa continuaria pagando para hospedá-la.',
    ],
    evidence: [
      {
        url: 'https://docs.aws.amazon.com/pt_br/prescriptive-guidance/latest/large-migration-guide/migration-strategies.html#retire',
        quote:
          'Essa é a estratégia de migração para os aplicativos que você deseja descomissionar ou arquivar. Desativar o aplicativo significa que você pode desligar os servidores dentro dessa pilha de aplicativos.',
      },
    ],
  },
  {
    id: 'd1-027',
    task: '1.3',
    stem: 'Uma empresa quer migrar um banco de dados on-premises para a AWS com o mínimo de indisponibilidade. O banco de origem precisa continuar em uso durante a migração, e as mudanças em andamento precisam ser replicadas para o destino até a virada. Qual serviço da AWS atende a esses requisitos?',
    options: [
      'AWS Schema Conversion Tool (AWS SCT)',
      'Migration Evaluator',
      'AWS Backup',
      'AWS Database Migration Service (AWS DMS)',
    ],
    answers: [3],
    reasons: [
      'O AWS SCT converte o esquema de um banco de dados de um mecanismo para outro. Ele não replica mudanças em andamento.',
      'O Migration Evaluator monta o business case da migração. Ele não move dados.',
      'O AWS Backup centraliza os backups dos recursos da AWS. Ele não mantém um banco de origem e um de destino sincronizados.',
      'O AWS DMS faz migrações únicas ou replica as mudanças em andamento para manter origem e destino sincronizados até a virada.',
    ],
    evidence: [
      {
        url: 'https://docs.aws.amazon.com/pt_br/dms/latest/userguide/Welcome.html',
        quote:
          'É possível executar migrações avulsas e replicar as alterações em andamento para manter as origens e os destinos em sincronia.',
      },
    ],
  },
  {
    id: 'd1-028',
    task: '1.3',
    stem: 'Uma empresa quer migrar um banco de dados Oracle on-premises para o Amazon Aurora PostgreSQL-Compatible Edition. Quais serviços da AWS ela deve usar para converter o esquema e mover os dados? (Selecione DUAS.)',
    options: [
      'AWS Application Migration Service',
      'AWS Schema Conversion Tool (AWS SCT)',
      'AWS Database Migration Service (AWS DMS)',
      'AWS Backup',
      'AWS Storage Gateway',
    ],
    answers: [1, 2],
    reasons: [
      'O AWS Application Migration Service, hoje chamado AWS Transform MGN, faz rehost de servidores inteiros. Ele não converte um banco de dados para outro mecanismo.',
      'O AWS SCT converte o esquema de um mecanismo de banco de dados para outro, e Oracle para Aurora PostgreSQL é uma conversão suportada.',
      'Depois que o esquema é convertido, o AWS DMS migra os dados. O AWS SCT pode até criar os endpoints e as tarefas do AWS DMS.',
      'O AWS Backup protege dados com backups. Ele não converte esquemas entre mecanismos.',
      'O Storage Gateway dá a aplicações on-premises acesso ao armazenamento na nuvem. Ele não migra bancos de dados entre mecanismos.',
    ],
    evidence: [
      {
        url: 'https://docs.aws.amazon.com/pt_br/SchemaConversionTool/latest/userguide/CHAP_Source.Oracle.ToPostgreSQL.html',
        quote:
          'Ao converter um banco de dados Oracle para RDS para PostgreSQL ou Amazon Aurora PostgreSQL esteja ciente do seguinte.',
      },
      {
        url: 'https://docs.aws.amazon.com/pt_br/dms/latest/userguide/Welcome.html',
        quote:
          'Depois de converter seus esquemas de origem e aplicar o código convertido ao seu banco de dados de destino, você pode usá-lo AWS DMS para migrar seus dados.',
      },
    ],
  },
  {
    id: 'd1-029',
    task: '1.3',
    stem: 'Uma empresa que está adotando a AWS percebe que sua equipe não tem habilidades em nuvem e que os times resistem às novas formas de trabalho. Ela quer orientação sobre treinamento, liderança e mudança organizacional. Qual perspectiva do AWS Cloud Adoption Framework (AWS CAF) trata disso?',
    options: ['Pessoas', 'Governança', 'Operações', 'Plataforma'],
    answers: [0],
    reasons: [
      'A perspectiva de Pessoas faz a ponte entre tecnologia e negócio, com foco em cultura, estrutura organizacional, liderança e força de trabalho, incluindo fluência em nuvem e aceleração da mudança.',
      'A perspectiva de Governança orquestra as iniciativas de nuvem e gerencia riscos, benefícios e gastos com nuvem.',
      'A perspectiva de Operações garante que os serviços de nuvem sejam entregues no nível de que o negócio precisa.',
      'A perspectiva de Plataforma constrói uma plataforma de nuvem híbrida escalável e moderniza as cargas de trabalho.',
    ],
    evidence: [
      {
        url: 'https://docs.aws.amazon.com/pt_br/whitepapers/latest/overview-aws-cloud-adoption-framework/people-perspective.html',
        quote:
          'A perspectiva de pessoas serve como uma ponte entre tecnologia e negócios, acelerando a jornada para a nuvem para ajudar as organizações a evoluir mais rapidamente para uma cultura de crescimento contínuo, aprendizado e onde a mudança se torna normal, com foco na cultura, estrutura organizacional, liderança e quadro de funcionários.',
      },
    ],
  },
  {
    id: 'd1-030',
    task: '1.3',
    stem: 'Uma empresa planeja usar a AWS para lançar novos produtos digitais, alcançar novos clientes e entrar em novos segmentos de mercado. Qual resultado de negócio do AWS Cloud Adoption Framework (AWS CAF) isso busca?',
    options: [
      'Redução do risco de negócio',
      'Melhor desempenho ambiental, social e de governança (ESG)',
      'Aumento da receita',
      'Aumento da eficiência operacional',
    ],
    answers: [2],
    reasons: [
      'Reduzir o risco de negócio trata de melhorar a confiabilidade, o desempenho e a segurança.',
      'Melhorar o desempenho ESG trata de sustentabilidade e transparência corporativa.',
      'Aumentar a receita significa criar novos produtos e serviços, alcançar novos clientes e entrar em novos segmentos de mercado.',
      'Aumentar a eficiência operacional trata de reduzir custos de operação e aumentar a produtividade.',
    ],
    evidence: [
      {
        url: 'https://aws.amazon.com/pt/cloud-adoption-framework/#beneficios',
        quote: 'Crie novos produtos e serviços, alcance novos clientes e entre em novos segmentos de mercado.',
      },
    ],
  },
  {
    id: 'd1-031',
    task: '1.3',
    stem: 'Uma empresa quer um business case baseado em dados antes de levar seus servidores on-premises para a AWS. Ela precisa dos custos projetados na AWS com base no uso atual, incluindo uma comparação entre as opções Bring Your Own License e License Included. Qual oferta da AWS ela deve usar?',
    options: ['AWS Cost Explorer', 'AWS Budgets', 'AWS Compute Optimizer', 'Migration Evaluator'],
    answers: [3],
    reasons: [
      'O Cost Explorer analisa custos e uso que a empresa já tem na AWS, e não o ambiente on-premises.',
      'O Budgets alerta quando custos ou uso na AWS passam de um limite. Ele não projeta o custo de um ambiente on-premises na AWS.',
      'O Compute Optimizer recomenda rightsizing para recursos que já rodam na AWS.',
      'O Migration Evaluator monta um business case baseado em dados, encontra servidores on-premises superdimensionados e compara os custos de BYOL e License Included.',
    ],
    evidence: [
      {
        url: 'https://aws.amazon.com/pt/migration-evaluator/#beneficios',
        quote:
          'Planeje eficientemente a sua migração para identificar as licenças existentes e comparações de custos de execução das opções Traga a sua própria licença (BYOL) e Licença incluída (LI).',
      },
    ],
  },
  {
    id: 'd1-032',
    task: '1.4',
    stem: 'Uma empresa comprava servidores a cada três anos com grandes pagamentos antecipados. Depois de migrar para a AWS, ela paga todo mês apenas pelos recursos que consome. Qual afirmação descreve essa mudança na estrutura de custos?',
    options: [
      'Despesas fixas antecipadas são substituídas por despesas variáveis',
      'Despesas variáveis são substituídas por despesas fixas',
      'Despesas operacionais são substituídas por despesas de capital',
      'Os custos deixam de depender do quanto é consumido',
    ],
    answers: [0],
    reasons: [
      'Em vez de investir pesado em data centers e servidores antes de saber como serão usados, a empresa paga só quando consome recursos e só pelo quanto consome.',
      'A mudança é o contrário. O investimento antecipado era a despesa fixa, e a cobrança pelo consumo é variável.',
      'A mudança é o contrário. A compra antecipada de hardware é despesa de capital, e pagar pelo consumo é despesa operacional.',
      'Com o pagamento conforme o uso, o custo acompanha o consumo. Usar mais custa mais e usar menos custa menos.',
    ],
    evidence: [
      {
        url: 'https://docs.aws.amazon.com/pt_br/whitepapers/latest/aws-overview/six-advantages-of-cloud-computing.html',
        quote:
          'em vez de fazer altos investimentos em data centers e servidores antes de saber como usá-los, você pode pagar somente quando consumir recursos de computação e pagar somente por quanto consumir.',
      },
    ],
  },
  {
    id: 'd1-033',
    task: '1.4',
    stem: 'Uma empresa move um banco de dados de servidores no próprio data center para uma instância Amazon EC2. Quais custos a empresa deixa de arcar diretamente depois da mudança? (Selecione DUAS.)',
    options: [
      'Tempo da equipe para aplicar patches no sistema operacional',
      'Tempo da equipe para fazer backup do banco de dados',
      'Tempo da equipe para otimizar a aplicação',
      'Energia, rede e refrigeração dos servidores',
      'Substituição do hardware dos servidores no fim da vida útil',
    ],
    answers: [3, 4],
    reasons: [
      'No Amazon EC2, o cliente continua instalando o sistema operacional e aplicando os patches.',
      'No Amazon EC2, o cliente continua gerenciando os backups do banco de dados. Um serviço gerenciado como o Amazon RDS assumiria essa tarefa.',
      'A otimização da aplicação fica com o cliente em todos os modelos, on-premises, no EC2 e no RDS.',
      'On-premises, a empresa paga energia, rede e refrigeração. No Amazon EC2, a AWS cuida disso.',
      'On-premises, a empresa gerencia o ciclo de vida do hardware. No Amazon EC2, a AWS gerencia os servidores e a substituição deles.',
    ],
    evidence: [
      {
        url: 'https://docs.aws.amazon.com/pt_br/AmazonRDS/latest/UserGuide/Welcome.html#Welcome.Concepts.comparison',
        quote:
          'A AWS gerencia as camadas de hardware, o que elimina parte do trabalho de gerenciar um servidor de banco de dados on-premises.',
      },
      {
        url: 'https://docs.aws.amazon.com/pt_br/AmazonRDS/latest/UserGuide/Welcome.html#Welcome.Concepts.comparison',
        quote:
          'A AWS gerencia as camadas de hardware, o que elimina parte do trabalho de gerenciar um servidor de banco de dados on-premises.',
      },
    ],
  },
  {
    id: 'd1-034',
    task: '1.4',
    stem: 'Uma empresa tem licenças do Windows Server licenciadas por núcleo físico. Ela quer usar essas licenças na AWS para não pagar por licenças novas. Qual opção do Amazon EC2 atende a esse requisito?',
    options: [
      'Amazon EC2 Spot Instances',
      'Amazon EC2 Dedicated Hosts',
      'Amazon EC2 Dedicated Instances',
      'Amazon EC2 Reserved Instances',
    ],
    answers: [1],
    reasons: [
      'Spot Instances são uma opção de preço para capacidade ociosa. Elas não dão visibilidade dos núcleos físicos que licenças por núcleo exigem.',
      'Um Dedicated Host é um servidor físico totalmente dedicado ao cliente, com visibilidade de sockets e núcleos, então aceita licenças existentes por socket, por núcleo e por VM (BYOL).',
      'Dedicated Instances rodam em hardware dedicado a uma conta, mas não dão visibilidade de sockets e núcleos, então não servem para licenças por núcleo.',
      'Reserved Instances são um desconto de faturamento em troca de compromisso. Elas não mudam o licenciamento da instância.',
    ],
    evidence: [
      {
        url: 'https://docs.aws.amazon.com/pt_br/AWSEC2/latest/UserGuide/dedicated-hosts-overview.html',
        quote:
          'Eles permitem que você use suas licenças de software existentes por soquete, por núcleo ou por VM, incluindo o Windows Server, o SQL Server, o SUSE Linux Enterprise Server, o Red Hat Enterprise Linux ou outras licenças de software vinculadas a VMs, soquetes ou núcleos físicos, de acordo com os termos de sua licença.',
      },
    ],
  },
  {
    id: 'd1-035',
    task: '1.4',
    stem: 'Uma empresa quer executar o Oracle Database Standard Edition 2 no Amazon RDS. Ela não tem licenças Oracle e não quer comprá-las separadamente. Qual modelo de licenciamento ela deve escolher?',
    options: [
      'Bring Your Own License (BYOL)',
      'Licenças autogerenciadas no AWS License Manager',
      'License Included (LI)',
      'Licenciamento por núcleo em Dedicated Hosts',
    ],
    answers: [2],
    reasons: [
      'No BYOL, a empresa usa licenças Oracle que já possui, e ela não possui nenhuma.',
      'O License Manager acompanha licenças que a empresa possui. Ele não fornece licenças.',
      'No License Included, a AWS detém a licença do Oracle e a empresa não compra licenças separadamente. O Amazon RDS oferece esse modelo para o Standard Edition 2.',
      'Dedicated Hosts são uma opção do Amazon EC2 para trazer licenças que a empresa já possui, e ela não possui nenhuma.',
    ],
    evidence: [
      {
        url: 'https://docs.aws.amazon.com/pt_br/AmazonRDS/latest/UserGuide/Oracle.Concepts.Licensing.html#Oracle.Concepts.Licensing.LicenseIncluded',
        quote:
          'No modelo de licença inclusa, você não precisa comprar licenças do Oracle Database separadamente. O AWS tem licença para o software de banco de dados Oracle.',
      },
    ],
  },
  {
    id: 'd1-036',
    task: '1.4',
    stem: 'Uma empresa leva suas próprias licenças Microsoft e Oracle para a AWS. Ela quer acompanhar o uso das licenças em todas as contas e definir limites que impeçam novas implantações de ultrapassar as licenças que possui. Qual serviço da AWS atende a esses requisitos?',
    options: ['AWS Config', 'AWS Budgets', 'AWS Artifact', 'AWS License Manager'],
    answers: [3],
    reasons: [
      'O Config registra e avalia as configurações dos recursos. Ele não conta o uso de licenças em relação aos direitos adquiridos.',
      'O Budgets acompanha gastos em relação a um limite, e não o uso de licenças.',
      'O Artifact fornece relatórios de conformidade e acordos da AWS. Ele não acompanha licenças de software.',
      'O License Manager acompanha licenças de software em várias contas e Regiões e define limites rígidos ou flexíveis que impedem o uso fora de conformidade antes que ele aconteça.',
    ],
    evidence: [
      {
        url: 'https://docs.aws.amazon.com/pt_br/license-manager/latest/userguide/license-manager.html',
        quote:
          'Com controles baseados em regras no consumo de licenças, os administradores podem definir limites rígidos ou flexíveis em implantações de nuvem novas e existentes. Com base nesses limites, o License Manager ajuda a impedir o uso incompatível do servidor antes que isso aconteça.',
      },
    ],
  },
  {
    id: 'd1-037',
    task: '1.4',
    stem: 'Uma empresa revisa suas instâncias Amazon EC2 e descobre que a maioria usa menos de 10% de CPU e memória. Ela planeja trocá-las por tipos de instância menores que ainda atendam às necessidades de desempenho. Como se chama essa prática?',
    options: ['Escalabilidade horizontal', 'Rightsizing', 'Replatform', 'Superprovisionamento'],
    answers: [1],
    reasons: [
      'A escalabilidade horizontal muda a quantidade de instâncias, e não o tamanho de cada uma.',
      'Rightsizing é ajustar o tipo e o tamanho de cada recurso à utilização real, o que reduz o custo e ainda atende aos requisitos de desempenho.',
      'Replatform é uma estratégia de migração que muda a plataforma da carga de trabalho durante a ida para a nuvem.',
      'Superprovisionamento é o problema que a empresa encontrou, pagar por capacidade que fica ociosa.',
    ],
    evidence: [
      {
        url: 'https://docs.aws.amazon.com/pt_br/wellarchitected/latest/framework/perf_compute_hardware_configure_and_right_size_compute_resources.html#implementation-guidance',
        quote:
          'O dimensionamento correto permite que as organizações operem a infraestrutura de nuvem de forma eficiente e econômica ao mesmo tempo que atendem às suas necessidades comerciais.',
      },
    ],
  },
  {
    id: 'd1-038',
    task: '1.4',
    stem: 'Qual serviço da AWS analisa as configurações e as métricas de utilização dos recursos da AWS para recomendar rightsizing e identificar recursos ociosos?',
    options: ['AWS Compute Optimizer', 'AWS Budgets', 'AWS CloudTrail', 'AWS Cost and Usage Reports'],
    answers: [0],
    reasons: [
      'O Compute Optimizer analisa configurações e métricas de utilização para recomendar rightsizing e encontrar recursos ociosos, o que reduz custos.',
      'O Budgets alerta quando custos ou uso passam de um limite. Ele não analisa a utilização dos recursos.',
      'O CloudTrail registra a atividade de API da conta. Ele não recomenda tamanhos de recursos.',
      'O Cost and Usage Reports entrega dados detalhados de faturamento, mas não analisa a utilização nem recomenda tamanhos.',
    ],
    evidence: [
      {
        url: 'https://docs.aws.amazon.com/pt_br/compute-optimizer/latest/ug/what-is-compute-optimizer.html',
        quote:
          'um serviço que analisa as métricas de configuração e utilização AWS de seus recursos para fornecer recomendações de dimensionamento correto e identificar recursos ociosos.',
      },
    ],
  },
  {
    id: 'd1-039',
    task: '1.4',
    stem: 'Uma empresa passa a usar templates do AWS CloudFormation para criar seus ambientes, em vez de configurar cada recurso à mão no console. Quais benefícios essa automação traz? (Selecione DUAS.)',
    options: [
      'Os recursos custam menos do que quando criados no console',
      'Os ambientes são criados de forma consistente e repetível',
      'A AWS passa a ser responsável por configurar os recursos',
      'Os recursos recebem rightsizing automático depois de criados',
      'A equipe gasta menos tempo gerenciando recursos',
    ],
    answers: [1, 4],
    reasons: [
      'Um recurso custa o mesmo, seja qual for a forma de criá-lo. A economia vem de menos trabalho manual, e não de um preço menor.',
      'Um template descreve cada recurso uma vez, então o mesmo ambiente pode ser provisionado várias vezes de forma consistente e repetível.',
      'O cliente continua escrevendo o template e decidindo como cada recurso é configurado. O CloudFormation apenas provisiona o que o template descreve.',
      'O CloudFormation cria o que o template descreve. Recomendações de rightsizing vêm de serviços como o AWS Compute Optimizer.',
      'O CloudFormation provisiona e configura os recursos e suas dependências, então a equipe gasta menos tempo gerenciando-os e mais tempo nas aplicações.',
    ],
    evidence: [
      {
        url: 'https://docs.aws.amazon.com/pt_br/AWSCloudFormation/latest/UserGuide/Welcome.html#welcome-quickly-replicate-your-infrastructure',
        quote:
          'Reutilize seu modelo do CloudFormation para criar seus recursos de modo consistente e repetível. Para reutilizar seu modelo, descreva seus recursos uma vez e, em seguida, provisione os mesmos recursos cada vez mais em diversas regiões.',
      },
      {
        url: 'https://docs.aws.amazon.com/pt_br/AWSCloudFormation/latest/UserGuide/Welcome.html',
        quote:
          'O CloudFormation é um serviço que ajuda você a modelar e configurar seus recursos da AWS para despender menos tempo gerenciando esses recursos e mais tempo se concentrando em seus aplicativos executados AWS.',
      },
    ],
  },
  {
    id: 'd1-040',
    task: '1.4',
    stem: 'A AWS agrega o uso de centenas de milhares de clientes. Como isso beneficia cada cliente?',
    options: [
      'Cada cliente recebe hardware físico dedicado',
      'Os preços ficam fixos durante toda a vida da conta',
      'Os clientes pagam preços menores no modelo de pagamento conforme o uso',
      'Os clientes não pagam nada pela transferência de dados de saída',
    ],
    answers: [2],
    reasons: [
      'Uso agregado significa que os clientes compartilham a infraestrutura. Hardware dedicado é uma opção à parte, que custa mais.',
      'A economia de escala reduz preços. Ela não congela um preço durante toda a vida de uma conta.',
      'O uso agregado dá à AWS maior economia de escala, o que se traduz em preços menores no pagamento conforme o uso do que uma empresa conseguiria sozinha.',
      'A transferência de dados de saída continua sendo cobrada. A economia de escala reduz preços, mas não torna os serviços gratuitos.',
    ],
    evidence: [
      {
        url: 'https://docs.aws.amazon.com/pt_br/whitepapers/latest/aws-overview/six-advantages-of-cloud-computing.html',
        quote:
          'ao usar a computação em nuvem, você pode ter um custo variável menor do que o pago por conta própria. Como o uso de centenas de milhares de clientes é agregado na nuvem, provedores, como a AWS, podem ter maiores economias de escala, o que se traduz em menor preço conforme o uso.',
      },
    ],
  },
]
