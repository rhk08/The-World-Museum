import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import PageTransitionContext from '../context/PageTransitionContext';

gsap.registerPlugin(ScrollSmoother, useGSAP);

export default function Router() {
  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 1,
      effects: true,
    });
  }, []);

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <PageTransitionContext />
      </div>
    </div>
  );
}