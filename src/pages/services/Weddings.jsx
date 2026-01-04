import WeddingsHero from "../../components/weddings/WeddingsHero";
import WeddingsStory from "../../components/weddings/WeddingsStory";
import WeddingsGallery from "../../components/weddings/WeddingsGallery";
import WeddingsPackages from "../../components/weddings/WeddingsPackages";
import WeddingsProcess from "../../components/weddings/WeddingsProcess";
import WeddingsFAQ from "../../components/weddings/WeddingsFAQ";
import WeddingsCTA from "../../components/weddings/WeddingsCTA";

const Weddings = () => {
  return (
    <>
      <WeddingsHero />
      <WeddingsStory />
      <WeddingsGallery />
      <WeddingsPackages />
      <WeddingsProcess />
      <WeddingsFAQ />
      <WeddingsCTA />
    </>
  );
};

export default Weddings;
