import { Project, Experience, SkillCategory, EducationItem, AchievementItem, BeyondCodeTopic } from '@/types';

export const PERSONAL_INFO = {
  name: 'Shivansh Tiwari',
  role: 'Software Developer & AI Enthusiast',
  headline: 'Building thoughtful digital experiences at the intersection of software and AI.',
  location: 'New Delhi, India',
  status: 'Open to Software Engineering & Frontend Internships',
  email: 'shivanshtiwari977@gmail.com',
  github: 'https://github.com/shivanshti97',
  linkedin: 'https://www.linkedin.com/in/shivansh-tiwari-813510307',
  awsBuilder: 'https://builder.aws.com/community/@shivanshti97',
  resumeUrl: '#contact',
  bio: `I am a Computer Science undergraduate at USICT, GGSIPU with a foundational Diploma in Computer Engineering from DSEU. My focus is on crafting responsive, accessible user interfaces, exploring scalable full-stack architectures, and developing applied AI/ML applications that solve tangible problems. As an AWS Student Builder Group Leader, I also lead community initiatives to make cloud technologies approachable for student developers.`,
};

export const PROJECTS: Project[] = [
  {
    id: 'quild-keilhq',
    title: 'KeilHQ Workspace & AI Integration',
    tagline: 'Modern engineering workspace with real-time features and AI-augmented workflows',
    category: 'Full-Stack',
    year: '2025',
    featured: true,
    githubUrl: 'https://github.com/shivanshti97',
    summary: 'Contributed as a Software Engineer & AI/ML Intern at Quild to implement core workspace features, optimize client-server latency, and integrate intelligent AI tools into user workflows.',
    problem: 'Modern developer workspaces require seamless synchronization, low latency under heavy state updates, and intuitive AI assistance without disrupting existing team workflows.',
    solution: 'Built high-performance UI components using Next.js, React, and TypeScript; architected Supabase schema integrations; and built AI copilot micro-features with comprehensive latency profiling.',
    architectureHighlights: [
      'Next.js App Router with server-side caching and dynamic client hydration',
      'Supabase Postgres relational architecture with row-level security (RLS)',
      'TypeScript strict typing across third-party API boundaries',
      'Tailwind CSS design token system ensuring responsive consistency'
    ],
    keyLearnings: [
      'Diagnosing real-world frontend bottlenecks and reducing redundant re-renders',
      'Safely streaming AI model completions into interactive editor panes',
      'Collaborative Git hygiene and cross-functional feature delivery'
    ],
    metrics: [
      { label: 'Role', value: 'Software & AI Intern' },
      { label: 'Stack', value: 'Next.js, TS, Supabase' },
      { label: 'Focus', value: 'UI & AI Pipelines' }
    ],
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Supabase', 'AI APIs', 'Git']
  },
  {
    id: 'text-analytics',
    title: 'Intelligent Text Analytics Platform',
    tagline: 'NLP pipeline for automated sentiment analysis, entity extraction, and thematic clustering',
    category: 'AI & ML',
    year: '2024',
    featured: true,
    githubUrl: 'https://github.com/shivanshti97/Intelligent-Text-Analytics-Platform',
    summary: 'An end-to-end NLP and machine learning platform built in Python that digests raw unstructured text, performs tokenization and sentiment classification, and visualizes linguistic patterns.',
    problem: 'Organizations receive vast amounts of unorganized text feedback, reviews, and documentation, making manual sentiment extraction slow and prone to subjective bias.',
    solution: 'Constructed an automated processing pipeline utilizing modern NLP heuristics, vector representations, and machine learning classifiers to extract thematic insights with interactive data dashboards.',
    architectureHighlights: [
      'Modular Python pipeline separating data ingestion, tokenization, and vectorization',
      'Feature engineering with TF-IDF and transformer-based sentence representations',
      'Interactive visual dashboard charting sentiment distributions and key ngram frequencies',
      'Optimized matrix computations using NumPy and Pandas for rapid throughput'
    ],
    keyLearnings: [
      'Handling edge cases in text preprocessing: noisy tokens, multilingual slang, and stopword nuances',
      'Balancing model inference latency against classification precision',
      'Structuring clean reproducible Jupyter experiments into production-ready Python modules'
    ],
    metrics: [
      { label: 'Domain', value: 'Natural Language' },
      { label: 'Language', value: 'Python' },
      { label: 'Platform', value: 'Interactive Analytics' }
    ],
    technologies: ['Python', 'Natural Language Processing', 'Scikit-Learn', 'Pandas', 'NumPy', 'Jupyter']
  },
  {
    id: 'mental-wellness',
    title: 'MindSpace — Mental Wellness Companion',
    tagline: 'Empathetic, privacy-focused mental wellness tracker and cognitive journaling web app',
    category: 'Frontend',
    year: '2024',
    featured: true,
    githubUrl: 'https://github.com/shivanshti97/Mental-wellness-app',
    summary: 'A clean, calm, and responsive web application engineered to help users log daily reflections, track emotional patterns, and practice mindful breathing exercises in a private environment.',
    problem: 'Many health apps feel overwhelming, cluttered with ads, or compromise personal privacy, which creates friction for users seeking peaceful mindfulness.',
    solution: 'Designed an editorial-style interface with soothing color palettes, local-first data storage for complete user privacy, interactive mood check-ins, and guided breathing animations.',
    architectureHighlights: [
      'TypeScript codebase with strict component interfaces and zero unverified dependencies',
      'Accessible, keyboard-navigable interactive controls with high contrast compliance',
      'Local-first persistent state ensuring personal journal entries remain private on-device',
      'Smooth CSS micro-animations for mindful breathing pacing and mood trend visualization'
    ],
    keyLearnings: [
      'Designing with intentional whitespace to reduce cognitive fatigue',
      'Managing state transitions smoothly without layout shifts',
      'Building responsive layouts optimized for mobile smartphone screens'
    ],
    metrics: [
      { label: 'Privacy', value: 'Local-First' },
      { label: 'Design', value: 'Accessibility First' },
      { label: 'Type', value: 'TypeScript Web App' }
    ],
    technologies: ['TypeScript', 'React', 'Tailwind CSS', 'Web Storage API', 'Responsive UI']
  },
  {
    id: 'expense-tracker',
    title: 'Smart Expense Tracker & Financial Advisor',
    tagline: 'Full-stack personal finance tracker with automated analytics and smart spending advice',
    category: 'Full-Stack',
    year: '2024',
    featured: true,
    githubUrl: 'https://github.com/shivanshti97/Expense-tracker',
    summary: 'A responsive full-stack finance dashboard built with Node.js, Express, and Chart.js. Computes recurring savings rates, renders interactive category doughnut charts, and delivers automated budgeting feedback.',
    problem: 'Budget tracking spreadsheets can be cumbersome to manage on mobile devices, while commercial apps often sell user data or require complex banking linkages.',
    solution: 'Created a lightweight, self-hostable expense tracker with an Express backend, file persistence, dynamic client-side Chart.js visualizations, and automated rule-based budgeting advice.',
    architectureHighlights: [
      'RESTful Express.js API handling CRUD operations for income and expense transactions',
      'Client-side Chart.js doughnut chart integration with animated category breakdowns',
      'Budget calculation engine evaluating monthly savings ratios and spending caps',
      'Mobile-first responsive styling with clean input validation'
    ],
    keyLearnings: [
      'Asynchronous data fetching and optimistic UI updates for instant feedback',
      'Chart.js lifecycle management and canvas canvas re-rendering prevention',
      'Structuring clean REST endpoints and error middleware in Node.js'
    ],
    metrics: [
      { label: 'Backend', value: 'Node.js & Express' },
      { label: 'Visuals', value: 'Chart.js Doughnut' },
      { label: 'Design', value: 'Mobile-Responsive' }
    ],
    technologies: ['JavaScript', 'Node.js', 'Express.js', 'Chart.js', 'HTML5', 'CSS3']
  },
  {
    id: 'shopsense-commerce',
    title: 'ShopSense E-Commerce Interface',
    tagline: 'Modern, performant shopping user interface with filterable catalog and cart state',
    category: 'Frontend',
    year: '2024',
    featured: false,
    githubUrl: 'https://github.com/shivanshti97/Shopsense',
    liveUrl: 'https://shopsense-six.vercel.app',
    summary: 'A production-deployed e-commerce interface featuring real-time product filtering, dynamic cart calculations, responsive grid architecture, and fast page loads.',
    problem: 'E-commerce catalogs frequently suffer from slow catalog filtering, jittery cart operations, and poor mobile checkout layouts.',
    solution: 'Constructed an optimized product catalog with instant client-side multi-attribute search, category pills, and responsive layout primitives deployed on Vercel.',
    architectureHighlights: [
      'Multi-filter state management for real-time catalog sorting without page reload',
      'Performant DOM rendering ensuring 60fps scrolling on low-power devices',
      'Production deployment pipeline on Vercel with automatic asset optimization'
    ],
    keyLearnings: [
      'Building robust checkout and cart state persistence patterns',
      'Implementing fluid image containers and aspect-ratio CSS standards'
    ],
    technologies: ['JavaScript', 'HTML5', 'CSS3', 'Vercel Deployment', 'State Management']
  },
  {
    id: 'weather-intelligence',
    title: 'Real-Time Weather Intelligence',
    tagline: 'Live atmospheric tracking app with dynamic weather theming and geolocation',
    category: 'Frontend',
    year: '2024',
    featured: false,
    githubUrl: 'https://github.com/shivanshti97/Weather-app',
    liveUrl: 'https://weather-app-khaki-seven-rkmdzoy44q.vercel.app',
    summary: 'Clean, responsive weather dashboard connecting to live meteorological APIs, providing 5-day forecasts, wind/humidity telemetry, and contextual visual themes based on current conditions.',
    problem: 'Traditional weather portals are cluttered with distracting banner ads and slow scripts.',
    solution: 'Engineered a lightweight, minimalist weather portal that parses live geo-coordinates or city queries, displaying atmospheric conditions with crisp typography.',
    architectureHighlights: [
      'Browser Geolocation API integration with automatic fallback search',
      'Asynchronous REST API client with resilient error handling and status indicators',
      'Context-aware background shifts matching sunny, rainy, and overcast atmospheres'
    ],
    keyLearnings: [
      'Handling asynchronous API failure states gracefully with user-friendly alerts',
      'Optimizing API calls with debounced input to prevent rate limiting'
    ],
    technologies: ['JavaScript', 'REST API', 'Geolocation API', 'CSS Grid', 'Vercel']
  },
  {
    id: 'house-predictor-ml',
    title: 'House Price Predictor & ML Algorithm Suite',
    tagline: 'Regression modeling, feature correlation analysis, and foundational algorithms from scratch',
    category: 'AI & ML',
    year: '2024',
    featured: false,
    githubUrl: 'https://github.com/shivanshti97/Housepredictor',
    summary: 'Machine learning project analyzing multivariate real estate metrics to predict property valuations, accompanied by from-scratch implementations of core ML algorithms.',
    problem: 'Understanding machine learning requires grasping how mathematical optimization works underneath high-level abstractions like scikit-learn.',
    solution: 'Built regression pipelines analyzing feature correlation, outlier elimination, and normalization, alongside writing fundamental algorithms (gradient descent, loss functions) in pure Python.',
    architectureHighlights: [
      'Data preprocessing pipeline handling missing features, collinearity, and scaling',
      'Comparative evaluation between multiple regression architectures and loss functions',
      'Visual correlation heatmaps and residual distribution curves'
    ],
    keyLearnings: [
      'The importance of feature engineering over raw model complexity',
      'Mathematical foundations of gradient descent convergence'
    ],
    technologies: ['Python', 'Machine Learning', 'Jupyter', 'Pandas', 'Matplotlib', 'Scikit-Learn']
  },
  {
    id: 'travelbuddy-explorer',
    title: 'TravelBuddy Destination Guide',
    tagline: 'Editorial travel exploration app showcasing curated destinations and itineraries',
    category: 'Frontend',
    year: '2024',
    featured: false,
    githubUrl: 'https://github.com/shivanshti97/travelbuddy',
    liveUrl: 'https://travelbuddy-ruddy.vercel.app',
    summary: 'An editorial travel discovery web experience featuring curated itineraries, high-resolution visual storytelling, and responsive discovery grids.',
    problem: 'Travel discovery sites are frequently cluttered, failing to convey the atmosphere and inspiration of travel destinations.',
    solution: 'Created an editorial visual layout with clean typographic hierarchy, smooth card hover states, and responsive navigation.',
    architectureHighlights: [
      'Grid and Flexbox responsive framework supporting multiple device viewports',
      'Fluid typographic scale adapting cleanly across mobile and desktop displays'
    ],
    keyLearnings: [
      'Balancing high-resolution photography with fast web asset loading',
      'Crafting intuitive mobile navigation drawers'
    ],
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive UI', 'Vercel']
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'quild-keilhq',
    company: 'Quild — KeilHQ',
    role: 'Software Engineer & AI/ML Intern',
    period: '3 Months (2025)',
    location: 'Remote',
    badge: 'Industry Experience',
    type: 'Internship',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Supabase', 'AI Feature Integration', 'GitHub'],
    description: [
      'Collaborated on core feature development using Next.js, React, TypeScript, and Tailwind CSS, maintaining strict type safety and component reusability.',
      'Contributed to the analysis and refinement of system architecture, evaluating client-server performance, database queries, and component re-render bottlenecks.',
      'Designed and implemented third-party and internal API integrations, including Supabase backend connections and authentication flows.',
      'Assisted in integrating AI-driven features into the platform and conducted end-to-end performance and latency testing across user interaction paths.',
      'Participated in code reviews, bug diagnostics, and Git workflows within an agile development team.'
    ]
  },
  {
    id: 'aws-student-builder',
    company: 'AWS Student Builder Group',
    role: 'AWS Student Builder Group Leader',
    period: '2025 – Present',
    location: 'New Delhi, India',
    badge: 'Community Leadership',
    type: 'Leadership',
    technologies: ['AWS Cloud', 'Serverless', 'Cloud Architecture', 'Community Mentorship', 'Technical Workshops'],
    description: [
      'Selected as an AWS Student Builder Group Leader to represent and cultivate the cloud builder community on campus.',
      'Organizing hands-on cloud workshops, architectural discussions, and technical sessions focusing on AWS fundamentals, serverless computing, and modern cloud deployment patterns.',
      'Mentoring fellow engineering students in exploring cloud certifications, student developer programs, and building real-world cloud-backed projects.',
      'Active contributor to the official AWS Builder Center community (@shivanshti97).'
    ]
  },
  {
    id: 'microsoft-elevate',
    company: 'Microsoft Elevate / AICTE',
    role: 'Power BI & Data Analytics Intern',
    period: 'February 2026 – March 2026',
    location: 'Virtual / Industry Program',
    badge: 'Analytics & BI',
    type: 'Internship',
    technologies: ['Power BI', 'Data Analysis', 'DAX', 'Data Visualization', 'Business Intelligence'],
    description: [
      'Underwent intensive technical training and project implementation in data modeling, exploratory analysis, and business intelligence.',
      'Engineered interactive Power BI dashboards translating complex datasets into clear visual KPIs and actionable stakeholder insights.',
      'Formulated calculated measures, data transformation pipelines, and visual hierarchies to identify operational trends.'
    ]
  },
  {
    id: 'sofcon-aiml',
    company: 'Sofcon',
    role: 'AI & Machine Learning Intern',
    period: 'May 2024 – June 2024',
    location: 'India',
    badge: 'Machine Learning',
    type: 'Internship',
    technologies: ['Python', 'Machine Learning', 'Data Preprocessing', 'Scikit-Learn', 'Model Evaluation'],
    description: [
      'Gained structured practical exposure to artificial intelligence paradigms, supervised learning algorithms, and exploratory data analysis.',
      'Implemented foundational machine learning pipelines in Python, covering data cleaning, feature normalization, model training, and performance metrics.',
      'Collaborated on practical machine learning case studies examining classification and regression models.'
    ]
  },
  {
    id: 'gssoc-2026',
    company: 'GirlScript Summer of Code (GSSoC)',
    role: 'Open-Source Contributor — AI Agents Track',
    period: '2026',
    location: 'Open Source / Remote',
    badge: 'Open Source',
    type: 'Open Source',
    technologies: ['Open Source', 'AI Agents', 'Git / GitHub', 'Python', 'TypeScript'],
    description: [
      'Selected to contribute to open-source initiatives within the specialized AI Agents and developer tools tracks.',
      'Authored pull requests addressing bugs, documentation clarity, and modular agent tool implementations.',
      'Collaborated with global maintainers through peer code reviews and community discussions.'
    ]
  },
  {
    id: 'iete-technical',
    company: 'IETE Technical Team',
    role: 'Technical Team Member & Coordinator',
    period: '2023 – 2025',
    location: 'Delhi, India',
    badge: 'Campus Involvement',
    type: 'Leadership',
    technologies: ['Team Collaboration', 'Technical Event Operations', 'Web Support', 'Workshops'],
    description: [
      'Actively collaborated within the institution’s IETE (Institution of Electronics and Telecommunication Engineers) chapter.',
      'Supported technical operations, web promotion, and student coordination during technical symposiums and coding competitions.'
    ]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: 'Programming & Languages',
    description: 'Core languages I use to construct reliable logic, algorithms, and applications',
    skills: [
      { name: 'Python', level: 'Core' },
      { name: 'JavaScript (ES6+)', level: 'Core' },
      { name: 'TypeScript', level: 'Proficient' },
      { name: 'HTML5', level: 'Core' },
      { name: 'CSS3', level: 'Core' }
    ]
  },
  {
    category: 'Frontend Development',
    description: 'Building responsive, accessible, high-performance user interfaces',
    skills: [
      { name: 'React.js', level: 'Core' },
      { name: 'Next.js (App Router)', level: 'Proficient' },
      { name: 'Tailwind CSS', level: 'Core' },
      { name: 'Responsive Web Design', level: 'Core' },
      { name: 'UI / UX Design Heuristics', level: 'Proficient' },
      { name: 'Framer Motion', level: 'Proficient' }
    ]
  },
  {
    category: 'AI & Machine Learning',
    description: 'Applied machine learning, NLP, and intelligent application features',
    skills: [
      { name: 'Machine Learning Fundamentals', level: 'Proficient' },
      { name: 'Natural Language Processing', level: 'Proficient' },
      { name: 'Scikit-Learn & Pandas', level: 'Proficient' },
      { name: 'AI API Integrations', level: 'Proficient' },
      { name: 'AI Agents & LLM Workflows', level: 'Exploring' },
      { name: 'Data Preprocessing & EDA', level: 'Proficient' }
    ]
  },
  {
    category: 'Tools, Cloud & Platforms',
    description: 'Developer tooling, database systems, and cloud infrastructure',
    skills: [
      { name: 'Git & GitHub', level: 'Core' },
      { name: 'AWS Cloud Fundamentals', level: 'Proficient' },
      { name: 'Supabase & SQL', level: 'Proficient' },
      { name: 'Power BI', level: 'Proficient' },
      { name: 'VS Code', level: 'Core' },
      { name: 'Figma', level: 'Proficient' },
      { name: 'Vercel Deployment', level: 'Proficient' },
      { name: 'Data Structures & Algorithms', level: 'Exploring' }
    ]
  }
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    institution: 'University School of Information, Communication and Technology (USICT), GGSIPU',
    shortName: 'USICT, Guru Gobind Singh Indraprastha University',
    degree: 'Bachelor of Technology (B.Tech) in Computer Science and Engineering',
    period: '2025 – 2028',
    score: 'Current SGPA: 8.7',
    current: true,
    highlights: [
      'Maintained consistent academic distinction with an 8.7 SGPA in rigorous engineering coursework.',
      'Active leadership as AWS Student Builder Group Leader, fostering peer technical workshops on campus.',
      'Coursework: Advanced Data Structures, Object-Oriented Software Design, Operating Systems, Computer Architecture, Database Systems.'
    ]
  },
  {
    institution: 'Delhi Skill and Entrepreneurship University (DSEU)',
    shortName: 'DSEU, Govt. of Delhi',
    degree: 'Diploma in Computer Engineering',
    period: '2022 – 2025',
    score: 'First Division with Distinction',
    current: false,
    highlights: [
      'Built a rock-solid foundation in computer engineering principles, software development, and electronics.',
      'Led student technical presentations and collaborated in hands-on lab projects spanning web development, database management, and networking.',
      'Successfully transitioned directly into USICT B.Tech CSE via lateral merit.'
    ]
  }
];

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    title: 'AWS Student Builder Group Leader',
    issuer: 'Amazon Web Services (AWS)',
    date: '2025',
    badge: 'Selected Leader',
    description: 'Appointed to lead the student cloud community, coordinate practical workshops, and champion cloud builder culture.',
    url: 'https://builder.aws.com/community/@shivanshti97'
  },
  {
    title: 'KeilHQ / Quild Software & AI Internship',
    issuer: 'Quild',
    date: '2025',
    badge: 'Industry Verified',
    description: 'Three-month tenure engineering Next.js frontend interfaces, Supabase integrations, and AI-enabled product workflows.'
  },
  {
    title: 'Microsoft Elevate / AICTE Internship',
    issuer: 'Microsoft & AICTE',
    date: '2026',
    badge: 'Data & BI',
    description: 'Selected for intensive data analytics and business intelligence training with hands-on Power BI dashboard delivery.'
  },
  {
    title: 'GirlScript Summer of Code 2026',
    issuer: 'GirlScript Foundation',
    date: '2026',
    badge: 'Open Source',
    description: 'Contributing to open-source software within AI Agent and developer tool repositories.'
  },
  {
    title: 'Sofcon AI & ML Practical Certification',
    issuer: 'Sofcon India',
    date: '2024',
    badge: 'Machine Learning',
    description: 'Completed hands-on machine learning training covering data modeling, regression, and algorithmic evaluation.'
  }
];

