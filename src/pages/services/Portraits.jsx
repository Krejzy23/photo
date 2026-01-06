import PortraitsHero from "../../components/portraits/PortraitsHero";
import PortraitsStory from "../../components/portraits/PortraitsStory";
import PortraitsGallery from "../../components/portraits/PortraitsGallery";
import PortraitsServices from "../../components/portraits/PortraitsServices";



const Portraits = () => {
    return (
      <main className="bg-black text-white">
        <PortraitsHero />
        <PortraitsStory />
        <PortraitsGallery />
        {/* optional */}
        <PortraitsServices />
      </main>
    );
  };
  
  export default Portraits;
  