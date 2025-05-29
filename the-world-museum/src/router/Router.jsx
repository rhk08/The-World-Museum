import { useLocation } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';

import gsap from 'gsap';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { SplitText } from 'gsap/SplitText';
import { useGSAP } from '@gsap/react';

import ProblemPage from '../views/ProblemPage';
import SolutionPage from '../views/SolutionPage';
import TimelinePage from '../views/TimelinePage';
import PageTransition from '../components/PageTransition'; // <- import

import Header from '../components/Header';

export default function Router() {
  const location = useLocation();

  useGSAP(() => {

    if (ScrollSmoother.get()) {
      ScrollSmoother.get().kill();
    }
    ScrollSmoother.create({
      smooth: 2,
      effects: true,
    });    
  }, [location]);

  return (
    <div id="smooth-wrapper">

      <div id="smooth-content">
              
        <PageTransition key={location.pathname}>
          <Routes location={location} key={location.pathname}>
            
            <Route index element={<ProblemPage />} />
            <Route path="SolutionPage" element={<SolutionPage />} />
            <Route path="TimelinePage" element={<TimelinePage />} />
          </Routes>
        </PageTransition>
      </div>
    </div>
  );
}
