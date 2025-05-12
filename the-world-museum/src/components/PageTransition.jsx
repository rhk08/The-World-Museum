// components/PageTransition.jsx
import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { useLocation } from 'react-router-dom';

export default function PageTransition({ children }) {
  const container = useRef();
  const location = useLocation();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        container.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' }
      );

      return () => {
        gsap.to(container.current, {
          opacity: 0,
          y: -50,
          duration: 0.4,
          ease: 'power2.inOut',
        });
      };
    }, container);

    return () => ctx.revert();
  }, [location.pathname]);

  return <div ref={container}>{children}</div>;
}
