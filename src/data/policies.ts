import { PolicyDocument } from '../types';

export const POLICIES: PolicyDocument[] = [
  {
    docId: 'IT-POL-001',
    title: 'IT Rules and Regulations Policy',
    version: '1.0',
    department: 'IT Department',
    preparedBy: 'IT Manager (Member 9)',
    reviewedBy: 'Chief Executive Officer (Member 2)',
    approvedBy: 'Founder & Owner (Member 1)',
    reviewCycle: 'Every 6 months',
    purpose: 'To define security requirements and acceptable usage parameters for all information technology systems, hardware devices, network resources, and sensitive digital assets owned or operated by RajSecure Technologies.',
    scope: 'This policy governs all full-time employees, contractors, consultants, and interns accessing company network infrastructure, workstations, virtual private networks (VPN), cloud repositories, and testing lab environments.',
    responsibilities: [
      'Owner & CEO: Provide strategic authorization and budget allocation for enterprise cybersecurity tooling.',
      'IT Manager: Enforce technical policy controls, workstation encryption, endpoint detection, and patch cycles.',
      'Employees & Contractors: Maintain password complexity, adhere to clean-desk rules, and immediately report anomalies.'
    ],
    procedures: [
      {
        heading: '1. Workstation & Device Security',
        rules: [
          'All laptops and desktop computers must enable AES-256 full disk encryption (BitLocker / FileVault).',
          'Automated screen lock must activate after 5 minutes of inactivity; bypassing screen savers is strictly forbidden.',
          'Employees must never leave unlocked workstations unattended in shared or public areas (Clean Screen Standard).',
          'Only company-approved anti-malware and Endpoint Detection and Response (EDR) software may be installed.'
        ]
      },
      {
        heading: '2. Access Control & Credential Hygiene',
        rules: [
          'Passwords must contain a minimum of 14 characters including uppercase, lowercase, numbers, and special symbols.',
          'Multi-Factor Authentication (MFA/2FA) via hardware security key or authenticator app is mandatory on all accounts.',
          'Password sharing, credential reuse across personal accounts, and writing passwords on sticky notes is strictly prohibited.',
          'Accounts will be temporarily locked after 5 consecutive failed login attempts until verified by IT.'
        ]
      },
      {
        heading: '3. Network, Internet & Email Usage',
        rules: [
          'Corporate internet bandwidth is designated for legitimate business activities and authorized cybersecurity research.',
          'Connecting unauthorized personal routers, hotspots, or rogue access points to corporate LAN ports is prohibited.',
          'Employees must never download pirated software, torrent files, or visit untrusted, unverified domains.',
          'All remote access must route through the corporate encrypted WireGuard/OpenVPN tunnel with split-tunneling disabled.'
        ]
      },
      {
        heading: '4. Data Protection & Removable Storage',
        rules: [
          'Connecting personal USB thumb drives or external storage drives without prior IT Manager authorization is blocked by group policy.',
          'Client vulnerability assessment reports and proprietary codebases must be stored solely on encrypted cloud drives.',
          'Confidential client documents must never be forwarded to personal email addresses or unapproved cloud storage.'
        ]
      }
    ],
    incidentReporting: 'Any suspected malware infection, phishing click, unauthorized system access, lost equipment, or credential compromise must be reported immediately (within 15 minutes) to the IT Helpdesk and Security Manager via ticket or emergency phone line.',
    reviewAndApproval: 'This policy is reviewed on a semi-annual basis (every 6 months) by the IT Manager and Chief Executive Officer, with final formal ratification by the Founder & Owner.'
  },
  {
    docId: 'SEC-SOP-001',
    title: 'Office Physical Security & Visitor Standard Operating Procedure',
    version: '1.0',
    department: 'Security & Facilities',
    preparedBy: 'Security Manager (Member 10)',
    reviewedBy: 'Chief Executive Officer (Member 2)',
    approvedBy: 'Founder & Owner (Member 1)',
    reviewCycle: 'Every 6 months',
    purpose: 'To ensure physical safety, safeguard hardware equipment and testing servers, and prevent unauthorized personnel from gaining entry into RajSecure Technologies facilities.',
    scope: 'Applies to all physical office premises, server rooms, executive suites, conference halls, and visitor waiting areas.',
    responsibilities: [
      'Security Manager: Oversee physical access control, CCTV monitoring, security guard briefs, and visitor logs.',
      'Operations Officer: Assist with visitor reception, badge issuance, and visitor log auditing.',
      'All Staff: Escort visitors at all times and challenge unbadged individuals within office zones.'
    ],
    procedures: [
      {
        heading: '1. Building Entry & Identification',
        rules: [
          'All employees must visibly display their RFID photo identity badges at all times within the premises.',
          'Tailgating (holding doors for unbadged or unrecognized individuals) is strictly prohibited at all access points.',
          'Lost or stolen access badges must be reported immediately to deactivate electronic credentials within 10 minutes.'
        ]
      },
      {
        heading: '2. Visitor Registration & Escort Protocol',
        rules: [
          'Every non-employee must register in the official Visitor Log (Form F-01) with national ID / CNIC and contact number.',
          'Visitors must be issued a numbered VISITOR badge and must be accompanied by an employee host at all times.',
          'Visitors are strictly prohibited from entering the Secure Server Room, Pentest Lab, and executive archives.',
          'Upon departure, the visitor badge must be returned, and departure time logged by the reception officer.'
        ]
      },
      {
        heading: '3. Surveillance & Closed-Circuit Television (CCTV)',
        rules: [
          'CCTV cameras operate 24/7/365 covering all exterior entry points, corridors, server rooms, and main work floors.',
          'CCTV footage is retained in an encrypted, tamper-proof repository for a minimum period of 90 calendar days.',
          'Access to live surveillance feeds and archived footage is restricted exclusively to the Security Manager and CEO.'
        ]
      }
    ],
    incidentReporting: 'Any physical perimeter breach, missing property, forced door entry, or suspicious individual must be reported to the Security Manager immediately and logged in the Physical Security Incident Register.',
    reviewAndApproval: 'Reviewed every 6 months by the Security Manager and CEO, with final sign-off by the Founder & Owner.'
  },
  {
    docId: 'SEC-SOP-002',
    title: 'Cyber Incident Response & Triage Procedure',
    version: '1.0',
    department: 'Security Operations (CSIRT)',
    preparedBy: 'Security Manager (Member 10)',
    reviewedBy: 'Chief Executive Officer (Member 2)',
    approvedBy: 'Founder & Owner (Member 1)',
    reviewCycle: 'Every 6 months',
    purpose: 'To establish a standardized, fast-action workflow for detecting, analyzing, containing, and recovering from cybersecurity incidents while preserving forensic integrity.',
    scope: 'All enterprise networks, internal servers, client project data, cloud instances, and employee workstations.',
    responsibilities: [
      'Computer Security Incident Response Team (CSIRT): Execute rapid containment, forensics, and remediation.',
      'IT Manager: Isolate infected network segments, revoke compromised credentials, and restore clean backups.',
      'CEO & Legal: Coordinate regulatory disclosures, client alerts, and public communications if required.'
    ],
    procedures: [
      {
        heading: '1. Incident Classification Matrix',
        rules: [
          'P1 (Critical): Active ransomware, client data breach, or unauthorized root access on production infrastructure.',
          'P2 (High): Compromised staff credential with elevated privileges or localized malware spreading across LAN.',
          'P3 (Medium): Isolated endpoint malware quarantined by EDR or suspicious brute-force attempts on perimeter.',
          'P4 (Low): Spam/phishing attempt successfully blocked by mail gateway with zero user interaction.'
        ]
      },
      {
        heading: '2. Containment & Evidence Preservation',
        rules: [
          'For compromised machines, immediately disconnect network cable and disable Wi-Fi; DO NOT power down the device.',
          'Capture volatile RAM memory dumps using authorized forensics tools before rebooting or altering state.',
          'Maintain a tamper-evident Chain-of-Custody log for all digital artifacts, disk images, and firewall logs.'
        ]
      },
      {
        heading: '3. Eradication, Recovery & Post-Mortem',
        rules: [
          'Rebuild affected systems from trusted, verified baseline images and reset all enterprise account credentials.',
          'Conduct a mandatory Root Cause Analysis (RCA) within 72 hours of incident resolution.',
          'Submit the final Incident Closure Report to the CEO and Founder for compliance sign-off.'
        ]
      }
    ],
    incidentReporting: 'All incidents must be logged via Form F-03 and escalated to csirt@rajsecure.internal within 15 minutes of discovery.',
    reviewAndApproval: 'Reviewed semi-annually by the Security Manager, IT Manager, and CEO.'
  },
  {
    docId: 'BCP-PLN-001',
    title: 'Business Continuity & Disaster Recovery Plan',
    version: '1.0',
    department: 'Operations & IT',
    preparedBy: 'IT Manager (Member 9)',
    reviewedBy: 'Chief Executive Officer (Member 2)',
    approvedBy: 'Founder & Owner (Member 1)',
    reviewCycle: 'Every 6 months',
    purpose: 'To guarantee operational continuity, protect essential client engagements, and ensure rapid recovery in the event of power grid failure, cyber disaster, or severe technical outage.',
    scope: 'All technological, human, and physical assets required for RajSecure Technologies to deliver cybersecurity services.',
    responsibilities: [
      'Operations Supervisor: Direct emergency task re-routing and staff communication during disruptions.',
      'IT Manager: Execute backup restoration, switch to secondary fiber ISP, and manage failover servers.',
      'Finance Director: Authorize emergency continuity expenditures and disburse disaster relief funds.'
    ],
    procedures: [
      {
        heading: '1. Recovery Metrics (RTO & RPO)',
        rules: [
          'Recovery Time Objective (RTO): Core communication and assessment tools must be restored within 4 hours.',
          'Recovery Point Objective (RPO): Maximum tolerable data loss window is established at 1 hour.',
          'Automated incremental backups run every 60 minutes; full encrypted backups run every 24 hours at 02:00 AM.'
        ]
      },
      {
        heading: '2. Redundancy & Infrastructure Failover',
        rules: [
          'Primary fiber connection (1 Gbps) backed up by secondary automated 4G/5G failover router.',
          'Critical server workloads are replicated across two geographically isolated cloud regions (Multi-Region Cloud).',
          '3-2-1 Backup Strategy: 3 copies of data, 2 different storage media types, 1 immutable offsite copy.'
        ]
      },
      {
        heading: '3. Emergency Personnel Succession',
        rules: [
          'If the IT Manager is unavailable, the Security Manager assumes technical emergency operational authority.',
          'If the CEO is unreachable during a crisis, the Founder/Owner assumes direct command of operational decisions.',
          'All staff are provisioned with secure remote-access laptops to continue consulting work during office closures.'
        ]
      }
    ],
    incidentReporting: 'Continuity events must be declared by the CEO or Owner via the Emergency Staff Broadcast System.',
    reviewAndApproval: 'Tested via semi-annual tabletop disaster simulations and approved by the Founder & Owner.'
  }
];
