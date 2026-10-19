import { Deliverable } from '../types';

export const DELIVERABLES: Deliverable[] = [
  {
    id: 1,
    code: 'DEL-01',
    titleEn: 'Brand Portfolio Website',
    titleUr: 'Brand Portfolio Website',
    category: 'Branding',
    assignedRole: 'Marketing Executive & Operations Officer',
    assignedMember: 6,
    descriptionEn: 'Professional company website featuring corporate identity, service catalogue, team hierarchy, company mission, contact endpoints, and deployment to GitHub Pages.',
    descriptionUr: 'Company ki professional website banani hai jahan services, team, mission, contact details aur branding ho. HTML aur CSS use karenge aur GitHub Pages par publish karenge.',
    keyOutputs: [
      'Responsive Single-Page Application / Web Showcase',
      'Services and capabilities breakdown',
      'Contact lead-capture portal',
      'GitHub repository & live deployment link'
    ],
    docFormat: 'HTML / CSS / React SPA (GitHub Pages)'
  },
  {
    id: 2,
    code: 'DEL-02',
    titleEn: 'Office Physical Security & Visitor SOP',
    titleUr: 'Office Security & Visitor SOP',
    category: 'Security',
    assignedRole: 'Security Manager',
    assignedMember: 10,
    descriptionEn: 'Standard operating procedures for office access controls, surveillance systems (CCTV), visitor escort protocols, ID badge enforcement, and physical entry logging.',
    descriptionUr: 'Office ke physical rules, CCTV monitoring, visitors entry logging aur security procedures ka standard operating document.',
    keyOutputs: [
      'Visitor check-in and check-out protocol',
      'CCTV data retention policy (90 days)',
      'Escorted access rules for secure server zones',
      'Physical key & badge inventory'
    ],
    docFormat: 'SEC-SOP-001 (Word / PDF)'
  },
  {
    id: 3,
    code: 'DEL-03',
    titleEn: 'IT Rules, Internet & Device Security SOP',
    titleUr: 'IT Rules & Internet SOP',
    category: 'Security',
    assignedRole: 'IT Manager',
    assignedMember: 9,
    descriptionEn: 'Acceptable use policy for workstation hardware, authorized software installations, high-security WiFi, password complexity, encryption, and safe web browsing.',
    descriptionUr: 'Computers aur internet use karne ke rules, authorized software, Wi-Fi security aur credential hygiene ke procedures.',
    keyOutputs: [
      'Workstation lock & screen security rules',
      'Two-Factor Authentication (2FA) mandate',
      'Removable media / USB prohibition policy',
      'Software whitelist & patch management schedule'
    ],
    docFormat: 'IT-POL-001 (Word / PDF)'
  },
  {
    id: 4,
    code: 'DEL-04',
    titleEn: 'Cyber Incident Handling & Triage SOP',
    titleUr: 'Cyber Incident Handling SOP',
    category: 'Security',
    assignedRole: 'Security Manager & IT Manager',
    assignedMember: 10,
    descriptionEn: 'Standard procedure for immediate threat detection, triage, containment, forensic evidence preservation, internal escalation, and remediation.',
    descriptionUr: 'Cyber attacks aur suspicious incidents handle karne ke formal tareeqay aur step-by-step reporting.',
    keyOutputs: [
      'Incident severity matrix (P1 Critical to P4 Low)',
      'Isolation protocols for infected host machines',
      'Chain-of-custody log for security artifacts',
      'Post-incident root cause analysis (RCA) template'
    ],
    docFormat: 'SEC-SOP-002 (Word / PDF)'
  },
  {
    id: 5,
    code: 'DEL-05',
    titleEn: 'Sales Targets & Performance Plan',
    titleUr: 'Sales Targets & Performance Plan',
    category: 'Strategy',
    assignedRole: 'Sales Executive',
    assignedMember: 5,
    descriptionEn: 'Comprehensive revenue targets, monthly customer acquisition projections across 5 target sectors, pricing tiers, commission plans, and conversion milestones.',
    descriptionUr: 'Company kitne customers hasil karegi, kitni sales hogi aur monthly revenue target kya hoga, yeh decide karna hai.',
    keyOutputs: [
      'Monthly & quarterly sales quotas ($15,000 MRR target)',
      'Client acquisition funnel by target sector',
      'Service package rate card & margins',
      'Sales performance review scorecards'
    ],
    docFormat: 'SAL-PLN-001 (Excel / Word)'
  },
  {
    id: 6,
    code: 'DEL-06',
    titleEn: 'Internal Workplace Communication Ethics SOP',
    titleUr: 'Internal Communication Ethics SOP',
    category: 'Governance',
    assignedRole: 'HR/Sales/Marketing Manager',
    assignedMember: 3,
    descriptionEn: 'Guidelines for respectful internal dialogue, Slack/email etiquette, non-disclosure compliance, conflict escalation channels, and professional workplace conduct.',
    descriptionUr: 'Ek document employees ke aapas ke communication, workplace etiquette aur respectful professional conduct ke liye.',
    keyOutputs: [
      'Official communication channel policy (Email/Teams/Slack)',
      'Anti-harassment & non-discrimination directives',
      'Internal whistleblower & reporting protocol',
      'Confidential internal knowledge sharing boundaries'
    ],
    docFormat: 'ETH-SOP-001 (Word / PDF)'
  },
  {
    id: 7,
    code: 'DEL-07',
    titleEn: 'External Client Communication & NDA Ethics SOP',
    titleUr: 'Client Communication Ethics SOP',
    category: 'Governance',
    assignedRole: 'HR/Sales/Marketing Manager & CEO',
    assignedMember: 3,
    descriptionEn: 'Standards for client interactions, vulnerability disclosure confidentiality, legally binding Non-Disclosure Agreements (NDAs), and report delivery security.',
    descriptionUr: 'Doosra document clients se professional communication, vulnerability confidentiality aur customer handling ke liye.',
    keyOutputs: [
      'Rules of engagement for vulnerability disclosures',
      'Client data confidentiality & NDA clauses',
      'Standardized email response SLAs (< 4 hours)',
      'Client dispute resolution and executive escalation'
    ],
    docFormat: 'ETH-SOP-002 (Word / PDF)'
  },
  {
    id: 8,
    code: 'DEL-08',
    titleEn: 'HR & Employee Management Policy',
    titleUr: 'HR & Employee Management',
    category: 'Human Resources',
    assignedRole: 'HR/Sales/Marketing Manager',
    assignedMember: 3,
    descriptionEn: 'End-to-end personnel framework: talent recruitment, onboarding, biometric attendance, leave administration, continuous training, performance reviews, and offboarding.',
    descriptionUr: 'Hiring, attendance, leave, employee training, performance aur resignation ke rules.',
    keyOutputs: [
      'Recruitment & background check policy',
      'Annual, casual, and medical leave allowances',
      'Performance appraisal rubric & KPIs',
      'Secure employee offboarding checklist'
    ],
    docFormat: 'HR-POL-001 (Word / PDF)'
  },
  {
    id: 9,
    code: 'DEL-09',
    titleEn: 'Finance, Budget & Expense Management Policy',
    titleUr: 'Finance & Expense Management',
    category: 'Finance',
    assignedRole: 'Finance Director',
    assignedMember: 4,
    descriptionEn: 'Financial controls: startup capital allocation, monthly operational budgets, vendor invoicing, expense reimbursement rules, petty cash limits, and multi-tier approvals.',
    descriptionUr: 'Company ka budget, expenses, invoices, payments aur financial approvals ka system.',
    keyOutputs: [
      'Operational budget breakdown (Infrastructure, Payroll, Tools)',
      'Dual-signature financial approval matrix',
      'Expense reimbursement validation workflow',
      'Audit trail and bank reconciliation standards'
    ],
    docFormat: 'FIN-POL-001 (Excel / Word)'
  },
  {
    id: 10,
    code: 'DEL-10',
    titleEn: 'Marketing & Brand Guidelines',
    titleUr: 'Marketing & Brand Guidelines',
    category: 'Branding',
    assignedRole: 'Marketing Executive',
    assignedMember: 6,
    descriptionEn: 'Corporate branding guide: official logos, color palette, typography specifications, digital marketing campaigns, LinkedIn B2B strategy, and whitepaper marketing.',
    descriptionUr: 'Company ka logo, colors, social media strategy, advertising aur customers tak pohanchne ka plan.',
    keyOutputs: [
      'Brand palette specifications (#0b0f19, #0284c7, #10b981)',
      'Typography pairing & logo exclusion zones',
      'Social media content calendar for cybersecurity tips',
      'B2B inbound lead acquisition campaign architecture'
    ],
    docFormat: 'MKT-GDL-001 (PDF / Brand Kit)'
  },
  {
    id: 11,
    code: 'DEL-11',
    titleEn: 'Operations & Quality Control SOP',
    titleUr: 'Operations & Quality Control',
    category: 'Operations',
    assignedRole: 'Operations Supervisor',
    assignedMember: 7,
    descriptionEn: 'Daily engagement workflows: pentest assignment ticketing, peer review of security vulnerability reports, client delivery QA checkpoints, and customer satisfaction audits.',
    descriptionUr: 'Rozana kaam kaise hoga, tasks kaun assign karega aur service ki quality kaise check hogi.',
    keyOutputs: [
      'Service ticket lifecycle and sprint allocation',
      'Four-eye peer review protocol for security audit reports',
      'Service Level Agreement (SLA) commitment metrics',
      'Quality checklist for delivered pentest deliverables'
    ],
    docFormat: 'OPS-SOP-001 (Word / PDF)'
  },
  {
    id: 12,
    code: 'DEL-12',
    titleEn: 'Organizational Chart & Detailed Job Descriptions',
    titleUr: 'Organizational Chart & Job Descriptions',
    category: 'Governance',
    assignedRole: 'HR/Sales/Marketing Manager & CEO',
    assignedMember: 3,
    descriptionEn: 'Formal governance tree covering all 11 personnel positions, hierarchical reporting relationships, defined KPIs, authority limits, and departmental RACI matrix.',
    descriptionUr: 'Company ka structure, 11 employees ke roles, responsibilities aur reporting relationships.',
    keyOutputs: [
      'Visual hierarchical organization chart',
      '11 detailed Job Description (JD) sheets',
      'Key Performance Indicators (KPIs) per role',
      'Reporting channels & escalation hierarchy'
    ],
    docFormat: 'ORG-DOC-001 (Word / Visio Chart)'
  },
  {
    id: 13,
    code: 'DEL-13',
    titleEn: 'Business Continuity & Disaster Recovery Plan',
    titleUr: 'Business Continuity & Incident Response',
    category: 'Operations',
    assignedRole: 'IT Manager & Security Manager',
    assignedMember: 9,
    descriptionEn: 'Procedures to maintain 99.9% operational resilience during cyber attacks, catastrophic database loss, ISP downtime, cloud outages, or key employee emergencies.',
    descriptionUr: 'Agar cyberattack ho, data delete ho jaye, internet band ho ya koi employee absent ho, to business ko kaise chalana hai.',
    keyOutputs: [
      'Recovery Time Objective (RTO < 4h) & Recovery Point Objective (RPO < 1h)',
      'Encrypted off-site cloud backup automation (3-2-1 strategy)',
      'Redundant ISP failover configurations',
      'Emergency succession plan for critical personnel'
    ],
    docFormat: 'BCP-PLN-001 (Word / PDF)'
  },
  {
    id: 14,
    code: 'DEL-14',
    titleEn: 'Standard Forms & Operational Templates Suite',
    titleUr: 'Forms & Templates',
    category: 'Operations',
    assignedRole: 'Documentation & Compliance Coordinator',
    assignedMember: 11,
    descriptionEn: 'Collection of standardized operational forms: Biometric & Manual Attendance, Leave Requests, Physical Visitor Log, Expense Vouchers, Incident Logs, and Sales Pipeline Tracker.',
    descriptionUr: 'Attendance register, leave form, visitor register, expense form, complaint form aur sales tracker.',
    keyOutputs: [
      'Form F-01: Visitor Entry & Security Badge Register',
      'Form F-02: Employee Leave Application Form',
      'Form F-03: Security Incident & Vulnerability Ticket',
      'Form F-04: Petty Cash & Expense Claim Voucher',
      'Form F-05: Client Lead & Sales Pipeline Tracker'
    ],
    docFormat: 'FRM-SET-001 (Interactive App / Word & Excel Templates)'
  },
  {
    id: 15,
    code: 'DEL-15',
    titleEn: 'Master Document Control Register',
    titleUr: 'Master Document Control Register',
    category: 'Governance',
    assignedRole: 'Documentation & Compliance Coordinator',
    assignedMember: 11,
    descriptionEn: 'Central institutional repository tracking every company policy, SOP, charter, and form—recording Document IDs, version numbers, approval status, owners, and review cycles.',
    descriptionUr: 'Ek central Excel sheet jisme tamam documents ke naam, IDs, versions, approval status aur review dates record hongi.',
    keyOutputs: [
      'Master metadata registry for all 15 deliverables',
      'Document revision history & change tracking log',
      'Approval authorization sign-offs',
      'Semi-annual audit review reminder calendar'
    ],
    docFormat: 'DOC-REG-001 (Excel Sheet / Live Interactive Database)'
  }
];
