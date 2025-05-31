import Router from './router/Router';
import Header from './components/Header';
import Footer from './components/Footer';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { SplitText } from 'gsap/SplitText';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollSmoother, ScrollTrigger, SplitText,  useGSAP);

export default function App() {
  return (
    <>
      <Header />
      <Router />
    </>
  );
}
