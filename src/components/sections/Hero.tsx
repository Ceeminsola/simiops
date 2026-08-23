"use client";

import { motion } from "framer-motion";
import {
  ArrowDown,
  CalendarCheck,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import Button from "../ui/Button";

const floatingItems = [
  {
    icon: CalendarCheck,
    label: "Meeting confirmed",
    className: "left-0 top-16 sm:-left-8 sm:top-24",
  },
  {
    icon: CheckCircle2,
    label: "Task completed",
    className: "right-0 top-40 sm:-right-8 sm:top-48",
  },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden px-5 pb-16 pt-32 sm:px-8 lg:px-12">
      <div className="pointer-events-none absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-[#d9a9b7]/20 blur-3xl" />

      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative z-10"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#ded9d2] bg-white/70 px-3 py-1.5 text-xs font-medium text-[#6f6b66] backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-[#7a3048]" />
            SimiOps · Virtual Assistance + Operations
          </div>

          <h1 className="max-w-3xl text-5xl font-semibold leading-[0.98] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
            Less on your plate.
            <span className="mt-2 block text-[#7a3048]">
              More getting done.
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-7 text-[#6f6b66] sm:text-lg">
            I help founders and growing teams stay organized, move faster,
            and keep the details under control through thoughtful virtual
            assistance and technical operations support.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="#work">View My Work</Button>
            <Button href="#contact" variant="secondary">
              Work With Me
            </Button>
          </div>

          <div className="mt-12 flex items-center gap-3 text-sm text-[#6f6b66]">
            <Sparkles size={17} className="text-[#7a3048]" />
            <span>Organized. Technical. Human.</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="relative aspect-4/5 overflow-hidden rounded-4xl bg-[#eeeae4]">
            <Image
                src="/simi2.PNG"
                alt="Simisola, founder of SimiOps"
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 420px"
                className="object-cover object-center"
            />

            <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent" />
            </div>
          {floatingItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: index === 0 ? -12 : 12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.7 + index * 0.15,
                }}
                className={`absolute ${item.className} flex items-center gap-2 rounded-2xl border border-[#ded9d2] bg-white px-3 py-2.5 text-xs font-medium shadow-lg shadow-black/5`}
              >
                <Icon size={15} className="text-[#7a3048]" />
                {item.label}
              </motion.div>
            );
          })}

          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -bottom-5 -left-4 flex items-center gap-2 rounded-full border border-[#ded9d2] bg-white px-4 py-2.5 text-xs font-medium shadow-lg shadow-black/5"
          >
            <span className="h-2 w-2 rounded-full bg-green-500" />
            Available for remote work
          </motion.div>
        </motion.div>
      </div>

      <motion.a
        href="#services"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-xs text-[#6f6b66] sm:flex"
      >
        Scroll to explore
        <ArrowDown size={14} />
      </motion.a>
    </section>
  );
}