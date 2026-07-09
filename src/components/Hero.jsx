import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowRight, FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';
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

const navLinks = [
  { href: '#about', label: 'HAKKIMDA' },
  { href: '#experience', label: 'DENEYİM' },
  { href: '#projects', label: 'PROJELER' },
];

const Hero = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowNavbar(false);
        setMobileMenuOpen(false);
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
    <section className="relative min-h-screen pt-28 sm:pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-transparent">

      {/* Wireframe Navigation Bar */}
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: showNavbar ? 0 : '-100%', opacity: 1 }}
        transition={{ duration: 0.5, type: 'spring', stiffness: 100 }}
        className="fixed top-0 left-0 w-full z-50 pt-3 sm:pt-4 px-3 sm:px-6 lg:px-8"
      >
        <nav className="max-w-7xl mx-auto wire-border flex items-center justify-between p-2 backdrop-blur-md bg-white/70 dark:bg-black/70 shadow-sm">
          {/* Logo */}
          <div className="flex items-center gap-2 px-3 sm:px-4 font-heading font-bold text-base sm:text-lg">
            <span className="text-neo-green">&lt;/&gt;</span> BURAK.RAW
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex border-l-2 border-dark dark:border-white h-full items-stretch transition-colors duration-300">
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="relative px-4 lg:px-6 py-2 border-r-2 border-dark dark:border-white font-bold group overflow-hidden text-sm lg:text-base"
              >
                <span className="relative z-10 group-hover:text-neo-green transition-colors duration-300">{label}</span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-neo-green transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
                <span className="absolute inset-0 bg-dark/5 dark:bg-white/5 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom" />
              </a>
            ))}
          </div>

          {/* Right Controls */}
          <div className="flex items-center gap-1 sm:gap-2 ml-auto md:ml-0">
            <button
              onClick={toggleTheme}
              className="p-2 border-2 border-transparent hover:border-dark dark:hover:border-white transition-colors flex items-center justify-center"
              title="Temayı Değiştir"
            >
              {isDarkMode ? <FiSun className="text-lg sm:text-xl" /> : <FiMoon className="text-lg sm:text-xl" />}
            </button>
            <a
              href="mailto:drsn.burak00@gmail.com"
              className="hidden sm:block bg-neo-green text-dark font-heading font-black px-4 lg:px-6 py-2 hover:bg-neo-green-light transition-colors text-sm lg:text-base"
            >
              İLETİŞİM
            </a>
            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="md:hidden p-2 border-2 border-transparent hover:border-dark dark:hover:border-white transition-colors"
              aria-label="Menüyü Aç"
            >
              {mobileMenuOpen ? <FiX className="text-xl" /> : <FiMenu className="text-xl" />}
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="md:hidden max-w-7xl mx-auto mt-1 wire-border backdrop-blur-md bg-white/90 dark:bg-black/90 shadow-lg"
            >
              {navLinks.map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center px-6 py-4 border-b border-dark/10 dark:border-white/10 font-bold hover:text-neo-green hover:bg-neo-green/5 transition-colors"
                >
                  {label}
                </a>
              ))}
              <a
                href="mailto:drsn.burak00@gmail.com"
                className="flex items-center px-6 py-4 font-bold bg-neo-green text-dark hover:bg-neo-green-light transition-colors"
              >
                İLETİŞİM
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* Left Content */}
          <div className="flex flex-col items-start order-2 lg:order-1">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.3, x: -50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 15, delay: 0.1 }}
              className="bg-neo-yellow text-dark font-heading font-bold text-xs sm:text-sm px-3 py-1 mb-4 sm:mb-6"
            >
              SOFTWARE ENGINEER
            </motion.div>

            {/* Name */}
            <h1
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-heading leading-[0.9] tracking-tighter mb-4"
              style={{ perspective: '800px' }}
            >
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

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="wire-border p-4 sm:p-6 mb-6 sm:mb-8 w-full max-w-lg mt-4 sm:mt-6 backdrop-blur-sm bg-white/50 dark:bg-black/20"
            >
              <p className="font-medium text-gray-700 dark:text-gray-300 leading-relaxed text-sm sm:text-base transition-colors duration-300">
                Backend geliştirme, sistem mimarileri ve yapay zeka odaklı çözümler üreten bir Yazılım Mühendisiyim. Gerçek problemlere sürdürülebilir ve ölçeklenebilir çözümler geliştirmeyi hedefliyorum.
              </p>
            </motion.div>

            {/* Buttons + Social Links */}
            <motion.div
              className="flex flex-wrap items-center gap-4 sm:gap-6"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.1, duration: 0.5, type: 'spring', stiffness: 120 }}
            >
              <motion.a
                href="#projects"
                className="bg-neo-green text-dark border-2 border-dark font-heading font-bold uppercase px-6 sm:px-8 py-3 sm:py-4 wire-shadow flex items-center gap-2 hover:translate-x-[-3px] hover:translate-y-[-3px] transition-transform duration-150 text-sm sm:text-base"
                whileTap={{ scale: 0.97 }}
              >
                <span>Projeleri Gör</span>
                <FiArrowRight />
              </motion.a>

              <span className="hidden sm:block w-px h-6 bg-dark/20 dark:bg-white/20" />

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
                  <span className="text-xs sm:text-sm font-bold tracking-wide">{label}</span>
                  <span className="absolute -bottom-0.5 left-0 w-0 group-hover:w-full h-[1.5px] bg-neo-green transition-all duration-300 ease-out" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right Content (Profile Card) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.5, type: 'spring', stiffness: 80 }}
            className="flex justify-center lg:justify-center order-1 lg:order-2"
          >
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="relative w-52 h-52 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80"
            >
              {/* Outer Decorative Border */}
              <div className="absolute -inset-3 sm:-inset-4 border-2 border-dark/20 dark:border-white/20 transition-colors duration-300" />

              {/* Main Image */}
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
