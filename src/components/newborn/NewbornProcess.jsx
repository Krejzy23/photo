import React, { useRef } from "react";
import {
  CalendarDays,
  HeartHandshake,
  Feather,
  Users,
  Image,
} from "lucide-react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

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
    text: "Every pose is slow, natural and guided by your baby’s comfort.",
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
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      // HEADER
      gsap.from(".process-header > *", {
        opacity: 0,
        y: 24,
        duration: 1,
        ease: "power2.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: ".process-header",
          start: "top 70%",
        },
      });

      
      // CARDS
      gsap.utils.toArray(".process-card").forEach((card) => {
        // REVEAL
        gsap.fromTo(
          card,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
            immediateRender: false,
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
            },
          }
        );
        gsap.to(card, {
          yPercent: -5,
          ease: "none",
          scrollTrigger: {
            trigger: card,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });
    },
    { scope: sectionRef }
  );
  

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-white py-32 px-6"
    >
      {/* Header */}
      <div className="process-header mb-24 text-center">
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
      <div className="process-timeline relative mx-auto max-w-5xl">
        {/* Vertical line (desktop only) */}
        <div className="absolute left-1/2 top-0 hidden md:block h-full w-px -translate-x-1/2 bg-gradient-to-b from-black/0 via-black/20 to-black/0" />

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
                <div className="w-full process-card md:w-1/2 px-6">
                  <div className="rounded-3xl bg-white/80 backdrop-blur-sm border border-black/5 p-8 shadow-[0_20px_60px_rgba(0,0,0,0.06)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_80px_rgba(0,0,0,0.08)]">
                    <div className="mb-4 flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-black/5 ring-1 ring-black/5">
                        <Icon className="h-5 w-5 text-black/60" />
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

                {/* Dot (desktop only) */}
                <div className="relative hidden md:flex w-0 items-center justify-center">
                  <span className="z-10 h-5 w-5 rounded-full bg-black shadow-[0_0_0_6px_rgba(0,0,0,0.04)]" />
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
