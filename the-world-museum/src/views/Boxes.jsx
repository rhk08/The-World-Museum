import React, { useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

const HomePage = () => {
  const container = useRef();
  useGSAP(
    () => {
      ScrollTrigger.create({
        trigger: '.box-c',
        start: 'center center',
        end: '+=300',
        pin: true,
        markers: true,
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
      </div>
      <div className="box box-a gradient-blue" data-speed="0.5">
        a
      </div>
      <div className="box box-b gradient-orange" data-speed="0.8">
        b
      </div>
      <div className="box box-c gradient-purple" data-speed="1.5">
        c
      </div>
      <div className="line"></div>
    </main>
  );
};

export default HomePage;
