import React from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { TiLocationArrow } from "react-icons/ti";
import Button from "../Button";

gsap.registerPlugin(ScrollTrigger);

const WeddingsHero = () => {
  useGSAP(() => {
    gsap.set("#hero-frame", {
      clipPath: "polygon(14% 0,72% 0, 88% 90%, 0 95%)",
      borderRadius: "0% 0% 40% 10%",
    });

    gsap.from("#hero-frame", {
      clipPath: "polygon(0% 0%,100% 0%,100% 100%,0% 100%)",
      borderRadius: "0 0 0 0",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#hero-frame",
        start: "top top",
        end: "bottom center",
        scrub: true,
      },
    });

    gsap.from(".hero-content", {
      opacity: 0,
      y: 60,
      duration: 1.2,
      ease: "power2.out",
      delay: 0.3,
    });
  });

  return (
    <section className="relative h-dvh w-screen overflow-x-hidden">
      <div
        id="hero-frame"
        className="relative h-dvh w-screen z-10 overflow-hidden bg-blue-75"
      >
        <h1 className="special-font wedding-hero-heading absolute bottom-8 right-8 md:bottom-5 md:right-5 z-40 text-blue-100">
          We<b>dd</b>ing
        </h1>
        {/* HERO IMAGE */}
        <img
          src="/img/weddingsHero.jpg"
          alt="Wedding moment"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/30" />

        {/* CONTENT */}
        <div className="hero-content absolute inset-0 z-10 flex flex-col justify-center px-6 sm:px-12 text-blue-100">
          <h1 className="special-font wedding-hero-heading max-w-xl">
            Y<b>o</b>ur We<b>dd</b>ing,
            <br /> capt<b>u</b>red <br /> f<b>o</b>re<b>v</b>er
          </h1>

          <p className="mt-4 max-w-xs text-blue-100 font-robert-regular">
            Timeless photography & films that tell your love story exactly as it
            felt.
          </p>

          <div className="mt-6">
            <Button
              title="Check availability"
              leftIcon={<TiLocationArrow />}
              containerClass="!bg-pink-100 flex-center gap-1"
            />
          </div>
        </div>
      </div>

      {/* BACK TEXT */}
      <h1 className="special-font wedding-hero-heading absolute bottom-8 right-8 md:bottom-5 md:right-5 text-black">
        We<b>dd</b>ing
      </h1>
    </section>
  );
};

export default WeddingsHero;
