export interface ProjectItem {
  number: string;
  category: string;
  title: string;
  description: string;
  stack: string[];
  thumbClass: string;
  accentClass: string;
  github: string;
  live: string;
  icon: string;
}

export const SKILL_CATEGORIES = [
  {
    title: 'Frontend',
    tags: ['Angular 8–19', 'TypeScript', 'JavaScript', 'ReactJS', 'HTML5 / CSS3', 'RxJS', 'Bootstrap', 'Tailwind']
  },
  {
    title: 'Backend & DB',
    tags: ['NodeJS', 'ExpressJS', 'MongoDB', 'Java', 'Python', 'REST APIs', 'JWT Auth']
  },
  {
    title: 'Maps & Visualization',
    tags: ['CesiumJS', 'OpenLayers', 'Chart.js', 'ECharts', 'GeoServer', '3D Visualization']
  },
  {
    title: 'Tools & Practices',
    tags: ['Git / GitHub', 'Agile / Scrum', 'Responsive UI', 'Performance Optimization', 'Figma', 'Component Architecture']
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    number: '01',
    category: 'Travel · Full Stack',
    title: 'TourWithMaps',
    description: 'MEAN stack travel booking platform with JWT auth, dynamic destination filtering, booking workflows, and map-based location visualization using OpenLayers.',
    stack: ['Angular 19', 'NodeJS', 'ExpressJS', 'MongoDB', 'OpenLayers', 'JWT'],
    thumbClass: 'thumb-1',
    accentClass: 'thumb-accent-1',
    github: '#',
    live: '#',
    icon: 'shield'
  },
  {
    number: '02',
    category: 'Analytics · Enterprise',
    title: 'Billing Analytics Dashboard',
    description: 'Enterprise analytics interface for billing insights with categorized breakdowns, responsive summary cards, charts, and data-rich drill-down screens.',
    stack: ['Angular 8', 'TypeScript', 'Chart.js', 'Bootstrap', 'RxJS'],
    thumbClass: 'thumb-2',
    accentClass: 'thumb-accent-2',
    github: '#',
    live: '#',
    icon: 'radar'
  },
  {
    number: '03',
    category: 'GIS · Utility',
    title: 'OpenLayers Consumer Map View',
    description: 'Interactive map module for consumer and substation visualization with icon categorization, filtering logic, overlays, and popup detail rendering.',
    stack: ['Angular', 'OpenLayers', 'TypeScript', 'Geo JSON', 'Map Layers'],
    thumbClass: 'thumb-3',
    accentClass: 'thumb-accent-3',
    github: '#',
    live: '#',
    icon: 'grid'
  },
  {
    number: '04',
    category: 'Visualization · 3D',
    title: 'CesiumJS Terrain Experience',
    description: '3D geospatial prototype focused on immersive terrain and object visualization for modern web-based location intelligence experiences.',
    stack: ['Angular', 'CesiumJS', 'TypeScript', '3D', 'UI Engineering'],
    thumbClass: 'thumb-4',
    accentClass: 'thumb-accent-4',
    github: '#',
    live: '#',
    icon: 'mountain'
  },
  {
    number: '05',
    category: 'Mock Test · MEAN',
    title: 'Marketplace / Ticketing Mock Apps',
    description: 'Hands-on MEAN mock applications built for test practice, including CRUD, search, sort, validation, booking flows, and strict backend status handling.',
    stack: ['Angular', 'NodeJS', 'ExpressJS', 'MongoDB', 'REST APIs'],
    thumbClass: 'thumb-5',
    accentClass: 'thumb-accent-5',
    github: '#',
    live: '#',
    icon: 'triangle'
  },
  {
    number: '06',
    category: 'Portfolio · Frontend',
    title: 'Angular 19 Portfolio',
    description: 'A modern responsive portfolio with premium dark UI, smooth scrolling, animated reveals, routed architecture, and reusable standalone components.',
    stack: ['Angular 19', 'Standalone APIs', 'Routing', 'Responsive UI', 'CSS Animations'],
    thumbClass: 'thumb-6',
    accentClass: 'thumb-accent-6',
    github: '#',
    live: '#',
    icon: 'bars'
  }
];

export const EXPERIENCE = [
  {
    period: '2025 — Present',
    company: 'Tata Consultancy Services (TCS)',
    role: 'Frontend Developer',
    description: 'Building enterprise-scale applications with Angular, TypeScript, Bootstrap, mapping libraries, and analytics-heavy UI screens. Focused on responsive interfaces, data visualization, and user-centric interaction patterns.',
    techs: ['Angular 8–19', 'TypeScript', 'OpenLayers', 'CesiumJS', 'Chart.js', 'NodeJS']
  },
  {
    period: '2020 — 2024',
    company: 'Academic & Personal Projects',
    role: 'Full Stack / Frontend Developer',
    description: 'Created full-stack projects, dashboard interfaces, and map-driven applications while completing engineering studies, strengthening practical skills in modern JavaScript ecosystems.',
    techs: ['Angular', 'ReactJS', 'ExpressJS', 'MongoDB', 'Java', 'Python']
  }
];
