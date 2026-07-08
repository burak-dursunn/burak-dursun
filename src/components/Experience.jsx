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
    title: "Freelance Software Developer",
    company: "Freelance",
    date: "Oca 2024 - Günümüz",
    description: "Web siteleri ve web scraping alanlarında çeşitli projeler alarak farklı sektörlerin ihtiyaçlarına yönelik özel yazılım çözümleri ürettim ve geliştirmeye devam ediyorum.",
    tags: ["Web Development", "Web Scraping", "Freelance"],
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
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-transparent">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.3 }}
          className="mb-20 text-center md:text-right"
        >
          <h2 
            className="text-6xl sm:text-7xl font-heading font-black tracking-tighter text-transparent bg-clip-text inline-flex transition-all duration-300" 
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

        <div ref={containerRef} className="relative flex flex-col gap-12 md:gap-24 pb-10">
          {/* Timeline Background Line (faint) */}
          <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-[4px] bg-dark/10 dark:bg-white/10 -translate-x-1/2 rounded-full" />
          
          {/* Timeline Active Animated Line (green) */}
          <motion.div
            className="hidden md:block absolute left-1/2 top-4 bottom-4 w-[4px] bg-neo-green -translate-x-1/2 rounded-full"
            style={{ scaleY: scrollYProgress, transformOrigin: 'top' }}
          />

          {experiences.map((exp, index) => (
            <div key={exp.id} className={`flex flex-col md:flex-row items-center justify-center w-full ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
              
              {/* Empty space for alternating layout */}
              <div className="hidden md:block w-5/12"></div>
              
              {/* Center Dot */}
              <div className="hidden md:flex w-2/12 justify-center z-10">
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, amount: "all" }}
                  transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                  className="w-6 h-6 rounded-full bg-neo-green border-4 border-white dark:border-[#050505] shadow-[0_0_10px_rgba(140,200,75,0.5)]"
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
                className="w-full md:w-5/12 wire-card bg-white/50 dark:bg-black/20 backdrop-blur-sm flex flex-col justify-between group transition-all duration-300 p-4 sm:p-5"
                style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
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

                  <h3 className="font-heading font-black text-xl mb-1 text-dark dark:text-white group-hover:text-neo-green transition-colors duration-300">
                    {exp.title}
                  </h3>
                  <h4 className="font-bold text-sm text-neo-green mb-3">{exp.company}</h4>
                  
                  <p className="text-gray-700 dark:text-gray-400 font-medium text-sm leading-relaxed mb-4 transition-colors duration-300">
                    {exp.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mt-auto pt-3 border-t border-dark/20 dark:border-white/20 transition-colors duration-300">
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
    </section>
  );
};

export default Experience;

