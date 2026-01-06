import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import Button from "../Button";

const NewbornHero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".nb-fade", {
        opacity: 0,
        y: 20,
        duration: 1.2,
        stagger: 0.2,
        ease: "power2.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-screen overflow-hidden bg-[#F7F6F4]"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/img/newbornHero.jpg')",
        }}
      />

      {/* Soft overlay */}
      <div className="absolute inset-0 bg-[#F7F6F4]/60" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-6">
        <div className="max-w-3xl text-center text-[#2E2E2E]">
          <p className="nb-fade mb-4 text-xs uppercase tracking-[0.3em]">
            Newborn & Family Photography
          </p>

          <h1 className="nb-fade mb-6 font-general text-4xl md:text-6xl leading-tight">
            Tiny moments.<br />
            <span className="font-light">Forever memories.</span>
          </h1>

          <p className="nb-fade mb-10 text-base md:text-lg text-[#5A5A5A]">
            Calm, natural newborn photography focused on safety, comfort and
            timeless memories – captured in my studio with love and care.
          </p>

          <div className="nb-fade flex justify-center">
            <Button
              title="Book a session"
              containerClass="bg-pink-400 text-white hover:bg-black/80"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewbornHero;
