import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MATRIX_CHARS = '01アイウエオカキクケコサシスセソタチツテトナニヌネノ<>/{}()[];=+-*&%$#@!';
const SPLASH_DURATION = 2000;

const MatrixRain = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const drops = Array(columns).fill(1);
    
    const draw = () => {
      ctx.fillStyle = 'rgba(10, 14, 23, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      ctx.fillStyle = '#8CC84B';
      ctx.font = `${fontSize}px monospace`;
      
      for (let i = 0; i < drops.length; i++) {
        const char = MATRIX_CHARS[Math.floor(Math.random() * MATRIX_CHARS.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;
        
        ctx.globalAlpha = Math.random() * 0.5 + 0.3;
        ctx.fillText(char, x, y);
        ctx.globalAlpha = 1;
        
        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };
    
    const interval = setInterval(draw, 35);
    
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);
    
    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0"
      style={{ opacity: 0.6 }}
    />
  );
};

const SplashScreen = ({ onComplete }) => {
  const [phase, setPhase] = useState(0); // 0: logo, 1: text, 2: wipe
  const fullText = 'BURAK.RAW';

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 400);
    const t2 = setTimeout(() => setPhase(2), 1500);
    const t3 = setTimeout(() => onComplete(), SPLASH_DURATION);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0a0e17] overflow-hidden"
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
      >
        <MatrixRain />

        {/* Center Content */}
        <div className="relative z-10 flex flex-col items-center">
          {/* Logo Symbol */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.1 }}
            className="text-5xl sm:text-7xl font-black font-mono text-neo-green mb-6"
            style={{
              textShadow: '0 0 20px rgba(140, 200, 75, 0.6), 0 0 40px rgba(140, 200, 75, 0.3), 0 0 80px rgba(140, 200, 75, 0.1)',
            }}
          >
            &lt;/&gt;
          </motion.div>

          {/* Typewriter Text */}
          <div className="h-10 flex items-center overflow-hidden">
            {phase >= 1 && (
              <motion.div className="flex font-heading font-black text-2xl sm:text-3xl tracking-[0.3em] text-white">
                {fullText.split('').map((char, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.06, duration: 0.15 }}
                  >
                    {char}
                  </motion.span>
                ))}
              </motion.div>
            )}
          </div>

          {/* Loading Bar */}
          <motion.div
            className="mt-8 h-[2px] bg-neo-green rounded-full"
            initial={{ width: 0 }}
            animate={{ width: 200 }}
            transition={{ duration: 1.4, delay: 0.3, ease: 'easeInOut' }}
            style={{
              boxShadow: '0 0 10px rgba(140, 200, 75, 0.5)',
            }}
          />
        </div>

        {/* Line Wipe Exit */}
        {phase >= 2 && (
          <motion.div
            className="absolute inset-0 z-20 bg-[#0a0e17]"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            style={{ transformOrigin: 'bottom' }}
          />
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default SplashScreen;
