import React, { useState } from 'react';
import { Language } from '../types';
import { Presentation, Globe, FolderArchive, CheckCircle2, ChevronRight, X, ExternalLink, Download } from 'lucide-react';

interface FinalSubmissionChecklistProps {
  language: Language;
}

export const FinalSubmissionChecklist: React.FC<FinalSubmissionChecklistProps> = ({ language }) => {
  const [showDeckModal, setShowDeckModal] = useState<boolean>(false);

  const presentationSlides = [
    { slide: 1, title: 'Title Slide', content: 'RajSecure Technologies — "Secure Your Digital World". Team introduction & student names.' },
    { slide: 2, title: 'Executive Summary', content: 'Cybersecurity problem statement, target sectors (Banks, Hospitals, Universities, SMEs), and mission.' },
    { slide: 3, title: 'Service Portfolio', content: '5 core services: Consulting, Assessment, Pentesting, Training, Policy Documentation.' },
    { slide: 4, title: '11-Member Org Hierarchy', content: 'Visual organizational structure, CEO, IT Manager, Security Manager, and RACI matrix.' },
    { slide: 5, title: 'IT Security Policy (IT-POL-001)', content: 'Standard SOP structure, acceptable use, workstation BitLocker encryption, clean screen standard.' },
    { slide: 6, title: 'Physical Security & Incident Triage', content: 'SEC-SOP-001/002: CCTV retention, visitor logging, CSIRT triage protocol.' },
    { slide: 7, title: 'Business Continuity & Disaster Recovery', content: 'BCP-PLN-001: RTO < 4 hrs, RPO < 1 hr, 3-2-1 backup strategy and redundant failover.' },
    { slide: 8, title: 'Sales & Revenue Model', content: 'SAL-PLN-001: $15,000 monthly MRR quota, client acquisition funnels, and enterprise rate cards.' },
    { slide: 9, title: 'Marketing & Brand Strategy', content: 'MKT-GDL-001: B2B LinkedIn whitepaper marketing, brand identity guidelines, and customer acquisition.' },
    { slide: 10, title: 'Forms & Templates (Deliverable 14)', content: 'Visitor log, leave form, incident escalation ticket, expense claim voucher, and sales tracker.' },
    { slide: 11, title: 'Master Document Control Register', content: 'DOC-REG-001: Central Excel tracking of all 15 deliverables, approval matrix, and review dates.' },
    { slide: 12, title: 'Member Contribution & Q&A', content: 'Summary of each student member’s individual document contribution and concluding remarks.' }
  ];

  return (
    <section id="submission" className="py-20 bg-[#0e1424] border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="flex items-center gap-2 text-xs font-semibold text-sky-400 uppercase tracking-wider mb-2">
            <span>{language === 'en' ? 'Submission Evaluation' : 'Final Submission'}</span>
            <span aria-hidden="true">·</span>
            <span>3 Mandatory Evaluation Deliverables</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {language === 'en'
              ? 'Final Submission Package & Defense Requirements'
              : 'Final Submission Mein Kya Dena Hai?'}
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            {language === 'en'
              ? 'Your instructor evaluates more than a written assignment. The final grade depends on the trinity of Digital Documents, the Live Published Website, and the In-Person Slide Defense.'
              : 'Tumhare teacher ko sirf written assignment nahi chahiye. Tumhein 3 cheezen submit karni hain: Digital Documents, Live Website, aur Presentation.'}
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {/* Pillar 1: Digital Documents */}
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400 mb-4">
                <FolderArchive className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono text-slate-400">PART 1 OF 3</span>
              <h3 className="text-lg font-bold text-white mt-1">
                {language === 'en' ? '1. Digital Documents Pack' : '1. Digital Documents'}
              </h3>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                {language === 'en'
                  ? 'All 15 deliverables compiled into standardized Word/PDF files with official header controls, plus the Master Excel Register.'
                  : 'Word/PDF policies, SOPs, Excel trackers aur Master Document Control Register.'}
              </p>
            </div>
            <div className="pt-4 border-t border-slate-800 space-y-1.5 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>IT-POL-001 & Security SOPs</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>DOC-REG-001 Master Excel</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Operational Forms F-01 to F-05</span>
              </div>
            </div>
          </div>

          {/* Pillar 2: Live Website & Repo */}
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4">
                <Globe className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono text-slate-400">PART 2 OF 3</span>
              <h3 className="text-lg font-bold text-white mt-1">
                {language === 'en' ? '2. Live Website & Repository' : '2. Live Website & GitHub'}
              </h3>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                {language === 'en'
                  ? 'Public single-page brand portfolio published on GitHub Pages or custom domain, demonstrating services and security readiness.'
                  : 'HTML/CSS responsive website, GitHub repository URL aur published website URL.'}
              </p>
            </div>
            <div className="pt-4 border-t border-slate-800 space-y-1.5 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Single-Page Architecture</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Interactive Deliverables Hub</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Production Responsive Layout</span>
              </div>
            </div>
          </div>

          {/* Pillar 3: Presentation & Defense */}
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 mb-4">
                <Presentation className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono text-slate-400">PART 3 OF 3</span>
              <h3 className="text-lg font-bold text-white mt-1">
                {language === 'en' ? '3. Oral Defense & Pitch Deck' : '3. Presentation & Defense'}
              </h3>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                {language === 'en'
                  ? 'Professional PowerPoint / Google Slides deck defending company vision, organizational chart, policies, security plan, and individual roles.'
                  : 'Startup introduction, organizational chart, policies, security, sales plan aur har member ka contribution.'}
              </p>
            </div>
            <button
              onClick={() => setShowDeckModal(true)}
              className="w-full py-2 px-3 bg-purple-600/20 hover:bg-purple-600/30 border border-purple-500/40 text-purple-300 font-semibold text-xs rounded-lg transition-colors flex items-center justify-center gap-1.5"
            >
              <span>{language === 'en' ? 'Open 12-Slide Deck Guide' : '12-Slide Outline Kholein'}</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* 12-Slide Presentation Deck Modal */}
        {showDeckModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-in fade-in duration-150">
            <div className="relative w-full max-w-3xl max-h-[90vh] flex flex-col bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden">
              <div className="p-6 border-b border-slate-800 flex items-center justify-between">
                <div>
                  <span className="text-xs font-mono text-purple-400">PRESENTATION DEFENSE BLUEPRINT</span>
                  <h3 className="text-xl font-bold text-white">12-Slide University Presentation Deck Outline</h3>
                </div>
                <button
                  onClick={() => setShowDeckModal(false)}
                  className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 overflow-y-auto space-y-3 flex-1 text-xs">
                {presentationSlides.map((item) => (
                  <div key={item.slide} className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex items-start gap-3">
                    <span className="w-7 h-7 rounded-lg bg-purple-500/20 text-purple-300 font-mono font-bold flex items-center justify-center shrink-0">
                      {item.slide}
                    </span>
                    <div className="min-w-0">
                      <h4 className="font-bold text-white text-sm">{item.title}</h4>
                      <p className="text-slate-300 mt-1 leading-relaxed">{item.content}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-4 bg-slate-950 border-t border-slate-800 flex items-center justify-between text-xs">
                <span className="text-slate-400">Time estimate: 12–15 minutes oral defense with instructor Q&A</span>
                <button
                  onClick={() => setShowDeckModal(false)}
                  className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white font-medium rounded-lg transition-colors"
                >
                  Done
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
