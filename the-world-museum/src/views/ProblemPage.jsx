import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { SplitText } from 'gsap/SplitText';

import { useGSAP } from '@gsap/react';
import '../styles/problem-page.css';

const Problempage = () => {
  const container = useRef();

  useGSAP(
    () => {

    },
    { scope: container, revertOnUpdate: true }
  );

  return (
    <main className="home" ref={container}>
      <div className="a">
        <div className="a-1">
          <p className="a-1-title font-inria-serif-bold font-size-48">The Problem.</p>

          <p className="a-1-subtext font-instrument-sans font-size-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
          </p>
          

          <p className="a-1-subtitle font-instrument-sans font-size-20">So what did we do? <br></br>
We started by.</p>

        </div>

        <div className='a-image'>
          <img src="your-image.jpg" alt="Descriptive text" />
        </div>

        <div className='a-2'>
                    <p className="a-2-title font-inria-serif-bold font-size-48">Breaking it Down.</p>
          <p className="a-2-subtext font-instrument-sans font-size-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          </p>
        </div>

        <div className='a-3'></div>

      </div>

    </main>
  );
};

export default Problempage;
