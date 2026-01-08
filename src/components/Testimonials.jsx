import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { testimonials } from "../constants";

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
        stagger: {
          each: 0.25,
          from: "center",
        },
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 50%",
        },
      }
    );
  }, []);

  return (
    <section ref={sectionRef} id="reviews" className="relative bg-blue-50 px-6 py-40 md:px-20">
      {/* HEADER */}
      <div className="mb-10 max-w-xl">
        <p className="mb-3 text-xs uppercase font-circular-web tracking-widest text-black/40">
          #Kind words
        </p>
        <h2 className="font-circular-web text-4xl md:text-6xl text-black/80 leading-tight">
          Words that stayed with me
        </h2>
      </div>

      {/* QUOTES */}
      <div className="flex flex-col md:flex-row items-center justify-between py-10">
        {testimonials.map((item, i) => (
          <div key={i} className="testimonial">
            <blockquote className="max-w-lg">
              <p className="text-2xl md:text-3xl font-serif italic text-black leading-snug">
                “{item.text.split(".")[0]}.”
              </p>

              <p className="mt-4 text-base md:text-lg text-black/70 leading-relaxed">
                {item.text.split(".").slice(1).join(".")}
              </p>
            </blockquote>

            <div className="mt-6 flex items-center gap-4 mb-10">
              <span className="h-px w-10 bg-black/30" />
              <div className="text-sm uppercase tracking-widest text-black/50">
                {item.author}
              </div>
              <div className="text-xs text-black/30 mt-1">
                {item.type}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
