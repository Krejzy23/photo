import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

import AnimatedTitle from "./AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: "#clip",
            start: "center center",
            end: "+=800 center",
            scrub: 0.5,
            pin: true,
          },
        })
        .to(".mask-clip-path", {
          width: "100vw",
          height: "100vh",
          borderRadius: 0,
          overflow: "hidden",
          ease: "none",
        });
    },
    { scope: sectionRef }
  );

  return (
    <div ref={sectionRef} id="about" className="min-h-screen w-screen">
      <div className="relative mb-4 mt-10 flex flex-col items-center gap-5">
        <p className="font-general text-sm uppercase md:text-[10px]">
          #Welcome to Site
        </p>

        <AnimatedTitle
          title="Disc<b>o</b>ver the <b>a</b>rt of capt<b>u</b>ring life's mem<b>o</b>ries"
          containerClass="mt-5 !text-black text-center"
        />

        <div className="about-subtext max-w-xl text-center space-y-4">
          <p className="text-sm uppercase tracking-widest text-black/40">
            About the studio
          </p>

          <p className="text-xl md:text-2xl font-medium">
            Photography is not about perfection.
          </p>

          <p className="text-black/60 text-sm md:text-base">
            It’s about atmosphere, trust and moments that feel real — whether
            it’s a quiet newborn session, a bold portrait or a wedding day full
            of movement.
          </p>
        </div>
      </div>

      <div className="h-dvh w-screen" id="clip">
        <div className="mask-clip-path about-image">
          <img
            src="img/about.jpg"
            alt="Background"
            className="absolute left-0 top-0 size-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>
      </div>
    </div>
  );
};

export default About;
