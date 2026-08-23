"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import Button from "../ui/Button";

const navItems = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-[#7a3048]/30 bg-[#f8f7f4]/20 px-4 py-3 shadow-sm backdrop-blur-md sm:px-5">
        <Link
          href="/"
          className="text-lg font-semibold tracking-[-0.03em]"
        >
          Simi<span className="text-[#7a3048]">Ops</span>
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-[#6f6b66] transition-colors duration-200 hover:text-[#171717]"
            >
              {item.label}
            </Link>
          ))}

          <Button href="#contact">Let's Work</Button>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-[#ded9d2] md:hidden"
        >
          {open ? <X size={19} /> : <Menu size={19} />}
        </button>
      </nav>

      {open && (
        <div className="mx-4 mt-2 rounded-3xl border border-[#ded9d2] bg-white p-5 shadow-lg md:hidden">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium"
              >
                {item.label}
              </Link>
            ))}

            <Button href="#contact">Let's Work</Button>
          </div>
        </div>
      )}
    </header>
  );
}