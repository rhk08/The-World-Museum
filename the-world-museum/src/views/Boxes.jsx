import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

import { useGSAP } from '@gsap/react';
import './Homepage.css';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);

const HomePage = () => {
  const container = useRef();


  useGSAP(
    () => {
      // Existing pin for .box-c
      ScrollTrigger.create({
        trigger: '.box-c',
        start: 'center center',
        end: '+=300',
        pin: true,
        scrub: true,
        markers: true,
      });

      // // New horizontal scroll for .box-d
      // gsap.to('.box-d', {
      //   scale: 1.5,
      //   opacity: 1,
      //   scrollTrigger: {
      //     trigger: '.box-d',
      //     start: 'center center',
      //     end: '+=300',
      //     pin: true,
      //     scrub: true,             
      //     markers: true,
      //   },
      // });
      const segmenter = new Intl.Segmenter("zh", { granularity: "word" });
      document.fonts.ready.then(() => {
        gsap.set(".split", { opacity: 1 });

        const split = SplitText.create(".split", {
          type: "words",
          wordsClass: "word",
          prepareText: (text, el) => {
            return [...segmenter.segment(text)].map(s => s.segment).join(String.fromCharCode(8204))
          },
          wordDelimiter: { delimiter: /\u200c/, replaceWith: " " },
          autoSplit: true,
          onSplit: (self) => {
            gsap.from(self.words, {
              y: 50,
              opacity: 0,
              stagger: 0.1,
              ease: "none",

              scrollTrigger: {
                trigger: ".split",
                start: "top bottom",
                end: "+=1000", // Defines how long the scroll animation lasts
                scrub: true,       // Tie animation progress to scroll position
                markers: true      // Remove in production
              },// Use 'none' or very light easing for scrub
            });
          }
        });
      });

      // ScrollTrigger for video appearance
      gsap.from(".video-banner video", {
        opacity: 0,
        scale: 0.9,

        scrollTrigger: {
          trigger: ".video-banner",
          start: "top bottom",    // when the video enters the viewport
          end: "top center",      // animation completes at center
          scrub: true,            // tie animation to scroll position
          markers: true           // remove in production
        }
      });

      gsap.from(".video-banner video", {
        opacity: 0,
        scale: 0.9,

        scrollTrigger: {
          trigger: ".video-banner",
          start: "top bottom",    // when the video enters the viewport
          end: "top center",      // animation completes at center
          scrub: true,            // tie animation to scroll position
          markers: true           // remove in production
        }
      });


      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.pinned-section',
          start: 'top top',
          end: '+=1000',
          scrub: true,
          pin: true,
          markers: true,
        }
      });

      tl.from('.text', { opacity: 0, y: 50 })
        .from('.image', { scale: 0.8, opacity: 0 });


      const tl0 = gsap.timeline({
        scrollTrigger: {
          trigger: '.pinned-section0',
          start: 'top top',
          end: '+=1000',
          scrub: true,
          pin: true,
          markers: true,
        }
      });

      tl0.from('.text', {
        opacity: 0,
        y: 50
      });

      tl0.to('.gallery-image', {
        opacity: 1,
        scale: 1,
        stagger: 0.3, // Images pop one-by-one
        ease: 'back.out(1.7)'
      }, "-=0.3"); // Slight overlap with previous animation

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
      {/* DO NOT MAKE SCROLL TRIGGERS WHEN DATA-SPEED != 1.0 */}
      <div className="box box-c gradient-purple" data-speed="1.0">
        c
      </div>

      <div className="line"></div>


      <div className="box box-d" data-speed="1">
        d
      </div>

      <div className="container0">
        <h1 className="split">我真的很喜欢使用GSAP制作酷炫的动画效果</h1>
      </div>

      <div className="video-banner">
        <video
          src="../../public/videos/world_museum_video.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="content">
          <h1>Welcome to the World Museum</h1>
          <p>Explore history like never before</p>
        </div>
      </div>


      <div className="pinned-section">
        <h2 className="text">Scroll-Triggered Animation</h2>
        <img
          className="image"
          src="../images/antiquities.jpg"
          alt="Kitten"
        />
      </div>


      <div className="pinned-section0">
        <h2 className="text">Gallery Reveal</h2>
        <div className="image-row">
          <img className="gallery-image" src="../images/antiquities.jpg" alt="1" />
          <img className="gallery-image" src="../images/antiquities.jpg" alt="2" />
          <img className="gallery-image" src="../images/antiquities.jpg" alt="3" />
        </div>
      </div>

    </main>
  );
};

export default HomePage;
