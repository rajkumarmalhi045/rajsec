export type Language = 'en' | 'ur';

export interface Deliverable {
  id: number;
  code: string;
  titleEn: string;
  titleUr: string;
  category: 'Branding' | 'Governance' | 'Strategy' | 'Human Resources' | 'Finance' | 'Operations' | 'Security';
  assignedRole: string;
  assignedMember: number;
  descriptionEn: string;
  descriptionUr: string;
  keyOutputs: string[];
  docFormat: string;
}

export interface TeamMember {
  memberNumber: number;
  positionEn: string;
  positionUr: string;
  department: 'Executive' | 'Management' | 'Sales & Marketing' | 'Operations' | 'IT & Security' | 'Compliance';
  mainDutyEn: string;
  mainDutyUr: string;
  responsibilities: string[];
  assignedDeliverables: number[];
  raciStatus: 'Accountable' | 'Responsible' | 'Consulted' | 'Informed';
}

export interface PolicyDocument {
  docId: string;
  title: string;
  version: string;
  department: string;
  preparedBy: string;
  reviewedBy: string;
  approvedBy: string;
  reviewCycle: string;
  purpose: string;
  scope: string;
  responsibilities: string[];
  procedures: {
    heading: string;
    rules: string[];
  }[];
  incidentReporting: string;
  reviewAndApproval: string;
}

export interface RegisterItem {
  docId: string;
  title: string;
  department: string;
  version: string;
  preparedBy: string;
  reviewedBy: string;
  approvedBy: string;
  status: 'Draft' | 'Under Review' | 'Approved' | 'Active';
  reviewCycle: string;
  effectiveDate: string;
  nextReviewDate: string;
}

export interface TimelinePhase {
  days: string;
  titleEn: string;
  titleUr: string;
  descriptionEn: string;
  tasks: {
    id: string;
    textEn: string;
    textUr: string;
    deliverables: number[];
    isCompleted?: boolean;
  }[];
}
