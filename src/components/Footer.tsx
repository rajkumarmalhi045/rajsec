import React from 'react';
import { Shield } from 'lucide-react';
import { Language } from '../types';

interface FooterProps {
  language: Language;
}

export const Footer: React.FC<FooterProps> = ({ language }) => {
  return (
    <footer className="bg-[#070a12] border-t border-slate-800 text-slate-400 py-12 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-slate-800/80">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-white font-bold text-sm">
              <div className="w-6 h-6 rounded bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400">
                <Shield className="w-3.5 h-3.5" />
              </div>
              <span>RajSecure Technologies</span>
            </div>
            <p className="text-slate-500 text-[11px]">
              {language === 'en'
                ? 'Tagline: Secure Your Digital World. Enterprise Cybersecurity Consulting & Academic Deliverables.'
                : 'Tagline: Secure Your Digital World. Cybersecurity startup & 15 deliverables assignment portfolio.'}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-slate-400">
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#deliverables" className="hover:text-white transition-colors">15 Deliverables</a>
            <a href="#team" className="hover:text-white transition-colors">11 Members</a>
            <a href="#sop-framework" className="hover:text-white transition-colors">SOP Engine</a>
            <a href="#document-control" className="hover:text-white transition-colors">Master Register</a>
            <a href="#timeline" className="hover:text-white transition-colors">15-Day Roadmap</a>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} RajSecure Technologies. All rights reserved. Registered Academic Startup Model.
          </div>
          <div className="flex items-center gap-4 font-mono">
            <span>Doc ID: WEB-POR-001</span>
            <span aria-hidden="true">·</span>
            <span>Version 1.0</span>
            <span aria-hidden="true">·</span>
            <span>Classified: Academic Defense</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
