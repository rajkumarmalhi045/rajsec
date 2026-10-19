import React, { useState } from 'react';
import { Language } from '../types';
import { ClipboardList, Plus, Download, CheckCircle, AlertTriangle, UserCheck, DollarSign, TrendingUp } from 'lucide-react';

interface InteractiveFormsProps {
  language: Language;
}

interface VisitorRecord {
  id: string;
  name: string;
  idNumber: string;
  company: string;
  host: string;
  purpose: string;
  badgeNo: string;
  timeIn: string;
  status: 'In Building' | 'Checked Out';
}

interface LeaveRecord {
  empId: string;
  empName: string;
  leaveType: string;
  days: number;
  reason: string;
  status: 'Approved' | 'Pending CEO Sign-off';
}

interface IncidentRecord {
  ticketId: string;
  severity: 'P1 (Critical)' | 'P2 (High)' | 'P3 (Medium)' | 'P4 (Low)';
  asset: string;
  reportedBy: string;
  description: string;
  status: 'Active CSIRT Triage' | 'Contained';
}

export const InteractiveForms: React.FC<InteractiveFormsProps> = ({ language }) => {
  const [activeTab, setActiveTab] = useState<'visitor' | 'leave' | 'incident' | 'expense' | 'sales'>('visitor');

  // Visitor Register State
  const [visitors, setVisitors] = useState<VisitorRecord[]>([
    {
      id: 'V-101',
      name: 'Ahmed Tariq',
      idNumber: '42201-1829471-3',
      company: 'Habib Allied Bank Ltd',
      host: 'CEO (Member 2)',
      purpose: 'Core Banking Pentest Audit Scope Briefing',
      badgeNo: 'VIS-08',
      timeIn: '10:15 AM',
      status: 'In Building'
    },
    {
      id: 'V-102',
      name: 'Dr. Sarah Farooq',
      idNumber: '35202-9182746-1',
      company: 'Indus Medicare Trust',
      host: 'IT Manager (Member 9)',
      purpose: 'Hospital Patient Data Security Assessment',
      badgeNo: 'VIS-12',
      timeIn: '09:30 AM',
      status: 'Checked Out'
    }
  ]);

  const [newVisitorName, setNewVisitorName] = useState('');
  const [newVisitorOrg, setNewVisitorOrg] = useState('');
  const [newVisitorHost, setNewVisitorHost] = useState('IT Manager (Member 9)');
  const [newVisitorPurpose, setNewVisitorPurpose] = useState('');

  const handleAddVisitor = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newVisitorName.trim()) return;

    const newRecord: VisitorRecord = {
      id: `V-${100 + visitors.length + 1}`,
      name: newVisitorName,
      idNumber: `42101-${Math.floor(1000000 + Math.random() * 9000000)}-1`,
      company: newVisitorOrg || 'Independent Consultant',
      host: newVisitorHost,
      purpose: newVisitorPurpose || 'Security Consultation Meeting',
      badgeNo: `VIS-0${visitors.length + 3}`,
      timeIn: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      status: 'In Building'
    };

    setVisitors([newRecord, ...visitors]);
    setNewVisitorName('');
    setNewVisitorOrg('');
    setNewVisitorPurpose('');
  };

  const handleExportVisitorCSV = () => {
    const headers = ['Record ID', 'Visitor Name', 'National ID / CNIC', 'Organization', 'Host', 'Purpose', 'Badge #', 'Time In', 'Status'];
    const rows = visitors.map(v => [
      v.id,
      `"${v.name}"`,
      v.idNumber,
      `"${v.company}"`,
      `"${v.host}"`,
      `"${v.purpose}"`,
      v.badgeNo,
      v.timeIn,
      v.status
    ]);
    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', 'RajSecure_Visitor_Register_F01.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Leave Form State
  const [leaveSubmitted, setLeaveSubmitted] = useState(false);
  const [leaveDays, setLeaveDays] = useState(2);
  const [leaveType, setLeaveType] = useState('Casual Leave');

  // Incident Form State
  const [incidentSubmitted, setIncidentSubmitted] = useState(false);
  const [incidentSeverity, setIncidentSeverity] = useState('P2 (High)');

  return (
    <section id="forms" className="py-20 bg-[#0b0f19] border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="flex items-center gap-2 text-xs font-semibold text-sky-400 uppercase tracking-wider mb-2">
            <span>{language === 'en' ? 'Deliverable 14' : 'Deliverable 14'}</span>
            <span aria-hidden="true">·</span>
            <span>Operational Templates Suite (FRM-SET-001)</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {language === 'en'
              ? 'Operational Forms & Working Registers'
              : 'Rozana Ke Forms Aur Working Registers (Live Demo)'}
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            {language === 'en'
              ? 'Standard operational templates required by the university curriculum: Visitor Security Register, Employee Leave Application, Security Incident Ticket, Expense Voucher, and Sales Tracker.'
              : 'Attendance register, leave form, visitor register, expense form, complaint form aur sales tracker jo assignment deliverable 14 ka hissa hain.'}
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6">
          {[
            { id: 'visitor', label: 'Form F-01: Visitor Security Log' },
            { id: 'leave', label: 'Form F-02: Employee Leave Request' },
            { id: 'incident', label: 'Form F-03: Cyber Incident Ticket' },
            { id: 'expense', label: 'Form F-04: Expense Voucher' },
            { id: 'sales', label: 'Form F-05: Sales Lead Pipeline' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 py-2 text-xs font-medium rounded-lg whitespace-nowrap transition-colors ${
                activeTab === tab.id
                  ? 'bg-sky-600 text-white shadow-sm'
                  : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* TAB 1: VISITOR REGISTER (FORM F-01) */}
        {activeTab === 'visitor' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Add Visitor Form */}
              <div className="lg:col-span-4 p-5 rounded-2xl bg-slate-900 border border-slate-800">
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-800">
                  <UserCheck className="w-4 h-4 text-sky-400" />
                  <h4 className="text-sm font-bold text-white">Log Physical Office Visitor</h4>
                </div>
                <form onSubmit={handleAddVisitor} className="space-y-3 text-xs">
                  <div>
                    <label className="block text-slate-400 mb-1">Visitor Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Tariq Mehmood"
                      value={newVisitorName}
                      onChange={(e) => setNewVisitorName(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-white focus:outline-none focus:border-sky-500"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-400 mb-1">Organization / Client</label>
                    <input
                      type="text"
                      placeholder="e.g. National Health Hospital"
                      value={newVisitorOrg}
                      onChange={(e) => setNewVisitorOrg(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-white focus:outline-none focus:border-sky-500"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-400 mb-1">Host Staff Member</label>
                    <select
                      value={newVisitorHost}
                      onChange={(e) => setNewVisitorHost(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-white focus:outline-none focus:border-sky-500"
                    >
                      <option>CEO (Member 2)</option>
                      <option>IT Manager (Member 9)</option>
                      <option>Security Manager (Member 10)</option>
                      <option>Operations Supervisor (Member 7)</option>
                      <option>Sales Executive (Member 5)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-slate-400 mb-1">Visit Purpose</label>
                    <input
                      type="text"
                      placeholder="e.g. Pentest Kickoff Meeting"
                      value={newVisitorPurpose}
                      onChange={(e) => setNewVisitorPurpose(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-white focus:outline-none focus:border-sky-500"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full mt-2 py-2 px-3 bg-sky-600 hover:bg-sky-500 text-white font-medium rounded-lg transition-colors flex items-center justify-center gap-1.5"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Issue Badge & Log Entry</span>
                  </button>
                </form>
              </div>

              {/* Visitor Table */}
              <div className="lg:col-span-8 p-5 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800">
                    <div className="text-xs font-mono text-slate-400">
                      <span>FORM F-01 REGISTER</span>
                      <span className="mx-2">·</span>
                      <span className="text-emerald-400">{visitors.length} Logged Entries</span>
                    </div>
                    <button
                      onClick={handleExportVisitorCSV}
                      className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 rounded-lg transition-colors"
                    >
                      <Download className="w-3 h-3 text-sky-400" />
                      <span>Export CSV</span>
                    </button>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs">
                      <thead>
                        <tr className="text-slate-400 border-b border-slate-800 font-mono">
                          <th className="pb-2">Badge #</th>
                          <th className="pb-2">Visitor</th>
                          <th className="pb-2">Organization</th>
                          <th className="pb-2">Host</th>
                          <th className="pb-2">Time</th>
                          <th className="pb-2 text-right">Status</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-800/60">
                        {visitors.map((v) => (
                          <tr key={v.id} className="hover:bg-slate-800/40">
                            <td className="py-2.5 font-mono text-sky-400">{v.badgeNo}</td>
                            <td className="py-2.5 font-semibold text-white">{v.name}</td>
                            <td className="py-2.5 text-slate-300">{v.company}</td>
                            <td className="py-2.5 text-slate-400">{v.host}</td>
                            <td className="py-2.5 font-mono text-slate-400">{v.timeIn}</td>
                            <td className="py-2.5 text-right">
                              <span
                                className={`text-[11px] font-mono ${
                                  v.status === 'In Building' ? 'text-emerald-400' : 'text-slate-500'
                                }`}
                              >
                                {v.status}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-slate-500 flex items-center justify-between">
                  <span>Enforced under SOP SEC-SOP-001 Physical Security</span>
                  <span>Tamper-evident daily audit log</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: LEAVE FORM (FORM F-02) */}
        {activeTab === 'leave' && (
          <div className="max-w-2xl mx-auto p-6 rounded-2xl bg-slate-900 border border-slate-800">
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
              <div>
                <span className="text-xs font-mono text-sky-400">RAJSECURE TECHNOLOGIES / HR-POL-001</span>
                <h4 className="text-lg font-bold text-white">Form F-02: Employee Leave Request</h4>
              </div>
              <span className="text-xs font-mono text-slate-400">HR Portal</span>
            </div>

            {leaveSubmitted ? (
              <div className="p-6 text-center space-y-3 bg-emerald-950/20 border border-emerald-800/40 rounded-xl">
                <CheckCircle className="w-10 h-10 text-emerald-400 mx-auto" />
                <h5 className="text-base font-bold text-white">Leave Application Submitted</h5>
                <p className="text-xs text-slate-300">
                  Application ID <span className="font-mono text-emerald-300">#LV-2026-089</span> routed to HR/Sales Manager (Member 3) for primary review and CEO (Member 2) for sign-off.
                </p>
                <button
                  onClick={() => setLeaveSubmitted(false)}
                  className="px-4 py-1.5 text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setLeaveSubmitted(true);
                }}
                className="space-y-4 text-xs"
              >
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-slate-400 mb-1">Employee Name & Position</label>
                    <select className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-white focus:outline-none">
                      <option>Member 5 - Sales Executive</option>
                      <option>Member 6 - Marketing Executive</option>
                      <option>Member 7 - Operations Supervisor</option>
                      <option>Member 8 - Operations Officer</option>
                      <option>Member 9 - IT Manager</option>
                      <option>Member 10 - Security Manager</option>
                      <option>Member 11 - Compliance Coordinator</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-slate-400 mb-1">Leave Category</label>
                    <select
                      value={leaveType}
                      onChange={(e) => setLeaveType(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-white focus:outline-none"
                    >
                      <option>Casual Leave (Paid)</option>
                      <option>Annual Vacation (Paid)</option>
                      <option>Medical Emergency Leave</option>
                      <option>Official Duty / Examination</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-slate-400 mb-1">Requested Days</label>
                    <input
                      type="number"
                      min={1}
                      max={15}
                      value={leaveDays}
                      onChange={(e) => setLeaveDays(Number(e.target.value))}
                      className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-white focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-400 mb-1">Delegated Relief Officer</label>
                    <input
                      type="text"
                      defaultValue="Member 8 (Operations Officer)"
                      className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-white focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-400 mb-1">Reason for Leave & Continuity Notes</label>
                  <textarea
                    rows={2}
                    required
                    placeholder="Brief description of emergency or reason and handover tasks..."
                    className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-white focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 bg-sky-600 hover:bg-sky-500 text-white font-semibold rounded-lg transition-colors"
                >
                  Submit Leave Request For Approval
                </button>
              </form>
            )}
          </div>
        )}

        {/* TAB 3: CYBER INCIDENT TICKET (FORM F-03) */}
        {activeTab === 'incident' && (
          <div className="max-w-2xl mx-auto p-6 rounded-2xl bg-slate-900 border border-slate-800">
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
              <div>
                <span className="text-xs font-mono text-rose-400">CSIRT EMERGENCY / SEC-SOP-002</span>
                <h4 className="text-lg font-bold text-white">Form F-03: Security Incident Escalation</h4>
              </div>
              <span className="text-xs font-mono text-slate-400">SOC Dispatch</span>
            </div>

            {incidentSubmitted ? (
              <div className="p-6 text-center space-y-3 bg-rose-950/20 border border-rose-800/40 rounded-xl">
                <AlertTriangle className="w-10 h-10 text-rose-400 mx-auto" />
                <h5 className="text-base font-bold text-white">Incident Ticket Dispatched</h5>
                <p className="text-xs text-slate-300">
                  Priority alert <span className="font-mono text-rose-300">#INC-2026-014</span> dispatched to Security Manager (Member 10) and IT Manager (Member 9). Network containment protocol initialized.
                </p>
                <button
                  onClick={() => setIncidentSubmitted(false)}
                  className="px-4 py-1.5 text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
                >
                  Log New Incident
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setIncidentSubmitted(true);
                }}
                className="space-y-4 text-xs"
              >
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-slate-400 mb-1">Severity Classification</label>
                    <select
                      value={incidentSeverity}
                      onChange={(e) => setIncidentSeverity(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-white focus:outline-none"
                    >
                      <option>P1 (Critical) - Breach / Ransomware</option>
                      <option>P2 (High) - Credential Leak / Malware</option>
                      <option>P3 (Medium) - Port Scan / Brute Force</option>
                      <option>P4 (Low) - Phishing Email Blocked</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-slate-400 mb-1">Target Host / Asset</label>
                    <input
                      type="text"
                      defaultValue="SRV-CORE-02 (Web Pentest Lab)"
                      className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-white focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-400 mb-1">Incident Symptom & Indicators of Compromise (IoC)</label>
                  <textarea
                    rows={2}
                    required
                    placeholder="Describe abnormal network spikes, suspicious file hash, or blocked intrusion alerts..."
                    className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-white focus:outline-none"
                  />
                </div>

                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 text-[11px] text-slate-400">
                  <span className="font-semibold text-amber-300">Immediate Mandatory Action:</span> Disconnect ethernet cable from affected machine. Do not power off device to preserve volatile RAM memory forensics.
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 bg-rose-600 hover:bg-rose-500 text-white font-semibold rounded-lg transition-colors"
                >
                  Dispatch CSIRT Triage Alert
                </button>
              </form>
            )}
          </div>
        )}

        {/* TAB 4: EXPENSE VOUCHER (FORM F-04) */}
        {activeTab === 'expense' && (
          <div className="max-w-2xl mx-auto p-6 rounded-2xl bg-slate-900 border border-slate-800">
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
              <div>
                <span className="text-xs font-mono text-emerald-400">FIN-POL-001 / CONTROLS</span>
                <h4 className="text-lg font-bold text-white">Form F-04: Petty Cash & Expense Voucher</h4>
              </div>
              <span className="text-xs font-mono text-slate-400">Finance Dept</span>
            </div>

            <div className="space-y-4 text-xs">
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
                  <span className="text-slate-400 block mb-1">Petty Cash Ceiling</span>
                  <span className="text-base font-mono font-bold text-white">$500.00 / PKR 140,000</span>
                  <span className="text-[11px] text-slate-400 block mt-0.5">Dual signature required above limit</span>
                </div>
                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
                  <span className="text-slate-400 block mb-1">Authorizing Officers</span>
                  <span className="text-xs font-semibold text-sky-400">Finance Director & CEO</span>
                  <span className="text-[11px] text-slate-400 block mt-0.5">Audit-logged in general ledger</span>
                </div>
              </div>

              <div className="border border-slate-800 rounded-xl overflow-hidden">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-950 text-slate-400 font-mono">
                    <tr>
                      <th className="p-2.5">Voucher #</th>
                      <th className="p-2.5">Category</th>
                      <th className="p-2.5">Item</th>
                      <th className="p-2.5">Amount</th>
                      <th className="p-2.5 text-right">Approval</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60">
                    <tr>
                      <td className="p-2.5 font-mono text-sky-400">EXP-001</td>
                      <td className="p-2.5">Infrastructure</td>
                      <td className="p-2.5 text-white">Cloud Lab Virtual Machines</td>
                      <td className="p-2.5 font-mono text-emerald-400">$240.00</td>
                      <td className="p-2.5 text-right text-emerald-400 font-mono">Approved (M4)</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-mono text-sky-400">EXP-002</td>
                      <td className="p-2.5">Hardware</td>
                      <td className="p-2.5 text-white">RFID Smart Badges (Pack of 50)</td>
                      <td className="p-2.5 font-mono text-emerald-400">$85.00</td>
                      <td className="p-2.5 text-right text-emerald-400 font-mono">Approved (M4)</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-mono text-sky-400">EXP-003</td>
                      <td className="p-2.5">Branding</td>
                      <td className="p-2.5 text-white">Domain & SSL Certificate (1 Yr)</td>
                      <td className="p-2.5 font-mono text-emerald-400">$60.00</td>
                      <td className="p-2.5 text-right text-emerald-400 font-mono">Approved (M4)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* TAB 5: SALES TRACKER (FORM F-05) */}
        {activeTab === 'sales' && (
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
            <div className="flex flex-wrap items-center justify-between pb-4 mb-4 border-b border-slate-800 gap-2">
              <div>
                <span className="text-xs font-mono text-sky-400">SAL-PLN-001 / PIPELINE</span>
                <h4 className="text-lg font-bold text-white">Form F-05: Client Lead & Sales Pipeline Tracker</h4>
              </div>
              <div className="text-xs font-mono text-emerald-400">
                Monthly Target: $15,000 MRR
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="text-slate-400 border-b border-slate-800 font-mono">
                    <th className="pb-2">Client Account</th>
                    <th className="pb-2">Sector Vertical</th>
                    <th className="pb-2">Service Package</th>
                    <th className="pb-2">Est. Value</th>
                    <th className="pb-2">Lead Rep</th>
                    <th className="pb-2 text-right">Stage</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  <tr className="hover:bg-slate-800/40">
                    <td className="py-2.5 font-bold text-white">Habib Allied Commercial Bank</td>
                    <td className="py-2.5 text-slate-300">Banking & Finance</td>
                    <td className="py-2.5 text-slate-300">Comprehensive Core Banking Pentest</td>
                    <td className="py-2.5 font-mono text-emerald-400 font-bold">$7,500</td>
                    <td className="py-2.5 text-slate-400">Sales Exec (M5)</td>
                    <td className="py-2.5 text-right text-amber-300 font-mono">Contract Review</td>
                  </tr>
                  <tr className="hover:bg-slate-800/40">
                    <td className="py-2.5 font-bold text-white">Indus Medicare Hospital Trust</td>
                    <td className="py-2.5 text-slate-300">Healthcare</td>
                    <td className="py-2.5 text-slate-300">HIPAA & EHR Vulnerability Assessment</td>
                    <td className="py-2.5 font-mono text-emerald-400 font-bold">$4,200</td>
                    <td className="py-2.5 text-slate-400">Sales Exec (M5)</td>
                    <td className="py-2.5 text-right text-sky-400 font-mono">Proposal Sent</td>
                  </tr>
                  <tr className="hover:bg-slate-800/40">
                    <td className="py-2.5 font-bold text-white">Apex Institute of Technology</td>
                    <td className="py-2.5 text-slate-300">University</td>
                    <td className="py-2.5 text-slate-300">Campus WiFi & Portal Security Audit</td>
                    <td className="py-2.5 font-mono text-emerald-400 font-bold">$2,800</td>
                    <td className="py-2.5 text-slate-400">Sales Exec (M5)</td>
                    <td className="py-2.5 text-right text-emerald-400 font-mono">Won / Active</td>
                  </tr>
                  <tr className="hover:bg-slate-800/40">
                    <td className="py-2.5 font-bold text-white">FinCloud Software Solutions</td>
                    <td className="py-2.5 text-slate-300">IT & SaaS</td>
                    <td className="py-2.5 text-slate-300">API Security & Employee Training</td>
                    <td className="py-2.5 font-mono text-emerald-400 font-bold">$3,100</td>
                    <td className="py-2.5 text-slate-400">Sales Exec (M5)</td>
                    <td className="py-2.5 text-right text-emerald-400 font-mono">Won / Active</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
