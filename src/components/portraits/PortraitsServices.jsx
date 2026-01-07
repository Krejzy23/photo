import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const services = [
  {
    title: "Portrait sessions",
    desc: "Personal, calm portrait sessions focused on emotion and presence.",
  },
  {
    title: "Editorial portraits",
    desc: "Strong visual stories for magazines, creatives and brands.",
  },
  {
    title: "Creative direction",
    desc: "Mood, styling and visual identity tailored to your vision.",
  },
  {
    title: "Retouch & post-production",
    desc: "Natural retouching with attention to skin, light and texture.",
  },
];

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
          start: "top 75%",
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative px-6 py-40 md:px-20"
    >
      <div className="grid gap-20 lg:grid-cols-2">
        
        {/* LEFT – BIG WORD */}
        <div className="sticky top-40 h-fit">
          <h2 className="special-font text-[18vw] leading-none text-white/5">
            Services
          </h2>
        </div>

        {/* RIGHT – LIST */}
        <div className="flex flex-col gap-14">
          {services.map((s, i) => (
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
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PortraitServices;
