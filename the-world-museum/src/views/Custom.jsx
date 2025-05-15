import React, { useRef , useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { useGSAP } from '@gsap/react';

const Custom = () => {
  const container = useRef();

  const scrollTo = () => {
    const smoother = ScrollSmoother.get();
    if (smoother) {
      smoother.scrollTo('.box-c', true, 'center center');
    }
  };

  
  useGSAP(
    () => {
      // Existing pin for .box-c
      ScrollTrigger.create({
        trigger: '.box-c',
        start: 'center center',
        end: '+=300',
        pin: true,
        markers: true,
      });

      // New horizontal scroll for .box-d
      gsap.to('.box-d', {
        scale: 1.5,
        opacity: 1,
        rotation: 100000,
        scrollTrigger: {
          trigger: '.box-d',
          start: 'center center',  // correct spelling
          end: '+=600',
          scrub: true,             // enables smooth reverse animation
          markers: true,
          pin: true,
        },
      });

    },
    { scope: container }
  );
  
  return (
    <main className="home" ref={container}>
      <div className="header">
        <h1 className="title">ScrollSmoother &amp; React Router</h1>
        <p>
          Simple example for setting up GSAP ScrollSmoother in a React App using{' '}
          <strong>
            <i>React</i> <i>Router</i>
          </strong>
        </p>

        <button className="button" onClick={scrollTo}>
              Jump to C
        </button>
      </div>


      <div className="box box-a gradient-blue" data-speed="0.5">
        a
      </div>
      <div className="box box-b gradient-orange" data-speed="0.8">
        b
      </div>
      <div className="box box-c gradient-purple" data-speed="1">
        c
      </div>

      <div className="line"></div>


      <div className="box box-d" data-speed="1">
        d
      </div>

    </main>
  );
};

export default Custom;
