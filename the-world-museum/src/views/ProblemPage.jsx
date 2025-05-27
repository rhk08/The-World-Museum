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
    <main className="home" style={{height: 6000}} ref={container}>

      {/* Component 1 */}
      <div className="a">
        <div className="a-1">
          <p className="a-1-title font-inria-serif-bold font-size-48">The Problem.</p>

          <p className="a-1-subtext font-instrument-sans font-size-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
          </p>
          

          <p className="a-1-subtitle font-instrument-sans font-size-20">So what did we do? <br></br>
We started by.</p>

        </div>

        <div className='a-image'>
          <img src="images\world-museum-venue.jpg" alt="World Museum Venue" />
        </div>

        <div className='a-2'>
                    <p className="a-2-title font-inria-serif-bold font-size-48">Breaking it Down.</p>
          <p className="a-2-subtext font-instrument-sans font-size-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          </p>
        </div>

        <div className='a-3'></div>

      </div>



      <div className='b'>
        <div className='b-1'>
          <p className='b-1-title font-inria-serif-bold font-size-64'>Objective 1.</p>
          <p className='b-1-subtitle font-instrument-sans font-size-20'>INCREASE HANDLING EFFICIENCY</p>
        </div>

        <div className='b-image'><img src="images\white-gloves.png" alt="white gloves"/></div>

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

        <div className='c-image'><img src="images\paintings.png" alt="white gloves"/></div>

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

        <div className='d-image'><img src="images\museum-stock.jpg" alt="white gloves"/></div>

        <div className='d-2'>
          <p className='d-2-title font-inria-serif-bold font-size-32'>What does this mean?</p>
          <div className='d-2-line'></div>
          <p className='d-2-text font-instrument-sans font-size-16'>Standardising the process for management involves creating a consistent and efficient workflow for key tasks such as imaging, data entry, conservation, and returning objects. By streamlining these processes, we can improve data accuracy, reduce errors, and ensure that all departments follow the same best practices when handling and documenting items.</p>
        </div>

        <div className='d-3'></div>
      </div>

    </main>
  );
};

export default Problempage;
