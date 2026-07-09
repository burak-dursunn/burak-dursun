import { motion, useInView } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { useRef } from 'react';
import { GiSoccerBall } from 'react-icons/gi';
import { FaGamepad, FaPlane, FaCoffee, FaFilm, FaCampground, FaLanguage } from 'react-icons/fa';

const hobbies = [
  {
    id: 'football',
    Icon: GiSoccerBall,
    title: 'FUTBOL',
    // Desktop bento spans
    desktopSpan: 'md:col-span-2 md:row-span-2',
    accent: true,
  },
  {
    id: 'camping',
    Icon: FaCampground,
    title: 'CAMPING',
    desktopSpan: 'md:col-span-1 md:row-span-2',
    accent: false,
  },
  {
    id: 'language',
    Icon: FaLanguage,
    title: 'YABANCI DİL',
    desktopSpan: 'md:col-span-1 md:row-span-1',
    accent: false,
  },
  {
    id: 'gaming',
    Icon: FaGamepad,
    title: 'GAMING',
    desktopSpan: 'md:col-span-1 md:row-span-1',
    accent: false,
  },
  {
    id: 'travel',
    Icon: FaPlane,
    title: 'TRAVELLING',
    desktopSpan: 'md:col-span-1 md:row-span-1',
    accent: false,
  },
  {
    id: 'film',
    Icon: FaFilm,
    title: 'FILM',
    desktopSpan: 'md:col-span-2 md:row-span-1',
    accent: false,
  },
  {
    id: 'coffee',
    Icon: FaCoffee,
    title: 'COFFEE',
    desktopSpan: 'md:col-span-1 md:row-span-1',
    accent: false,
  },
];

const headingLetters = 'KOD DIŞINDA'.split('');

