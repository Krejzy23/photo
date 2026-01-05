import React from "react";
import clsx from "clsx";
import { gsap } from "gsap";
import { Link } from "react-router-dom";
import { useWindowScroll } from "react-use";
import { useRef, useState, useEffect } from "react";
import Button from "./Button";
import { TiLocationArrow } from "react-icons/ti";
import { navItems, serviceItems } from "../constants";

const Navbar = () => {
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isIndicatorActive, setIsIndicatorActive] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const toggleAudioIndicator = () => {
    setIsAudioPlaying((prev) => !prev);
    setIsIndicatorActive((prev) => !prev);
  };

  const audioElementRef = useRef(null);
  const navContainerRef = useRef(null);

  const { y: currentScrollY } = useWindowScroll();
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    if (isAudioPlaying) {
      audioElementRef.current.play();
    } else {
      audioElementRef.current.pause();
    }
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
      duration: 0.2,
    });
  }, [isNavVisible]);

  return (
    <div
      ref={navContainerRef}
      className="fixed inset-x-0 h-16 z-50 top-4 border-none duration-700 transition-all sm:inset-x-6"
    >
      <header className="absolute top-1/2 w-full -translate-y-1/2">
        <nav className="flex size-full items-center justify-between p-4">
          <div className="flex items-center gap-7">
            <img
              src="/img/logo.png"
              alt="logo"
              className="w-10"
              width={32}
              height={32}
            />
            <Button
              id="product-button"
              title="Contacts"
              rightIcon={<TiLocationArrow />}
              containerClass="!bg-blue-50 flex items-center justify-center gap-1"
              aria-label="Contact button"
            />
          </div>
          <div className="flex items-center h-full uppercase">
            <div className="hidden md:flex items-center gap-8">
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
                                className="text-sm text-white/70 hover:text-white transition"
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

                return (
                  <Link key={index} to={item.to} className="nav-hover-btn">
                    {item.label}
                  </Link>
                );
              })}
            </div>

            <button
              className="flex items-center ml-10 space-x-1"
              onClick={toggleAudioIndicator}
              aria-label={isAudioPlaying ? "Pause audio" : "Play audio"}
            >
              <audio
                src="/audio/loop.mp3"
                ref={audioElementRef}
                className="hidden"
                loop
              />

              {[1, 2, 3, 4].map((bar) => (
                <div
                  key={bar}
                  className={clsx("indicator-line", {
                    active: isIndicatorActive,
                  })}
                  style={{
                    animationDelay: `${bar * 0.1}s`,
                  }}
                />
              ))}
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
