const Footer = () => {
  const footerColumns = [
    {
      title: "Explore",
      links: [
        { label: "Home", href: "#" },
        { label: "About Us", href: "#" },
        { label: "Services", href: "#" },
        { label: "Contacts", href: "#" },
      ],
    },
    {
      title: "Support",
      links: [
        { label: "Help Center", href: "#" },
        { label: "FAQs", href: "#" },
        { label: "Contact Us", href: "#" },
      ],
    },
    {
      title: "Services",
      links: [
        { label: "Web Design", href: "#" },
        { label: "Development", href: "#" },
        { label: "Marketing", href: "#" },
      ],
    },
    {
      title: "Follow Us",
      links: [
        { label: "Facebook", href: "#" },
        { label: "Twitter", href: "#" },
        { label: "Instagram", href: "#" },
      ],
    },
  ];

  return (
    <footer className="bg-gray-800 text-gray-200">
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

      {/* Footer Middle */}
      <div className="footer-middle py-10 px-10">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {footerColumns.map((column, index) => (
            <div key={index}>
              <h3 className="mb-4 text-lg font-semibold">{column.title}</h3>
              <ul>
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href={link.href} className="hover:underline">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
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
