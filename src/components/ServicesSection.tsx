import React from 'react';
import { ShieldCheck, Search, Crosshair, Users, FileText, CheckCircle2 } from 'lucide-react';
import { Language } from '../types';

interface ServicesSectionProps {
  language: Language;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ language }) => {
  const services = [
    {
      index: '01',
      icon: ShieldCheck,
      titleEn: 'Cybersecurity Consulting',
      titleUr: 'Cybersecurity Consulting',
      descEn: 'Strategic threat posture analysis, zero-trust architecture blueprints, risk governance, and regulatory alignment tailored for enterprise compliance.',
      descUr: 'Idaron ke cyber security structure ka jaiza, risk management aur secure corporate architecture ki professional guidance.',
      deliverables: ['Risk Assessment Matrix', 'ISO 27001 Roadmap', 'Threat Modeling Report']
    },
    {
      index: '02',
      icon: Search,
      titleEn: 'Website Security Assessment',
      titleUr: 'Website Security Assessment',
      descEn: 'Comprehensive vulnerability scanning against OWASP Top 10 vectors, SQL injection, cross-site scripting (XSS), misconfigured CORS, and SSL/TLS cipher hygiene.',
      descUr: 'Websites aur web apps ka mukammal security scan, OWASP Top 10 vulnerabilities aur SSL/TLS security verification.',
      deliverables: ['OWASP Top 10 Audit', 'API Endpoint Analysis', 'Vulnerability Remediation Guide']
    },
    {
      index: '03',
      icon: Crosshair,
      titleEn: 'Authorized Penetration Testing',
      titleUr: 'Authorized Penetration Testing',
      descEn: 'Simulated real-world offensive attacks against corporate networks, web applications, and wireless environments with explicit Rules of Engagement (RoE).',
      descUr: 'Authorized tareeqay se networks aur systems par attack simulate karke security gaps aur weaknesses dhoondna.',
      deliverables: ['Executive Summary Brief', 'Technical Exploitation Proofs', 'CVSS 3.1 Severity Scoring']
    },
    {
      index: '04',
      icon: Users,
      titleEn: 'Security Awareness Training',
      titleUr: 'Security Awareness Training',
      descEn: 'Interactive workshops and automated phishing simulation campaigns designed to convert employees into a vigilant human firewall against social engineering.',
      descUr: 'Employees ko phishing emails, password hifazat aur social engineering ke fraud se bachane ki practical training.',
      deliverables: ['Phishing Simulation Benchmarks', 'Employee Hygiene Modules', 'Compliance Completion Records']
    },
    {
      index: '05',
      icon: FileText,
      titleEn: 'IT Security Policies & Documentation',
      titleUr: 'IT Security Policies & Documentation',
      descEn: 'Standardized institutional operating procedures (SOPs), Acceptable Use Policies (AUP), Disaster Recovery Charters, and Master Document Control Registers.',
      descUr: 'Offices aur IT systems ke liye standard rules, SOPs, disaster recovery plans aur master documentation tayyar karna.',
      deliverables: ['IT-POL-001 Policy Document', 'SEC-SOP-001/002 Protocols', 'Master Control Register Index']
    }
  ];

  const Icon0 = services[0].icon;
  const Icon1 = services[1].icon;
  const Icon2 = services[2].icon;
  const Icon3 = services[3].icon;

  return (
    <section id="services" className="py-20 bg-[#0b0f19] border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold text-sky-400 uppercase tracking-wider mb-2">
            <span>{language === 'en' ? 'Core Capabilities' : 'Company Ki Khidmaat'}</span>
            <span aria-hidden="true">·</span>
            <span>5 Primary Offerings</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight text-balance">
            {language === 'en'
              ? 'Defensive Architecture Engineered For Modern Adversaries.'
              : 'Digital Assets Aur Networks Ke Liye Comprehensive Security Solutions.'}
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            {language === 'en'
              ? 'Every service is delivered under strict non-disclosure covenants and verified against international security benchmarks including NIST SP 800-53 and ISO/IEC 27001.'
              : 'Tamam services professional ethics, strict NDAs aur international security standards ke tehat conduct ki jaati hain.'}
          </p>
        </div>

        {/* Bento Grid Layout with 2 High-Fidelity Generated Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Service 1 */}
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-4">
                <span>SERVICE {services[0].index}</span>
                <Icon0 className="w-5 h-5 text-sky-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                {language === 'en' ? services[0].titleEn : services[0].titleUr}
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                {language === 'en' ? services[0].descEn : services[0].descUr}
              </p>
            </div>
            <div className="pt-4 border-t border-slate-800/80 space-y-1.5 text-xs text-slate-400">
              {services[0].deliverables.map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Service 2 with Lab Assessment Image */}
          <div className="md:col-span-2 rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 flex flex-col md:flex-row">
            <div className="md:w-1/2 p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-4">
                  <span>SERVICE {services[1].index}</span>
                  <Icon1 className="w-5 h-5 text-emerald-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {language === 'en' ? services[1].titleEn : services[1].titleUr}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  {language === 'en' ? services[1].descEn : services[1].descUr}
                </p>
              </div>
              <div className="pt-4 border-t border-slate-800/80 space-y-1.5 text-xs text-slate-400">
                {services[1].deliverables.map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="md:w-1/2 relative min-h-[200px]">
              <img
                src="/src/assets/images/assessment_security_lab_1792400111666.jpg"
                alt="Cybersecurity Analytics Lab testing server vulnerability"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Service 3: Authorized Penetration Testing */}
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-4">
                <span>SERVICE {services[2].index}</span>
                <Icon2 className="w-5 h-5 text-rose-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                {language === 'en' ? services[2].titleEn : services[2].titleUr}
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                {language === 'en' ? services[2].descEn : services[2].descUr}
              </p>
            </div>
            <div className="pt-4 border-t border-slate-800/80 space-y-1.5 text-xs text-slate-400">
              {services[2].deliverables.map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Service 4 with Security Training Image */}
          <div className="md:col-span-2 rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 flex flex-col md:flex-row-reverse">
            <div className="md:w-1/2 p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-4">
                  <span>SERVICE {services[3].index}</span>
                  <Icon3 className="w-5 h-5 text-amber-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {language === 'en' ? services[3].titleEn : services[3].titleUr}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  {language === 'en' ? services[3].descEn : services[3].descUr}
                </p>
              </div>
              <div className="pt-4 border-t border-slate-800/80 space-y-1.5 text-xs text-slate-400">
                {services[3].deliverables.map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="md:w-1/2 relative min-h-[200px]">
              <img
                src="/src/assets/images/security_training_audit_1792400128627.jpg"
                alt="Corporate Boardroom Cybersecurity Awareness Briefing"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Service 5 */}
          <div className="lg:col-span-3 p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900 to-sky-950/40 border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-2">
                <span>SERVICE {services[4].index}</span>
                <span aria-hidden="true">·</span>
                <span className="text-sky-400">Institutional Documentation & Standards</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-1.5">
                {language === 'en' ? services[4].titleEn : services[4].titleUr}
              </h3>
              <p className="text-slate-300 text-sm">
                {language === 'en' ? services[4].descEn : services[4].descUr}
              </p>
            </div>
            <div className="shrink-0 flex items-center gap-3">
              <a
                href="#sop-framework"
                className="px-4 py-2 text-xs font-semibold text-white bg-sky-600 hover:bg-sky-500 rounded-lg transition-colors"
              >
                {language === 'en' ? 'Open SOP Engine' : 'SOP Engine Kholein'}
              </a>
              <a
                href="#document-control"
                className="px-4 py-2 text-xs font-semibold text-slate-300 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
              >
                {language === 'en' ? 'View Register' : 'Register Dekhein'}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
