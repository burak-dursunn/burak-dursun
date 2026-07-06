import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';

const projects = [
  {
    id: 1,
    title: "BilgecAI",
    type: "AI Platform",
    description: "Kullanıcıların yapay zeka destekli araçlara erişebildiği bir platform geliştirdim. Backend tarafında Python ve PostgreSQL kullanarak RESTful API'ler tasarladım. Frontend'de Vue.js, HTML ve CSS ile kullanıcı dostu arayüzler inşa ettim.",
    tech: ["Vue.js", "Python", "PostgreSQL", "REST API", "TailwindCSS"],
    github: "https://github.com/burak-dursunn",
    color: "wire-shadow-green"
  },
  {
    id: 2,
    title: "PemaHome",
    type: "E-Ticaret Platformu",
    description: "Modern ve duyarlı bir e-ticaret uygulaması. Müşteri deneyimini artırmak için Vue.js ve TailwindCSS ile dinamik arayüzler tasarlandı. Arka planda Golang ve PostgreSQL ile ölçeklenebilir ve güvenli bir mimari kuruldu.",
    tech: ["Vue.js", "Golang", "PostgreSQL", "TailwindCSS"],
    github: "https://github.com/burak-dursunn",
    color: "wire-shadow-white"
  }
];

const headingLetters = 'PROJELER'.split('');

const Projects = () => {
  const { isDarkMode } = useTheme();

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-transparent">
      <div className="max-w-7xl mx-auto">
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.3 }}
          className="mb-16"
        >
          <h2 
            className="text-6xl sm:text-7xl font-heading font-black tracking-tighter text-transparent bg-clip-text inline-flex transition-all duration-300" 
            style={{ WebkitTextStroke: isDarkMode ? '2px white' : '2px #1a1a1a' }}
          >
            {headingLetters.map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 50, scale: 0.5 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.5, type: 'spring', stiffness: 120 }}
                className="inline-block"
              >
                {char}
              </motion.span>
            ))}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, rotateY: index === 0 ? -25 : 25, scale: 0.9 }}
              whileInView={{ opacity: 1, rotateY: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: index * 0.2, type: 'spring', stiffness: 60 }}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3 }
              }}
              className={`wire-card bg-white/50 dark:bg-black/20 backdrop-blur-sm flex flex-col group ${project.color} transition-all duration-300`}
              style={{ transformStyle: 'preserve-3d', perspective: '1200px' }}
            >
              {/* Project Type Badge */}
              <motion.div
                className="absolute -top-4 -right-4 bg-neo-bg-light dark:bg-neo-bg wire-border px-4 py-1 font-bold text-neo-green text-sm z-10 transition-colors duration-300"
                initial={{ opacity: 0, scale: 0, rotate: 15 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.2, type: 'spring', stiffness: 200 }}
              >
                {project.type}
              </motion.div>

              {/* Placeholder for Project Image */}
              <div className="w-full h-48 border-b-2 border-dark/20 dark:border-white/20 bg-black/10 dark:bg-black/40 mb-6 flex items-center justify-center overflow-hidden transition-colors duration-300 relative group/img">
                <motion.span 
                  className="font-heading font-bold text-gray-500 tracking-widest"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                >
                  GÖRSEL / DEMO
                </motion.span>
                {/* Shine effect on hover */}
                <div className="absolute inset-0 -translate-x-full group-hover/img:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              </div>

              <div className="flex-1 flex flex-col">
                <h3 className="text-3xl font-heading font-black text-dark dark:text-white mb-4 group-hover:text-neo-green transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-700 dark:text-gray-400 font-medium leading-relaxed mb-6 flex-1 transition-colors duration-300">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((tech, i) => (
                    <motion.span 
                      key={i} 
                      className="border border-dark/30 dark:border-white/30 text-gray-700 dark:text-gray-300 px-3 py-1 text-xs font-bold uppercase tracking-widest transition-colors duration-300"
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + index * 0.2 + i * 0.08, type: 'spring', stiffness: 150 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                <div className="flex gap-4 border-t border-dark/20 dark:border-white/20 pt-6 transition-colors duration-300">
                  <motion.a 
                    href={project.github} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="flex items-center gap-2 text-dark dark:text-white font-bold hover:text-neo-green dark:hover:text-neo-green transition-colors"
                    whileHover={{ x: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <FiGithub className="text-xl" /> Kodu İncele
                  </motion.a>
                  <a href="#" className="flex items-center gap-2 text-dark dark:text-white font-bold hover:text-neo-green dark:hover:text-neo-green transition-colors ml-auto opacity-50 cursor-not-allowed">
                    <FiExternalLink className="text-xl" /> Canlı Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Projects;

