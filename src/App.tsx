import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Achievements } from './components/Achievements';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div id="portfolio-app-root" className="min-h-screen flex flex-col bg-[#fcfdfd] text-slate-800 antialiased selection:bg-blue-100 selection:text-blue-900">
      {/* Sticky Header Navigation */}
      <Navbar />

      {/* Main Portfolio Sections */}
      <main id="main-content" className="flex-1">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. About Section */}
        <About />

        {/* 3. Skills Section */}
        <Skills />

        {/* 4. Projects Section */}
        <Projects />

        {/* 5. Achievements Section */}
        <Achievements />

        {/* 6. Education Section */}
        <Education />

        {/* 7. Contact Section */}
        <Contact />
      </main>

      {/* 8. Minimalist Footer */}
      <Footer />
    </div>
  );
}
