import React, { useState } from 'react';
import { 
  Download, 
  FileText, 
  Printer, 
  Copy, 
  Check, 
  ExternalLink, 
  GraduationCap, 
  Code2, 
  Briefcase, 
  Award, 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin,
  Sparkles
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface ResumeSectionProps {
  theme: 'dark' | 'light';
}

export const ResumeSection: React.FC<ResumeSectionProps> = ({ theme }) => {
  const [copied, setCopied] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadMarkdown = () => {
    const resumeText = `# ${PORTFOLIO_DATA.personal.name}
${PORTFOLIO_DATA.personal.role}
Email: ${PORTFOLIO_DATA.personal.email} | Phone: ${PORTFOLIO_DATA.personal.phone}
LinkedIn: ${PORTFOLIO_DATA.personal.linkedin} | Location: ${PORTFOLIO_DATA.personal.location}

---

## PROFESSIONAL SUMMARY
${PORTFOLIO_DATA.personal.bio}

---

## EDUCATION
- B.Tech in Computer Science and Engineering
  SRM Institute of Science and Technology, Trichy (2023 - 2027)
  Current Standing: 2nd Year | CGPA: 8.02 / 10
  Relevant Coursework: Data Structures & Algorithms, OOP (Java & C++), Operating Systems, DBMS.

- Higher Secondary Certificate (Class XII)
  Higher Secondary Education, Thoothukudi, Tamil Nadu
  Status: Completed with Distinction (Mathematics & Science)

---

## TECHNICAL SKILLS
- Programming Languages: Java, C++, C, Python
- Core Fundamentals: Object-Oriented Programming (OOP), Data Structures & Algorithms (DSA), Problem Solving
- Software Development & Tools: Git, GitHub, VS Code, Linux fundamentals, Clean Code Architecture

---

## FEATURED PROJECTS
1. EXAMSEAT PRO - Smart Examination Seat Allocation & Hall Finder
   - Automated seat allocation algorithm minimizing adjacent course collisions
   - Instant student roll number search returning hall code, floor level, and precise seat coordinates
   - Technologies: Java, OOP Architecture, Data Matrix, Interactive UI

2. DSA Visualizer & Algorithm Workbench
   - Interactive tree and graph pathfinding visualizer (Dijkstra, BFS, DFS)
   - Step-by-step benchmark execution engine
   - Technologies: Python, C++, Data Structures, Algorithms

---

## ACHIEVEMENTS & CERTIFICATIONS
- Consistent Academic Standing: 8.02 CGPA at SRM IST Trichy
- Object-Oriented Programming in Java & C++ Competency
- 120+ Coding Challenges Solved on LeetCode & HackerRank
- Department Technical Hackathon Contender (SRM IST Trichy)
`;

    const blob = new Blob([resumeText], { type: 'text/markdown;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Mari_Muthu_N_Resume.md');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleCopyText = () => {
    const text = `MARI MUTHU N - B.Tech CSE Student, SRM IST Trichy (CGPA: 8.02)
Email: ${PORTFOLIO_DATA.personal.email} | Phone: ${PORTFOLIO_DATA.personal.phone}
LinkedIn: ${PORTFOLIO_DATA.personal.linkedin}
Skills: Java, C, C++, Python, DSA, OOP
Flagship Project: ExamSeat Pro - Smart Examination Seat Allocation & Hall Finder`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section 
      id="resume" 
      className={`py-20 border-t ${
        theme === 'dark' ? 'border-slate-800/80 bg-slate-950' : 'border-slate-200 bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-semibold text-indigo-400 tracking-wider uppercase mb-2">
              06. Formal Curriculum Vitae
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Resume Preview
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl">
              Clean, recruiter-ready curriculum vitae formatted for software engineering internships and campus placements.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-2.5">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-500 shadow-md shadow-indigo-600/25 transition-all"
            >
              <Printer className="w-4 h-4" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={handleDownloadMarkdown}
              className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold border transition-colors ${
                theme === 'dark'
                  ? 'bg-slate-900 hover:bg-slate-800 text-slate-200 border-slate-700'
                  : 'bg-white hover:bg-slate-100 text-slate-800 border-slate-300'
              }`}
            >
              <Download className="w-4 h-4 text-indigo-400" />
              <span>Download .MD</span>
            </button>

            <button
              onClick={handleCopyText}
              className={`p-2.5 rounded-xl border transition-colors ${
                theme === 'dark'
                  ? 'bg-slate-900 hover:bg-slate-800 text-slate-300 border-slate-700'
                  : 'bg-white hover:bg-slate-100 text-slate-700 border-slate-300'
              }`}
              title="Copy Summary to Clipboard"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Printable Resume Sheet Container */}
        <div 
          id="resume-printable"
          className={`mx-auto max-w-4xl rounded-2xl border p-8 sm:p-12 shadow-xl transition-all ${
            theme === 'dark' 
              ? 'bg-slate-900/90 border-slate-800 text-slate-200' 
              : 'bg-white border-slate-200 text-slate-800 shadow-sm'
          }`}
        >
          {/* Header Block */}
          <div className="pb-6 border-b border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                {PORTFOLIO_DATA.personal.name}
              </h1>
              <p className="text-sm sm:text-base font-semibold text-indigo-500 dark:text-indigo-400 mt-1">
                {PORTFOLIO_DATA.personal.role} · SRM IST Trichy
              </p>
            </div>

            {/* Contact details */}
            <div className="flex flex-col sm:items-end text-xs text-slate-600 dark:text-slate-400 space-y-1">
              <span className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-indigo-400" />
                {PORTFOLIO_DATA.personal.email}
              </span>
              <span className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-indigo-400" />
                +91 {PORTFOLIO_DATA.personal.phone}
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-indigo-400" />
                {PORTFOLIO_DATA.personal.location}
              </span>
              <a 
                href={PORTFOLIO_DATA.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-indigo-400 hover:underline"
              >
                <Linkedin className="w-3.5 h-3.5" />
                linkedin.com/in/mari-muthu-4a71453a2
              </a>
            </div>
          </div>

          {/* Resume Body */}
          <div className="space-y-8 pt-6">
            
            {/* 1. Summary */}
            <div>
              <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-indigo-400 mb-2">
                Professional Objective
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {PORTFOLIO_DATA.personal.bio}
              </p>
            </div>

            {/* 2. Education */}
            <div>
              <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-indigo-400 mb-3">
                Education
              </h2>
              <div className="space-y-4">
                {PORTFOLIO_DATA.education.map((edu, idx) => (
                  <div key={idx} className="text-xs sm:text-sm">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between font-semibold text-slate-900 dark:text-white">
                      <span>{edu.degree}</span>
                      <span className="text-xs font-mono text-slate-500">{edu.period}</span>
                    </div>
                    <div className="flex items-center justify-between text-xs text-indigo-500 dark:text-indigo-400 mt-0.5">
                      <span>{edu.institution}</span>
                      <span className="font-bold text-amber-500 tabular-nums">{edu.score}</span>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                      {edu.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* 3. Technical Skills */}
            <div>
              <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-indigo-400 mb-2">
                Technical Skills
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-lg bg-slate-100 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800">
                  <span className="font-bold text-slate-900 dark:text-white block mb-1">
                    Programming Languages:
                  </span>
                  <span className="text-slate-600 dark:text-slate-300">
                    Java, C, C++, Python
                  </span>
                </div>

                <div className="p-3 rounded-lg bg-slate-100 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800">
                  <span className="font-bold text-slate-900 dark:text-white block mb-1">
                    Core Engineering:
                  </span>
                  <span className="text-slate-600 dark:text-slate-300">
                    Object-Oriented Programming (OOP), Data Structures & Algorithms (DSA), Problem Solving
                  </span>
                </div>

                <div className="p-3 rounded-lg bg-slate-100 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800 sm:col-span-2">
                  <span className="font-bold text-slate-900 dark:text-white block mb-1">
                    Software Development & Tooling:
                  </span>
                  <span className="text-slate-600 dark:text-slate-300">
                    Git & GitHub, Visual Studio Code, Linux command line fundamentals, Modular Architecture, Responsive Design
                  </span>
                </div>
              </div>
            </div>

            {/* 4. Projects */}
            <div>
              <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-indigo-400 mb-3">
                Key Projects
              </h2>
              <div className="space-y-4">
                {PORTFOLIO_DATA.projects.slice(0, 2).map((proj) => (
                  <div key={proj.id} className="text-xs sm:text-sm">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between font-bold text-slate-900 dark:text-white">
                      <span>{proj.title} · {proj.subtitle}</span>
                      <span className="text-xs font-mono text-slate-500">
                        {proj.technologies.slice(0, 3).join(', ')}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                      {proj.description}
                    </p>
                    <ul className="mt-1.5 space-y-1 text-[11px] text-slate-500 dark:text-slate-400 list-disc list-inside">
                      {proj.highlights.slice(0, 2).map((h, i) => (
                        <li key={i}>{h}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* 5. Key Achievements */}
            <div>
              <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-indigo-400 mb-2">
                Achievements & Activities
              </h2>
              <div className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                <p>• Maintained consistent 8.02 CGPA across B.Tech Computer Science & Engineering semesters at SRM IST Trichy.</p>
                <p>• Department Technical Hackathon Contender (2024), pitching smart campus utility platforms.</p>
                <p>• Solved 120+ algorithmic challenges in C++ and Java focusing on recursion, arrays, and binary search trees.</p>
                <p>• Active participant in technical workshops on Modern Software Engineering and collaborative Git workflows.</p>
              </div>
            </div>

          </div>

          {/* Footer of Resume Sheet */}
          <div className="mt-8 pt-4 border-t border-slate-200 dark:border-slate-800 text-center text-[10px] font-mono text-slate-500">
            Mari Muthu N · B.Tech CSE (2nd Year) · SRM Institute of Science and Technology, Trichy · +91 6380284179
          </div>

        </div>

      </div>
    </section>
  );
};
