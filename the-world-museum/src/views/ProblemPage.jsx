import React, { useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { SplitText } from 'gsap/SplitText';


import { useGSAP } from '@gsap/react';
import '../styles/problem-page.css';

const Problempage = () => {
  const container = useRef();


  const a1Ref = useRef();
  const a2Ref = useRef();
  const a2LeftRef = useRef();
  const a2RightRef = useRef();
  const [isSplit, setIsSplit] = useState(false);
  const [inProgress, setInProgress] = useState(false);


  const a1TextRef1 = useRef();
  const a1TextRef2 = useRef();
  const a1TextRef3 = useRef();


  const a2LeftTextRef = useRef();
  const a2RightTextRef = useRef();



  const splitProblemStatement = () => {
    if (inProgress) {
      return;
    }
    setInProgress(true);

    const tl = gsap.timeline({
      onComplete: () => {
        setIsSplit(!isSplit);
        setInProgress(false);
      },
    });
    // const a1Split = new SplitText(a1TextRef.current, { type: "lines" });
    // const a2LeftSplit = new SplitText(a2LeftTextRef.current, { type: "lines" });
    // const a2RightSplit = new SplitText(a2RightTextRef.current, { type: "lines" });

    if (!isSplit) {
      // Animate out a1 and split a2 panels outward
      tl
        .to(a2LeftRef.current, {
          duration: 0,
          scaleY: 0.9,
        }, "0")
        .to(a2RightRef.current, {
          duration: 0,
          scaleY: 0.9,
        }, "0")
        .to(a1Ref.current, {
          duration: 0.3,
          opacity: 0,
          scaleY: 0.8,
          pointerEvents: "none"
        })

        .to(a2LeftRef.current, {
          duration: 0.8,
          x: "-260px",
          opacity: 1,
          scaleY: 1,
          pointerEvents: "auto",
          ease: "power4.out"
        }, "<") // start at same time as previous
        .to(a2RightRef.current, {
          duration: 0.8,
          x: "260px",
          opacity: 1,
          scaleY: 1,
          pointerEvents: "auto",
          ease: "power4.out"
        }, "<");

      const a2LeftSplit = new SplitText(a2LeftTextRef.current, { type: "lines" });
      const a2RightSplit = new SplitText(a2RightTextRef.current, { type: "lines" });

      tl
        .from(a2LeftSplit.lines, {
          duration: 0.6,
          opacity: 0,
          y: 20,
          stagger: 0.03,
          ease: "power2.out",
        }, 0.3)  // start at time = 0 (immediately)
        .from(a2RightSplit.lines, {
          duration: 0.6,
          opacity: 0,
          y: 20,
          stagger: 0.03,
          ease: "power2.out",
        }, 0.3);

    } else {
      // Animate a2 panels inward and bring back a1 quickly
      tl.to([a2LeftRef.current, a2RightRef.current], {
        duration: 0.3,
        x: "0px",
        opacity: 0,
        pointerEvents: "none",
        ease: "power1.in"
      })
        .to(a1Ref.current, {
          duration: 0.2,
          opacity: 1,
          scaleY: 1,
          pointerEvents: "auto"
        }, "<");

      // Split a1 text lines for fade-in only
      const a1Split1 = new SplitText(a1TextRef1.current, { type: "lines" });
      const a1Split2 = new SplitText(a1TextRef2.current, { type: "lines" });
      const a1Split3 = new SplitText(a1TextRef3.current, { type: "lines" });

      // Animate lines of a1Split1
      tl.from(a1Split1.lines, {
        duration: 0.4,
        opacity: 0,
        y: 20,
        stagger: 0.05,
        ease: "power2.out",
      }, 0.2)
        .from(a1Split2.lines, {
          duration: 0.4,
          opacity: 0,
          y: 20,
          stagger: 0.05,
          ease: "power2.out",
        }, 0.4)
        .from(a1Split3.lines, {
          duration: 0.4,
          opacity: 0,
          y: 20,
          stagger: 0.05,
          ease: "power2.out",
        }, 0.6);
    }
  };

  const aWrapper = useRef();
  const blackoutBox = useRef();
  const blackoutButton = useRef();
  const showProblemButton = useRef();

  const breakdownDiv = useRef();
  const breakdownDivText1 = useRef();
  const breakdownDivText2 = useRef();
  const orangeTag = useRef();

  const [isBreakdownShown, setIsBreakdownShown] = useState(false);

  const objectivesWrapper = useRef();



  const ShowBreakDown = () => {
    if (inProgress) {
      return;
    }
    setInProgress(true);



    const tl = gsap.timeline({
      onComplete: () => {
        setIsBreakdownShown(!isBreakdownShown);
        setInProgress(false);

      }
    });

    const verticalDistance = 300;
    const blackoutTime = "3";



    if (!isBreakdownShown) {
      const baseSize = 10;
      const scaleX = window.innerWidth * 1.2 / baseSize;
      const scaleY = window.innerHeight * 1.2 / baseSize;
      const maxScale = Math.max(scaleX, scaleY);

      const breakdownDivText1Split = new SplitText(breakdownDivText1.current, { type: "words" });
      const breakdownDivText2Split = new SplitText(breakdownDivText2.current, { type: "words" });

      //show darkness
      tl.to(blackoutBox.current, {
        duration: 0.6,
        opacity: 1,
        scale: maxScale,
        pointerEvents: "none",
        borderRadius: "1%",
        ease: "power3.out",
      }, "0")

        //grow container
        .to(container.current, {
          duration: 0.6,
          height: 4200,
          ease: "power2.inOut",
        }, "0")

        .to(blackoutButton.current, {
          duration: 0.2,
          opacity: 0,
          pointerEvents: "none",
          ease: "power3.out",
        }, "0")

        //move darkness spot
        .to(blackoutBox.current, {
          duration: 0,
          y: -verticalDistance,
        }, ">")
        .to(aWrapper.current, {
          duration: 0,
          display: "none",
        }, ">")
        //display breakdown div
        .to(breakdownDiv.current, {
          duration: 0,
          display: "block",
          opacity: 1,
          pointerEvents: "auto",

        }).from(breakdownDivText1Split.words, {
          duration: 0.3,
          opacity: 0,
          y: -20,
          stagger: 0.05,
          ease: "power2.out",
        }, ">")
        .from(breakdownDivText2Split.words, {
          duration: 0.3,
          opacity: 0,
          y: -5,
          stagger: 0.04,
          ease: "power2.out",
        }, ">+=0.2")
        .to(objectivesWrapper.current, {
          duration: 0,
          opacity: 1,
        }, ">")


        //end logic
        .to(blackoutBox.current, {
          duration: 0.6,
          scale: 1,
          opacity: 1,
          pointerEvents: "auto",
          borderRadius: "100%",
          ease: "power2.out",
        }, blackoutTime)
        //display the other button 
        .to(showProblemButton.current, {
          duration: 0.3,
          y: 10,
          opacity: 1,
          pointerEvents: "auto",
          ease: "power2.in",
        }, "<")
        //display tag
        .to(orangeTag.current, {
          duration: 0.2,
          y: 10,
          opacity: 1,
          pointerEvents: "auto",
          ease: "power2.in",
        }, ">");



      console.log("hello")

    } else {
      const baseSize = 10;
      const scaleX = window.innerWidth * 1.2 / baseSize;
      const scaleY = window.innerHeight * 1.2 / baseSize;
      const maxScale = Math.max(scaleX, scaleY);

      //showdarkness
      tl.to(blackoutBox.current, {
        duration: 0.6,
        opacity: 1,
        scale: maxScale,
        pointerEvents: "none",
        borderRadius: "1%",
        ease: "power3.out",
      }, "0")
        .to(container.current, {
          duration: 0.6,
          height: 1000,
          ease: "power2.inOut",
        }, "0")
        //hide button
        .to(showProblemButton.current, {
          duration: 0.2,
          y: 0,
          opacity: 0,
          pointerEvents: "none",
        }, "0")
        //remove text and orange box
        .to(orangeTag.current, {
          duration: 1,
          y: 0,
          opacity: 0,
          ease: "power2.out",
        }, "0.05")


        //remove div
        .to(breakdownDiv.current, {
          duration: 1,
          opacity: 0,
          pointerEvents: "none",
          ease: "power2.out",
        }, "0.05")

        //move blackout box
        .to(blackoutBox.current, {
          duration: 0,
          y: 0,
        }, "0.8")
        //show aWrapper element
        .to(aWrapper.current, {
          duration: 0,
          display: "block",
          pointerEvents: "none",
        }, ">")

        //hide objectives
        .to(objectivesWrapper.current, {
          opacity: 0,
          pointerEvents: "none",
        }, ">")




        //shrink box
        .to(blackoutBox.current, {
          duration: 0.6,
          scale: 1,
          opacity: 1,
          pointerEvents: "auto",
          borderRadius: "100%",
          ease: "power2.out",
        }, "1")

        //display button
        .to(blackoutButton.current, {
          duration: 0.3,
          y: 0,
          opacity: 1,
          pointerEvents: "auto",
        }, "<")
        .to(aWrapper.current, {
          duration: 0,
          pointerEvents: "auto",
        }, "<")


    }


  }


  useGSAP(
    () => {

    },
    { scope: container, revertOnUpdate: true }
  );

  return (
    <main className="home" style={{ height: 1000 }} ref={container}>

      {/* Component 1 */}
      <div ref={aWrapper}>
        <div ref={a1Ref} className="a1" onClick={splitProblemStatement}>

          <p ref={a1TextRef1} className='a1-title font-inria-serif-bold font-size-64'>The Problem.</p>
          <p ref={a1TextRef2} className='a1-text1 font-instrument-sans font-size-20'>Currently the World Museum holds around 25 million scientific specimens and cultural artifacts from across the world, with ongoing donations adding hundreds of thousands of items each year. These objects are valuable to both researchers and communities, and digitizing them is essential to unlock their full potential. Despite this, only a small portion of the collection has been digitized, with basic information and a single image per item.</p>
          <p ref={a1TextRef3} className='a1-text2 font-instrument-sans font-size-20'>Thus, the museum is looking for a structured initiative to fully digitize this collection, rich with metadata, quality images and digital assets, and have identified the following requirements and topics that would need to be addressed/explored achieve this.
          </p>
        </div>

        <div className='a2' ref={a2Ref}>
          <div ref={a2LeftRef} className='a2-left' onClick={splitProblemStatement}>
            <div ref={a2LeftTextRef}>
              <p className='a2-left-title font-inria-serif-bold font-size-64'>Requirements.</p>
              <p className='a2-left-text1 font-instrument-sans font-size-24'>1. Complete Asset Register</p>
              <p className='a2-left-text1 font-instrument-sans font-size-24'>2. Digital Tracking</p>
              <p className='a2-left-text1 font-instrument-sans font-size-24'>3. Standardised Processes</p>
              <p className='a2-left-text1 font-instrument-sans font-size-24'>4. High Quality Imaging</p>
              <p className='a2-left-text1 font-instrument-sans font-size-24'>5. Contextual Enrichment</p>
              <p className='a2-left-text1 font-instrument-sans font-size-24'>6. Conservation</p>
              <p className='a2-left-text1 font-instrument-sans font-size-24'>7. Accessible Collections</p>
              <p className='a2-left-text1 font-instrument-sans font-size-24'>8. Reliable Technology</p>
            </div>
          </div>
          <div ref={a2RightRef} className='a2-right' onClick={splitProblemStatement}>
            <div ref={a2RightTextRef}>
              <p className='a2-right-title font-inria-serif-bold font-size-64'>Topics.</p>
              <p className='a2-right-text1 font-instrument-sans font-size-24'>1. Image capture (photo, video, 3D).</p>
              <p className='a2-right-text1 font-instrument-sans font-size-24'>2. AI/ML for data analysis.</p>
              <p className='a2-right-text1 font-instrument-sans font-size-24'>3. Sensors for location tracking.</p>
              <p className='a2-right-text1 font-instrument-sans font-size-24'>4. Automation of workflows.</p>
              <p className='a2-right-text1 font-instrument-sans font-size-24'>5. Scaled transcription support.</p>
              <p className='a2-right-text1 font-instrument-sans font-size-24'>6. Ideas for value creation.</p>
            </div>
          </div>
        </div>
      </div>

      <div ref={blackoutBox} className='blackout-box'></div>
      <button ref={blackoutButton} className='breakdown-button font-inria-serif-bold font-size-20' onClick={ShowBreakDown}>SO WHAT DID WE DO?</button>


      <div ref={breakdownDiv} className='breakdown-div'>
        <p ref={breakdownDivText1} className='breakdown-div-title font-inria-serif-bold font-size-64'>We Broke it Down .</p>
        <p ref={breakdownDivText2} className='breakdown-div-text font-instrument-sans font-size-20'>From initial briefing, we carefully broke the provided infomation down to fully understand the project's scope and requirements, creating four objectives that the solutions too will fufil the requirements under the proposed challenges and special considerations .</p>
        <div ref={orangeTag} className='orange-tag'></div>
      </div>


      <button ref={showProblemButton} className='showProblem-button font-inria-serif-bold font-size-20' onClick={ShowBreakDown}>GO BACK?</button>

      <div ref={objectivesWrapper} className='objectives-wrapper'>
        <div className='b'>
          <div className='b-1'>
            <p className='b-1-title font-inria-serif-bold font-size-64'>Objective 1.</p>
            <p className='b-1-subtitle font-instrument-sans font-size-20'>EFFECTIVE DIGITISATION OF COMPLEX AND SENSITIVE ARTIFACTS


            </p>
          </div>

          <div className='b-image'><img src="images\white-gloves.png" alt="white gloves" /></div>

          <div className='b-2'>
            <p className='b-2-title font-inria-serif-bold font-size-32'>What does this mean?</p>
            <div className='b-2-line'></div>
            <p className='b-2-text font-instrument-sans font-size-16'>The current process for digitisation, is either non-existant or time-consuming, labour-intensive and has many issues regarding certain categories of artifacts - some items having unique handling needs and others are preserved in special liquids or a difficult to discern, all of which need to be considered, either with regulated/automated workflows (Topic 4) or new technologies (Topics 1, 2). By addressing this objective we will also fulfil the proposed business requirements, which will be elaborated further on during our solutions.</p>
          </div>

          <div className='b-3'></div>
        </div>


        <div className='c'>
          <div className='c-1'>
            <p className='c-1-title font-inria-serif-bold font-size-64'>Objective 2.</p>
            <p className='c-1-subtitle font-instrument-sans font-size-20'>
              ENABLING ACCURATE AND EFFICIENT TRACKING OF ALL ITEMS</p>
          </div>

          <div className='c-image'><img src="images\paintings.png" alt="white gloves" /></div>

          <div className='c-2'>
            <p className='c-2-title font-inria-serif-bold font-size-32'>What does this mean?</p>
            <div className='c-2-line'></div>
            <p className='c-2-text font-instrument-sans font-size-16'>The World Museum has long struggled to manage and track its 25 million objects due to an incomplete barcoding system and heavy reliance on manual processes. Without a consistent method to monitor item location, handling, or loan status, the risks of loss, damage, or misplacement increase significantly. Alongside digitisation, this issue cannot be overlooked and may need to be addressed through a robust tracking system and workflow (Topic 3). Addressing this objective is essential to meeting the briefing requirements and ensuring the success of the digitisation initiative. More details can be found in the solutions section.</p>
          </div>

          <div className='c-3'></div>
        </div>



        <div className='d'>
          <div className='d-1'>
            <p className='d-1-title font-inria-serif-bold font-size-64'>Objective 3.</p>
            <p className='d-1-subtitle font-instrument-sans font-size-20'>STANDARDISED PROCESSES FOR ARTIFACT MANAGEMENT</p>
          </div>

          <div className='d-image'><img src="images\museum-stock.jpg" alt="white gloves" /></div>

          <div className='d-2'>
            <p className='d-2-title font-inria-serif-bold font-size-32'>What does this mean?</p>
            <div className='d-2-line'></div>
            <p className='d-2-text font-instrument-sans font-size-16'>Currently, the World Museum lacks a clear workflow for digitising and handling artifacts, leading to inefficiencies and inconsistent data. Establishing a standardised process creates a streamlined environment for staff and improves data accuracy. Researchers and scientists will benefit from reliable access to well-managed information, while public users can explore the collection more easily. Addressing this objective may reveal automation opportunities (Topic 4), and the outputs of such a process will further help meet key requirements.</p>
          </div>

          <div className='d-3'></div>
        </div>


        <div className='e'>
          <div className='e-1'>
            <p className='e-1-title font-inria-serif-bold font-size-64'>Objective 4.</p>
            <p className='e-1-subtitle font-instrument-sans font-size-20'>CREATING VALUE THROUGH DIGITISATION AND THE FINAL DIGITAL COLLECTION</p>
          </div>

          <div className='e-image'><img src="images\clore-natural-history-centre.jpg" alt="white gloves" /></div>

          <div className='e-2'>
            <p className='e-2-title font-inria-serif-bold font-size-32'>What does this mean?</p>
            <div className='e-2-line'></div>
            <p className='e-2-text font-instrument-sans font-size-16'>Digitisation offers numerous far-reaching benefits. By digitising the collection, the museum transforms it into a valuable asset in its own right, opening up multiple opportunities for value generation. These include avenues such as research, education, and community engagement. By achieving this objective, multiple avenues for value creation will be explored (Topic 6) a longside the fufilment of the given business requirements.</p>
          </div>

          <div className='e-3'></div>
        </div>
      </div>

      <div className='f'>
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

export default Problempage;
