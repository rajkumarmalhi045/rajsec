import { TimelinePhase } from '../types';

export const TIMELINE_PHASES: TimelinePhase[] = [
  {
    days: 'Days 1–2',
    titleEn: 'Foundation, Brand Identity & Business Model',
    titleUr: 'Company name, logo, services aur business model',
    descriptionEn: 'Establish corporate identity, verify company name availability, design visual brand kit, and define the core cybersecurity service offering.',
    tasks: [
      {
        id: 't-1',
        textEn: 'Perform company name availability check ("RajSecure Technologies") and reserve domain name',
        textUr: 'Company name availability check karo aur domain reserve karo',
        deliverables: [1, 10]
      },
      {
        id: 't-2',
        textEn: 'Design company logo, color palette (#0b0f19, #0284c7, #10b981), and corporate tagline ("Secure Your Digital World")',
        textUr: 'Logo, brand colors aur official tagline final karo',
        deliverables: [10]
      },
      {
        id: 't-3',
        textEn: 'Define target enterprise verticals: Banks, Hospitals, Universities, IT Companies, and SMEs',
        textUr: 'Target customers (Banks, hospitals, universities, IT companies aur small businesses) final karo',
        deliverables: [5, 10]
      },
      {
        id: 't-4',
        textEn: 'Draft core cybersecurity service catalog (Consulting, Assessment, Pentesting, Training, Policies)',
        textUr: 'Services ki list aur descriptions ready karo',
        deliverables: [1, 11]
      }
    ]
  },
  {
    days: 'Days 3–4',
    titleEn: 'Organizational Governance & Job Descriptions',
    titleUr: 'Organizational chart aur job descriptions',
    descriptionEn: 'Structure the 11-member company hierarchy, map departmental reporting lines, and draft formal Job Descriptions with KPIs.',
    tasks: [
      {
        id: 't-5',
        textEn: 'Construct visual Organizational Hierarchy Chart mapping all 11 positions',
        textUr: '11 members ka formal hierarchical org chart banao',
        deliverables: [12]
      },
      {
        id: 't-6',
        textEn: 'Author 11 individual Job Descriptions detailing key duties, qualifications, and KPIs',
        textUr: 'Har member ke liye detailed job description aur responsibilities likho',
        deliverables: [12]
      },
      {
        id: 't-7',
        textEn: 'Formulate Departmental RACI Matrix (Responsible, Accountable, Consulted, Informed)',
        textUr: 'Departments ke reporting channels aur decisions matrix tayyar karo',
        deliverables: [12]
      }
    ]
  },
  {
    days: 'Days 5–10',
    titleEn: 'Policies, SOPs, Operational Forms & Security Frameworks',
    titleUr: 'Policies, SOPs, forms aur security procedures',
    descriptionEn: 'Author institutional SOPs with standardized metadata control headers (IT-POL-001 format), design operational forms, and draft continuity plans.',
    tasks: [
      {
        id: 't-8',
        textEn: 'Draft Physical Security, CCTV & Visitor Escort SOP (SEC-SOP-001 / Deliverable 2)',
        textUr: 'Office physical security aur visitor rules ka document likho',
        deliverables: [2]
      },
      {
        id: 't-9',
        textEn: 'Draft IT Rules, Internet Usage & Device Security Policy (IT-POL-001 / Deliverable 3)',
        textUr: 'Computers aur internet security ka IT Rules document complete karo',
        deliverables: [3]
      },
      {
        id: 't-10',
        textEn: 'Draft Cyber Incident Triage & Threat Response SOP (SEC-SOP-002 / Deliverable 4)',
        textUr: 'Cyber attack incident response procedure tayyar karo',
        deliverables: [4]
      },
      {
        id: 't-11',
        textEn: 'Draft Communication Ethics SOPs for Internal Staff & External Clients (Deliverables 6 & 7)',
        textUr: 'Staff communication aur client confidentiality SOPs likho',
        deliverables: [6, 7]
      },
      {
        id: 't-12',
        textEn: 'Draft HR & Employee Management Framework with Attendance & Leave rules (Deliverable 8)',
        textUr: 'HR hiring, attendance aur leave policies finalize karo',
        deliverables: [8]
      },
      {
        id: 't-13',
        textEn: 'Draft Business Continuity & Disaster Recovery Plan (BCP-PLN-001 / Deliverable 13)',
        textUr: 'Data backup, outage recovery aur business continuity plan likho',
        deliverables: [13]
      },
      {
        id: 't-14',
        textEn: 'Create Form Suite: Visitor Log, Leave Form, Incident Form, Expense Voucher, Sales Tracker (Deliverable 14)',
        textUr: 'Tamam forms aur printable templates tayyar karo',
        deliverables: [14]
      }
    ]
  },
  {
    days: 'Days 8–12',
    titleEn: 'Digital Website, Sales Strategy, Marketing & Central Register',
    titleUr: 'Website, sales targets, marketing plan aur Excel register',
    descriptionEn: 'Build responsive single-page portfolio website, develop financial projections, establish marketing guidelines, and compile Master Document Control Register.',
    tasks: [
      {
        id: 't-15',
        textEn: 'Develop responsive single-page brand portfolio website showcasing services, team, and mission',
        textUr: 'Single-page portfolio website develop karo',
        deliverables: [1]
      },
      {
        id: 't-16',
        textEn: 'Formulate Sales Targets, Monthly Revenue Quotas, and Client Funnel Plan (Deliverable 5)',
        textUr: 'Sales targets aur monthly revenue forecast complete karo',
        deliverables: [5]
      },
      {
        id: 't-17',
        textEn: 'Finalize Marketing Guidelines & B2B Inbound Lead Generation Strategy (Deliverable 10)',
        textUr: 'Marketing plan aur social promotion strategy complete karo',
        deliverables: [10]
      },
      {
        id: 't-18',
        textEn: 'Construct Finance & Expense Management System with 2-tier approvals (Deliverable 9)',
        textUr: 'Budget, expense approvals aur financial control system complete karo',
        deliverables: [9]
      },
      {
        id: 't-19',
        textEn: 'Populate Master Document Control Register (Excel format) with all 15 document IDs and versions (Deliverable 15)',
        textUr: 'Master Excel register me tamam 15 documents ki details enter karo',
        deliverables: [15]
      }
    ]
  },
  {
    days: 'Days 13–14',
    titleEn: 'Quality Assurance, Cross-Document Consistency & Deployment',
    titleUr: 'Proofreading, testing, document consistency aur GitHub deployment',
    descriptionEn: 'Review all 15 deliverables for formatting consistency, verify approval signatures, test web responsiveness, and deploy to GitHub Pages.',
    tasks: [
      {
        id: 't-20',
        textEn: 'Conduct cross-document audit to verify consistent Document IDs, versioning, and terminology',
        textUr: 'Tamam documents ka consistency audit aur proofreading karo',
        deliverables: [11, 15]
      },
      {
        id: 't-21',
        textEn: 'Deploy corporate website to GitHub Pages / Cloud Run and test mobile responsiveness',
        textUr: 'Website ko GitHub Pages par publish karo aur responsive test karo',
        deliverables: [1]
      },
      {
        id: 't-22',
        textEn: 'Assemble Digital Documents Binder (Word/PDF policies, Excel trackers, and form templates)',
        textUr: 'Digital documents ka final folder pack arrange karo',
        deliverables: [14, 15]
      }
    ]
  },
  {
    days: 'Day 15',
    titleEn: 'Final Presentation & Live Demonstration Defense',
    titleUr: 'Final presentation aur live website ka demonstration',
    descriptionEn: 'Present the startup pitch deck to the instructor, showcase the live website, and defend organizational policies, security posture, and member contributions.',
    tasks: [
      {
        id: 't-23',
        textEn: 'Deliver executive presentation covering company vision, 11-member org chart, policies, and sales model',
        textUr: 'Final presentation deliver karo jisme sab members ka role ho',
        deliverables: [1, 5, 12, 13]
      },
      {
        id: 't-24',
        textEn: 'Conduct live demonstration of the published website, forms, and interactive document control register',
        textUr: 'Live website aur Excel register ka interactive demo do',
        deliverables: [1, 14, 15]
      },
      {
        id: 't-25',
        textEn: 'Submit complete 3-part deliverable package (Digital documents, Live URL, Presentation slides)',
        textUr: 'Teacher ko 3-part final submission pack submit karo',
        deliverables: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
      }
    ]
  }
];
