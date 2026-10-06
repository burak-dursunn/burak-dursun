import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import { FiGithub, FiExternalLink, FiX, FiPlay } from 'react-icons/fi';
import { FaAsterisk } from 'react-icons/fa';

import pemaHomeImg from '../assets/proje-görselleri/pema-home1.webp';
import bilgecanImg from '../assets/proje-görselleri/Bilgecan.webp';
import portfolioImg from '../assets/proje-görselleri/portfolio.webp';
import vantImg from '../assets/proje-görselleri/vant1.webp';
import erganiImg from '../assets/proje-görselleri/Ergani Yıldız Spor Futbol Kulübü.webp';
import inboxImg from '../assets/proje-görselleri/inbox-coffe.webp';

import vantVideo from '../assets/proje videoları/vans.webm';
import portfolioVideo from '../assets/proje videoları/portfolio.webm';
import erganiVideo from '../assets/proje videoları/ergani-yıldız-spor.webm';
import inboxVideo from '../assets/proje videoları/inbox-coffee.webm';

const CASSETTE_COLORS = [
  { body: '#1a1a2e', reel: '#8CC84B', label: '#16213e', accent: '#8CC84B', labelText: '#fff' },
  { body: '#2d1b69', reel: '#ffa6f6', label: '#1a0a40', accent: '#ffa6f6', labelText: '#fff' },
  { body: '#0d2137', reel: '#80ece0', label: '#071520', accent: '#80ece0', labelText: '#fff' },
  { body: '#1a2d0d', reel: '#ffde59', label: '#0d1a06', accent: '#ffde59', labelText: '#1a1a1a' },
  { body: '#2d1a0d', reel: '#ff8c42', label: '#1a0d06', accent: '#ff8c42', labelText: '#fff' },
  { body: '#2d0d1a', reel: '#ff6b9d', label: '#1a0610', accent: '#ff6b9d', labelText: '#fff' },
];

const projects = [
  {
    id: 1,
    title: "Kişisel Portfolyo",
    type: "Frontend Geliştirme",
    tech: ["React", "Framer Motion", "Vite"],
    image: portfolioImg,
    video: portfolioVideo,
    github: "https://github.com/burak-dursunn/burak-dursun",
    live: "https://burak-dursun.vercel.app/",
    color: CASSETTE_COLORS[0],
  },
  {
    id: 6,
    title: "Inbox Coffee",
    type: "Kurumsal Web Sitesi",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    image: inboxImg,
    video: inboxVideo,
    github: "https://github.com/burak-dursunn/inbox-coffee",
    live: "https://inboxotomat.com",
    color: CASSETTE_COLORS[1],
  },
  {
    id: 5,
    title: "Ergani Yıldız Spor",
    type: "Spor Kulübü Platformu",
    tech: ["React", "Tailwind CSS"],
    image: erganiImg,
    video: erganiVideo,
    github: "https://github.com/burak-dursunn/yildiz-spor",
    live: "https://erganiyildizspor.com",
    color: CASSETTE_COLORS[2],
  },
  {
    id: 4,
    title: "VANT Streetwear",
    type: "E-Ticaret Platformu",
    tech: ["HTML5", "CSS3", "JavaScript", "Canvas API"],
    image: vantImg,
    video: vantVideo,
    github: "https://github.com/burak-dursunn/streetwear-showcase",
    live: "https://streetwear-showcase.vercel.app/",
    color: CASSETTE_COLORS[3],
  },
  {
    id: 2,
    title: "PemaHome",
    type: "E-Ticaret Platformu",
    tech: ["Vue.js", "Golang"],
    image: pemaHomeImg,
    video: null,
    github: "https://github.com/burak-dursunn/pema-home-website",
    live: "https://pema-home.vercel.app/",
    color: CASSETTE_COLORS[4],
  },
  {
    id: 3,
    title: "BilgecAI",
    type: "AI Platform",
    tech: ["Vue.js", "Python", "REST API"],
    image: bilgecanImg,
    video: null,
    github: "https://github.com/burak-dursunn/BilgecAi",
    live: null,
    color: CASSETTE_COLORS[5],
  },
];

