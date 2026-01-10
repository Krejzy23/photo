import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedTitle from "../components/AnimatedTitle";
import Button from "../components/Button";

gsap.registerPlugin(ScrollTrigger);

const ProductPhotography = () => {
  useEffect(() => {
    gsap.fromTo(
      ".product-img",
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".product-grid",
          start: "top 70%",
        },
      }
    );
  }, []);

  return (
    <main className="bg-black text-white">
      {/* HERO */}
      {/* HERO VIDEO */}
      <section className="relative h-dvh w-full overflow-hidden">
        {/* VIDEO */}
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src="/videos/product-hero.mp4"
          autoPlay
          muted
          loop
          playsInline
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/10" />

        {/* CONTENT */}
        <div className="relative mt-20 z-10 flex h-full flex-col px-6 md:px-20">
          <h1 className="special-font mt-16 hero-heading-product text-blue-100">
            Visu<b>a</b>ls th<b>a</b>t
            <br />
            sell yo<b>u</b>r
            <br />
            pr<b>o</b>duct
          </h1>

          <p className="mt-8 max-w-md text-white/70 leading-relaxed">
            Clean, detailed and conversion-focused product visuals designed for
            brands that care about presentation.
          </p>

          <Button title="Get a quote" containerClass="mt-10 w-fit" />
        </div>
      </section>

      {/* GALLERY */}
      <section className="px-6 py-32 md:px-20">
        <AnimatedTitle
          title="Designed for attention"
          containerClass="mb-16 text-white"
        />
        <p className="mt-4 text-sm mb-2 uppercase tracking-widest text-white/40">
          #product photography
        </p>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
          {/* MAIN */}
          <div className="md:col-span-12 overflow-hidden md:h-[70vh] rounded-2xl">
            <img
              src="/img/products/product-main.jpg"
              alt="Product photography"
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>

          {/* SQUARE 1 */}
          <div className="md:col-span-6 overflow-hidden rounded-2xl">
            <img
              src="/img/products/product-detail-1.webp"
              alt="Product detail"
              className="h-full w-full md:h-[60vh] object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>

          {/* SQUARE 2 */}
          <div className="md:col-span-6 overflow-hidden rounded-2xl">
            <img
              src="/img/products/product-detail-2.webp"
              alt="Product detail"
              className="h-full w-full md:h-[60vh] object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>

          {/* VERTICAL */}
          <div className="md:col-span-6 md:row-span-2 overflow-hidden rounded-2xl aspect-[3/4] md:aspect-auto">
            <img
              src="/img/products/product-detail-3.jpg"
              alt="Product detail"
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>

          {/* SQUARE 3 */}
          <div className="md:col-span-6 aspect-square overflow-hidden rounded-2xl">
            <img
              src="/img/products/product-detail-4.jpg"
              alt="Product detail"
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>

          <div
            className="hidden md:flex font-zentry special-font whitespace-nowrap font-bold uppercase text-white opacity-[0.1]"
            style={{ fontSize: "clamp(4rem, 20vw, 16rem)" }}
          >
            DET<b>A</b>IL
          </div>

          {/* HORIZONTAL */}
          <div className="md:col-span-12 overflow-hidden rounded-2xl">
            <img
              src="/img/products/product-detail-5.jpg"
              alt="Product detail"
              className="h-full w-full object-cover md:h-[70vh] transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* INFO STRIP */}
      <section className="border-t border-white/10 px-6 py-20 md:px-20">
        <div className="flex flex-col md:flex-row gap-12 md:gap-32">
          <div className="max-w-sm">
            <h3 className="text-xl font-circular-web">What we focus on</h3>
            <p className="mt-4 text-white/60">
              Lighting, composition and product storytelling designed for
              e-commerce, branding and campaigns.
            </p>
          </div>

          <ul className="space-y-3 text-white/60 uppercase tracking-wider text-sm">
            <li>• E-commerce</li>
            <li>• Advertising</li>
            <li>• Branding</li>
            <li>• Social media</li>
          </ul>
        </div>
      </section>

      {/* BRANDS */}
      <section className="px-6 py-24 md:px-20">
        <div className="mx-auto max-w-7xl text-center">
          <p className="mb-10 text-sm uppercase tracking-widest text-white/50">
            Selected brands & collaborations
          </p>

          <div className="grid grid-cols-2 gap-6 md:grid-cols-6 items-center">
            {[
              "FOOD",
              "COSMETICS",
              "FASHION",
              "EDITORIAL",
              "DRINKS",
              "TECH",
            ].map((brand) => (
              <div
                key={brand}
                className="flex justify-center text-white/40 font-semibold transition-opacity duration-300 hover:text-white/70 font-serif tracking-[0.2em]"
              >
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="px-16 py-24 md:px-20">
        <div className="mx-auto max-w-6xl">
          <p className="mb-12 text-sm uppercase tracking-widest text-white/50">
            #How I shoot products
          </p>

          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            {[
              "Planning & concept",
              "Lighting & styling",
              "Shooting",
              "Retouch & delivery",
            ].map((step, i) => (
              <div key={step} className="flex items-center gap-4">
                {/* line */}
                <span className="block h-px w-8 bg-white/20" />

                {/* text */}
                <span className="text-white/80 tracking-wide">{step}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProductPhotography;
