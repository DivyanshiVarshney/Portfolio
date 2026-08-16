import React from 'react';
import {
  ArrowDown,
  Sparkles,
  ArrowRight,
  Mail,
  Linkedin,
  Github,
  Award,
  Terminal,
  Database,
  Cpu,
  ExternalLink,
} from 'lucide-react';
import { PERSONAL_INFO, SOCIAL_LINKS, ACHIEVEMENTS } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const el = document.getElementById(sectionId);
    if (el) {
      const offset = 80;
      const targetPos = el.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: targetPos, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[90vh] pt-32 pb-20 flex items-center justify-center overflow-hidden"
      aria-label="Hero Section"
    >
      {/* Background Subtle Gradient & Grid */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute -top-40 right-1/4 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -left-20 w-80 h-80 bg-indigo-100/40 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] opacity-60" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Text Content Column */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Status / Availability Pill */}
            <div
              id="hero-status-badge"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
              </span>
              <span>{PERSONAL_INFO.title}</span>
            </div>

            {/* Main Name Heading with Bold Typography */}
            <h1
              id="hero-name-heading"
              className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tighter text-slate-900 mb-2"
            >
              Divyanshi<br />
              <span className="text-blue-600">{PERSONAL_INFO.name.split(' ')[1] || 'Varshney'}</span>
            </h1>

            {/* Sub-headline */}
            <p
              id="hero-role-title"
              className="text-xl sm:text-2xl font-bold text-blue-600 tracking-tight mb-4"
            >
              {PERSONAL_INFO.roleFocus}
            </p>

            {/* Short Introduction */}
            <p
              id="hero-intro-text"
              className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl font-normal"
            >
              {PERSONAL_INFO.shortIntro}
            </p>

            {/* Education Quick Highlights Card */}
            <div className="p-5 sm:p-6 bg-slate-50 rounded-2xl border border-slate-100 my-6 w-full max-w-lg">
              <h3 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1.5">
                Education
              </h3>
              <p className="font-extrabold text-slate-900 text-sm sm:text-base">
                B.Tech in Artificial Intelligence & Machine Learning
              </p>
              <p className="text-xs font-semibold text-slate-500 mt-0.5">
                Second-Year Undergraduate Student
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
              <a
                id="hero-view-projects-btn"
                href="#projects"
                onClick={(e) => scrollToSection(e, 'projects')}
                className="flex-1 sm:flex-initial bg-slate-900 text-white py-3.5 px-7 rounded-xl text-center font-bold text-sm hover:bg-blue-600 active:scale-98 transition-colors shadow-xs focus:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-600"
              >
                View Projects
              </a>

              <a
                id="hero-contact-me-btn"
                href="#contact"
                onClick={(e) => scrollToSection(e, 'contact')}
                className="flex-1 sm:flex-initial bg-white border border-slate-200 text-slate-900 py-3.5 px-7 rounded-xl text-center font-bold text-sm hover:bg-slate-50 active:scale-98 transition-colors focus:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-600"
              >
                Contact Me
              </a>
            </div>

            {/* Social Links Row & Quick Highlights */}
            <div className="mt-8 pt-6 border-t border-slate-100 w-full flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                  Connect:
                </span>
                <a
                  id="hero-linkedin-link"
                  href={SOCIAL_LINKS.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-slate-400 uppercase tracking-wider hover:text-blue-600 transition-colors"
                >
                  LinkedIn
                </a>
                <a
                  id="hero-github-link"
                  href={SOCIAL_LINKS.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-slate-400 uppercase tracking-wider hover:text-slate-900 transition-colors"
                >
                  GitHub
                </a>
                <a
                  id="hero-email-link"
                  href={`mailto:${SOCIAL_LINKS.email}`}
                  className="text-xs font-bold text-slate-400 uppercase tracking-wider hover:text-blue-600 transition-colors"
                >
                  Email
                </a>
              </div>

              {/* Verified Badge preview */}
              <a
                id="hero-azure-badge-preview"
                href={ACHIEVEMENTS[0]?.credlyUrl || '#achievements'}
                target="_blank"
                rel="noopener noreferrer"
                title="Verify Microsoft Azure AZ-900 Certification on Credly"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-50 hover:bg-blue-100 text-blue-700 text-[11px] font-bold border border-blue-200 uppercase tracking-wider transition-colors shadow-2xs group"
              >
                <Award className="w-3.5 h-3.5 text-blue-600 group-hover:scale-110 transition-transform" />
                <span>Microsoft Azure AZ-900 Certified</span>
                <ExternalLink className="w-3 h-3 text-blue-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* AI/ML Visual Card Column */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div
              id="hero-interactive-card"
              className="w-full max-w-md bg-white rounded-2xl border border-slate-200/90 shadow-lg shadow-slate-200/50 p-6 relative overflow-hidden"
            >
              {/* Decorative Header Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-400" />
                  <div className="w-3 h-3 rounded-full bg-amber-400" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400" />
                  <span className="text-[11px] font-mono text-slate-600 ml-2 font-medium">
                    ml_workspace.py
                  </span>
                </div>
                <span className="inline-flex items-center gap-1 text-[11px] font-medium text-blue-700 bg-blue-50 px-2 py-0.5 rounded-md">
                  <Sparkles className="w-3 h-3 text-blue-600" />
                  AI / ML Core
                </span>
              </div>

              {/* Data & AI Node Schematic SVG */}
              <div className="my-5 relative rounded-xl bg-slate-900 p-5 text-slate-200 overflow-hidden font-mono text-xs shadow-inner">
                <div className="flex items-center justify-between text-slate-400 text-[11px] pb-2 border-b border-slate-800">
                  <span>INPUT: Data Pipeline</span>
                  <span className="text-emerald-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Active
                  </span>
                </div>

                <div className="py-3 space-y-2 text-slate-300">
                  <div className="flex items-center justify-between">
                    <span className="text-blue-400 flex items-center gap-1.5">
                      <Terminal className="w-3.5 h-3.5" /> Python / C Logic
                    </span>
                    <span className="text-slate-400 text-[11px]">Structured</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-amber-400 flex items-center gap-1.5">
                      <Database className="w-3.5 h-3.5" /> SQL Analytics
                    </span>
                    <span className="text-slate-400 text-[11px]">Queries & Schemas</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-indigo-400 flex items-center gap-1.5">
                      <Cpu className="w-3.5 h-3.5" /> Cloud Platform
                    </span>
                    <span className="text-slate-400 text-[11px]">Azure AZ-900</span>
                  </div>
                </div>

                {/* Minimalist Data Visual Graph */}
                <div className="mt-3 pt-3 border-t border-slate-800 flex items-end justify-between gap-1 h-12">
                  <div className="w-1/6 bg-blue-500/40 rounded-t h-4 hover:h-6 transition-all" />
                  <div className="w-1/6 bg-blue-500/60 rounded-t h-7 hover:h-9 transition-all" />
                  <div className="w-1/6 bg-blue-500/80 rounded-t h-5 hover:h-8 transition-all" />
                  <div className="w-1/6 bg-blue-600 rounded-t h-10 hover:h-11 transition-all" />
                  <div className="w-1/6 bg-indigo-500 rounded-t h-8 hover:h-10 transition-all" />
                  <div className="w-1/6 bg-emerald-500 rounded-t h-12 hover:h-12 transition-all" />
                </div>
              </div>

              {/* Quick stats footer */}
              <div className="grid grid-cols-2 gap-3 pt-1 text-left">
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="text-[11px] text-slate-600 font-medium">Primary Focus</div>
                  <div className="text-xs font-bold text-slate-800 mt-0.5">Machine Learning</div>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="text-[11px] text-slate-600 font-medium">Academic Year</div>
                  <div className="text-xs font-bold text-slate-800 mt-0.5">2nd Year B.Tech</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Scroll Down Prompt */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center text-slate-600 text-xs">
        <span className="text-[11px] font-medium tracking-wide mb-1">Scroll to explore</span>
        <ArrowDown className="w-3.5 h-3.5 animate-bounce text-slate-600" />
      </div>
    </section>
  );
};
