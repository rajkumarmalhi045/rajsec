import React from 'react';
import { ArrowRight, ShieldCheck, Building2, Stethoscope, GraduationCap, Server, Store } from 'lucide-react';
import { Language } from '../types';

interface HeroProps {
  language: Language;
}

export const Hero: React.FC<HeroProps> = ({ language }) => {
  return (
    <section className="relative pt-12 pb-20 overflow-hidden border-b border-slate-800">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-sky-950/20 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Value Proposition & Tagline */}
          <div className="lg:col-span-7 space-y-6">
            {/* Quiet text kicker with typographic separator */}
            <div className="flex items-center gap-2 text-xs font-medium text-slate-400">
              <span className="text-sky-400 font-semibold tracking-wider uppercase">
                {language === 'en' ? 'Startup Brief & Academic Project' : 'Startup Brief & Assignment'}
              </span>
              <span aria-hidden="true">·</span>
              <span>ISO 27001 & NIST Aligned</span>
              <span aria-hidden="true">·</span>
              <span>11-Member Corporate Hierarchy</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] text-balance">
              {language === 'en' ? (
                <>
                  Secure Your Digital World{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-teal-300">
                    With Institutional Rigor.
                  </span>
                </>
              ) : (
                <>
                  Apni Digital Duniya Ko{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-teal-300">
                    Mehfooz Banayein.
                  </span>
                </>
              )}
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              {language === 'en'
                ? 'RajSecure Technologies is an enterprise cybersecurity startup defending critical digital infrastructure with authorized penetration testing, vulnerability assessments, compliance SOPs, and employee awareness training.'
                : 'RajSecure Technologies ek emerging cybersecurity startup hai jo banks, hospitals, universities aur IT idaron ko cyber hamlon se bachane ke liye authorized testing, security SOPs aur digital defense faraham karti hai.'}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#deliverables"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-sky-600 hover:bg-sky-500 rounded-lg shadow-sm shadow-sky-600/30 transition-all"
              >
                <span>{language === 'en' ? 'Explore 15 Deliverables' : '15 Deliverables Dekhein'}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#sop-framework"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-slate-200 bg-slate-900 border border-slate-700 hover:border-slate-500 rounded-lg transition-colors"
              >
                <span>{language === 'en' ? 'View Policy Template (IT-POL-001)' : 'Policy Format Dekhein'}</span>
              </a>
            </div>

            {/* Verification Notice from assignment brief */}
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-400 space-y-1">
              <div className="flex items-center gap-2 text-slate-300 font-semibold">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>{language === 'en' ? 'Assignment Notice & Availability' : 'Company Name & Availability Check'}</span>
              </div>
              <p>
                {language === 'en'
                  ? 'Suggested company model for university deliverable defense. Domain availability & trademark clearance recommended before formal incorporation.'
                  : 'Yeh sirf hamari suggested company hai. Is naam ko final karne se pehle availability check karna behtar hoga.'}
              </p>
            </div>
          </div>

          {/* Right Column: Hero High-Fidelity Visual Asset */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-900">
              <img
                src="/src/assets/images/hero_security_ops_1792400088651.jpg"
                alt="RajSecure Technologies Cyber Defense Operations Center"
                className="w-full h-auto object-cover aspect-[16/10]"
                referrerPolicy="no-referrer"
              />
              <div className="p-4 bg-slate-900/90 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span className="text-slate-200 font-medium">RajSecure SOC Center</span>
                </div>
                <span>Operations Room 01</span>
              </div>
            </div>
          </div>
        </div>

        {/* Target Customers Strip: Banks, Hospitals, Universities, IT Companies, Small Businesses */}
        <div className="mt-16 pt-8 border-t border-slate-800/80">
          <p className="text-xs font-semibold tracking-wider text-slate-400 uppercase mb-4 text-center sm:text-left">
            {language === 'en'
              ? 'Institutional Target Sectors'
              : 'Target Customers & Sanad'}
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {[
              {
                icon: Building2,
                nameEn: 'Commercial Banks',
                nameUr: 'Banks & Financial Hubs',
                detail: 'PCI-DSS, Core Banking Audits'
              },
              {
                icon: Stethoscope,
                nameEn: 'Hospitals & Healthcare',
                nameUr: 'Hospitals & Medical',
                detail: 'Patient Records & HIPAA'
              },
              {
                icon: GraduationCap,
                nameEn: 'Universities & Higher Ed',
                nameUr: 'Universities & Campuses',
                detail: 'Academic DB & Research Data'
              },
              {
                icon: Server,
                nameEn: 'IT & Cloud Companies',
                nameUr: 'IT Companies & SaaS',
                detail: 'API & Infrastructure Hardening'
              },
              {
                icon: Store,
                nameEn: 'Small Businesses & Retail',
                nameUr: 'Small Businesses (SMEs)',
                detail: 'Ransomware & Payment Shield'
              }
            ].map((sector, idx) => {
              const Icon = sector.icon;
              return (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-slate-700 transition-colors"
                >
                  <div className="w-9 h-9 rounded-lg bg-sky-950/60 border border-sky-800/40 flex items-center justify-center text-sky-400 shrink-0">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs font-semibold text-slate-200 truncate">
                      {language === 'en' ? sector.nameEn : sector.nameUr}
                    </div>
                    <div className="text-[11px] text-slate-400 truncate">
                      {sector.detail}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
