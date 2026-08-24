"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Download,
  Mail,
  MapPin,
  Phone
} from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="px-5 py-24 sm:px-8 lg:px-12 lg:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="overflow-hidden rounded-4xl bg-[#7a3048] text-white"
        >
          <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
            {/* Main CTA */}
            <div className="p-8 sm:p-12 lg:p-16">
              <p className="text-sm font-medium text-[#d9a9b7]">
                Let&apos;s work together
              </p>

              <h2 className="mt-4 max-w-2xl text-4xl font-semibold tracking-tighter sm:text-5xl lg:text-6xl">
                Ready to make your workload lighter?
              </h2>

              <p className="mt-6 max-w-xl text-base leading-7 text-white/60 sm:text-lg">
                Whether you need ongoing virtual assistance, operational
                support, research, coordination, or help getting your digital
                systems organized, I&apos;d love to hear what you&apos;re working on.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href="mailto:ceemin19@gmail.com"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3.5 text-sm transition-transform duration-300 hover:-translate-y-0.5"
                >
                  <span className="text-[#7a3048] font-medium">Get in touch</span>
                  <ArrowUpRight
                    size={16}
                    className="text-[#7a3048] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>

                <a
                  href="/cv/Simisola Olubodun VA CV 2026.pdf"
                  download
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-5 py-3.5 text-sm font-medium text-white transition-colors duration-300 hover:bg-white/10"
                >
                  <Download size={16} />
                  Download CV
                </a>
              </div>
            </div>

            {/* Contact information */}
            <div className="border-t border-white/10 bg-white/3 p-8 sm:p-12 lg:border-l lg:border-t-0 lg:p-16">
              <p className="text-sm text-white/40">
                Contact details
              </p>

              

              <div className="mt-8 space-y-6">
                <a
                  href="mailto:ceemin19@gmail.com"
                  className="group flex items-start gap-4"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10">
                    <Mail size={17} className="text-[#d9a9b7]" />
                  </div>

                  <div>
                    <p className="text-xs text-white/40">
                      Email
                    </p>

                    <p className="mt-1 text-sm font-medium text-white transition-colors group-hover:text-[#d9a9b7]">
                      ceemin19@gmail.com
                    </p>
                  </div>
                </a>

                <a
                href="tel:+2348120827393"
                className="group flex items-start gap-4"
                >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10">
                    <Phone size={17} className="text-[#d9a9b7]" />
                </div>

                <div>
                    <p className="text-xs text-white/40">
                    Phone
                    </p>

                    <p className="mt-1 text-sm font-medium text-white transition-colors group-hover:text-[#d9a9b7]">
                    +234 812 082 7393
                    </p>
                </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10">
                    <MapPin size={17} className="text-[#d9a9b7]" />
                  </div>

                  <div>
                    <p className="text-xs text-white/40">
                      Based in
                    </p>

                    <p className="mt-1 text-sm font-medium">
                      Lagos, Nigeria
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 border-t border-white/10 pt-8">
                <p className="text-xs leading-5 text-white/35">
                  Available for remote opportunities and flexible
                  virtual assistance and operations support roles.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}