import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const headingLetters = 'HAKKIMDA'.split('');

const About = () => {
  const { isDarkMode } = useTheme();

  return (
    <section id="about" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-transparent">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.3 }}
          className="mb-10 sm:mb-14 lg:mb-16"
        >
          <h2
            className="text-5xl sm:text-6xl md:text-7xl font-heading font-black tracking-tighter text-transparent bg-clip-text transition-all duration-300 inline-flex"
            style={{ WebkitTextStroke: isDarkMode ? '2px white' : '2px #1a1a1a' }}
          >
            {headingLetters.map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, x: -40, rotateY: 90 }}
                whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.5, type: 'spring', stiffness: 100 }}
                className="inline-block"
              >
                {char}
              </motion.span>
            ))}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6">

          {/* Summary Wire-Card */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, type: 'spring', stiffness: 60 }}
            className="lg:col-span-7 wire-card bg-white/50 dark:bg-black/20 backdrop-blur-sm flex flex-col justify-center space-y-3 sm:space-y-4 !p-4 sm:!p-5"
          >
            <motion.div
              className="w-9 h-9 sm:w-10 sm:h-10 bg-neo-green text-dark rounded-full flex items-center justify-center mb-1"
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
            >
              <span className="font-black text-base sm:text-lg">i</span>
            </motion.div>

            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6, ease: 'easeOut' }}
              style={{ transformOrigin: 'top' }}
            >
              <p className="font-bold text-base sm:text-lg leading-relaxed border-l-4 border-neo-green pl-3 sm:pl-4 text-gray-800 dark:text-gray-200 transition-colors duration-300">
                Yazılım Mühendisliği mezunuyum. Son 2.5 yıldır freelance olarak web uygulamaları ve web scraping projeleri geliştiriyor; farklı sektörlerin ihtiyaçlarına yönelik çözümler üretiyorum. Backend geliştirme, sistem mimarileri, veri mühendisliği ve yapay zeka alanlarına ilgi duyuyor, bu konularda kendimi sürekli geliştirmeye odaklanıyorum.
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="font-medium text-gray-600 dark:text-gray-400 text-sm sm:text-base transition-colors duration-300"
            >
              Problemleri yalnızca kod seviyesinde değil, sistemin bütünü içinde değerlendirmeyi seviyorum. Python, React ve Node.js ile geliştirme yaparken performans, ölçeklenebilirlik ve sürdürülebilirliği ön planda tutuyor; API geliştirme, otomasyon sistemleri ve veri odaklı uygulamalar üzerinde çalışıyorum. Yeni teknolojileri araştırmayı, öğrendiklerimi projelerime uygulamayı ve sürekli gelişmeyi çalışma anlayışımın temel bir parçası olarak görüyorum.
            </motion.p>
          </motion.div>

          {/* Education Grid */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 grid-rows-auto lg:grid-rows-2 gap-3 sm:gap-4">

            {/* Fırat Üniversitesi */}
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, type: 'spring', stiffness: 70, delay: 0.2 }}
              whileHover={{ scale: 1.02, rotateY: 3 }}
              className="wire-border p-4 sm:p-5 relative overflow-hidden bg-white/50 dark:bg-black/20 backdrop-blur-sm transition-colors duration-300 flex flex-col justify-center"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <motion.div
                className="absolute -right-4 -top-4 w-14 h-14 sm:w-16 sm:h-16 border-4 border-dark/20 dark:border-white/20 rounded-full transition-colors duration-300"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              />
              <div className="inline-block bg-neo-green text-dark px-2 py-1 font-bold text-[11px] mb-2 sm:mb-3 self-start">
                Eyl 2022 - 2026 (Mezun)
              </div>
              <h3 className="font-heading font-black text-xl sm:text-2xl mb-1 text-dark dark:text-white transition-colors duration-300">Fırat Üniversitesi</h3>
              <p className="font-bold text-gray-700 dark:text-gray-300 text-sm transition-colors duration-300">Yazılım Mühendisliği</p>
            </motion.div>

            {/* Erasmus */}
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, type: 'spring', stiffness: 70, delay: 0.4 }}
              whileHover={{ scale: 1.02, rotateY: -3 }}
              className="wire-border p-4 sm:p-5 bg-white/50 dark:bg-black/20 backdrop-blur-sm transition-colors duration-300 flex flex-col justify-center"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="inline-block bg-neo-green text-dark px-2 py-1 font-bold text-[11px] mb-2 sm:mb-3 self-start">
                Eyl 2025 - Şub 2026
              </div>
              <h3 className="font-heading font-black text-lg sm:text-xl mb-1 text-dark dark:text-white transition-colors duration-300">Erasmus+ Değişim Programı</h3>
              <p className="font-bold text-gray-700 dark:text-gray-300 text-xs sm:text-[13px] mb-2 sm:mb-3 transition-colors duration-300">
                Università degli Studi della Campania "Luigi Vanvitelli"
              </p>
              <div className="flex flex-wrap gap-2">
                {['İtalya', 'İngilizce Eğitim'].map((tag, i) => (
                  <motion.span
                    key={tag}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 + i * 0.15, type: 'spring', stiffness: 300 }}
                    className="border border-dark/40 dark:border-white/40 px-2 py-0.5 text-[10px] font-bold text-gray-700 dark:text-gray-300 transition-colors duration-300"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
