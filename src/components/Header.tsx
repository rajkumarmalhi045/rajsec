import React from 'react';
import { Shield, Globe } from 'lucide-react';
import { Language } from '../types';

interface HeaderProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  onOpenConsultModal?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  language,
  setLanguage,
  onOpenConsultModal,
}) => {
  return (
    <header className="sticky top-0 z-50 w-full bg-[#0b0f19]/90 backdrop-blur-md border-b border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-16">
          {/* Zone 1: Single Brand Wordmark */}
          <a
            href="#"
            className="flex items-center gap-2.5 text-lg font-bold tracking-tight text-white whitespace-nowrap shrink-0 group"
          >
            <div className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400 group-hover:border-sky-400 transition-colors">
              <Shield className="w-4 h-4" />
            </div>
            <span>RajSecure Technologies</span>
          </a>

          {/* Zone 2: 4–5 single-line clean text navigation links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
            <a
              href="#services"
              className="hover:text-white transition-colors whitespace-nowrap shrink-0"
            >
              {language === 'en' ? 'Services' : 'Khidmaat'}
            </a>
            <a
              href="#deliverables"
              className="hover:text-white transition-colors whitespace-nowrap shrink-0"
            >
              {language === 'en' ? '15 Deliverables' : '15 Deliverables'}
            </a>
            <a
              href="#team"
              className="hover:text-white transition-colors whitespace-nowrap shrink-0"
            >
              {language === 'en' ? '11-Member Team' : '11 Members Team'}
            </a>
            <a
              href="#sop-framework"
              className="hover:text-white transition-colors whitespace-nowrap shrink-0"
            >
              {language === 'en' ? 'Policy & SOPs' : 'Policies & SOPs'}
            </a>
            <a
              href="#document-control"
              className="hover:text-white transition-colors whitespace-nowrap shrink-0"
            >
              {language === 'en' ? 'Control Register' : 'Master Register'}
            </a>
            <a
              href="#timeline"
              className="hover:text-white transition-colors whitespace-nowrap shrink-0"
            >
              {language === 'en' ? '15-Day Plan' : '15 Din Ka Plan'}
            </a>
          </nav>

          {/* Zone 3: 1 primary action + Language Toggle */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Bilingual Language Switcher */}
            <button
              onClick={() => setLanguage(language === 'en' ? 'ur' : 'en')}
              className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium text-slate-300 bg-slate-900 border border-slate-700 hover:border-slate-500 rounded-lg transition-colors whitespace-nowrap"
              title="Toggle English / Roman Urdu translation"
              aria-label="Toggle language"
            >
              <Globe className="w-3.5 h-3.5 text-sky-400" />
              <span>{language === 'en' ? 'English' : 'Roman Urdu'}</span>
            </button>

            <a
              href="#contact"
              onClick={onOpenConsultModal}
              className="px-4 py-2 text-xs font-semibold text-white bg-sky-600 hover:bg-sky-500 rounded-lg shadow-sm shadow-sky-600/20 transition-all whitespace-nowrap shrink-0"
            >
              {language === 'en' ? 'Request Consultation' : 'Rabta Karein'}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
