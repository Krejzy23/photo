import React, { useRef, useState, useEffect } from "react";
import clsx from "clsx";
import { gsap } from "gsap";
import { Link, useLocation } from "react-router-dom";
import { useWindowScroll } from "react-use";
import Button from "./Button";
import CameraLogo from "./CameraLogo";
import { TiMail } from "react-icons/ti";
import { HiBars3, HiXMark, HiChevronDown } from "react-icons/hi2";
import { navItems, serviceItems } from "../constants";

const Navbar = () => {
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isIndicatorActive, setIsIndicatorActive] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  
  
  // MOBILE
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  
  const location = useLocation();
  const audioElementRef = useRef(null);
  const navContainerRef = useRef(null);
  
  const { y: currentScrollY } = useWindowScroll();
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  
  const toggleAudioIndicator = () => {
    setIsAudioPlaying((p) => !p);
    setIsIndicatorActive((p) => !p);
  };
  
  const handleHomeClick = () => {
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setIsMobileOpen(false);
  };
  
  useEffect(() => {
    isAudioPlaying
    ? audioElementRef.current?.play()
    : audioElementRef.current?.pause();
  }, [isAudioPlaying]);
  
  useEffect(() => {
    if (currentScrollY === 0) {
      // Topmost position: show navbar without floating-nav
      setIsNavVisible(true);
      navContainerRef.current.classList.remove("floating-nav");
    } else if (currentScrollY > lastScrollY) {
      // Scrolling down: hide navbar and apply floating-nav
      setIsNavVisible(false);
      navContainerRef.current.classList.add("floating-nav");
    } else if (currentScrollY < lastScrollY) {
      // Scrolling up: show navbar with floating-nav
      setIsNavVisible(true);
      navContainerRef.current.classList.add("floating-nav");
    }
    
    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY]);
  
  const shouldHaveBackground =
  currentScrollY > 0 || isServicesOpen || isMobileOpen;

  useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.25,
      ease: "power2.out",
    });
  }, [isNavVisible]);

  useEffect(() => {
    if (currentScrollY > 20) {
      setIsServicesOpen(false);
      setIsMobileServicesOpen(false);
      setIsMobileOpen(false);
    }
  }, [currentScrollY]);
  
  return (
    <>
      {/* NAVBAR */}
      <div
        ref={navContainerRef}
        className={clsx(
          "fixed inset-x-0 top-4 z-50 h-16 transition-all duration-300 sm:inset-x-6",
          {
            "floating-nav": shouldHaveBackground,
          }
        )}
      >
        <header className="absolute top-1/2 w-full -translate-y-1/2">
          <nav className="flex h-full items-center justify-between px-6 ">
            {/* LEFT */}
            <div className="flex items-center gap-6">
              <CameraLogo className="transition h-10 w-10 text-white hover:rotate-6 hover:scale-110" />

              <Button
                title="Contact"
                rightIcon={<TiMail />}
                containerClass="!bg-blue-50 hidden md:flex items-center gap-2"
              />
            </div>

            {/* DESKTOP MENU */}
            <div className="hidden md:flex items-center gap-8 uppercase">
              {navItems.map((item, index) => {
                if (item.type === "submenu") {
                  return (
                    <div key={index} className="relative">
                      <button
                        onClick={() => setIsServicesOpen((p) => !p)}
                        className="nav-hover-btn flex items-center"
                      >
                        SERVICES
                        <div className="px-1">
                          <HiChevronDown />
                        </div>
                      </button>

                      {isServicesOpen && (
                        <div className="absolute left-20 top-full mt-5 -translate-x-1/2 bg-black/80 px-6 py-3 backdrop-blur-lg rounded-b-lg">
                          <div className="flex flex-col gap-6">
                            {serviceItems.map((service, i) => (
                              <Link
                                key={i}
                                to={service.to}
                                onClick={() => setIsServicesOpen(false)}
                                className="text-sm text-white/70 hover:text-white"
                              >
                                {service.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }

                if (item.label === "Home") {
                  return (
                    <Link
                      key={index}
                      to="/"
                      onClick={handleHomeClick}
                      className="nav-hover-btn"
                    >
                      Home
                    </Link>
                  );
                }

                return (
                  <Link key={index} to={item.to} className="nav-hover-btn">
                    {item.label}
                  </Link>
                );
              })}
            </div>

            {/* RIGHT */}
            <div className="flex items-center gap-4">
              {/* AUDIO – desktop only */}
              <button
                onClick={toggleAudioIndicator}
                className="hidden md:flex items-center gap-1"
              >
                <audio ref={audioElementRef} src="/audio/loop.mp3" loop />
                {[1, 2, 3, 4].map((bar) => (
                  <div
                    key={bar}
                    className={clsx("indicator-line", {
                      active: isIndicatorActive,
                    })}
                    style={{ animationDelay: `${bar * 0.1}s` }}
                  />
                ))}
              </button>

              {/* MOBILE TOGGLE */}
              <button
                onClick={() => setIsMobileOpen((p) => !p)}
                className="md:hidden"
              >
                {isMobileOpen ? (
                  <HiXMark className="h-10 w-10 text-white" />
                ) : (
                  <HiBars3 className="h-10 w-10 text-white" />
                )}
              </button>
            </div>
          </nav>
        </header>
      </div>

      {/* MOBILE MENU */}
      {isMobileOpen && (
        <div className="fixed inset-0 z-40 bg-black/90 pt-24 px-6 text-white">
          <nav className="flex flex-col gap-6 uppercase">
            <Link to="/" onClick={handleHomeClick}>
              Home
            </Link>

            <Link to="/#about" onClick={() => setIsMobileOpen(false)}>
              About
            </Link>

            {/* SERVICES */}
            <button
              onClick={() => setIsMobileServicesOpen((p) => !p)}
              className="flex items-center justify-between"
            >
              SERVICES
              <HiChevronDown
                className={clsx("transition", {
                  "rotate-180": isMobileServicesOpen,
                })}
              />
            </button>

            {isMobileServicesOpen && (
              <div className="ml-4 flex flex-col gap-4 text-sm text-white/70">
                {serviceItems.map((s, i) => (
                  <Link
                    key={i}
                    to={s.to}
                    onClick={() => setIsMobileOpen(false)}
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            )}

            <Link to="/#reviews" onClick={() => setIsMobileOpen(false)}>
              Reviews
            </Link>
            <Link to="/#contacts" onClick={() => setIsMobileOpen(false)}>
              Contacts
            </Link>
          </nav>
        </div>
      )}
    </>
  );
};

export default Navbar;
