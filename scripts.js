/* ==========================================================================
   SMART E-LEARNING PLATFORM - CORE JAVASCRIPT & AI ENGINE
   ========================================================================== */

/* --- 1. COURSE DATABASE & CURRICULUM --- */
const COURSES_DATABASE = [
  {
    id: "web-dev",
    title: "Full-Stack Web Development & Modern React",
    category: "web",
    categoryName: "Web Development",
    level: "Beginner to Pro",
    duration: "24 Hours",
    lessonsCount: 12,
    rating: 4.9,
    studentsCount: 1420,
    instructor: "Sarah Jenkins",
    instructorRole: "Senior Frontend Architect",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&auto=format&fit=crop&q=80",
    description: "Master modern web development from HTML5/CSS3 semantics to modern JavaScript ES6+, responsive layouts, React hooks, component architecture, and state management.",
    syllabus: [
      {
        module: "Module 1: Modern Web Foundations",
        lessons: [
          { id: "wd-1", title: "HTML5 Semantic Structure & Modern Web Standards", duration: "25 min", videoId: "UB1O30fR-EE", notes: "Semantic elements (header, main, nav, section, article, footer) improve accessibility and SEO." },
          { id: "wd-2", title: "CSS3 Flexbox, Modern Grid & Glassmorphism UI", duration: "35 min", videoId: "jV8B24rSN5o", notes: "Flexbox manages one-dimensional layouts, while CSS Grid provides two-dimensional power." },
          { id: "wd-3", title: "Responsive Design & CSS Custom Properties (Variables)", duration: "30 min", videoId: "srvUrASNj0s", notes: "Design tokens in :root create cohesive scalable theming systems across viewports." }
        ]
      },
      {
        module: "Module 2: JavaScript Mastery (ES6+)",
        lessons: [
          { id: "wd-4", title: "DOM Manipulation & Event Listeners", duration: "40 min", videoId: "5fb2aPlgoys", notes: "Master querySelector, addEventListener, event bubbling, and dynamic template literals." },
          { id: "wd-5", title: "Async JavaScript, Promises & Fetch API", duration: "45 min", videoId: "PoRJizFvM7s", notes: "Async/await patterns provide synchronous-looking asynchronous code with robust try/catch blocks." },
          { id: "wd-6", title: "Local Storage & Client-Side State Management", duration: "35 min", videoId: "k8yJCeuP6I8", notes: "Persist client state using JSON.stringify() and JSON.parse() on localStorage keys." }
        ]
      },
      {
        module: "Module 3: React Fundamentals & Component Design",
        lessons: [
          { id: "wd-7", title: "React Component Hierarchy & JSX Essentials", duration: "50 min", videoId: "bMknfKXIFA8", notes: "Components encapsulate reusable markup and behavior; props pass data downstream unidirectionally." },
          { id: "wd-8", title: "Hooks: useState, useEffect & Custom Hooks", duration: "55 min", videoId: "O6P86uwfdR0", notes: "useState handles component memory while useEffect handles side-effects like data fetching." },
          { id: "wd-9", title: "Building Interactive Web Applications", duration: "60 min", videoId: "w7ejDZ8SWv8", notes: "Putting it all together: building responsive real-world web apps." }
        ]
      }
    ],
    quiz: [
      {
        question: "Which HTML5 semantic element is best suited for the main unique content of a webpage?",
        options: ["<section>", "<main>", "<div>", "<article>"],
        answer: 1,
        explanation: "The <main> tag represents the dominant content of the <body> of a document."
      },
      {
        question: "In CSS Flexbox, which property aligns items along the cross axis?",
        options: ["justify-content", "align-items", "flex-direction", "align-content"],
        answer: 1,
        explanation: "align-items aligns items along the cross axis, while justify-content aligns along the main axis."
      },
      {
        question: "How do you store a JavaScript object inside localStorage?",
        options: [
          "localStorage.setItem('user', object)",
          "localStorage.setItem('user', JSON.stringify(object))",
          "localStorage.saveObject('user', object)",
          "localStorage.setJSON('user', object)"
        ],
        answer: 1,
        explanation: "localStorage only stores strings, so objects must be serialized with JSON.stringify()."
      },
      {
        question: "In React, what hook is used to perform side effects such as fetching data from an API?",
        options: ["useState", "useContext", "useEffect", "useMemo"],
        answer: 2,
        explanation: "useEffect is designed specifically for side effects like API requests, subscriptions, and DOM updates."
      }
    ]
  },
  {
    id: "python-pro",
    title: "Python Programming: Automation, Backend & AI Basics",
    category: "programming",
    categoryName: "Programming",
    level: "Beginner to Intermediate",
    duration: "20 Hours",
    lessonsCount: 10,
    rating: 4.8,
    studentsCount: 1890,
    instructor: "Dr. Ethan Brooks",
    instructorRole: "AI Research Scientist & Author",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&auto=format&fit=crop&q=80",
    description: "Learn Python from the ground up: data structures, object-oriented programming (OOP), file operations, automated web scrapers, and foundational math for machine learning.",
    syllabus: [
      {
        module: "Module 1: Python Fundamentals",
        lessons: [
          { id: "py-1", title: "Variables, Data Types & Control Flow", duration: "30 min", videoId: "_uQrJ0TkZlc", notes: "Python uses indentation for blocks. Dynamic typing allows variables to change types smoothly." },
          { id: "py-2", title: "Data Structures: Lists, Tuples, Sets & Dicts", duration: "40 min", videoId: "daefaLgNkw0", notes: "Dictionaries provide O(1) hash map lookups; lists are ordered mutable sequences." },
          { id: "py-3", title: "Functions, Args, Kwargs & Lambda Expressions", duration: "35 min", videoId: "u-OmVr_fT4s", notes: "Lambdas are anonymous inline functions ideal for map(), filter(), and sorted() keys." }
        ]
      },
      {
        module: "Module 2: Object-Oriented Programming (OOP)",
        lessons: [
          { id: "py-4", title: "Classes, Constructors (__init__) & Instances", duration: "45 min", videoId: "ZDa-Z5JzLYM", notes: "Classes act as blueprints; __init__ initializes instance attributes upon creation." },
          { id: "py-5", title: "Inheritance, Polymorphism & Encapsulation", duration: "40 min", videoId: "RSl87lqOXDE", notes: "Inheritance enables code reuse while polymorphism allows unified interfaces for diverse types." }
        ]
      },
      {
        module: "Module 3: Automation & Data Handling",
        lessons: [
          { id: "py-6", title: "Working with Files, CSV & JSON data", duration: "35 min", videoId: "q5uM4VKy9GQ", notes: "Always use context managers (`with open(...) as f:`) to ensure safe automatic file closure." },
          { id: "py-7", title: "Web Scraping with BeautifulSoup & Requests", duration: "50 min", videoId: "XVv6mJpFOb0", notes: "HTTP GET requests retrieve raw HTML, parsed seamlessly via BeautifulSoup CSS selectors." }
        ]
      }
    ],
    quiz: [
      {
        question: "Which data structure in Python is immutable and declared with parentheses?",
        options: ["List", "Dictionary", "Tuple", "Set"],
        answer: 2,
        explanation: "Tuples (e.g., (1, 2, 3)) cannot be modified after creation."
      },
      {
        question: "What keyword is used to create a generator function in Python?",
        options: ["return", "yield", "generate", "async"],
        answer: 1,
        explanation: "yield pauses function execution and emits a value to the iterator."
      },
      {
        question: "Which built-in Python module is used to parse JSON data?",
        options: ["json", "pickle", "marshal", "serialize"],
        answer: 0,
        explanation: "The `json` module provides `loads()` and `dumps()` methods."
      }
    ]
  },
  {
    id: "ai-ml",
    title: "Artificial Intelligence, Deep Learning & LLMs",
    category: "ai",
    categoryName: "AI & Machine Learning",
    level: "Advanced",
    duration: "28 Hours",
    lessonsCount: 14,
    rating: 4.95,
    studentsCount: 2150,
    instructor: "Elena Rostova",
    instructorRole: "Principal AI Scientist",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop&q=80",
    description: "Dive deep into modern AI: neural network architectures, Computer Vision, Natural Language Processing, Transformer models, Prompt Engineering, and building LLM-powered agents.",
    syllabus: [
      {
        module: "Module 1: Machine Learning Foundations",
        lessons: [
          { id: "ai-1", title: "Introduction to Machine Learning & Paradigms", duration: "35 min", videoId: "Gv9_4yMHFhI", notes: "Supervised, unsupervised, and reinforcement learning form the core pillars of ML." },
          { id: "ai-2", title: "Linear & Logistic Regression with Scikit-Learn", duration: "45 min", videoId: "i_LwzRVP7bg", notes: "Gradient descent minimizes the cost function to fit optimal hyperplane coefficients." }
        ]
      },
      {
        module: "Module 2: Deep Neural Networks",
        lessons: [
          { id: "ai-3", title: "Neural Networks, Activation Functions & Backpropagation", duration: "50 min", videoId: "aircAruvnKk", notes: "ReLU, Softmax, and chain-rule calculus enable multi-layer feature representations." },
          { id: "ai-4", title: "Convolutional Neural Networks (CNNs) for Vision", duration: "55 min", videoId: "YRhxdVk_sIs", notes: "Kernels extract spatial hierarchies and edges from image pixel matrices." }
        ]
      },
      {
        module: "Module 3: Generative AI & Transformers",
        lessons: [
          { id: "ai-5", title: "The Transformer Architecture & Self-Attention", duration: "60 min", videoId: "wjZofJX0v4U", notes: "Self-attention computes dynamic contextual weighting between tokens simultaneously." },
          { id: "ai-6", title: "Fine-Tuning LLMs, RAG & AI Agentic Workflows", duration: "65 min", videoId: "zjkBMFhNj_g", notes: "Retrieval-Augmented Generation (RAG) grounds LLM outputs with real-time external knowledge." }
        ]
      }
    ],
    quiz: [
      {
        question: "What core mechanism makes the Transformer architecture superior for sequential data over RNNs?",
        options: ["Recurrent hidden gates", "Self-Attention mechanism", "Max-Pooling layers", "Dropout regularization"],
        answer: 1,
        explanation: "Self-attention enables parallel processing of all tokens in a sequence with direct context connections."
      },
      {
        question: "In Machine Learning, what technique prevents overfitting by adding a penalty for large weights?",
        options: ["Regularization (L1/L2)", "One-Hot Encoding", "Data Normalization", "Bootstrapping"],
        answer: 0,
        explanation: "Regularization (like Lasso L1 or Ridge L2) adds a penalty to the loss function to constrain model complexity."
      }
    ]
  },
  {
    id: "data-science",
    title: "Data Science, Statistics & Interactive Dashboards",
    category: "data",
    categoryName: "Data Science",
    level: "Intermediate",
    duration: "22 Hours",
    lessonsCount: 11,
    rating: 4.85,
    studentsCount: 1350,
    instructor: "Marcus Vance",
    instructorRole: "Lead Data Scientist",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80",
    description: "Unlock data insights using Pandas, NumPy, statistical testing, exploratory data analysis (EDA), Seaborn visualizations, and interactive analytical dashboards.",
    syllabus: [
      {
        module: "Module 1: Data Wrangling & Manipulation",
        lessons: [
          { id: "ds-1", title: "NumPy Vectorized Arrays & Mathematical Operations", duration: "35 min", videoId: "QUT1VHiLmmI", notes: "NumPy arrays are stored in contiguous memory for high-performance C-level computations." },
          { id: "ds-2", title: "Pandas DataFrames, GroupBy & Missing Data Handling", duration: "45 min", videoId: "vmEHCJofslg", notes: "Master filtering, aggregation with groupby(), and imputation strategies for NaN values." }
        ]
      },
      {
        module: "Module 2: Visualization & Storytelling",
        lessons: [
          { id: "ds-3", title: "Exploratory Data Analysis (EDA) & Matplotlib", duration: "40 min", videoId: "3ZWuPVWq7p4", notes: "Histograms, box plots, and scatter matrices reveal underlying distribution patterns." },
          { id: "ds-4", title: "Interactive Dashboards & Business Metrics", duration: "50 min", videoId: "dPxPBYz6F48", notes: "Transform raw tabular metrics into intuitive executive KPI widgets." }
        ]
      }
    ],
    quiz: [
      {
        question: "In Pandas, which method is used to compute summary statistics (mean, std, min, max) for numeric columns?",
        options: ["df.info()", "df.describe()", "df.summary()", "df.stats()"],
        answer: 1,
        explanation: "df.describe() generates descriptive statistics that summarize central tendency and dispersion."
      },
      {
        question: "Which chart is most effective for visualizing the distribution of a continuous numeric variable?",
        options: ["Pie Chart", "Histogram", "Scatter Plot", "Radar Chart"],
        answer: 1,
        explanation: "Histograms group continuous data into bins to illustrate frequency distribution."
      }
    ]
  },
  {
    id: "ui-ux",
    title: "UI/UX Design Systems, Figma & Micro-Interactions",
    category: "design",
    categoryName: "Design",
    level: "Beginner to Intermediate",
    duration: "16 Hours",
    lessonsCount: 8,
    rating: 4.75,
    studentsCount: 1100,
    instructor: "Chloe Dubois",
    instructorRole: "Product Design Lead",
    image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&auto=format&fit=crop&q=80",
    description: "Design stunning digital experiences. Learn typography scales, color theory, design tokens, responsive auto-layouts, wireframing, and creating design systems in Figma.",
    syllabus: [
      {
        module: "Module 1: Design Principles & Figma Mastery",
        lessons: [
          { id: "ux-1", title: "Visual Hierarchy, Typography Scales & Spacing Rules", duration: "30 min", videoId: "c9Wg6Cb_YlU", notes: "Strict 4px/8px grid systems and harmonious typographic scales create intuitive interfaces." },
          { id: "ux-2", title: "Figma Auto-Layout, Components & Design Tokens", duration: "45 min", videoId: "NrKX46DzkGQ", notes: "Auto-layout mirrors CSS Flexbox, enabling responsive UI components." }
        ]
      },
      {
        module: "Module 2: User Experience & Prototyping",
        lessons: [
          { id: "ux-3", title: "User Personas, Wireframing & Usability Testing", duration: "35 min", videoId: "FTFaQWZBqQ8", notes: "Early low-fidelity wireframing and user testing eliminate costly engineering pivots." },
          { id: "ux-4", title: "Micro-Interactions, Motion Design & UI Polish", duration: "40 min", videoId: "951r19qT2d0", notes: "Micro-animations provide instant tactile feedback and delight users." }
        ]
      }
    ],
    quiz: [
      {
        question: "What is the primary benefit of using an 8-point grid system in UI design?",
        options: ["Smaller file sizes", "Consistent visual rhythm and scalable sizing", "Faster CSS rendering", "Dark mode compatibility"],
        answer: 1,
        explanation: "Multiples of 8px align cleanly with most screen resolutions, ensuring visual harmony."
      }
    ]
  },
  {
    id: "cyber-security",
    title: "Cybersecurity Essentials, Network Defense & Ethical Hacking",
    category: "security",
    categoryName: "Cybersecurity",
    level: "Intermediate",
    duration: "18 Hours",
    lessonsCount: 9,
    rating: 4.9,
    studentsCount: 950,
    instructor: "Alex Chen",
    instructorRole: "Security Operations Consultant",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&auto=format&fit=crop&q=80",
    description: "Understand network security protocols, OWASP Top 10 vulnerabilities, authentication security, cryptography, and penetration testing methodologies.",
    syllabus: [
      {
        module: "Module 1: Core Security & Networking",
        lessons: [
          { id: "cs-1", title: "TCP/IP, OSI Model & Network Packet Analysis", duration: "40 min", videoId: "IPvYjXCsTg8", notes: "Understand packet routing, TLS handshakes, and port scanning fundamentals." },
          { id: "cs-2", title: "OWASP Top 10: XSS, SQLi & CSRF Prevention", duration: "45 min", videoId: "F1Tz8gq3g1Y", notes: "Sanitize all user inputs, use parameterized queries, and enforce strict SameSite cookies." }
        ]
      }
    ],
    quiz: [
      {
        question: "Which attack occurs when an attacker executes malicious scripts in another user's browser?",
        options: ["SQL Injection", "Cross-Site Scripting (XSS)", "Denial of Service (DoS)", "Man-in-the-Middle"],
        answer: 1,
        explanation: "XSS vulnerabilities allow attackers to inject client-side scripts viewed by other users."
      }
    ]
  }
];

