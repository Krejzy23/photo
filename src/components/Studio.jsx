import { useRef, useEffect } from "react";
import { gsap } from "gsap";

const Studio = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current.querySelectorAll(".fade-block"),
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 40%",
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-yellow-100 text-black px-6 md:px-20 py-32"
    >
      {/* HERO */}
      <div className="fade-block max-w-5xl mb-32">
        <p className="text-xs uppercase tracking-widest text-black/40 mb-4">
          #The studio
        </p>

        <h1 className="font-circular-web text-4xl md:text-5xl lg:text-7xl leading-tight">
          A calm space designed <br />
          for real moments
        </h1>

        <p className="mt-6 max-w-lg md:max-w-2xl text-sm text-black/70">
          A quiet, minimal studio built around light, comfort and focus.
          <br />
          Nothing distracting.
          <br /> Nothing rushed.
        </p>
      </div>

      {/* IMAGES */}
      <div className="mb-20 space-y-12">
        {/* Wide */}
        <div className="fade-block overflow-hidden rounded-3xl">
          <img
            src="/img/studio/studio-01.jpg"
            alt="Studio wide view"
            className="md:w-full md:h-[70vh] object-cover"
          />
        </div>

        {/* Two images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="fade-block overflow-hidden rounded-3xl">
            <img
              src="/img/studio/studio-02.jpg"
              alt="Studio detail"
              className="md:w-full md:h-[60vh] object-cover"
            />
          </div>

          <div className="fade-block overflow-hidden rounded-3xl">
            <img
              src="/img/studio/studio-03.jpg"
              alt="Studio atmosphere"
              className="md:w-full md:h-[60vh] object-cover"
            />
          </div>
        </div>
      </div>

      {/* STORY */}
      <div className="fade-block max-w-3xl mb-40">
        <p className="text-sm md:text-base lg:text-2xl text-black/80 leading-relaxed space-y-4">
          The studio is designed to feel private and relaxed.
          <br />
          Neutral tones. Soft light. Enough space to breathe.
          <br />A place where you can slow down and simply be yourself.
        </p>

        <div className="mt-10 space-y-2 text-xs uppercase tracking-widest text-black/50">
          <p>Portraits</p>
          <p>Families & newborns</p>
          <p>Professionals & creatives</p>
        </div>
      </div>

      {/* MAP */}
      <div className="fade-block">
        <p className="mb-6 text-xs uppercase tracking-widest text-black/40">
          Location
        </p>

        <div className="overflow-hidden rounded-3xl h-[60vh]">
          <iframe
            title="Studio location"
            src="https://www.google.com/maps?q=Prague&output=embed"
            className="w-full h-full border-0 grayscale"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default Studio;
