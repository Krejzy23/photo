import React from "react";
import { footerColumns } from "../constants";

const Footer = () => {
  return (
    <footer className="footer-bg text-blue-50">
      {/* Footer Top */}
      <div className="footer-top py-6 px-10 bg-gray-900">
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
        {/* Footer Middle */}
        <div className="footer-middle py-10 px-10">
          <div className="">
            <h1 className="text-5xl font-zentry ">
              YOUR <br /> LOGO
            </h1>
          </div>
          <div className="container mx-auto grid grid-cols-2  md:grid-cols-4 gap-6">
            {footerColumns.map((column, index, icons) => (
              <div key={index}>
                <h3 className="mb-4 text-xl font-zentry">{column.title}</h3>
                <ul>
                  {column.links.map((link, linkIndex) => (
                    <li key={linkIndex} className="pt-3">
                      <a
                        href={link.href}
                        className="hover:underline font-circular-web"
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

      {/* Footer Bottom */}
      <div className="footer-bottom py-4 bg-gray-900 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} YourCompany. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
