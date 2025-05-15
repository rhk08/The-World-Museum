import { useLocation } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';

import gsap from 'gsap';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

import Boxes from '../views/Boxes';
import Custom from '../views/Custom';
import Images from '../views/Images';
import PageTransition from '../components/PageTransition'; // <- import

export default function Router() {
  const location = useLocation();

  useGSAP(() => {
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
            <Route index element={<Boxes />} />
            <Route path="custom" element={<Custom />} />
            <Route path="images" element={<Images />} />
          </Routes>
        </PageTransition>
      </div>
    </div>
  );
}