/* --- 2. LOCAL STORAGE & DATA STORE ENGINE --- */
const STORAGE_KEYS = {
  USERS: "elearn_users",
  CURRENT_USER: "elearn_currentUser",
  PROGRESS: "elearn_progress",
  CERTIFICATES: "elearn_certificates",
  NOTES: "elearn_notes"
};

// Seed Demo User if not present
function initializeDataStore() {
  const users = JSON.parse(localStorage.getItem(STORAGE_KEYS.USERS)) || [];
  const demoExists = users.some(u => u.email === "demo@elearnhub.com");
  
  if (!demoExists) {
    const demoUser = {
      name: "Alex Morgan",
      email: "demo@elearnhub.com",
      password: "demo",
      role: "Student",
      avatarBg: "var(--ai-gradient)",
      enrolledCourses: ["web-dev", "python-pro"],
      joinDate: new Date().toLocaleDateString()
    };
    users.push(demoUser);
    localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(users));

    // Seed progress for demo user
    const progress = JSON.parse(localStorage.getItem(STORAGE_KEYS.PROGRESS)) || {};
    if (!progress["demo@elearnhub.com"]) {
      progress["demo@elearnhub.com"] = {
        "web-dev": {
          completedLessons: ["wd-1", "wd-2"],
          quizPassed: false,
          quizScore: 0
        },
        "python-pro": {
          completedLessons: ["py-1", "py-2", "py-3", "py-4", "py-5", "py-6", "py-7"],
          quizPassed: true,
          quizScore: 100
        }
      };
      localStorage.setItem(STORAGE_KEYS.PROGRESS, JSON.stringify(progress));
    }

    // Seed sample certificate
    const certs = JSON.parse(localStorage.getItem(STORAGE_KEYS.CERTIFICATES)) || [];
    if (!certs.some(c => c.userEmail === "demo@elearnhub.com")) {
      certs.push({
        id: "CERT-" + Math.random().toString(36).substring(2, 9).toUpperCase(),
        courseId: "python-pro",
        courseTitle: "Python Programming: Automation, Backend & AI Basics",
        studentName: "Alex Morgan",
        userEmail: "demo@elearnhub.com",
        issueDate: new Date().toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' }),
        instructor: "Dr. Ethan Brooks"
      });
      localStorage.setItem(STORAGE_KEYS.CERTIFICATES, JSON.stringify(certs));
    }
  }
}

