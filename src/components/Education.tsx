import React from 'react';
import {
  GraduationCap,
  Calendar,
  BookOpen,
  CheckCircle2,
  BrainCircuit,
  Compass,
  FileCheck,
} from 'lucide-react';
import { EDUCATION, PERSONAL_INFO } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section
      id="education"
      className="py-24 bg-slate-50/70 border-y border-slate-200/60 relative"
      aria-label="Education Section"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">
            Academic Journey
          </div>
          <h2
            id="education-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900"
          >
            Education & Academic Focus
          </h2>
          <p className="mt-3 text-base text-slate-600 font-normal">
            Formal undergraduate training in machine learning concepts, algorithmic problem solving, and computer science foundations.
          </p>
        </div>

        {/* Timeline / Major Education Card */}
        <div className="mt-12">
          <div
            id="education-btech-card"
            className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8 relative overflow-hidden"
          >
            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-6 border-b border-slate-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center shrink-0 shadow-2xs font-bold">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="px-3 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-blue-50 text-blue-700 border border-blue-100">
                      {EDUCATION.currentYear}
                    </span>
                    <span className="px-3 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-50 text-emerald-700 border border-emerald-100 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      Active Student
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900 tracking-tight">
                    {EDUCATION.degree}
                  </h3>
                  <p className="text-sm text-slate-500 mt-0.5 font-bold uppercase tracking-wide">
                    Specialization: {EDUCATION.specialization}
                  </p>
                </div>
              </div>

              {/* Year Indicator Pill */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs font-bold uppercase tracking-wider self-start">
                <Calendar className="w-4 h-4 text-blue-600" />
                <span>Undergraduate · 2nd Year</span>
              </div>
            </div>

            {/* Academic Narrative */}
            <div className="mt-6">
              <p className="text-slate-700 text-base leading-relaxed font-normal">
                {EDUCATION.overview}
              </p>
            </div>

            {/* Key Curriculum & Focus Modules */}
            <div className="mt-8">
              <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-blue-600" />
                Key Coursework & Competencies
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {EDUCATION.focusAreas.map((area, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200/80 text-xs text-slate-900"
                  >
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5 font-bold" />
                    <span className="font-bold">{area}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Future Academic Path */}
            <div className="mt-6 p-4 rounded-xl bg-slate-900 text-white flex items-center gap-3.5 text-xs">
              <BrainCircuit className="w-5 h-5 text-blue-400 shrink-0 font-bold" />
              <span className="font-normal text-slate-200">
                <strong className="text-white font-black uppercase tracking-wider mr-1">Academic Trajectory:</strong> Deepening specialization in machine learning engineering, statistical inference, distributed cloud systems, and applied artificial intelligence.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
