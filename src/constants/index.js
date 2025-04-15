import {
  frontend,
  docker,
  Kubernetes,
  backend,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  figma,
  postgresql,
  aws,
  nextjs,
  MediPredict,
  MorphoVid,
  VisionScale,
  VisuoCode,
  company
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Devops',
    icon: backend,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Next.js',
    icon: nextjs,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  
  {
    name: 'postgresql',
    icon: postgresql,
  },
  {
    name: 'AWS',
    icon: aws,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'Docker',
    icon: docker,
  },
  {
    name: 'Kubernetes',
    icon: Kubernetes,
  },
  
];

const experiences = [
  {
    title: 'Founding Software Engineer',
    company_name: 'Prevale',
    icon: company,
    iconBg: '#333333',
    date: 'Aug 2021 - May 2023',
  },
  {
    title: 'Software Developer Intern',
    company_name: 'Global Discovery Academy',
    icon: company,
    iconBg: '#333333',
    date: 'Dec 2020 - April 2021',
  },
  
];

const projects = [
  {
    id: 'project-1',
    name: 'VisuoCode',
    description: 'AI-powered tool that visually explains code logic using animated data structures and step-by-step execution.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'python',
        color: 'green-text-gradient',
      },
      {
        name: 'd3.js',
        color: 'pink-text-gradient',
      },
    ],
    image: VisuoCode,
    repo: 'https://github.com/kaustubhuk8/CodeVisualizer',
    demo: '',
  },
  {
    id: 'project-2',
    name: 'MediPredict',
    description:
      'ML-driven pipeline for predicting diseases from patient data using ensemble models and scikit-learn.',
    tags: [
      {
        name: 'python',
        color: 'blue-text-gradient',
      },
      {
        name: 'pandas',
        color: 'green-text-gradient',
      },
      {
        name: 'scikit-learn',
        color: 'pink-text-gradient',
      },
    ],
    image: MediPredict,
    repo: 'https://github.com/kaustubhuk8/PredicitiveHealthcare',
    demo: '',
  },
  {
    id: 'project-3',
    name: 'MorphoVid',
    description: 'Generative AI model that transforms videos using diffusion techniques and PyTorch pipelines.',
    tags: [
      {
        name: 'python',
        color: 'blue-text-gradient',
      },
      {
        name: 'pytorch',
        color: 'green-text-gradient',
      },
      {
        name: 'diffusers',
        color: 'pink-text-gradient',
      },
    ],
    image: MorphoVid,
    repo: 'https://github.com/kaustubhuk8/VideoDiffusion',
    demo: '',
  },
  {
    id: 'project-4',
    name: 'VisionScale',
    description: 'A cloud-native face recognition pipeline that evolved from EC2-based autoscaling to a fully serverless Lambda architecture. It processes images and videos using FFmpeg and ResNet, showcasing deep learning deployment and elastic AWS infrastructure.',
    tags: [
      {
        name: 'python',
        color: 'blue-text-gradient',
      },
      {
        name: 'aws',
        color: 'green-text-gradient',
      },
      {
        name: 's3',
        color: 'pink-text-gradient',
      },
    ],
    image: VisionScale,
    repo: 'https://github.com/kaustubhuk8/VideoDiffusion',
    demo: '',
  },
  
];

export { services, technologies, experiences, projects };
