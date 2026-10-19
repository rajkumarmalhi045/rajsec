import { TeamMember } from '../types';

export const TEAM_MEMBERS: TeamMember[] = [
  {
    memberNumber: 1,
    positionEn: 'Founder & Owner',
    positionUr: 'Owner',
    department: 'Executive',
    mainDutyEn: 'Corporate vision, strategic mission, investor relations, and ultimate business direction.',
    mainDutyUr: 'Vision, mission aur business direction',
    responsibilities: [
      'Establishes the foundational corporate purpose and high-level strategy',
      'Authorizes company incorporation and regulatory capital commitments',
      'Gives final approval on all company-wide policies and executive decisions',
      'Oversees board-level governance and long-term brand equity'
    ],
    assignedDeliverables: [12, 15],
    raciStatus: 'Accountable'
  },
  {
    memberNumber: 2,
    positionEn: 'Chief Executive Officer (CEO)',
    positionUr: 'CEO',
    department: 'Executive',
    mainDutyEn: 'Overall operational management, executive decisions, cross-functional leadership, and P&L oversight.',
    mainDutyUr: 'Overall management aur decisions',
    responsibilities: [
      'Leads day-to-day corporate execution and inter-departmental synergy',
      'Reviews all standard operating procedures before final owner sign-off',
      'Spearheads strategic partnerships with enterprise banks and healthcare groups',
      'Monitors company-wide KPIs, customer satisfaction, and fiscal milestones'
    ],
    assignedDeliverables: [7, 12, 13],
    raciStatus: 'Accountable'
  },
  {
    memberNumber: 3,
    positionEn: 'HR, Sales & Marketing Manager',
    positionUr: 'HR/Sales/Marketing Manager',
    department: 'Management',
    mainDutyEn: 'Inter-departmental coordination across human resources, business growth, and brand campaigns.',
    mainDutyUr: 'Departments coordinate karna',
    responsibilities: [
      'Aligns customer acquisition strategies with technical team capacity',
      'Authors communication ethics policies for internal staff and external clients',
      'Directs employee onboarding, talent retention, and professional evaluations',
      'Ensures cohesive communication protocols between sales pipelines and HR policies'
    ],
    assignedDeliverables: [6, 7, 8, 12],
    raciStatus: 'Responsible'
  },
  {
    memberNumber: 4,
    positionEn: 'Finance Director',
    positionUr: 'Finance Director',
    department: 'Executive',
    mainDutyEn: 'Capital allocation, annual budgeting, operational expenditures, invoicing, and fiscal compliance.',
    mainDutyUr: 'Budget aur expenses',
    responsibilities: [
      'Formulates company operating budgets and revenue forecasts',
      'Implements two-tier authorization controls on corporate expenses',
      'Manages client invoicing, payment terms, and accounts receivable',
      'Supervises statutory tax filings, audit trails, and financial statements'
    ],
    assignedDeliverables: [5, 9, 14],
    raciStatus: 'Accountable'
  },
  {
    memberNumber: 5,
    positionEn: 'Sales Executive',
    positionUr: 'Sales Executive',
    department: 'Sales & Marketing',
    mainDutyEn: 'B2B client acquisition, prospect prospecting, solution proposals, and meeting revenue quotas.',
    mainDutyUr: 'Customers aur sales',
    responsibilities: [
      'Identifies target prospects in Banking, Healthcare, Higher Ed, and Tech sectors',
      'Conducts initial discovery meetings and scopes penetration testing engagements',
      'Maintains the CRM deal pipeline and submits weekly conversion forecasts',
      'Executes service level contracts alongside the legal and executive team'
    ],
    assignedDeliverables: [5, 14],
    raciStatus: 'Responsible'
  },
  {
    memberNumber: 6,
    positionEn: 'Marketing Executive',
    positionUr: 'Marketing Executive',
    department: 'Sales & Marketing',
    mainDutyEn: 'Brand positioning, digital marketing campaigns, social media, and web promotion strategy.',
    mainDutyUr: 'Website promotion aur campaigns',
    responsibilities: [
      'Executes multichannel B2B awareness campaigns on LinkedIn and tech forums',
      'Curates security whitepapers, threat advisories, and educational content',
      'Oversees digital website presentation, brand assets, and collateral design',
      'Analyzes inbound web traffic, conversion rates, and campaign ROI'
    ],
    assignedDeliverables: [1, 10],
    raciStatus: 'Responsible'
  },
  {
    memberNumber: 7,
    positionEn: 'Operations Supervisor',
    positionUr: 'Supervisor',
    department: 'Operations',
    mainDutyEn: 'Daily task dispatching, technical workflow monitoring, and rigorous deliverable quality checks.',
    mainDutyUr: 'Tasks aur quality check',
    responsibilities: [
      'Assigns client pentest and assessment tickets to technical personnel',
      'Conducts four-eye peer reviews on all penetration test findings reports',
      'Monitors project deadlines, sprint velocity, and service level commitments',
      'Maintains customer satisfaction metrics and resolves service friction points'
    ],
    assignedDeliverables: [11],
    raciStatus: 'Responsible'
  },
  {
    memberNumber: 8,
    positionEn: 'Operations Officer',
    positionUr: 'Operations Officer',
    department: 'Operations',
    mainDutyEn: 'Execution of day-to-day administrative workflows, client scheduling, and operational logistics.',
    mainDutyUr: 'Daily workflow',
    responsibilities: [
      'Schedules testing windows with client IT administrators',
      'Coordinates facility logistics, office consumables, and administrative support',
      'Maintains client communication logs and documentation packages',
      'Supports the supervisor with client deliverable formatting and dispatch'
    ],
    assignedDeliverables: [1, 11, 14],
    raciStatus: 'Responsible'
  },
  {
    memberNumber: 9,
    positionEn: 'IT Manager',
    positionUr: 'IT Manager',
    department: 'IT & Security',
    mainDutyEn: 'Corporate hardware, network architecture, secure cloud infrastructure, and technical data integrity.',
    mainDutyUr: 'Computers, networks aur data security',
    responsibilities: [
      'Architects and maintains secure internal LAN, VPN, and lab testing environments',
      'Enforces workstation encryption (BitLocker/FileVault) and credential hygiene',
      'Administers automated, immutable 3-2-1 offsite data backup solutions',
      'Authors technical IT policies, Acceptable Use rules, and disaster recovery SOPs'
    ],
    assignedDeliverables: [3, 4, 13],
    raciStatus: 'Responsible'
  },
  {
    memberNumber: 10,
    positionEn: 'Security Manager',
    positionUr: 'Security Manager',
    department: 'IT & Security',
    mainDutyEn: 'Physical facility security, access badge controls, CCTV surveillance, and incident response.',
    mainDutyUr: 'Physical security aur incident response',
    responsibilities: [
      'Supervises physical office access control and biometric visitor logging',
      'Monitors 24/7 CCTV surveillance feeds and enforces 90-day archive retention',
      'Leads the Computer Security Incident Response Team (CSIRT) during alerts',
      'Conducts routine physical breach drills and perimeter security audits'
    ],
    assignedDeliverables: [2, 4, 13],
    raciStatus: 'Responsible'
  },
  {
    memberNumber: 11,
    positionEn: 'Documentation & Compliance Coordinator',
    positionUr: 'Documentation & Compliance Coordinator',
    department: 'Compliance',
    mainDutyEn: 'Policy archiving, version control enforcement, standard forms, and Master Document Register maintenance.',
    mainDutyUr: 'Policies aur records',
    responsibilities: [
      'Maintains the Master Document Control Register with unique document identifiers',
      'Enforces standardized policy formatting, version numbering, and review cycles',
      'Distributes operational forms (Visitor logs, leave forms, expense claims, incident tickets)',
      'Performs semi-annual document compliance audits to ensure inter-policy consistency'
    ],
    assignedDeliverables: [14, 15],
    raciStatus: 'Responsible'
  }
];
