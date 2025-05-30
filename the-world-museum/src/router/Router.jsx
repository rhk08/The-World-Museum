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
    // Kill any existing instance
    if (ScrollSmoother.get()) {
      ScrollSmoother.get().kill();
    }

    // Create new smoother
    const smoother = ScrollSmoother.create({
      smooth: 2,
      effects: true,
    });

    // Reset scroll to top immediately
    smoother.scrollTo(0, true);

    // Refresh smoother calculations after new content has rendered
    smoother.refresh();

    // Optional: return cleanup function to kill smoother on unmount
    return () => {
      smoother.kill();
    };
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
