import Navbar from "@/components/layouts/Navbar";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import HowWork from "@/components/sections/Howwork";
import Work from "@/components/sections/Work";
import About from "@/components/sections/About";
import Endorsements from "@/components/sections/Endorsements";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <Services />

        <HowWork />

        <Work />

        <About />

        <Endorsements />

        <Contact />
      </main>

      <Footer />
    </>
  );
}