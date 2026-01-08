import gsap from "gsap";
import { useRef } from "react";
import Button from "./Button";
import AnimatedTitle from "./AnimatedTitle";
import { TiMap } from "react-icons/ti";

const FloatingImage = () => {
  const frameRef = useRef(null);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const element = frameRef.current;

    if (!element) return;

    const rect = element.getBoundingClientRect();
    const xPos = clientX - rect.left;
    const yPos = clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((yPos - centerY) / centerY) * -6;
    const rotateY = ((xPos - centerX) / centerX) * 6;

    gsap.to(element, {
      duration: 0.3,
      rotateX,
      rotateY,
      scale: 1.02,
      transformPerspective: 800,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    const element = frameRef.current;

    if (element) {
      gsap.to(element, {
        duration: 0.3,
        rotateX: 0,
        rotateY: 0,
        ease: "power1.inOut",
      });
    }
  };

  return (
    <div id="story" className="min-h-dvh w-screen bg-blue-50 text-black">
      <div className="flex size-full flex-col items-center py-10 pb-24">
        <p className="font-general text-sm uppercase md:text-[10px]">
          welcome to our studio
        </p>

        <div className="relative size-full">
          <AnimatedTitle
            title="Disc<b>o</b>ver the m<b>a</b>gic </br> of o<b>u</b>r phot<b>o</b>graphy st<b>u</b>dio"
            containerClass="mt-5 pointer-events-none mix-blend-difference relative z-10"
          />

          <div className="story-img-container">
            <div className="story-img-mask">
              <div className="story-img-content">
                <img
                  ref={frameRef}
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                  onMouseUp={handleMouseLeave}
                  onMouseEnter={handleMouseLeave}
                  src="/img/studio.jpg"
                  alt="studio.jpg"
                  width={1280}
                  height={600}
                  className="object-contain"
                />
              </div>
            </div>

            {/* for the rounded corner */}
            <svg
              className="invisible absolute size-0"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <filter id="flt_tag">
                  <feGaussianBlur
                    in="SourceGraphic"
                    stdDeviation="8"
                    result="blur"
                  />
                  <feColorMatrix
                    in="blur"
                    mode="matrix"
                    values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                    result="flt_tag"
                  />
                  <feComposite
                    in="SourceGraphic"
                    in2="flt_tag"
                    operator="atop"
                  />
                </filter>
              </defs>
            </svg>
          </div>
        </div>

        <div className="-mt-80 flex w-full justify-center md:-mt-64 md:me-44 md:justify-end">
          <div className="flex h-full w-fit flex-col items-center md:items-start">
            <p className="mt-4 max-w-md text-center md:text-start font-circular-web text-lg leading-snug text-black">
              <span className="font-medium">
                Where creativity meets precision,
              </span>{" "}
              our photo studio captures moments that tell your unique story.
              <span className="block mt-2 text-black/70">
                Explore endless possibilities and let us bring your vision to
                life.
              </span>
            </p>
            <p className="mt-4 text-xs uppercase tracking-widest text-black/50">
              Natural light · Calm space · Creative atmosphere
            </p>

            <Button
              id="realm-btn"
              title="Copy studio address"
              containerClass="mt-5 flex-center gap-2"
              leftIcon={<TiMap />}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloatingImage;
