"use client";

import { ArrowUpRight, Download } from "lucide-react";

const navigation = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Endorsements", href: "#endorsements" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#ded9d2] bg-white px-5 pb-8 pt-16 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">
        {/* Main footer */}
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
          {/* Brand */}
          <div>
            <a
              href="#top"
              className="inline-block text-2xl font-semibold tracking-[-0.04em]"
            >
              Simi<span className="text-[#7a3048]">Ops</span>
            </a>

            <p className="mt-4 max-w-sm text-sm leading-6 text-[#6f6b66]">
              Virtual assistance and technical operations support for founders
              and growing teams who want to work with more clarity and less
              chaos.
            </p>

            <a
              href="mailto:ceemin19@gmail.com"
              className="group mt-6 inline-flex items-center gap-1.5 text-sm "
            >
              <span className="font-medium text-[#7a3048]">ceemin19@gmail.com</span>
              <ArrowUpRight
                size={14}
                className="text-[#7a3048] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.12em] text-[#7a3048]">
              Navigate
            </p>

            <nav className="mt-5 flex flex-col items-start gap-3">
              {navigation.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm text-[#6f6b66] transition-colors duration-300 hover:text-[#7a3048]"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          {/* CV */}
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.12em] text-[#7a3048]">
              Credentials
            </p>

            <p className="mt-5 text-sm leading-6 text-[#6f6b66]">
              Want a closer look at my professional background?
            </p>

            <a
              href="/cv/Simisola-Olubodun-VA-Operations-CV.pdf"
              download
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#7a3048] px-4 py-2.5 text-sm font-medium text-white transition-transform duration-300 hover:-translate-y-0.5"
            >
              <Download size={15} />
              Download CV
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 flex flex-col justify-between gap-4 border-t border-[#ded9d2] pt-6 text-xs text-[#aaa39c] sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} SimiOps. All rights reserved.
          </p>

          <p>
            Built with intention.
          </p>
        </div>
      </div>
    </footer>
  );
}