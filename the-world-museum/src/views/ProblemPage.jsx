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
      tl.to(a1Ref.current, {
        duration: 0.3,
        opacity: 0,
        scaleY: 0.8,
        pointerEvents: "none"
      })
        .to(a2LeftRef.current, {
          duration: 0.8,
          x: "-260px",
          opacity: 1,
          pointerEvents: "auto",
          ease: "power4.out"
        }, "<") // start at same time as previous
        .to(a2RightRef.current, {
          duration: 0.8,
          x: "260px",
          opacity: 1,
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

    const verticalDistance = 260;
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
      },"0")
      
      //grow container
    .to(container.current, {
        duration: 0.6,
        height: 6000,
        ease: "power2.inOut",
      },"0")

      .to(blackoutButton.current, {
        duration: 0.2,
        y: -10,
        opacity: 0,
        pointerEvents: "none",
        ease: "power3.out",
      },"0")

      //move darkness spot
      .to(blackoutBox.current, {
        duration: 0,
        y: -verticalDistance,
      },">")
      .to(aWrapper.current, {
        duration: 0,
        display: "none",
      },">")
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
      .to(objectivesWrapper.current,{
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
      },"0")
          .to(container.current, {
        duration: 0.6,
        height: 1000,
        ease: "power2.inOut",
      },"0")
      //hide button
      .to(showProblemButton.current, {
        duration: 0.2,
        y: 0,
        opacity: 0,
        pointerEvents: "none",
      },"0")
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
      },"0.1")
      //show aWrapper element
      .to(aWrapper.current, {
        duration: 0,
        display: "block",
        pointerEvents: "none",
      },">")
      
      //hide objectives
      .to(objectivesWrapper.current, {
        opacity: 0,
        pointerEvents: "none",
      },">")
      



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
      },"<") 
      .to(aWrapper.current, {
        duration: 0,
        pointerEvents: "auto",
      },"<")

      
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
      <button ref={blackoutButton} className='breakdown-button font-instrument-sans font-size-20' onClick={ShowBreakDown}>SO WHAT DID WE DO?</button>


      <div ref={breakdownDiv} className='breakdown-div'>
        <p ref={breakdownDivText1} className='breakdown-div-title font-inria-serif-bold font-size-64'>We Broke it Down .</p>
<p ref={breakdownDivText2} className='breakdown-div-text font-instrument-sans font-size-20'>To focus our efforts, we've grouped these into four core objectives that should drive the next phase of the museum's digital transformation.</p>

        <div ref={orangeTag} className='orange-tag'></div>
      </div>


      <button ref={showProblemButton} className='showProblem-button font-instrument-sans font-size-20' onClick={ShowBreakDown}>SHOW PROBLEM?</button>
      
      <div ref={objectivesWrapper} className='objectives-wrapper'>
      <div className='b'>
        <div className='b-1'>
          <p className='b-1-title font-inria-serif-bold font-size-64'>Objective 1.</p>
          <p className='b-1-subtitle font-instrument-sans font-size-20'>INCREASE HANDLING EFFICIENCY</p>
        </div>

        <div className='b-image'><img src="images\white-gloves.png" alt="white gloves" /></div>

        <div className='b-2'>
          <p className='b-2-title font-inria-serif-bold font-size-32'>What does this mean?</p>
          <div className='b-2-line'></div>
          <p className='b-2-text font-instrument-sans font-size-16'>This means the goal is to minimise the time spent handling objects, as increased handling time raises the risk of damage or loss. To achieve this, it's important to capture all necessary information in one efficient process. This includes location data, images, metadata, and details about the staff involved in handling the items.</p>
        </div>

        <div className='b-3'></div>
      </div>


      <div className='c'>
        <div className='c-1'>
          <p className='c-1-title font-inria-serif-bold font-size-64'>Objective 2.</p>
          <p className='c-1-subtitle font-instrument-sans font-size-20'>
            ACCURATE TRACKING OF ALL ITEMS TO PREVENT THEFT, LOSS, AND DAMAGE</p>
        </div>

        <div className='c-image'><img src="images\paintings.png" alt="white gloves" /></div>

        <div className='c-2'>
          <p className='c-2-title font-inria-serif-bold font-size-32'>What does this mean?</p>
          <div className='c-2-line'></div>
          <p className='c-2-text font-instrument-sans font-size-16'>Enabling accurate tracking of all items means implementing a digital system that records each object's current location, its location history, and details of who has handled it. This level of traceability helps prevent theft, loss, damage, and unnecessary replacement by ensuring full accountability and visibility at every stage of an item's movement.</p>
        </div>

        <div className='c-3'></div>
      </div>



      <div className='d'>
        <div className='d-1'>
          <p className='d-1-title font-inria-serif-bold font-size-64'>Objective 3.</p>
          <p className='d-1-subtitle font-instrument-sans font-size-20'>STANDARDISE PROCESS FOR MANAGEMENT</p>
        </div>

        <div className='d-image'><img src="images\museum-stock.jpg" alt="white gloves" /></div>

        <div className='d-2'>
          <p className='d-2-title font-inria-serif-bold font-size-32'>What does this mean?</p>
          <div className='d-2-line'></div>
          <p className='d-2-text font-instrument-sans font-size-16'>Standardising the process for management involves creating a consistent and efficient workflow for key tasks such as imaging, data entry, conservation, and returning objects. By streamlining these processes, we can improve data accuracy, reduce errors, and ensure that all departments follow the same best practices.</p>
        </div>

        <div className='d-3'></div>
      </div>


      <div className='e'>
        <div className='e-1'>
          <p className='e-1-title font-inria-serif-bold font-size-64'>Objective 4.</p>
          <p className='e-1-subtitle font-instrument-sans font-size-20'>ENABLING AND PROMOTION OF PUBLIC ACCESS AND ENGAGEMENT</p>
        </div>

        <div className='e-image'><img src="images\clore-natural-history-centre.jpg" alt="white gloves" /></div>

        <div className='e-2'>
          <p className='e-2-title font-inria-serif-bold font-size-32'>What does this mean?</p>
          <div className='e-2-line'></div>
          <p className='e-2-text font-instrument-sans font-size-16'>By enabling public access and engagement digitization will allow digital platforms to share the museum's collection with wider audiences through online catalogues, virtual exhibits, and interactive content, thereby meaeting the request to provide broader access of digital repatriation and knowledge. By meeting this requirement it also allows us to discuss values to provide value mentione in topic 6.  increases public interest, supports academic research, and opens up opportunities for funding, partnerships, and revenue through greater visibility and community involvement.</p>
        </div>

        <div className='e-3'></div>
      </div>


      <div className='f'>

      </div>
      </div>

    </main>
  );
};

export default Problempage;
