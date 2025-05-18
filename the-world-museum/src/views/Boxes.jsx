import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

import { useGSAP } from '@gsap/react';
import './Homepage.css';

const HomePage = () => {
  const container = useRef();

  const splitRef = useRef(null);
  const triggerRef = useRef(null);

  useGSAP(
    () => {

      const splitEl = container.current?.querySelector(".split");
      if (!splitEl) return;

      document.fonts.ready.then(() => {
        splitRef.current = SplitText.create(splitEl, {
          type: "words",
          wordsClass: "word"
        });

        triggerRef.current = ScrollTrigger.create({
          trigger: splitEl,
          start: "top bottom",
          end: "+=1000",
          scrub: true,
          markers: true,
          animation: gsap.from(splitRef.current.words, {
            y: 50,
            opacity: 0,
            stagger: 0.1,
            ease: "none"
          })
        });
      });



      // Existing pin for .box-c
      ScrollTrigger.create({
        trigger: '.box-c',
        start: 'center center',
        end: '+=300',
        pin: true,
        scrub: true,
        markers: true,
      });

      // New horizontal scroll for .box-d
      gsap.to('.box-d', {
        scale: 1.5,
        opacity: 1,
        scrollTrigger: {
          trigger: '.box-d',
          start: 'center center',
          end: '+=300',
          pin: true,
          scrub: true,
          markers: true,
        },
      });

      // Step 1: Animate video on scroll
      gsap.from(".video-banner video", {
        opacity: 0,
        scale: 0.9,
        scrollTrigger: {
          trigger: ".video-banner",
          start: "top bottom",    // when the video enters the viewport
          end: "top center",      // animation completes at center
          scrub: true,
          markers: true,
          onEnter: () => enableHoverAnimation(), // Enable hover animation only once visible
        }
      });

      // Step 2: Define hover animation (initially disabled)
      function enableHoverAnimation() {
        const video = document.querySelector(".video-banner video");

        // Add hover listeners only once
        if (!video.dataset.hoverBound) {
          video.dataset.hoverBound = true;

          video.addEventListener("mouseenter", () => {
            gsap.to(video, {
              scale: 1.05,
              duration: 0.4,
              ease: "power2.out"
            });
          });

          video.addEventListener("mouseleave", () => {
            gsap.to(video, {
              scale: 1,
              duration: 0.4,
              ease: "power2.out"
            });
          });
        }
      }

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



      //sequence
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



      //When componenet demounts from the div this runs
      // return () => {
      //   ScrollTrigger.getAll().forEach(trigger => {
      //     if (trigger.trigger === document.querySelector(".split")) {
      //       console.log(trigger)
      //     }
      //   });
      // };


    },
    { scope: container, revertOnUpdate: true }
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
      <div className="box box-c gradient-purple" data-speed="1">
        d
      </div>

      <div className="line"></div>


      <div className="box box-d" data-speed="1">
        d
      </div>

      <div className="container0">
        <h1 className="split">hello hello hello hello hello hello hello hello</h1>
      </div>

      <div className="video-banner">
        <video
          src="../videos/world_museum_video.mp4"
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
