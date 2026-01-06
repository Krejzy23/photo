import React from "react";
import { TiLocationArrow } from "react-icons/ti";
import Button from "../Button";

const WeddingsCTA = () => {
  return (
    <section className="relative h-[80vh] w-screen overflow-hidden">
      
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/img/weddingCta.webp')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-5 text-center text-white">
        <h2 className="special-font font-zentry text-4xl md:text-6xl">
          Let’s tell y<b>o</b>ur st<b>o</b>ry.
        </h2>

        <p className="mt-6 max-w-xl text-white/80">
          I’d love to hear about your wedding day and create something timeless together.
        </p>

        <div className="mt-10">
          <Button
            title="Get in touch"
            leftIcon={<TiLocationArrow />}
            containerClass="!bg-white !text-black flex-center gap-2"
          />
        </div>
      </div>
    </section>
  );
};

export default WeddingsCTA;
