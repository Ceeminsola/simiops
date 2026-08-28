"use client";

import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Quote,
} from "lucide-react";
import { useState } from "react";

const endorsements = [
  {
    quote:
      "Simi is hardworking, reliable, and very easy to work with. She takes ownership of her responsibilities and is always willing to support the team. One thing I particularly appreciate about working with her is that she is willing to step in and fill the gap when a colleague is unavailable or needs support, and she does so without making it feel like a burden. She is also a fast learner and communicates well.",
    name: "Stephanie Eke",
    role: "Frontend Developer/ Colleague at iRES",
    initials: "SE",
  },
  {
    quote:
      "Working with Simisola has always been easy because she assimilates quickly, pays attention to details, and can be trusted to take a task from an idea through to completion. She is a delight to work with and always ready to deliver exactly how you have envisioned your idea. She has an interesting approach to breaking things down and she talks nicely also. I would recommend her to anyone looking for a reliable and competent professional.",
    name: "Michael Obinna",
    role: "CEO at MarcStefan Foods/Client",
    initials: "MO",
  },
  {
    quote:
      "Simisola brings a strong problem-solving mindset to her work. She is organized, resourceful, and comfortable figuring things out independently when faced with something new. I have always been intrigued by her ability to bring raw visions to life and carefully breaking down structures and workflows. She is indeed a great asset to any team.",
    name: "Usman Bakare",
    role: "CEO/Founder at iRES",
    initials: "UB",
  },
  {
    quote:
      "Simisola communicates exceptionally well and has an excellent work attitude. She is calm, approachable, a great multitasker, and open to feedback. She has a strong work ethic, works well under pressure, and is always willing to find solutions and improve.",
    name: "Mojisola Aramide",
    role: "Former Colleague at Aparte.ng",
    initials: "MA",
  },
  {
    quote:
      "She has a natural ability to bring structure to complex situations. Simi asks the right questions, learns quickly, and follows through. She has a thick skin for working under pressure also. I call it a superpower because it is rare to find someone who can handle pressure and still be calm, composed, and professional.",
    name: "Gracious Onyeahialam",
    role: "Cybersecurity Analyst | Colleague Collaborator on Outreachy",
    initials: "GO",
  },
  {
    quote:
      "Simi is someone i would confidently recommend. She is hardworking reliable, and takes her responsiblities seriously. I've found her to be someone who is willing to learn, take initiative, and get the job done properly. Beyond her technical/professional abilities, she has a good attitude, communicates well, and is respectful and collaborative with the people she works with. I believe she would be a great addition to any team or organization",
    name: "Daniel Ajayi",
    role: "Senior Software Engineer | Colleague/Teammate",
    initials: "DA",
  },
  {
    quote:
      "Miss Simi's attention to detail and willingness to take ownership made working with her incredibly smooth. She consistently brought a thoughtful approach to her work. She is a great team player and a pleasure to work with. She is also willing to step in and teach others when needed, which is a great quality in a teammate. I would highly recommend her to anyone looking for a reliable and skilled professional.",
    name: "Aisha Arinola",
    role: "Product Designer | Teammate",
    initials: "AA",
  },
  {
    quote:
      "I would describe Simisola as someone who can be trusted with a problem and given the space to figure out the best way forward. She is able to break down complex problems into manageable pieces. She is also very organized and detail-oriented, which makes her a great asset to any team. I would highly recommend her to anyone any day anytime",
    name: "Damilare Akinyemi",
    role: "Software Engineer | Colleague/Teammate",
    initials: "DA",
  },
];

const ITEMS_PER_PAGE = 3;

export default function Endorsements() {
  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = Math.ceil(
    endorsements.length / ITEMS_PER_PAGE
  );

  const visibleEndorsements = endorsements.slice(
    currentPage * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE + ITEMS_PER_PAGE
  );

  const nextPage = () => {
    setCurrentPage((current) =>
      current === totalPages - 1 ? 0 : current + 1
    );
  };

  const previousPage = () => {
    setCurrentPage((current) =>
      current === 0 ? totalPages - 1 : current - 1
    );
  };

  return (
    <section
      id="endorsements"
      className="bg-[#f3f0eb] px-5 py-24 sm:px-8 lg:px-12 lg:py-32"
    >
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-[#7a3048]">
              Professional endorsements
            </p>

            <h2 className="mt-3 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
              <span className="text-[#7a3048]">Good work</span>  tends to leave a <span className="text-[#7a3048]">trail</span>.
            </h2>

            <p className="mt-5 text-base leading-7 text-[#6f6b66] sm:text-lg">
              A few words from people I&apos;ve had the opportunity to work
              with across professional and technical environments.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={previousPage}
              aria-label="Previous endorsements"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#d8d1ca] bg-white transition-all duration-300 hover:bg-[#7a3048] hover:text-white"
            >
              <ArrowLeft size={17} />
            </button>

            <button
              type="button"
              onClick={nextPage}
              aria-label="Next endorsements"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#d8d1ca] bg-white transition-all duration-300 hover:bg-[#7a3048] hover:text-white"
            >
              <ArrowRight size={17} />
            </button>
          </div>
        </div>

        {/* Cards */}
        <motion.div
          key={currentPage}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.35 }}
          className="mt-14 grid gap-5 md:grid-cols-3"
        >
          {visibleEndorsements.map((endorsement, index) => (
            <article
              key={`${currentPage}-${index}`}
              className="flex min-h-97.5 flex-col rounded-4xl border border-[#7a3048] bg-white p-7 sm:p-8"
            >
              {/* Quote icon */}
              <div className="flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#d9a9b7]/20 text-[#7a3048]">
                  <Quote size={19} />
                </div>

                <span className="text-xs text-[#aaa39c]">
                  {String(currentPage * 3 + index + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Quote */}
              <blockquote className="mt-7 flex-1 text-[15px] leading-7 text-[#4f4b47]">
                “{endorsement.quote}”
              </blockquote>

              {/* Person */}
              <div className="mt-8 flex items-center gap-3 border-t border-[#eeeae4] pt-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#171717] text-xs font-medium text-white">
                  {endorsement.initials}
                </div>

                <div>
                  <p className="text-sm font-semibold">
                    {endorsement.name}
                  </p>

                  <p className="mt-0.5 text-xs text-[#8c8781]">
                    {endorsement.role}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </motion.div>

        {/* Pagination */}
        <div className="mt-8 flex items-center justify-center gap-2">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setCurrentPage(index)}
              aria-label={`Show endorsements ${index + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentPage === index
                  ? "w-7 bg-[#7a3048]"
                  : "w-2 bg-[#cfc8c0]"
              }`}
            />
          ))}
        </div>

        <p className="mt-6 text-center text-xs text-[#8c8781]">
          Endorsements reflect professional collaborations and working
          relationships.
        </p>
      </div>
    </section>
  );
}