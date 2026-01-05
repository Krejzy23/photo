import React from "react";
import AnimatedTitle from "../AnimatedTitle";

const WeddingsStory = () => {
  return (
    <div className="h-[70vh] bg-violet-50 w-screen">
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
        <p className="font-general text-sm uppercase md:text-[10px]">
        "Emotive storytelling of your most important day."
        </p>

        <AnimatedTitle
          title="I d<b>o</b>n’t just t<b>a</b>ke phot<b>o</b>s.<br/> I capture m<b>o</b>ments y<b>o</b>u didn’t even kn<b>o</b>w were h<b>a</b>ppening."
          containerClass="mt-5 !text-black text-center"
        />
      </div>
    </div>
  );
};

export default WeddingsStory;