// User & Auth Functions
function getCurrentUser() {
  return JSON.parse(localStorage.getItem(STORAGE_KEYS.CURRENT_USER));
}

function setCurrentUser(user) {
  if (user) {
    localStorage.setItem(STORAGE_KEYS.CURRENT_USER, JSON.stringify(user));
  } else {
    localStorage.removeItem(STORAGE_KEYS.CURRENT_USER);
  }
}

function registerUser(name, email, password) {
  const users = JSON.parse(localStorage.getItem(STORAGE_KEYS.USERS)) || [];
  const normalizedEmail = email.trim().toLowerCase();

  if (users.some(u => u.email === normalizedEmail)) {
    return { success: false, message: "An account with this email already exists!" };
  }

  const newUser = {
    name: name.trim(),
    email: normalizedEmail,
    password: password,
    role: "Student",
    enrolledCourses: ["web-dev"],
    joinDate: new Date().toLocaleDateString()
  };

  users.push(newUser);
  localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(users));
  setCurrentUser(newUser);

  return { success: true, user: newUser };
}

function loginUser(email, password) {
  const users = JSON.parse(localStorage.getItem(STORAGE_KEYS.USERS)) || [];
  const normalizedEmail = email.trim().toLowerCase();
  
  const user = users.find(u => u.email === normalizedEmail && u.password === password);
  if (!user) {
    return { success: false, message: "Invalid email or password." };
  }

  setCurrentUser(user);
  return { success: true, user: user };
}