/* ─── Pixel art SVG kaset ─── */
const CassetteSVG = ({ project, isSelected, index }) => {
  const c = project.color;
  const reelAnim = useAnimation();

  useEffect(() => {
    if (isSelected) {
      reelAnim.start({ rotate: 360, transition: { duration: 2, repeat: Infinity, ease: 'linear' } });
    } else {
      reelAnim.stop();
      reelAnim.set({ rotate: 0 });
    }
  }, [isSelected]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="project-list-cassette-art absolute left-0 top-0 select-none"
      style={{ imageRendering: 'pixelated', transform: 'scale(.52)', transformOrigin: 'top left' }}
    >
      {/* Kaset gövdesi */}
      <div
        className="relative w-[140px] sm:w-[160px]"
        style={{ aspectRatio: '3/2', imageRendering: 'pixelated' }}
      >
        <svg viewBox="0 0 160 108" xmlns="http://www.w3.org/2000/svg" style={{ imageRendering: 'pixelated', display: 'block', width: '100%', height: '100%' }}>
          {/* Dış gövde */}
          <rect x="2" y="2" width="156" height="104" rx="4" fill={c.body} />
          <rect x="2" y="2" width="156" height="104" rx="4" fill="none" stroke={c.accent} strokeWidth="2" />

          {/* Üst & alt şerit dekorlar */}
          <rect x="6" y="6" width="148" height="4" fill={c.accent} opacity="0.25" />
          <rect x="6" y="98" width="148" height="4" fill={c.accent} opacity="0.25" />

          {/* Merkez label alanı */}
          <rect x="30" y="14" width="100" height="58" rx="2" fill={c.label} />
          <rect x="30" y="14" width="100" height="58" rx="2" fill="none" stroke={c.accent} strokeWidth="1" opacity="0.6" />

          {/* Kapak görseli (clipPath ile) */}
          <defs>
            <clipPath id={`clip-${project.id}`}>
              <rect x="31" y="15" width="98" height="56" rx="1" />
            </clipPath>
          </defs>
          <image
            href={project.image}
            x="31" y="15" width="98" height="56"
            clipPath={`url(#clip-${project.id})`}
            preserveAspectRatio="xMidYMid slice"
            opacity="0.85"
          />
          {/* Görsel üzeri label overlay */}
          <rect x="31" y="51" width="98" height="20" fill="rgba(0,0,0,0.72)" />
          <text
            x="80" y="62"
            textAnchor="middle"
            fontSize="6"
            fontFamily="monospace"
            fontWeight="bold"
            fill={c.accent}
            style={{ imageRendering: 'pixelated' }}
          >
            {project.title.toUpperCase().slice(0, 18)}
          </text>
          <text
            x="80" y="69"
            textAnchor="middle"
            fontSize="4"
            fontFamily="monospace"
            fill="#ffffff"
            opacity="0.7"
          >
            {project.type.slice(0, 22)}
          </text>

          {/* Sol makara */}
          <g transform="translate(22, 80)">
            <circle cx="0" cy="0" r="14" fill={c.body} stroke={c.accent} strokeWidth="1.5" />
            <circle cx="0" cy="0" r="9" fill={c.body} stroke={c.accent} strokeWidth="1" opacity="0.5" />
            <motion.g animate={reelAnim}>
              <rect x="-1" y="-13" width="2" height="7" rx="1" fill={c.reel} />
              <rect x="-1" y="6" width="2" height="7" rx="1" fill={c.reel} />
              <rect x="-13" y="-1" width="7" height="2" rx="1" fill={c.reel} />
              <rect x="6" y="-1" width="7" height="2" rx="1" fill={c.reel} />
            </motion.g>
            <circle cx="0" cy="0" r="4" fill={c.reel} opacity="0.9" />
          </g>

          {/* Sağ makara */}
          <g transform="translate(138, 80)">
            <circle cx="0" cy="0" r="14" fill={c.body} stroke={c.accent} strokeWidth="1.5" />
            <circle cx="0" cy="0" r="9" fill={c.body} stroke={c.accent} strokeWidth="1" opacity="0.5" />
            <motion.g animate={reelAnim}>
              <rect x="-1" y="-13" width="2" height="7" rx="1" fill={c.reel} />
              <rect x="-1" y="6" width="2" height="7" rx="1" fill={c.reel} />
              <rect x="-13" y="-1" width="7" height="2" rx="1" fill={c.reel} />
              <rect x="6" y="-1" width="7" height="2" rx="1" fill={c.reel} />
            </motion.g>
            <circle cx="0" cy="0" r="4" fill={c.reel} opacity="0.9" />
          </g>

          {/* Bant kanalı */}
          <rect x="36" y="76" width="88" height="6" rx="1" fill="rgba(0,0,0,0.6)" />
          <rect x="38" y="78" width="84" height="2" rx="1" fill={c.reel} opacity="0.4" />

          {/* Seçili gösterge */}
          {isSelected && (
            <>
              <rect x="2" y="2" width="156" height="104" rx="4" fill="none" stroke={c.accent} strokeWidth="3" opacity="0.8" />
              <circle cx="10" cy="10" r="3" fill={c.accent} />
              <circle cx="150" cy="10" r="3" fill={c.accent} />
            </>
          )}
        </svg>

        {/* Parıltı efekti */}
        <div className="absolute inset-0 rounded-sm pointer-events-none" style={{
          background: 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, transparent 50%)',
        }} />
      </div>

      {/* Alt etiket */}
      <div className="mt-2 text-center">
        <span className="text-[9px] font-mono tracking-widest uppercase opacity-60 dark:opacity-50"
          style={{ color: c.accent }}>
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>
    </motion.div>
  );
};

