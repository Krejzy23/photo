import React, { useEffect, useRef } from "react";
import { GiCheckMark } from "react-icons/gi";
import { gsap } from "gsap";
import { portraitsServices } from "../../constants";

const PortraitServices = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current.querySelectorAll(".service-item"),
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 55%",
        },
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="relative px-6 py-40 md:px-20">
      {/* LEFT – BIG WORD */}
      <div className="sticky h-fit pointer-events-none">
        <h2 className="font-zentry special-font text-cyan-400 text-[18vw] leading-none opacity-[0.1]">
          S<b>e</b>r<b>v</b>ic<b>e</b>s
        </h2>
      </div>
      <div className="grid md:grid-cols-2">
        <div className="mb-12 -mt-40 flex items-end gap-8">
          <div>
            <p className="text-xs uppercase tracking-widest text-white/40">
              #Portrait services
            </p>
            <h2 className="font-circular-web mb-10 text-4xl md:text-6xl text-white leading-relaxed tracking-widest">
              What I Offer
            </h2>
            <img
              src="/img/portraitsGallery/portraitsCTA.webp"
              alt=""
              className="h-40 w-40 md:h-96 md:w-96 object-cover opacity-30"
            />
          </div>
        </div>

        {/* RIGHT – LIST */}
        <div className="flex flex-col gap-14">
          {portraitsServices.map((s, i) => (
            <div
              key={i}
              className="service-item group border-b border-white/10 pb-10"
            >
              <div className="flex items-start gap-6">
                <span className="text-sm text-white/40">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div>
                  <h3 className="text-2xl md:text-3xl text-white transition-opacity duration-300 group-hover:opacity-70">
                    {s.title}
                  </h3>
                  <p className="mt-3 max-w-md text-sm text-white/50">
                    {s.desc}
                  </p>
                </div>
                <div className="">
                  <GiCheckMark className="w-10 h-10 mt-6" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortraitServices;
