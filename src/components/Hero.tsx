import React, { useState } from 'react';
import { 
  ArrowRight, 
  Download, 
  Mail, 
  MapPin, 
  GraduationCap, 
  Award, 
  Linkedin, 
  Phone, 
  Terminal, 
  Code2, 
  Sparkles,
  Copy,
  Check
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface HeroProps {
  theme: 'dark' | 'light';
  onOpenResumeModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ theme, onOpenResumeModal }) => {
  const [activeCodeTab, setActiveCodeTab] = useState<'java' | 'cpp' | 'python'>('java');
  const [copiedCode, setCopiedCode] = useState(false);

  const codeSnippets = {
    java: `// MariMuthu.java
public class StudentProfile {
    String name = "Mari Muthu N";
    String degree = "B.Tech CSE (2nd Year)";
    String university = "SRM IST Trichy";
    double cgpa = 8.02;
    String[] coreSkills = {"Java", "C++", "C", "Python"};
    
    public void passion() {
        System.out.println("Building innovative tech solutions & solving DSA challenges.");
    }
}`,
    cpp: `// MariMuthu.cpp
#include <iostream>
#include <vector>

struct Developer {
    std::string name = "Mari Muthu N";
    std::string college = "SRM IST, Trichy";
    float cgpa = 8.02;
    std::vector<std::string> stack = {"C++", "Java", "Python", "DSA"};
    
    void mission() {
        std::cout << "Optimizing algorithmic solutions & building software\\n";
    }
};`,
    python: `# marimuthu.py
class StudentDeveloper:
    name: str = "Mari Muthu N"
    degree: str = "B.Tech Computer Science & Eng"
    college: str = "SRM Institute of Sci & Tech, Trichy"
    cgpa: float = 8.02
    skills: list = ["Python", "Java", "C++", "C"]
    
    def status(self) -> str:
        return "Ready for software engineering internships!"`
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(codeSnippets[activeCodeTab]);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-[92vh] flex items-center pt-24 pb-16 overflow-hidden"
    >
      {/* Background Animated Tech Gradients & Grid Pattern */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div 
          className={`absolute top-1/4 -left-48 w-96 h-96 rounded-full blur-3xl opacity-20 ${
            theme === 'dark' ? 'bg-indigo-600' : 'bg-indigo-300'
          }`} 
        />
        <div 
          className={`absolute bottom-1/4 -right-48 w-96 h-96 rounded-full blur-3xl opacity-20 ${
            theme === 'dark' ? 'bg-cyan-600' : 'bg-cyan-300'
          }`} 
        />
        
        {/* Subtle SVG Grid overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
            backgroundSize: '36px 36px'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Introduction & Primary CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Clean unboxed status line (Zero-pill discipline) */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-slate-400">
              <span className="flex items-center gap-1.5 text-indigo-400 font-semibold">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                Available for Summer 2026 / 2027 Internships
              </span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="flex items-center gap-1 text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-slate-500" />
                {PORTFOLIO_DATA.personal.location}
              </span>
            </div>

            {/* Main Greeting & Title */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-indigo-500 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                  {PORTFOLIO_DATA.personal.name}
                </span>
              </h1>
              
              <h2 className="text-xl sm:text-2xl font-semibold text-slate-700 dark:text-slate-200">
                {PORTFOLIO_DATA.personal.role}
              </h2>
            </div>

            {/* Professional Summary */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl text-balance">
              {PORTFOLIO_DATA.personal.tagline}
            </p>

            {/* Quick Unboxed Metadata Separators */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400 pt-1 border-y border-slate-200 dark:border-slate-800/80 py-3 w-full">
              <span className="flex items-center gap-1.5 text-slate-700 dark:text-slate-200 font-semibold">
                <GraduationCap className="w-4 h-4 text-indigo-400" />
                SRM IST, Trichy
              </span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>2nd Year CSE</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="flex items-center gap-1 text-amber-500 font-bold tabular-nums">
                <Award className="w-4 h-4" />
                CGPA: {PORTFOLIO_DATA.personal.cgpa}
              </span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-indigo-400 font-medium">Java · C · C++ · Python</span>
            </div>

            {/* Buttons Group (View Projects, Download Resume, Contact Me) */}
            <div className="flex flex-wrap items-center gap-3 pt-2 w-full sm:w-auto">
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 shadow-md shadow-indigo-600/20 hover:shadow-indigo-600/30 transition-all group"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={onOpenResumeModal}
                className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold transition-all border ${
                  theme === 'dark'
                    ? 'bg-slate-900/90 hover:bg-slate-800 text-slate-100 border-slate-700 shadow-xs'
                    : 'bg-white hover:bg-slate-50 text-slate-800 border-slate-300 shadow-xs'
                }`}
              >
                <Download className="w-4 h-4 text-indigo-400" />
                <span>Download Resume</span>
              </button>

              <a
                href="#contact"
                className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold transition-all border ${
                  theme === 'dark'
                    ? 'bg-slate-950/60 hover:bg-slate-900 text-slate-300 border-slate-800 hover:text-white'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-200 hover:text-slate-950'
                }`}
              >
                <Mail className="w-4 h-4 text-slate-400" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social & Contact Direct Links */}
            <div className="flex items-center gap-4 pt-1">
              <a
                href={PORTFOLIO_DATA.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-medium text-slate-400 hover:text-indigo-400 flex items-center gap-1.5 transition-colors"
                aria-label="LinkedIn profile"
              >
                <Linkedin className="w-4 h-4 text-blue-500" />
                <span>LinkedIn</span>
              </a>
              <span className="text-slate-600">·</span>
              <a
                href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                className="text-xs font-medium text-slate-400 hover:text-indigo-400 flex items-center gap-1.5 transition-colors"
              >
                <Mail className="w-4 h-4 text-emerald-400" />
                <span>{PORTFOLIO_DATA.personal.email}</span>
              </a>
              <span className="text-slate-600">·</span>
              <a
                href={`tel:${PORTFOLIO_DATA.personal.phone}`}
                className="text-xs font-medium text-slate-400 hover:text-indigo-400 flex items-center gap-1.5 transition-colors"
              >
                <Phone className="w-4 h-4 text-cyan-400" />
                <span>+91 {PORTFOLIO_DATA.personal.phone}</span>
              </a>
            </div>

          </div>

          {/* Right Column: Visual Portrait Card & Interactive Code Terminal */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Portrait Frame with Developer Accent */}
            <div className="relative group mx-auto w-full max-w-sm sm:max-w-md">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-indigo-500 via-cyan-500 to-indigo-600 opacity-30 blur-lg group-hover:opacity-50 transition-opacity duration-500" />
              
              <div className={`relative rounded-2xl overflow-hidden border p-3 ${
                theme === 'dark' ? 'bg-slate-900/90 border-slate-800' : 'bg-white border-slate-200 shadow-xl'
              }`}>
                <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-slate-900">
                  <img
                    src={PORTFOLIO_DATA.personal.avatarImage}
                    alt="Mari Muthu N - B.Tech CSE Student, SRM IST Trichy"
                    className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      // Fallback if image load fails
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  {/* Subtle Gradient Scrim at Bottom of Photo */}
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent flex items-end p-4">
                    <div>
                      <p className="text-white font-bold text-lg drop-shadow-sm">{PORTFOLIO_DATA.personal.name}</p>
                      <p className="text-xs text-indigo-300 font-medium">B.Tech CSE · SRM IST Trichy</p>
                    </div>
                  </div>
                </div>

                {/* Sub-card quick stats */}
                <div className="grid grid-cols-3 gap-2 mt-3 pt-3 border-t border-slate-200 dark:border-slate-800/80 text-center">
                  <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-950/60">
                    <span className="block text-xs text-slate-500 dark:text-slate-400 font-medium">Degree</span>
                    <span className="block text-xs font-bold text-slate-800 dark:text-slate-100">B.Tech CSE</span>
                  </div>
                  <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-950/60">
                    <span className="block text-xs text-slate-500 dark:text-slate-400 font-medium">Year</span>
                    <span className="block text-xs font-bold text-slate-800 dark:text-slate-100">2nd Year</span>
                  </div>
                  <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-950/60">
                    <span className="block text-xs text-slate-500 dark:text-slate-400 font-medium">CGPA</span>
                    <span className="block text-xs font-bold text-indigo-500 dark:text-indigo-400 tabular-nums">8.02 / 10</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Developer Code Card */}
            <div className={`rounded-xl border overflow-hidden shadow-lg ${
              theme === 'dark' ? 'bg-slate-950/90 border-slate-800' : 'bg-slate-900 border-slate-800 text-white'
            }`}>
              {/* Window Header */}
              <div className="flex items-center justify-between px-3.5 py-2.5 bg-slate-900 border-b border-slate-800">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                  <span className="ml-2 text-[11px] font-mono text-slate-400 flex items-center gap-1">
                    <Terminal className="w-3 h-3 text-slate-500" />
                    student-profile.sh
                  </span>
                </div>

                {/* Language Switcher Tabs */}
                <div className="flex items-center gap-1">
                  {(['java', 'cpp', 'python'] as const).map((lang) => (
                    <button
                      key={lang}
                      onClick={() => setActiveCodeTab(lang)}
                      className={`px-2 py-0.5 text-[10px] font-mono rounded transition-colors ${
                        activeCodeTab === lang
                          ? 'bg-indigo-600 text-white font-semibold'
                          : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
                      }`}
                    >
                      {lang === 'cpp' ? 'C++' : lang.toUpperCase()}
                    </button>
                  ))}
                  
                  <button
                    onClick={handleCopyCode}
                    className="ml-1 p-1 text-slate-400 hover:text-white rounded hover:bg-slate-800"
                    title="Copy code"
                    aria-label="Copy code snippet"
                  >
                    {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              {/* Code Editor Body */}
              <div className="p-3.5 font-mono text-xs overflow-x-auto text-slate-300 leading-relaxed max-h-44 scrollbar-thin">
                <pre>
                  <code>{codeSnippets[activeCodeTab]}</code>
                </pre>
              </div>

              {/* Terminal Footer Bar */}
              <div className="px-3.5 py-1.5 bg-slate-900/60 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span className="flex items-center gap-1 text-emerald-400">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Build: Success
                </span>
                <span>UTF-8 · Tab Size: 4</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