function logoutUser() {
  setCurrentUser(null);
  showToast("Logged out successfully", "info");
  setTimeout(() => {
    window.location.href = (window.location.pathname.includes('/pages/') ? '../index.html' : 'index.html');
  }, 500);
}

// Enrollment & Progress Functions
function enrollInCourse(courseId) {
  const user = getCurrentUser();
  if (!user) {
    showToast("Please login or register to enroll in courses.", "warning");
    setTimeout(() => {
      window.location.href = window.location.pathname.includes('/pages/') ? 'login.html' : 'pages/login.html';
    }, 1200);
    return false;
  }

  if (!user.enrolledCourses) user.enrolledCourses = [];
  if (user.enrolledCourses.includes(courseId)) {
    showToast("You are already enrolled in this course!", "info");
    return true;
  }

  user.enrolledCourses.push(courseId);
  setCurrentUser(user);

  // Update in users collection
  const users = JSON.parse(localStorage.getItem(STORAGE_KEYS.USERS)) || [];
  const idx = users.findIndex(u => u.email === user.email);
  if (idx !== -1) {
    users[idx] = user;
    localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(users));
  }

  // Init course progress entry
  const progress = JSON.parse(localStorage.getItem(STORAGE_KEYS.PROGRESS)) || {};
  if (!progress[user.email]) progress[user.email] = {};
  if (!progress[user.email][courseId]) {
    progress[user.email][courseId] = {
      completedLessons: [],
      quizPassed: false,
      quizScore: 0
    };
    localStorage.setItem(STORAGE_KEYS.PROGRESS, JSON.stringify(progress));
  }

  showToast(`Enrolled successfully! Welcome to the course.`, "success");
  return true;
}

