import React, { useState } from 'react';
import { 
  X, 
  Search, 
  MapPin, 
  Calendar, 
  Clock, 
  UserCheck, 
  ShieldCheck, 
  Building, 
  AlertCircle,
  ExternalLink,
  Layers,
  Sparkles
} from 'lucide-react';

interface ExamSeatModalProps {
  isOpen: boolean;
  onClose: () => void;
  theme: 'dark' | 'light';
}

interface StudentAllocation {
  rollNo: string;
  name: string;
  course: string;
  examDate: string;
  timeSlot: string;
  hall: string;
  floor: string;
  row: string;
  seatNumber: string;
  gridRow: number;
  gridCol: number;
}

export const ExamSeatModal: React.FC<ExamSeatModalProps> = ({ isOpen, onClose, theme }) => {
  const [searchQuery, setSearchQuery] = useState('10045');
  const [activeResult, setActiveResult] = useState<StudentAllocation | null>({
    rollNo: '10045',
    name: 'Mari Muthu N',
    course: 'CS202 - Object-Oriented Programming (Java)',
    examDate: '15 Nov 2026',
    timeSlot: '09:30 AM - 12:30 PM',
    hall: 'Hall A (Newton Hall)',
    floor: '2nd Floor, Academic Block B',
    row: 'Row B',
    seatNumber: 'B-04',
    gridRow: 2,
    gridCol: 4,
  });

  const sampleAllocations: Record<string, StudentAllocation> = {
    '10045': {
      rollNo: '10045',
      name: 'Mari Muthu N',
      course: 'CS202 - Object-Oriented Programming (Java)',
      examDate: '15 Nov 2026',
      timeSlot: '09:30 AM - 12:30 PM',
      hall: 'Hall A (Newton Hall)',
      floor: '2nd Floor, Academic Block B',
      row: 'Row B',
      seatNumber: 'B-04',
      gridRow: 2,
      gridCol: 4,
    },
    '10024': {
      rollNo: '10024',
      name: 'Karthik S',
      course: 'CS201 - Data Structures & Algorithms',
      examDate: '15 Nov 2026',
      timeSlot: '09:30 AM - 12:30 PM',
      hall: 'Hall A (Newton Hall)',
      floor: '2nd Floor, Academic Block B',
      row: 'Row A',
      seatNumber: 'A-02',
      gridRow: 1,
      gridCol: 2,
    },
    '10018': {
      rollNo: '10018',
      name: 'Sneha R',
      course: 'CS204 - Operating Systems',
      examDate: '15 Nov 2026',
      timeSlot: '09:30 AM - 12:30 PM',
      hall: 'Hall B (Turing Hall)',
      floor: '3rd Floor, Tech Tower',
      row: 'Row C',
      seatNumber: 'C-05',
      gridRow: 3,
      gridCol: 5,
    },
    '10072': {
      rollNo: '10072',
      name: 'Arun Kumar P',
      course: 'CS203 - Discrete Mathematics',
      examDate: '15 Nov 2026',
      timeSlot: '09:30 AM - 12:30 PM',
      hall: 'Hall B (Turing Hall)',
      floor: '3rd Floor, Tech Tower',
      row: 'Row D',
      seatNumber: 'D-03',
      gridRow: 4,
      gridCol: 3,
    },
  };

  const handleSearch = (roll: string) => {
    setSearchQuery(roll);
    if (sampleAllocations[roll]) {
      setActiveResult(sampleAllocations[roll]);
    } else {
      // Dynamic fallback allocation simulation
      const rNum = parseInt(roll) || 10099;
      const rowChar = String.fromCharCode(65 + (rNum % 5));
      const colNum = (rNum % 6) + 1;
      const hallLetter = rNum % 2 === 0 ? 'Hall A (Newton Hall)' : 'Hall B (Turing Hall)';
      const floorDesc = rNum % 2 === 0 ? '2nd Floor, Academic Block B' : '3rd Floor, Tech Tower';
      
      setActiveResult({
        rollNo: roll,
        name: `Student (${roll})`,
        course: 'CS205 - Database Management Systems',
        examDate: '15 Nov 2026',
        timeSlot: '09:30 AM - 12:30 PM',
        hall: hallLetter,
        floor: floorDesc,
        row: `Row ${rowChar}`,
        seatNumber: `${rowChar}-0${colNum}`,
        gridRow: (rowChar.charCodeAt(0) - 64),
        gridCol: colNum,
      });
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
      <div 
        className={`relative w-full max-w-4xl rounded-2xl border shadow-2xl overflow-hidden transition-all ${
          theme === 'dark' ? 'bg-slate-900 border-slate-800 text-slate-100' : 'bg-white border-slate-200 text-slate-900'
        }`}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-950/40">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold text-sm">
              EP
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                EXAMSEAT PRO · Live Allocation Simulator
              </h3>
              <p className="text-xs text-slate-400">
                Interactive demonstration of smart seat allocation & hall finding system
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6">
          
          {/* Search Box & Quick Preset Roll Numbers */}
          <div className="space-y-3">
            <label className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Search by Student Roll Number / Register Number
            </label>
            <div className="flex gap-2">
              <div className="relative flex-1">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSearch(searchQuery)}
                  placeholder="Enter Roll Number (e.g., 10045, 10024, 10018)"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl text-sm font-mono bg-slate-100 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 focus:outline-none focus:border-indigo-500"
                />
              </div>
              <button
                onClick={() => handleSearch(searchQuery)}
                className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-bold transition-colors whitespace-nowrap"
              >
                Find My Seat
              </button>
            </div>

            {/* Quick Suggestions */}
            <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400">
              <span className="text-[11px]">Quick Try Roll Numbers:</span>
              {['10045', '10024', '10018', '10072'].map((num) => (
                <button
                  key={num}
                  onClick={() => handleSearch(num)}
                  className="px-2.5 py-1 rounded bg-slate-200 dark:bg-slate-800 text-xs font-mono text-indigo-400 hover:bg-indigo-600 hover:text-white transition-colors"
                >
                  {num}
                </button>
              ))}
            </div>
          </div>

          {/* Allocation Result View */}
          {activeResult && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              
              {/* Left Column: Student Pass Information */}
              <div className="lg:col-span-5 p-5 rounded-xl border border-indigo-500/20 bg-indigo-950/20 space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-indigo-500/20">
                  <span className="text-xs font-bold uppercase tracking-wider text-indigo-400">
                    Allocated Hall Pass
                  </span>
                  <span className="flex items-center gap-1 text-[11px] font-mono text-emerald-400">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    Verified Seat
                  </span>
                </div>

                <div className="space-y-3">
                  <div>
                    <span className="text-[11px] text-slate-400 uppercase tracking-wider">Candidate</span>
                    <p className="text-sm font-bold text-slate-900 dark:text-white">{activeResult.name}</p>
                    <p className="text-xs font-mono text-indigo-400">Roll No: {activeResult.rollNo}</p>
                  </div>

                  <div>
                    <span className="text-[11px] text-slate-400 uppercase tracking-wider">Subject & Course</span>
                    <p className="text-xs font-medium text-slate-200">{activeResult.course}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-800/80">
                    <div>
                      <span className="text-[11px] text-slate-400">Date</span>
                      <p className="text-xs font-semibold text-slate-300 flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-slate-400" />
                        {activeResult.examDate}
                      </p>
                    </div>
                    <div>
                      <span className="text-[11px] text-slate-400">Time Slot</span>
                      <p className="text-xs font-semibold text-slate-300 flex items-center gap-1">
                        <Clock className="w-3 h-3 text-slate-400" />
                        {activeResult.timeSlot}
                      </p>
                    </div>
                  </div>

                  {/* Primary Seat Destination Callout */}
                  <div className="p-3.5 rounded-lg bg-indigo-600/20 border border-indigo-500/40 text-center">
                    <span className="text-[10px] uppercase tracking-widest text-indigo-300 font-bold">
                      Designated Examination Venue
                    </span>
                    <div className="text-base font-extrabold text-white mt-0.5">
                      {activeResult.hall}
                    </div>
                    <div className="text-xs text-indigo-200 mt-0.5">
                      {activeResult.floor}
                    </div>
                    <div className="mt-2 inline-flex items-center gap-2 px-3 py-1 bg-indigo-600 rounded-md text-white font-mono font-bold text-sm">
                      SEAT: {activeResult.seatNumber}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Visual Hall Floor Matrix */}
              <div className="lg:col-span-7 p-5 rounded-xl border border-slate-800 bg-slate-950/60 space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <Building className="w-4 h-4 text-indigo-400" />
                    <span className="text-xs font-bold text-white uppercase tracking-wider">
                      {activeResult.hall} Seating Floorplan
                    </span>
                  </div>
                  <span className="text-[11px] text-slate-400 font-mono">
                    Board: Front Wall
                  </span>
                </div>

                {/* Simulated Hall Blackboard */}
                <div className="w-full py-1.5 bg-slate-800/80 rounded text-center text-[10px] font-mono tracking-widest text-slate-300 uppercase">
                  ▲ Invigilator Desk & Blackboard ▲
                </div>

                {/* Seating Grid (5 rows x 6 desks) */}
                <div className="space-y-2 py-2">
                  {[1, 2, 3, 4, 5].map((rowNum) => {
                    const rowLetter = String.fromCharCode(64 + rowNum);
                    return (
                      <div key={rowNum} className="flex items-center gap-2">
                        <span className="w-6 text-[10px] font-mono text-slate-400 font-bold text-center">
                          {rowLetter}
                        </span>
                        <div className="flex-1 grid grid-cols-6 gap-1.5">
                          {[1, 2, 3, 4, 5, 6].map((colNum) => {
                            const isAssigned =
                              rowNum === activeResult.gridRow &&
                              colNum === activeResult.gridCol;
                            const isOccupied =
                              (rowNum + colNum) % 3 === 0 && !isAssigned;

                            return (
                              <div
                                key={colNum}
                                className={`h-8 rounded flex items-center justify-center text-[10px] font-mono font-bold transition-all ${
                                  isAssigned
                                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/50 ring-2 ring-indigo-400 animate-pulse'
                                    : isOccupied
                                    ? 'bg-slate-800/80 text-slate-500'
                                    : 'bg-slate-900 border border-slate-800 text-slate-400'
                                }`}
                                title={`${rowLetter}-0${colNum}`}
                              >
                                {isAssigned ? 'YOU' : `${rowLetter}${colNum}`}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Legend */}
                <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 pt-2 border-t border-slate-800">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded bg-indigo-600 inline-block" />
                    <span>Your Allocated Seat</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded bg-slate-800 inline-block" />
                    <span>Other Candidates</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded bg-slate-900 border border-slate-700 inline-block" />
                    <span>Available</span>
                  </div>
                </div>

                {/* Project Value Proposition Note */}
                <div className="text-[11px] text-slate-400 leading-relaxed bg-slate-900/60 p-3 rounded-lg border border-slate-800/80">
                  <strong className="text-slate-200">How ExamSeat Pro Works:</strong> Eliminates last-minute physical notice board rushes by giving every student instant mobile and web lookup of their exam hall and seat coordinates.
                </div>
              </div>

            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-slate-950/60 border-t border-slate-800 flex items-center justify-between">
          <span className="text-xs text-slate-400">
            Project Concept & Architecture by Mari Muthu N · B.Tech CSE
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg text-xs font-semibold transition-colors"
          >
            Close Simulator
          </button>
        </div>
      </div>
    </div>
  );
};
