"use client";

import { motion } from "framer-motion";
import {
  CalendarDays,
  ClipboardCheck,
  FileSearch,
  FolderKanban,
  Laptop,
  Sparkles,
  Workflow,
} from "lucide-react";

const services = [
  {
    number: "01",
    icon: CalendarDays,
    title: "Executive Support",
    description:
      "Calendar management, scheduling, inbox organization, meeting coordination, reminders, and day-to-day executive support.",
  },
  {
    number: "02",
    icon: Workflow,
    title: "Operations Support",
    description:
      "Keeping recurring tasks, workflows, processes, and moving pieces organized so nothing important falls through the cracks.",
  },
  {
    number: "03",
    icon: FolderKanban,
    title: "Project Coordination",
    description:
      "Task tracking, deadlines, project updates, documentation, and keeping teams aligned from kickoff to completion.",
  },
  {
    number: "04",
    icon: FileSearch,
    title: "Research & Data",
    description:
      "Web research, competitor research, data collection, spreadsheet organization, and turning scattered information into something useful.",
  },
  {
    number: "05",
    icon: ClipboardCheck,
    title: "Documentation & SOPs",
    description:
      "Creating clear documentation, checklists, workflows, and standard operating procedures that make work easier to repeat.",
  },
  {
    number: "06",
    icon: Laptop,
    title: "Technical Support",
    description:
      "Website updates, digital tools, troubleshooting, basic technical tasks, and the technology-heavy work that traditional VAs may not handle.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="px-5 py-4 sm:px-8 lg:px-12 lg:py-4"
    >
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
           <div className=" flex items-center gap-3 text-md font-medium text-[#7a3048]">
            <Sparkles size={17} className="text-[#7a3048]" />
            <span>What I can help with</span>
          </div>

          <h2 className="mt-3 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
            The work behind the <span className="mt-2 text-[#7a3048]"> work </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-[#6f6b66] sm:text-lg">
            From keeping calendars under control to organizing complex
            workflows, I handle the details that keep businesses moving.
          </p>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-4xl border border-[#ded9d2] bg-[#ded9d2] sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.06,
                }}
                whileHover={{ y: -4 }}
                className="group bg-[#7a3048] p-7 transition-colors duration-300 hover:bg-white sm:p-8"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-[#7a3048] shadow-sm">
                    <Icon size={20} strokeWidth={1.7} />
                  </div>

                  <span className="text-xs text-[#aaa39c]">
                    {service.number}
                  </span>
                </div>

                <h3 className="mt-8 text-xl font-semibold tracking-tight">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-white hover:text-[#171717] group-hover:text-[#171717]">
                  {service.description}
                </p>

                <div className="mt-7 h-px w-8 bg-[#7a3048] transition-all duration-300 group-hover:w-16" />
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}