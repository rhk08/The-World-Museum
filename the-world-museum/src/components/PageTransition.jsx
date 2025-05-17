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
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
      );

      return () => {};
    }, container);

    return () => ctx.revert();
  }, [location.pathname]);

  return <div ref={container}>{children}</div>;
}
