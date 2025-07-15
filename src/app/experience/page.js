"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Experience() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Small scroll animation effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("opacity-100", entry.isIntersecting);
          entry.target.classList.toggle("translate-y-0", entry.isIntersecting);
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-900 via-fuchsia-800 to-orange-600 text-white">
      {/* Navbar */}
      <header className="flex justify-between items-center px-6 py-4 bg-black/40 backdrop-blur-md fixed w-full z-50 shadow-lg">
        <h1 className="text-2xl font-bold cursor-pointer hover:text-yellow-300 transition">
          <Link href="/">AB</Link>
        </h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-4 lg:gap-6 text-base lg:text-lg">
          {[
            { name: "Home", path: "/profile" },
            { name: "About", path: "/about" },
            { name: "Education", path: "/education" },
            { name: "Experience", path: "/experience" },
            { name: "Skills", path: "/skills" },
            { name: "Projects", path: "/projects" },
            { name: "Contact", path: "/contact" },
          ].map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className={`hover:text-yellow-400 transition cursor-pointer ${
                link.path === "/experience" ? "text-yellow-400 font-bold" : ""
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Hamburger */}
        <div
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 cursor-pointer space-y-1"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="block w-6 h-0.5 bg-white"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
        </div>
      </header>

      {/* Experience Timeline */}
      <section className="flex flex-col items-center justify-center min-h-screen text-center px-6 pt-28">
        <h1 className="text-5xl font-extrabold mb-12 text-yellow-300 drop-shadow-xl animate-pulse">
          💼 My Experience
        </h1>

        <div className="relative w-full max-w-4xl">
          {/* Vertical glowing timeline */}
          <div className="absolute left-1/2 transform -translate-x-1 bg-gradient-to-b from-yellow-400 via-pink-500 to-orange-500 w-1 h-full shadow-[0_0_30px_rgba(255,165,0,0.7)] rounded-full animate-pulse"></div>

          {/* Timeline steps */}
          {[
            {
              title: "Technical and Risk Operations - Intern",
              place: "PrimEra Medical Technologies, Madhapur",
              duration: "October 2024 - January 2025",
              desc: "Solved complex networking tasks and TryHackMe labs during my internship",
              skills: ["Networking", "Cryptography","VAPT","Kali Linux"],
            },
            {
              title: "Java Development - Intern",
              place: "Oasis Infobyte, Remote",
              duration: "March 2025 - April 2025",
              desc: "Built logic for various tasks during this internship.",
              skills: ["Java", "OOP", "DSA"],
            },
            {
              title: "Full Stack Web Developer - Intern",
              place: "Optifyx Technology, Remote",
              duration: "April 2025 - May 2025",
              desc: "Created web apps with HTML, CSS & JS fundamentals.",
              skills: ["HTML", "CSS", "JavaScript"],
            },
          ].map((step, index) => (
            <div
              key={index}
              className="relative mb-16 flex flex-col items-center text-center group fade-in opacity-0 translate-y-8 transition-all duration-700 ease-out"
            >
              {/* Glowing Dot */}
              <div className="w-7 h-7 bg-gradient-to-br from-yellow-300 to-orange-500 rounded-full border-4 border-purple-700 shadow-xl group-hover:scale-125 animate-pulse transition"></div>

              {/* Card */}
              <div className="bg-white/10 backdrop-blur-md border border-yellow-300 rounded-2xl shadow-2xl p-6 mt-4 w-full max-w-md group-hover:scale-105 group-hover:shadow-yellow-400/40 transition duration-500">
                <h3 className="text-2xl font-bold mb-1 text-yellow-300 drop-shadow-md">
                  {step.title}
                </h3>
                <p className="text-gray-100 mb-1">{step.place}</p>
                <span className="block text-yellow-200 font-medium mb-2">
                  {step.duration}
                </span>
                <p className="text-sm text-gray-300">{step.desc}</p>

                {/* Skills */}
                <div className="flex justify-center gap-3 mt-4 flex-wrap">
                  {step.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-yellow-400 text-black rounded-full shadow-md hover:shadow-yellow-500/50 transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Back to Home */}
        <Link
          href="/profile"
          className="mt-10 px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-orange-500 hover:to-yellow-400 text-black rounded-full font-semibold shadow-lg transition transform hover:scale-110"
        >
          🔙 Back to Home
        </Link>
      </section>
    </main>
  );
}
