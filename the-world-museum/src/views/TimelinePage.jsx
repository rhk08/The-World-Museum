import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { useGSAP } from '@gsap/react';
import '../styles/timeline-page.css';

const TimelinePage = () => {
  const container = useRef();


  const [inProgress, setInProgress] = useState(false);

  const playAnimationButton = useRef();
  const rippleEffect1 = useRef();
  const rippleEffect2 = useRef();

  const timeLine = useRef();

  const timelineEnd = useRef();
  const timelineStart = useRef();

  const timelineEndLowerHalf = useRef();
  const timelineStartLowerHalf = useRef();


  const playAnimationButtonLowerHalf = useRef();


  const skipAnimationButtonLowerHalf = useRef();
  const skipAnimationButton = useRef();

  const scrollToStart = () => {
    const smoother = ScrollSmoother.get();
    if (smoother) {
      smoother.scrollTo(timelineStart.current, true, "center center");
    }
  };

  const scrollToEnd = () => {
    const smoother = ScrollSmoother.get();
    if (smoother) {
      smoother.scrollTo(timelineEnd.current, true, "center center");
    }
  };

  const animateAndScrollDivs = () => {
    const divs = Array.from(container.current.querySelectorAll('.timeline-animated-element'));
    const smoother = ScrollSmoother.get();
    const containerRect = container.current.getBoundingClientRect();
    const containerCenterX = containerRect.left + containerRect.width / 2;



    const sortedDivs = divs
      .sort((a, b) => a.getBoundingClientRect().top - b.getBoundingClientRect().top)
      .reverse();

    sortedDivs.forEach((div, index) => {
      const divRect = div.getBoundingClientRect();
      const divCenterX = divRect.left + divRect.width / 2;
      const fromLeft = divCenterX < containerCenterX;
      const xStart = fromLeft ? 50 : -50;
      const yStart = 10; //comes from below

      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollLeft = window.scrollX || document.documentElement.scrollLeft;

      // Add small random offset (±10px)
      const offsetX = (Math.random() - 0.5) * 20; // range: -10 to +10
      const offsetY = (Math.random() - 0.5) * 20;

      const centerX = divRect.left + divRect.width / 2 + scrollLeft + offsetX;
      const centerY = divRect.top + divRect.height / 2 + scrollTop + offsetY;

      // Calculate distance from center of container (closer → bigger scale)
      const distanceFromCenter = Math.abs(containerCenterX - divCenterX);
      const maxDistance = containerRect.width / 2;

      // Invert and normalize: (1 - distance ratio) gives 1 near center, 0 near edge
      const closeness = 1 - Math.min(distanceFromCenter / maxDistance, 1);

      // Use closeness to bias scale toward a higher value near center
      const baseScale = 10;
      const maxExtraScale = 40; // Scale up to 80 total
      const randomScale = baseScale + closeness * maxExtraScale + Math.random() * 10; // Add slight randomness

      // Create and style the circle
      const makeCircle = (extraStyles = {}) => {
        const c = document.createElement('div');
        c.classList.add('timeline-center-circle');
        Object.assign(c.style, {
          position: 'absolute',
          left: `${centerX}px`,
          top: `${centerY}px`,
          width: '20px',
          height: '20px',
          borderRadius: '50%',
          backgroundColor: '#E0D8CC',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
          zIndex: '98',
          opacity: 0,
          scale: 0,
          mixBlendMode: 'darken',
          ...extraStyles
        });
        container.current.appendChild(c);
        return c;
      };

      const circle1 = makeCircle(); // default
      const circle2 = makeCircle();


      gsap.set(div, { x: xStart, y: yStart, opacity: 0, pointerEvents: 'none', scale: 0.99 });

      const tl = gsap.timeline({
        delay: index * 0.1,
        onStart: index === 0 && smoother ? () => {
          const targetCenter = smoother.offset(timelineStart.current, "center center");
          const offsetBelowCenter = 100;
          const targetY = Math.min(ScrollTrigger.maxScroll(window), targetCenter + offsetBelowCenter);

          gsap.to(smoother, {
            scrollTop: targetY,
            duration: 3.5,
            ease: "power3.inOut",
          });
        } : undefined,
      });
      // range: 20 to 50
      // Animate main div
      tl.to(div, {
        x: 0,
        opacity: 0.3,
        duration: 1,
        ease: 'power3.inOut',
      })
        .to(div, {
          y: 0,
          duration: 0.3,
          ease: 'power2.in',
          opacity: 1,
          pointerEvents: 'auto',
          filter: 'blur(0px) brightness(1) saturate(1) sepia(0)',
          scale: 1,
        }, ">-=0.3")
        .fromTo(circle1, {
          scale: 0,
          opacity: 0.7,
        }, {
          scale: randomScale,
          opacity: 0,
          duration: 1.3,
          ease: 'power1.out',
          filter: 'blur(0.2px)',
        }, "0.5")
        .fromTo(circle2, {
          scale: 0,
          opacity: 0.7,
        }, {
          scale: randomScale,
          opacity: 0,
          duration: 1.5,
          ease: 'power1.out',
          filter: 'blur(0.2px)',
        }, "<+=0.2");

    });
  };

  const maxPageHeight = 7500;

  const playAnimation = () => {
    if (inProgress) {
      return;
    }
    setInProgress(true);

    const smoother = ScrollSmoother.get();

    const tl = gsap.timeline({
      onComplete: () => {
        gsap.set(timelineStartText1.current, { pointerEvents: "auto" });
        gsap.set(timelineEndText1.current, { pointerEvents: "auto" });
        setInProgress(false);
      },
    });

    const maxHeight = Math.max(window.innerHeight * 1.1, maxPageHeight);

    tl
      //button ripple effect
      .to(playAnimationButton.current, {
        duration: 0.05,
        y: 10,
        ease: "power1.inOut",
      }, "0")

      .to(playAnimationButton.current, {
        duration: 0.3,
        y: 0,
        ease: "power1.inOut",
      }, "0.25")
      .to(rippleEffect1.current, {
        duration: 1,
        ease: "power1.out",
        scaleX: 1.4,
        scaleY: 1.5,
        opacity: 0,
        filter: 'blur(1px)',
      }, "0")
      .to(rippleEffect2.current, {
        duration: 1.2,
        ease: "power1.out",
        scaleX: 1.4,
        scaleY: 1.5,
        opacity: 0,
        filter: 'blur(1px)',
      }, "0.3")

      //
      .to([skipAnimationButton.current, skipAnimationButtonLowerHalf.current], {
        duration: 0.1,
        opacity: 0,
        pointerEvents: "none",
        ease: "power3.out"
      }, "0")

      //extend timeline
      .to(container.current, {
        duration: 0.5,
        height: maxHeight,
      }, "0")
      .to(timeLine.current, {
        duration: 2.5,
        scaleY: 1,
        ease: "power2.in",

        onUpdate: () => {
          if (smoother) {
            const rect = timeLine.current.getBoundingClientRect();
            const bottomY = rect.top + rect.height;
            const targetScrollY = smoother.scrollTop() + bottomY - window.innerHeight / 2;

            smoother.scrollTo(targetScrollY, true);
          }
        }
      }, "0")


      //timeline button rises to the surface
      .to(timelineEndLowerHalf.current, {
        duration: 1.0,
        y: -10,
        opacity: 1,
        filter: 'blur(0px)',
        ease: "power2.inOut",
      }, ">+=0.2")
      .to(timelineEnd.current, {
        duration: 0.3,
        opacity: 1,
        filter: 'blur(0px)',
        ease: "power2.inOut",
        pointerEvents: "auto",
        cursor: "pointer",
      }, ">-=0.5")
      .to(timelineEndLowerHalf.current, {
        duration: 0.05,
        transformOrigin: "bottom center",
        scaleY: 0.75,
        ease: "power1.out"
      }, ">+=0.1")




      //hide the button above now and place the time Timeline start
      .to([playAnimationButton.current, rippleEffect1.current, rippleEffect2.current, playAnimationButtonLowerHalf.current], {
        duration: 0.05, // you can adjust duration
        opacity: 0,
        pointerEvents: "none",
        ease: "power1.out",
      })
      .to([timelineStart.current, timelineStartLowerHalf.current], {
        opacity: 1,
        pointerEvents: "auto",
        duration: 0.05,
      }, ">")
      .add(() => {
        animateAndScrollDivs();
      }, ">-=0.1");


    //gsap nonsense scroll back to the top


  };

  const skipAnimation = () => {
    if (inProgress) {
      return;
    }
    setInProgress(true);


    const tl = gsap.timeline({
      onComplete: () => {
        gsap.set(timelineStartText1.current, { pointerEvents: "auto" });
        gsap.set(timelineEndText1.current, { pointerEvents: "auto" });
        setInProgress(false);
      },
    });

    const maxHeight = Math.max(window.innerHeight * 1.1, maxPageHeight);
    const divs = Array.from(container.current.querySelectorAll('.timeline-animated-element'));

    tl
      .to([skipAnimationButton.current, skipAnimationButtonLowerHalf.current], {
        duration: 0.1,
        opacity: 0,
        pointerEvents: "none",
        ease: "power3.in",
      }, "0")
      .to([playAnimationButton.current, rippleEffect1.current, rippleEffect2.current, playAnimationButtonLowerHalf.current], {
        duration: 0.2,
        opacity: 0,
        pointerEvents: "none",
        ease: "power3.in",
      }, "0.3")
      .to([timelineStart.current, timelineStartLowerHalf.current, timelineEnd.current, timelineEndLowerHalf.current, timeLine.current], {
        duration: 0.3,
        opacity: 1,
        scaleY: 1,
        pointerEvents: "auto",
        ease: "power3.in",
        filter: 'blur(0px)',
      }, "1")
      .to(timelineEndLowerHalf.current, {
        transformOrigin: "bottom center",
        duration: 0.3,
        scaleY: 0.75,
        y: -10,
        ease: "power3.in",
      }, "1")
      .fromTo(divs, {
        opacity: 0,
        pointerEvents: "none",
        filter: 'blur(0px) brightness(1) saturate(1) sepia(0)',
      }, {
        opacity: 1,
        y: 0,
        pointerEvents: "auto",
        duration: 0.3,
        ease: "power3.in"
      }, "1")
      .to(container.current, {
        duration: 0.3,
        height: maxHeight,
      }, "0")



  };


  const timelineEndText1 = useRef();
  const timelineEndText2 = useRef();

  const timelineStartText1 = useRef();
  const timelineStartText2 = useRef();

  useGSAP(
    () => {
      // Initially shorten the timeline
      gsap.set(timeLine.current, {
        transformOrigin: "top center",
        scaleY: 0
      });


      //hide elements
      const divs = container.current.querySelectorAll('.timeline-animated-element');
      const shadowDivs = Array.from(container.current.querySelectorAll('.timeline-animated-element-shadow'));
      gsap.set([divs, shadowDivs], {
        opacity: 0,
        pointerEvents: 'none',
      });




      // Initially show text1, hide text2 for start and end
      gsap.set(timelineStartText1.current, { opacity: 1, pointerEvents: "none", filter: "blur(0px)" });
      gsap.set(timelineStartText2.current, { opacity: 0, pointerEvents: "none", filter: "blur(1px)" });

      gsap.set(timelineEndText1.current, { opacity: 1, pointerEvents: "none", filter: "blur(0px)" });
      gsap.set(timelineEndText2.current, { opacity: 0, pointerEvents: "none", filter: "blur(1px)" });

      const startEl = timelineStart.current; // Your start container ref
      const endEl = timelineEnd.current;

      let startEnterAnim = null;
      let startLeaveAnim = null;
      let endEnterAnim = null;
      let endLeaveAnim = null;

      // START hover handlers
      const onStartEnter = () => {
        if (startLeaveAnim) {
          startLeaveAnim.kill();
          startLeaveAnim = null;
        }
        if (startEnterAnim) {
          startEnterAnim.kill();
        }
        startEnterAnim = gsap.timeline()
          .to(timelineStartText1.current, { opacity: 0, pointerEvents: "none", duration: 0.2, ease: "power1.inOut", filter: "blur(1px)" })
          .to(timelineStartText2.current, { opacity: 1, pointerEvents: "auto", duration: 0.8, ease: "power1.inOut", filter: "blur(0px)" }, "<");
      };

      const onStartLeave = () => {
        if (startEnterAnim) {
          startEnterAnim.kill();
          startEnterAnim = null;
        }
        if (startLeaveAnim) {
          startLeaveAnim.kill();
        }
        startLeaveAnim = gsap.timeline()
          .to(timelineStartText1.current, { opacity: 1, pointerEvents: "auto", duration: 0.8, ease: "power1.inOut", filter: "blur(0px)" })
          .to(timelineStartText2.current, { opacity: 0, pointerEvents: "none", duration: 0.2, ease: "power1.inOut", filter: "blur(1px)" }, "<");
      };

      // END hover handlers
      const onEndEnter = () => {
        if (endLeaveAnim) {
          endLeaveAnim.kill();
          endLeaveAnim = null;
        }
        if (endEnterAnim) {
          endEnterAnim.kill();
        }
        endEnterAnim = gsap.timeline()
          .to(timelineEndText1.current, { opacity: 0, pointerEvents: "none", duration: 0.2, ease: "power1.inOut", filter: "blur(1px)" })
          .to(timelineEndText2.current, { opacity: 1, pointerEvents: "auto", duration: 0.8, ease: "power1.inOut", filter: "blur(0px)" }, "<");
      };

      const onEndLeave = () => {
        if (endEnterAnim) {
          endEnterAnim.kill();
          endEnterAnim = null;
        }
        if (endLeaveAnim) {
          endLeaveAnim.kill();
        }
        endLeaveAnim = gsap.timeline()
          .to(timelineEndText1.current, { opacity: 1, pointerEvents: "auto", duration: 0.8, ease: "power1.inOut", filter: "blur(0px)" })
          .to(timelineEndText2.current, { opacity: 0, pointerEvents: "none", duration: 0.2, ease: "power1.inOut", filter: "blur(1px)" }, "<");
      };

      startEl.addEventListener("mouseenter", onStartEnter);
      startEl.addEventListener("mouseleave", onStartLeave);

      endEl.addEventListener("mouseenter", onEndEnter);
      endEl.addEventListener("mouseleave", onEndLeave);

      return () => {
        startEl.removeEventListener("mouseenter", onStartEnter);
        startEl.removeEventListener("mouseleave", onStartLeave);
        endEl.removeEventListener("mouseenter", onEndEnter);
        endEl.removeEventListener("mouseleave", onEndLeave);
        if (startEnterAnim) startEnterAnim.kill();
        if (startLeaveAnim) startLeaveAnim.kill();
        if (endEnterAnim) endEnterAnim.kill();
        if (endLeaveAnim) endLeaveAnim.kill();
      };
    },
    { scope: container }
  );

  return (
    <main className="home" style={{ height: "110vh" }} ref={container}>




      {/* 
      <button className='tp-skip-animation-button font-instrument-sans font-size-20' onClick={animateAndScrollDivs}> SKIP ANIMATION? </button> */}
      <div className='tp-main-title-div'>
        <p className='tp-main-title font-inria-serif-bold font-size-40'>Our Timeline.</p>
        <div className='tp-main-title-line'></div>
        <p className='tp-main-text font-instrument-sans font-size-20'>We recognize that digitising 25 million objects is no small feat. To manage this effectively, we've outlined a phased timeline that begins with foundational preparation, including staff training and system setup. Later phases then involve iterative deployment and refinement, alongside built-in opportunities for revenue generation to support the initiative's ongoing sustainability.
        </p>
      </div>

      <button ref={playAnimationButton} className='tp-play-animation-button font-inria-serif-bold font-size-20' onClick={playAnimation}> BEGIN? </button>
      <div ref={rippleEffect1} className='tp-ripple-effect'></div>
      <div ref={rippleEffect2} className='tp-ripple-effect'></div>
      <div ref={playAnimationButtonLowerHalf} className='tp-play-animation-button-lower-half'></div>
      <div className='blurEffect'></div>


      <div ref={timelineStart} className='tp-timeline-start' onClick={scrollToEnd}>
        <p ref={timelineStartText1} className='top-text font-inria-serif-bold font-size-24'>Timeline Start</p>
        <p ref={timelineStartText2} className='bottom-text font-inria-serif-bold font-size-24'>Go to End?</p>
      </div>
      <div ref={timelineStartLowerHalf} className="tp-timeline-start-lower-half"></div>

      <div ref={timeLine} className='tp-timeline'></div>


      <div ref={timelineEnd} className='tp-timeline-end' onClick={scrollToStart}>
        <p ref={timelineEndText1} className='top-text font-inria-serif-bold font-size-24' >Timeline End</p>
        <p ref={timelineEndText2} className='bottom-text font-inria-serif-bold font-size-24' >Go to Start?</p>
      </div>

      <div ref={timelineEndLowerHalf} className='tp-timeline-end-lower-half'></div>


      <button ref={skipAnimationButton} className='tp-skip-animation-button font-instrument-sans font-size-16' onClick={skipAnimation}> SKIP ANIMATION? </button>
      <div ref={skipAnimationButtonLowerHalf} className='tp-skip-animation-button-lower-half'></div>

      <div className='tp-a'>
        <div className='tp-a-l'>

          <div className='tp-a-l-1 timeline-animated-element'>
            <p className='tp-a-l-1-title font-inria-serif-bold font-size-64'>Phase 1</p>
            <p className='tp-a-l-1-text font-instrument-sans font-size-16'>In the first phase, months 1 - 2, staff will be informed about the upcoming digitisation to ensure a smooth transition. Early communication reduces confusion, builds support among staff, and allows time to plan necessary training, improving overall efficiency and minimizing disruptions during implementation.</p>
          </div>

          <div className='tp-a-l-2 timeline-animated-element'>
            <p className='tp-a-l-2-subtitle font-instrument-sans font-size-20'>Additional Info:</p>
            <p className='tp-a-l-2-text font-instrument-sans font-size-16'>Please note that this phase is not strictly limited to the proposed timeframe and can be adjusted as needed to suit the museum's requirements. The same flexibility applies to all subsequent phases mentioned.</p>
          </div>

        </div>
        <div className='tp-a-r'>

          <div className='timeline-animated-element'>
            <p className='tp-a-r-title font-inria-serif-bold font-size-48'>Months 1 - 2</p>
            <p className='tp-a-r-text font-instrument-sans font-size-16'>Ensuring Employee Prepardness</p>
          </div>


          <div className="tp-a-r-image timeline-animated-element">
            <img src="images\stock-informing.png" alt="cheeta" />
          </div>
        </div>
      </div>
      <div className='tp-a-shadow'>
        <div className='tp-a-l'>

          <div className='tp-a-l-1 timeline-animated-element-shadow'>
          </div>

          <div className='tp-a-l-2 timeline-animated-element-shadow'>
          </div>

        </div>
        <div className='tp-a-r'>

          <div className='timeline-animated-element-shadow'>
            <p className='tp-a-r-title font-inria-serif-bold font-size-48'>Months 1 - 2</p>
            <p className='tp-a-r-text font-instrument-sans font-size-16'>Ensuring Employee Prepardness</p>
          </div>


          <div className="tp-a-r-image timeline-animated-element-shadow">
            <img src="images/clore-natural-history-centre.jpg" alt="cheeta" />
          </div>
        </div>
      </div>


      <div className='tp-b'>
        <div className='tp-b-l'>

          <div className='timeline-animated-element'>
            <p className='tp-b-l-title font-inria-serif-bold font-size-48'>Months 3 - 4</p>
            <p className='tp-b-l-text font-instrument-sans font-size-16'>Installment of New Systems & Employee Training</p>
          </div>

          <div className="tp-b-l-image timeline-animated-element">
            <img src="images\screens_nophone-e1515080866673.jpg" alt="" />
          </div>

        </div>
        <div className='tp-b-r'>
          <div className='tp-b-r-1 timeline-animated-element'>
            <p className='tp-b-r-1-title font-inria-serif-bold font-size-64'>Phase 2</p>
            <p className='tp-b-r-1-text font-instrument-sans font-size-16'>In the second phase, months 3 - 4, staff will begin training on the new Collection Management System (CMS) and be introduced to the SPECTRUM standard. This ensures they are equipped to use the system effectively and follow best practices in managing collections outlined in objective 3. At the same time, the CMS will be installed, allowing staff to apply their training directly and start adapting to the new workflow.</p>
          </div>

          <div className='tp-b-r-2 timeline-animated-element'>
            <p className='tp-b-r-2-subtitle font-instrument-sans font-size-20'>Additional Info:</p>
            <p className='tp-b-r-2-text font-instrument-sans font-size-16'>Although it may involve additional costs, online courses for the SPECTRUM standard and Collection Management Systems are available for purchase to support staff training.</p>
          </div>

        </div>
      </div>
      <div className='tp-b-shadow'>
        <div className='tp-b-l'>

          <div className='timeline-animated-element-shadow'>
            <p className='tp-b-l-title font-inria-serif-bold font-size-48'>Months 3 - 4</p>
            <p className='tp-b-l-text font-instrument-sans font-size-16'>Installment of New Systems & Employee Training</p>
          </div>

          <div className="tp-b-l-image timeline-animated-element-shadow">
            <img src="#" alt="" />
          </div>

        </div>
        <div className='tp-b-r'>
          <div className='tp-b-r-1 timeline-animated-element-shadow'>
          </div>

          <div className='tp-b-r-2 timeline-animated-element-shadow'>
          </div>

        </div>
      </div>


      <div className='tp-c'>
        <div className='tp-c-l'>
          <div className='tp-c-l-1 timeline-animated-element'>
            <p className='tp-c-l-1-title font-inria-serif-bold font-size-64'>Phase 3</p>
            <p className='tp-c-l-1-text font-instrument-sans font-size-16'>In Phase 3, months 4 - 9, the digitisation of objects will begin with a small subset of objects using the technologies discussed in response to objective 1. It is also during this time, objects will be tagged with RFID tags and GPS trackers where necessary, as per the reasons mentioned in response to objective 2. This small-scale, phased approach allows testing new workflows on a manageable level, and existing information from other databases will be transferred or linked to avoid duplication. While items lacking sufficient data will be flagged for later updates, analysis, or expert review to ensure accuracy and consistency in the digital records.</p>
          </div>

          <div className="tp-c-l-image-1 timeline-animated-element">
            <img src="images\image-full-size-gaussian-splatting-post.png" alt="gaussian splat" />
          </div>

          <div className="tp-c-l-image-2 timeline-animated-element">
            <video
              src="../videos/gaussian-splat-video.mp4"
              autoPlay
              muted
              loop
              playsInline

            />
          </div>

          <div className='timeline-animated-element'>
            <p className='tp-c-l-title font-inria-serif-bold font-size-48'>Months 10 - 11</p>
            <p className='tp-c-l-text font-instrument-sans font-size-16'>Expanding Public Access</p>
          </div>


        </div>
        <div className='tp-c-r'>

          <div className='timeline-animated-element'>
            <p className='tp-c-r-title font-inria-serif-bold font-size-48'>Months 4 - 10</p>
            <p className='tp-c-r-text font-instrument-sans font-size-16'>Initial Digitisation of Objects Begins</p>
          </div>

          <div className="tp-c-r-image-1 timeline-animated-element">

            <img src="images\rfid.png" alt="rfid" />

          </div>

          <div className="tp-c-r-image-2 timeline-animated-element">

            <video
              src="../videos/vr-gs.mp4"
              autoPlay
              muted
              loop
              playsInline

            />

          </div>

          <div className='tp-c-r-2 timeline-animated-element'>
            <p className='tp-c-r-2-title font-inria-serif-bold font-size-64'>Phase 4</p>
            <p className='tp-c-r-2-text font-instrument-sans font-size-16'>In Phase 4, months 11 to 12—or potentially earlier—the current selection of digitised information and Gaussian 3D models will be made accessible to the community through online platforms. This expanded access will help increase public interest and engagement by allowing people to explore the museum's collection beyond physical visits. By sharing these models, a larger number of objects can be viewed remotely, encouraging potential return visits and fostering greater support for the museum's ongoing digital initiatives. Furthermore, this phase serves as the starting point for the broader outreach and engagement plans outlined in Objective 4.</p>
          </div>


          <div className='tp-c-r-3 timeline-animated-element'>
            <p className='tp-c-r-3-subtitle font-instrument-sans font-size-20'>Additional Info:</p>
            <p className='tp-c-r-3-text font-instrument-sans font-size-16'>Although not strictly necessary in this experimental phase, scanning objects from each type would potentially offer visitors more variety and help staff understand the process across categories.</p>
          </div>

        </div>
      </div>
      <div className='tp-c-shadow'>
        <div className='tp-c-l'>
          <div className='tp-c-l-1 timeline-animated-element-shadow'>
          </div>

          <div className="tp-c-l-image-1 timeline-animated-element-shadow">
            <img src="#" alt="" />
          </div>

          <div className="tp-c-l-image-2 timeline-animated-element-shadow">
            <img src="#" alt="" />
          </div>

          <div className='timeline-animated-element-shadow'>
            <p className='tp-c-l-title font-inria-serif-bold font-size-48'>Months 10 - 11</p>
            <p className='tp-c-l-text font-instrument-sans font-size-16'>Expanding Public Access</p>
          </div>


        </div>
        <div className='tp-c-r'>

          <div className='timeline-animated-element-shadow'>
            <p className='tp-c-r-title font-inria-serif-bold font-size-48'>Months 4 - 10</p>
            <p className='tp-c-r-text font-instrument-sans font-size-16'>Initial Digitisation of Objects Begins</p>
          </div>

          <div className="tp-c-r-image-1 timeline-animated-element-shadow">
            <img src="#" alt="" />
          </div>

          <div className="tp-c-r-image-2 timeline-animated-element-shadow">
            <img src="#" alt="" />
          </div>

          <div className='tp-c-r-2 timeline-animated-element-shadow'>
          </div>


          <div className='tp-c-r-3 timeline-animated-element-shadow'>
          </div>

        </div>
      </div>



      <div className='tp-d'>
        <div className='tp-d-l'>
          <div className='tp-d-l-1 timeline-animated-element'>
            <p className='tp-d-l-1-title font-inria-serif-bold font-size-64'>Phase 5</p>
            <p className='tp-d-l-1-text font-instrument-sans font-size-16'>Between months 7 and 12, either alongside or following the initial digitisation of selected objects, items flagged for additional information will undergo the standardized process outlined in Objective 3 abliet at a slower rate. This will include the creation of high-fidelity 3D models suitable for academic use. These detailed models will support research and can be loaned or shared, opening new opportunities for revenue and broader academic collaboration.</p>
          </div>

          <div className='tp-d-l-2 timeline-animated-element'>
            <p className='tp-d-l-2-subtitle font-instrument-sans font-size-20'>Additional Info:</p>
            <p className='tp-d-l-2-text font-instrument-sans font-size-16'>Following the special considerations, cultural objects will be prioritized, as we prefer to return them. Gaussian Models can still be produced at high quality using the scanned data. </p>
          </div>

        </div>
        <div className='tp-d-r'>
          <div className='timeline-animated-element'>
            <p className='tp-d-r-title font-inria-serif-bold font-size-48'>Months 7 - 12</p>
            <p className='tp-d-r-text font-instrument-sans font-size-16'>Advanced Digitisation & Research Support</p>
          </div>


          <div className="tp-d-r-image timeline-animated-element">
            <img src="images\analysis.jpg" alt="cheeta" />
          </div>
        </div>
      </div>
      <div className='tp-d-shadow'>
        <div className='tp-d-l'>
          <div className='tp-d-l-1 timeline-animated-element-shadow'>
          </div>

          <div className='tp-d-l-2 timeline-animated-element-shadow'>
          </div>

        </div>
        <div className='tp-d-r'>
          <div className='timeline-animated-element-shadow'>
            <p className='tp-d-r-title font-inria-serif-bold font-size-48'>Months 7 - 12</p>
            <p className='tp-d-r-text font-instrument-sans font-size-16'>Advanced Digitisation & Research Support</p>
          </div>


          <div className="tp-d-r-image timeline-animated-element-shadow">
            <img src="#" alt="" />
          </div>
        </div>
      </div>


      <div className='tp-e'>
        <div className='tp-e-l'>
          <div className='timeline-animated-element'>
            <p className='tp-e-l-title font-inria-serif-bold font-size-48'>Months 12 - 14</p>
            <p className='tp-e-l-text font-instrument-sans font-size-16'>Review and Process Improvement</p>
          </div>

          <div className="tp-e-l-image timeline-animated-element">
            <img src="images\gathering-feedback.jpg" alt="" />
          </div>


        </div>
        <div className='tp-e-r'>
          <div className='tp-e-r-1 timeline-animated-element'>
            <p className='tp-e-r-1-title font-inria-serif-bold font-size-64'>Phase 6</p>
            <p className='tp-e-r-1-text font-instrument-sans font-size-16'>Conduct a full review and evaluation of the digitisation process so far, gathering feedback from staff and community users. Identify any gaps or challenges in the workflows, data quality, or user experience. Use these insights to refine digitisation methods, update training materials, and improve system integrations to ensure long-term sustainability.
            </p>
          </div>

        </div>
      </div>
      <div className='tp-e-shadow'>
        <div className='tp-e-l'>
          <div className='timeline-animated-element-shadow'>
            <p className='tp-e-l-title font-inria-serif-bold font-size-48'>Months 12 - 14</p>
            <p className='tp-e-l-text font-instrument-sans font-size-16'>Review and Process Improvement</p>
          </div>

          <div className="tp-e-l-image timeline-animated-element-shadow">
            <img src="#" alt="" />
          </div>


        </div>
        <div className='tp-e-r'>
          <div className='tp-e-r-1 timeline-animated-element-shadow'>
          </div>

        </div>
      </div>


      <div className='tp-f'>
        <div className='tp-f-l'>
          <div className='tp-f-l-1 timeline-animated-element'>
            <p className='tp-f-l-1-title font-inria-serif-bold font-size-64'>Phase 7</p>
            <p className='tp-f-l-1-text-1 font-instrument-sans font-size-16'>Continue expanding digitisation efforts at a steady pace to cover the remaining collections, applying the refined processes developed in Phase 6. Tagging, scanning, and the creation of both low- and high-fidelity digital assets should continue, with increased integration into interactive exhibits, online platforms, and educational programs to enhance public engagement and accessibility, as outlined in Objective 4.
            </p>
            <p></p>
            <p className='tp-f-l-1-text-2 font-instrument-sans font-size-16'>As this work progresses, the project enters its final phase—shifting from initial implementation to long-term integration and sustainability. With the majority of the collection digitised and accessible, the focus moves to maintaining and evolving these systems. Continued innovation, through virtual tours, augmented reality, and online exhibitions, will ensure the museum remains dynamic and inclusive, allowing its collections to educate and inspire future generations.
            </p>
          </div>

        </div>
        <div className='tp-f-r'>
          <div className='timeline-animated-element'>
            <p className='tp-f-r-title font-inria-serif-bold font-size-48'>Months 15+</p>
            <p className='tp-f-r-text font-instrument-sans font-size-16'>Full Collection Digitisation & Public Integration</p>
          </div>
          <div className="tp-f-r-image-1 timeline-animated-element">

                        <video
              src="../videos/tour-gs.mp4"
              autoPlay
              muted
              loop
              playsInline

            />
          </div>

          <div className="tp-f-r-image-2 timeline-animated-element">
            <img src="images\whole-collection.jpg" alt="cheeta" />
          </div>
        </div>
      </div>

      <div className='tp-f-shadow'>
        <div className='tp-f-l'>
          <div className='tp-f-l-1 timeline-animated-element-shadow'>
          </div>

        </div>
        <div className='tp-f-r'>
          <div className='timeline-animated-element-shadow'>
            <p className='tp-f-r-title font-inria-serif-bold font-size-48'>Months 15+</p>
            <p className='tp-f-r-text font-instrument-sans font-size-16'>Full Collection Digitisation & Public Integration</p>
          </div>
          <div className="tp-f-r-image-1 timeline-animated-element-shadow">
            <img src="#" alt="" />
          </div>

          <div className="tp-f-r-image-2 timeline-animated-element-shadow">
            <img src="#" alt="" />
          </div>
        </div>
      </div>

      <div className='tp-final-checklist-div'>
        <p className='tp-main-title font-inria-serif-bold font-size-40'>Requirements Checklist.</p>
        <div className='tp-main-title-line'></div>
        <p className='tp-main-text font-instrument-sans font-size-20'>Below is a final checklist to ensure that each requirement is addressed within our proposed solution and timeline.
        </p>
      </div>

      <div className='tp-checklist-div'></div>



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

export default TimelinePage;
