import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { useGSAP } from '@gsap/react';
import '../styles/solution-page.css';

const SolutionPage = () => {
  const container = useRef();
  useGSAP(
    () => {

    },
    { scope: container }
  );

  return (
    <main className="home" style={{ height: "7500px" }} ref={container}>
      <div className='sp-obj1-wrapper'>
        <p className='sp-obj1-title font-inria-serif-bold font-size-40'>Addressing Objective 1.</p>
        <div className='sp-obj1-subtitle1-wrapper'>
          <p className='sp-obj1-subtitle1-title font-instrument-sans font-size-20'>FOREWORD</p>
          <p className='sp-obj1-subtitle1-section font-instrument-sans font-size-20'>( 01 )</p>
          <div className='sp-obj1-subtitle1-line'></div>
        </div>
        <p className='sp-obj1-text1 font-instrument-sans font-size-20'>
          Digitising museum objects is often slow, inconsistent, and risky — especially with collections as large as the World Museum’s 25 million artefacts. To reduce handling and improve efficiency, our solution will aim to capture all necessary information in a single, streamlined session, ideally in batches.
        </p>

        <div className='sp-spacer1'></div>

        <div className='sp-obj1-subtitle1-wrapper'>
          <p className='sp-obj1-subtitle1-title font-instrument-sans font-size-20'>PROPOSED SOLUTION</p>
          <p className='sp-obj1-subtitle1-section font-instrument-sans font-size-20'>( 02 )</p>
          <div className='sp-obj1-subtitle1-line'></div>
        </div>
        <p className='sp-obj1-text1 font-instrument-sans font-size-20'>
          Our solution involves using a series of multiple technologies. Where each component of the proposed system directly contributes to improving the efficiency of object handling during digitization by reducing manual labor, minimizing repositioning, accelerating data capture, and improving automation.
        </p>

        <div className=''></div>

      </div>


      <div className='f' style={{ top: 7000 }}>
        <div className='f-1'>

          <div className='f-1-container'>
            <p className='f-1-text1 font-inria-serif-bold font-size-96'>DI.</p>
            <p className='f-1-text2 font-instrument-sans font-size-16'>The Museum Digitisation Initative.</p>

            <div className='f-1-line'></div>
            <p className='f-1-text3 font-inria-serif-bold font-size-48'>2025</p>
          </div>

        </div>


        <div className='f-credits-wrapper'>
          <div className='f-2'>

            <p className='font-instrument-sans font-size-12'>INFORMATION:</p>
            <div className='seperator'></div>
            <p className='font-instrument-sans font-size-12'>JUSTIN WU</p>
            <p className='font-instrument-sans font-size-12'>BROOKE WANG</p>
            <p className='font-instrument-sans font-size-12'>JENNIFER BRENNAN</p>
            <p className='font-instrument-sans font-size-12'>SI QI</p>
          </div>


          <div className='f-3'>
            <p className='font-instrument-sans font-size-12'>WEBSITE:</p>
            <div className='seperator'></div>
            <a href="https://www.linkedin.com/in/ryanzwkhor/" target="_blank" rel="noopener noreferrer" className="font-instrument-sans font-size-12 f-link hover-underline-animation-f left">
              RYAN KHOR
            </a>
          </div>
        </div>


        <div className="shadow-overlay"></div>

        <div data-speed="0.5" className='video-wrapper'>
          <video
            src="../videos/world_museum_video.mp4"
            autoPlay
            muted
            loop
            playsInline

          />
          <div className="inset-shadow-bottom">

          </div>
        </div>

      </div>
    </main>
  );
};

export default SolutionPage;
