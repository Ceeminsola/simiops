"use client";

import { motion } from "framer-motion";
import {
  MessageCircle,
  Search,
  Settings2,
  CheckCircle2,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Understand",
    description:
      "I start by understanding your priorities, tools, workflows, communication style, and the outcomes you need.",
  },
  {
    number: "02",
    icon: Search,
    title: "Organize",
    description:
      "I identify what is taking your time, what can be streamlined, and where tasks or information are getting lost.",
  },
  {
    number: "03",
    icon: Settings2,
    title: "Execute",
    description:
      "I take ownership of the agreed tasks, keep systems updated, communicate clearly, and make sure things keep moving.",
  },
  {
    number: "04",
    icon: CheckCircle2,
    title: "Improve",
    description:
      "I document what works, spot recurring friction, and continuously look for ways to make the workflow more efficient.",
  },
];

export default function HowIWork() {
  return (
    <section className="bg-[#171717] px-5 py-24 text-white sm:px-8 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-sm font-medium text-[#d9a9b7]">How I work</p>

            <h2 className="mt-3 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
              Support that feels like an extension of your team.
            </h2>

            <p className="mt-5 max-w-md text-base leading-7 text-white/60">
              Good support isn't just about completing tasks. It's about
              understanding how the work fits together and making your life
              easier in the process.
            </p>
          </div>

          <div className="grid gap-px overflow-hidden rounded-4xl border border-white/10 bg-white/10 sm:grid-cols-2">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.article
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  className="group bg-[#171717] p-7 transition-colors duration-300 hover:bg-white/4 sm:p-8"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/4 text-[#d9a9b7]">
                      <Icon size={19} strokeWidth={1.7} />
                    </div>

                    <span className="text-xs text-white/30">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="mt-8 text-xl font-semibold">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-white/55">
                    {step.description}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}