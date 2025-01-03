import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import AnimatedTitle from "./AnimatedTitle";
import Button from "./Button";

gsap.registerPlugin(ScrollTrigger);

const ImageClipBox = ({ src, clipClass , width, height }) => (
  <div className={clipClass}>
    <img src={src} width={width} height={height} alt={`Image for ${src}`}/>
  </div>
);

const Contact = () => {
  useEffect(() => {
    gsap.to("#contact", {
      backgroundColor: "#FC2207", // Barva pozadí (Tailwind: bg-yellow-50)
      scrollTrigger: {
        trigger: "#contact",
        start: "top center", // Kdy začít (můžeš si upravit)
        end: "bottom center", // Kdy skončit
        toggleActions: "play none none reverse", // Animace při scrollování
      },
    });
  }, []);

  return (
    <div className="my-20 min-h-96 w-screen px-10 bg-blue-50">
      <div id="contact" className="relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden">
        <div className="absolute -left-20 -top-40 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96">
          <ImageClipBox
            src="/img/contact-2.jpg"
            alt={"contactPhoto2"}
            clipClass="contact-clip-path-1"
            width={355}
            height={282}
          />
          <ImageClipBox
            src="/img/contact-1.jpg"
            alt={"contactPhoto1"}
            clipClass="contact-clip-path-1 lg:translate-y-40 translate-y-60"
            width={325}
            height={217}
          />
        </div>

        <div className="absolute top-0 left-20 w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80">
          <ImageClipBox
            src="/img/contact-4.jpg"
            alt={"contactPhoto4"}
            clipClass="sword-man-clip-path md:scale-125"
            width={200}
            height={200}
          />
        </div>

        <div className="flex flex-col items-center text-center">
          <p className="mb-10 font-general text-[10px] uppercase">
            Contact Us
          </p>

          <AnimatedTitle
            title="let&#39;s cre<b>a</b>te <br /> mem<b>o</b>ries for a<br /> lifetime t<b>o</b>gether."
            className="special-font !md:text-[6.2rem] w-full font-zentry !text-5xl !font-black !leading-[.9]"
          />

          <Button title="contact us" containerClass="mt-10 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
