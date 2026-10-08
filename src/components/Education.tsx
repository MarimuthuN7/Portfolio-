import React from 'react';
import { 
  GraduationCap, 
  Calendar, 
  MapPin, 
  Award, 
  BookOpen, 
  CheckCircle,
  Building2,
  FileCheck2
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface EducationProps {
  theme: 'dark' | 'light';
}

export const Education: React.FC<EducationProps> = ({ theme }) => {
  return (
    <section 
      id="education" 
      className={`py-20 border-t ${
        theme === 'dark' ? 'border-slate-800/80 bg-slate-950' : 'border-slate-200 bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="text-xs font-semibold text-indigo-400 tracking-wider uppercase mb-2">
            02. Academic Timeline
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Education
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl">
            Formal engineering grounding at SRM IST Trichy and solid foundational education.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="space-y-8">
          {PORTFOLIO_DATA.education.map((item, idx) => (
            <div
              key={idx}
              className={`relative rounded-2xl border p-6 sm:p-8 transition-all ${
                idx === 0 
                  ? theme === 'dark' 
                    ? 'bg-slate-900/60 border-indigo-500/30 shadow-lg shadow-indigo-950/20' 
                    : 'bg-indigo-50/40 border-indigo-200 shadow-sm'
                  : theme === 'dark'
                  ? 'bg-slate-900/40 border-slate-800'
                  : 'bg-white border-slate-200 shadow-xs'
              }`}
            >
              {/* Top Row: Degree & Key Tag */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200 dark:border-slate-800/80">
                <div className="flex items-start gap-3.5">
                  <div className={`p-3 rounded-xl shrink-0 ${
                    idx === 0 ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-300'
                  }`}>
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                        {item.degree}
                      </h3>
                      {idx === 0 && (
                        <span className="hidden sm:inline-flex text-[11px] font-mono text-indigo-400 font-semibold px-2 py-0.5 rounded bg-indigo-500/10 border border-indigo-500/20">
                          Active Degree
                        </span>
                      )}
                    </div>
                    <div className="text-sm sm:text-base font-semibold text-indigo-500 dark:text-indigo-400 mt-1 flex items-center gap-1.5">
                      <Building2 className="w-4 h-4" />
                      {item.institution}
                    </div>
                  </div>
                </div>

                {/* Score & Period Badging (Clean unboxed style) */}
                <div className="flex sm:flex-col items-start sm:items-end justify-between sm:justify-center gap-1">
                  <div className="flex items-center gap-1.5 text-xs font-mono text-slate-500 dark:text-slate-400">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{item.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-sm sm:text-base font-bold text-amber-500 dark:text-amber-400 tabular-nums">
                    <Award className="w-4 h-4" />
                    <span>{item.score}</span>
                  </div>
                  <div className="text-xs text-slate-400 flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    <span>{item.location}</span>
                  </div>
                </div>
              </div>

              {/* Description Body */}
              <p className="mt-4 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                {item.description}
              </p>

              {/* Coursework & Competency Matrix */}
              <div className="mt-6 pt-5 border-t border-slate-200 dark:border-slate-800/80 grid grid-cols-1 md:grid-cols-12 gap-6">
                
                {/* Core Courses */}
                <div className="md:col-span-7">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-indigo-400" />
                    Key Relevant Coursework
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {item.coursework.map((course, cIdx) => (
                      <span
                        key={cIdx}
                        className={`text-xs px-2.5 py-1 rounded-md border font-medium ${
                          theme === 'dark'
                            ? 'bg-slate-950/70 border-slate-800 text-slate-300'
                            : 'bg-white border-slate-200 text-slate-700 shadow-2xs'
                        }`}
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Academic Highlights */}
                <div className="md:col-span-5">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                    <FileCheck2 className="w-3.5 h-3.5 text-emerald-400" />
                    Academic Highlights
                  </h4>
                  <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                    {item.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Institution Info Card */}
        <div className={`mt-8 p-6 rounded-xl border flex flex-col md:flex-row items-start md:items-center justify-between gap-4 ${
          theme === 'dark' ? 'bg-slate-900/30 border-slate-800' : 'bg-slate-50 border-slate-200'
        }`}>
          <div>
            <h4 className="text-sm font-bold text-slate-900 dark:text-white">
              SRM Institute of Science and Technology (SRM IST), Trichy
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 max-w-2xl">
              Equipped with modern high-performance computing laboratories, active technical clubs, hackathon ecosystems, and industry-aligned curricula for Computer Science & Engineering.
            </p>
          </div>
          <div className="text-xs font-mono text-indigo-400 shrink-0">
            NAAC A++ Accredited University
          </div>
        </div>

      </div>
    </section>
  );
};
