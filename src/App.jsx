import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Weddings from "./pages/services/Weddings";
import Newborn from "./pages/services/Newborn";
import Portraits from "./pages/services/Portraits";
import ProductPhotography from "./components/ProductPhotography";
import Studio from "./components/Studio";

const App = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services/weddings" element={<Weddings />} />
        <Route path="/services/newborn" element={<Newborn />} />
        <Route path="/services/portraits" element={<Portraits />} />
        <Route path="/services/studio" element={<Studio />} />

        <Route path="/services/product-photography" element={<ProductPhotography />} />
      </Routes>

      <Footer />
    </main>
  );
};

export default App;
