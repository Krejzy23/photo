import React from "react";

import NewbornHero from "../../components/newborn/NewbornHero";
import NewbornStory from "../../components/newborn/NewbornStory";
import NewbornGallery from "../../components/newborn/NewbornGallery";
import NewbornPackages from "../../components/newborn/NewbornPackages";
import NewbornFaq from "../../components/newborn/NewbornFaq";
import NewbornCTA from "../../components/newborn/NewbornCTA";

const Newborn = () => {
  return (
    <main className="bg-[#F7F6F4] text-black">
      <NewbornHero />
      <NewbornStory />
      <NewbornGallery />
      <NewbornPackages />
      <NewbornFaq />
      <NewbornCTA />
    </main>
  );
};

export default Newborn;
