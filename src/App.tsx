import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Education } from './components/Education';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Achievements } from './components/Achievements';
import { ResumeSection } from './components/ResumeSection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ExamSeatModal } from './components/ExamSeatModal';

export default function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [isExamSeatModalOpen, setIsExamSeatModalOpen] = useState(false);

  useEffect(() => {
    // Sync theme class to html element
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  const handleOpenResume = () => {
    const resumeEl = document.getElementById('resume');
    if (resumeEl) {
      resumeEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-200 ${
      theme === 'dark' ? 'bg-slate-950 text-slate-100' : 'bg-white text-slate-900'
    }`}>
      {/* Sticky Navigation Bar */}
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        onOpenResumeModal={handleOpenResume}
      />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Section */}
        <Hero 
          theme={theme} 
          onOpenResumeModal={handleOpenResume} 
        />

        {/* 2. About Me Section */}
        <About 
          theme={theme} 
        />

        {/* 3. Education Section */}
        <Education 
          theme={theme} 
        />

        {/* 4. Skills Section */}
        <Skills 
          theme={theme} 
        />

        {/* 5. Projects Section (Including EXAMSEAT PRO) */}
        <Projects 
          theme={theme} 
          onOpenExamSeatModal={() => setIsExamSeatModalOpen(true)} 
        />

        {/* 6. Achievements / Certifications Section */}
        <Achievements 
          theme={theme} 
        />

        {/* 7. Resume Section */}
        <ResumeSection 
          theme={theme} 
        />

        {/* 8. Contact Section */}
        <Contact 
          theme={theme} 
        />
      </main>

      {/* 9. Footer */}
      <Footer 
        theme={theme} 
      />

      {/* Interactive ExamSeat Pro Modal Simulator */}
      <ExamSeatModal
        isOpen={isExamSeatModalOpen}
        onClose={() => setIsExamSeatModalOpen(false)}
        theme={theme}
      />
    </div>
  );
}
