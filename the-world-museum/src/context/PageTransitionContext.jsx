import { useState, useEffect, useRef } from 'react';
import { useLocation, Routes, Route } from 'react-router-dom';
import gsap from 'gsap';

import Boxes from '../views/Boxes';
import Images from '../views/Images';

export default function AnimatedRoutes() {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransitionStage] = useState('enter');
  const container = useRef();

  useEffect(() => {
    if (location.pathname !== displayLocation.pathname) {
      setTransitionStage('exit');
    }
  }, [location, displayLocation]);

  useEffect(() => {
    if (transitionStage === 'exit') {
      gsap.to(container.current, {
        opacity: 0,
        y: -50,
        duration: 0.4,
        ease: 'power2.inOut',
        onComplete: () => {
          setDisplayLocation(location);
          setTransitionStage('enter');
        },
      });
    } else {
      gsap.fromTo(
        container.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' }
      );
    }
  }, [transitionStage, location]);

  return (
    <div ref={container}>
      <Routes location={displayLocation}>
        <Route index element={<Boxes />} />
        <Route path="images" element={<Images />} />
      </Routes>
    </div>
  );
}
