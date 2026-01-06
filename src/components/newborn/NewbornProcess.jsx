import React from "react";
import {
  CalendarDays,
  HeartHandshake,
  Feather,
  Users,
  Image,
} from "lucide-react";

const steps = [
  {
    icon: CalendarDays,
    title: "Before the session",
    text: "We plan everything in advance so you can arrive relaxed and confident.",
  },
  {
    icon: HeartHandshake,
    title: "Arrival & settling",
    text: "Time to feed, cuddle and let your baby feel safe and calm.",
  },
  {
    icon: Feather,
    title: "Gentle posing",
    text: "All poses are natural, safe and fully guided by your baby’s comfort.",
  },
  {
    icon: Users,
    title: "Family moments",
    text: "Parents and siblings are always welcome to join the session.",
  },
  {
    icon: Image,
    title: "Editing & delivery",
    text: "Carefully retouched images delivered in a private online gallery.",
  },
];

const NewbornProcess = () => {
  return (
    <section className="relative w-full bg-white py-32 px-6">
      {/* Header */}
      <div className="mb-24 text-center">
        <p className="mb-3 text-xs uppercase tracking-widest text-black/50">
          How it works
        </p>
        <h2 className="special-font text-5xl md:text-6xl text-black">
          Calm. Safe. Slow.
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-sm text-black/60">
          Your baby leads the session. There is no rush — only patience and care.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative mx-auto max-w-5xl">
        <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-black/10" />

        <div className="space-y-20">
          {steps.map((step, i) => {
            const Icon = step.icon;
            const isLeft = i % 2 === 0;

            return (
              <div
                key={i}
                className={`relative flex flex-col md:flex-row ${
                  isLeft ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Content */}
                <div className="w-full md:w-1/2 px-6">
                  <div className="rounded-3xl bg-[#faf9f7] p-8">
                    <div className="mb-4 flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black/5">
                        <Icon className="h-5 w-5 text-black/70" />
                      </div>
                      <p className="text-xs uppercase tracking-widest text-black/40">
                        Step {i + 1}
                      </p>
                    </div>

                    <h3 className="special-font text-2xl text-black">
                      {step.title}
                    </h3>
                    <p className="mt-4 text-sm text-black/70">
                      {step.text}
                    </p>
                  </div>
                </div>

                {/* Dot */}
                <div className="relative flex w-full md:w-0 items-center justify-center">
                  <span className="z-10 h-4 w-4 rounded-full bg-black" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default NewbornProcess;
