import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { useGSAP } from '@gsap/react';
import '../styles/solution-page.css';
import { useLocation } from 'react-router-dom';

const SolutionPage = () => {
  const container = useRef();

  const buttonPanelRef = useRef();

  const objective1Ref = useRef();
  const objective2Ref = useRef();
  const objective3Ref = useRef();
  const objective4Ref = useRef();
  const referencesRef = useRef();


  const location = useLocation();

  const gotoObjective = (objective) => {
    const obj = objective.toLowerCase();
    let destination = null


    if (obj === 'objective1') {
      console.log('You selected Objective 1');
      destination = objective1Ref;
    } else if (obj === 'objective2') {
      console.log('You selected Objective 2');
      destination = objective2Ref;
    } else if (obj === 'objective3') {
      console.log('You selected Objective 3');
      destination = objective3Ref;
    } else if (obj === 'objective4') {
      console.log('You selected Objective 4');
      destination = objective4Ref;
    } else if (obj === 'references') {
      console.log('You selected References');
      destination = referencesRef;
    } else {
      console.log('Invalid objective');
    }

    if (destination) {
      const smoother = ScrollSmoother.get();
      if (smoother) {
        const targetY = destination.current.offsetTop - 60;
        smoother.scrollTo(targetY, true);
      }
    }

  };




  useGSAP(
    () => {
      ScrollTrigger.create({
        trigger: '.sp-button-panel',
        start: 'center+=550px bottom',
        pin: true,
        end: "+=99999"
      });
    },
    { scope: container }
  );



  return (
    <main className="home" style={{ height: "18000px" }} ref={container}>
      <div className='sp-button-panel'>
        {/* <p className='sp-button-panel-title font-instrument-sans font-size-20'>SECTION SELECT</p>
        <div></div> */}

        <button onClick={() => gotoObjective('objective1')} className='font-instrument-sans font-size-18'>OBJECTIVE 1.</button>
        <button onClick={() => gotoObjective('objective2')} className='font-instrument-sans font-size-18'>OBJECTIVE 2.</button>
        <button onClick={() => gotoObjective('objective3')} className='font-instrument-sans font-size-18'>OBJECTIVE 3.</button>
        <button onClick={() => gotoObjective('objective4')} className='font-instrument-sans font-size-18'>OBJECTIVE 4.</button>
        <button onClick={() => gotoObjective('references')} className='font-instrument-sans font-size-18'>REFERENCES.</button>
      </div>



      <div ref={objective1Ref} className='sp-obj1-wrapper'>
        <p className='sp-obj1-title font-inria-serif-bold font-size-40'>Addressing Objective 1.</p>



        <div className='sp-obj1-subtitle1-wrapper'>
          <p className='sp-obj1-subtitle1-title font-instrument-sans font-size-20'>OVERVIEW</p>
          <p className='sp-obj1-subtitle1-section font-instrument-sans font-size-20'>( 01 )</p>
          <div className='sp-obj1-subtitle1-line'></div>
        </div>
        <p className='sp-obj1-text1 font-instrument-sans font-size-20'>
          Digitising museum objects is often slow, inconsistent, and risky—especially for collections as vast as the World Museum's 25 million artifacts. To reduce handling and improve efficiency, our solution is designed to capture all necessary information in a single, streamlined session, ideally in batches. This directly addresses Topic 1.
        </p>

        <div className='sp-spacer1'></div>

        <div className='sp-obj1-subtitle1-wrapper'>
          <p className='sp-obj1-subtitle1-title font-instrument-sans font-size-20'>PROPOSED SOLUTION</p>
          <p className='sp-obj1-subtitle1-section font-instrument-sans font-size-20'>( 02 )</p>
          <div className='sp-obj1-subtitle1-line'></div>
        </div>
        <p className='sp-obj1-text1 font-instrument-sans font-size-20'>
          We propose a mobile, modular digitisation system that captures multiple data types simultaneously, ensuring consistent quality while reducing manual labor and object handling.
        </p>

        <div className='sp-spacer1'></div>

        <div className='sp-obj1-subtitle1-wrapper'>
          <p className='sp-obj1-subtitle1-title font-instrument-sans font-size-20'>KEY TECHNOLOGIES & COMPONENTS</p>
          <p className='sp-obj1-subtitle1-section font-instrument-sans font-size-20'>( 03 )</p>
          <div className='sp-obj1-subtitle1-line'></div>
        </div>

        <div className="sp-element-grid">
          <div className="sp-element1">

            <p className='font-instrument-sans font-size-18'>( 1 / 6 ) <br />HIGH-RESOLUTION CAMERAS</p>
            <div className='sp-element1-line'></div>
            <p className='sp-element1-text font-instrument-sans font-size-18'>
              For 2D imaging and photogrammetric capture (Fraunhofer IGD, 2025)
            </p>
            <div className='sp-element1-spacer'></div>
            <div className='sp-element1-media' >
              <img src="images\clore-natural-history-centre.jpg" alt="white gloves" />
            </div>

          </div>
          <div className="sp-element1">

            <p className='font-instrument-sans font-size-18'>( 2 / 6 ) <br />STRUCTURED LIGHT 3D SCANNING</p>
            <div className='sp-element1-line'></div>
            <p className='sp-element1-text font-instrument-sans font-size-18'>
              Captures precise geometry (Artec 3D, 2024)
            </p>
            <div className='sp-element1-spacer'></div>
            <div className='sp-element1-media'>
              <img src="images\clore-natural-history-centre.jpg" alt="white gloves" />
            </div>
          </div>

          <div className="sp-element1">

            <p className='font-instrument-sans font-size-18'>( 3 / 6 ) <br />360° ROTATING MOUNTS</p>
            <div className='sp-element1-line'></div>
            <p className='sp-element1-text font-instrument-sans font-size-18'>
              Eliminates the need for manual repositioning (Ferguson, 2023)
            </p>
            <div className='sp-element1-spacer'></div>
            <div className='sp-element1-media'>
              <img src="images\clore-natural-history-centre.jpg" alt="white gloves" />
            </div>
          </div>



          <div className="sp-element1">

            <p className='font-instrument-sans font-size-18'>( 4 / 6 ) <br />PROGRAMMABLE LIGHTING SYSTEMS</p>
            <div className='sp-element1-line'></div>
            <p className='sp-element1-text font-instrument-sans font-size-18'>
              Provides optimal lighting for different surfaces and materials (Richardson, 2024)
            </p>
            <div className='sp-element1-spacer'></div>
            <div className='sp-element1-media' style={{ height: '174px' }}>
              <img src="images\clore-natural-history-centre.jpg" alt="white gloves" />
            </div>
          </div>



          <div className="sp-element1">

            <p className='font-instrument-sans font-size-18'>( 5 / 6 ) <br />AI POWERED OCR & SIDE CAMERAS</p>
            <div className='sp-element1-line'></div>
            <p className='sp-element1-text font-instrument-sans font-size-18'>
              Reads labels and inscriptions automatically (Terentia, 2024)
            </p>
            <div className='sp-element1-spacer'></div>
            <div className='sp-element1-media'>
              <img src="images\clore-natural-history-centre.jpg" alt="white gloves" />
            </div>
          </div>


          <div className="sp-element1">

            <p className='font-instrument-sans font-size-18'>( 6 / 6 ) <br />RFID SCANNERS</p>
            <div className='sp-element1-line'></div>
            <p className='sp-element1-text font-instrument-sans font-size-18'>
              Automatically link physical artifacts to digital metadata (Pixel Tech, 2025)
            </p>
            <div className='sp-element1-spacer'></div>
            <div className='sp-element1-media'>
              <img src="images\clore-natural-history-centre.jpg" alt="white gloves" />
            </div>
          </div>

        </div>


        <div style={{ height: 80 }}></div>


        <div className='sp-obj1-subtitle1-wrapper'>
          <p className='sp-obj1-subtitle1-title font-instrument-sans font-size-20'>EXPECTED OUTPUTS</p>
          <p className='sp-obj1-subtitle1-section font-instrument-sans font-size-20'>( 04 )</p>
          <div className='sp-obj1-subtitle1-line'></div>
        </div>

        <p className='sp-obj1-text1 font-instrument-sans font-size-20'>
          The system produces high-fidelity 3D models for scholarly research, digital preservation, and collaboration. For faster public access and lightweight online viewing, it also supports low-fidelity previews using Gaussian splatting (Varjo, 2024).
        </p>
        <div style={{ height: 20 }}></div>
        <div className='sp-video-wrapper'>
          <video
            src="../videos/m2-res_1080p.mp4"
            autoPlay
            muted
            loop
            playsInline
          />
        </div>

        <div style={{ height: 20 }}></div>


        <div className='sp-obj1-subtitle1-wrapper'>
          <p className='sp-obj1-subtitle1-title font-instrument-sans font-size-20'>DEPLOYMENT BENEFITS</p>
          <p className='sp-obj1-subtitle1-section font-instrument-sans font-size-20'>( 05 )</p>
          <div className='sp-obj1-subtitle1-line'></div>
        </div>

        <p className='sp-obj1-text1 font-instrument-sans font-size-20'>
          The solution is fully mobile and modular, making it ideal for on-site digitisation in remote or culturally sensitive locations. It also features local data storage to enhance resilience and privacy during operations.
        </p>

        <div style={{ height: 100 }}></div>


        <div className='sp-obj1-subtitle1-wrapper'>
          <p className='sp-obj1-subtitle1-title font-instrument-sans font-size-20'>OPERATIONAL CONSIDERATIONS & COST ESTIMATES</p>
          <p className='sp-obj1-subtitle1-section font-instrument-sans font-size-20'>( 06 )</p>
          <div className='sp-obj1-subtitle1-line'></div>
        </div>

        <div className='sp-obj1-list'>
          <div className='sp-obj1-list-element'>
            <p className='font-instrument-sans font-size-20'>
              -
            </p>
            <div className='sp-obj1-list-element-spacer'></div>
            <p className='font-instrument-sans font-size-20'>
              Estimated Setup Cost: $50,000 to $360,000 depending on configuration.
            </p>
          </div>

          <div style={{ height: 20 }}></div>

          <div className='sp-obj1-list-element'>
            <p className='font-instrument-sans font-size-20'>
              -
            </p>
            <div className='sp-obj1-list-element-spacer'></div>
            <p className='font-instrument-sans font-size-20'>
              Energy Efficiency:
              While the system can be energy-intensive, this can be mitigated through off-peak operation and enabling low-power idle modes, supporting more sustainable usage.
            </p>
          </div>
        </div>
      </div>

      <div ref={objective2Ref} className='sp-obj2-wrapper'>
        <p className='sp-obj1-title font-inria-serif-bold font-size-40'>Addressing Objective 2.</p>

        <div className='sp-obj1-subtitle1-wrapper'>
          <p className='sp-obj1-subtitle1-title font-instrument-sans font-size-20'>OVERVIEW & PROPOSED SOLUTION</p>
          <p className='sp-obj1-subtitle1-section font-instrument-sans font-size-20'>( 01 )</p>
          <div className='sp-obj1-subtitle1-line'></div>
        </div>
        <p className='sp-obj1-text1 font-instrument-sans font-size-20'>
          As a result of addressing this objective Business Requirements 1, 2, 6, and 8 have been met. Nonetheless, we propose an integrated tracking and management solution using RFID and GPS technologies, supported by a robust Collection Management System (CMS). This approach modernizes inventory tracking, enhances security, and supports both physical and digital asset management.
        </p>

        <div className='sp-spacer1'></div>

        <div className='sp-obj1-subtitle1-wrapper'>
          <p className='sp-obj1-subtitle1-title font-instrument-sans font-size-20'>SMART TRACKING WITH RFID - Reliable, Passive Asset Monitoring</p>
          <p className='sp-obj1-subtitle1-section font-instrument-sans font-size-20'>( 02 )</p>
          <div className='sp-obj1-subtitle1-line'></div>
        </div>
        <p className='sp-obj1-text1 font-instrument-sans font-size-20'>
          Touching on the recommended topics of exploration 3 and 4, we suggest implementing RFID (Radio Frequency Identification) technology—a widely used, cost-effective solution adopted by major institutions such as the Metropolitan Museum of Art and the National Museum of China (Moore, 2020).
        </p>
        <div style={{ height: 20 }}></div>
        <div className='sp-obj1-list'>
          <div className='sp-obj1-list-element'>
            <p className='font-instrument-sans font-size-20'>
              -
            </p>
            <div className='sp-obj1-list-element-spacer'></div>
            <p className='font-instrument-sans font-size-20'>
              Passive RFID tags are battery-free and enable secure, contactless tracking through fixed or handheld scanners (Comparesoft, n.d.).
            </p>
          </div>

          <div style={{ height: 20 }}></div>

          <div className='sp-obj1-list-element'>
            <p className='font-instrument-sans font-size-20'>
              -
            </p>
            <div className='sp-obj1-list-element-spacer'></div>
            <p className='font-instrument-sans font-size-20'>
              These tags are durable and can withstand extreme environments, including cryogenic storage at -196°C (RFID Journal, 2010).
            </p>
          </div>

          <div style={{ height: 20 }}></div>

          <div className='sp-obj1-list-element'>
            <p className='font-instrument-sans font-size-20'>
              -
            </p>
            <div className='sp-obj1-list-element-spacer'></div>
            <p className='font-instrument-sans font-size-20'>
              When integrated with a collection management system, RFID reduces handling time and improves efficiency—inventory checks are up to ten times faster (Assetpulse, 2023).
            </p>
          </div>

        </div>
        <div style={{ height: 20 }}></div>
        <div className='sp-video-wrapper'>
          <video
            src="../videos/m2-res_1080p.mp4"
            autoPlay
            muted
            loop
            playsInline
          />
        </div>



        <div style={{ height: 80 }}></div>


        <div className='sp-obj1-subtitle1-wrapper'>
          <p className='sp-obj1-subtitle1-title font-instrument-sans font-size-20'>GPS TRACKING FOR ARTIFACTS - Real-Time, Global Visibility</p>
          <p className='sp-obj1-subtitle1-section font-instrument-sans font-size-20'>( 03 )</p>
          <div className='sp-obj1-subtitle1-line'></div>
        </div>
        <p className='sp-obj1-text1 font-instrument-sans font-size-20'>
          For loaned or mobile artifacts, GPS tracking provides satellite-based real-time monitoring—even in low-signal areas (Camcode, 2025). This approach ensures both security and sustainability for valuable assets.
        </p>
        <div style={{ height: 20 }}></div>
        <div className='sp-obj1-list'>
          <div className='sp-obj1-list-element'>
            <div className='sp-obj2-dot-points'>
              <div className='sp-obj1-list-element'>
                <p className='font-instrument-sans font-size-20'>
                  -
                </p>
                <div className='sp-obj1-list-element-spacer'></div>
                <p className='font-instrument-sans font-size-20'>
                  Institutions like The Louvre employ GPS devices to ensure continuous monitoring (Armoli, 2024).
                </p>
              </div>

              <div style={{ height: 20 }}></div>

              <div className='sp-obj1-list-element'>
                <p className='font-instrument-sans font-size-20'>
                  -
                </p>
                <div className='sp-obj1-list-element-spacer'></div>
                <p className='font-instrument-sans font-size-20'>
                  Modern GPS trackers are compact, rechargeable, and suitable for long-term use (Brickhouse Security, 2025; mytracking, 2020).
                </p>
              </div>

              <div style={{ height: 20 }}></div>

              <div className='sp-obj1-list-element'>
                <p className='font-instrument-sans font-size-20'>
                  -
                </p>
                <div className='sp-obj1-list-element-spacer'></div>
                <p className='font-instrument-sans font-size-20'>
                  Offers sustainable, discreet monitoring of valuable cultural items
                </p>
              </div>
            </div>
            <div style={{ width: 20 }}></div>
            <div className='sp-video-wrapper' style={{ height: 400, width: 500 }}>
              <video
                src="../videos/m2-res_1080p.mp4"
                autoPlay
                muted
                loop
                playsInline
              />
            </div>


          </div>
        </div>

        <div style={{ height: 80 }}></div>

        <div className='sp-obj1-subtitle1-wrapper'>
          <p className='sp-obj1-subtitle1-title font-instrument-sans font-size-20'>INTEGRATED COLLECTION & DIGITAL ASSET MANAGEMENT</p>
          <p className='sp-obj1-subtitle1-section font-instrument-sans font-size-20'>( 04 )</p>
          <div className='sp-obj1-subtitle1-line'></div>
        </div>

        <div className="sp-element-grid1">
          <div className="sp-element1">

            <p className='font-instrument-sans font-size-18'>( 1 / 2 ) <br />Centralised, Scalable CMS with Digital Preservation</p>
            <div className='sp-element1-line'></div>
            <p className='sp-element1-text font-instrument-sans font-size-18'>
              We recommend TMS Collections by Gallery Systems, a secure, cloud-based CMS used by over 800 institutions worldwide, including the MET (Hanselman, 2018).
            </p>
            <div style={{ height: 20 }}></div>
            <div className='sp-obj1-list'>
              <div className='sp-obj1-list-element'>
                <p className='font-instrument-sans font-size-18'>
                  -
                </p>
                <div className='sp-obj1-list-element-spacer'></div>
                <p className='font-instrument-sans font-size-18'>
                  TMS enables seamless RFID integration, mobile data access, and full object lifecycle management, including data, movement, rights, loans, and complex item records (Gallery Systems, 2021).
                </p>
              </div>

              <div style={{ height: 10 }}></div>

              <div className='sp-obj1-list-element'>
                <p className='font-instrument-sans font-size-18'>
                  -
                </p>
                <div className='sp-obj1-list-element-spacer'></div>
                <p className='font-instrument-sans font-size-18'>
                  It handles intricate artifacts such as assemblages and supports advanced item status tracking (Government of Canada, 2020).
                </p>
              </div>

              <div style={{ height: 10 }}></div>

              <div className='sp-obj1-list-element'>
                <p className='font-instrument-sans font-size-18'>
                  -
                </p>
                <div className='sp-obj1-list-element-spacer'></div>
                <p className='font-instrument-sans font-size-18'>
                  Staff can become proficient in the system within 3 to 5 days via structured training (Gallery Systems, 2025b).
                </p>
              </div>

            </div>
            <div style={{ height: 20 }}></div>

            <div className='sp-element1-spacer'></div>
            <div className='sp-element1-media' >
              <img src="images\clore-natural-history-centre.jpg" alt="white gloves" />
            </div>

          </div>
          <div className="sp-element1">

            <p className='font-instrument-sans font-size-18'>( 2 / 2 ) <br />Digital Asset Management (DAM) Module</p>
            <div className='sp-element1-line'></div>
            <p className='sp-element1-text font-instrument-sans font-size-18'>
              To support digital preservation and streamline workflows, we recommend adding the TMS Digital Asset Management (DAM) module.
            </p>
            <div style={{ height: 20 }}></div>
            <div className='sp-obj1-list'>
              <div className='sp-obj1-list-element'>
                <p className='font-instrument-sans font-size-18'>
                  -
                </p>
                <div className='sp-obj1-list-element-spacer'></div>
                <p className='font-instrument-sans font-size-18'>
                  This tool allows both physical and digital assets to be managed in a single platform, reducing integration costs (Gallery Systems, 2025a).
                </p>
              </div>

              <div style={{ height: 10 }}></div>

              <div className='sp-obj1-list-element'>
                <p className='font-instrument-sans font-size-18'>
                  -
                </p>
                <div className='sp-obj1-list-element-spacer'></div>
                <p className='font-instrument-sans font-size-18'>
                  It ensures secure storage, metadata tagging, rights management, and controlled cross-departmental access (Gallery Systems, 2023a).
                </p>
              </div>

              <div style={{ height: 10 }}></div>

              <div className='sp-obj1-list-element'>
                <p className='font-instrument-sans font-size-18'>
                  -
                </p>
                <div className='sp-obj1-list-element-spacer'></div>
                <p className='font-instrument-sans font-size-18'>
                  Reduces complexity and costs by eliminating separate systems
                </p>
              </div>

            </div>
            <div style={{ height: 20 }}></div>

            <div className='sp-element1-spacer'></div>
            <div className='sp-element1-media' >
              <img src="images\clore-natural-history-centre.jpg" alt="white gloves" />
            </div>

          </div>
        </div>


        <div style={{ height: 80 }}></div>
        <div className='sp-obj1-subtitle1-wrapper'>
          <p className='sp-obj1-subtitle1-title font-instrument-sans font-size-20'>IMPLEMENTATION BENEFITS - Secure, Scalable, and Staff-Ready</p>
          <p className='sp-obj1-subtitle1-section font-instrument-sans font-size-20'>( 05 )</p>
          <div className='sp-obj1-subtitle1-line'></div>
        </div>
        <p className='sp-obj1-text1 font-instrument-sans font-size-20'>
          By integrating RFID, GPS, and TMS (with DAM), the World Museum will benefit from:
        </p>
        <div style={{ height: 15 }}></div>
        <div className='sp-obj1-list'>
          <div className='sp-obj1-list-element'>
            <p className='font-instrument-sans font-size-20'>
              -
            </p>
            <div className='sp-obj1-list-element-spacer'></div>
            <p className='font-instrument-sans font-size-20'>
              Enhanced tracking of large and diverse collections
            </p>
          </div>

          <div style={{ height: 5 }}></div>

          <div className='sp-obj1-list-element'>
            <p className='font-instrument-sans font-size-20'>
              -
            </p>
            <div className='sp-obj1-list-element-spacer'></div>
            <p className='font-instrument-sans font-size-20'>
              Significant improvements in auditing and inventory management
            </p>
          </div>

          <div style={{ height: 5 }}></div>

          <div className='sp-obj1-list-element'>
            <p className='font-instrument-sans font-size-20'>
              -
            </p>
            <div className='sp-obj1-list-element-spacer'></div>
            <p className='font-instrument-sans font-size-20'>
              A future-proof, cloud-based system supporting public access and long-term digitisation goals
            </p>
          </div>

          <div style={{ height: 5 }}></div>

          <div className='sp-obj1-list-element'>
            <p className='font-instrument-sans font-size-20'>
              -
            </p>
            <div className='sp-obj1-list-element-spacer'></div>
            <p className='font-instrument-sans font-size-20'>
              Fulfilment of Business Requirements 1, 2, 6, and 8
            </p>
          </div>

        </div>
        <div style={{ height: 40 }}></div>

        <div className='sp-obj1-subtitle1-wrapper'>
          <p className='sp-obj1-subtitle1-title font-instrument-sans font-size-20'>COST SUMMARY</p>
          <p className='sp-obj1-subtitle1-section font-instrument-sans font-size-20'>( 06 )</p>
          <div className='sp-obj1-subtitle1-line'></div>
        </div>
        <div className="sp-cost-summary font-instrument-sans">
          {/* RFID System */}
          <div className="sp-cost-section">
            <h3 className="sp-cost-section-title font-size-20">RFID System</h3>
            <table className="sp-cost-table font-size-18">
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Cost (USD)</th>
                  <th>Reference</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Passive RFID tags</td><td>$0.05 – $0.50 each</td><td>(Martial A, 2023)</td></tr>
                <tr><td>RFID handheld scanners</td><td>$500 – $4,500</td><td>(Martial A, 2023)</td></tr>
                <tr><td>Fixed RFID readers</td><td>$1,000 – $8,000</td><td>(Martial A, 2023)</td></tr>
                <tr><td>RFID installation (infrastructure)</td><td>$6,000 – $32,000</td><td>(Martial A, 2023)</td></tr>
              </tbody>
            </table>
          </div>

          {/* GPS Tracking */}
          <div className="sp-cost-section">
            <h3 className="sp-cost-section-title font-size-20">GPS Tracking</h3>
            <table className="sp-cost-table font-size-18">
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Cost (USD)</th>
                  <th>Reference</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>GPS trackers (per unit)</td><td>$20 – $300</td><td>(Atrak, 2025)</td></tr>
                <tr><td>GPS tracking service/system</td><td>$10 – $40</td><td>(Atrak, 2025)</td></tr>
              </tbody>
            </table>
          </div>

          {/* Collection Management System (TMS) */}
          <div className="sp-cost-section">
            <h3 className="sp-cost-section-title font-size-20">Collection Management System (TMS)</h3>
            <table className="sp-cost-table font-size-18">
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Cost (USD)</th>
                  <th>Reference</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>CMS setup and staff training</td><td>$7,900</td><td>(Gallery Systems, 2018)</td></tr>
                <tr><td>CMS licensing</td><td>Quote required (user-based or enterprise)</td><td>(Government of Canada, 2020)</td></tr>
              </tbody>
            </table>
          </div>

          {/* Digital Asset Management (TMS DAM) */}
          <div className="sp-cost-section">
            <h3 className="sp-cost-section-title font-size-20">Digital Asset Management (TMS DAM)</h3>
            <table className="sp-cost-table font-size-18">
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Cost (USD)</th>
                  <th>Reference</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>DAM module licensing</td><td>Quote required</td><td>(Gallery Systems, 2023b)</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div ref={objective3Ref} className='sp-obj3-wrapper'>
        <p className='sp-obj1-title font-inria-serif-bold font-size-40'>Addressing Objective 3.</p>

        <div className='sp-obj1-subtitle1-wrapper'>
          <p className='sp-obj1-subtitle1-title font-instrument-sans font-size-20'>OVERVIEW</p>
          <p className='sp-obj1-subtitle1-section font-instrument-sans font-size-20'>( 01 )</p>
          <div className='sp-obj1-subtitle1-line'></div>
        </div>
        <p className='sp-obj1-text1 font-instrument-sans font-size-20'>
          The third objective focuses on data accuracy and efficient workflows. It emphasizes creating a scalable system that minimizes object handling while capturing accurate, high-volume data. This contributes directly to the long-term goal of digitalising the museum's twenty-five million objects.
        </p>

        <div style={{ height: 80 }}></div>

        <div className='sp-obj1-subtitle1-wrapper'>
          <p className='sp-obj1-subtitle1-title font-instrument-sans font-size-20'>THREE-TIER DIGITALIZATION FRAMEWORK</p>
          <p className='sp-obj1-subtitle1-section font-instrument-sans font-size-20'>( 02 )</p>
          <div className='sp-obj1-subtitle1-line'></div>
        </div>
        <p className='sp-obj1-text1 font-instrument-sans font-size-20'>
          A three-tiered digitalisation workflow is proposed to support this large-scale effort, designed to ensure scalability for future expansion, operational resilience, and flexibility. The workflows are modular and interconnected, allowing for parallel execution while maintaining the ability to function independently as needed, all within a cohesive and integrated system.

          <br />
          <br />
          They are as follows...
        </p>

        <div style={{ height: 30 }}></div>

        <div className="sp-element-grid2">
          <div className="sp-element1">

            <p className='font-instrument-sans font-size-20'>( 1 / 3 ) <br />DIGITALISATION WORKFLOW</p>
            <div className='sp-element1-line'></div>
            <p className='sp-element1-text font-instrument-sans font-size-18'>
              This workflow forms the foundation of the museum’s digital transformation by capturing detailed digital representations of objects efficiently and accurately.
            </p>
            <div style={{ height: 20 }}></div>
            <div className='sp-obj1-list'>
              <div className='sp-obj1-list-element'>
                <p className='font-instrument-sans font-size-18'>
                  -
                </p>
                <div className='sp-obj1-list-element-spacer'></div>
                <p className='font-instrument-sans font-size-18'>
                  High-Resolution Imaging and 3D Scanning to preserve intricate object details and enable virtual access (Richardson, 2024).
                </p>
              </div>

              <div style={{ height: 10 }}></div>

              <div className='sp-obj1-list-element'>
                <p className='font-instrument-sans font-size-18'>
                  -
                </p>
                <div className='sp-obj1-list-element-spacer'></div>
                <p className='font-instrument-sans font-size-18'>
                  Automated Data Ingestion through AI-driven OCR, enabling rapid and accurate entry of object IDs, classifications, and preliminary metadata into the CMS, reducing manual errors and workload (Dagenais, n.d.).
                </p>
              </div>

              <div style={{ height: 10 }}></div>

              <div className='sp-obj1-list-element'>
                <p className='font-instrument-sans font-size-18'>
                  -
                </p>
                <div className='sp-obj1-list-element-spacer'></div>
                <p className='font-instrument-sans font-size-18'>
                  Staff can become proficient in the system within 3 to 5 days via structured training (Gallery Systems, 2025b).
                </p>
              </div>

            </div>
            <div style={{ height: 20 }}></div>

            <div className='sp-element1-spacer'></div>
            <div className='sp-element1-media' >
              <img src="images\clore-natural-history-centre.jpg" alt="white gloves" />
            </div>

          </div>




          <div className="sp-element1">

            <p className='font-instrument-sans font-size-20'>( 2 / 3 ) <br />POST-DIGITALISATION WORKFLOW</p>
            <div className='sp-element1-line'></div>
            <p className='sp-element1-text font-instrument-sans font-size-18'>
              Enhancing and enriching the raw digital data, this workflow improves the accuracy, completeness, and accessibility of digital records:
            </p>
            <div style={{ height: 20 }}></div>
            <div className='sp-obj1-list'>
              <div className='sp-obj1-list-element'>
                <p className='font-instrument-sans font-size-18'>
                  -
                </p>
                <div className='sp-obj1-list-element-spacer'></div>
                <p className='font-instrument-sans font-size-18'>
                  Data Linking associates objects with related collection entries, donor information, and external databases, adding valuable context for researchers (Smithsonian Institution, 2023).
                </p>
              </div>

              <div style={{ height: 10 }}></div>

              <div className='sp-obj1-list-element'>
                <p className='font-instrument-sans font-size-18'>
                  -
                </p>
                <div className='sp-obj1-list-element-spacer'></div>
                <p className='font-instrument-sans font-size-18'>
                  Robust Security and Version Control mechanisms protect the integrity of the digital records by managing access rights, backups, and audit trails (Smithsonian Institution, 2023).
                </p>
              </div>

              <div style={{ height: 10 }}></div>

              <div className='sp-obj1-list-element'>
                <p className='font-instrument-sans font-size-18'>
                  -
                </p>
                <div className='sp-obj1-list-element-spacer'></div>
                <p className='font-instrument-sans font-size-18'>
                  Public Readiness Tagging flags digital records when metadata meets quality standards for public release, ensuring transparency and accessibility (National Archives and Records Administration, 2023).
                </p>
              </div>

            </div>
            <div style={{ height: 20 }}></div>

            <div className='sp-element1-spacer'></div>
            <div className='sp-element1-media' >
              <img src="images\clore-natural-history-centre.jpg" alt="white gloves" />
            </div>

          </div>




          <div className="sp-element1">

            <p className='font-instrument-sans font-size-20'>( 3 / 3 ) <br />OPERATIONAL HANDLING WORKFLOW</p>
            <div className='sp-element1-line'></div>
            <p className='sp-element1-text font-instrument-sans font-size-18'>
              This ongoing workflow manages how staff interact with physical artifacts, ensuring accountability and seamless integration with the digital system:
            </p>
            <div style={{ height: 20 }}></div>
            <div className='sp-obj1-list'>
              <div className='sp-obj1-list-element'>
                <p className='font-instrument-sans font-size-18'>
                  -
                </p>
                <div className='sp-obj1-list-element-spacer'></div>
                <p className='font-instrument-sans font-size-18'>
                  Comprehensive Access and Handling Logs require staff identification through tags or biometrics, with timestamps and intent recorded, some automatically, to ensure traceability (Moore, 2020).
                </p>
              </div>

              <div style={{ height: 10 }}></div>

              <div className='sp-obj1-list-element'>
                <p className='font-instrument-sans font-size-18'>
                  -
                </p>
                <div className='sp-obj1-list-element-spacer'></div>
                <p className='font-instrument-sans font-size-18'>
                  Real-Time Location Tracking via RFID technology updates object whereabouts across storage, labs, and displays, enhancing security and operational oversight (Pixel Tech, 2025).
                </p>
              </div>

              <div style={{ height: 10 }}></div>

              <div className='sp-obj1-list-element'>
                <p className='font-instrument-sans font-size-18'>
                  -
                </p>
                <div className='sp-obj1-list-element-spacer'></div>
                <p className='font-instrument-sans font-size-18'>
                  Condition Reporting and Maintenance Scheduling capture observations of damage or degradation, and schedule inspections and environmental controls to preserve object integrity.
                </p>
              </div>

            </div>
            <div style={{ height: 20 }}></div>

            <div className='sp-element1-spacer'></div>
            <div className='sp-element1-media' >
              <img src="images\clore-natural-history-centre.jpg" alt="white gloves" />
            </div>

          </div>


        </div>
        <div style={{ height: 60 }}></div>

        <div className='sp-obj1-subtitle1-wrapper'>
          <p className='sp-obj1-subtitle1-title font-instrument-sans font-size-20'>BENEFITS</p>
          <p className='sp-obj1-subtitle1-section font-instrument-sans font-size-20'>( 03 )</p>
          <div className='sp-obj1-subtitle1-line'></div>
        </div>


        <p className='sp-obj1-text1 font-instrument-sans font-size-20'>
          The first two workflows work together to create rich, accurate digital records, while the third workflow leverages the CMS enriched by these processes to maintain seamless continuity between physical artefacts and their digital representations. This integrated approach ensures that both the physical and digital aspects of the collection are consistently managed and linked, enhancing overall operational efficiency.
          with its invaluable cultural heritage.
          <br />
          <br />

          Beyond operational benefits, this system significantly improves data accessibility and accuracy, making high-quality digital collections available to researchers and the public worldwide. By broadening access and supporting global collaboration, the museum empowers academic research and fosters greater public engagement
        </p>



        <div style={{ height: 80 }}></div>

        <div className='sp-obj1-subtitle1-wrapper'>
          <p className='sp-obj1-subtitle1-title font-instrument-sans font-size-20'>AI, MACHINE LEARNING, AND STANDARDISED PROCESSING</p>
          <p className='sp-obj1-subtitle1-section font-instrument-sans font-size-20'>( 03 )</p>
          <div className='sp-obj1-subtitle1-line'></div>
        </div>

        <div className='sp-obj1-list'>
          <div className='sp-obj1-list-element'>

            <p className='font-instrument-sans font-size-20 ' style={{ width: 700, textAlign: 'justify' }}>
              To enhance data accuracy, it also crucial to identify the specific types of data needed, thus we have also propose leveraging AI and machine learning to increase efficiency in data collection and classification (Bishop, 2025). With 25 million objects to digitise, manual classification would be prohibitively slow and resource-intensive (Niederhelman, 2025).
            </p>
            <div className='sp-obj1-list-element-spacer' style={{ width: 30 }}></div>
            <div className='sp-video-wrapper' style={{ height: 200, width: 400 }}>
              <video
                src="../videos/m2-res_1080p.mp4"
                autoPlay
                muted
                loop
                playsInline
              />
            </div>
          </div>

          <div style={{ height: 20 }}></div>

          <div className='sp-obj1-list-element'>
            <p className='font-instrument-sans font-size-20' style={{ width: 800, textAlign: 'justify' }}>
              Additionally, the Museum of Comparative Zoology has also shown interest in AI technologies to automate label reading and specimen classification, aiming to significantly reduce processing time (Niederhelman, 2025). Although not yet implemented, AI presents a promising future solution, balanced with environmental impact considerations (Niederhelman, 2025).
            </p>
          </div>

          <div style={{ height: 60 }}></div>

          <div className='sp-obj1-list-element'>
            <div className='sp-video-wrapper' style={{ height: 300, width: 500 }}>
              <video
                src="../videos/m2-res_1080p.mp4"
                autoPlay
                muted
                loop
                playsInline
              />
            </div>
            <div className='sp-obj1-list-element-spacer' style={{ width: 40 }}></div>
            <p className='font-instrument-sans font-size-20' style={{ width: 700, textAlign: 'justify' }}>
              Research involving focus groups from multiple museum disciplines also suggests that adopting standardised data collection processes greatly improves data accessibility and interoperability across institutions (Bishop et al., 2023). Tools like iSamples, funded by the National Science Foundation, provide standardized frameworks for metadata collection across various research fields, streamlining data integration (Bishop, 2025; iSamples, n.d.).
            </p>
            <div className='sp-obj1-list-element-spacer'></div>

          </div>
          <div style={{ height: 20 }}></div>
          <div className='sp-obj1-list-element'>
            <p className='font-instrument-sans font-size-20' style={{ width: 800, textAlign: 'justify' }}>
              In biological collections, software such as Specify employs these standards to accelerate metadata gathering while ensuring data quality. These tools not only speed up workflows but also facilitate broader use of the data for research and educational purposes (Bishop, 2025).
            </p>
          </div>

        </div>



        <div style={{ height: 80 }}></div>

        <div className='sp-obj1-subtitle1-wrapper'>
          <p className='sp-obj1-subtitle1-title font-instrument-sans font-size-20'>SPECTRUM FOR COLLECTION MANAGEMENT</p>
          <p className='sp-obj1-subtitle1-section font-instrument-sans font-size-20'>( 03 )</p>
          <div className='sp-obj1-subtitle1-line'></div>
        </div>
        <p className='sp-obj1-text1 font-instrument-sans font-size-20'>
          We also propose the use of SPECTRUM, a globally recognized framework designed to standardize and streamline museum collection management, ensuring consistent practices across institutions worldwide (Spectrum, n.d.). Below the key benefits of said framework.
        </p>

        <div style={{ height: 30 }}></div>
        <div className='sp-obj1-list'>
          <div className='sp-obj1-list-element'>
            <p className='font-instrument-sans font-size-20'>
              -
            </p>
            <div className='sp-obj1-list-element-spacer'></div>
            <p className='font-instrument-sans font-size-20'>
              Training Available: Online certification course at approximately $1,364 AUD to quickly upskill staff (Spectrum, n.d.).
            </p>
          </div>

          <div style={{ height: 20 }}></div>

          <div className='sp-obj1-list-element'>
            <p className='font-instrument-sans font-size-20'>
              -
            </p>
            <div className='sp-obj1-list-element-spacer'></div>
            <p className='font-instrument-sans font-size-20'>
              Core Procedures: Covers cataloguing, managing loans, location tracking, and inventory to ensure operational accuracy (Spectrum, n.d.).
            </p>
          </div>

          <div style={{ height: 20 }}></div>

          <div className='sp-obj1-list-element'>
            <p className='font-instrument-sans font-size-20'>
              -
            </p>
            <div className='sp-obj1-list-element-spacer'></div>
            <p className='font-instrument-sans font-size-20'>
              UK Accreditation: Nine core procedures align with UK museum standards, supporting compliance and credibility (Spectrum, n.d.).
            </p>
          </div>

          <div style={{ height: 20 }}></div>

          <div className='sp-obj1-list-element'>
            <p className='font-instrument-sans font-size-20'>
              -
            </p>
            <div className='sp-obj1-list-element-spacer'></div>
            <p className='font-instrument-sans font-size-20'>
              Extended Coverage: Additional procedures include audits, emergency planning, condition monitoring, and rights management (Spectrum, n.d.).
            </p>
          </div>

          <div style={{ height: 20 }}></div>

          <div className='sp-obj1-list-element'>
            <p className='font-instrument-sans font-size-20'>
              -
            </p>
            <div className='sp-obj1-list-element-spacer'></div>
            <p className='font-instrument-sans font-size-20'>
              Flexible Use: Compatible with both paper-based and digital systems, allowing easy integration regardless of existing infrastructure (Spectrum, n.d.).
            </p>
          </div>

        </div>




      </div>

      <div ref={objective4Ref} className='sp-obj4-wrapper'>
        <p className='sp-obj1-title font-inria-serif-bold font-size-40'>Addressing Objective 4.</p>



        <div className='sp-obj1-subtitle1-wrapper'>
          <p className='sp-obj1-subtitle1-title font-instrument-sans font-size-20'>OVERVIEW</p>
          <p className='sp-obj1-subtitle1-section font-instrument-sans font-size-20'>( 01 )</p>
          <div className='sp-obj1-subtitle1-line'></div>
        </div>
        <p className='sp-obj1-text1 font-instrument-sans font-size-20'>
          Objective 4 highlights how digitisation creates value both throughout the process and in the final digital collection. By doing so, it supports digital repatriation and knowledge sharing, aligning with Topic 6 and Requirement 7 to improve access and foster deeper engagement with broader communities.
        </p>

        <div className='sp-spacer1'></div>

        <div className='sp-obj1-subtitle1-wrapper'>
          <p className='sp-obj1-subtitle1-title font-instrument-sans font-size-20'>UNLOCKING THE VALUE OF DIGITISED MUSEUM COLLECTIONS</p>
          <p className='sp-obj1-subtitle1-section font-instrument-sans font-size-20'>( 02 )</p>
          <div className='sp-obj1-subtitle1-line'></div>
        </div>
        <p className='sp-obj1-text1 font-instrument-sans font-size-20'>
          Digitising museum collections does more than preserve heritage — it unlocks value across three key areas: revenue generation, cost savings, and public engagement. This third area, often referred to as soft value, includes intangible but meaningful benefits like increased global access, educational enrichment, and deeper community connection.
        </p>
        <div style={{ height: 40 }}></div>
        <div className='sp-obj1-subtitle1-wrapper'>
          <p className='sp-obj1-subtitle1-title font-instrument-sans font-size-20'>REVENUE GENERATION - with Digital Assets</p>
          <p className='sp-obj1-subtitle1-section font-instrument-sans font-size-20'>( 03 )</p>
          <div className='sp-obj1-subtitle1-line'></div>
        </div>
        <p className='sp-obj1-text1 font-instrument-sans font-size-20'>
          Digitised collections open up new income opportunities for museums:
        </p>
        <div style={{ height: 40 }}></div>
        <div className='sp-obj1-list'>
          <div className='sp-obj1-list-element'>
            <p className='font-instrument-sans font-size-20'>
              -
            </p>
            <div className='sp-obj1-list-element-spacer'></div>
            <p className='font-instrument-sans font-size-20'>
              Licensing & Sales: High-resolution images and 3D models can be licensed or sold to game developers, educators, and filmmakers.
              <br />
              <br />
              Example: The British Museum’s partnership with Sketchfab for tiered licensing (Sketchfab, n.d.).
            </p>
            <div style={{ width: 40 }}></div>
            <div className='sp-video-wrapper' style={{ height: 200, width: 800 }}>
              <video
                src="../videos/m2-res_1080p.mp4"
                autoPlay
                muted
                loop
                playsInline
              />
            </div>
          </div>

          <div style={{ height: 40 }}></div>

          <div className='sp-obj1-list-element'>
            <p className='font-instrument-sans font-size-20'>
              -
            </p>
            <div className='sp-obj1-list-element-spacer'></div>
            <p className='font-instrument-sans font-size-20'>
              Copyright & Reproduction: Museums can claim copyright over digital assets and charge for reproduction, exhibition use, or derivative works.
              (Creative Commons, 2014).
            </p>
          </div>

          <div style={{ height: 40 }}></div>

          <div className='sp-obj1-list-element'>

            <div className='sp-video-wrapper' style={{ height: 250, width: 1200 }}>
              <video
                src="../videos/m2-res_1080p.mp4"
                autoPlay
                muted
                loop
                playsInline
              />
            </div>
            <div style={{ width: 40 }}></div>
            <p className='font-instrument-sans font-size-20'>
              -
            </p>
            <div className='sp-obj1-list-element-spacer'></div>
            <p className='font-instrument-sans font-size-20'>
              APIs & Subscriptions: Providing digital access via APIs or subscription models creates additional revenue streams.

              <br />
              <br />
              Example: The Met Museum’s API offering (The Met, n.d.).
            </p>
          </div>
        </div>
        <div style={{ height: 80 }}></div>


        <div className='sp-obj1-subtitle1-wrapper'>
          <p className='sp-obj1-subtitle1-title font-instrument-sans font-size-20'>SAVING COSTS - via Reduced Handling and Remote Access</p>
          <p className='sp-obj1-subtitle1-section font-instrument-sans font-size-20'>( 04 )</p>
          <div className='sp-obj1-subtitle1-line'></div>
        </div>
        <p className='sp-obj1-text1 font-instrument-sans font-size-20'>
          Digitisation can also reduce reliance on physical handling, helping museums:
        </p>


        <div style={{ height: 40 }}></div>

        <div className='sp-obj1-list'>
          <div className='sp-obj1-list-element'>
            <div className='sp-obj2-dot-points'>
              <div className='sp-obj1-list-element'>
                <p className='font-instrument-sans font-size-20'>
                  -
                </p>
                <div className='sp-obj1-list-element-spacer'></div>
                <p className='font-instrument-sans font-size-20'>
                  Lower Conservation Risk: Minimising physical interaction helps preserve fragile items.
                </p>
              </div>

              <div style={{ height: 20 }}></div>

              <div className='sp-obj1-list-element'>
                <p className='font-instrument-sans font-size-20'>
                  -
                </p>
                <div className='sp-obj1-list-element-spacer'></div>
                <p className='font-instrument-sans font-size-20'>
                  Cut Operational Costs: Savings on shipping, storage, and internal object movement.
                </p>
              </div>

              <div style={{ height: 20 }}></div>

              <div className='sp-obj1-list-element'>
                <p className='font-instrument-sans font-size-20'>
                  -
                </p>
                <div className='sp-obj1-list-element-spacer'></div>
                <p className='font-instrument-sans font-size-20'>
                  Enable Remote Research: Scholars can access collections without travelling.

                  <br />
                  <br />

                  Example: The Norman Rockwell Museum’s virtual field trips for distance learning (Kiessling, 2024).
                </p>
              </div>
            </div>
            <div style={{ width: 20 }}></div>
            <div className='sp-video-wrapper' style={{ height: 450, width: 520 }}>
              <video
                src="../videos/m2-res_1080p.mp4"
                autoPlay
                muted
                loop
                playsInline
              />
            </div>


          </div>
        </div>


        <div style={{ height: 80 }}></div>


        <div className='sp-obj1-subtitle1-wrapper'>
          <p className='sp-obj1-subtitle1-title font-instrument-sans font-size-20'>PUBLIC ENGAGEMENT AND SOFT VALUE CREATION</p>
          <p className='sp-obj1-subtitle1-section font-instrument-sans font-size-20'>( 05 )</p>
          <div className='sp-obj1-subtitle1-line'></div>
        </div>
        <p className='sp-obj1-text1 font-instrument-sans font-size-20'>
          Digital collections foster deeper connections with broader audiences:
        </p>

        <div style={{ height: 40 }}></div>

        <div className='sp-obj1-list'>

          <div className='sp-obj1-list-element'>
            <p className='font-instrument-sans font-size-20'>
              -
            </p>
            <div className='sp-obj1-list-element-spacer'></div>
            <p className='font-instrument-sans font-size-20'>
              Global Access: Platforms like Google Arts & Culture let people explore artefacts from anywhere.
              (Carter, 2020).
            </p>
          </div>

          <div style={{ height: 20 }}></div>

          <div className='sp-obj1-list-element'>
            <p className='font-instrument-sans font-size-20'>
              -
            </p>
            <div className='sp-obj1-list-element-spacer'></div>
            <p className='font-instrument-sans font-size-20'>
              Community Participation: Initiatives like MicroPasts invite communities — including Indigenous groups — to contribute to metadata and request digital surrogates.
              (Museologi.st, 2019).
            </p>
          </div>

          <div style={{ height: 20 }}></div>

          <div className='sp-obj1-list-element'>
            <p className='font-instrument-sans font-size-20'>
              -
            </p>
            <div className='sp-obj1-list-element-spacer'></div>
            <p className='font-instrument-sans font-size-20'>
              Educational Impact: Digital assets support school kits, virtual exhibits, and university materials, enhancing learning experiences across age groups.
            </p>
          </div>
        </div>
        <div style={{ height: 50 }}></div>

        <div className='sp-obj3-final-images-div'>
          <div className='sp-obj3-final-images-div-img1'>
            <img className=".sp-obj3-image-element" src="images\clore-natural-history-centre.jpg" alt="white gloves" />
          </div>
          <div className='sp-obj3-final-images-div-img2'>
            <img className=".sp-obj3-image-element" src="images\clore-natural-history-centre.jpg" alt="white gloves" />
          </div>
          <div className='sp-obj3-final-images-div-img3'>
            <img className=".sp-obj3-image-element" src="images\clore-natural-history-centre.jpg" alt="white gloves" />
          </div>
          <div className='sp-obj3-final-images-div-img4'>
            <img className=".sp-obj3-image-element" src="images\clore-natural-history-centre.jpg" alt="white gloves" />
          </div>
        </div>

      </div>

      <div ref={referencesRef} className='sp-references-wrapper'>
        <p className='sp-obj1-title font-inria-serif-bold font-size-40'>References.</p>



        <div className='sp-obj1-subtitle1-wrapper'>
          <p className='sp-obj1-subtitle1-title font-instrument-sans font-size-20'>HARVARD REFERENCING STYLE</p>
          <p className='sp-obj1-subtitle1-section font-instrument-sans font-size-20'>( 00 )</p>
          <div className='sp-obj1-subtitle1-line'></div>
        </div>
        <p className='sp-obj1-text1 font-instrument-sans font-size-20'>
          kill me.
        </p>
      </div>


      <div className='f' style={{ top: 17500 }}>
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
