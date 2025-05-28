import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { useGSAP } from '@gsap/react';
import '../styles/timeline-page.css';

const TimelinePage = () => {
  const container = useRef();

  const scrollToTop = () => {
    const smoother = ScrollSmoother.get();
    if (smoother) {
      smoother.scrollTo(0, true);
    } 
  };

  useGSAP(
    () => {

    },
    { scope: container }
  );

  return (
    <main className="home" style={{ height: 6500 }} ref={container}>
      <p className='tp-timeline-start font-inria-serif-bold font-size-24'>Timeline Start</p>
      <div className='tp-timeline'></div>
      <p className='tp-timeline-end font-inria-serif-bold font-size-24'>Timeline End</p>


      <div className='tp-a'>
        <div className='tp-a-l'>
          <div className='tp-a-l-1'>
            <p className='tp-a-l-1-title font-inria-serif-bold font-size-64'>Phase 1</p>
            <p className='tp-a-l-1-text font-instrument-sans font-size-16'>In the first phase, months 1 - 2, staff will be informed about the upcoming digitization to ensure a smooth transition. Early communication reduces confusion, builds support among staff, and allows time to plan necessary training, improving overall efficiency and minimizing disruptions during implementation.</p>
          </div>

          <div className='tp-a-l-2'>
            <p className='tp-a-l-2-subtitle font-instrument-sans font-size-20'>Additional Info:</p>
            <p className='tp-a-l-2-text font-instrument-sans font-size-16'>Please note that this phase is not strictly limited to the proposed timeframe and can be adjusted as needed to suit the museum's requirements. The same flexibility applies to all subsequent phases mentioned.</p>
          </div>

        </div>
        <div className='tp-a-r'>
          <p className='tp-a-r-title font-inria-serif-bold font-size-48'>Months 1 - 2</p>
          <p className='tp-a-r-text font-instrument-sans font-size-16'>Ensuring Employee Prepardness</p>
          <div className="tp-a-r-image">
            <img src="images/clore-natural-history-centre.jpg" alt="cheeta" />
          </div>
        </div>
      </div>


      <div className='tp-b'>
        <div className='tp-b-l'>
          <p className='tp-b-l-title font-inria-serif-bold font-size-48'>Months 3 - 4</p>
          <p className='tp-b-l-text font-instrument-sans font-size-16'>Installment of New Systems & Employee Training</p>
          <div className="tp-b-l-image">
            <img src="" alt="" />
          </div>

        </div>
        <div className='tp-b-r'>
          <div className='tp-b-r-1'>
            <p className='tp-b-r-1-title font-inria-serif-bold font-size-64'>Phase 2</p>
            <p className='tp-b-r-1-text font-instrument-sans font-size-16'>In the second phase, months 3 - 4, staff will begin training on the new Collection Management System (CMS) and be introduced to the SPECTRUM standard. This ensures they are equipped to use the system effectively and follow best practices in managing collections outlined in objective 3. At the same time, the CMS will be installed, allowing staff to apply their training directly and start adapting to the new workflow.</p>
          </div>

          <div className='tp-b-r-2'>
            <p className='tp-b-r-2-subtitle font-instrument-sans font-size-20'>Additional Info:</p>
            <p className='tp-b-r-2-text font-instrument-sans font-size-16'>Although it may involve additional costs, online courses for the SPECTRUM standard and Collection Management Systems are available for purchase to support staff training.</p>
          </div>

        </div>
      </div>


      <div className='tp-c'>
        <div className='tp-c-l'>
          <div className='tp-c-l-1'>
            <p className='tp-c-l-1-title font-inria-serif-bold font-size-64'>Phase 3</p>
            <p className='tp-c-l-1-text font-instrument-sans font-size-16'>In Phase 3, months 4 - 9, the digitization of objects will begin with a small subset of objects using the technologies discussed in response to objective 1. It is also during this time, objects will be tagged with RFID tags and GPS trackers where necessary, as per the reasons mentioned in response to objective 2. This small-scale, phased approach allows testing new workflows on a manageable level, and existing information from other databases will be transferred or linked to avoid duplication. While items lacking sufficient data will be flagged for later updates, analysis, or expert review to ensure accuracy and consistency in the digital records.</p>



          </div>
          <div className="tp-c-l-image-1">
            <img src="images/clore-natural-history-centre.jpg" alt="cheeta" />
          </div>

          <div className="tp-c-l-image-2">
            <img src="images/clore-natural-history-centre.jpg" alt="cheeta" />
          </div>
          <p className='tp-c-l-title font-inria-serif-bold font-size-48'>Months 10 - 11</p>
          <p className='tp-c-l-text font-instrument-sans font-size-16'>Expanding Public Access</p>



        </div>
        <div className='tp-c-r'>
          <p className='tp-c-r-title font-inria-serif-bold font-size-48'>Months 4 - 10</p>
          <p className='tp-c-r-text font-instrument-sans font-size-16'>Initial Digitization of Objects Begins</p>
          <div className="tp-c-r-image-1">
            <img src="images/clore-natural-history-centre.jpg" alt="cheeta" />
          </div>

          <div className="tp-c-r-image-2">
            <img src="images/clore-natural-history-centre.jpg" alt="cheeta" />
          </div>

          <div className='tp-c-r-2'>
            <p className='tp-c-r-2-title font-inria-serif-bold font-size-64'>Phase 4</p>
            <p className='tp-c-r-2-text font-instrument-sans font-size-16'>In Phase 4, months 11 to 12—or potentially earlier—the current selection of digitized information and Gaussian 3D models will be made accessible to the community through online platforms. This expanded access will help increase public interest and engagement by allowing people to explore the museum's collection beyond physical visits. By sharing these models, a larger number of objects can be viewed remotely, encouraging potential return visits and fostering greater support for the museum's ongoing digital initiatives. Furthermore, this phase serves as the starting point for the broader outreach and engagement plans outlined in Objective 4.</p>
          </div>


          <div className='tp-c-r-3'>
            <p className='tp-c-r-3-subtitle font-instrument-sans font-size-20'>Additional Info:</p>
            <p className='tp-c-r-3-text font-instrument-sans font-size-16'>Although not strictly necessary in this experimental phase, scanning objects from each type would potentially offer visitors more variety and help staff understand the process across categories.</p>
          </div>

        </div>
      </div>



      <div className='tp-d'>
        <div className='tp-d-l'>
          <div className='tp-d-l-1'>
            <p className='tp-d-l-1-title font-inria-serif-bold font-size-64'>Phase 5</p>
            <p className='tp-d-l-1-text font-instrument-sans font-size-16'>Between months 7 and 12, either alongside or following the initial digitization of selected objects, items flagged for additional information will undergo the standardized process outlined in Objective 3 abliet at a slower rate. This will include the creation of high-fidelity 3D models suitable for academic use. These detailed models will support research and can be loaned or shared, opening new opportunities for revenue and broader academic collaboration.</p>
          </div>

          <div className='tp-d-l-2'>
            <p className='tp-d-l-2-subtitle font-instrument-sans font-size-20'>Additional Info:</p>
            <p className='tp-d-l-2-text font-instrument-sans font-size-16'>Following the special considerations, cultural objects will be prioritized, as we prefer to return them. Gaussian Models can still be produced at high quality using the scanned data. </p>
          </div>

        </div>
        <div className='tp-d-r'>
          <p className='tp-d-r-title font-inria-serif-bold font-size-48'>Months 7 - 12</p>
          <p className='tp-d-r-text font-instrument-sans font-size-16'>Advanced Digitization & Research Support</p>
          <div className="tp-d-r-image">
            <img src="images/clore-natural-history-centre.jpg" alt="cheeta" />
          </div>
        </div>
      </div>


      <div className='tp-e'>
        <div className='tp-e-l'>
          <p className='tp-e-l-title font-inria-serif-bold font-size-48'>Months 12 - 14</p>
          <p className='tp-e-l-text font-instrument-sans font-size-16'>Review and Process Improvement</p>
          <div className="tp-a-l-image">
            <img src="" alt="" />
          </div>

        </div>
        <div className='tp-e-r'>
          <div className='tp-e-r-1'>
            <p className='tp-e-r-1-title font-inria-serif-bold font-size-64'>Phase 6</p>
            <p className='tp-e-r-1-text font-instrument-sans font-size-16'>Conduct a full review and evaluation of the digitization process so far, gathering feedback from staff and community users. Identify any gaps or challenges in the workflows, data quality, or user experience. Use these insights to refine digitization methods, update training materials, and improve system integrations to ensure long-term sustainability.
            </p>
          </div>
        </div>
      </div>


      <div className='tp-f'>
        <div className='tp-f-l'>
          <div className='tp-f-l-1'>
            <p className='tp-f-l-1-title font-inria-serif-bold font-size-64'>Phase 7</p>
            <p className='tp-f-l-1-text-1 font-instrument-sans font-size-16'>Continue expanding digitization efforts at a steady pace to cover the remaining collections, applying the refined processes developed in Phase 6. Tagging, scanning, and the creation of both low- and high-fidelity digital assets should continue, with increased integration into interactive exhibits, online platforms, and educational programs to enhance public engagement and accessibility, as outlined in Objective 4.
            </p>
            <p></p>
            <p className='tp-f-l-1-text-2 font-instrument-sans font-size-16'>As this work progresses, the project enters its final phase—shifting from initial implementation to long-term integration and sustainability. With the majority of the collection digitized and accessible, the focus moves to maintaining and evolving these systems. Continued innovation, through virtual tours, augmented reality, and online exhibitions, will ensure the museum remains dynamic and inclusive, allowing its collections to educate and inspire future generations.
            </p>
          </div>

        </div>
        <div className='tp-f-r'>
          <p className='tp-f-r-title font-inria-serif-bold font-size-48'>Months 15+</p>
          <p className='tp-f-r-text font-instrument-sans font-size-16'>Full Collection Digitization & Public Integration</p>
          <div className="tp-f-r-image-1">
            <img src="images/clore-natural-history-centre.jpg" alt="cheeta" />
          </div>

          <div className="tp-f-r-image-2">
            <img src="images/clore-natural-history-centre.jpg" alt="cheeta" />
          </div>
        </div>
      </div>

      <button className="tp-goto-start font-inria-serif-bold font-size-24" onClick={scrollToTop}>
        Back to Top?
      </button>



    </main>
  );
};

export default TimelinePage;
