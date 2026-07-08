import { useEffect, useRef } from 'react';
import { tsParticles } from '@tsparticles/engine';
import { loadSlim } from '@tsparticles/slim';
import { useTheme } from '../context/ThemeContext';

const ParticleBackground = () => {
  const { isDarkMode } = useTheme();
  const containerRef = useRef(null);

  useEffect(() => {
    let container;
    
    const initParticles = async () => {
      // Çekirdek motoru slim ile yüklüyoruz
      await loadSlim(tsParticles);
      
      const particleColor = isDarkMode ? "#8CC84B" : "#4b5563"; // Karanlıkta yeşil, aydınlıkta koyu gri

      container = await tsParticles.load({
        id: "tsparticles",
        options: {
          fullScreen: { enable: false }, // Div'in kendi stillerini kullanacağız
          background: { color: { value: "transparent" } },
          fpsLimit: 120,
          particles: {
            color: { value: particleColor }, 
            links: {
              color: particleColor, 
              distance: 150,
              enable: true,
              opacity: 0.8,
              width: 2,
            },
            move: {
              enable: true,
              speed: 1.5,
              direction: "none",
              random: false,
              straight: false,
              outModes: {
                default: "bounce",
              },
            },
            number: { density: { enable: true, area: 800 }, value: 80 },
            opacity: { value: 1 },
            size: { value: 4 },
          },
          interactivity: {
            detectsOn: "window",
            events: {
              onHover: { enable: true, mode: "grab" },
              onClick: { enable: false }, // Repulse performans için kapatıldı
            },
            modes: {
              grab: { 
                distance: 200, 
                links: { opacity: 1, color: particleColor } 
              },
            },
          },
          detectRetina: true,
        }
      });
      containerRef.current = container;
    };

    initParticles();

    return () => {
      if (containerRef.current) {
        containerRef.current.destroy();
      }
    };
  }, [isDarkMode]);

  return (
    <div 
      id="tsparticles" 
      className="fixed inset-0 z-0 pointer-events-none transition-colors duration-500" 
      style={{ width: '100vw', height: '100vh' }}
    />
  );
};

export default ParticleBackground;
