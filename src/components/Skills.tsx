import React from 'react';
import {
  Code,
  Globe,
  Database,
  Cloud,
  CheckCircle2,
  Sparkles,
  Terminal,
  Cpu,
  Layers,
  FileCode2,
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'programming':
        return <Terminal className="w-5 h-5 text-blue-600" />;
      case 'web':
        return <Globe className="w-5 h-5 text-indigo-600" />;
      case 'database':
        return <Database className="w-5 h-5 text-emerald-600" />;
      case 'cloud':
        return <Cloud className="w-5 h-5 text-sky-600" />;
      default:
        return <Code className="w-5 h-5 text-blue-600" />;
    }
  };

  const getCategoryAccent = (id: string) => {
    switch (id) {
      case 'programming':
        return {
          bgBadge: 'bg-blue-50 text-blue-700 border-blue-200/80',
          indicator: 'bg-blue-600',
        };
      case 'web':
        return {
          bgBadge: 'bg-indigo-50 text-indigo-700 border-indigo-200/80',
          indicator: 'bg-indigo-600',
        };
      case 'database':
        return {
          bgBadge: 'bg-emerald-50 text-emerald-700 border-emerald-200/80',
          indicator: 'bg-emerald-600',
        };
      case 'cloud':
        return {
          bgBadge: 'bg-sky-50 text-sky-700 border-sky-200/80',
          indicator: 'bg-sky-600',
        };
      default:
        return {
          bgBadge: 'bg-slate-50 text-slate-700 border-slate-200',
          indicator: 'bg-slate-600',
        };
    }
  };

  return (
    <section
      id="skills"
      className="py-24 bg-white relative"
      aria-label="Skills and Technical Toolkit"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="max-w-3xl">
          <div className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">
            Technical Toolkit
          </div>
          <h2
            id="skills-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900"
          >
            Skills & Competencies
          </h2>
          <p className="mt-3 text-base text-slate-600 font-normal">
            Categorized technical capabilities covering core programming, web interfaces, relational data modeling, and cloud computing.
          </p>
        </div>

        {/* Categories Grid (2x2 on desktop) */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {SKILL_CATEGORIES.map((category) => {
            const accent = getCategoryAccent(category.id);
            return (
              <div
                key={category.id}
                id={`skill-category-${category.id}`}
                className="bg-slate-50 rounded-2xl p-7 border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-slate-300 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between pb-4 border-b border-slate-200/80 mb-5">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-xl bg-white shadow-2xs border border-slate-200 flex items-center justify-center">
                        {getCategoryIcon(category.id)}
                      </div>
                      <div>
                        <h3 className="font-black text-slate-900 text-lg tracking-tight">{category.title}</h3>
                        <p className="text-xs font-medium text-slate-500 mt-0.5">{category.description}</p>
                      </div>
                    </div>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-3">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="bg-white rounded-xl p-4 border border-slate-200 shadow-2xs hover:border-slate-300 transition-all"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2.5">
                            <span className={`w-2 h-2 rounded-full ${accent.indicator}`} />
                            <span className="font-extrabold text-slate-900 text-sm font-mono tracking-tight">
                              {skill.name}
                            </span>
                          </div>
                          {skill.level && (
                            <span
                              className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md border ${accent.bgBadge}`}
                            >
                              {skill.level}
                            </span>
                          )}
                        </div>
                        {skill.description && (
                          <p className="text-xs text-slate-600 mt-2 pl-4.5 leading-relaxed font-normal">
                            {skill.description}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer contextual pill */}
                <div className="mt-5 pt-4 border-t border-slate-200/70 flex items-center justify-between text-xs text-slate-500 font-bold uppercase tracking-wider">
                  <span>{category.skills.length} {category.skills.length === 1 ? 'Skill' : 'Skills'}</span>
                  <span className="flex items-center gap-1.5 text-emerald-600">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    Active Practice
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Callout: Technical Synergy */}
        <div
          id="skills-synergy-banner"
          className="mt-8 rounded-2xl bg-slate-900 text-white p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-xs shrink-0 font-bold">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-black tracking-tight text-white">
                End-to-End AI & Data Foundations
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 font-normal">
                Combining Python computational power, SQL relational data querying, and modern cloud deployment concepts.
              </p>
            </div>
          </div>
          <a
            id="skills-jump-projects"
            href="#projects"
            className="text-xs font-bold uppercase tracking-wider text-slate-900 bg-white hover:bg-blue-50 px-5 py-3 rounded-xl transition-colors shrink-0"
          >
            See In Projects &rarr;
          </a>
        </div>
      </div>
    </section>
  );
};
