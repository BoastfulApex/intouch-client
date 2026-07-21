import Lenis from '@studio-freight/lenis';

export const initLenis = () => {
  const lenis = new Lenis({
    duration: 1.2,
    smooth: true,
    direction: 'vertical',
    gestureDirection: 'vertical',
    smoothTouch: false,
    touchMultiplier: 1.5,
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
};