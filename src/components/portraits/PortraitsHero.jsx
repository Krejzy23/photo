import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

const PortraitsHero = () => {
  const textRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

    tl.fromTo(
      textRef.current,
      { x: -40, opacity: 0 },
      { x: 0, opacity: 1, duration: 1.1 }
    ).fromTo(
      buttonRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8 },
      "-=0.4"
    );
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* IMAGE */}
      <div className="absolute inset-0">
        <img
          src="/img/portraitsHero.jpg"
          alt="Portrait Hero"
          className="
          w-full h-full object-cover object-[70%_50%] md:object-right
          "
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 flex h-full items-start">
        <div
          className="w-full max-w-4xl px-6 sm:px-10 md:px-20 pt-44 md:pt-40"
        >
          <h1 className="portraits-hero-heading mb-6 text-blue-100">
            N<b>o</b>t every<b>o</b>ne w<b>a</b>nts <br /> to l<b>oo</b>k nice
          </h1>

          <p
            ref={textRef}
            className="mb-8 max-w-md text-md sm:text-base md:text-lg lg:text-xl text-white/70"
          >
            Some want to be remembered.
            <br />
            Some want to look real.
          </p>

          <button
            ref={buttonRef}
            className="rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-white transition hover:bg-white hover:text-black"
          >
            Book a session
          </button>
        </div>
      </div>
    </section>
  );
};

export default PortraitsHero;
