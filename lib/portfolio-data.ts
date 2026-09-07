export const SOCIALS = {
  github: 'https://github.com/',
  linkedin: 'https://www.linkedin.com/',
  email: 'mailto:hello@samikshya.dev',
}

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export const STATS = [
  { value: '1.5+', label: 'Years Experience' },
  { value: '10+', label: 'Projects Built' },
  { value: 'MERN', label: 'Full Stack' },
  { value: '100%', label: 'Client Focused' },
]

export const SERVICES = [
  {
    number: '01',
    icon: 'Globe',
    title: 'Business Websites',
    description:
      'Modern, responsive websites for companies, startups and service businesses.',
  },
  {
    number: '02',
    icon: 'Layers',
    title: 'React / Next.js Applications',
    description:
      'Fast and scalable web applications with modern frontend architecture.',
  },
  {
    number: '03',
    icon: 'LayoutDashboard',
    title: 'Admin Dashboards',
    description:
      'Powerful dashboards for managing users, products, employees and business data.',
  },
  {
    number: '04',
    icon: 'ShoppingCart',
    title: 'E-Commerce',
    description:
      'Modern product catalogues, shopping experiences and management systems.',
  },
  {
    number: '05',
    icon: 'Wand2',
    title: 'Website Redesign',
    description:
      'Transform outdated websites into modern, responsive digital experiences.',
  },
  {
    number: '06',
    icon: 'Wrench',
    title: 'Bug Fixing & Maintenance',
    description:
      'Fix frontend, API, responsiveness, deployment and performance issues.',
  },
]

export type Project = {
  slug: string
  title: string
  subtitle: string
  description: string
  image: string
  tech: string[]
  features: string[]
  liveUrl?: string
  featured: boolean
  challenge: string
  solution: string
  role: string
  result: string
}

export const PROJECTS: Project[] = [
  {
    slug: 'bricknbath',
    title: 'Bricknbath',
    subtitle: 'Bathroom Renovation & Service Platform',
    description:
      'A modern digital platform for bathroom renovation services, packages, products and customer interactions.',
    image: '/projects/bricknbath.png',
    tech: ['React', 'Next.js', 'Tailwind', 'Node.js', 'MongoDB'],
    features: [
      'Service packages',
      'Product collections',
      'Booking flow',
      'Responsive UI',
      'Management functionality',
    ],
    liveUrl: '#',
    featured: true,
    challenge:
      'The client needed a professional online presence that could showcase renovation packages, let customers browse curated products, and capture booking requests — all without a confusing multi-step experience.',
    solution:
      'I built a fast, content-driven platform with clearly structured service packages, a filterable product collection, and a streamlined booking flow, backed by a Node.js and MongoDB layer for managing content and requests.',
    role: 'Full Stack (Frontend + Backend)',
    result:
      'A polished, conversion-focused platform that presents renovation services professionally and makes it easy for customers to request bookings.',
  },
  {
    slug: 'bricknbar',
    title: 'Bricknbar',
    subtitle: 'Construction Material & Services Platform',
    description:
      'A digital platform connecting construction materials, products, vendors and services.',
    image: '/projects/bricknbar.png',
    tech: ['React', 'Next.js', 'Node.js', 'MongoDB'],
    features: [
      'Product catalogue',
      'Vendor management',
      'Services',
      'Admin panel',
      'Product management',
    ],
    liveUrl: '#',
    featured: true,
    challenge:
      'Connecting construction material vendors, products and services in one place required a scalable catalogue and an admin system to manage a growing inventory.',
    solution:
      'I developed a catalogue-driven marketplace with vendor and product management, plus a dedicated admin panel to handle listings, services and day-to-day operations.',
    role: 'Full Stack (Frontend + Backend)',
    result:
      'A structured platform that brings vendors, products and services together with an admin panel that keeps everything manageable.',
  },
  {
    slug: 'smart-quotation-generator',
    title: 'Smart Quotation Generator',
    subtitle: 'Dynamic Business Quotation System',
    description:
      'A quotation generation platform that allows businesses to create professional quotations dynamically.',
    image: '/projects/quotation.png',
    tech: ['React', 'JavaScript', 'Tailwind', 'HTML2Canvas', 'jsPDF'],
    features: [
      'Package selection',
      'Add-ons',
      'Dynamic calculations',
      'Preview',
      'PDF generation',
      'Print',
      'Reset / Edit',
    ],
    liveUrl: '#',
    featured: true,
    challenge:
      'The business was manually creating quotations, which was slow and error-prone. They needed a tool to generate accurate, professional quotes on the fly.',
    solution:
      'I built a dynamic quotation builder with package and add-on selection, real-time calculations, a live preview, and one-click PDF export and printing using jsPDF and HTML2Canvas.',
    role: 'Frontend Developer',
    result:
      'Quotations that used to take a long time to prepare are now generated in seconds as clean, downloadable PDFs.',
  },
  {
    slug: 'employee-management-reporting',
    title: 'Employee Management & Reporting',
    subtitle: 'Business Employee Reporting System',
    description:
      'An internal system for managing employees, departments and teams with manager reporting and dashboards.',
    image: '/projects/employee.png',
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    features: [
      'Employee management',
      'Department management',
      'Team management',
      'Manager reporting',
      'Dashboard',
      'CRUD operations',
    ],
    liveUrl: '#',
    featured: false,
    challenge:
      'The organization needed a centralized way to manage employees, departments and teams while giving managers clear reporting.',
    solution:
      'I built a full CRUD management system with a reporting dashboard, role-based views for managers, and structured department and team management.',
    role: 'Full Stack (Frontend + Backend)',
    result:
      'A single dashboard that replaced scattered spreadsheets and gave managers clear visibility into their teams.',
  },
  {
    slug: 'job-portal',
    title: 'Job Portal',
    subtitle: 'Job Listing & Application Platform',
    description:
      'A job portal where candidates can browse listings and apply, with employer-side posting.',
    image: '/projects/jobportal.png',
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    features: [
      'Job listings',
      'Search & filters',
      'Applications',
      'Employer posting',
      'Responsive UI',
    ],
    liveUrl: '#',
    featured: false,
    challenge:
      'Candidates and employers needed a simple place to connect through job listings and applications.',
    solution:
      'I built a job portal with searchable listings, filtering, an application flow for candidates and posting tools for employers.',
    role: 'Full Stack (Frontend + Backend)',
    result:
      'A working job marketplace that connects candidates with opportunities through a clean, responsive interface.',
  },
]

