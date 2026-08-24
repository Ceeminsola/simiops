import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SimiOps | Virtual Assistance & Technical Operations",
  description:
    "SimiOps provides virtual assistance, executive support, and technical operations services for founders and growing teams.",
  icons: {
    icon: "/simi2.PNG",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}