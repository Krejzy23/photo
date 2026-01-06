import React from "react";
import AnimatedTitle from "../AnimatedTitle";

const WeddingsStory = () => {
  return (
    <div className="h-[50vh] bg-violet-50 w-screen">
      <div className="relative mb-8 flex flex-col items-center justify-center gap-5">
        <p className="font-general mt-5 text-sm uppercase md:text-[10px]">
        "Emotive storytelling of your most important day."
        </p>
        <h1 className="md:px-20 px-10 special-font wedding-hero-heading z-40">
          I don’t just take photos. I capture moments you didn’t even know were happening.
        </h1>
      </div>
    </div>
  );
};

export default WeddingsStory;
