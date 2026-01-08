import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const testimonials = [
  {
    text: "We never felt like we were posing. Everything felt natural — like the day itself.",
    author: "Anna & Tomáš",
    type: "Wedding",
  },
  {
    text: "The calmness during the session surprised us. Our baby slept through almost everything.",
    author: "Lucie",
    type: "Newborn",
  },
  {
    text: "For the first time, I actually liked how I look in photos.",
    author: "David",
    type: "Portrait",
  },
];

const Testimonials = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current.querySelectorAll(".testimonial"),
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#070E14] px-6 py-40 md:px-20"
    >
      {/* HEADER */}
      <div className="mb-24 max-w-xl">
        <p className="mb-3 text-xs uppercase tracking-widest text-white/40">
          Kind words
        </p>
        <h2 className="special-font text-4xl md:text-6xl text-white leading-tight">
          Words that stayed with me
        </h2>
      </div>

      {/* QUOTES */}
      <div className="space-y-32 max-w-4xl">
        {testimonials.map((item, i) => (
          <div key={i} className="testimonial">
            <blockquote className="text-xl md:text-2xl text-white/90 leading-relaxed italic">
              “{item.text}”
            </blockquote>

            <div className="mt-6 flex items-center gap-4">
              <span className="h-px w-10 bg-white/30" />
              <div className="text-sm uppercase tracking-widest text-white/50">
                {item.author} — {item.type}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
