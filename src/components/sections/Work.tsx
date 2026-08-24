"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

const projects = [
  {
    number: "01",
    category: "EXECUTIVE OPERATIONS",
    title: "Founder Operations System",
    description:
      "A centralized operating system for managing priorities, recurring tasks, meetings, follow-ups, and operational documentation.",
    tools: ["Notion", "Google Calendar", "Gmail"],
    metric: "Operations system",
  },
  {
    number: "02",
    category: "CLIENT EXPERIENCE",
    title: "Client Onboarding Workflow",
    description:
      "A structured client onboarding process designed to move new clients from inquiry to active engagement without missed steps.",
    tools: ["Google Forms", "Calendly", "Notion"],
    metric: "Repeatable workflow",
  },
  {
    number: "03",
    category: "RESEARCH & DATA",
    title: "Research & Reporting System",
    description:
      "A repeatable research workflow that turns scattered information into organized data, useful insights, and decision-ready reports.",
    tools: ["Google Sheets", "Notion", "Google Docs"],
    metric: "Research system",
  },
  {
    number: "04",
    category: "CONTENT OPERATIONS",
    title: "Content & Social Media System",
    description:
      "A content operations workflow for planning ideas, coordinating production, managing approvals, scheduling content, and tracking performance.",
    tools: ["Notion", "Canva", "Google Drive"],
    metric: "Content workflow",
  },
  {
    number: "05",
    category: "BUSINESS OPERATIONS",
    title: "Digital Business Command Center",
    description:
      "A centralized business workspace bringing tasks, projects, clients, documents, research, and weekly priorities into one organized system.",
    tools: ["Notion", "Google Workspace", "ClickUp"],
    metric: "Business dashboard",
  },
];

export default function Work() {
  return (
    <section
      id="work"
      className="px-5 py-24 sm:px-8 lg:px-12 lg:py-32"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section heading */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-md font-medium text-[#7a3048]">
              Independent portfolio projects
            </p>

            <h2 className="mt-3 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
              Proof of how I <span className="text-[#7a3048]">think</span> and <span className="text-[#7a3048]">work</span>.
            </h2>

            <p className="mt-5 text-base leading-7 text-[#6f6b66] sm:text-lg">
              Practical systems and workflows designed to demonstrate how I
              approach virtual assistance, operations, research, coordination,
              and digital organization.
            </p>
          </div>

          <span className="text-sm text-[#aaa39c]">
            05 projects · 2026
          </span>
        </div>

        {/* Projects */}
        <div className="mt-14 space-y-5">
          {projects.map((project, index) => (
            <motion.article
              key={project.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.55,
                delay: index * 0.08,
              }}
              className="group cursor-pointer overflow-hidden rounded-4xl border border-[#ded9d2] bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5"
            >
              <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
                {/* Project visual */}
                <div className="relative min-h-70 overflow-hidden bg-[#7a3047] p-7 sm:p-10">
                  <div className="absolute right-7 top-7 text-xs text-[#aaa39c] sm:right-10 sm:top-10">
                    {project.number}
                  </div>

                  <div className="absolute inset-x-7 bottom-7 rounded-2xl border border-[#ded9d2] bg-white p-5 shadow-lg shadow-black/5 sm:inset-x-10 sm:bottom-10">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium text-[#6f6b66]">
                        {project.category}
                      </span>

                      <CheckCircle2
                        size={17}
                        className="text-[#7a3048]"
                      />
                    </div>

                    <div className="mt-5 space-y-3">
                      <div className="h-2 w-4/5 rounded-full bg-[#eeeae4]" />
                      <div className="h-2 w-3/5 rounded-full bg-[#eeeae4]" />
                      <div className="h-2 w-2/5 rounded-full bg-[#d9a9b7]" />
                    </div>

                    <div className="mt-5 flex items-center justify-between border-t border-[#eeeae4] pt-4">
                      <span className="text-xs text-[#6f6b66]">
                        {project.metric}
                      </span>

                      <span className="text-xs font-medium text-[#7a3048]">
                        Portfolio
                      </span>
                    </div>
                  </div>
                </div>

                {/* Project information */}
                <div className="flex flex-col justify-between p-7 sm:p-10">
                  <div>
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-xs font-medium tracking-[0.12em] text-[#7a3048]">
                        {project.category}
                      </span>

                      <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#ded9d2] transition-all duration-300 group-hover:border-[#7a3048] group-hover:bg-[#7a3048] group-hover:text-white">
                        <ArrowUpRight
                          size={17}
                          className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        />
                      </div>
                    </div>

                    <h3 className="mt-7 text-2xl font-semibold tracking-[-0.03em] sm:text-3xl">
                      {project.title}
                    </h3>

                    <p className="mt-4 max-w-lg text-sm leading-7 text-[#6f6b66]">
                      {project.description}
                    </p>
                  </div>

                  <div className="mt-10 flex flex-wrap gap-2">
                    {project.tools.map((tool) => (
                      <span
                        key={tool}
                        className="rounded-full border border-[#ded9d2] bg-[#f8f7f4] px-3 py-1.5 text-xs text-[#6f6b66]"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}