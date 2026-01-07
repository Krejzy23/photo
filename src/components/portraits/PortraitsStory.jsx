import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const PortraitsStory = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current.querySelectorAll(".story-line"),
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        stagger: 0.15,
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
      className="relative h-[60vh] bg-[#091017] px-6 py-32 md:px-20"
    >
      <div
        className="
        pointer-events-none
        absolute
        left-1/2
        top-20
        -translate-x-1/2
        -translate-y-1/2
        max-w-full
        whitespace-nowrap
        font-bold
        uppercase
        tracking-widest
        text-white
        opacity-[0.035]
      "
        style={{ fontSize: "clamp(4rem, 20vw, 15rem)" }}
      >
        STORY
      </div>
      <div className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-16 md:grid-cols-2">
        {/* LEFT */}
        <div>
          <p className="story-line mb-4 text-xs uppercase tracking-widest text-white/40">
            #PORTRAITS
          </p>

          <h2 className="story-line special-font text-4xl md:text-6xl leading-tight">
            Faces with <br />
            something to say
          </h2>
        </div>

        {/* RIGHT */}
        <div className="max-w-lg text-sm md:text-base text-white/70 space-y-6">
          <p className="story-line">A portrait is not about looking perfect.</p>
          <p className="story-line">
            It’s about presence. About energy. About truth.
          </p>
          <p className="story-line">
            These sessions are for people who want to be seen — not styled into
            someone else.
          </p>
          <p className="story-line">
            Actors. Creators. Professionals. Families. Or simply you.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PortraitsStory;
