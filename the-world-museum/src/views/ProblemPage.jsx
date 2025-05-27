import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { SplitText } from 'gsap/SplitText';

import { useGSAP } from '@gsap/react';
import './Homepage.css';
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
      <div className="info-element a">
        <h1 className="title font-inria-serif-bold font-size-64">1. The Problem</h1>
        <p className='font-instrument-sans font-size-20'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu eros erat. Vestibulum vitae aliquet nunc. Donec gravida nulla vitae enim laoreet placerat vel ac ex. Nulla facilisi. Pellentesque lacus justo, laoreet sit amet lacus ut, molestie congue velit. Maecenas quis lacinia quam, a elementum tortor. Quisque vulputate consectetur laoreet. Phasellus magna est, faucibus eu congue ac, euismod vitae mi.
        </p>
      </div>

      <div className="info-element b">
        <h1 className="title font-inria-serif-bold font-size-64">1. The Problem</h1>
        <p className='font-instrument-sans font-size-20'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu eros erat. Vestibulum vitae aliquet nunc. Donec gravida nulla vitae enim laoreet placerat vel ac ex. Nulla facilisi. Pellentesque lacus justo, laoreet sit amet lacus ut, molestie congue velit. Maecenas quis lacinia quam, a elementum tortor. Quisque vulputate consectetur laoreet. Phasellus magna est, faucibus eu congue ac, euismod vitae mi.
        </p>
      </div>

    </main>
  );
};

export default Problempage;
