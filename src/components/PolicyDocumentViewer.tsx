import React, { useState } from 'react';
import { POLICIES } from '../data/policies';
import { Language, PolicyDocument } from '../types';
import { FileText, Copy, Check, Printer, Shield, Calendar, UserCheck } from 'lucide-react';

interface PolicyDocumentViewerProps {
  language: Language;
}

export const PolicyDocumentViewer: React.FC<PolicyDocumentViewerProps> = ({ language }) => {
  const [selectedDocId, setSelectedDocId] = useState<string>('IT-POL-001');
  const [copied, setCopied] = useState<boolean>(false);

  const currentPolicy = POLICIES.find(p => p.docId === selectedDocId) || POLICIES[0];

  const handleCopy = () => {
    const text = `
================================================================================
RAJSECURE TECHNOLOGIES
${currentPolicy.title}
================================================================================
Document ID:    ${currentPolicy.docId}
Version:        ${currentPolicy.version}
Department:     ${currentPolicy.department}
Prepared by:    ${currentPolicy.preparedBy}
Reviewed by:    ${currentPolicy.reviewedBy}
Approved by:    ${currentPolicy.approvedBy}
Review cycle:   ${currentPolicy.reviewCycle}
--------------------------------------------------------------------------------

1. PURPOSE
${currentPolicy.purpose}

2. SCOPE
${currentPolicy.scope}

3. RESPONSIBILITIES
${currentPolicy.responsibilities.map(r => `• ${r}`).join('\n')}

4. RULES & OPERATING PROCEDURES
${currentPolicy.procedures.map(p => `\n${p.heading}\n${p.rules.map(r => `  - ${r}`).join('\n')}`).join('\n')}

5. INCIDENT REPORTING
${currentPolicy.incidentReporting}

6. REVIEW & APPROVAL
${currentPolicy.reviewAndApproval}
================================================================================
    `.trim();

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="sop-framework" className="py-20 bg-[#0e1424] border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="flex items-center gap-2 text-xs font-semibold text-sky-400 uppercase tracking-wider mb-2">
            <span>{language === 'en' ? 'Standard Operating Procedures' : 'SOP Format & Policy Standards'}</span>
            <span aria-hidden="true">·</span>
            <span>Document Control Specification</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {language === 'en'
              ? 'Institutional Policy Template Engine'
              : 'Har Policy Document Ka Format (IT-POL-001 Example)'}
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            {language === 'en'
              ? 'Every standard operating procedure at RajSecure Technologies adheres to the strict 6-point governance header and includes Purpose, Scope, Responsibilities, Procedures, Incident Reporting, and Sign-offs.'
              : 'Misal ke taur par, IT Policy ka first page is format par hoga: Document ID, Version, Department, Prepared/Reviewed/Approved by, aur Purpose, Scope, Procedures ke sections.'}
          </p>
        </div>

        {/* Policy Tab Selector */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-2 overflow-x-auto pb-2">
            {POLICIES.map((policy) => (
              <button
                key={policy.docId}
                onClick={() => setSelectedDocId(policy.docId)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-colors ${
                  selectedDocId === policy.docId
                    ? 'bg-sky-600 text-white shadow-sm'
                    : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
                }`}
              >
                <span className="font-mono">{policy.docId}</span>: {policy.title.split(' ')[0]} Policy
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-slate-900 border border-slate-700 hover:border-slate-500 text-slate-200 transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy Text'}</span>
            </button>
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-slate-900 border border-slate-700 hover:border-slate-500 text-slate-200 transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>
          </div>
        </div>

        {/* Document Container: White/Ivory Corporate Paper look on dark background */}
        <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 sm:p-10 shadow-2xl space-y-8 font-sans">
          {/* Header Block matching Section 4 of prompt exactly */}
          <div className="border-b-2 border-slate-700 pb-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
              <div>
                <span className="text-xs font-mono font-bold tracking-widest text-sky-400 uppercase">
                  RAJSECURE TECHNOLOGIES
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                  {currentPolicy.title}
                </h3>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-slate-400 px-3 py-1.5 rounded bg-slate-900 border border-slate-800">
                <Shield className="w-4 h-4 text-emerald-400" />
                <span>OFFICIAL GOVERNANCE DOCUMENT</span>
              </div>
            </div>

            {/* Document Control Header Table */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 text-xs pt-4 border-t border-slate-800/80">
              <div className="p-2.5 rounded bg-slate-900/80 border border-slate-800">
                <span className="text-slate-400 block text-[11px]">Document ID</span>
                <span className="font-mono font-bold text-sky-400">{currentPolicy.docId}</span>
              </div>
              <div className="p-2.5 rounded bg-slate-900/80 border border-slate-800">
                <span className="text-slate-400 block text-[11px]">Version</span>
                <span className="font-mono font-bold text-white">{currentPolicy.version}</span>
              </div>
              <div className="p-2.5 rounded bg-slate-900/80 border border-slate-800">
                <span className="text-slate-400 block text-[11px]">Department</span>
                <span className="font-medium text-slate-200 truncate block">{currentPolicy.department}</span>
              </div>
              <div className="p-2.5 rounded bg-slate-900/80 border border-slate-800">
                <span className="text-slate-400 block text-[11px]">Prepared by</span>
                <span className="font-medium text-slate-200 truncate block">{currentPolicy.preparedBy}</span>
              </div>
              <div className="p-2.5 rounded bg-slate-900/80 border border-slate-800">
                <span className="text-slate-400 block text-[11px]">Reviewed by</span>
                <span className="font-medium text-slate-200 truncate block">{currentPolicy.reviewedBy}</span>
              </div>
              <div className="p-2.5 rounded bg-slate-900/80 border border-slate-800">
                <span className="text-slate-400 block text-[11px]">Approved by</span>
                <span className="font-medium text-emerald-400 truncate block">{currentPolicy.approvedBy}</span>
              </div>
              <div className="p-2.5 rounded bg-slate-900/80 border border-slate-800 col-span-2 sm:col-span-1">
                <span className="text-slate-400 block text-[11px]">Review cycle</span>
                <span className="font-medium text-amber-300 truncate block">{currentPolicy.reviewCycle}</span>
              </div>
            </div>
          </div>

          {/* Section 1: Purpose */}
          <div className="space-y-2">
            <h4 className="text-sm font-bold uppercase tracking-wider text-sky-400">
              1. Purpose
            </h4>
            <p className="text-sm text-slate-300 leading-relaxed">
              {currentPolicy.purpose}
            </p>
          </div>

          {/* Section 2: Scope */}
          <div className="space-y-2">
            <h4 className="text-sm font-bold uppercase tracking-wider text-sky-400">
              2. Scope
            </h4>
            <p className="text-sm text-slate-300 leading-relaxed">
              {currentPolicy.scope}
            </p>
          </div>

          {/* Section 3: Responsibilities */}
          <div className="space-y-2">
            <h4 className="text-sm font-bold uppercase tracking-wider text-sky-400">
              3. Responsibilities
            </h4>
            <ul className="space-y-1.5 text-sm text-slate-300">
              {currentPolicy.responsibilities.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-sky-400 font-bold">·</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 4: Rules / Operating Procedures */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-sky-400">
              4. Rules & Operating Procedures
            </h4>
            <div className="space-y-4">
              {currentPolicy.procedures.map((proc, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
                  <h5 className="text-xs font-semibold uppercase tracking-wider text-slate-200">
                    {proc.heading}
                  </h5>
                  <ul className="space-y-1 text-xs text-slate-300">
                    {proc.rules.map((rule, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-2 leading-relaxed">
                        <span className="text-emerald-400 font-mono mt-0.5">•</span>
                        <span>{rule}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Section 5: Incident Reporting */}
          <div className="space-y-2">
            <h4 className="text-sm font-bold uppercase tracking-wider text-sky-400">
              5. Incident Reporting Protocol
            </h4>
            <p className="text-sm text-slate-300 leading-relaxed bg-rose-950/20 border border-rose-900/30 p-3.5 rounded-xl">
              {currentPolicy.incidentReporting}
            </p>
          </div>

          {/* Section 6: Review & Approval */}
          <div className="space-y-2 pt-4 border-t border-slate-800">
            <h4 className="text-sm font-bold uppercase tracking-wider text-sky-400">
              6. Review & Approval Sign-off
            </h4>
            <p className="text-sm text-slate-300 leading-relaxed">
              {currentPolicy.reviewAndApproval}
            </p>
            <div className="flex flex-wrap items-center gap-6 pt-3 text-xs text-slate-400">
              <div>
                <span className="block text-[11px]">Document Status:</span>
                <span className="text-emerald-400 font-semibold">Active & Enforced</span>
              </div>
              <div>
                <span className="block text-[11px]">Audit Classification:</span>
                <span className="text-slate-200 font-semibold">Internal Restricted</span>
              </div>
              <div>
                <span className="block text-[11px]">Master Register Index:</span>
                <span className="font-mono text-sky-400">DOC-REG-001 (Row #{POLICIES.findIndex(p => p.docId === currentPolicy.docId) + 2})</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