export const SKILL_CATEGORIES = [
  {
    name: 'Frontend',
    icon: 'Monitor',
    skills: [
      { name: 'React.js', desc: 'Component-based UIs' },
      { name: 'Next.js', desc: 'SSR & full-stack React' },
      { name: 'JavaScript', desc: 'Core language' },
      { name: 'TypeScript', desc: 'Type-safe code' },
      { name: 'Tailwind CSS', desc: 'Utility-first styling' },
      { name: 'HTML5', desc: 'Semantic markup' },
      { name: 'CSS3', desc: 'Modern layouts' },
      { name: 'Redux', desc: 'State management' },
    ],
  },
  {
    name: 'Backend',
    icon: 'Server',
    skills: [
      { name: 'Node.js', desc: 'Server-side JS' },
      { name: 'Express.js', desc: 'REST API framework' },
      { name: 'REST APIs', desc: 'API design' },
      { name: 'JWT', desc: 'Token auth' },
      { name: 'Authentication', desc: 'Secure access' },
    ],
  },
  {
    name: 'Database',
    icon: 'Database',
    skills: [
      { name: 'MongoDB', desc: 'NoSQL database' },
      { name: 'Firebase', desc: 'Realtime backend' },
    ],
  },
  {
    name: 'Tools',
    icon: 'Wrench',
    skills: [
      { name: 'Git', desc: 'Version control' },
      { name: 'GitHub', desc: 'Collaboration' },
      { name: 'Vercel', desc: 'Deployment' },
      { name: 'Postman', desc: 'API testing' },
      { name: 'Figma', desc: 'Design handoff' },
    ],
  },
]

export const MARQUEE_ITEMS = [
  'React',
  'Next.js',
  'JavaScript',
  'TypeScript',
  'Tailwind',
  'Node.js',
  'Express',
  'MongoDB',
  'Git',
  'GitHub',
]

export const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Discover',
    description: 'Understand the business, users and requirements.',
  },
  {
    number: '02',
    title: 'Plan',
    description: 'Define features, technology and development strategy.',
  },
  {
    number: '03',
    title: 'Design',
    description: 'Create a clean and intuitive user experience.',
  },
  {
    number: '04',
    title: 'Develop',
    description: 'Build the frontend, backend and integrations.',
  },
  {
    number: '05',
    title: 'Test',
    description: 'Test responsiveness, functionality and performance.',
  },
  {
    number: '06',
    title: 'Launch',
    description: 'Deploy the application and provide support.',
  },
]

export const WHY_ME = [
  {
    icon: 'Palette',
    title: 'Clean & Modern UI',
    description: 'I focus on responsive and user-friendly interfaces.',
  },
  {
    icon: 'Target',
    title: 'Business-Focused Development',
    description: 'I build solutions around real business requirements.',
  },
  {
    icon: 'Smartphone',
    title: 'Responsive Everywhere',
    description: 'Websites should work perfectly across desktop, tablet and mobile.',
  },
  {
    icon: 'MessageSquare',
    title: 'Clear Communication',
    description: 'Keep clients updated throughout development.',
  },
  {
    icon: 'Rocket',
    title: 'Production Ready',
    description: 'Code should be maintainable, scalable and deployment-ready.',
  },
  {
    icon: 'LifeBuoy',
    title: 'Post-Launch Support',
    description: 'Provide support and improvements after delivery.',
  },
]

export const TESTIMONIALS = [
  {
    quote:
      'Delivered exactly what we envisioned and communicated clearly at every step. The final website looked premium and worked flawlessly across devices.',
    name: 'Sample Client',
    company: 'Sample Company',
    projectType: 'Business Website',
  },
  {
    quote:
      'The dashboard she built made managing our operations dramatically easier. Clean code, thoughtful UX and reliable delivery.',
    name: 'Sample Client',
    company: 'Sample Startup',
    projectType: 'Admin Dashboard',
  },
  {
    quote:
      'Turned a rough idea into a polished, production-ready web application. Would happily work together again.',
    name: 'Sample Client',
    company: 'Sample Agency',
    projectType: 'Web Application',
  },
]
