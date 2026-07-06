import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const headingLetters = 'HAKKIMDA'.split('');

const About = () => {
  const { isDarkMode } = useTheme();

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-transparent">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.3 }}
          className="mb-16"
        >
          <h2 
            className="text-6xl sm:text-7xl font-heading font-black tracking-tighter text-transparent bg-clip-text transition-all duration-300 inline-flex" 
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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Summary Wire-Card */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, type: 'spring', stiffness: 60 }}
            className="lg:col-span-7 wire-card bg-white/50 dark:bg-black/20 backdrop-blur-sm flex flex-col justify-center space-y-4 !p-5"
          >
            <motion.div 
              className="w-10 h-10 bg-neo-green text-dark rounded-full flex items-center justify-center mb-1"
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
            >
              <span className="font-black text-lg">i</span>
            </motion.div>
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6, ease: 'easeOut' }}
              style={{ transformOrigin: 'top' }}
            >
              <p className="font-bold text-lg leading-relaxed border-l-4 border-neo-green pl-4 text-gray-800 dark:text-gray-200 transition-colors duration-300">
                Yazılım Mühendisliği bölümünden başarıyla mezun oldum. Modern web teknolojileri, veri mühendisliği ve yapay zeka alanlarına yoğun ilgi duyuyorum.
              </p>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="font-medium text-gray-600 dark:text-gray-400 text-base transition-colors duration-300"
            >
              Sadece kod yazmakla kalmıyor, problemlere analitik yaklaşıyor ve farklı algoritmalar geliştiriyorum. Boş zamanlarımda Python ve C dillerinin inceliklerini araştırıyor, edindiğim tecrübeleri Medium yazılarımla toplulukla paylaşıyorum.
            </motion.p>
          </motion.div>

          {/* Education Grid */}
          <div className="lg:col-span-5 grid grid-rows-2 gap-4">
            
            {/* Firat Univ */}
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, type: 'spring', stiffness: 70, delay: 0.2 }}
              whileHover={{ scale: 1.02, rotateY: 3 }}
              className="wire-border p-5 relative overflow-hidden bg-white/50 dark:bg-black/20 backdrop-blur-sm transition-colors duration-300 flex flex-col justify-center"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <motion.div
                className="absolute -right-4 -top-4 w-16 h-16 border-4 border-dark/20 dark:border-white/20 rounded-full transition-colors duration-300"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              />
              <div className="inline-block bg-neo-green text-dark px-2 py-1 font-bold text-[11px] mb-3 self-start">
                Eyl 2022 - 2026 (Mezun)
              </div>
              <h3 className="font-heading font-black text-2xl mb-1 text-dark dark:text-white transition-colors duration-300">Fırat Üniversitesi</h3>
              <p className="font-bold text-gray-700 dark:text-gray-300 text-sm transition-colors duration-300">Yazılım Mühendisliği</p>
            </motion.div>

            {/* Erasmus */}
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, type: 'spring', stiffness: 70, delay: 0.4 }}
              whileHover={{ scale: 1.02, rotateY: -3 }}
              className="wire-border p-5 bg-white/50 dark:bg-black/20 backdrop-blur-sm transition-colors duration-300 flex flex-col justify-center"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="inline-block bg-neo-green text-dark px-2 py-1 font-bold text-[11px] mb-3 self-start">
                Eyl 2025 - Şub 2026
              </div>
              <h3 className="font-heading font-black text-xl mb-1 text-dark dark:text-white transition-colors duration-300">Erasmus+ Değişim Programı</h3>
              <p className="font-bold text-gray-700 dark:text-gray-300 text-[13px] mb-3 transition-colors duration-300">
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

