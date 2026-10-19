import React, { useState } from 'react';
import { TEAM_MEMBERS } from '../data/team';
import { Language, TeamMember } from '../types';
import { Users, Shield, Briefcase, CheckCircle2, ChevronRight } from 'lucide-react';

interface TeamHierarchyProps {
  language: Language;
}

export const TeamHierarchy: React.FC<TeamHierarchyProps> = ({ language }) => {
  const [selectedMember, setSelectedMember] = useState<TeamMember>(TEAM_MEMBERS[0]);
  const [departmentFilter, setDepartmentFilter] = useState<string>('All');

  const departments = ['All', 'Executive', 'Management', 'Sales & Marketing', 'Operations', 'IT & Security', 'Compliance'];

  const filteredMembers = departmentFilter === 'All'
    ? TEAM_MEMBERS
    : TEAM_MEMBERS.filter(m => m.department === departmentFilter);

  return (
    <section id="team" className="py-20 bg-[#0b0f19] border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-sky-400 uppercase tracking-wider mb-2">
            <span>{language === 'en' ? 'Corporate Governance' : 'Team Ka Structure'}</span>
            <span aria-hidden="true">·</span>
            <span>11 Defined Roles & RACI Matrix</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {language === 'en'
              ? 'Organizational Hierarchy & 11-Member Responsibilities'
              : 'Team Ke 11 Members Ka Kaam Aur Zimme-dariyan'}
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            {language === 'en'
              ? 'Every team member holds a clear, non-overlapping operational responsibility. While members collaborate on assigned deliverables, all documentation must maintain absolute institutional consistency.'
              : 'Har member ko ek clear responsibility deni hai. Har member apne assigned documents par kaam karega, lekin final submission mein sab documents ka content ek doosre ke saath consistent hona chahiye.'}
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-4 mb-8">
          {departments.map((dept) => (
            <button
              key={dept}
              onClick={() => setDepartmentFilter(dept)}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap shrink-0 transition-colors ${
                departmentFilter === dept
                  ? 'bg-sky-600 text-white shadow-sm'
                  : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
              }`}
            >
              {dept}
            </button>
          ))}
        </div>

        {/* Main 2-Column Split: 11-Member List on Left, Selected Role Deep Dive on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Member List */}
          <div className="lg:col-span-5 space-y-2.5 max-h-[640px] overflow-y-auto pr-2">
            {filteredMembers.map((member) => {
              const isSelected = selectedMember.memberNumber === member.memberNumber;
              return (
                <div
                  key={member.memberNumber}
                  onClick={() => setSelectedMember(member)}
                  className={`p-4 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                    isSelected
                      ? 'bg-slate-800/90 border-sky-500 shadow-md'
                      : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 hover:bg-slate-900'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div
                      className={`w-9 h-9 rounded-lg font-mono font-bold text-xs flex items-center justify-center shrink-0 ${
                        isSelected
                          ? 'bg-sky-500 text-white'
                          : 'bg-slate-800 text-slate-400 border border-slate-700'
                      }`}
                    >
                      M{member.memberNumber}
                    </div>
                    <div className="min-w-0">
                      <div className="text-sm font-bold text-white truncate">
                        {language === 'en' ? member.positionEn : member.positionUr}
                      </div>
                      <div className="text-xs text-slate-400 truncate">
                        {language === 'en' ? member.mainDutyEn : member.mainDutyUr}
                      </div>
                    </div>
                  </div>
                  <ChevronRight
                    className={`w-4 h-4 shrink-0 transition-transform ${
                      isSelected ? 'text-sky-400 translate-x-1' : 'text-slate-600'
                    }`}
                  />
                </div>
              );
            })}
          </div>

          {/* Right Column: Selected Role Dossier */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-slate-900 border border-slate-800 space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-800">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-1">
                  <span className="text-sky-400 font-semibold">MEMBER {selectedMember.memberNumber}</span>
                  <span aria-hidden="true">·</span>
                  <span>{selectedMember.department}</span>
                  <span aria-hidden="true">·</span>
                  <span className="text-emerald-400">{selectedMember.raciStatus}</span>
                </div>
                <h3 className="text-2xl font-bold text-white">
                  {language === 'en' ? selectedMember.positionEn : selectedMember.positionUr}
                </h3>
              </div>
              <div className="px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-xs font-mono text-slate-300">
                <span>RACI: </span>
                <span className="text-sky-400 font-semibold">{selectedMember.raciStatus}</span>
              </div>
            </div>

            {/* Core Duty Callout */}
            <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-1">
                {language === 'en' ? 'Core Primary Mandate (Main Kaam)' : 'Bunyaadi Zimmedari (Main Kaam)'}
              </span>
              <p className="text-sm text-slate-200 font-medium leading-relaxed">
                {language === 'en' ? selectedMember.mainDutyEn : selectedMember.mainDutyUr}
              </p>
            </div>

            {/* Detailed Responsibilities */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
                {language === 'en' ? 'Operational Responsibilities' : 'Rozana Ke Kaam Aur Faraiz'}
              </h4>
              <div className="space-y-2.5">
                {selectedMember.responsibilities.map((resp, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                    <span>{resp}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Assigned Deliverables */}
            <div className="pt-4 border-t border-slate-800">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-2">
                {language === 'en' ? 'Directly Assigned Deliverables' : 'Hawale Kiye Gaye Deliverables'}
              </span>
              <div className="flex flex-wrap gap-2">
                {selectedMember.assignedDeliverables.map((delId) => (
                  <a
                    key={delId}
                    href="#deliverables"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-xs text-sky-300 hover:border-sky-500 transition-colors"
                  >
                    <Briefcase className="w-3.5 h-3.5" />
                    <span>Deliverable #{delId}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
