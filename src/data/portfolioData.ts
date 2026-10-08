export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  technologies: string[];
  image: string;
  featured: boolean;
  githubUrl: string;
  liveUrl?: string;
  highlights: string[];
  status?: 'Completed' | 'In Progress' | 'Planned';
}

export interface SkillItem {
  name: string;
  level: number; // 0 to 100
  category: 'Programming' | 'Problem Solving' | 'Object-Oriented Programming' | 'Data Structures & Algorithms' | 'Software Development';
  experience: string;
  description: string;
  tags: string[];
}

export interface AchievementItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  category: 'Certification' | 'Academic' | 'Hackathon' | 'Workshop';
  description: string;
  credentialUrl?: string;
  badge?: string;
}

export const PORTFOLIO_DATA = {
  personal: {
    name: 'Mari Muthu N',
    role: 'B.Tech Computer Science & Engineering Student',
    degree: 'B.Tech – Computer Science and Engineering',
    year: '2nd Year (2023 - 2027)',
    college: 'SRM Institute of Science and Technology, Trichy',
    cgpa: '8.02',
    location: 'Thoothukudi, Tamil Nadu, India',
    campusLocation: 'Trichy, Tamil Nadu',
    phone: '6380284179',
    formattedPhone: '+91 63802 84179',
    email: 'marimuthu200862@gmail.com',
    linkedin: 'https://www.linkedin.com/in/mari-muthu-4a71453a2',
    github: 'https://github.com/marimuthun',
    avatarImage: '/src/assets/images/profile_mari_muthu_1791475016880.jpg',
    tagline: 'Passionate Computer Science student interested in software development, problem solving, and building innovative technology solutions.',
    bio: 'I am a 2nd-year Computer Science and Engineering undergraduate at SRM Institute of Science and Technology, Trichy, with an academic record of 8.02 CGPA. I specialize in building solid foundations in Java, C, C++, and Python, paired with strong fundamentals in Object-Oriented Programming, Data Structures, and Algorithmic Problem Solving. I am eager to apply my technical curiosity and disciplined work ethic to software engineering internships and innovative tech projects.',
  },
  
  education: [
    {
      degree: 'B.Tech in Computer Science and Engineering',
      institution: 'SRM Institute of Science and Technology, Trichy',
      period: '2023 – 2027 (Current 2nd Year)',
      score: '8.02 CGPA',
      status: 'In Progress',
      location: 'Trichy, Tamil Nadu',
      description: 'Acquiring comprehensive grounding in core computer science disciplines with hands-on lab practicals, algorithms engineering, and collaborative team coursework.',
      coursework: [
        'Data Structures & Algorithms',
        'Object-Oriented Programming (Java & C++)',
        'Computer System Architecture',
        'Operating Systems Fundamentals',
        'Discrete Mathematics',
        'Database Management Systems',
      ],
      highlights: [
        'Maintained consistent 8.02 cumulative grade point average',
        'Active participant in departmental coding workshops & hackathons',
        'Focus on writing clean, modular, and performant code',
      ],
    },
    {
      degree: 'Higher Secondary Certificate (HSC - Class XII)',
      institution: 'Higher Secondary Education',
      period: 'Completed 2023',
      score: 'Distinction (Science & Computer Science)',
      status: 'Completed',
      location: 'Thoothukudi, Tamil Nadu',
      description: 'Rigorous foundation in Mathematics, Physics, Chemistry, and introductory Computer Science logic.',
      coursework: [
        'Advanced Mathematics',
        'Computer Science Basics',
        'Physics & Logical Deduction',
      ],
      highlights: [
        'High aptitude in analytical problem solving and numerical reasoning',
        'Led student team in school science and computing exhibition',
      ],
    },
  ],

  skills: [
    {
      name: 'Java',
      level: 88,
      category: 'Programming',
      experience: 'Core & OOP',
      description: 'Strong foundation in OOP principles, collections framework, exception handling, multithreading basics, and modular application design.',
      tags: ['OOP', 'Collections', 'Generics', 'JVM', 'Clean Code'],
    },
    {
      name: 'C++',
      level: 85,
      category: 'Programming',
      experience: 'DSA & STL',
      description: 'Competitive programming and algorithm implementation using Standard Template Library (STL vectors, maps, queues), pointers, and memory control.',
      tags: ['STL', 'Pointers', 'Complexity Analysis', 'Algorithms'],
    },
    {
      name: 'C',
      level: 82,
      category: 'Programming',
      experience: 'Systems & Logic',
      description: 'Low-level systems understanding, pointer arithmetic, manual dynamic memory management (malloc/free), structs, and foundational computer logic.',
      tags: ['Memory Management', 'Pointers', 'Data Representation'],
    },
    {
      name: 'Python',
      level: 80,
      category: 'Programming',
      experience: 'Scripting & Logic',
      description: 'Rapid prototyping, data processing scripts, algorithmic logic, automation, and intuitive problem-solving workflows.',
      tags: ['Data Structures', 'Scripting', 'Automation', 'File I/O'],
    },
    {
      name: 'Data Structures & Algorithms',
      level: 85,
      category: 'Data Structures & Algorithms',
      experience: 'Core Foundations',
      description: 'Arrays, Linked Lists, Stacks, Queues, Binary Trees, BSTs, Graphs, Sorting algorithms, Binary Search, and Big-O computational complexity.',
      tags: ['Time Complexity', 'Trees', 'Graphs', 'Sorting', 'Recursion'],
    },
    {
      name: 'Object-Oriented Programming',
      level: 90,
      category: 'Object-Oriented Programming',
      experience: 'Design Principles',
      description: 'Encapsulation, Inheritance, Polymorphism, Abstraction, SOLID fundamentals, Interface segregation, and clean code architecture.',
      tags: ['Encapsulation', 'Polymorphism', 'Inheritance', 'Abstraction'],
    },
    {
      name: 'Problem Solving',
      level: 86,
      category: 'Problem Solving',
      experience: 'Daily Practice',
      description: 'Analytical decomposition of complex challenges, edge-case mitigation, recursive patterns, and mathematical optimization.',
      tags: ['Analytical Thinking', 'Optimization', 'Edge Cases', 'Logic'],
    },
    {
      name: 'Software Development & Tools',
      level: 78,
      category: 'Software Development',
      experience: 'Developer Workflow',
      description: 'Git version control, GitHub workflows, Visual Studio Code, Linux command-line basics, debugging techniques, and UI fundamentals.',
      tags: ['Git', 'GitHub', 'VS Code', 'CLI', 'Web Basics'],
    },
  ] as SkillItem[],

  projects: [
    {
      id: 'examseat-pro',
      title: 'EXAMSEAT PRO',
      subtitle: 'Smart Examination Seat Allocation & Hall Finder',
      description: 'A smart system designed to simplify examination seat allocation, helping students rapidly find their examination hall and seat without physical notice board bottlenecks.',
      longDescription: 'ExamSeat Pro solves one of the most stressful university challenges: students crowding around printed notice boards minutes before an exam. The system provides an automated seat matrix generation engine that distributes students into examination halls while preventing adjacent roll numbers of identical courses. Students can instantly search by roll number or register number to view their designated exam hall, floor, row, seat number, and live seating visual map.',
      technologies: ['Java', 'Object-Oriented Design', 'Algorithm Optimization', 'Data Matrix', 'Responsive UI'],
      image: '/src/assets/images/examseat_pro_preview_1791475029972.jpg',
      featured: true,
      githubUrl: 'https://github.com/marimuthun/examseat-pro',
      liveUrl: '#examseat-simulator',
      highlights: [
        'Automated collision-free seat allocation algorithm preventing neighboring subject collisions',
        'Instant student roll number lookup returning hall code, floor level, and precise seat coordinates',
        'Interactive hall floor plan visualizer showing occupied, available, and assigned seats',
        'Reduces campus pre-exam crowding and delays by over 90%',
      ],
      status: 'Completed',
    },
    {
      id: 'dsa-algorithm-workbench',
      title: 'DSA Visualizer & Algorithm Workbench',
      subtitle: 'Interactive Data Structures & Graph Pathfinding Visualizer',
      description: 'An interactive algorithmic workbench designed to visualize binary search trees, graph traversals (BFS/DFS), and Dijkstra pathfinding in step-by-step execution.',
      longDescription: 'A practical computer science project built to demystify complex data structure behaviors. Users can insert, delete, and search nodes in Binary Search Trees, step through sorting benchmarks (QuickSort, MergeSort), and visualize shortest path routing on weighted graph nodes with execution metrics.',
      technologies: ['Python', 'C++', 'Data Structures', 'Algorithms', 'Interactive Canvas'],
      image: '/src/assets/images/algo_visualizer_preview_1791475044036.jpg',
      featured: true,
      githubUrl: 'https://github.com/marimuthun/dsa-visualizer',
      liveUrl: '#projects',
      highlights: [
        'Step-by-step visual animation of graph pathfinding and tree balance operations',
        'Real-time comparison of time and space complexity across test cases',
        'Custom test bench allowing custom edge and node weights input',
      ],
      status: 'Completed',
    },
    {
      id: 'campus-utility-portal',
      title: 'Smart Academic Companion',
      subtitle: 'Student Grade & Attendance Forecaster',
      description: 'An intuitive academic tool for engineering students to calculate semester CGPA, simulate target grade requirements, and forecast required attendance thresholds.',
      longDescription: 'Engineered with clean object-oriented architecture in Java and modern UI practices. Features intelligent alerts for attendance margins and an interactive grade predictor that computes exactly how many internal marks are needed for target letter grades.',
      technologies: ['Java', 'OOP', 'Data Validation', 'CLI & GUI', 'File Storage'],
      image: '/src/assets/images/examseat_pro_preview_1791475029972.jpg',
      featured: false,
      githubUrl: 'https://github.com/marimuthun/academic-companion',
      highlights: [
        'Accurate SRM IST grade scale and credit-weighted GPA calculation engine',
        'Attendance safety buffer calculator to keep track of required minimums',
        'Clean local data persistence for semester records',
      ],
      status: 'In Progress',
    },
    {
      id: 'future-cloud-resource-mgr',
      title: 'Campus Resource & Lab Booking Engine',
      subtitle: 'High-Performance Allocation System',
      description: 'Upcoming project focusing on distributed resource reservation for college computer science laboratories and hardware kits.',
      longDescription: 'Designed to allow department faculty and students to reserve high-performance compute workstations, project kits, and seminar halls with automated collision prevention.',
      technologies: ['Java', 'Python', 'REST API', 'Database Systems', 'Git'],
      image: '/src/assets/images/algo_visualizer_preview_1791475044036.jpg',
      featured: false,
      githubUrl: 'https://github.com/marimuthun',
      highlights: [
        'Slot-based locking mechanism preventing double bookings',
        'Role-based access for students and lab administrators',
        'Upcoming deployment in development',
      ],
      status: 'Planned',
    },
  ] as Project[],

  achievements: [
    {
      id: 'ach-1',
      title: 'Consistent Academic Excellence (CGPA 8.02)',
      issuer: 'SRM Institute of Science and Technology, Trichy',
      date: '2023 - Present',
      category: 'Academic',
      description: 'Maintained strong cumulative academic standing across core engineering, mathematics, and computer science coursework in B.Tech CSE.',
      badge: 'Top Tier Academic Standing',
    },
    {
      id: 'ach-2',
      title: 'Object-Oriented Programming in Java & C++',
      issuer: 'Department of Computer Science & Engineering',
      date: '2024',
      category: 'Certification',
      description: 'Completed comprehensive course certification and lab assessments demonstrating mastery in classes, inheritance, polymorphism, and memory management.',
      badge: 'Certified Competency',
    },
    {
      id: 'ach-3',
      title: 'Department Technical Hackathon Participant',
      issuer: 'SRM IST Trichy Tech Fest',
      date: '2024',
      category: 'Hackathon',
      description: 'Collaborated in an intensive 24-hour hackathon, conceptualizing and pitching software solutions addressing campus logistics and student utilities.',
      badge: 'Hackathon Contender',
    },
    {
      id: 'ach-4',
      title: 'Competitive Problem Solving & DSA Practice',
      issuer: 'Coding Platforms (LeetCode & HackerRank)',
      date: 'Ongoing',
      category: 'Academic',
      description: 'Solved over 120+ algorithmic challenges covering arrays, strings, two pointers, binary search, recursion, and linked lists in C++ and Java.',
      badge: 'Problem Solver',
    },
    {
      id: 'ach-5',
      title: 'Workshop on Modern Software Engineering Practices',
      issuer: 'SRM IST Computer Society',
      date: '2024',
      category: 'Workshop',
      description: 'Participated in hands-on workshops covering Git collaborative workflows, continuous integration principles, and clean software architecture.',
      badge: 'Technical Workshop',
    },
  ] as AchievementItem[],
};
