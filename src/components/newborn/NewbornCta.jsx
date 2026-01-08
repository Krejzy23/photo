import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const NewbornCTA = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current.querySelectorAll(".cta-line"),
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-[40vh] md:min-h-[80vh] items-center overflow-hidden"
    >
      {/* BACKGROUND IMAGE */}
      <img
        src="/img/newbornGallery/newbornCTA.jpg"
        alt="Newborn photography"
        className="absolute inset-0 w-[400px] h-[400px] md:h-full lg:w-full object-cover"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/20" />

      {/* CONTENT */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center text-white">
        <h2 className="cta-line special-font text-4xl md:text-6xl leading-tight">
          They will never <br /> be this small again.
        </h2>

        <p className="cta-line mt-6 text-sm md:text-base text-white/80">
          Newborn sessions are best within the first 21 days.
        </p>

        <button className="cta-line mt-10 rounded-full bg-white px-10 py-4 text-sm font-semibold text-black transition hover:bg-white/90">
          Book your newborn session
        </button>
      </div>
    </section>
  );
};

export default NewbornCTA;
