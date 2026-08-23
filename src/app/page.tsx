import Navbar from "@/components/layouts/Navbar";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <Services />

        <section id="work" className="min-h-screen px-5 py-24">
          <div className="mx-auto max-w-6xl">
            <p className="text-sm text-[#7a3048]">Selected Work</p>

            <h2 className="mt-3 text-4xl font-semibold tracking-tight">
              Systems that make work easier.
            </h2>
          </div>
        </section>

        <section id="about" className="min-h-screen px-5 py-24">
          <div className="mx-auto max-w-6xl">
            <p className="text-sm text-[#7a3048]">About</p>

            <h2 className="mt-3 text-4xl font-semibold tracking-tight">
              The person behind SimiOps.
            </h2>
          </div>
        </section>

        <section id="contact" className="min-h-screen px-5 py-24">
          <div className="mx-auto max-w-6xl">
            <p className="text-sm text-[#7a3048]">Contact</p>

            <h2 className="mt-3 text-4xl font-semibold tracking-tight">
              Let&apos;s make your workload lighter.
            </h2>
          </div>
        </section>
      </main>
    </>
  );
}