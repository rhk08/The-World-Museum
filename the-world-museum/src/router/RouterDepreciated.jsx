import { useLocation } from 'react-router';
import { Routes, Route } from 'react-router-dom';

import gsap from 'gsap';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { useGSAP } from '@gsap/react';

import Boxes from '../views/Boxes';
import Images from '../views/Images';
import PageTransition from '../components/PageTransition'; // <- import

gsap.registerPlugin(ScrollSmoother, useGSAP);

export default function Router() {
  const location = useLocation();

  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 1,
      effects: true,
    });
  }, [location]);

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <PageTransition key={location.pathname}>
          <Routes location={location} key={location.pathname}>
            <Route index element={<Boxes />} />
            <Route path="images" element={<Images />} />
          </Routes>
        </PageTransition>
      </div>
    </div>
  );
}
