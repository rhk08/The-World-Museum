import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { useGSAP } from '@gsap/react';

const SolutionPage = () => {
  const container = useRef();
  useGSAP(
    () => {

    },
    { scope: container }
  );

  return (
    <main className="home" ref={container}>

      
    </main>
  );
};

export default SolutionPage;
