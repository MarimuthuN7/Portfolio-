import React, { useState } from 'react';
import { 
  Award, 
  CheckCircle, 
  Code, 
  Calendar, 
  Building, 
  Sparkles, 
  PlusCircle, 
  ExternalLink,
  Trophy
} from 'lucide-react';
import { PORTFOLIO_DATA, AchievementItem } from '../data/portfolioData';

interface AchievementsProps {
  theme: 'dark' | 'light';
}

export const Achievements: React.FC<AchievementsProps> = ({ theme }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Academic', 'Certification', 'Hackathon', 'Workshop'];

  const filteredAchievements = activeCategory === 'All'
    ? PORTFOLIO_DATA.achievements
    : PORTFOLIO_DATA.achievements.filter(a => a.category === activeCategory);

  return (
    <section 
      id="achievements" 
      className={`py-20 border-t ${
        theme === 'dark' ? 'border-slate-800/80 bg-slate-950/50' : 'border-slate-200 bg-slate-50/60'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-semibold text-indigo-400 tracking-wider uppercase mb-2">
              05. Milestones & Accolades
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Achievements & Certifications
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl">
              Academic honors, programming certifications, hackathon participation, and technical workshops.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-slate-200 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 shrink-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
                  activeCategory === cat
                    ? theme === 'dark'
                      ? 'bg-indigo-600 text-white font-semibold shadow-xs'
                      : 'bg-white text-indigo-700 font-semibold shadow-xs'
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

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAchievements.map((item) => (
            <div
              key={item.id}
              className={`rounded-2xl border p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 ${
                theme === 'dark'
                  ? 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                  : 'bg-white border-slate-200 hover:border-slate-300 shadow-2xs'
              }`}
            >
              <div className="space-y-3">
                {/* Header & Category */}
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono text-indigo-400 font-semibold uppercase tracking-wider">
                    {item.category}
                  </span>
                  <span className="text-xs font-mono text-slate-500 dark:text-slate-400 flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {item.date}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  {item.title}
                </h3>

                <p className="text-xs font-semibold text-indigo-500 dark:text-indigo-300 flex items-center gap-1.5">
                  <Building className="w-3.5 h-3.5 text-slate-400" />
                  {item.issuer}
                </p>

                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed pt-1">
                  {item.description}
                </p>
              </div>

              {/* Bottom Badge (Clean unboxed style) */}
              <div className="pt-4 mt-4 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between text-xs">
                <span className="flex items-center gap-1.5 text-amber-500 font-medium">
                  <Trophy className="w-3.5 h-3.5" />
                  {item.badge}
                </span>
                <span className="text-slate-500 text-[11px] font-mono">
                  Verified
                </span>
              </div>
            </div>
          ))}

          {/* Extensible Future Slot Card */}
          <div
            className={`rounded-2xl border border-dashed p-6 flex flex-col items-center justify-center text-center transition-all ${
              theme === 'dark'
                ? 'border-slate-800 bg-slate-900/20 text-slate-400'
                : 'border-slate-300 bg-slate-50/60 text-slate-600'
            }`}
          >
            <div className="w-10 h-10 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-3">
              <PlusCircle className="w-5 h-5" />
            </div>
            <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">
              Future Certifications & Contests
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 max-w-xs leading-relaxed">
              New hackathon wins, NPTEL/Coursera certifications, and symposium presentations will be added here as semester milestones progress.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
