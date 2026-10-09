import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FaAsterisk } from 'react-icons/fa';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

import pemaHomeImg from '../assets/proje-görselleri/pema-home1.webp';
import bilgecanImg from '../assets/proje-görselleri/Bilgecan.webp';
import portfolioImg from '../assets/proje-görselleri/portfolio.webp';
import vantImg from '../assets/proje-görselleri/vant1.webp';
import erganiImg from '../assets/proje-görselleri/Ergani Yıldız Spor Futbol Kulübü.webp';
import inboxImg from '../assets/proje-görselleri/inbox-coffe.webp';

import vantVideo from '../assets/proje videoları/vans.webm';
import portfolioVideo from '../assets/proje videoları/portfolio.webm';
import erganiVideo from '../assets/proje videoları/ergani-yıldız-spor.webm';
import inboxVideo from '../assets/proje videoları/inbox-coffee.webm';

const projects = [
  {
    id: 1,
    title: 'Kişisel Portfolyo',
    type: 'Frontend Geliştirme',
    tech: ['React', 'Framer Motion', 'Vite'],
    image: portfolioImg,
    video: portfolioVideo,
    github: 'https://github.com/burak-dursunn/burak-dursun',
    live: 'https://burak-dursun.vercel.app/',
  },
  {
    id: 6,
    title: 'Inbox Coffee',
    type: 'Kurumsal Web Sitesi',
    tech: ['React', 'Tailwind CSS', 'Framer Motion'],
    image: inboxImg,
    video: inboxVideo,
    github: 'https://github.com/burak-dursunn/inbox-coffee',
    live: 'https://inboxotomat.com',
  },
  {
    id: 5,
    title: 'Ergani Yıldız Spor',
    type: 'Spor Kulübü Platformu',
    tech: ['React', 'Tailwind CSS'],
    image: erganiImg,
    video: erganiVideo,
    github: 'https://github.com/burak-dursunn/yildiz-spor',
    live: 'https://erganiyildizspor.com',
  },
  {
    id: 4,
    title: 'VANT Streetwear',
    type: 'E-Ticaret Platformu',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Canvas API'],
    image: vantImg,
    video: vantVideo,
    github: 'https://github.com/burak-dursunn/streetwear-showcase',
    live: 'https://streetwear-showcase.vercel.app/',
  },
  {
    id: 2,
    title: 'PemaHome',
    type: 'E-Ticaret Platformu',
    tech: ['Vue.js', 'Golang'],
    image: pemaHomeImg,
    github: 'https://github.com/burak-dursunn/pema-home-website',
    live: 'https://pema-home.vercel.app/',
  },
  {
    id: 3,
    title: 'BilgecAI',
    type: 'AI Platform',
    tech: ['Vue.js', 'Python', 'REST API'],
    image: bilgecanImg,
    github: 'https://github.com/burak-dursunn/BilgecAi',
  },
];

function ProjectPreview({ project }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.currentTime = 0;
    video.play().catch(() => {});
  }, [project.id]);

  return (
    <AnimatePresence mode="wait">
      <motion.article
        key={project.id}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.24, ease: 'easeOut' }}
        className="project-preview wire-border relative overflow-hidden bg-white/50 backdrop-blur-sm dark:bg-black/20"
      >
        <div className="project-preview__media relative aspect-[16/10] overflow-hidden bg-black">
          {project.video ? (
            <video
              ref={videoRef}
              key={project.video}
              src={project.video}
              poster={project.image}
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              aria-label={`${project.title} proje videosu`}
              className="h-full w-full object-cover object-top"
            />
          ) : (
            <img src={project.image} alt={`${project.title} proje önizlemesi`} className="h-full w-full object-cover object-top" />
          )}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/5 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between gap-4 p-4 sm:p-6">
            <div>
              <span className="mb-1 block font-mono text-[10px] uppercase tracking-[0.2em] text-neo-green">{project.type}</span>
              <h3 className="font-heading text-3xl font-black text-white sm:text-4xl">{project.title}</h3>
            </div>
            <span className="hidden border border-white/30 bg-black/30 px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-white/80 sm:block">
              {project.video ? 'Video preview' : 'Project preview'}
            </span>
          </div>
        </div>

        <div className="p-4 sm:p-6">
          <div className="flex flex-wrap gap-2">
            {project.tech.map((technology) => (
              <span key={technology} className="border border-dark/10 bg-dark/[0.03] px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-gray-500 dark:border-white/10 dark:bg-white/[0.04] dark:text-gray-300">
                {technology}
              </span>
            ))}
          </div>

          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border border-dark/20 px-4 py-2 font-mono text-[11px] font-bold uppercase tracking-wider text-gray-600 transition-colors hover:border-neo-green hover:text-neo-green dark:border-white/20 dark:text-gray-200"
            >
              <FiGithub aria-hidden="true" /> GitHub
            </a>
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 border border-neo-green/60 bg-neo-green/10 px-4 py-2 font-mono text-[11px] font-bold uppercase tracking-wider text-neo-green transition-colors hover:bg-neo-green hover:text-black"
              >
                <FiExternalLink aria-hidden="true" /> Canlı site
              </a>
            )}
          </div>
        </div>
      </motion.article>
    </AnimatePresence>
  );
}

function Projects() {
  const [activeProject, setActiveProject] = useState(projects[0]);

  return (
    <section id="projects" className="relative px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 flex items-center gap-3 sm:mb-14"
        >
          <FaAsterisk className="animate-spin-slow text-base text-neo-green sm:text-lg" aria-hidden="true" />
          <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400 sm:tracking-[0.25em]">
            Selected Projects
          </span>
        </motion.div>

        <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:gap-12">
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-1 lg:gap-0">
            {projects.map((project, index) => {
              const isActive = activeProject.id === project.id;
              return (
                <motion.button
                  key={project.id}
                  type="button"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06, duration: 0.35 }}
                  onMouseEnter={() => setActiveProject(project)}
                  onFocus={() => setActiveProject(project)}
                  onClick={() => setActiveProject(project)}
                  aria-pressed={isActive}
                  className={`project-row group relative w-full border border-dark/10 px-4 py-4 text-left transition-colors dark:border-white/10 sm:px-5 lg:border-x-0 lg:border-t-0 lg:px-4 lg:py-5 ${index === 0 ? 'lg:border-t' : ''} ${isActive ? 'is-active bg-neo-green/[0.07]' : 'hover:bg-neo-green/[0.04]'}`}
                >
                  <span className={`absolute bottom-3 left-0 top-3 w-1 bg-neo-green transition-opacity ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-60'}`} />
                  <span className="flex items-center gap-3 sm:gap-4">
                    <span className={`font-mono text-xs font-bold transition-colors ${isActive ? 'text-neo-green' : 'text-gray-400 dark:text-gray-600'}`}>
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="min-w-0 flex-1">
                      <strong className={`block truncate font-heading text-xl font-black transition-colors sm:text-2xl lg:text-3xl ${isActive ? 'text-neo-green' : 'text-dark dark:text-white'}`}>
                        {project.title}
                      </strong>
                      <span className="mt-1 block truncate font-mono text-[10px] uppercase tracking-wider text-gray-500 dark:text-gray-400">
                        {project.type}
                      </span>
                    </span>
                    {project.video && <span className="font-mono text-[9px] uppercase tracking-wider text-gray-400 dark:text-gray-500">Video</span>}
                  </span>
                </motion.button>
              );
            })}
          </div>

          <ProjectPreview project={activeProject} />
        </div>
      </div>
    </section>
  );
}

export default Projects;
