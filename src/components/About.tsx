import React from 'react';
import {
  Brain,
  Database,
  CloudCheck,
  TrendingUp,
  GraduationCap,
  Code2,
  Sparkles,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  const highlights = [
    {
      id: 'highlight-ml',
      icon: Brain,
      title: 'Machine Learning Aspiration',
      description:
        'Focusing on foundational algorithms, statistical learning, and building applied AI systems that solve practical challenges.',
      badge: 'Core Aim',
    },
    {
      id: 'highlight-data',
      icon: Database,
      title: 'Data-Driven Insights',
      description:
        'Leveraging SQL queries and Python data pipelines to analyze structured datasets and communicate findings visually.',
      badge: 'Analytics',
    },
    {
      id: 'highlight-cloud',
      icon: CloudCheck,
      title: 'Cloud Foundations',
      description:
        'Certified in Microsoft Azure (AZ-900), understanding modern cloud architecture, service layers, and compute scalability.',
      badge: 'Certified',
    },
    {
      id: 'highlight-growth',
      icon: TrendingUp,
      title: 'Continuous Learning',
      description:
        'Dedicated to expanding technical breadth through hands-on development, coursework, and emerging open-source AI tools.',
      badge: 'Philosophy',
    },
  ];

  return (
    <section
      id="about"
      className="py-24 bg-slate-50/70 border-y border-slate-200/60 relative"
      aria-label="About Section"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">
            About Me
          </div>
          <h2
            id="about-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 leading-tight"
          >
            Engineering practical AI solutions with a foundational mindset.
          </h2>
        </div>

        {/* Narrative & Bio */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Story */}
          <div className="lg:col-span-7 space-y-4 text-base text-slate-600 leading-relaxed">
            <p className="text-lg sm:text-xl font-extrabold text-slate-900 leading-snug">
              {PERSONAL_INFO.shortIntro}
            </p>
            <p>
              As a second-year undergraduate pursuing a{' '}
              <strong className="text-slate-900 font-bold">
                B.Tech in Artificial Intelligence and Machine Learning
              </strong>
              , I am deeply invested in bridging computational principles with practical implementation. My daily work revolves around algorithmic problem-solving in Python and C, structured data analysis with SQL, and responsive interface prototyping.
            </p>
            <p>
              I believe high-impact AI systems rely not only on algorithms but also on clean data pipelines, robust software architecture, and intuitive user experiences. Having earned the{' '}
              <strong className="text-blue-600 font-bold">Microsoft Azure AZ-900 certification</strong>, I am actively integrating cloud computing practices into my development workflow.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-900 text-xs font-bold uppercase tracking-wider shadow-2xs">
                <GraduationCap className="w-4 h-4 text-blue-600" />
                <span>2nd Year B.Tech AI/ML</span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-900 text-xs font-bold uppercase tracking-wider shadow-2xs">
                <Code2 className="w-4 h-4 text-blue-600" />
                <span>Python & SQL Toolkit</span>
              </div>
            </div>
          </div>

          {/* Quick Snapshot Card */}
          <div className="lg:col-span-5">
            <div
              id="about-profile-card"
              className="bg-white rounded-2xl p-7 border border-slate-200/90 shadow-sm relative overflow-hidden"
            >
              <div className="flex items-center gap-4 pb-5 border-b border-slate-100">
                <div className="w-14 h-14 rounded-2xl bg-slate-900 text-white flex items-center justify-center font-black text-xl shadow-xs">
                  DV
                </div>
                <div>
                  <h3 className="font-black text-slate-900 text-xl tracking-tight">{PERSONAL_INFO.name}</h3>
                  <p className="text-xs font-bold text-blue-600 uppercase tracking-wide">{PERSONAL_INFO.title}</p>
                  <p className="text-xs font-medium text-slate-500 mt-0.5">B.Tech in Artificial Intelligence & ML</p>
                </div>
              </div>

              <div className="mt-5 space-y-3 text-xs">
                <div className="flex justify-between py-2 border-b border-slate-100">
                  <span className="text-slate-400 font-bold uppercase tracking-wider text-[10px]">Focus Area</span>
                  <span className="font-extrabold text-slate-900">Machine Learning & Analytics</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-100">
                  <span className="text-slate-400 font-bold uppercase tracking-wider text-[10px]">Core Languages</span>
                  <span className="font-extrabold text-slate-900">Python, C, SQL, JavaScript</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-100">
                  <span className="text-slate-400 font-bold uppercase tracking-wider text-[10px]">Cloud Foundation</span>
                  <span className="font-extrabold text-blue-600">Azure AZ-900 Certified</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-slate-400 font-bold uppercase tracking-wider text-[10px]">Status</span>
                  <span className="font-extrabold text-emerald-600 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    Open for Opportunities
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Feature Pillar Cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {highlights.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                id={item.id}
                className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-slate-300 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-900 flex items-center justify-center font-bold">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">
                      {item.badge}
                    </span>
                  </div>
                  <h3 className="text-base font-extrabold text-slate-900 mb-1.5">{item.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
