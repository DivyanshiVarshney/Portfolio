import React, { useState } from 'react';
import {
  Github,
  ExternalLink,
  BarChart3,
  TrendingUp,
  Code2,
  Sparkles,
  CheckCircle2,
  Users,
  Eye,
  ArrowUpRight,
  Database,
  Layers,
} from 'lucide-react';
import { PROJECTS, SOCIAL_LINKS } from '../data/portfolioData';

interface RepData {
  name: string;
  revenue: string;
  orders: number;
  aov: string;
  growth: string;
  status: string;
}

const REPRESENTATIVES: Record<string, RepData> = {
  'All Representatives (6)': {
    name: 'All Representatives (6)',
    revenue: '$541,120.75',
    orders: 366,
    aov: '$1,478.47',
    growth: '+34.2%',
    status: '5 / 6 Active',
  },
  'Sarah Jenkins': {
    name: 'Sarah Jenkins',
    revenue: '$142,850.00',
    orders: 98,
    aov: '$1,457.65',
    growth: '+41.8%',
    status: 'Top Performer',
  },
  'Marcus Vance': {
    name: 'Marcus Vance',
    revenue: '$118,420.00',
    orders: 79,
    aov: '$1,498.98',
    growth: '+28.3%',
    status: 'Active',
  },
  'Elena Rostova': {
    name: 'Elena Rostova',
    revenue: '$104,300.00',
    orders: 72,
    aov: '$1,448.61',
    growth: '+31.0%',
    status: 'Active',
  },
  'David Chen': {
    name: 'David Chen',
    revenue: '$92,150.00',
    orders: 61,
    aov: '$1,510.65',
    growth: '+22.4%',
    status: 'Active',
  },
  'Amara Okafor': {
    name: 'Amara Okafor',
    revenue: '$83,400.75',
    orders: 56,
    aov: '$1,489.30',
    growth: '+38.7%',
    status: 'Active',
  },
  'Lucas Thorne': {
    name: 'Lucas Thorne',
    revenue: '$0.00',
    orders: 0,
    aov: '$0.00',
    growth: '0.0%',
    status: 'On Leave',
  },
};

