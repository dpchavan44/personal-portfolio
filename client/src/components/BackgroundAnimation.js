import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

const BackgroundAnimation = () => {
  const canvasRef = useRef(null);
  const theme = useSelector((store) => store.configData.theme);
  useEffect(() => {
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const binary = '01';
    const fontSize = 16;
    const columns = canvas.width / fontSize;
    const drops = Array.from({ length: columns }).fill(1);

    function draw() {
      const isDarkMode = theme === 'dark';
      ctx.fillStyle = isDarkMode ? 'rgba(0, 0, 0, 0.01)' : 'rgba(255, 255, 255, 0.01)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = isDarkMode ? '#00FF00' : '#0000FF';
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = binary.charAt(Math.floor(Math.random() * binary.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      }
    }

    const interval = setInterval(draw, 33);

    window.addEventListener('resize', () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      });
    };
  }, [theme]);

  return <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full z-0"></canvas>;
};

export default BackgroundAnimation;