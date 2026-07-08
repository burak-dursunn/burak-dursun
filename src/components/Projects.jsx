import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';
import pemaHomeImg from '../assets/proje-görselleri/pema-home1.png';
import bilgecanImg from '../assets/proje-görselleri/Bilgecan.png';
import portfolioImg from '../assets/proje-görselleri/portfolio.png';
import { FaAsterisk } from 'react-icons/fa';

const projects = [
  {
    id: 1,
    title: "Kişisel Portfolyo",
    type: "Frontend Geliştirme",
    tech: ["React", "Framer Motion", "Vite"],
    image: portfolioImg,
    github: "https://github.com/burak-dursunn/burak-dursun",
    live: "https://burak-dursun.vercel.app/",
  },
  {
    id: 2,
    title: "PemaHome",
    type: "E-Ticaret Platformu",
    tech: ["Vue.js", "Golang"],
    image: pemaHomeImg,
    github: "https://github.com/burak-dursunn/pema-home-website",
    live: "https://pema-home.vercel.app/",
  },
  {
    id: 3,
    title: "BilgecAI",
    type: "AI Platform",
    tech: ["Vue.js", "Python", "REST API"],
    image: bilgecanImg,
    github: "https://github.com/burak-dursunn/BilgecAi",
    live: null,
  },
];

