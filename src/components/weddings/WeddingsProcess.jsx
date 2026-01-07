import React from "react";
import { FiMail, FiCalendar, FiCamera, FiImage } from "react-icons/fi";

const weddingSteps = [
  {
    title: "Contact & consultation",
    description:
      "We start with a friendly conversation to understand your vision, story, and expectations.",
    icon: <FiMail />,
  },
  {
    title: "Booking & planning",
    description:
      "Once booked, we plan the timeline, key moments, and all important details together.",
    icon: <FiCalendar />,
  },
  {
    title: "Wedding day",
    description:
      "I capture your day naturally, focusing on emotions, moments, and atmosphere.",
    icon: <FiCamera />,
  },
  {
    title: "Delivery & gallery",
    description:
      "Your edited photos are delivered in a private online gallery, ready to share.",
    icon: <FiImage />,
  },
];

const WeddingsProcess = () => {
  return (
    <section className="bg-violet-50 py-32">
      <div className="container bg-white mx-auto p-10 ">

        {/* Header */}
        <div className="mb-20 text-center">
          <p className="font-general text-sm uppercase text-black/60">
            #The process
          </p>
          <h2 className="font-bold font-circular-web uppercase mt-4 text-4xl md:text-6xl text-black">
            How it works
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-black/70">
            A simple and transparent process designed to make you feel calm and confident.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative flex flex-col gap-16 md:flex-row md:gap-0">

          {/* Line */}
          <div className="absolute left-6 top-0 h-full w-px bg-black/10 md:left-0 md:top-1/2 md:h-px md:w-full md:-mt-5" />

          {weddingSteps.map((step, index) => (
            <div
              key={index}
              className="relative z-10 flex flex-col items-start md:w-1/4 md:items-center"
            >
              {/* Icon */}
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-black bg-white text-2xl text-black">
                {step.icon}
              </div>

              {/* Content */}
              <div className="mt-6 max-w-xs px-10 text-left md:text-center">
                <h3 className="text-lg font-semibold text-black">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm text-black/70">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WeddingsProcess;
