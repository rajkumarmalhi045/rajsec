import React, { useState } from 'react';
import { TIMELINE_PHASES } from '../data/timeline';
import { Language } from '../types';
import { Calendar, CheckSquare, Square, CheckCircle2, Clock } from 'lucide-react';

interface TimelineRoadmapProps {
  language: Language;
}

export const TimelineRoadmap: React.FC<TimelineRoadmapProps> = ({ language }) => {
  // Store completed tasks
  const [completedTasks, setCompletedTasks] = useState<Record<string, boolean>>({
    't-1': true,
    't-2': true,
    't-3': true,
    't-4': true,
    't-5': true,
    't-6': true,
    't-7': true,
    't-8': true,
    't-9': true,
    't-14': true,
    't-15': true,
    't-19': true,
  });

  const allTaskIds = TIMELINE_PHASES.flatMap(p => p.tasks.map(t => t.id));
  const totalTasks = allTaskIds.length;
  const completedCount = Object.values(completedTasks).filter(Boolean).length;
  const progressPercent = Math.round((completedCount / totalTasks) * 100);

  const toggleTask = (taskId: string) => {
    setCompletedTasks(prev => ({
      ...prev,
      [taskId]: !prev[taskId]
    }));
  };

  return (
    <section id="timeline" className="py-20 bg-[#0b0f19] border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="flex items-center gap-2 text-xs font-semibold text-sky-400 uppercase tracking-wider mb-2">
            <span>{language === 'en' ? 'Execution Gantt' : '15 Din Ka Plan'}</span>
            <span aria-hidden="true">·</span>
            <span>Sprint Roadmap & Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {language === 'en'
              ? '15-Day Project Execution & Milestone Tracker'
              : 'Project 15 Din Mein Kaise Complete Karna Hai?'}
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            {language === 'en'
              ? 'Phased execution plan divided across 15 calendar days ensuring all 11 team members collaborate sequentially to complete all 15 deliverables ahead of the final defense.'
              : 'Days 1–2 se lekar Day 15 tak har marhale ka roadmap. Har member apna task check kar sakta hai takay final presentation tak sab tayyar ho.'}
          </p>
        </div>

        {/* Interactive Progress Bar */}
        <div className="mb-10 p-5 rounded-2xl bg-slate-900 border border-slate-800">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
            <div className="flex items-center gap-2 text-xs font-semibold text-white">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>
                {language === 'en' ? 'Overall Deliverable Readiness' : 'Deliverables Ki Tayyari'}
              </span>
            </div>
            <div className="text-xs font-mono text-slate-300">
              <span className="text-emerald-400 font-bold">{completedCount}</span> / {totalTasks} Tasks Verified ({progressPercent}%)
            </div>
          </div>
          <div className="w-full h-2.5 rounded-full bg-slate-950 overflow-hidden border border-slate-800">
            <div
              className="h-full bg-gradient-to-r from-sky-500 to-emerald-400 transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
          <div className="mt-2 text-[11px] text-slate-500">
            {language === 'en'
              ? 'Click any task below to toggle completion status in real-time.'
              : 'Neeche kisi bhi task par click karke complete mark karein.'}
          </div>
        </div>

        {/* Phase Timeline Cards */}
        <div className="space-y-6">
          {TIMELINE_PHASES.map((phase, pIdx) => (
            <div
              key={pIdx}
              className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="px-3 py-1 rounded-lg bg-sky-500/10 border border-sky-500/30 text-sky-400 font-mono font-bold text-xs whitespace-nowrap">
                    {phase.days}
                  </div>
                  <h3 className="text-lg font-bold text-white">
                    {language === 'en' ? phase.titleEn : phase.titleUr}
                  </h3>
                </div>
                <span className="text-xs text-slate-400 font-mono">
                  Phase {pIdx + 1} of {TIMELINE_PHASES.length}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {phase.descriptionEn}
              </p>

              {/* Task List */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 pt-2">
                {phase.tasks.map((task) => {
                  const isDone = !!completedTasks[task.id];
                  return (
                    <div
                      key={task.id}
                      onClick={() => toggleTask(task.id)}
                      className={`p-3 rounded-xl border transition-all cursor-pointer flex items-start gap-3 ${
                        isDone
                          ? 'bg-slate-950/80 border-slate-800 text-slate-300'
                          : 'bg-slate-900 border-slate-800 text-slate-200 hover:border-slate-700'
                      }`}
                    >
                      <button
                        type="button"
                        className="mt-0.5 text-sky-400 shrink-0"
                        aria-label="Toggle task"
                      >
                        {isDone ? (
                          <CheckSquare className="w-4 h-4 text-emerald-400" />
                        ) : (
                          <Square className="w-4 h-4 text-slate-500" />
                        )}
                      </button>
                      <div className="text-xs min-w-0">
                        <p className={`leading-relaxed ${isDone ? 'line-through text-slate-400' : 'text-slate-200'}`}>
                          {language === 'en' ? task.textEn : task.textUr}
                        </p>
                        <div className="flex items-center gap-2 mt-1 text-[11px] font-mono text-slate-400">
                          <span>Deliverables: {task.deliverables.map(d => `#${d}`).join(', ')}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
