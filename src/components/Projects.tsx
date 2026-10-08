import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  Github, 
  CheckCircle, 
  Sparkles, 
  Layers, 
  Play, 
  Clock, 
  Compass,
  ArrowRight
} from 'lucide-react';
import { PORTFOLIO_DATA, Project } from '../data/portfolioData';

interface ProjectsProps {
  theme: 'dark' | 'light';
  onOpenExamSeatModal: () => void;
}

export const Projects: React.FC<ProjectsProps> = ({ theme, onOpenExamSeatModal }) => {
  const [filter, setFilter] = useState<'All' | 'Featured' | 'Systems'>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const displayedProjects = PORTFOLIO_DATA.projects.filter(p => {
    if (filter === 'Featured') return p.featured;
    if (filter === 'Systems') return p.technologies.some(t => ['Java', 'C++', 'Data Structures'].includes(t));
    return true;
  });

  return (
    <section 
      id="projects" 
      className={`py-20 border-t ${
        theme === 'dark' ? 'border-slate-800/80 bg-slate-950' : 'border-slate-200 bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-semibold text-indigo-400 tracking-wider uppercase mb-2">
              04. Software Engineering & Projects
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Featured Projects
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl">
              Practical software systems, algorithmic workbenches, and campus utility applications.
            </p>
          </div>

          {/* Filter Segmented Control */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 shrink-0">
            {(['All', 'Featured', 'Systems'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
                  filter === tab
                    ? theme === 'dark'
                      ? 'bg-indigo-600 text-white font-semibold shadow-xs'
                      : 'bg-white text-indigo-700 font-semibold shadow-xs'
                    : theme === 'dark'
                    ? 'text-slate-400 hover:text-white'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {tab === 'All' ? 'All Projects' : tab === 'Featured' ? 'Featured Only' : 'Core Systems'}
              </button>
            ))}
          </div>
        </div>

        {/* Primary Flagship Spotlight: EXAMSEAT PRO */}
        <div className="mb-14">
          <div 
            className={`rounded-3xl border overflow-hidden transition-all duration-300 ${
              theme === 'dark'
                ? 'bg-gradient-to-br from-slate-900/90 via-slate-900/50 to-slate-950 border-indigo-500/30 shadow-xl shadow-indigo-950/20'
                : 'bg-gradient-to-br from-indigo-50/70 via-white to-slate-50 border-indigo-200 shadow-md'
            }`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-10">
              
              {/* Left Column: Project Overview */}
              <div className="lg:col-span-7 space-y-5">
                {/* Clean unboxed kicker */}
                <div className="flex items-center gap-2 text-xs font-mono text-indigo-400">
                  <span className="font-bold uppercase tracking-wider">Flagship University Project</span>
                  <span aria-hidden="true">·</span>
                  <span className="text-emerald-400 flex items-center gap-1 font-medium">
                    <CheckCircle className="w-3.5 h-3.5" />
                    Completed & Validated
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white">
                    EXAMSEAT PRO
                  </h3>
                  <h4 className="text-base sm:text-lg font-semibold text-indigo-500 dark:text-indigo-400 mt-1">
                    Smart Examination Seat Allocation & Hall Finder
                  </h4>
                </div>

                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  A smart system designed to simplify examination seat allocation and hall navigation. Helps students rapidly locate their examination hall and exact seat, eliminating physical notice board bottlenecks, reducing stress, and saving crucial time during examination mornings.
                </p>

                {/* Highlights */}
                <div className="space-y-2 pt-2 border-t border-slate-200 dark:border-slate-800/80">
                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                    <CheckCircle className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                    <span>Automated seat allocation matrix preventing neighboring identical subject collisions</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                    <CheckCircle className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                    <span>Instant student roll number search returning hall code, floor level, and precise seat</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                    <CheckCircle className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                    <span>Focuses on reducing confusion and saving precious time on university exam days</span>
                  </div>
                </div>

                {/* Clean unboxed tech list */}
                <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400 pt-2">
                  <span className="font-semibold text-slate-700 dark:text-slate-300">Tech Stack:</span>
                  <span>Java</span>
                  <span>·</span>
                  <span>OOP Architecture</span>
                  <span>·</span>
                  <span>Matrix Optimization</span>
                  <span>·</span>
                  <span>Interactive Hall Visualizer</span>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-3 pt-3">
                  <button
                    onClick={onOpenExamSeatModal}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-500 shadow-md shadow-indigo-600/30 transition-all group"
                  >
                    <Play className="w-4 h-4 fill-white group-hover:scale-110 transition-transform" />
                    <span>Test Live Seat Allocation Simulator</span>
                  </button>

                  <a
                    href="https://github.com/marimuthun/examseat-pro"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold border transition-all ${
                      theme === 'dark'
                        ? 'bg-slate-900 hover:bg-slate-800 text-slate-200 border-slate-700'
                        : 'bg-white hover:bg-slate-100 text-slate-800 border-slate-300'
                    }`}
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub Code</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Visual Mockup Container */}
              <div className="lg:col-span-5">
                <div className="relative group rounded-2xl overflow-hidden border border-slate-700/60 shadow-xl bg-slate-950">
                  <img
                    src="/src/assets/images/examseat_pro_preview_1791475029972.jpg"
                    alt="ExamSeat Pro Dashboard and Seat Allocation Floorplan"
                    className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white">
                    <span className="font-mono text-[11px] bg-slate-900/90 px-2.5 py-1 rounded-md border border-slate-700">
                      ExamSeat Pro UI · Hall Matrix
                    </span>
                    <button
                      onClick={onOpenExamSeatModal}
                      className="text-xs font-semibold text-indigo-300 hover:text-white flex items-center gap-1 bg-indigo-900/80 px-2.5 py-1 rounded-md"
                    >
                      <span>Interactive Demo</span>
                      <ExternalLink className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Secondary & Future Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedProjects.filter(p => p.id !== 'examseat-pro').map((project) => (
            <div
              key={project.id}
              className={`rounded-2xl border flex flex-col justify-between overflow-hidden transition-all duration-300 hover:-translate-y-1 ${
                theme === 'dark'
                  ? 'bg-slate-900/50 border-slate-800 hover:border-slate-700 hover:shadow-lg hover:shadow-black/30'
                  : 'bg-white border-slate-200 hover:border-slate-300 shadow-2xs'
              }`}
            >
              <div>
                {/* Project Image Preview */}
                <div className="relative aspect-video w-full overflow-hidden bg-slate-900 border-b border-slate-200 dark:border-slate-800">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  {/* Status Indicator */}
                  <div className="absolute top-3 right-3">
                    <span className={`text-[10px] font-mono px-2 py-0.5 rounded font-semibold ${
                      project.status === 'Completed'
                        ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                        : project.status === 'In Progress'
                        ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                        : 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/30'
                    }`}>
                      {project.status || 'Active'}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 space-y-3">
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                      {project.title}
                    </h4>
                    <p className="text-xs font-semibold text-indigo-500 dark:text-indigo-400 mt-0.5">
                      {project.subtitle}
                    </p>
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed min-h-[50px]">
                    {project.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="space-y-1.5 pt-2 border-t border-slate-200 dark:border-slate-800/80">
                    {project.highlights.slice(0, 2).map((hl, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-1.5 text-xs text-slate-600 dark:text-slate-300">
                        <CheckCircle className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                        <span className="text-[11px] leading-tight">{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer: Tech Stack & Actions */}
              <div className="p-5 pt-0 space-y-3">
                {/* Tech Stack List */}
                <div className="flex flex-wrap items-center gap-1.5 text-[11px] font-mono text-slate-500 dark:text-slate-400 pt-3 border-t border-slate-200 dark:border-slate-800/60">
                  {project.technologies.map((tech, tIdx) => (
                    <React.Fragment key={tIdx}>
                      <span>{tech}</span>
                      {tIdx < project.technologies.length - 1 && <span className="text-slate-600">·</span>}
                    </React.Fragment>
                  ))}
                </div>

                {/* Buttons (GitHub & Live Demo / Details) */}
                <div className="flex items-center gap-2 pt-1">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-xs font-semibold border transition-colors ${
                      theme === 'dark'
                        ? 'bg-slate-950 border-slate-800 text-slate-200 hover:bg-slate-800 hover:text-white'
                        : 'bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200 hover:text-slate-900'
                    }`}
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>GitHub</span>
                  </a>

                  {project.id === 'dsa-algorithm-workbench' ? (
                    <button
                      onClick={() => {
                        const el = document.getElementById('skills');
                        el?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-xs font-semibold bg-indigo-600 hover:bg-indigo-500 text-white transition-colors"
                    >
                      <Layers className="w-3.5 h-3.5" />
                      <span>View DSA Logic</span>
                    </button>
                  ) : (
                    <a
                      href={`mailto:${PORTFOLIO_DATA.personal.email}?subject=Inquiry about ${encodeURIComponent(project.title)}`}
                      className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-xs font-semibold bg-indigo-600/80 hover:bg-indigo-600 text-white transition-colors"
                    >
                      <span>Inquire</span>
                      <ArrowRight className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