/* Tek proje satırı */
const ProjectRow = ({ project, index, isHovered, onHover, onLeave }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className="group relative border-b border-dark/10 dark:border-white/10 py-6 cursor-pointer"
    >
      {/* Hafif hover arka plan */}
      <div className="absolute inset-0 bg-neo-green/0 group-hover:bg-neo-green/[0.03] transition-colors duration-500 pointer-events-none rounded-lg" />

      <div className="relative z-10 flex items-center gap-5 sm:gap-8">
        {/* Numara */}
        <span className="text-sm font-mono text-gray-400 dark:text-gray-600 font-bold shrink-0 w-7 transition-colors duration-300 group-hover:text-neo-green">
          {String(index + 1).padStart(2, '0')}.
        </span>

        {/* İsim + Tech stack */}
        <div className="flex-1 min-w-0">
          {/* Sweep animasyonu */}
          <div className="relative overflow-hidden inline-block">
            <span
              className="block text-2xl sm:text-3xl md:text-4xl font-heading font-black text-dark/25 dark:text-white/20 select-none pointer-events-none"
              aria-hidden="true"
            >
              {project.title}
            </span>
            <span
              className="absolute inset-0 block text-2xl sm:text-3xl md:text-4xl font-heading font-black text-neo-green select-none pointer-events-none"
              style={{
                clipPath: isHovered ? 'inset(0 0% 0 0)' : 'inset(0 100% 0 0)',
                transition: isHovered
                  ? 'clip-path 0.55s cubic-bezier(0.76, 0, 0.24, 1)'
                  : 'clip-path 0.45s cubic-bezier(0.76, 0, 0.24, 1)',
              }}
              aria-hidden="true"
            >
              {project.title}
            </span>
            <span className="sr-only">{project.title}</span>
          </div>

          {/* Tech stack — ismin altında */}
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1.5">
            {project.tech.map((t, i) => (
              <span
                key={i}
                className="flex items-center gap-3 text-xs font-mono text-gray-400 dark:text-gray-600 tracking-wider uppercase transition-colors duration-300 group-hover:text-gray-500 dark:group-hover:text-gray-500"
              >
                {t}
                {i < project.tech.length - 1 && (
                  <span className="w-1 h-1 rounded-full bg-gray-400/40" />
                )}
              </span>
            ))}
          </div>
        </div>

        {/* Linkler — hover ile görünür olur */}
        <div className="flex items-center gap-2 shrink-0">
          {/* GitHub butonu */}
          <motion.a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            title="Kodu İncele"
            onClick={(e) => e.stopPropagation()}
            initial={false}
            animate={isHovered ? { opacity: 1, x: 0 } : { opacity: 0, x: 12 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-dark/20 dark:border-white/15 text-gray-500 dark:text-gray-400 hover:border-neo-green hover:text-neo-green hover:bg-neo-green/10 transition-colors duration-200 text-xs font-bold tracking-widest uppercase"
          >
            <FiGithub className="text-base" />
            <span className="hidden sm:inline">GitHub</span>
          </motion.a>

          {/* Live Demo butonu */}
          {project.live && (
            <motion.a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              title="Canlı Demo"
              onClick={(e) => e.stopPropagation()}
              initial={false}
              animate={isHovered ? { opacity: 1, x: 0 } : { opacity: 0, x: 12 }}
              transition={{ duration: 0.3, delay: 0.05, ease: 'easeOut' }}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-neo-green/10 border border-neo-green/40 text-neo-green hover:bg-neo-green hover:text-black transition-colors duration-200 text-xs font-bold tracking-widest uppercase"
            >
              <FiExternalLink className="text-base" />
              <span className="hidden sm:inline">Demo</span>
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

/* Viewport ortasına sabitlenmiş görsel paneli — Fixed pozisyon, layout'u etkilemez */
const FixedImagePreview = ({ activeProject }) => {
  return (
    <AnimatePresence mode="wait">
      {activeProject && (
        <motion.div
          key={activeProject.id}
          initial={{ opacity: 0, scale: 0.94, x: 24 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          exit={{ opacity: 0, scale: 0.94, x: 24 }}
          transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
          className="fixed right-8 xl:right-16 top-1/2 -translate-y-1/2 z-30 pointer-events-none"
          style={{ width: 'min(38vw, 480px)' }}
        >
          {activeProject.image ? (
            <div className="relative rounded-2xl overflow-hidden shadow-[0_8px_64px_rgba(0,0,0,0.5)] border border-white/10">
              {/* Yeşil parlaklık overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-neo-green/8 via-transparent to-transparent pointer-events-none z-10" />
              <img
                src={activeProject.image}
                alt={activeProject.title}
                className="w-full h-auto block"
              />
              {/* Alt bilgi şeridi */}
              <div className="absolute bottom-0 left-0 right-0 px-5 py-3 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-20 flex items-center justify-between">
                <span className="text-white font-heading font-bold text-sm tracking-widest uppercase">
                  {activeProject.title}
                </span>
                <span className="text-neo-green text-xs font-mono tracking-wider uppercase">
                  {activeProject.type}
                </span>
              </div>
            </div>
          ) : (
            /* Görsel yoksa şık placeholder */
            <div className="w-full aspect-video rounded-2xl border border-dark/15 dark:border-white/10 bg-neo-bg-light dark:bg-neo-bg flex flex-col items-center justify-center gap-3 shadow-2xl">
              <motion.span
                className="font-heading font-black text-5xl text-neo-green"
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                BD
              </motion.span>
              <span className="text-xs font-mono text-gray-500 tracking-widest uppercase">
                {activeProject.title}
              </span>
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Projects = () => {
  const { isDarkMode } = useTheme();
  const [hoveredId, setHoveredId] = useState(null);

  const activeProject = projects.find((p) => p.id === hoveredId) || null;

  return (
    <section id="projects" className="py-32 px-4 sm:px-6 lg:px-8 bg-transparent relative">
      <div className="max-w-3xl mx-auto lg:mr-auto lg:ml-16 xl:ml-24">

        {/* Başlık */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-14"
        >
          <FaAsterisk className="text-lg animate-spin-slow text-neo-green" />
          <span className="text-xs font-bold tracking-[0.25em] uppercase text-gray-500 dark:text-gray-400">
            Seçili Projeler
          </span>
        </motion.div>

        {/* Üst çizgi */}
        <div className="border-t border-dark/10 dark:border-white/10" />

        {/* Proje listesi */}
        {projects.map((project, index) => (
          <ProjectRow
            key={project.id}
            project={project}
            index={index}
            isHovered={hoveredId === project.id}
            onHover={() => setHoveredId(project.id)}
            onLeave={() => setHoveredId(null)}
          />
        ))}
      </div>

      {/* Fixed görsel — viewport ortasında, layout'u etkilemez */}
      <FixedImagePreview activeProject={activeProject} />
    </section>
  );
};

export default Projects;
