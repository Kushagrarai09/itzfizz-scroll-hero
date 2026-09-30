'use client';

import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CarIllustration from './CarIllustration';

gsap.registerPlugin(ScrollTrigger);

const metrics = [
  ['58%', 'Increase in pick up point use'],
  ['23%', 'Decreased in customer phone calls'],
  ['27%', 'Increase in pick up point use'],
  ['40%', 'Decreased in customer phone calls'],
];

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const carRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const metricsRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const car = carRef.current;
    const headline = headlineRef.current;
    const metricsEl = metricsRef.current;
    if (!section || !car || !headline || !metricsEl) return;

    const ctx = gsap.context(() => {
      const letters = headline.querySelectorAll('span');
      const cards = metricsEl.querySelectorAll('.metric');

      gsap.set(letters, { opacity: 0, y: 26, filter: 'blur(8px)' });
      gsap.set(cards, { opacity: 0, y: 28 });
      gsap.set(car, { x: '80vw', yPercent: -50 });

      const intro = gsap.timeline({ defaults: { ease: 'power3.out' } });
      intro.to(letters, { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.7, stagger: 0.035 }, 0.15)
        .to(cards, { opacity: 1, y: 0, duration: 0.65, stagger: 0.12 }, 0.55);

      const scrollTween = gsap.to(car, {
        x: '-160vw',
        ease: 'none',
        force3D: true,
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1.5,
          invalidateOnRefresh: true,
        },
      });

      return () => { scrollTween.scrollTrigger?.kill(); };
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="hero" aria-label="Itzfizz scroll-driven hero">
      <div className="hero-sticky">
        <div className="hero-topbar">
          <span className="brand">ITZFIZZ DIGITAL</span>
          <span className="scroll-hint"><span className="scroll-line" /> SCROLL TO EXPLORE</span>
        </div>

        <div className="hero-content">
          <div className="kicker">Digital experiences / 2026</div>
          <h1 ref={headlineRef} className="headline" aria-label="Welcome Itzfizz">
            {'WELCOME ITZFIZZ'.split('').map((letter, index) => (
              <span key={`${letter}-${index}`}>{letter === ' ' ? '\u00A0' : letter}</span>
            ))}
          </h1>
        </div>

        <div className="scene" aria-hidden="true">
          <div className="road" />
          <div ref={carRef} className="car-wrap">
            <div className="car-shadow" />
            <CarIllustration />
          </div>
        </div>

        <div ref={metricsRef} className="metrics">
          {metrics.map(([value, copy]) => (
            <article className="metric" key={value + copy}>
              <div className="metric-value">{value}</div>
              <div className="metric-copy">{copy}</div>
            </article>
          ))}
        </div>

        <div className="bottom-note">Scroll-controlled motion / GSAP ScrollTrigger / Transform based</div>
      </div>
    </section>
  );
}
