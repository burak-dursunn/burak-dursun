import { motion, useScroll } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { useRef } from 'react';

const experiences = [
  {
    id: 1,
    title: "Software Development Intern",
    company: "AtollaTECH Bilişim",
    date: "Tem 2024 - Ağu 2024",
    description: "Data Engineering ve Data Analysis alanında staj yaptım. Selenium, Matplotlib kullanarak web scraping ile yasal olarak veri toplama süreçlerini yönettim. Apache Superset ile veri görselleştirme araçlarını kullandım.",
    tags: ["Data Engineering", "Python", "Selenium"],
  },
  {
    id: 5,
    title: "Freelance Full-Stack Developer",
    company: "Freelance",
    date: "Oca 2024 - Günümüz",
    description: "Çeşitli sektörler için web siteleri, AI destekli araçlar ve web scraping çözümleri geliştirerek özel yazılım ihtiyaçlarına yönelik çözümler ürettim ve geliştirmeye devam ediyorum.",
    tags: ["Full-Stack Development", "Web Scraping", "Freelance"],
  },
  {
    id: 2,
    title: "Medium Committee Leader",
    company: "HUAWEI Student Developers (HSD) Fırat",
    date: "Eki 2023 - May 2024",
    description: "Medium ekibinin yayın takvimini ve içerik düzenleme süreçlerini yönettim. Takımın aylık yazı hedeflerine ulaşmasını sağlarken, yazar durumlarını izledim ve editöryal süreçlere liderlik ettim.",
    tags: ["Leadership", "Content Management"],
  },
  {
    id: 3,
    title: "Project Team Member",
    company: "HUAWEI Student Developers (HSD) Fırat",
    date: "Mar 2023 - May 2024",
    description: "Kulübün proje takımında yazılım süreçleriyle ilgilendim. Ekiplere yazılım konusunda teknik destek sağladım ve projelerin teknik geliştirme aşamalarına aktif olarak katkıda bulundum.",
    tags: ["Software", "Technical Support"],
  },
  {
    id: 4,
    title: "Payload Software Developer",
    company: "TRoket Rocket Team",
    date: "Kas 2023 - Şub 2024",
    description: "TEKNOFEST Roket Yarışması'nda orta ve zorlu kategorilerde yarışan roket takımında Payload (Faydalı Yük) Software Developer olarak görev aldım.",
    tags: ["Software Development", "C/C++", "Payload"],
  }
];

const headingLetters = 'DENEYİM'.split('');

