import React from "react";

import NewbornHero from "../../components/newborn/NewbornHero";
import NewbornStory from "../../components/newborn/NewbornStory";
import NewbornGallery from "../../components/newborn/NewbornGallery";
import NewbornProcess from "../../components/newborn/NewbornProcess";
import NewbornPackages from "../../components/newborn/NewbornPackages";
import NewbornFaq from "../../components/newborn/NewbornFaq";
import NewbornCTA from "../../components/newborn/NewbornCta";

const Newborn = () => {
  return (
    <main className="bg-[#F7F6F4] text-black">
      <NewbornHero />
      <NewbornStory />
      <NewbornGallery />
      <NewbornProcess />
      <NewbornPackages />
      <NewbornFaq />
      <NewbornCTA />
    </main>
  );
};

export default Newborn;
