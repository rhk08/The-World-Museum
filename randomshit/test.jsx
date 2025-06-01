  const animateAndScrollDivs = () => {
    const divs = Array.from(container.current.querySelectorAll('.timeline-animated-element'));
    const shadowDivs = Array.from(container.current.querySelectorAll('.timeline-animated-element-shadow'));
    const smoother = ScrollSmoother.get();
    const containerRect = container.current.getBoundingClientRect();
    const containerCenterX = containerRect.left + containerRect.width / 2;

    const sortedDivs = divs
      .sort((a, b) => a.getBoundingClientRect().top - b.getBoundingClientRect().top)
      .reverse();

    const sortedShadowDivs = shadowDivs
      .sort((a, b) => a.getBoundingClientRect().top - b.getBoundingClientRect().top)
      .reverse();

    sortedDivs.forEach((div, index) => {
      const shadow = sortedShadowDivs[index];
      const divRect = div.getBoundingClientRect();
      const divCenterX = divRect.left + divRect.width / 2;
      const fromLeft = divCenterX < containerCenterX;
      const xStart = fromLeft ? -150 : 150;
      const yStart = -30;

      // Set initial states
      gsap.set(div, { x: 0, y: 10, opacity: 0, pointerEvents: 'none', scaleY: 0.8 });
      // if (shadow) {
      //   gsap.set(shadow, { x: xStart, y: 0, opacity: 0, pointerEvents: 'none' });
      // }

      const tl = gsap.timeline({
        delay: index * 0.12,
        onStart: index === 0 && smoother ? () => {
          const targetCenter = smoother.offset(timelineStart.current, "center center");
          const offsetBelowCenter = 100;
          const targetY = Math.min(ScrollTrigger.maxScroll(window), targetCenter + offsetBelowCenter);

          gsap.to(smoother, {
            scrollTop: targetY,
            duration: 3.5,
            ease: "power3.inOut",
          });
        } : undefined,
      });

      // Animate main div
      tl.to(div, {
        x: 0,
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.inOut',
        filter: 'blur(0px) brightness(1)',
      });
      // .to(div, {
      //   y: 0,
      //   duration: 0.3,
      //   ease: 'power2.in',
      //   pointerEvents: 'auto',
      //   filter: 'blur(0px) brightness(1)',
      // }, ">-=0.3");

      // // Animate shadow (if exists)
      // if (shadow) {
      //   tl.to(shadow, {
      //     x: 0,
      //     opacity: 0.5,
      //     duration: 1,
      //     ease: 'power3.out',
      //     zIndex: 90,
      //   }, 0).to(shadow, {
      //     y: 0,
      //     opacity: 0.8,
      //     scale: 1,
      //     duration: 0.3,
      //     ease: 'power2.in',
      //     filter: 'blur(0px) brightness(0)',
      //   }, ">-=0.3");
      // }

    });
  };