import React, { useState } from 'react';
import { DELIVERABLES } from '../data/deliverables';
import { Deliverable, Language } from '../types';
import { FileText, CheckCircle, ChevronRight, X, Download, HelpCircle, Layers } from 'lucide-react';

interface DeliverablesExplorerProps {
  language: Language;
}

export const DeliverablesExplorer: React.FC<DeliverablesExplorerProps> = ({ language }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalDoc, setActiveModalDoc] = useState<Deliverable | null>(null);

  const categories = ['All', 'Branding', 'Governance', 'Strategy', 'Human Resources', 'Finance', 'Operations', 'Security'];

  const filteredDeliverables = selectedCategory === 'All'
    ? DELIVERABLES
    : DELIVERABLES.filter(d => d.category === selectedCategory);

  return (
    <section id="deliverables" className="py-20 bg-[#0e1424] border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="flex items-center gap-2 text-xs font-semibold text-sky-400 uppercase tracking-wider mb-2">
            <span>{language === 'en' ? 'Curriculum Architecture' : 'Assignment Deliverables'}</span>
            <span aria-hidden="true">·</span>
            <span>15 Mandatory Work Products</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {language === 'en'
              ? 'Complete 15-Deliverable Project Portfolio'
              : 'Teacher Ke 15 Deliverables Ka Mukammal Framework'}
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            {language === 'en'
              ? 'A deliverable is a verifiable, audit-grade artifact that must be prepared and submitted. Here is the complete breakdown mapping every requirement to its operational owner.'
              : 'Deliverable ka matlab hai woh cheez jo tumhein bana kar submit karni hai. Har deliverable company ke specific department aur team member ke hawale ki gayi hai.'}
          </p>
        </div>

        {/* Teacher's Rationale Explainer Card */}
        <div className="mb-10 p-5 rounded-xl bg-slate-900/80 border border-slate-800 text-sm">
          <div className="flex items-start gap-3">
            <HelpCircle className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
            <div className="space-y-2">
              <h4 className="font-semibold text-white">
                {language === 'en'
                  ? 'Why Did The Instructor Assign 15 Distinct Deliverables?'
                  : 'Teacher Ne 15 Deliverables Kyun Diye Hain?'}
              </h4>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                {language === 'en'
                  ? 'Launching an enterprise cybersecurity consultancy requires more than technical pen-testing: it demands rigorous physical and digital SOPs, corporate financial controls, client confidentiality covenenats (NDAs), HR frameworks, business continuity plans, and a centralized Master Document Control Register for institutional audits.'
                  : 'Kyunki ek real cybersecurity company chalane ke liye sirf hacking/testing kafi nahi hoti; office rules, client NDAs, budgets, attendance, incident response plans aur master document control ki zaroorat hoti hai takay company audit-ready ho sake.'}
              </p>
            </div>
          </div>
        </div>

        {/* Category Filter Tabs (Zero-pill discipline: segmented buttons) */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-4 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap shrink-0 transition-colors ${
                selectedCategory === cat
                  ? 'bg-sky-600 text-white shadow-sm'
                  : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid of 15 Deliverables */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredDeliverables.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveModalDoc(item)}
              className="group p-5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-sky-500/50 hover:bg-slate-900 transition-all cursor-pointer flex flex-col justify-between"
            >
              <div>
                {/* Unboxed metadata line with typographic separators */}
                <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-2.5">
                  <span className="font-semibold text-sky-400">{item.code}</span>
                  <div className="flex items-center gap-1.5">
                    <span>{item.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>Member #{item.assignedMember}</span>
                  </div>
                </div>

                <h3 className="text-base font-bold text-white group-hover:text-sky-300 transition-colors mb-2">
                  {language === 'en' ? item.titleEn : item.titleUr}
                </h3>

                <p className="text-slate-300 text-xs leading-relaxed line-clamp-3 mb-4">
                  {language === 'en' ? item.descriptionEn : item.descriptionUr}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
                <span className="text-slate-400 font-mono text-[11px] truncate max-w-[200px]">
                  {item.docFormat}
                </span>
                <span className="inline-flex items-center gap-1 text-sky-400 font-medium group-hover:translate-x-0.5 transition-transform">
                  <span>{language === 'en' ? 'Inspect' : 'Tafseel'}</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Modal View for Selected Deliverable */}
        {activeModalDoc && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-150">
            <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-700 rounded-2xl p-6 sm:p-8 shadow-2xl space-y-6">
              <button
                onClick={() => setActiveModalDoc(null)}
                className="absolute top-5 right-5 text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-sky-400 mb-1">
                  <span>{activeModalDoc.code}</span>
                  <span aria-hidden="true">·</span>
                  <span>{activeModalDoc.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>Format: {activeModalDoc.docFormat}</span>
                </div>
                <h3 className="text-2xl font-bold text-white">
                  {language === 'en' ? activeModalDoc.titleEn : activeModalDoc.titleUr}
                </h3>
              </div>

              <div className="space-y-4 text-sm text-slate-300">
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">
                    {language === 'en' ? 'Deliverable Description' : 'Tafseel Aur Maqsad'}
                  </h4>
                  <p className="leading-relaxed bg-slate-950/60 p-3.5 rounded-lg border border-slate-800">
                    {language === 'en' ? activeModalDoc.descriptionEn : activeModalDoc.descriptionUr}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800">
                    <span className="text-slate-400 block mb-1">
                      {language === 'en' ? 'Primary Owner' : 'Zimmedaar Member'}
                    </span>
                    <span className="font-semibold text-white">{activeModalDoc.assignedRole}</span>
                    <span className="text-slate-400 block mt-0.5">Team Member #{activeModalDoc.assignedMember}</span>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800">
                    <span className="text-slate-400 block mb-1">
                      {language === 'en' ? 'Submission Document ID' : 'Submission File Code'}
                    </span>
                    <span className="font-mono font-semibold text-emerald-400">{activeModalDoc.docFormat}</span>
                    <span className="text-slate-400 block mt-0.5">Control Register Index</span>
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                    {language === 'en' ? 'Mandatory Output Components' : 'Zaroori Outputs / Sections'}
                  </h4>
                  <div className="space-y-2">
                    {activeModalDoc.keyOutputs.map((output, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-200">
                        <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{output}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                <span className="text-xs text-slate-400">
                  {language === 'en' ? 'Assignment Deliverable ' : 'Deliverable '} #{activeModalDoc.id} of 15
                </span>
                <button
                  onClick={() => setActiveModalDoc(null)}
                  className="px-4 py-2 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
                >
                  {language === 'en' ? 'Close Inspector' : 'Band Karein'}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
