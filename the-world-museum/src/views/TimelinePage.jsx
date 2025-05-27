import React, { useRef , useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { useGSAP } from '@gsap/react';
import '../styles/timeline-page.css';

const TimelinePage = () => {
  const container = useRef();  
  useGSAP(
    () => {
      
    },
    { scope: container }
  );
  
  return (
    <main className="home" style={{ height: 6500 }} ref={container}>
      <p className='tp-timeline-start font-inria-serif-bold font-size-24'>Timeline Start</p>
      <div className='tp-timeline'></div>
      <p className='tp-timeline-end font-inria-serif-bold font-size-24'>Timeline End</p>


      <div className='tp-a'>
      <div className='tp-a-l'>
        <div className='tp-a-l-1'>
          <p className='tp-a-l-1-title font-inria-serif-bold font-size-64'>Phase 1</p>
          <p className='tp-a-l-1-text font-instrument-sans font-size-16'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </div>
      </div>
      <div className='tp-a-r'>
        <p className='tp-a-r-title font-inria-serif-bold font-size-48'>Year 2025</p>
        <p className='tp-a-r-text font-instrument-sans font-size-16'>Cost? 100$</p>
      </div>
      </div>

    </main>
  );
};

export default TimelinePage;
