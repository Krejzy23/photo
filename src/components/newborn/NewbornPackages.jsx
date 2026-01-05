import React from "react";
import clsx from "clsx";

const packages = [
  {
    title: "Mini Newborn",
    subtitle: "Simple & timeless",
    priceNote: "Perfect first keepsake",
    features: [
      "Up to 1 hour studio session",
      "1 setup (neutral tones)",
      "8 professionally edited photos",
      "Online private gallery",
      "Baby-led & safe posing",
    ],
  },
  {
    title: "Signature Newborn",
    subtitle: "Most popular",
    highlight: true,
    priceNote: "Relaxed & complete experience",
    features: [
      "2–3 hours relaxed session",
      "2–3 styled setups",
      "20 edited photos",
      "Parents & siblings included",
      "Online gallery + print-ready files",
    ],
  },
  {
    title: "Full Experience",
    subtitle: "No compromises",
    priceNote: "A complete newborn story",
    features: [
      "No time limit – baby sets the pace",
      "Multiple setups & styling",
      "30+ edited photos",
      "Family & detail shots",
      "Luxury keepsake option",
    ],
  },
];

const NewbornPackages = () => {
  return (
    <section className="relative w-full bg-[#faf9f7] py-32 px-6">
      {/* Section heading */}
      <div className="mb-20 text-center">
        <p className="mb-3 text-xs uppercase tracking-widest text-black/50">
          Newborn Photography Packages
        </p>
        <h2 className="special-font text-5xl md:text-6xl text-black">
          Gentle. Safe. Timeless.
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-sm text-black/60">
          Every session is calm, unhurried and fully adapted to your baby’s
          needs.
        </p>
      </div>

      {/* Cards */}
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-3">
        {packages.map((pkg, i) => (
          <div
            key={i}
            className={clsx(
              "group relative rounded-3xl border border-black/5 bg-white p-10 transition-all duration-300",
              "hover:-translate-y-1 hover:shadow-xl",
              pkg.highlight &&
                "bg-[#f3f1ee] shadow-2xl scale-[1.02]"
            )}
          >
            {pkg.highlight && (
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-black px-4 py-1 text-xs text-white">
                Most popular
              </span>
            )}

            <h3 className="special-font text-3xl text-black">
              {pkg.title}
            </h3>
            <p className="mt-2 text-xs uppercase tracking-wide text-black/50">
              {pkg.subtitle}
            </p>

            <p className="mt-4 text-sm text-black/60">
              {pkg.priceNote}
            </p>

            <ul className="mt-8 space-y-3 text-sm text-black/80">
              {pkg.features.map((f, idx) => (
                <li key={idx} className="flex gap-2">
                  <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-black/40" />
                  {f}
                </li>
              ))}
            </ul>

            <button
              className={clsx(
                "mt-10 w-full rounded-full py-3 text-sm transition",
                pkg.highlight
                  ? "bg-black text-white hover:bg-black/90"
                  : "border border-black/10 hover:bg-black hover:text-white"
              )}
            >
              Request session
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewbornPackages;
