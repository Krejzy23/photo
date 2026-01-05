import React from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { weddingImages } from "../../constants";
import AnimatedTitle from "../AnimatedTitle";

const WeddingsGallery = () => {
  useGSAP(() => {
    gsap.from(".gallery-item", {
      opacity: 0,
      y: 40,
      stagger: 0.1,
      scrollTrigger: {
        trigger: ".gallery-item",
        start: "top 85%",
      },
    });
  });
  return (
    <section className="w-screen bg-violet-50 px-4 py-24 sm:px-8">
      <div className="relative mb-8 mt-5 flex flex-col items-center gap-5">
        <p className="font-general text-sm uppercase md:text-[10px]">
          #Gallery
        </p>
        <h2 className="special-font font-zentry text-4xl md:text-6xl text-black">
            Wedding photography filled with emotion.
          </h2>

        <div className="flex items-center justify-center">
          <p className="mx-auto mt-6 max-w-xl text-sm md:text-base text-black/70">
            A selection of wedding photographs capturing love, connection and
            atmosphere – from intimate ceremonies to unforgettable celebrations.
          </p>
        </div>
      </div>
      <div className="mx-auto max-w-9xl">
        {/* GRID */}
        <div className="columns-1 gap-4 sm:columns-2 md:columns-3">
          {weddingImages.map((src, i) => (
            <div key={i} className="mb-4 overflow-hidden rounded-2xl">
              <img
                src={src}
                alt={`Wedding moment ${i + 1}`}
                loading="lazy"
                className="w-full object-cover transition-transform duration-700 ease-out hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WeddingsGallery;
