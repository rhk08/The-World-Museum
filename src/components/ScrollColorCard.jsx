import { useRef, useEffect, useState } from 'react';

const ScrollColorCard = ({ index }) => {
  const cardRef = useRef(null);
  const [bgColor, setBgColor] = useState('rgb(255,255,255)');

  useEffect(() => {
    const handleScroll = () => {
      if (!cardRef.current) return;

      const rect = cardRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const visibleRatio = 1 - Math.max(0, Math.min(1, rect.top / windowHeight));

      const r = Math.floor(255 - visibleRatio * 100);
      const g = Math.floor(255 - visibleRatio * 200);
      const b = 255;

      setBgColor(`rgb(${r}, ${g}, ${b})`);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      ref={cardRef}
      className="w-4/5 mx-auto rounded-2xl shadow-md p-10 text-xl transition-colors duration-300"
      style={{ backgroundColor: bgColor }}
    >
      Card #{index + 1} – Scroll to change my color
    </div>
  );
};

export default ScrollColorCard;