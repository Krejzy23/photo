import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { newbornFaqs } from "../../constants";

const NewbornFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="relative w-full bg-[#faf9f7] py-32 px-6">
      {/* Header */}
      <div className="mb-20 text-center">
        <p className="mb-3 text-xs uppercase tracking-widest text-black/50">
          Questions & answers
        </p>
        <h2 className="special-font text-5xl md:text-6xl text-black">
          Everything you need to know
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-sm text-black/60">
          If you still have questions, feel free to reach out anytime.
        </p>
      </div>

      {/* FAQ list */}
      <div className="mx-auto max-w-3xl space-y-4">
        {newbornFaqs.map((item, i) => {
          const isOpen = openIndex === i;

          return (
            <div
              key={i}
              className="overflow-hidden rounded-2xl bg-white shadow-sm transition"
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="flex w-full items-center justify-between px-6 py-5 text-left"
              >
                <span className="text-sm md:text-base text-black">
                  {item.q}
                </span>

                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black/5">
                  {isOpen ? (
                    <Minus className="h-4 w-4 text-black/60" />
                  ) : (
                    <Plus className="h-4 w-4 text-black/60" />
                  )}
                </span>
              </button>

              {isOpen && (
                <div className="px-6 pb-6 text-sm text-black/70 leading-relaxed">
                  {item.a}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default NewbornFAQ;