export const BEYOND_CODE: BeyondCodeTopic[] = [
  {
    eyebrow: '01 / SYSTEM INVESTIGATION',
    title: 'Deconstructing Software Architecture',
    description: 'Rather than treating libraries as black boxes, I enjoy dissecting how Next.js handles server rendering, how Supabase synchronizes real-time subscriptions, and how state transitions propagate through complex React component trees.',
    tags: ['Architecture', 'Internals', 'Performance'],
    status: 'Deepening Knowledge'
  },
  {
    eyebrow: '02 / EMERGING PARADIGMS',
    title: 'The Evolution of AI Agents',
    description: 'I am fascinated by how autonomous agents reason through tool calling, memory stores, and context planning. Through GSSoC and personal experiments, I explore how LLM agents can move from simple text generation to reliable task execution.',
    tags: ['AI Agents', 'Tool Calling', 'LLM Workflows'],
    status: 'Active Exploration'
  },
  {
    eyebrow: '03 / CLOUD INFRASTRUCTURE',
    title: 'AWS & Cloud-Native Engineering',
    description: 'As an AWS Student Builder Group Leader, I spend time exploring serverless architectures, IAM security policies, Lambda event triggers, and how modern distributed applications scale efficiently with minimal operational overhead.',
    tags: ['AWS Cloud', 'Serverless', 'Community Leadership'],
    status: 'Ongoing Practice'
  },
  {
    eyebrow: '04 / CRAFT & INTERFACE',
    title: 'UI/UX & Editorial Micro-Interactions',
    description: 'I believe code is only as good as the human experience it enables. I study typography pairings, spatial harmony, tactile feedback, and accessible navigation to build products that feel calm, intentional, and memorable.',
    tags: ['Design Systems', 'Micro-Interactions', 'Typography'],
    status: 'Continuous Craft'
  },
  {
    eyebrow: '05 / COMPUTING ROOTS',
    title: 'Data Structures & CS Fundamentals',
    description: 'Consistent focus on mastering core problem solving, algorithmic complexity, tree and graph traversals, and low-level memory concepts to build resilient software foundations.',
    tags: ['DSA', 'Algorithmic Complexity', 'Problem Solving'],
    status: 'Daily Habit'
  }
];
