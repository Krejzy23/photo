import React from "react";
import { TiLocationArrow } from "react-icons/ti";
import Button from "../Button";
import { packages } from "../../constants";

const WeddingsPackages = () => {
  return (
    <section className="py-32 bg-violet-50">
      <div className="container mx-auto px-5 md:px-10">

        {/* Header */}
        <div className="mb-20 text-center">
          <p className="font-general text-sm uppercase text-black/60">
            #Wedding packages
          </p>
          <h2 className="font-bold font-circular-web mt-4 text-4xl md:text-6xl text-black">
            Simple, transparent packages
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-black/70">
            Choose the package that best fits your wedding day.
            Every package can be tailored to your needs.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-3 ">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`
                relative flex flex-col justify-between rounded-2xl border border-black/10 bg-white p-8
                transition-all duration-300 ease-out
                hover:-translate-y-[6px] hover:shadow-xl
                ${pkg.highlight ? "scale-[1.03] border-black" : ""}
              `}
            >
              {pkg.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-pink-100 px-4 py-1 text-xs uppercase text-black">
                  Most popular
                </span>
              )}

              <div>
                <h3 className="special-font text-3xl text-black">
                  {pkg.name}
                </h3>
                <p className="mt-2 text-sm text-black/60">
                  {pkg.priceNote}
                </p>

                <ul className="mt-6 space-y-3 text-black/80">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-black" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8">
                <Button
                  title="Request availability"
                  leftIcon={<TiLocationArrow />}
                  containerClass={`
                    w-full flex items-center justify-center gap-2
                    ${pkg.highlight ? "!bg-black text-white" : "!bg-black/10 text-black"}
                  `}
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WeddingsPackages;
