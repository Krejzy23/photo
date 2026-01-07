import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const images = [
  "/img/portraitsGallery/portraitsGallery-01.jpg",
  "/img/portraitsGallery/portraitsGallery-02.jpg",
  "/img/portraitsGallery/portraitsGallery-03.jpg",
  "/img/portraitsGallery/portraitsGallery-04.jpg",
  "/img/portraitsGallery/portraitsGallery-05.jpg",
  "/img/portraitsGallery/portraitsGallery-06.jpg",
];

const PortraitsGallery = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current.querySelectorAll(".portrait-item"),
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        stagger: 0.15,
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
      className="relative px-6 py-32 md:px-20"
    >
      {/* HEADER */}
      <div className="mb-20 max-w-2xl">
        <p className="mb-3 text-xs uppercase tracking-widest text-white/40">
          #Selected work
        </p>
        <h2 className="special-font text-4xl md:text-6xl text-white">
          Portrait gallery
        </h2>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {images.map((src, i) => (
          <div
            key={i}
            className={`portrait-item group relative overflow-hidden rounded-3xl ${
              i % 3 === 0 ? "lg:col-span-2 lg:row-span-2" : ""
            }`}
          >
            <img
              src={src}
              alt=""
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* OVERLAY */}
            <div className="pointer-events-none absolute inset-0 bg-black/30 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PortraitsGallery;
