import React, { useState } from 'react';
import { 
  Code2, 
  Terminal, 
  Cpu, 
  Layers, 
  GitBranch, 
  CheckCircle,
  FileCode,
  Zap,
  Sparkles
} from 'lucide-react';
import { PORTFOLIO_DATA, SkillItem } from '../data/portfolioData';

interface SkillsProps {
  theme: 'dark' | 'light';
}

export const Skills: React.FC<SkillsProps> = ({ theme }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeSkillModal, setActiveSkillModal] = useState<SkillItem | null>(null);

  const categories = [
    'All',
    'Programming',
    'Problem Solving',
    'Object-Oriented Programming',
    'Data Structures & Algorithms',
    'Software Development',
  ];

  const filteredSkills = selectedCategory === 'All'
    ? PORTFOLIO_DATA.skills
    : PORTFOLIO_DATA.skills.filter(s => s.category === selectedCategory);

  // The 4 core prompt programming skills highlighted
  const coreLanguages = [
    {
      name: 'Java',
      level: 88,
      desc: 'Robust Object-Oriented software engineering, Collections Framework, Exception Handling, multithreading fundamentals, modular packages, and JVM architecture.',
      highlight: 'Core strength in university projects & ExamSeat Pro design',
      color: 'from-amber-500 to-orange-600',
      badge: 'Advanced Core',
    },
    {
      name: 'C++',
      level: 85,
      desc: 'Standard Template Library (STL vectors, maps, queues, iterators), algorithmic problem solving, time complexity optimization, and object modeling.',
      highlight: 'Competitive programming & DSA implementations',
      color: 'from-blue-500 to-indigo-600',
      badge: 'DSA & STL',
    },
    {
      name: 'C',
      level: 82,
      desc: 'Low-level procedural programming, pointer arithmetic, manual memory allocation (malloc/calloc/free), struct manipulation, and hardware-near logic.',
      highlight: 'Deep foundational systems understanding',
      color: 'from-cyan-500 to-blue-600',
      badge: 'Systems Base',
    },
    {
      name: 'Python',
      level: 80,
      desc: 'Algorithmic prototyping, string & array data manipulation, automated scripting, clean functional workflows, and data processing tasks.',
      highlight: 'Rapid problem solving & scripting logic',
      color: 'from-emerald-500 to-teal-600',
      badge: 'Scripting & Prototyping',
    },
  ];

  return (
    <section 
      id="skills" 
      className={`py-20 border-t ${
        theme === 'dark' ? 'border-slate-800/80 bg-slate-950/60' : 'border-slate-200 bg-slate-50/70'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="text-xs font-semibold text-indigo-400 tracking-wider uppercase mb-2">
            03. Technical Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Programming & Core Skills
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl">
            A comprehensive matrix of programming languages, computational foundations, and engineering methodologies.
          </p>
        </div>

        {/* Featured Core Languages Showcase (Java, C, C++, Python) */}
        <div className="mb-14">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Terminal className="w-5 h-5 text-indigo-400" />
              Core Programming Languages
            </h3>
            <span className="text-xs font-mono text-slate-400">
              Proficiency Benchmark
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreLanguages.map((lang, idx) => (
              <div
                key={idx}
                className={`relative rounded-2xl border p-5 transition-all duration-300 hover:-translate-y-1 ${
                  theme === 'dark' 
                    ? 'bg-slate-900/70 border-slate-800 hover:border-slate-700 hover:shadow-lg hover:shadow-black/40' 
                    : 'bg-white border-slate-200 hover:border-slate-300 shadow-xs'
                }`}
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2.5">
                    <div className={`w-8 h-8 rounded-lg bg-gradient-to-tr ${lang.color} flex items-center justify-center text-white font-bold text-xs shadow-xs`}>
                      {lang.name === 'C++' ? 'C++' : lang.name[0]}
                    </div>
                    <h4 className="text-lg font-extrabold text-slate-900 dark:text-white">
                      {lang.name}
                    </h4>
                  </div>
                  <span className="text-xs font-mono text-indigo-400 tabular-nums font-semibold">
                    {lang.level}%
                  </span>
                </div>

                {/* Progress Indicator */}
                <div className="w-full bg-slate-200 dark:bg-slate-800 h-2 rounded-full overflow-hidden mb-3">
                  <div 
                    className={`h-full bg-gradient-to-r ${lang.color} rounded-full transition-all duration-1000`}
                    style={{ width: `${lang.level}%` }}
                  />
                </div>

                {/* Description */}
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-3 min-h-[60px]">
                  {lang.desc}
                </p>

                {/* Unboxed Highlight */}
                <div className="pt-2 border-t border-slate-200 dark:border-slate-800/80 text-[11px] text-slate-500 dark:text-slate-400 flex items-center gap-1.5 font-medium">
                  <Zap className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span className="truncate">{lang.highlight}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Categories Section with Interactive Filter Tabs */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Layers className="w-5 h-5 text-indigo-400" />
              Categorized Skill Set
            </h3>

            {/* Segmented Filter Control */}
            <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-slate-200 dark:bg-slate-900/90 border border-slate-300 dark:border-slate-800">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1 text-xs font-medium rounded-lg transition-all whitespace-nowrap ${
                    selectedCategory === cat
                      ? theme === 'dark'
                        ? 'bg-indigo-600 text-white shadow-xs font-semibold'
                        : 'bg-white text-indigo-700 shadow-xs font-semibold'
                      : theme === 'dark'
                      ? 'text-slate-400 hover:text-white'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Categorized Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredSkills.map((skill, sIdx) => (
              <div
                key={sIdx}
                className={`p-5 rounded-xl border transition-all ${
                  theme === 'dark'
                    ? 'bg-slate-900/40 border-slate-800/80 hover:border-slate-700'
                    : 'bg-white border-slate-200 shadow-2xs hover:border-slate-300'
                }`}
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div>
                    <h4 className="text-base font-bold text-slate-900 dark:text-white">
                      {skill.name}
                    </h4>
                    <span className="text-xs font-mono text-indigo-400">
                      {skill.category}
                    </span>
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-700 dark:text-slate-300 tabular-nums">
                    {skill.level}%
                  </span>
                </div>

                {/* Progress bar */}
                <div className="w-full bg-slate-200 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden mb-3">
                  <div
                    className="h-full bg-indigo-500 rounded-full"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-3">
                  {skill.description}
                </p>

                {/* Clean unboxed tags with dot separators */}
                <div className="flex flex-wrap items-center gap-1.5 text-[11px] font-mono text-slate-500 dark:text-slate-400 pt-2 border-t border-slate-200 dark:border-slate-800/60">
                  {skill.tags.map((tag, tIdx) => (
                    <React.Fragment key={tIdx}>
                      <span>{tag}</span>
                      {tIdx < skill.tags.length - 1 && <span className="text-slate-600">·</span>}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Computer Science Pillars Footer Card */}
        <div className={`mt-10 p-6 rounded-2xl border ${
          theme === 'dark' ? 'bg-slate-900/30 border-slate-800' : 'bg-indigo-50/50 border-indigo-100'
        }`}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-indigo-400 font-semibold mb-1">
                Data Structures & Algorithms
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Arrays, Trees, Graphs, Sorting algorithms, Binary Search, Space & Time Complexity Analysis.
              </p>
            </div>
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-indigo-400 font-semibold mb-1">
                Software Engineering
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                SOLID Principles, Modular Architecture, Git Source Control, Clean Code Standards.
              </p>
            </div>
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-indigo-400 font-semibold mb-1">
                Academic Progress
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                SRM IST Trichy 2nd Year CSE · 8.02 CGPA · Continuous Hands-On Engineering.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
