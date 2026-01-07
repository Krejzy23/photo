import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const images = [
  "/img/portraitsGallery/portraitsGallery-01.jpg",
  "/img/portraitsGallery/portraitsGallery-02.jpg",
  "/img/portraitsGallery/portraitsGallery-03.jpg",
  "/img/portraitsGallery/portraitsGallery-04.jpg",
  "/img/portraitsGallery/portraitsGallery-05.jpg",
  "/img/portraitsGallery/portraitsGallery-06.jpg",
  "/img/portraitsGallery/portraitsGallery-07.jpg",
  "/img/portraitsGallery/portraitsGallery-08.jpg",
  "/img/portraitsGallery/portraitsGallery-09.jpg",
];

const PortraitsGallery = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current.querySelectorAll(".gallery-item"),
      { opacity: 0, y: 70 },
      {
        opacity: 1,
        y: 0,
        duration: 1.1,
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
      className="relative px-6 py-32 md:px-20 overflow-hidden"
    >
      {/* HEADER */}
      <div className="mb-32 max-w-2xl">
        <p className="mb-3 text-xs uppercase tracking-widest text-white/40">
          #Selected work
        </p>
        <h2 className="special-font text-4xl md:text-6xl text-white">
          Portraits
        </h2>
      </div>

      {/* 1️⃣ HERO */}
      <div className="gallery-item mb-40">
        <img
          src={images[0]}
          className="h-[60vh] w-full rounded-3xl object-cover"
          alt="girl with glasess"
        />
      </div>

      {/* 2️⃣ + 3️⃣ OVERLAP */}
      <div className="relative mb-28 flex flex-col md:flex-row gap-20">
        <img
          src={images[1]}
          className="gallery-item w-full md:w-1/2 rounded-3xl object-cover"
          alt="girl with butterfly"
        />
        <img
          src={images[2]}
          className="gallery-item md:absolute md:right-0 md:top-32 w-full md:w-[45%] rounded-3xl object-cover shadow-2xl"
          alt="random man"
        />
      </div>

      {/* 4️⃣ TEXT PAUSE */}
      <div className="mb-32 max-w-xl text-white/60 text-xl md:text-4xl leading-relaxed">
        <h2>
          A portrait is not made in a moment.<br/> 
          It appears — when the subject stops performing.
        </h2>
        <div
          className="background-text-gallery"
          style={{ fontSize: "clamp(4rem, 20vw, 16rem)" }}
        >
          ART
        </div>
      </div>

      {/* 5️⃣ 6️⃣ 7️⃣ OFFSET TRIPTYCH */}
      <div className="mb-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        <img
          src={images[3]}
          className="gallery-item rounded-3xl object-cover md:translate-y-24"
          alt="flower girl"
        />
        <img
          src={images[4]}
          className="gallery-item rounded-3xl object-cover"
          alt="coat girl"
        />
        <img
          src={images[5]}
          className="gallery-item rounded-3xl object-cover md:-translate-y-20"
          alt="frame girl"
        />
      </div>

      {/* 8️⃣ VERTICAL MOMENT */}
      <div className="gallery-item flex flex-col md:flex-row">
        <div className="mb-28 mx-auto max-w-2xl">
          <img
            src={images[7]}
            className="rounded-3xl object-cover w-full"
            alt="body art girl"
          />
        </div>
        <div className="mb-28 mx-auto md:-mt-52 max-w-md">
          <img src={images[6]} className="rounded-3xl object-cover" alt="ginger girl" />
        </div>
      </div>

      <div className="gallery-item mx-auto max-w-4xl">
        <img src={images[8]} className="rounded-3xl object-cover" alt="family" />
      </div>
    </section>
  );
};

export default PortraitsGallery;
