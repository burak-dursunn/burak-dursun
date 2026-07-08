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
    span: 'md:col-span-2 md:row-span-2',
    accent: true,
  },
  {
    id: 'camping',
    Icon: FaCampground,
    title: 'CAMPING',
    span: 'md:col-span-1 md:row-span-2',
    accent: false,
  },
  {
    id: 'language',
    Icon: FaLanguage,
    title: 'YABANCI DİL',
    span: 'md:col-span-1 md:row-span-1',
    accent: false,
  },
  {
    id: 'gaming',
    Icon: FaGamepad,
    title: 'GAMING',
    span: 'md:col-span-1 md:row-span-1',
    accent: false,
  },
  {
    id: 'travel',
    Icon: FaPlane,
    title: 'TRAVELLING',
    span: 'md:col-span-1 md:row-span-1',
    accent: false,
  },
  {
    id: 'film',
    Icon: FaFilm,
    title: 'FILM',
    span: 'md:col-span-2 md:row-span-1',
    accent: false,
  },
  {
    id: 'coffee',
    Icon: FaCoffee,
    title: 'COFFEE',
    span: 'md:col-span-1 md:row-span-1',
    accent: false,
  },
];

const headingLetters = 'KOD DIŞINDA'.split('');

const FreeTime = () => {
  const { isDarkMode } = useTheme();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="freetime" className="py-24 px-4 sm:px-6 lg:px-8 bg-transparent" ref={ref}>
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-14">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="font-bold tracking-widest uppercase text-xs text-gray-400 dark:text-gray-500 mb-5"
          >
            ✦ Offline Mode
          </motion.p>

          <div className="overflow-hidden">
            <h2 className="text-6xl sm:text-7xl font-heading font-black tracking-tighter inline-flex flex-wrap">
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
            className="mt-5 text-gray-500 dark:text-gray-400 font-medium max-w-lg text-base leading-relaxed"
          >
            Kod yazmadığım zamanlarda, boş vaktimde neler yaparım?
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[160px] md:auto-rows-[180px] gap-4">
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
              className={`relative flex flex-col justify-between p-6 border-[3px] cursor-default overflow-hidden transition-colors duration-300 group ${hobby.span} ${hobby.accent
                ? 'bg-neo-green border-dark dark:border-white'
                : 'bg-white dark:bg-[#0a0a0a] border-dark dark:border-white'
                }`}
              style={{
                boxShadow: isDarkMode
                  ? '6px 6px 0px 0px rgba(255,255,255,0.9)'
                  : '6px 6px 0px 0px #1a1a1a',
              }}
            >
              {/* Background watermark icon */}
              <hobby.Icon
                size={hobby.accent ? 160 : 100}
                className={`absolute -right-4 -bottom-4 transition-opacity duration-300 ${hobby.accent
                  ? 'text-dark opacity-10 group-hover:opacity-15'
                  : 'text-dark dark:text-white opacity-[0.05] group-hover:opacity-[0.08]'
                  }`}
              />

              {/* Main icon */}
              <hobby.Icon
                size={hobby.accent ? 42 : 32}
                className={`relative z-10 ${hobby.accent ? 'text-dark' : 'text-dark dark:text-white'
                  }`}
              />

              {/* Title */}
              <h3
                className={`font-heading font-black tracking-tight leading-none relative z-10 ${hobby.accent
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
