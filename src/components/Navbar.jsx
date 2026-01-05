import React, { useRef, useState, useEffect } from "react";
import clsx from "clsx";
import { gsap } from "gsap";
import { Link, useLocation } from "react-router-dom";
import { useWindowScroll } from "react-use";
import Button from "./Button";
import { TiLocationArrow } from "react-icons/ti";
import { navItems, serviceItems } from "../constants";

const Navbar = () => {
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isIndicatorActive, setIsIndicatorActive] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

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

  useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.25,
      ease: "power2.out",
    });
  }, [isNavVisible]);

  return (
    <div
      ref={navContainerRef}
      className="fixed inset-x-0 top-4 z-50 h-16 transition-all sm:inset-x-6"
    >
      <header className="absolute top-1/2 w-full -translate-y-1/2">
        <nav className="flex h-full items-center justify-between px-6">
          {/* LEFT */}
          <div className="flex items-center gap-6">
            <img src="/img/logo.png" alt="logo" className="w-10" />

            <Button
              title="Contacts"
              rightIcon={<TiLocationArrow />}
              containerClass="!bg-blue-50 flex items-center gap-1"
            />
          </div>

          {/* CENTER */}
          <div className="hidden md:flex items-center gap-8 uppercase">
            {navItems.map((item, index) => {
              if (item.type === "submenu") {
                return (
                  <div key={index} className="relative">
                    <button
                      onClick={() => setIsServicesOpen((p) => !p)}
                      className="nav-hover-btn"
                    >
                      SERVICES
                    </button>

                    {isServicesOpen && (
                      <div className="absolute left-1/2 top-full mt-4 -translate-x-1/2 rounded-full bg-black/80 px-6 py-3 backdrop-blur-md">
                        <div className="flex gap-6 whitespace-nowrap">
                          {serviceItems.map((service, i) => (
                            <Link
                              key={i}
                              to={service.to}
                              className="text-sm text-white/70 transition hover:text-white"
                              onClick={() => setIsServicesOpen(false)}
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
          <button
            onClick={toggleAudioIndicator}
            className="flex items-center gap-1"
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
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
