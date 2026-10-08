import React from 'react';
import { 
  Code, 
  Brain, 
  Layers, 
  Lightbulb, 
  Award, 
  MapPin, 
  BookOpen, 
  Sparkles,
  CheckCircle2,
  Cpu
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface AboutProps {
  theme: 'dark' | 'light';
}

export const About: React.FC<AboutProps> = ({ theme }) => {
  const pillars = [
    {
      icon: <Brain className="w-5 h-5 text-indigo-400" />,
      title: 'Problem-Solving Mindset',
      description: 'Systematic breakdown of computing problems through algorithmic reasoning, time-space efficiency analysis, and robust edge-case handling in C++ and Java.',
    },
    {
      icon: <Layers className="w-5 h-5 text-cyan-400" />,
      title: 'Object-Oriented Architecture',
      description: 'Writing structured, modular, and maintainable software based on OOP principles (encapsulation, abstraction, inheritance, and clean class relationships).',
    },
    {
      icon: <Code className="w-5 h-5 text-emerald-400" />,
      title: 'Software Development',
      description: 'Hands-on creation of functional desktop and web solutions, including our flagship examination hall allocation and seat finder platform (ExamSeat Pro).',
    },
    {
      icon: <Lightbulb className="w-5 h-5 text-amber-400" />,
      title: 'Passion for New Technologies',
      description: 'Continuously expanding competencies across modern computer science disciplines, developer tooling, version control, and emerging software paradigms.',
    },
  ];

  return (
    <section 
      id="about" 
      className={`py-20 border-t ${
        theme === 'dark' ? 'border-slate-800/80 bg-slate-950/40' : 'border-slate-200 bg-slate-50/50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="text-xs font-semibold text-indigo-400 tracking-wider uppercase mb-2">
            01. Background & Profile
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            About Me
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl">
            A snapshot of my engineering journey at SRM IST Trichy, academic grounding, and programming ethos.
          </p>
        </div>

        {/* 2-Column Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Narrative & Key Profile Highlights */}
          <div className="lg:col-span-7 space-y-6">
            <div className={`p-6 sm:p-8 rounded-2xl border ${
              theme === 'dark' ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
            }`}>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <Cpu className="w-5 h-5 text-indigo-400" />
                Undergraduate in Computer Science & Engineering
              </h3>

              <div className="space-y-4 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                <p>
                  I am <strong className="text-slate-900 dark:text-white font-semibold">Mari Muthu N</strong>, currently in my <strong className="text-indigo-400 font-semibold">2nd year</strong> of B.Tech in Computer Science and Engineering at <strong className="text-slate-900 dark:text-white font-semibold">SRM Institute of Science and Technology, Trichy</strong>.
                </p>
                <p>
                  With a current cumulative GPA of <strong className="text-amber-400 font-bold tabular-nums">8.02 / 10</strong>, I balance academic excellence with rigorous hands-on programming practice. My technical pursuits are centered around <span className="text-slate-900 dark:text-white font-medium">software development, algorithmic problem solving, and object-oriented architecture</span>.
                </p>
                <p>
                  Originally from <strong className="text-slate-900 dark:text-white font-semibold">Thoothukudi, Tamil Nadu</strong>, I bring a grounded dedication to continuous learning. Whether mastering data structures in C++ and Java or designing practical campus utilities, I focus on building technology that solves genuine human bottlenecks with simplicity and reliability.
                </p>
              </div>

              {/* Unboxed Bulleted Competencies */}
              <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-800/80 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                <div className="flex items-center gap-2 text-slate-700 dark:text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>SRM IST Trichy CSE (2023 - 2027)</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700 dark:text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Strong Academic Record (8.02 CGPA)</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700 dark:text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Proficiency in Java, C, C++, Python</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700 dark:text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Project Lead on ExamSeat Pro</span>
                </div>
              </div>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className={`p-4 rounded-xl border text-center ${
                theme === 'dark' ? 'bg-slate-900/40 border-slate-800/80' : 'bg-white border-slate-200 shadow-xs'
              }`}>
                <div className="text-2xl font-extrabold text-indigo-400 tabular-nums">8.02</div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">Current CGPA</div>
              </div>

              <div className={`p-4 rounded-xl border text-center ${
                theme === 'dark' ? 'bg-slate-900/40 border-slate-800/80' : 'bg-white border-slate-200 shadow-xs'
              }`}>
                <div className="text-2xl font-extrabold text-cyan-400 tabular-nums">2nd</div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">B.Tech Year</div>
              </div>

              <div className={`p-4 rounded-xl border text-center ${
                theme === 'dark' ? 'bg-slate-900/40 border-slate-800/80' : 'bg-white border-slate-200 shadow-xs'
              }`}>
                <div className="text-2xl font-extrabold text-emerald-400 tabular-nums">4+</div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">Core Languages</div>
              </div>

              <div className={`p-4 rounded-xl border text-center ${
                theme === 'dark' ? 'bg-slate-900/40 border-slate-800/80' : 'bg-white border-slate-200 shadow-xs'
              }`}>
                <div className="text-2xl font-extrabold text-amber-400 tabular-nums">120+</div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">DSA Problems Solved</div>
              </div>
            </div>

          </div>

          {/* Right Column: 4 Core Pillars */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-base font-semibold text-slate-800 dark:text-slate-200 mb-2">
              Core Engineering Focus
            </h3>

            {pillars.map((pillar, idx) => (
              <div
                key={idx}
                className={`p-5 rounded-xl border transition-all hover:translate-x-1 ${
                  theme === 'dark'
                    ? 'bg-slate-900/40 border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/70'
                    : 'bg-white border-slate-200 hover:border-slate-300 shadow-xs'
                }`}
              >
                <div className="flex items-start gap-3.5">
                  <div className={`p-2.5 rounded-lg shrink-0 ${
                    theme === 'dark' ? 'bg-slate-800/70' : 'bg-slate-100'
                  }`}>
                    {pillar.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                      {pillar.title}
                    </h4>
                    <p className="mt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
