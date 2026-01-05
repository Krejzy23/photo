import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0 });
    }
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;