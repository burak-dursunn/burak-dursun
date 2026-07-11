import { motion, useInView } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { useState, useEffect, useRef } from 'react';
import {
  SiJavascript, SiVuedotjs, SiReact,
  SiNodedotjs, SiExpress, SiPython, SiC, SiCplusplus,
  SiMongodb, SiPostgresql, SiRedis,
  SiGit, SiNpm, SiPostman, SiSelenium, SiDocker, SiKubernetes, SiApachesuperset
} from 'react-icons/si';
import { FaAsterisk } from 'react-icons/fa';

const terminalLines = [
  { text: "root@linux:~# ./load_skills.sh", type: "command" },
  { text: "[*] Mounting skill sectors...", type: "system" },
  { text: "[*] Initializing kernel modules...", type: "system" },
  { text: " ", type: "empty" },
  { text: "=== SPECIALIZATION ===", type: "category" },
  { text: "  [OK] Backend Development | System Design", type: "skill" },
  { text: "  [OK] AI Agent Development | Browser Automation", type: "skill" },
  { text: "  [OK] Web Scraping | REST API Development", type: "skill" },
  { text: " ", type: "empty" },
  { text: "=== TECH STACK ===", type: "category" },
  { text: "  [OK] JavaScript | Python | Node.js | Express", type: "skill" },
  { text: "  [OK] Vue.js | PostgreSQL | MongoDB", type: "skill" },
  { text: "  [OK] Docker | Git | Linux", type: "skill" },
  { text: " ", type: "empty" },
  { text: "=== CURRENT FOCUS ===", type: "category" },
  { text: "  [OK] AI Agents | Software Architecture | Automation", type: "skill" },
  { text: " ", type: "empty" },
  { text: "SYSTEM: All dependencies resolved.", type: "success" }
];

const frontendSkills = [
  { name: 'React', Icon: SiReact, color: '#61DAFB' },
  { name: 'JavaScript', Icon: SiJavascript, color: '#F7DF1E' },
  { name: 'Vue.js', Icon: SiVuedotjs, color: '#4FC08D' },
];

const backendSkills = [
  { name: 'Node.js', Icon: SiNodedotjs, color: '#339933' },
  { name: 'Express.js', Icon: SiExpress, customClass: 'text-black dark:text-white' },
  { name: 'Python', Icon: SiPython, color: '#3776AB' },
  { name: 'C', Icon: SiC, color: '#A8B9CC' },
  { name: 'C++', Icon: SiCplusplus, color: '#00599C' },
];

const databaseSkills = [
  { name: 'MongoDB', Icon: SiMongodb, color: '#47A248' },
  { name: 'PostgreSQL', Icon: SiPostgresql, color: '#4169E1' },
  { name: 'Redis', Icon: SiRedis, color: '#DC382D' },
];

const toolsSkills = [
  { name: 'Docker', Icon: SiDocker, color: '#2496ED' },
  { name: 'Kubernetes', Icon: SiKubernetes, color: '#326CE5' },
  { name: 'Git', Icon: SiGit, color: '#F05032' },
  { name: 'npm', Icon: SiNpm, color: '#CB3837' },
  { name: 'Selenium', Icon: SiSelenium, color: '#43B02A' },
  { name: 'Postman', Icon: SiPostman, color: '#FF6C37' },
  { name: 'Apache Superset', Icon: SiApachesuperset, color: '#00A699' },
];

const titleLetterVariants = {
  hidden: { opacity: 0, y: 120 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.06,
      duration: 0.6,
      type: 'spring',
      stiffness: 80,
      damping: 14,
    },
  }),
};

const skillItemVariants = {
  hidden: { opacity: 0, y: 80 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.25 + i * 0.09,
      duration: 0.6,
      type: 'spring',
      stiffness: 80,
      damping: 14,
    },
  }),
};

const SkillCategory = ({ title, skills, categoryIndex }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  const baseDelay = categoryIndex * 0.35;

  return (
    <div
      ref={ref}
      className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-12 items-start"
    >
      {/* Clip-path curtain reveal title */}
      <div className="w-full sm:w-1/4 lg:w-1/4 pt-1 sm:pt-4 overflow-hidden shrink-0">
        <motion.h3
          className="font-heading font-black text-xl sm:text-2xl md:text-3xl uppercase tracking-widest text-dark dark:text-white border-b sm:border-b-0 border-dark/10 dark:border-white/10 pb-2 sm:pb-0 mb-0"
          initial={{ y: '110%', opacity: 0 }}
          animate={isInView ? { y: '0%', opacity: 1 } : { y: '110%', opacity: 0 }}
          transition={{
            delay: baseDelay,
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {title}
        </motion.h3>
      </div>

      {/* Staggered skill items sliding from below */}
      <div className="w-full sm:w-3/4 lg:w-3/4 flex flex-wrap gap-3 sm:gap-4 items-center pt-1 sm:pt-2">
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 60 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
            transition={{
              delay: baseDelay + 0.2 + i * 0.08,
              duration: 0.55,
              type: 'spring',
              stiffness: 90,
              damping: 15,
            }}
            whileHover={{ scale: 1.08, transition: { duration: 0.2 } }}
            className="flex items-center gap-1.5 sm:gap-2 group p-1.5 sm:p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800/50 transition-colors"
          >
            <skill.Icon
              className={`text-3xl sm:text-4xl ${skill.customClass || ''}`}
              style={skill.color ? { color: skill.color } : {}}
            />
            <span className="font-bold text-sm sm:text-base text-gray-700 dark:text-gray-300 group-hover:text-neo-green transition-colors">
              {skill.name}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  const { isDarkMode } = useTheme();
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    if (isInView) {
      let currentLine = 0;
      const interval = setInterval(() => {
        currentLine++;
        setVisibleLines(currentLine);
        if (currentLine >= terminalLines.length) {
          clearInterval(interval);
        }
      }, 150);
      return () => clearInterval(interval);
    }
  }, [isInView]);

  return (
    <section id="skills" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-transparent">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mx-auto w-full"
          ref={containerRef}
        >
          {/* Terminal UI - Yorum satırına alındı */}
          {/* 
          ... 
          */}

          {/* New Stack UI */}
          <div className="flex flex-col gap-8 sm:gap-12 pt-6 sm:pt-10">
            {/* Top label */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 text-gray-400 dark:text-gray-300"
            >
              <FaAsterisk className="text-base sm:text-xl animate-spin-slow" />
              <span className="font-bold tracking-widest uppercase text-xs sm:text-sm">Tools and Technologies I work with</span>
            </motion.div>

            {/* Skills List */}
            <div className="flex flex-col gap-8 sm:gap-12 w-full">
              <SkillCategory title="FRONTEND" skills={frontendSkills} categoryIndex={0} />
              <SkillCategory title="BACKEND" skills={backendSkills} categoryIndex={1} />
              <SkillCategory title="DATABASE" skills={databaseSkills} categoryIndex={2} />
              <SkillCategory title="TOOLS" skills={toolsSkills} categoryIndex={3} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
