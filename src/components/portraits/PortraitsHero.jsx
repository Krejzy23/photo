import React, { useRef, useEffect } from "react";
import AnimatedTitle from "../AnimatedTitle";
import { gsap } from "gsap";

const PortraitsHero = () => {
  const textRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { duration: 1, ease: "power2.out" } });

    tl.fromTo(
      textRef.current,
      { x: -50, opacity: 0 },
      { x: 0, opacity: 1, duration: 1.2 }
    );
    tl.fromTo(
      buttonRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1 },
      "-=0.5" // start button animace o 0.5s dříve, než text dokončí
    );
  }, []);

  return (
    <section className="relative w-full h-screen bg-black flex items-center">
      <div className="flex flex-col items-center justify-center max-w-4xl" >
        <AnimatedTitle
          title="N<b>o</b>t every<b>o</b>ne w<b>a</b>nts t<b>o<b/> look nice."
          containerClass="mt-5 pointer-events-none mix-blend-difference relative z-10"
        />
        <div className="z-10 flex flex-col justify-center max-w-lg px-8 md:px-16">
          {/* LEFT TEXT */}
          <p ref={textRef} className="text-lg text-white/70 mb-6">
            Some want to look real. Some want to be remembered.
          </p>
          <button
            ref={buttonRef}
            className="px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition"
          >
            Book a session
          </button>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="absolute inset-0">
        <img
          src="/img/portraitsHero.jpg"
          alt="Portrait Hero"
          className="w-full h-full object-cover object-right"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
    </section>
  );
};

export default PortraitsHero;