const Experience = () => {
  const { isDarkMode } = useTheme();
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  return (
    <section id="experience" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-transparent">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.3 }}
          className="mb-12 sm:mb-16 md:mb-20 text-center md:text-right"
        >
          <h2
            className="text-5xl sm:text-6xl md:text-7xl font-heading font-black tracking-tighter text-transparent bg-clip-text inline-flex transition-all duration-300"
            style={{ WebkitTextStroke: isDarkMode ? '2px white' : '2px #1a1a1a' }}
          >
            {headingLetters.map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 50, rotateX: -90 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.5, type: 'spring', stiffness: 100 }}
                className="inline-block"
              >
                {char}
              </motion.span>
            ))}
          </h2>
        </motion.div>

        {/* Desktop Timeline (md+) */}
        <div ref={containerRef} className="hidden md:block relative pb-10">
          {/* Timeline Background Line */}
          <div className="absolute left-1/2 top-4 bottom-4 w-[4px] bg-dark/10 dark:bg-white/10 -translate-x-1/2 rounded-full" />

          {/* Timeline Active Animated Line */}
          <motion.div
            className="absolute left-1/2 top-4 bottom-4 w-[4px] bg-neo-green -translate-x-1/2 rounded-full"
            style={{ scaleY: scrollYProgress, transformOrigin: 'top' }}
          />

          <div className="flex flex-col gap-16 lg:gap-24">
            {experiences.map((exp, index) => (
              <div key={exp.id} className={`flex items-center justify-center w-full ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>

                {/* Empty spacer */}
                <div className="w-5/12" />

                {/* Center Dot */}
                <div className="w-2/12 flex justify-center z-10">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, amount: "all" }}
                    transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                    className="w-5 h-5 lg:w-6 lg:h-6 rounded-full bg-neo-green border-4 border-white dark:border-[#050505] shadow-[0_0_10px_rgba(140,200,75,0.5)]"
                  />
                </div>

                {/* Card */}
                <motion.div
                  initial={{
                    opacity: 0,
                    x: index % 2 === 0 ? -80 : 80,
                    rotateY: index % 2 === 0 ? 15 : -15
                  }}
                  whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.6, delay: index * 0.15, type: 'spring', stiffness: 60 }}
                  whileHover={{
                    scale: 1.03,
                    rotateY: index % 2 === 0 ? 3 : -3,
                    boxShadow: '8px 8px 0px 0px #8CC84B'
                  }}
                  className="w-5/12 wire-card bg-white/50 dark:bg-black/20 backdrop-blur-sm flex flex-col justify-between group transition-all duration-300 p-4 lg:p-5"
                  style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
                >
                  <div>
                    <div className="flex justify-between items-start mb-3 sm:mb-4">
                      <motion.div
                        className="border border-dark/50 dark:border-white/50 text-gray-600 dark:text-gray-300 px-2 py-0.5 font-bold text-[10px] uppercase tracking-widest transition-colors duration-300"
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + index * 0.15, type: 'spring' }}
                      >
                        {exp.date}
                      </motion.div>
                    </div>

                    <h3 className="font-heading font-black text-lg lg:text-xl mb-1 text-dark dark:text-white group-hover:text-neo-green transition-colors duration-300">
                      {exp.title}
                    </h3>
                    <h4 className="font-bold text-sm text-neo-green mb-2 sm:mb-3">{exp.company}</h4>

                    <p className="text-gray-700 dark:text-gray-400 font-medium text-xs lg:text-sm leading-relaxed mb-3 sm:mb-4 transition-colors duration-300">
                      {exp.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-auto pt-3 border-t border-dark/20 dark:border-white/20 transition-colors duration-300">
                    {exp.tags.map((tag, i) => (
                      <motion.span
                        key={i}
                        className="text-gray-600 dark:text-gray-300 text-[10px] font-bold uppercase tracking-wider transition-colors duration-300"
                        initial={{ opacity: 0, y: 10, scale: 0.8 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + index * 0.15 + i * 0.1, type: 'spring', stiffness: 200 }}
                      >
                        #{tag}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile/Tablet: vertical stack (below md) */}
        <div className="md:hidden flex flex-col gap-4 sm:gap-6 relative">
          {/* Vertical line */}
          <div className="absolute left-4 top-2 bottom-2 w-[2px] bg-dark/10 dark:bg-white/10 rounded-full" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: index * 0.1, type: 'spring', stiffness: 80 }}
              className="relative pl-10 sm:pl-12"
            >
              {/* Dot */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 300, damping: 15, delay: index * 0.1 + 0.2 }}
                className="absolute left-2 top-4 w-4 h-4 rounded-full bg-neo-green border-[3px] border-white dark:border-[#050505] shadow-[0_0_8px_rgba(140,200,75,0.5)] -translate-x-1/2"
              />

              {/* Card */}
              <div className="wire-card bg-white/50 dark:bg-black/20 backdrop-blur-sm p-4 sm:p-5">
                <div className="inline-block border border-dark/50 dark:border-white/50 text-gray-600 dark:text-gray-300 px-2 py-0.5 font-bold text-[10px] uppercase tracking-widest mb-3">
                  {exp.date}
                </div>

                <h3 className="font-heading font-black text-lg sm:text-xl mb-1 text-dark dark:text-white">
                  {exp.title}
                </h3>
                <h4 className="font-bold text-sm text-neo-green mb-3">{exp.company}</h4>

                <p className="text-gray-700 dark:text-gray-400 font-medium text-sm leading-relaxed mb-4">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-3 border-t border-dark/20 dark:border-white/20">
                  {exp.tags.map((tag, i) => (
                    <span key={i} className="text-gray-600 dark:text-gray-300 text-[10px] font-bold uppercase tracking-wider">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;
