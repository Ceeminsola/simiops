"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Brain, CheckCircle2, Cpu, Sparkles } from "lucide-react";
import Image from "next/image";

const highlights = [
  "Software engineering background",
  "Strong technical problem-solving",
  "Comfortable across digital tools",
  "Systems and process oriented",
];

const strengths = [
  {
    icon: Cpu,
    title: "Technical Fluency",
    description:
      "I understand the digital tools behind modern businesses and can troubleshoot, adapt, and work comfortably across different systems.",
  },
  {
    icon: Brain,
    title: "Systems Thinking",
    description:
      "I don't just complete individual tasks. I look at how tasks connect and find practical ways to make recurring workflows clearer and more efficient.",
  },
  {
    icon: CheckCircle2,
    title: "Reliable Execution",
    description:
      "I take ownership of details, communicate clearly, stay organized, and follow work through to completion.",
  },
];

export default function About() {
  return (
    <section id="about" className="px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="relative mx-auto w-full max-w-md"
          >
            <div className="relative aspect-4/5 overflow-hidden rounded-4xl bg-[#eeeae4]">
              <Image
                src="/simi3.PNG"
                alt="Simisola working"
                fill
                sizes="(max-width: 1024px) 90vw, 420px"
                className="object-cover object-center"
              />
            </div>

            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-5 -right-4 flex items-center gap-2 rounded-full border border-[#ded9d2] bg-white px-4 py-3 text-xs font-medium shadow-lg shadow-black/5 sm:-right-7"
            >
              <Sparkles size={15} className="text-[#7a3048]" />
              Technical + organized
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <p className="text-md font-medium text-[#7a3048]">Meet SimiOps</p>

            <h2 className="mt-3 max-w-2xl text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
              I like turning <span className="text-[#7a3048]">messy work</span>{" "}
              into <span className="text-[#7a3048]">clear systems. </span>
            </h2>

            <div className="mt-4 max-w-xl space-y-2 text-base leading-7 text-[#6f6b66]">
              <p>
                I'm Simisola Olubodun, a Virtual Assistant and Technical
                Operations professional with a software engineering background.
                I help founders and growing teams stay organized, keep projects
                moving, and turn scattered tasks into clear, manageable systems.
              </p>

              <p>
                My approach is shaped by years of working with technology,
                digital products, and complex workflows. I don't just learn a
                tool and follow instructions. I understand how systems connect,
                how to troubleshoot when something breaks, and how to find
                practical ways to make recurring work more efficient.
              </p>

              <p>
                Through SimiOps, I bring that technical mindset into virtual
                assistance and operations support, handling the details,
                coordination, research, documentation, and digital workflows
                that keep a business running smoothly. The goal is simple: fewer
                things for you to chase, clearer systems for your team, and more
                time to focus on the work that actually moves your business
                forward.
              </p>
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {highlights.map((highlight) => (
                <div
                  key={highlight}
                  className="flex items-center gap-3 rounded-2xl border border-[#ded9d2] bg-white px-4 py-3"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#d9a9b7]/30">
                    <span className="h-2 w-2 rounded-full bg-[#7a3048]" />
                  </span>

                  <span className="text-sm font-medium">{highlight}</span>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="group mt-9 inline-flex items-center gap-2 text-sm font-medium text-[#171717]"
            >
              Let's work together
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </motion.div>
        </div>

        {/* Positioning statement */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="glow-gradient mt-24 overflow-hidden rounded-4xl p-8 text-white sm:p-10 lg:mt-32 lg:p-14"
        >
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-sm font-medium text-[#d9a9b7]">
                The SimiOps approach
              </p>

              <h3 className="mt-3 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                Not just task support.
                <span className="block text-[#d9a9b7]">Systems support.</span>
              </h3>
            </div>

            <div>
              <p className="text-base leading-7 text-white/65 sm:text-lg">
                I bring a software engineer&apos;s problem-solving mindset to
                the everyday work that keeps a business moving.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-2 text-xs font-medium text-white/60">
                <span className="rounded-full border border-white/10 px-3 py-2">
                  Software Engineering
                </span>

                <span className="text-[#d9a9b7]">+</span>

                <span className="rounded-full border border-white/10 px-3 py-2">
                  Operations
                </span>

                <span className="text-[#d9a9b7]">+</span>

                <span className="rounded-full border border-white/10 px-3 py-2">
                  Digital Systems
                </span>

                <span className="text-[#d9a9b7]">=</span>

                <span className="rounded-full border border-[#d9a9b7]/30 bg-[#d9a9b7]/10 px-3 py-2 text-[#d9a9b7]">
                  SimiOps
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Strengths */}
        <div className="mt-20 lg:mt-24">
          <div className="max-w-xl">
            <p className="text-sm font-medium text-[#7a3048]">Why SimiOps</p>

            <h3 className="mt-3 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
              A <span className="text-[#7a3048]"> technical </span> approach to everyday <span className="text-[#7a3048]">business support.</span>
            </h3>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {strengths.map((strength, index) => {
              const Icon = strength.icon;

              return (
                <motion.div
                  key={strength.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  className="group rounded-4xl border border-[#7a3048] bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/5"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#d9a9b7]/20 text-[#7a3048]">
                    <Icon size={20} strokeWidth={1.7} />
                  </div>

                  <h4 className="mt-7 text-xl font-semibold tracking-tight">
                    {strength.title}
                  </h4>

                  <p className="mt-3 text-sm leading-6 text-[#6f6b66]">
                    {strength.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
