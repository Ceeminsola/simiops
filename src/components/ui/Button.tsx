import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}

export default function Button({
  href,
  children,
  variant = "primary",
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition-all duration-300 ${
        variant === "primary"
          ? "bg-white hover:-translate-y-0.5 hover:text-white hover:bg-[#7a3048] border border-[#7a3048]"
          : "border border-[#ded9d2] bg-white text-[#171717] hover:-translate-y-0.5 hover:border-[#7a3048] hover:text-[#7a3048]"
      }`}
    >
      {children}

      <ArrowUpRight
        size={16}
        strokeWidth={1.8}
        className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      />
    </Link>
  );
}