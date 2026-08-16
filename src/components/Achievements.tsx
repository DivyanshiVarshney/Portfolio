import React from 'react';
import {
  Award,
  CheckCircle,
  ShieldCheck,
  ExternalLink,
  Sparkles,
  Cloud,
  Check,
  Layers,
  Lock,
  Server,
  ArrowUpRight,
} from 'lucide-react';
import { ACHIEVEMENTS } from '../data/portfolioData';

export const Achievements: React.FC = () => {
  const achievement = ACHIEVEMENTS[0];

  const skillDomains = [
    {
      title: 'Cloud Concepts',
      desc: 'High availability, scalability, elasticity, agility, fault tolerance, and CapEx vs OpEx models.',
      icon: Cloud,
    },
    {
      title: 'Azure Architecture & Core Services',
      desc: 'Regions, Availability Zones, Resource Groups, Virtual Machines, Containers, and Virtual Networks.',
      icon: Server,
    },
    {
      title: 'Security, Privacy & Compliance',
      desc: 'Microsoft Entra ID, Zero-Trust security principles, RBAC role-based access control, and defense-in-depth.',
      icon: Lock,
    },
    {
      title: 'Azure Management & Governance',
      desc: 'Cost Management, Azure Policy, Resource Locks, Azure Advisor, and monitoring tools.',
      icon: Layers,
    },
  ];

  return (
    <section
      id="achievements"
      className="py-24 bg-white relative"
      aria-label="Achievements and Certifications Section"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">
            Certifications & Recognition
          </div>
          <h2
            id="achievements-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900"
          >
            Professional Credentials
          </h2>
          <p className="mt-3 text-base text-slate-600 font-normal">
            Industry-standard certifications validating expertise in cloud architectures and foundational systems.
          </p>
        </div>

        {/* Premium Certificate-Style Card */}
        <div className="mt-12">
          <div
            id="achievement-azure-card"
            className="bg-slate-900 rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden border border-slate-800"
          >
            {/* Background Decorative Glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Details */}
              <div className="lg:col-span-8 space-y-6">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-blue-500/20 border border-blue-400/30 text-blue-300">
                    <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                    Verified Microsoft Credential
                  </span>
                  <span className="text-xs text-slate-400 font-mono font-semibold">
                    Issuer: {achievement.issuer}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">
                    Provider: Credly
                  </span>
                </div>

                <div>
                  <h3
                    id="achievement-card-title"
                    className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight"
                  >
                    {achievement.title}
                  </h3>
                  <p className="text-sm font-mono text-blue-400 mt-1 font-bold">
                    {achievement.code}
                  </p>
                </div>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl font-normal">
                  {achievement.description}
                </p>

                {/* Skills Measured Grid */}
                <div className="pt-1">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">
                    Validated Competency Areas
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {achievement.skillsMeasured.map((skill, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2.5 bg-slate-800/80 border border-slate-700/80 rounded-xl px-4 py-3 text-xs text-slate-200"
                      >
                        <Check className="w-4 h-4 text-emerald-400 shrink-0 font-bold" />
                        <span className="font-semibold">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Official Credly Proof Button */}
                {achievement.credlyUrl && (
                  <div className="pt-2 flex flex-wrap items-center gap-4">
                    <a
                      id="azure-credly-verification-btn"
                      href={achievement.credlyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md shadow-blue-600/30 group"
                    >
                      <ShieldCheck className="w-4 h-4 text-white" />
                      <span>Verify Credential on Credly</span>
                      <ExternalLink className="w-3.5 h-3.5 text-blue-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                    <span className="text-[11px] font-mono text-slate-400">
                      Badge ID: 01018178-d18c-49ea-b449-a3da39e680e4
                    </span>
                  </div>
                )}
              </div>

              {/* Right Certificate Graphic / Badge Column */}
              <div className="lg:col-span-4 flex flex-col items-center justify-center">
                {achievement.credlyUrl ? (
                  <a
                    id="azure-badge-credly-link"
                    href={achievement.credlyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View verified Microsoft Azure AZ-900 badge on Credly"
                    className="w-48 h-48 sm:w-56 sm:h-56 rounded-full bg-gradient-to-tr from-blue-600 to-sky-400 p-1.5 shadow-2xl shadow-blue-500/30 flex items-center justify-center relative group hover:scale-105 transition-transform cursor-pointer"
                  >
                    <div className="w-full h-full rounded-full bg-slate-950 flex flex-col items-center justify-center p-6 text-center border-4 border-slate-900 group-hover:border-blue-500/40 transition-colors">
                      <Award className="w-12 h-12 text-blue-400 mb-2 group-hover:scale-110 transition-transform" />
                      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest font-mono">
                        Microsoft Certified
                      </div>
                      <div className="text-base font-black text-white mt-1 leading-tight">
                        Azure Fundamentals
                      </div>
                      <div className="text-xs font-mono text-sky-400 mt-1 font-bold">
                        AZ-900
                      </div>
                      <div className="mt-2 text-[10px] font-bold text-blue-300 flex items-center gap-1 group-hover:underline">
                        <span>Credly Verified</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </div>
                    </div>
                  </a>
                ) : (
                  <div
                    id="azure-badge-visual"
                    className="w-48 h-48 sm:w-56 sm:h-56 rounded-full bg-gradient-to-tr from-blue-600 to-sky-400 p-1.5 shadow-2xl shadow-blue-500/30 flex items-center justify-center relative group"
                  >
                    <div className="w-full h-full rounded-full bg-slate-950 flex flex-col items-center justify-center p-6 text-center border-4 border-slate-900">
                      <Award className="w-12 h-12 text-blue-400 mb-2" />
                      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest font-mono">
                        Microsoft Certified
                      </div>
                      <div className="text-base font-black text-white mt-1 leading-tight">
                        Azure Fundamentals
                      </div>
                      <div className="text-xs font-mono text-sky-400 mt-1 font-bold">
                        AZ-900
                      </div>
                    </div>
                  </div>
                )}

                {/* Credential Status */}
                <div className="mt-6 text-center">
                  <a
                    href={achievement.credlyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-300 bg-slate-800/90 hover:bg-slate-800 hover:text-white px-4 py-2 rounded-full border border-slate-700 transition-colors"
                  >
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Official Credly Proof</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Breakdown of AZ-900 Subject Areas */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {skillDomains.map((domain, index) => {
            const Icon = domain.icon;
            return (
              <div
                key={index}
                className="bg-slate-50 rounded-2xl p-5 border border-slate-200 text-left hover:border-slate-300 transition-colors"
              >
                <div className="w-9 h-9 rounded-xl bg-slate-900 text-white flex items-center justify-center mb-3.5 font-bold">
                  <Icon className="w-4 h-4" />
                </div>
                <h4 className="text-xs font-extrabold text-slate-900 uppercase tracking-wide">{domain.title}</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed font-normal">{domain.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
