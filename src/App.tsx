import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { DeliverablesExplorer } from './components/DeliverablesExplorer';
import { TeamHierarchy } from './components/TeamHierarchy';
import { PolicyDocumentViewer } from './components/PolicyDocumentViewer';
import { InteractiveForms } from './components/InteractiveForms';
import { DocumentRegisterTable } from './components/DocumentRegisterTable';
import { TimelineRoadmap } from './components/TimelineRoadmap';
import { FinalSubmissionChecklist } from './components/FinalSubmissionChecklist';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { Language } from './types';

export default function App() {
  const [language, setLanguage] = useState<Language>('en');

  return (
    <div className="min-h-screen bg-[#0b0f19] text-slate-100 flex flex-col selection:bg-sky-500/30 selection:text-sky-200">
      {/* Top Bar Navigation (Strict 3-zone contract) */}
      <Header language={language} setLanguage={setLanguage} />

      {/* Main Single-Page Journey */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero language={language} />

        {/* 2. Core Cybersecurity Services */}
        <ServicesSection language={language} />

        {/* 3. The 15 Deliverables Explorer (Teacher Rationale & Audit Breakdown) */}
        <DeliverablesExplorer language={language} />

        {/* 4. 11-Member Organizational Hierarchy & RACI Responsibilities */}
        <TeamHierarchy language={language} />

        {/* 5. Policy Document Engine (Standard IT-POL-001 Format) */}
        <PolicyDocumentViewer language={language} />

        {/* 6. Standard Forms & Operational Registers (Deliverable 14) */}
        <InteractiveForms language={language} />

        {/* 7. Master Document Control Register (Deliverable 15 Excel Repository) */}
        <DocumentRegisterTable language={language} />

        {/* 8. 15-Day Project Execution Timeline & Interactive Milestones */}
        <TimelineRoadmap language={language} />

        {/* 9. Final Submission Package (3 Components & Presentation Deck Guide) */}
        <FinalSubmissionChecklist language={language} />

        {/* 10. Confidential Security Assessment Inquiry */}
        <ContactSection language={language} />
      </main>

      {/* Corporate Footer */}
      <Footer language={language} />
    </div>
  );
}