const FreeTime = () => {
  const { isDarkMode } = useTheme();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="freetime" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-transparent" ref={ref}>
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-10 sm:mb-14">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="font-bold tracking-widest uppercase text-xs text-gray-400 dark:text-gray-500 mb-4 sm:mb-5"
          >
            ✦ Offline Mode
          </motion.p>

          <div className="overflow-hidden">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-black tracking-tighter inline-flex flex-wrap">
              {headingLetters.map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ y: '110%' }}
                  animate={isInView ? { y: '0%' } : {}}
                  transition={{ delay: i * 0.05, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="inline-block text-dark dark:text-white"
                >
                  {char === ' ' ? '\u00A0' : char}
                </motion.span>
              ))}
            </h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.55, duration: 0.6 }}
            className="mt-4 sm:mt-5 text-gray-500 dark:text-gray-400 font-medium max-w-lg text-sm sm:text-base leading-relaxed"
          >
            Kod yazmadığım zamanlarda, boş vaktimde neler yaparım?
          </motion.p>
        </div>

        {/* Mobile: 2-column simple grid */}
        <div className="grid grid-cols-2 gap-3 sm:hidden">
          {hobbies.map((hobby, index) => (
            <motion.div
              key={hobby.id}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: 0.15 + index * 0.08,
                duration: 0.5,
                type: 'spring',
                stiffness: 90,
                damping: 14,
              }}
              className={`relative flex flex-col justify-between p-4 border-[3px] cursor-default overflow-hidden transition-colors duration-300 ${
                hobby.id === 'football' ? 'col-span-2' : ''
              } ${
                hobby.accent
                  ? 'bg-neo-green border-dark dark:border-white'
                  : 'bg-white dark:bg-[#0a0a0a] border-dark dark:border-white'
              }`}
              style={{
                minHeight: hobby.id === 'football' ? '130px' : '110px',
                boxShadow: isDarkMode
                  ? '4px 4px 0px 0px rgba(255,255,255,0.9)'
                  : '4px 4px 0px 0px #1a1a1a',
              }}
            >
              {/* Background watermark */}
              <hobby.Icon
                size={hobby.accent ? 90 : 64}
                className={`absolute -right-2 -bottom-2 transition-opacity duration-300 ${
                  hobby.accent
                    ? 'text-dark opacity-10'
                    : 'text-dark dark:text-white opacity-[0.05]'
                }`}
              />

              <hobby.Icon
                size={hobby.accent ? 30 : 24}
                className={`relative z-10 ${hobby.accent ? 'text-dark' : 'text-dark dark:text-white'}`}
              />

              <h3
                className={`font-heading font-black tracking-tight leading-none relative z-10 mt-2 ${
                  hobby.accent
                    ? 'text-xl text-dark'
                    : 'text-base text-dark dark:text-white'
                }`}
              >
                {hobby.title}
              </h3>
            </motion.div>
          ))}
        </div>

        {/* Tablet (sm): 3-column grid */}
        <div className="hidden sm:grid md:hidden grid-cols-3 auto-rows-[150px] gap-4">
          {hobbies.map((hobby, index) => (
            <motion.div
              key={hobby.id}
              initial={{ opacity: 0, y: 32 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: 0.2 + index * 0.09,
                duration: 0.5,
                type: 'spring',
                stiffness: 90,
                damping: 14,
              }}
              whileHover={{ x: -3, y: -3, transition: { duration: 0.15 } }}
              className={`relative flex flex-col justify-between p-5 border-[3px] cursor-default overflow-hidden transition-colors duration-300 group ${
                hobby.id === 'football' || hobby.id === 'film' ? 'col-span-2' : 'col-span-1'
              } ${
                hobby.accent
                  ? 'bg-neo-green border-dark dark:border-white'
                  : 'bg-white dark:bg-[#0a0a0a] border-dark dark:border-white'
              }`}
              style={{
                boxShadow: isDarkMode
                  ? '5px 5px 0px 0px rgba(255,255,255,0.9)'
                  : '5px 5px 0px 0px #1a1a1a',
              }}
            >
              <hobby.Icon
                size={hobby.accent ? 120 : 80}
                className={`absolute -right-3 -bottom-3 transition-opacity duration-300 ${
                  hobby.accent
                    ? 'text-dark opacity-10 group-hover:opacity-15'
                    : 'text-dark dark:text-white opacity-[0.05] group-hover:opacity-[0.08]'
                }`}
              />
              <hobby.Icon
                size={hobby.accent ? 36 : 28}
                className={`relative z-10 ${hobby.accent ? 'text-dark' : 'text-dark dark:text-white'}`}
              />
              <h3
                className={`font-heading font-black tracking-tight leading-none relative z-10 ${
                  hobby.accent
                    ? 'text-2xl md:text-3xl text-dark'
                    : 'text-lg md:text-xl text-dark dark:text-white'
                }`}
              >
                {hobby.title}
              </h3>
            </motion.div>
          ))}
        </div>

        {/* Desktop (md+): original bento grid */}
        <div className="hidden md:grid grid-cols-4 auto-rows-[180px] gap-4">
          {hobbies.map((hobby, index) => (
            <motion.div
              key={hobby.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: 0.2 + index * 0.1,
                duration: 0.5,
                type: 'spring',
                stiffness: 90,
                damping: 14,
              }}
              whileHover={{
                x: -4,
                y: -4,
                transition: { duration: 0.15 },
              }}
              className={`relative flex flex-col justify-between p-6 border-[3px] cursor-default overflow-hidden transition-colors duration-300 group ${hobby.desktopSpan} ${
                hobby.accent
                  ? 'bg-neo-green border-dark dark:border-white'
                  : 'bg-white dark:bg-[#0a0a0a] border-dark dark:border-white'
              }`}
              style={{
                boxShadow: isDarkMode
                  ? '6px 6px 0px 0px rgba(255,255,255,0.9)'
                  : '6px 6px 0px 0px #1a1a1a',
              }}
            >
              <hobby.Icon
                size={hobby.accent ? 160 : 100}
                className={`absolute -right-4 -bottom-4 transition-opacity duration-300 ${
                  hobby.accent
                    ? 'text-dark opacity-10 group-hover:opacity-15'
                    : 'text-dark dark:text-white opacity-[0.05] group-hover:opacity-[0.08]'
                }`}
              />
              <hobby.Icon
                size={hobby.accent ? 42 : 32}
                className={`relative z-10 ${hobby.accent ? 'text-dark' : 'text-dark dark:text-white'}`}
              />
              <h3
                className={`font-heading font-black tracking-tight leading-none relative z-10 ${
                  hobby.accent
                    ? 'text-3xl md:text-4xl text-dark'
                    : 'text-xl md:text-2xl text-dark dark:text-white'
                }`}
              >
                {hobby.title}
              </h3>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FreeTime;
