import React from "react";
import { footerColumns } from "../constants";

const Footer = () => {
  return (
    <footer className="footer-bg text-black">
      {/* Footer Top */}
      <div className="footer-top py-6 px-10 bg-blue-75">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold">Stay Connected</h2>
          <p className="mt-2 text-sm">
            Subscribe to our newsletter for the latest updates.
          </p>
          <form className="mt-4 flex justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-1/3 px-4 py-2 rounded-l-md border-none focus:outline-none"
            />
            <button className="px-6 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="">
        <h1 className="hero-heading special-font text-center justify-center items-center p-2">
          PH<b>O</b>T<b>O</b>GR<b>A</b>PHY 
        </h1>
      </div>

      <div className="">
        {/* Footer Middle */}
        <div className="footer-middle py-10 px-10">
          <div className="flex flex-row items-center justify-center text-center gap-10">
            <h1 className="text-5xl font-zentry ">
              YOUR <br /> LOGO
            </h1>

            <div className="container mx-auto grid grid-cols-2  md:grid-cols-4 gap-6 p-3">
              {footerColumns.map((column, index, icons) => (
                <div key={index}>
                  <h3 className="mb-3 text-sm font-mono">{column.title}</h3>
                  <ul>
                    {column.links.map((link, linkIndex) => (
                      <li key={linkIndex} className="pt-3 text-xl">
                        <a
                          href={link.href}
                          className="relative inline-block px-3 py-2 text-black border-transparent transition duration-300 ease-in-out hover:border rounded-xl hover:bg-black hover:text-blue-50"

                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom py-4 footer-bg text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} YourCompany. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