/* ─── Pixel art kaset çalar makinesi ─── */
const CassettePlayer = ({ project, onClose }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const c = project.color;

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, [project]);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <motion.div
      key={project.id}
      initial={{ opacity: 0, scale: 0.85, y: 40 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9, y: 20 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="w-full max-w-3xl mx-auto"
    >
      {/* Çalar dış kasası */}
      <div className="relative" style={{
        background: '#0d0d14',
        border: `3px solid ${c.accent}`,
        boxShadow: `0 0 0 1px rgba(0,0,0,0.5), 6px 6px 0 ${c.accent}40, 0 20px 60px rgba(0,0,0,0.8)`,
        imageRendering: 'pixelated',
      }}>
        {/* Üst panel — makine başlığı */}
        <div className="flex items-center justify-between px-4 py-2.5 border-b"
          style={{ borderColor: `${c.accent}40`, background: `${c.body}` }}>
          <div className="flex items-center gap-2">
            {/* Pixel LED göstergeler */}
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="w-1.5 h-1.5"
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.18, ease: 'easeInOut' }}
                style={{ background: c.accent, imageRendering: 'pixelated' }}
              />
            ))}
            <span className="text-[7px] tracking-[0.15em] uppercase ml-1" style={{ color: c.accent, fontFamily: "'Press Start 2P', monospace" }}>
              BD-PLAYER
            </span>
          </div>
          <button
            onClick={onClose}
            className="flex items-center justify-center w-6 h-6 text-gray-400 hover:text-white transition-colors"
            style={{ border: '1px solid rgba(255,255,255,0.15)' }}
          >
            <FiX className="text-xs" />
          </button>
        </div>

        {/* Kaset giriş slotu animasyonu */}
        <div className="flex items-center gap-2 px-4 py-2 border-b" style={{ borderColor: `${c.accent}20`, background: 'rgba(0,0,0,0.3)' }}>
          <div className="flex-1 flex items-center gap-2">
            <div className="text-[7px] text-gray-500" style={{ fontFamily: "'Press Start 2P', monospace" }}>SLOT:</div>
            {/* Animasyonlu kaset küçük görünümü */}
            <motion.div
              initial={{ x: -60, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.15, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-2"
            >
              <div className="h-4 px-2 flex items-center gap-1.5"
                style={{ background: c.body, border: `1px solid ${c.accent}`, minWidth: 80 }}>
                <div className="w-1.5 h-1.5 rounded-full" style={{ background: c.accent }} />
                <span className="text-[8px] font-mono font-bold" style={{ color: c.accent }}>
                  {project.title.slice(0, 14).toUpperCase()}
                </span>
              </div>
              {/* Kaset giriş oku */}
              <motion.div
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                className="text-[8px] font-mono"
                style={{ color: c.accent }}
              >▶▶</motion.div>
              <div className="text-[8px] font-mono" style={{ color: c.accent, border: `1px solid ${c.accent}30`, padding: '1px 4px' }}>
                ████
              </div>
            </motion.div>
          </div>
          {/* Zaman göstergesi */}
          <div className="text-[9px] font-mono" style={{ color: c.reel }}>
            <motion.span
              animate={{ opacity: [1, 0.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >● REC</motion.span>
          </div>
        </div>

        {/* Ana ekran — video veya görsel */}
        <div className="relative overflow-hidden" style={{ background: '#000', borderBottom: `2px solid ${c.accent}30` }}>
          {/* Ekran tarama çizgisi efekti */}
          <div className="absolute inset-0 pointer-events-none z-10" style={{
            background: 'repeating-linear-gradient(0deg, rgba(0,0,0,0.08) 0px, rgba(0,0,0,0.08) 1px, transparent 1px, transparent 3px)',
          }} />
          {/* Ekran köşe parıltısı */}
          <div className="absolute inset-0 pointer-events-none z-10" style={{
            background: 'radial-gradient(ellipse at 20% 20%, rgba(255,255,255,0.04) 0%, transparent 60%)',
          }} />

          {project.video ? (
            <video
              ref={videoRef}
              src={project.video}
              loop
              muted
              playsInline
              className="w-full block"
              style={{ maxHeight: '320px', objectFit: 'cover' }}
            />
          ) : (
            <img
              src={project.image}
              alt={project.title}
              className="w-full block"
              style={{ maxHeight: '320px', objectFit: 'cover' }}
            />
          )}

          {/* Proje başlığı overlay */}
          <div className="absolute bottom-0 left-0 right-0 px-4 py-3 z-20"
            style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 100%)' }}>
            <div className="flex items-end justify-between">
              <div>
                <div className="text-[9px] font-mono tracking-[0.25em] uppercase mb-0.5" style={{ color: c.accent }}>
                  {project.type}
                </div>
                <h3 className="text-white font-bold text-lg sm:text-xl leading-tight font-mono">
                  {project.title}
                </h3>
              </div>
              {project.video && (
                <button onClick={togglePlay}
                  className="flex items-center justify-center w-8 h-8 rounded-sm transition-all"
                  style={{ background: c.accent, color: '#000' }}>
                  {isPlaying ? (
                    <svg viewBox="0 0 12 12" className="w-3 h-3" fill="currentColor">
                      <rect x="2" y="1" width="3" height="10" />
                      <rect x="7" y="1" width="3" height="10" />
                    </svg>
                  ) : (
                    <FiPlay className="text-xs" />
                  )}
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Alt kontrol paneli */}
        <div className="px-4 py-3" style={{ background: c.body }}>
          {/* Tech tags */}
          <div className="flex flex-wrap gap-1.5 mb-3">
            {project.tech.map((t, i) => (
              <span key={i} className="text-[9px] font-mono px-2 py-0.5 tracking-widest uppercase"
                style={{
                  background: 'rgba(0,0,0,0.4)',
                  border: `1px solid ${c.accent}50`,
                  color: c.accent,
                }}>
                {t}
              </span>
            ))}
          </div>

          {/* Kontrol butonları */}
          <div className="flex items-center gap-2">
            {/* Pixel art VU meter */}
            <div className="flex items-end gap-0.5 h-6 mr-auto">
              {[4, 6, 8, 5, 7, 3, 8, 6, 5, 4].map((h, i) => (
                <motion.div
                  key={i}
                  className="w-1.5"
                  style={{ background: c.accent, opacity: 0.7 }}
                  animate={{ height: [`${h * 2}px`, `${Math.max(2, (h + 3) * 2)}px`, `${h * 2}px`] }}
                  transition={{ duration: 0.8 + i * 0.1, repeat: Infinity, ease: 'easeInOut' }}
                />
              ))}
            </div>

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 font-mono text-[10px] font-bold tracking-widest uppercase transition-all"
                style={{
                  background: 'transparent',
                  border: `2px solid ${c.accent}`,
                  color: c.accent,
                }}
                onMouseEnter={e => { e.currentTarget.style.background = c.accent; e.currentTarget.style.color = '#000'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = c.accent; }}
              >
                <FiGithub className="text-sm" />
                GitHub
              </a>
            )}

            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 font-mono text-[10px] font-bold tracking-widest uppercase transition-all"
                style={{
                  background: c.accent,
                  border: `2px solid ${c.accent}`,
                  color: '#000',
                }}
                onMouseEnter={e => { e.currentTarget.style.opacity = '0.85'; }}
                onMouseLeave={e => { e.currentTarget.style.opacity = '1'; }}
              >
                <FiExternalLink className="text-sm" />
                Demo
              </a>
            )}
          </div>
        </div>

        {/* Alt dekor çizgileri — pixel art stil */}
        <div className="px-4 py-2 flex items-center gap-1" style={{ background: 'rgba(0,0,0,0.3)' }}>
          {[...Array(32)].map((_, i) => (
            <div key={i} className="flex-1 h-0.5" style={{
              background: i % 4 === 0 ? c.accent : `${c.accent}20`,
            }} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

/* ─── Ana bileşen ─── */
const Projects = () => {
  const { isDarkMode } = useTheme();
  const [selectedProject, setSelectedProject] = useState(null);
  const playerRef = useRef(null);

  const handleCassetteClick = (project) => {
    if (selectedProject?.id === project.id) {
      setSelectedProject(null);
    } else {
      setSelectedProject(project);
      setTimeout(() => {
        playerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 100);
    }
  };

  return (
    <section id="projects" className="py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">

      {/* Arka plan pixel art grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.06]" style={{
        backgroundImage: 'linear-gradient(#8CC84B 1px, transparent 1px), linear-gradient(90deg, #8CC84B 1px, transparent 1px)',
        backgroundSize: '20px 20px',
      }} />

      <div className="max-w-5xl mx-auto">

        {/* Başlık */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-4"
        >
          <FaAsterisk className="text-base sm:text-lg animate-spin-slow text-neo-green" />
          <span className="text-xs font-bold tracking-[0.20em] sm:tracking-[0.25em] uppercase text-gray-500 dark:text-gray-400 font-mono">
            Selected Projects
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mb-2"
        >
          <p className="text-[10px] font-mono tracking-widest uppercase text-gray-400 dark:text-gray-600">
            ↓ Bir kasete tıkla, çaları aç
          </p>
        </motion.div>

        {/* Raf — kasetler */}
        <div className="relative mt-10 mb-4">
          {/* Raf tahtası */}
          <div className="absolute bottom-0 left-0 right-0 h-2.5" style={{
            background: isDarkMode
              ? 'linear-gradient(to bottom, #3a2a14, #2a1e0e)'
              : 'linear-gradient(to bottom, #c8a96e, #a07840)',
            boxShadow: isDarkMode
              ? '0 3px 0 #1a0e05, 0 6px 12px rgba(0,0,0,0.5)'
              : '0 3px 0 #7a5a2a, 0 6px 12px rgba(0,0,0,0.3)',
          }} />

          {/* Kaset grid */}
          <div className="flex flex-wrap gap-6 sm:gap-8 pb-4 px-2">
            {projects.map((project, index) => (
              <CassetteSVG
                key={project.id}
                project={project}
                index={index}
                isSelected={selectedProject?.id === project.id}
                onClick={() => handleCassetteClick(project)}
              />
            ))}
          </div>
        </div>

        {/* Raf alt dekor */}
        <div className="h-px mb-10" style={{
          background: isDarkMode
            ? 'linear-gradient(to right, transparent, rgba(140,200,75,0.2), transparent)'
            : 'linear-gradient(to right, transparent, rgba(140,200,75,0.3), transparent)',
        }} />

        {/* Kaset çalar */}
        <div ref={playerRef}>
          <AnimatePresence mode="wait">
            {selectedProject && (
              <CassettePlayer
                key={selectedProject.id}
                project={selectedProject}
                onClose={() => setSelectedProject(null)}
              />
            )}
          </AnimatePresence>

          {!selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex items-center justify-center py-10"
            >
              <div className="text-center" style={{ fontFamily: "'Press Start 2P', monospace" }}>
                {/* Pixel art kaset çalar boş ekran */}
                <div className="flex items-center justify-center gap-1 mb-5">
                  {[...Array(12)].map((_, i) => (
                    <div key={i} className="w-1.5 h-px bg-neo-green opacity-30" />
                  ))}
                </div>
                <motion.div
                  animate={{ opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 1.6, repeat: Infinity }}
                  className="text-[8px] text-neo-green mb-2"
                >
                  NO CASSETTE
                </motion.div>
                <div className="text-[6px] text-gray-500 mb-5">INSERT TAPE TO BEGIN</div>
                <div className="flex items-center justify-center gap-1">
                  {[...Array(12)].map((_, i) => (
                    <div key={i} className="w-1.5 h-px bg-neo-green opacity-30" />
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