export const Projects: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'preview'>('overview');
  const [selectedRep, setSelectedRep] = useState<string>('All Representatives (6)');
  const [chartMode, setChartMode] = useState<'split' | 'revenue' | 'sales'>('split');

  const featuredProject = PROJECTS[0];
  const repStats = REPRESENTATIVES[selectedRep] || REPRESENTATIVES['All Representatives (6)'];

  return (
    <section
      id="projects"
      className="py-24 bg-slate-50/70 border-y border-slate-200/60 relative"
      aria-label="Projects Section"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl">
          <div className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">
            Featured Work
          </div>
          <h2
            id="projects-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900"
          >
            Projects & Practical Builds
          </h2>
          <p className="mt-3 text-base text-slate-600 font-normal">
            Applying algorithmic programming, real-time pipelines, and analytical data techniques to build intuitive enterprise tools.
          </p>
        </div>

        {/* Primary Featured Project Card */}
        <div className="mt-12">
          <div
            id={`project-card-${featuredProject.id}`}
            className="bg-white rounded-2xl border border-slate-200 shadow-md shadow-slate-200/40 overflow-hidden"
          >
            {/* Project Card Header Banner */}
            <div className="p-6 sm:p-8 border-b border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-blue-50 text-blue-700 border border-blue-100 uppercase tracking-widest">
                    Featured Project
                  </span>
                  <span className="text-xs text-slate-400 font-bold uppercase tracking-wider">
                    {featuredProject.category}
                  </span>
                </div>
                <h3
                  id="featured-project-title"
                  className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight"
                >
                  {featuredProject.title}
                </h3>
                <p className="text-sm text-slate-500 mt-1 font-semibold">
                  {featuredProject.tagline}
                </p>
              </div>

              {/* View Mode Toggle: Overview vs Interactive Preview */}
              <div className="flex items-center bg-slate-100 p-1.5 rounded-xl border border-slate-200 self-start md:self-auto">
                <button
                  type="button"
                  onClick={() => setActiveTab('overview')}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
                    activeTab === 'overview'
                      ? 'bg-white text-slate-900 shadow-2xs'
                      : 'text-slate-500 hover:text-slate-900'
                  }`}
                >
                  Overview
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('preview')}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all ${
                    activeTab === 'preview'
                      ? 'bg-slate-900 text-white shadow-2xs'
                      : 'text-slate-500 hover:text-slate-900'
                  }`}
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Interactive Preview</span>
                </button>
              </div>
            </div>

            {/* Project Content Body */}
            <div className="p-6 sm:p-8">
              {activeTab === 'overview' ? (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Left Column: Descriptions, Features & Tech Badges */}
                  <div className="lg:col-span-7 space-y-6">
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">
                        Project Overview
                      </h4>
                      <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-normal">
                        {featuredProject.description}
                      </p>
                    </div>

                    {/* Key Technical Features */}
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">
                        Key Capabilities & Architecture
                      </h4>
                      <div className="space-y-2.5">
                        {featuredProject.keyFeatures.map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800">
                            <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                            <span className="font-medium">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies Tag Group */}
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2.5">
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {featuredProject.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="inline-flex items-center px-3 py-1 rounded-lg text-xs font-bold font-mono bg-slate-100 text-slate-800 border border-slate-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Live Links & Key Metrics */}
                  <div className="lg:col-span-5 bg-slate-50 rounded-2xl p-6 border border-slate-200 space-y-6">
                    {/* Primary Action Links */}
                    <div className="space-y-3">
                      <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400">
                        Launch & Source Code
                      </h4>

                      {/* Live Demo Button */}
                      {featuredProject.liveDemoUrl && (
                        <a
                          id="project-live-demo-btn"
                          href={featuredProject.liveDemoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full flex items-center justify-between px-5 py-3.5 rounded-xl bg-blue-600 text-white text-xs font-bold uppercase tracking-wider hover:bg-blue-700 transition-colors shadow-xs shadow-blue-600/20 group"
                        >
                          <span className="flex items-center gap-2">
                            <span className="relative flex h-2 w-2">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
                              <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
                            </span>
                            <span>Open Live Web Application</span>
                          </span>
                          <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </a>
                      )}

                      {/* GitHub Repo Button */}
                      {featuredProject.repoUrl && (
                        <a
                          id="project-github-repo-btn"
                          href={featuredProject.repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full flex items-center justify-between px-5 py-3.5 rounded-xl bg-slate-900 text-white text-xs font-bold uppercase tracking-wider hover:bg-slate-800 transition-colors shadow-2xs group"
                        >
                          <span className="flex items-center gap-2">
                            <Github className="w-4 h-4" />
                            <span>View GitHub Repository</span>
                          </span>
                          <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                        </a>
                      )}
                    </div>

                    {/* Stack Highlights */}
                    <div className="pt-4 border-t border-slate-200">
                      <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">
                        Project Metrics
                      </h4>
                      <div className="grid grid-cols-1 gap-2.5">
                        {featuredProject.metrics?.map((m, idx) => (
                          <div
                            key={idx}
                            className="bg-white p-3.5 rounded-xl border border-slate-200 flex justify-between items-center text-xs"
                          >
                            <span className="text-slate-500 font-bold uppercase tracking-wider text-[10px]">{m.label}</span>
                            <span className="font-mono font-black text-slate-900 text-xs sm:text-sm">{m.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                /* Interactive Simulated Dashboard Mockup View matching user's real app */
                <div
                  id="project-mockup-visualizer"
                  className="bg-[#0B0F17] rounded-2xl p-4 sm:p-6 text-white border border-slate-800 shadow-2xl overflow-hidden"
                >
                  {/* Top Bar matching screenshot */}
                  <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-800/80">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center font-bold text-white text-sm">
                        ⚡
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-black text-white text-sm tracking-tight">Divyanshi</span>
                          <span className="text-xs font-bold text-blue-400">Sales Intelligence</span>
                          <span className="text-[9px] font-bold uppercase px-1.5 py-0.5 rounded bg-blue-950 border border-blue-800 text-blue-300">
                            Bento
                          </span>
                        </div>
                        <p className="text-[10px] text-slate-400 font-mono">Enterprise Analytics Engine</p>
                      </div>
                    </div>

                    {/* Status & Quick Actions */}
                    <div className="flex flex-wrap items-center gap-2">
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-950/80 border border-emerald-800/80 text-emerald-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        Supabase Live
                      </div>
                      <a
                        href={featuredProject.liveDemoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold bg-blue-600 hover:bg-blue-500 text-white transition-colors"
                      >
                        <span>Open Live Demo</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>

                  {/* Title & Live Pipeline Status */}
                  <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                          Sales Analytics Dashboard
                        </h4>
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-blue-500/20 text-blue-300 border border-blue-400/30">
                          ● Live Pipeline
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 mt-0.5 font-normal">
                        Real-time revenue metrics, representative leaderboards & data analytics
                      </p>
                    </div>

                    <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                      <span className="inline-flex items-center gap-1 text-emerald-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        Status: Supabase Active
                      </span>
                    </div>
                  </div>

                  {/* Representative Filter Tabs */}
                  <div className="mt-5 pt-3 border-t border-slate-800/60">
                    <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2 flex items-center gap-1.5">
                      <Users className="w-3 h-3 text-blue-400" />
                      Representative Filter:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {Object.keys(REPRESENTATIVES).map((repName) => (
                        <button
                          key={repName}
                          type="button"
                          onClick={() => setSelectedRep(repName)}
                          className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                            selectedRep === repName
                              ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/50 font-bold'
                              : 'bg-slate-900/90 text-slate-400 border border-slate-800 hover:text-white hover:border-slate-700'
                          }`}
                        >
                          ● {repName}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Metric KPI Cards matching user's layout */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 my-5">
                    {/* Revenue MTD */}
                    <div className="bg-slate-900/90 p-3.5 rounded-xl border border-slate-800">
                      <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                        Total Revenue (MTD)
                      </div>
                      <div className="text-lg sm:text-xl font-black font-mono mt-1 text-white tracking-tight">
                        {repStats.revenue}
                      </div>
                      <div className="text-[10px] text-emerald-400 font-bold mt-1">
                        +28.4% vs last mo
                      </div>
                    </div>

                    {/* Total Orders */}
                    <div className="bg-slate-900/90 p-3.5 rounded-xl border border-slate-800">
                      <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                        Total Orders
                      </div>
                      <div className="text-lg sm:text-xl font-black font-mono mt-1 text-white tracking-tight">
                        {repStats.orders}
                      </div>
                      <div className="text-[10px] text-emerald-400 font-bold mt-1">
                        +18 orders today
                      </div>
                    </div>

                    {/* Avg Order Value */}
                    <div className="bg-slate-900/90 p-3.5 rounded-xl border border-slate-800">
                      <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                        Avg Order Value
                      </div>
                      <div className="text-lg sm:text-xl font-black font-mono mt-1 text-white tracking-tight">
                        {repStats.aov}
                      </div>
                      <div className="text-[10px] text-cyan-400 font-bold mt-1">
                        Healthy Basket Size
                      </div>
                    </div>

                    {/* Growth % */}
                    <div className="bg-slate-900/90 p-3.5 rounded-xl border border-slate-800">
                      <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                        Growth % (Day)
                      </div>
                      <div className="text-lg sm:text-xl font-black font-mono mt-1 text-white tracking-tight">
                        {repStats.growth}
                      </div>
                      <div className="text-[10px] text-emerald-400 font-bold mt-1">
                        +21.6% vs prev day
                      </div>
                    </div>

                    {/* Best Sales Day */}
                    <div className="bg-slate-900/90 p-3.5 rounded-xl border border-slate-800">
                      <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                        Best Sales Day
                      </div>
                      <div className="text-lg sm:text-xl font-black font-mono mt-1 text-white tracking-tight">
                        $41,710.00
                      </div>
                      <div className="text-[10px] text-amber-400 font-bold mt-1">
                        May 15, 2026
                      </div>
                    </div>

                    {/* Active Reps */}
                    <div className="bg-slate-900/90 p-3.5 rounded-xl border border-slate-800">
                      <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                        Team Status
                      </div>
                      <div className="text-lg sm:text-xl font-black font-mono mt-1 text-white tracking-tight">
                        {repStats.status}
                      </div>
                      <div className="text-[10px] text-emerald-400 font-bold mt-1">
                        Active Pipeline
                      </div>
                    </div>
                  </div>

                  {/* Daily Performance Metrics & Chart Section */}
                  <div className="bg-slate-900/60 p-4 sm:p-5 rounded-xl border border-slate-800">
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-3 border-b border-slate-800">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-white">Daily Performance Metrics</span>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                            15 Days Tracked
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-400 font-normal mt-0.5">
                          Daily revenue trends and transaction volume cadence
                        </p>
                      </div>

                      {/* View Modes */}
                      <div className="flex items-center bg-slate-800 p-1 rounded-lg text-xs font-mono">
                        <button
                          type="button"
                          onClick={() => setChartMode('split')}
                          className={`px-2.5 py-1 rounded text-[11px] font-bold ${
                            chartMode === 'split' ? 'bg-cyan-500 text-slate-950' : 'text-slate-400'
                          }`}
                        >
                          Split View
                        </button>
                        <button
                          type="button"
                          onClick={() => setChartMode('revenue')}
                          className={`px-2.5 py-1 rounded text-[11px] font-bold ${
                            chartMode === 'revenue' ? 'bg-cyan-500 text-slate-950' : 'text-slate-400'
                          }`}
                        >
                          Revenue
                        </button>
                        <button
                          type="button"
                          onClick={() => setChartMode('sales')}
                          className={`px-2.5 py-1 rounded text-[11px] font-bold ${
                            chartMode === 'sales' ? 'bg-cyan-500 text-slate-950' : 'text-slate-400'
                          }`}
                        >
                          Volume
                        </button>
                      </div>
                    </div>

                    {/* Chart Visualization Simulation */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                      {/* Revenue Trend Wave */}
                      <div className="bg-slate-950/60 p-3.5 rounded-xl border border-slate-800/80">
                        <div className="flex items-center justify-between text-xs font-mono mb-2">
                          <span className="text-slate-300 font-bold flex items-center gap-1.5">
                            <TrendingUp className="w-3.5 h-3.5 text-cyan-400" />
                            Revenue Trend (Daily)
                          </span>
                          <span className="text-[10px] text-cyan-400 font-bold">Max: $45.0k/day</span>
                        </div>
                        <div className="h-24 flex items-end justify-between gap-1.5 pt-4">
                          {[32, 45, 28, 55, 62, 48, 70, 85, 64, 78, 92, 60, 82, 95, 88].map((val, idx) => (
                            <div key={idx} className="flex-1 flex flex-col items-center gap-1">
                              <div
                                style={{ height: `${val}%` }}
                                className="w-full bg-gradient-to-t from-cyan-600/40 to-cyan-400 rounded-t-xs hover:brightness-125 transition-all"
                              />
                            </div>
                          ))}
                        </div>
                        <div className="flex justify-between text-[9px] font-mono text-slate-500 mt-2 pt-1 border-t border-slate-900">
                          <span>Day 1</span>
                          <span>Day 8</span>
                          <span>Day 15</span>
                        </div>
                      </div>

                      {/* Sales Volume Distribution */}
                      <div className="bg-slate-950/60 p-3.5 rounded-xl border border-slate-800/80">
                        <div className="flex items-center justify-between text-xs font-mono mb-2">
                          <span className="text-slate-300 font-bold flex items-center gap-1.5">
                            <BarChart3 className="w-3.5 h-3.5 text-blue-400" />
                            Sales Volume Distribution
                          </span>
                          <span className="text-[10px] text-blue-400 font-bold">Cadence: ~24 orders/day</span>
                        </div>
                        <div className="h-24 flex items-end justify-between gap-1.5 pt-4">
                          {[40, 52, 35, 68, 75, 58, 80, 92, 70, 85, 98, 65, 88, 100, 92].map((val, idx) => (
                            <div key={idx} className="flex-1 flex flex-col items-center gap-1">
                              <div
                                style={{ height: `${val}%` }}
                                className="w-full bg-gradient-to-t from-blue-600/40 to-blue-400 rounded-t-xs hover:brightness-125 transition-all"
                              />
                            </div>
                          ))}
                        </div>
                        <div className="flex justify-between text-[9px] font-mono text-slate-500 mt-2 pt-1 border-t border-slate-900">
                          <span>Day 1</span>
                          <span>Day 8</span>
                          <span>Day 15</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Mockup footer with real links */}
                  <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400 font-mono">
                    <span className="text-[11px]">
                      Live Architecture: <strong className="text-white">Python + SQL + Supabase + Web App</strong>
                    </span>
                    <div className="flex items-center gap-3">
                      <a
                        href={featuredProject.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-white flex items-center gap-1"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>Source Code</span>
                      </a>
                      <a
                        href={featuredProject.liveDemoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-400 hover:text-cyan-300 font-bold flex items-center gap-1"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Launch App</span>
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Upcoming Work / Project Expansion Card */}
        <div
          id="upcoming-project-card"
          className="mt-6 bg-white rounded-2xl p-6 sm:p-8 border border-dashed border-slate-300 text-left flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-slate-100 text-slate-900 flex items-center justify-center shrink-0 mt-1 font-bold">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-700 mb-1.5">
                Upcoming Exploration
              </div>
              <h4 className="text-base font-black text-slate-900 tracking-tight">
                Machine Learning & AI Modeling Pipeline
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl font-normal">
                Currently exploring predictive algorithms, supervised classification architectures, and deep learning workflows as part of 2nd-year B.Tech coursework.
              </p>
            </div>
          </div>

          <a
            id="explore-github-placeholder-btn"
            href={SOCIAL_LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 text-white text-xs font-bold uppercase tracking-wider hover:bg-blue-600 transition-colors"
          >
            <Github className="w-4 h-4" />
            <span>Follow on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};