function getUserCourseProgress(courseId) {
  const user = getCurrentUser();
  if (!user) return { percent: 0, completedLessons: [], totalLessons: 0, quizPassed: false };

  const course = COURSES_DATABASE.find(c => c.id === courseId);
  if (!course) return { percent: 0, completedLessons: [], totalLessons: 0, quizPassed: false };

  let totalLessons = 0;
  course.syllabus.forEach(m => totalLessons += m.lessons.length);

  const allProgress = JSON.parse(localStorage.getItem(STORAGE_KEYS.PROGRESS)) || {};
  const userProg = allProgress[user.email] && allProgress[user.email][courseId] ? allProgress[user.email][courseId] : { completedLessons: [], quizPassed: false };

  const completedCount = (userProg.completedLessons || []).length;
  const percent = totalLessons > 0 ? Math.round((completedCount / totalLessons) * 100) : 0;

  return {
    percent: Math.min(percent, 100),
    completedLessons: userProg.completedLessons || [],
    totalLessons: totalLessons,
    quizPassed: userProg.quizPassed || false,
    quizScore: userProg.quizScore || 0
  };
}

function toggleLessonCompleted(courseId, lessonId) {
  const user = getCurrentUser();
  if (!user) return;

  const allProgress = JSON.parse(localStorage.getItem(STORAGE_KEYS.PROGRESS)) || {};
  if (!allProgress[user.email]) allProgress[user.email] = {};
  if (!allProgress[user.email][courseId]) {
    allProgress[user.email][courseId] = { completedLessons: [], quizPassed: false };
  }

  const courseProg = allProgress[user.email][courseId];
  const idx = courseProg.completedLessons.indexOf(lessonId);
  let isDone = false;

  if (idx > -1) {
    courseProg.completedLessons.splice(idx, 1);
    isDone = false;
  } else {
    courseProg.completedLessons.push(lessonId);
    isDone = true;
    showToast("Lesson completed! 🎉 Progress updated.", "success");
  }

  localStorage.setItem(STORAGE_KEYS.PROGRESS, JSON.stringify(allProgress));
  return isDone;
}

