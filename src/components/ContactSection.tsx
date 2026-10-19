import React, { useState } from 'react';
import { Language } from '../types';
import { Send, CheckCircle2, ShieldAlert, Mail, Phone, MapPin, Building2 } from 'lucide-react';

interface ContactSectionProps {
  language: Language;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ language }) => {
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    orgName: '',
    sector: 'Commercial Bank',
    contactPerson: '',
    email: '',
    phone: '',
    serviceInterest: 'Authorized Penetration Testing',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.orgName || !formData.email) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-[#0b0f19] border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Engagement Information */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2 text-xs font-semibold text-sky-400 uppercase tracking-wider">
              <span>{language === 'en' ? 'Engage Defense' : 'Rabta Karein'}</span>
              <span aria-hidden="true">·</span>
              <span>Confidential Consultation</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              {language === 'en'
                ? 'Request An Authorized Security Assessment'
                : 'Security Consultation & Pentest Scope Form'}
            </h2>

            <p className="text-slate-300 text-sm leading-relaxed">
              {language === 'en'
                ? 'Whether you operate a financial institution requiring PCI-DSS pentesting or an academic network needing vulnerability remediation, our certified engineers operate under strict NDAs.'
                : 'Apni company ke systems aur websites ko secure karne ke liye hamare cybersecurity experts se rabta karein. Tamam audits strict NDA ke tehat honge.'}
            </p>

            <div className="space-y-4 pt-2 text-xs text-slate-300">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-sky-400 shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-slate-400 block text-[11px]">Direct Inquiries:</span>
                  <span className="font-mono text-white">consulting@rajsecure.com</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-emerald-400 shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-slate-400 block text-[11px]">Emergency Incident Hotline (CSIRT):</span>
                  <span className="font-mono text-white">+92 (21) 3456-7890</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-purple-400 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-slate-400 block text-[11px]">Corporate Security Lab:</span>
                  <span className="text-white">Suite 404, Cyber Defense Tower, Tech Corridor</span>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 text-xs text-slate-400">
              <span className="font-semibold text-slate-200">NDAs Enforced Before Testing:</span> Zero tests are performed without dual-authorized Rules of Engagement (RoE) signatures and explicit written client consent.
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white">Assessment Request Received</h3>
                <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="font-semibold text-white">{formData.contactPerson || 'Client Partner'}</span>. Your inquiry for <span className="text-sky-400 font-semibold">{formData.orgName}</span> has been logged under docket <span className="font-mono text-emerald-400">#SEC-{Math.floor(1000 + Math.random() * 9000)}</span>. Our Lead Pentest Architect will respond within 4 business hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-5 py-2 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
                >
                  Submit Another Scope Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-300 mb-1.5 font-medium">Organization / Company Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Allied Commercial Bank"
                      value={formData.orgName}
                      onChange={(e) => setFormData({ ...formData, orgName: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 mb-1.5 font-medium">Target Sector Vertical</label>
                    <select
                      value={formData.sector}
                      onChange={(e) => setFormData({ ...formData, sector: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-700 text-white focus:outline-none focus:border-sky-500 transition-colors"
                    >
                      <option>Commercial Bank</option>
                      <option>Hospital & Healthcare</option>
                      <option>University & Higher Ed</option>
                      <option>IT & SaaS Company</option>
                      <option>Small Business / Retail</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-300 mb-1.5 font-medium">Contact Person Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Tariq Mehmood"
                      value={formData.contactPerson}
                      onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 mb-1.5 font-medium">Official Corporate Email</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. tariq@alliedbank.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-300 mb-1.5 font-medium">Primary Service Required</label>
                  <select
                    value={formData.serviceInterest}
                    onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-700 text-white focus:outline-none focus:border-sky-500 transition-colors"
                  >
                    <option>Authorized Penetration Testing</option>
                    <option>Website & Web Application Security Assessment</option>
                    <option>Cybersecurity Consulting & Architecture Review</option>
                    <option>Security Awareness Training & Phishing Simulation</option>
                    <option>IT Security Policies & Institutional Documentation</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-300 mb-1.5 font-medium">Scope Details & Requirements</label>
                  <textarea
                    rows={3}
                    placeholder="Provide details on number of endpoints, external IP ranges, compliance deadlines, or specific vulnerabilities of concern..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-sky-600 hover:bg-sky-500 text-white font-semibold text-xs rounded-lg shadow-sm transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>
                    {language === 'en'
                      ? 'Submit Confidential Scope Request'
                      : 'Scope Inquiry Submit Karein'}
                  </span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
