import React, { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import { weddingFaqs } from "../../constants";

const WeddingsFAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="bg-violet-50 py-32">
      <div className="container mx-auto px-5 md:px-10">

        {/* Header */}
        <div className="mb-20 text-center">
          <p className="font-general text-sm uppercase text-black/60">
            #FAQ
          </p>
          <h2 className="font-bold font-circular-web mt-4 text-4xl md:text-6xl text-black uppercase">
            Common questions
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-black/70">
            Everything you need to know before your wedding day.
          </p>
        </div>

        {/* FAQ items */}
        <div className="mx-auto max-w-3xl divide-y divide-black/10">
          {weddingFaqs.map((faq, index) => {
            const isOpen = activeIndex === index;

            return (
              <div key={index} className="py-6">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center justify-between text-left"
                >
                  <h3 className="text-lg font-medium text-black">
                    {faq.question}
                  </h3>
                  <span className="text-xl text-black">
                    {isOpen ? <FiMinus /> : <FiPlus />}
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100 mt-4"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden text-black/70 text-sm">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default WeddingsFAQ;