/* --- 3. 🤖 AI PERSONALIZED RECOMMENDATION & TUTOR ENGINE --- */
const aiEngine = {
  // Generates smart next-course and topic recommendations
  getPersonalizedRecommendations: function(userEmail) {
    const user = getCurrentUser();
    if (!user) {
      return [
        {
          courseId: "web-dev",
          title: "Full-Stack Web Development",
          reason: "Popular starting point for new developers.",
          matchScore: 98,
          tag: "Trending"
        },
        {
          courseId: "python-pro",
          title: "Python Programming & AI Basics",
          reason: "High demand foundational language for 2026.",
          matchScore: 94,
          tag: "Recommended"
        }
      ];
    }

    const enrolled = user.enrolledCourses || [];
    const recommendations = [];

    // Rule 1: If enrolled in Python and not AI/ML, strongly suggest AI/ML
    if (enrolled.includes("python-pro") && !enrolled.includes("ai-ml")) {
      recommendations.push({
        courseId: "ai-ml",
        title: "Artificial Intelligence & LLMs",
        reason: "Based on your Python progress, expand into Deep Learning & AI agents.",
        matchScore: 99,
        tag: "High AI Match"
      });
    }

    // Rule 2: If enrolled in Python and not Data Science, suggest Data Science
    if (enrolled.includes("python-pro") && !enrolled.includes("data-science")) {
      recommendations.push({
        courseId: "data-science",
        title: "Data Science & Dashboards",
        reason: "Matches your analytical background with Pandas & visual storytelling.",
        matchScore: 93,
        tag: "Career Boost"
      });
    }

    // Rule 3: If enrolled in Web Dev and not UI/UX
    if (enrolled.includes("web-dev") && !enrolled.includes("ui-ux")) {
      recommendations.push({
        courseId: "ui-ux",
        title: "UI/UX Design Systems & Figma",
        reason: "Elevate your frontend creations with industry design system mastery.",
        matchScore: 91,
        tag: "Design Skill"
      });
    }

    // Rule 4: Cybersecurity recommendation
    if (enrolled.includes("web-dev") && !enrolled.includes("cyber-security")) {
      recommendations.push({
        courseId: "cyber-security",
        title: "Cybersecurity Essentials",
        reason: "Learn secure coding standards and OWASP defense to protect web apps.",
        matchScore: 88,
        tag: "Security"
      });
    }

    // Fallback if user is enrolled in everything or new
    if (recommendations.length === 0) {
      COURSES_DATABASE.forEach(c => {
        if (!enrolled.includes(c.id)) {
          recommendations.push({
            courseId: c.id,
            title: c.title,
            reason: `Highly rated course by ${c.instructor} in ${c.categoryName}.`,
            matchScore: 89,
            tag: "Recommended"
          });
        }
      });
    }

    return recommendations.slice(0, 3);
  },

  // AI Tutor simulation for in-classroom Q&A
  askTutor: function(question, currentCourseId, currentLessonTitle) {
    const qLower = question.toLowerCase();
    
    if (qLower.includes("hello") || qLower.includes("hi")) {
      return `Hello! I'm your AI Study Copilot for **${currentLessonTitle || 'this course'}**. What concept would you like me to explain or clarify?`;
    }
    
    if (qLower.includes("flexbox") || qLower.includes("grid")) {
      return `**Flexbox vs CSS Grid Quick Guide:**\n\n• **Flexbox:** Best for 1-dimensional layouts (row or column alignment, navbar links, card content).\n• **CSS Grid:** Best for 2-dimensional layouts (entire page layouts, multi-column image galleries).\n\n💡 *Tip: You can use Flexbox inside Grid items for pixel-perfect component layouts!*`;
    }

    if (qLower.includes("react") || qLower.includes("hook") || qLower.includes("state")) {
      return `**React Hooks Explanation:**\n\n\`useState\` lets your functional components remember values between renders. For example:\n\`\`\`javascript\nconst [count, setCount] = useState(0);\n\`\`\`\nWhen \`setCount\` is called, React schedules a re-render of the component with the new state!`;
    }

    if (qLower.includes("python") || qLower.includes("list") || qLower.includes("dict")) {
      return `**Python Data Structures:**\n\n• \`List\`: Ordered, mutable collection (\`[1, 2, 3]\`)\n• \`Tuple\`: Ordered, immutable collection (\`(1, 2, 3)\`)\n• \`Dict\`: Key-value pairs with O(1) lookups (\`{'name': 'Alex'}\`)\n• \`Set\`: Unordered unique elements (\`{1, 2, 3}\`)`;
    }

    if (qLower.includes("summary") || qLower.includes("summarize") || qLower.includes("explain")) {
      return `**AI Lesson Summary:** In this lesson on *${currentLessonTitle}*, the main takeaways are understanding the core syntax, following modern architecture patterns, and verifying your understanding with interactive challenges!`;
    }

    if (qLower.includes("quiz") || qLower.includes("test")) {
      return `You can test your mastery right now by clicking the **Quiz Tab** above! Scoring 70%+ will qualify you for your verifiable course certificate.`;
    }

    // Contextual intelligent fallback
    return `Great question regarding **${currentLessonTitle || 'this topic'}**! In modern development, mastering these patterns provides a strong foundation. Would you like a code snippet example or a quick practice challenge to reinforce this concept?`;
  }
};

