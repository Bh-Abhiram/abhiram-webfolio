"use client";

import Link from "next/link";
import { useState } from "react";
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs,
  FaJava, FaPython, FaDatabase
} from "react-icons/fa";
import {
  SiMongodb, SiExpress, SiTailwindcss, SiDjango
} from "react-icons/si";

export default function Skills() {
  const [menuOpen, setMenuOpen] = useState(false);

  const skills = [
    // Frontend
    { category: "Frontend", name: "HTML5", icon: <FaHtml5 className="text-orange-500" />, level: 55 },
    { category: "Frontend", name: "CSS3", icon: <FaCss3Alt className="text-blue-500" />, level: 50 },
    { category: "Frontend", name: "JavaScript", icon: <FaJs className="text-yellow-400" />, level: 50 },

    // Frameworks
    { category: "Frameworks", name: "React.js", icon: <FaReact className="text-cyan-400" />, level: 70 },
    { category: "Frameworks", name: "Node.js", icon: <FaNodeJs className="text-green-500" />, level: 60 },
    { category: "Frameworks", name: "Express.js", icon: <SiExpress className="text-gray-300" />, level: 55 },
    { category: "Frameworks", name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" />, level: 40 },
    { category: "Frameworks", name: "Django", icon: <SiDjango className="text-green-700" />, level: 30 },

    // Programming Languages
    { category: "Programming Languages", name: "Java", icon: <FaJava className="text-red-500" />, level: 75 },
    { category: "Programming Languages", name: "Python", icon: <FaPython className="text-yellow-400" />, level: 50 },

    // Databases
    { category: "Databases", name: "MySQL", icon: <FaDatabase className="text-blue-300" />, level: 50 },
    { category: "Databases", name: "MongoDB", icon: <SiMongodb className="text-green-500" />, level: 50 },

    // DSA Concepts
    { category: "DSA", name: "Linear Search", icon: null, level: 60 },
    { category: "DSA", name: "Binary Search", icon: null, level: 55 },
    { category: "DSA", name: "HashMap / HashSet", icon: null, level: 50 },
    { category: "DSA", name: "ArrayLists", icon: null, level: 50 },
    { category: "DSA", name: "Strings Manipulation", icon: null, level: 65 },
    { category: "DSA", name: "Bubble Sort", icon: null, level: 45 },
    { category: "DSA", name: "Selection Sort", icon: null, level: 40 },
    { category: "DSA", name: "Insertion Sort", icon: null, level: 35 },
    { category: "DSA", name: "Merge Sort", icon: null, level: 30 },
    { category: "DSA", name: "Quick Sort", icon: null, level: 25 },
  ];

  return (
    <main className="relative min-h-screen bg-gradient-to-br from-gray-950 via-purple-900 to-black text-white overflow-hidden">
      {/* Navbar */}
      <header className="flex justify-between items-center px-6 py-4 bg-black/30 backdrop-blur-md fixed w-full z-50">
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
                link.path === "/skills" ? "text-yellow-400 font-bold" : ""
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

      {/* Skills Section */}
      <section className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-6 pt-28">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-10 text-yellow-300 animate-pulse">
          🚀 My Skills
        </h1>

        {["Frontend", "Frameworks", "Programming Languages", "Databases", "DSA"].map((category) => (
          <div key={category} className="mb-14 w-full max-w-6xl">
            <h2 className="text-3xl font-bold mb-8 text-yellow-200 border-b-2 border-yellow-400 inline-block pb-1">
              {category}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills
                .filter((skill) => skill.category === category)
                .map((skill, i) => (
                  <div
                    key={i}
                    className="bg-gradient-to-br from-black/50 to-purple-800/40 backdrop-blur-md p-5 rounded-xl shadow-md hover:scale-105 transition transform duration-300 flex flex-col items-center text-center border border-white/10"
                  >
                    {skill.icon ? (
                      <div className="text-4xl mb-2">{skill.icon}</div>
                    ) : (
                      <span className="text-lg font-bold text-gray-300">{skill.name}</span>
                    )}
                    {/* Circular Progress */}
                    <div className="relative w-20 h-20 mt-4">
                      <svg className="w-full h-full transform -rotate-90">
                        <circle
                          cx="40"
                          cy="40"
                          r="35"
                          stroke="gray"
                          strokeWidth="5"
                          fill="transparent"
                        />
                        <circle
                          cx="40"
                          cy="40"
                          r="35"
                          stroke="yellow"
                          strokeWidth="5"
                          fill="transparent"
                          strokeDasharray={220}
                          strokeDashoffset={220 - (220 * skill.level) / 100}
                          strokeLinecap="round"
                        />
                      </svg>
                      <span className="absolute inset-0 flex items-center justify-center text-yellow-300 font-bold">
                        {skill.level}%
                      </span>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}

        {/* Back Button */}
        <Link
          href="/profile"
          className="mt-12 px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-orange-500 hover:to-yellow-400 text-black rounded-full font-semibold shadow-lg transition transform hover:scale-110"
        >
          🔙 Back to Home
        </Link>
      </section>
    </main>
  );
}
