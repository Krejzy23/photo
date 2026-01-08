import React from "react";
import { footerColumns } from "../constants";

const Footer = () => {
  return (
    <footer className="bg-black text-white/70">
      <div className="container mx-auto px-5 md:px-10 py-24">

        {/* Brand */}
        <div className="mb-16 text-center">
          <h2 className="special-font font-zentry text-5xl text-white">
            PH<b>O</b>T<b>O</b>GR<b>A</b>PHY
          </h2>
          <p className="mt-4 text-sm text-white/50">
            Capturing timeless moments with honesty and emotion.
          </p>
        </div>

        {/* Links */}
        <div className="grid grid-cols-2 gap-10 text-sm md:grid-cols-4">
          {footerColumns.map((column, index) => (
            <div key={index}>
              <h3 className="mb-4 text-xs uppercase tracking-widest text-white/40">
                {column.title}
              </h3>
              <ul className="space-y-3">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="transition-opacity hover:text-white hover:opacity-100"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-20 border-t border-white/10 pt-6 text-center text-xs text-white/40">
          © {new Date().getFullYear()} Aleš Krejzl · Wedding & Lifestyle Photography
        </div>
      </div>
    </footer>
  );
};

export default Footer;
