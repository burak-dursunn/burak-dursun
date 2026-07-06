import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiSun, FiMoon } from 'react-icons/fi';
import { FaGithub, FaLinkedin, FaMedium } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';
import profileImg from '../assets/profil-burakdursun-1.jpg';

const letterVariants = {
  hidden: { opacity: 0, y: 60, rotateX: -90 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      delay: 0.3 + i * 0.05,
      duration: 0.6,
      type: 'spring',
      stiffness: 120,
      damping: 12,
    },
  }),
};

const Hero = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const nameFirst = 'BURAK';
  const nameLast = 'DURSUN';

  return (
    <section className="relative min-h-screen pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-transparent">

      {/* Wireframe Navigation Bar */}
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: showNavbar ? 0 : '-100%', opacity: 1 }}
        transition={{ duration: 0.5, type: 'spring', stiffness: 100 }}
        className="fixed top-0 left-0 w-full z-50 pt-4 px-4 sm:px-6 lg:px-8"
      >
        <nav className="max-w-7xl mx-auto wire-border flex items-center justify-between p-2 backdrop-blur-md bg-white/70 dark:bg-black/70 shadow-sm">
          <div className="flex items-center gap-3 px-4 font-heading font-bold text-lg">
            <span className="text-neo-green">&lt;/&gt;</span> BURAK.RAW
          </div>
          <div className="hidden md:flex border-l-2 border-dark dark:border-white h-full items-stretch transition-colors duration-300">
            <a href="#about" className="relative px-6 py-2 border-r-2 border-dark dark:border-white font-bold group overflow-hidden">
              <span className="relative z-10 group-hover:text-neo-green transition-colors duration-300">HAKKIMDA</span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-neo-green transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></span>
              <span className="absolute inset-0 bg-dark/5 dark:bg-white/5 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom"></span>
            </a>
            <a href="#experience" className="relative px-6 py-2 border-r-2 border-dark dark:border-white font-bold group overflow-hidden">
              <span className="relative z-10 group-hover:text-neo-green transition-colors duration-300">DENEYİM</span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-neo-green transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></span>
              <span className="absolute inset-0 bg-dark/5 dark:bg-white/5 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom"></span>
            </a>
            <a href="#projects" className="relative px-6 py-2 border-r-2 border-dark dark:border-white font-bold group overflow-hidden">
              <span className="relative z-10 group-hover:text-neo-green transition-colors duration-300">PROJELER</span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-neo-green transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></span>
              <span className="absolute inset-0 bg-dark/5 dark:bg-white/5 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom"></span>
            </a>
          </div>
          <div className="flex items-center gap-2 ml-auto md:ml-0">
            <button
              onClick={toggleTheme}
              className="p-2 border-2 border-transparent hover:border-dark dark:hover:border-white transition-colors flex items-center justify-center"
              title="Temayı Değiştir"
            >
              {isDarkMode ? <FiSun className="text-xl" /> : <FiMoon className="text-xl" />}
            </button>
            <a href="mailto:drsn.burak00@gmail.com" className="bg-neo-green text-dark font-heading font-black px-6 py-2 hover:bg-neo-green-light transition-colors">
              İLETİŞİM
            </a>
          </div>
        </nav>
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">

          {/* Left Content (Huge Typography) */}
          <div className="flex flex-col items-start">
            {/* Badge with spring bounce */}
            <motion.div
              initial={{ opacity: 0, scale: 0.3, x: -50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 15, delay: 0.1 }}
              className="bg-neo-yellow text-dark font-heading font-bold text-sm px-3 py-1 mb-6"
            >
              SOFTWARE ENGINEER
            </motion.div>

            {/* Name with staggered letter animation */}
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black font-heading leading-[0.9] tracking-tighter mb-4" style={{ perspective: '800px' }}>
              <span className="inline-flex overflow-hidden">
                {nameFirst.split('').map((char, i) => (
                  <motion.span
                    key={`first-${i}`}
                    custom={i}
                    variants={letterVariants}
                    initial="hidden"
                    animate="visible"
                    className="inline-block"
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
              <br />
              <span className="inline-flex text-neo-green overflow-hidden">
                {nameLast.split('').map((char, i) => (
                  <motion.span
                    key={`last-${i}`}
                    custom={i + nameFirst.length}
                    variants={letterVariants}
                    initial="hidden"
                    animate="visible"
                    className="inline-block"
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
            </h1>

            {/* Description with slide-up */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="wire-border p-6 mb-8 max-w-lg mt-6 backdrop-blur-sm bg-white/50 dark:bg-black/20"
            >
              <p className="font-medium text-gray-700 dark:text-gray-300 leading-relaxed transition-colors duration-300">
                Yazılım dünyasının sınırlarını zorluyor, trendleri takip etmek yerine modern algoritmalarla onları yeniden inşa ediyorum. Node.js, Golang ve Python ile tam donanımlı geliştirici.
              </p>
            </motion.div>

            {/* Buttons + Social Links — same row */}
            <motion.div
              className="flex flex-wrap items-center gap-6"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.1, duration: 0.5, type: 'spring', stiffness: 120 }}
            >
              {/* Primary CTA */}
              <motion.a
                href="#projects"
                className="bg-neo-green text-dark border-2 border-dark font-heading font-bold uppercase px-8 py-4 wire-shadow flex items-center gap-2 hover:translate-x-[-3px] hover:translate-y-[-3px] transition-transform duration-150"
                whileTap={{ scale: 0.97 }}
              >
                <span>Projeleri Gör</span>
                <FiArrowRight />
              </motion.a>

              {/* Divider */}
              <span className="hidden sm:block w-px h-6 bg-dark/20 dark:bg-white/20" />

              {/* Social Links */}
              {[
                { href: 'https://github.com/burak-dursunn', Icon: FaGithub, label: 'GitHub' },
                { href: 'https://www.linkedin.com/in/burak--dursun/', Icon: FaLinkedin, label: 'LinkedIn' },
                { href: 'https://medium.com/@burak-dursunn', Icon: FaMedium, label: 'Medium' },
              ].map(({ href, Icon, label }, i) => (
                <motion.a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-1.5 text-gray-500 dark:text-gray-400 hover:text-dark dark:hover:text-white transition-colors duration-200 relative"
                  whileHover={{ y: -1 }}
                  transition={{ duration: 0.15 }}
                >
                  <Icon className="text-base" />
                  <span className="text-sm font-bold tracking-wide">{label}</span>
                  <span className="absolute -bottom-0.5 left-0 w-0 group-hover:w-full h-[1.5px] bg-neo-green transition-all duration-300 ease-out" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right Content (Profile Card) - Floating */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.5, type: 'spring', stiffness: 80 }}
            className="flex justify-center lg:justify-center lg:-ml-12 xl:-ml-24"
          >
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="relative w-64 h-64 sm:w-80 sm:h-80"
            >
              {/* Outer Decorative Border */}
              <div className="absolute -inset-4 border-2 border-dark/20 dark:border-white/20 transition-colors duration-300"></div>

              {/* Main Image Wireframe Box */}
              <div className="absolute inset-0 bg-transparent border-4 border-dark dark:border-white wire-shadow-green flex items-center justify-center overflow-hidden z-10 backdrop-blur-sm bg-white/30 dark:bg-black/10 transition-colors duration-300">
                <img src={profileImg} alt="Burak Dursun" className="w-full h-full object-cover" />
              </div>
            </motion.div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
