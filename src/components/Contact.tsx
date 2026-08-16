import React, { useState } from 'react';
import {
  Mail,
  Linkedin,
  Github,
  Copy,
  Check,
  Send,
  ArrowUpRight,
  MessageSquare,
  Sparkles,
} from 'lucide-react';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(SOCIAL_LINKS.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleComposeMail = (e: React.FormEvent) => {
    e.preventDefault();
    const mailSubject = encodeURIComponent(
      subject || `Connecting with ${PERSONAL_INFO.name}`
    );
    const mailBody = encodeURIComponent(
      `Hello Divyanshi,\n\n${message || 'I came across your portfolio and would like to connect.'}\n\nBest regards,\n${name || 'A Portfolio Visitor'}`
    );
    window.location.href = `mailto:${SOCIAL_LINKS.email}?subject=${mailSubject}&body=${mailBody}`;
  };

  return (
    <section
      id="contact"
      className="py-24 bg-white relative"
      aria-label="Contact Section"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl">
          <div className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">
            Get in Touch
          </div>
          <h2
            id="contact-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900"
          >
            Let's Connect & Collaborate
          </h2>
          <p className="mt-3 text-base text-slate-600 font-normal">
            Open to internships, AI/ML discussions, open-source projects, and technical collaborations.
          </p>
        </div>

        {/* Main Contact Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Connection Channels */}
          <div className="lg:col-span-5 space-y-4">
            {/* Email Card */}
            <div
              id="contact-email-card"
              className="bg-slate-50 rounded-2xl p-6 border border-slate-200 shadow-2xs hover:border-slate-300 transition-all group"
            >
              <div className="flex items-start justify-between">
                <div className="w-11 h-11 rounded-xl bg-slate-900 text-white flex items-center justify-center font-bold">
                  <Mail className="w-5 h-5" />
                </div>
                <button
                  type="button"
                  id="copy-email-button"
                  onClick={copyEmailToClipboard}
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-900 hover:bg-slate-50 hover:text-blue-600 active:scale-95 transition-all shadow-2xs focus:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-600"
                  aria-label="Copy email address"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700 font-bold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-400" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <div className="mt-5">
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                  Direct Email
                </div>
                <a
                  id="direct-mailto-link"
                  href={`mailto:${SOCIAL_LINKS.email}`}
                  className="mt-1 block text-base font-black text-slate-900 hover:text-blue-600 transition-colors break-all"
                >
                  {SOCIAL_LINKS.email}
                </a>
              </div>
            </div>

            {/* LinkedIn Card */}
            <a
              id="contact-linkedin-card"
              href={SOCIAL_LINKS.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-slate-50 rounded-2xl p-6 border border-slate-200 shadow-2xs hover:border-slate-300 hover:shadow-md transition-all group"
            >
              <div className="flex items-start justify-between">
                <div className="w-11 h-11 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div className="p-2 rounded-lg text-slate-400 group-hover:text-blue-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              <div className="mt-5">
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                  Professional Network
                </div>
                <div className="text-base font-black text-slate-900 group-hover:text-blue-600 transition-colors mt-0.5">
                  linkedin.com/in/divyanshi-varshney
                </div>
              </div>
            </a>

            {/* GitHub Card */}
            <a
              id="contact-github-card"
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-slate-50 rounded-2xl p-6 border border-slate-200 shadow-2xs hover:border-slate-300 hover:shadow-md transition-all group"
            >
              <div className="flex items-start justify-between">
                <div className="w-11 h-11 rounded-xl bg-slate-900 text-white flex items-center justify-center font-bold">
                  <Github className="w-5 h-5" />
                </div>
                <div className="p-2 rounded-lg text-slate-400 group-hover:text-slate-900 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              <div className="mt-5">
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                  Open Source & Repositories
                </div>
                <div className="text-base font-black text-slate-900 group-hover:text-blue-600 transition-colors mt-0.5">
                  github.com/DivyanshiVarshney
                </div>
              </div>
            </a>
          </div>

          {/* Right Column: Quick Email Draft Composer */}
          <div className="lg:col-span-7">
            <div
              id="contact-composer-card"
              className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-2xs"
            >
              <div className="flex items-center gap-2 mb-2">
                <MessageSquare className="w-4 h-4 text-blue-600" />
                <h3 className="text-lg font-black text-slate-900">
                  Send a Direct Message
                </h3>
              </div>
              <p className="text-xs text-slate-500 mb-6 font-normal">
                Fill out the note below to launch your default email client with a pre-filled draft to Divyanshi.
              </p>

              <form onSubmit={handleComposeMail} className="space-y-4">
                <div>
                  <label
                    htmlFor="contact-sender-name"
                    className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5"
                  >
                    Your Name
                  </label>
                  <input
                    id="contact-sender-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Alex Smith"
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-900 text-xs font-medium placeholder:text-slate-400 focus:outline-hidden focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-subject"
                    className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5"
                  >
                    Subject
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="e.g. AI/ML Internship Opportunity or Project Inquiry"
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-900 text-xs font-medium placeholder:text-slate-400 focus:outline-hidden focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Write your note or project details here..."
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-900 text-xs font-medium placeholder:text-slate-400 focus:outline-hidden focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all resize-none"
                  />
                </div>

                <button
                  id="contact-send-draft-btn"
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 text-white font-bold text-xs uppercase tracking-wider hover:bg-blue-600 active:scale-98 transition-all shadow-xs focus:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-600"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Open in Email App</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
