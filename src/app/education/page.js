"use client";

import Link from "next/link";
import { useState } from "react";

export default function Education() {
  const [menuOpen, setMenuOpen] = useState(false);

  const timeline = [
    {
      title: "🎓 B.Tech - Computer Science (Cyber Security)",
      place: "Malla Reddy University",
      duration: "2021 - 2025",
      location: "Hyderabad, Telangana",
      grade: "8.82 CGPA",
    },
    {
      title: "🏫 Board of Intermediate Education (MPC)",
      place: "Sri Chaitanya Junior College",
      duration: "2019 - 2021",
      location: "Kakinada, Andhra Pradesh",
      grade: "88.20%",
    },
    {
      title: "📖 School of Secondary Education",
      place: "Bhashyam High School",
      duration: "2018 - 2019",
      location: "Ramachandrapuram, Andhra Pradesh",
      grade: "9.7 CGPA",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-green-900 via-teal-800 to-teal-900 text-white">
      {/* Navbar */}
      <header className="flex justify-between items-center px-6 py-4 bg-black/30 backdrop-blur-lg fixed w-full z-50 shadow-md">
        <h1 className="text-2xl font-bold cursor-pointer hover:text-yellow-400 transition">
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
                link.path === "/education" ? "text-yellow-400 font-bold" : ""
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

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-black/90 backdrop-blur-lg text-center">
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
              onClick={() => setMenuOpen(false)}
              className={`block py-3 border-b border-white/10 hover:bg-gray-800 transition cursor-pointer ${
                link.path === "/education" ? "text-yellow-400 font-bold" : ""
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}

      {/* Education Timeline */}
      <section className="flex flex-col items-center justify-center min-h-screen text-center px-6 pt-24">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-12 text-yellow-300 drop-shadow-lg animate-pulse">
          📘 My Education
        </h1>

        <div className="relative w-full max-w-3xl">
          {/* Vertical glowing line */}
          <div className="absolute left-1/2 transform -translate-x-1 bg-gradient-to-b from-yellow-400 via-teal-400 to-teal-700 w-1 h-full animate-pulse"></div>

          {timeline.map((step, index) => (
            <div
              key={index}
              className={`relative mb-14 flex flex-col items-center text-center group transition-all duration-700 ease-in-out ${
                index % 2 === 0
                  ? "animate-fadeInLeft"
                  : "animate-fadeInRight"
              }`}
            >
              {/* Glowing Dot */}
              <div className="w-7 h-7 bg-gradient-to-br from-yellow-400 to-teal-500 rounded-full border-4 border-green-900 shadow-xl animate-ping"></div>

              {/* Card */}
              <div className="bg-green-700 bg-opacity-30 backdrop-blur-lg border border-green-400 rounded-2xl shadow-2xl p-6 mt-4 w-full max-w-md group-hover:scale-105 group-hover:shadow-yellow-400/50 transition duration-500">
                <h3 className="text-2xl font-bold mb-2 text-yellow-300 drop-shadow-md">
                  {step.title}
                </h3>
                <p className="text-gray-100">{step.place}</p>
                <p className="text-teal-200 text-sm mb-2">{step.location}</p>
                <span className="inline-block px-3 py-1 bg-yellow-400 text-black rounded-full text-sm font-semibold shadow-md">
                  {step.grade}
                </span>
                <div className="mt-2 text-teal-300 font-medium">{step.duration}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Back Button */}
        <Link
          href="/profile"
          className="mt-12 px-7 py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black rounded-full font-bold shadow-xl transition transform hover:scale-110"
        >
          🔙 Back to Home
        </Link>
      </section>
    </main>
  );
}
