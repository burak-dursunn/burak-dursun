import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const symbols = ['</>', '{}', '()', '[]', '//', '/*', '*/', '=>', '&&', '||', '::',  '++', '--', '!=', '==='];
const colors = [
  'rgba(140, 200, 75, 0.15)',  // green
  'rgba(255, 222, 89, 0.12)',  // yellow
  'rgba(128, 236, 224, 0.12)', // blue
  'rgba(255, 166, 246, 0.10)', // pink
];

const FloatingElement = ({ symbol, color, initialX, initialY, size, duration, delay }) => {
  return (
    <motion.div
      className="fixed pointer-events-none select-none font-mono font-bold z-[1]"
      style={{
        color,
        fontSize: size,
        left: `${initialX}%`,
        top: `${initialY}%`,
      }}
      animate={{
        y: [0, -30, 10, -20, 0],
        x: [0, 15, -10, 5, 0],
        rotate: [0, 10, -5, 8, 0],
        opacity: [0.4, 0.7, 0.5, 0.8, 0.4],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: 'easeInOut',
        delay,
      }}
    >
      {symbol}
    </motion.div>
  );
};

const FloatingElements = () => {
  const [elements, setElements] = useState([]);

  useEffect(() => {
    const els = [];
    for (let i = 0; i < 14; i++) {
      els.push({
        id: i,
        symbol: symbols[Math.floor(Math.random() * symbols.length)],
        color: colors[Math.floor(Math.random() * colors.length)],
        initialX: Math.random() * 90 + 5,
        initialY: Math.random() * 85 + 5,
        size: `${Math.random() * 18 + 14}px`,
        duration: Math.random() * 8 + 10,
        delay: Math.random() * 5,
      });
    }
    setElements(els);
  }, []);

  return (
    <>
      {elements.map(el => (
        <FloatingElement key={el.id} {...el} />
      ))}
    </>
  );
};

export default FloatingElements;