/* --- 4. CERTIFICATE CREATION & VERIFICATION --- */
function awardCourseCertificate(courseId) {
  const user = getCurrentUser();
  if (!user) return null;

  const course = COURSES_DATABASE.find(c => c.id === courseId);
  if (!course) return null;

  const certs = JSON.parse(localStorage.getItem(STORAGE_KEYS.CERTIFICATES)) || [];
  let existing = certs.find(c => c.userEmail === user.email && c.courseId === courseId);

  if (existing) return existing;

  const newCert = {
    id: "CERT-" + Math.random().toString(36).substring(2, 9).toUpperCase(),
    courseId: courseId,
    courseTitle: course.title,
    studentName: user.name,
    userEmail: user.email,
    issueDate: new Date().toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' }),
    instructor: course.instructor
  };

  certs.push(newCert);
  localStorage.setItem(STORAGE_KEYS.CERTIFICATES, JSON.stringify(certs));
  return newCert;
}

function getUserCertificates(userEmail) {
  const certs = JSON.parse(localStorage.getItem(STORAGE_KEYS.CERTIFICATES)) || [];
  return certs.filter(c => c.userEmail === userEmail);
}

/* --- 5. UI HELPERS & NOTIFICATIONS --- */
function showToast(message, type = "info") {
  let container = document.getElementById("toast-container");
  if (!container) {
    container = document.createElement("div");
    container.id = "toast-container";
    document.body.appendChild(container);
  }

  const icons = {
    success: "fa-check-circle",
    info: "fa-info-circle",
    warning: "fa-exclamation-triangle",
    danger: "fa-times-circle"
  };

  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  toast.innerHTML = `
    <i class="fas ${icons[type] || 'fa-info-circle'}" style="font-size: 1.15rem;"></i>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateX(100%)";
    toast.style.transition = "all 0.3s ease";
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// Update Top Navbar with active auth state
function updateNavbar() {
  const user = getCurrentUser();
  const navLinks = document.querySelector(".nav-links");
  const navActions = document.querySelector(".nav-actions");

  if (!navLinks) return;

  const isInPagesDir = window.location.pathname.includes("/pages/");
  const rootPath = isInPagesDir ? "../" : "";
  const pagesPath = isInPagesDir ? "" : "pages/";

  if (user) {
    // Authenticated state
    const firstLetter = user.name ? user.name.charAt(0).toUpperCase() : "U";
    
    // Replace login/register with Profile/Logout dropdown
    const authItems = navLinks.querySelectorAll(".nav-auth-item");
    authItems.forEach(el => el.remove());

    if (!document.querySelector(".nav-user-profile")) {
      const userElement = document.createElement("li");
      userElement.className = "nav-user-profile-item";
      userElement.innerHTML = `
        <div class="nav-user-profile" onclick="window.location.href='${rootPath}dashboard.html'">
          <div class="user-avatar-sm">${firstLetter}</div>
          <span class="user-nav-name">${user.name.split(' ')[0]}</span>
        </div>
      `;
      navLinks.appendChild(userElement);
    }
  }
}

// Expose to window & globalThis for seamless cross-script access
if (typeof window !== 'undefined') {
  window.COURSES_DATABASE = COURSES_DATABASE;
  window.STORAGE_KEYS = STORAGE_KEYS;
  window.aiEngine = aiEngine;
  window.getCurrentUser = getCurrentUser;
  window.setCurrentUser = setCurrentUser;
  window.registerUser = registerUser;
  window.loginUser = loginUser;
  window.logoutUser = logoutUser;
  window.enrollInCourse = enrollInCourse;
  window.getUserCourseProgress = getUserCourseProgress;
  window.toggleLessonCompleted = toggleLessonCompleted;
  window.awardCourseCertificate = awardCourseCertificate;
  window.getUserCertificates = getUserCertificates;
  window.showToast = showToast;
}

if (typeof globalThis !== 'undefined') {
  globalThis.COURSES_DATABASE = COURSES_DATABASE;
  globalThis.STORAGE_KEYS = STORAGE_KEYS;
  globalThis.aiEngine = aiEngine;
  globalThis.getCurrentUser = getCurrentUser;
  globalThis.setCurrentUser = setCurrentUser;
  globalThis.registerUser = registerUser;
  globalThis.loginUser = loginUser;
  globalThis.logoutUser = logoutUser;
  globalThis.enrollInCourse = enrollInCourse;
  globalThis.getUserCourseProgress = getUserCourseProgress;
  globalThis.toggleLessonCompleted = toggleLessonCompleted;
  globalThis.awardCourseCertificate = awardCourseCertificate;
  globalThis.getUserCertificates = getUserCertificates;
  globalThis.showToast = showToast;
}

/* --- 6. INITIALIZATION HOOKS --- */
document.addEventListener("DOMContentLoaded", () => {
  initializeDataStore();
  updateNavbar();
});