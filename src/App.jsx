import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Weddings from "./pages/services/Weddings";
import Newborn from "./pages/services/Newborn";

const App = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services/weddings" element={<Weddings />} />
        <Route path="/services/newborn" element={<Newborn />} />
      </Routes>

      <Footer />
    </main>
  );
};

export default App;
