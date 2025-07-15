"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Projects() {
  const [menuOpen, setMenuOpen] = useState(false);

  const projects = [
    {
      title: "Authent",
      description:
        "Implemented Two-Factor Authentication (2FA) for web-based applications using the Time-Based One-Time Password (TOTP) mechanism to enhance security with an additional layer of protection.",
      link: "https://github.com/Bh-Abhiram/Authent",
    },
    {
      title: "Teach Track",
      description:
        "Developed a feedback platform to streamline communication and feedback exchange between students and teachers, enhancing the overall learning experience",
      link: "https://github.com/Bh-Abhiram/Teach-Track",
    },
    {
      title: "MED FORECAST",
      description:
        "Developed a medical forecasting tool designed to predict various types of diseases based on user inputs and health data analysis.",
      link: "https://github.com/Bh-Abhiram/MED-FORECAST",
    },
    {
      title: "Code Space",
      description:
        "Built a platform for writing, storing, and executing code in multiple programming languages including C, C++, Python, Java, and JavaScript also submit the coding tasks based on levels of the user",
      link: "https://github.com/Bh-Abhiram/CodeSpace",
    },
    {
      title: "Defence Against SQL Injection",
      description:
        "Developed a platform to practically demonstrate SQL Injection (SQLi) and implemented effective prevention techniques to secure web applications.",
      link: "https://github.com/Bh-Abhiram/SQL-injection",
    },
    {
      title: "Stored XSS Attack",
      description:
        "Developed a platform to practically demonstrate Stored XSS attacks and implemented effective prevention techniques to secure web applications.",
      link: "https://github.com/Bh-Abhiram/stored-xss",
    },
    {
      title: "Fake Form Setup for Stored XSS Project",
      description:
        "For the Stored XSS attack the fake server is created to push the fake login form and steal credentials using the fake server",
      link: "https://github.com/Bh-Abhiram/fake-form",
    },
    {
      title: "Reflected XSS Attack",
      description:
        "Developed a platform to practically demonstrate Reflected XSS attacks and implemented effective prevention techniques to secure web applications.",
      link: "https://github.com/Bh-Abhiram/reflected-xss",
    },
    {
      title: "XSS Fake Server Setup for Reflected XSS Project",
      description:
        "For the Reflected XSS attack the fake server is created to push the fake login form and steal credentials using the fake server",
      link: "https://github.com/Bh-Abhiram/xss-fake-server",
    },
    {
      title: "My WebFolio",
      description:
        "Developed my Personal WebFolio to show case my achievements, skills, projects in this ",
      link: "https://github.com/Bh-Abhiram/abhiram-webfolio",
    },
  ];

  // Add background particles
  useEffect(() => {
    const particles = document.querySelectorAll(".particle");
    particles.forEach((particle) => {
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      particle.style.top = `${y}%`;
      particle.style.left = `${x}%`;
    });
  }, []);

  return (
    <main className="relative min-h-screen bg-gradient-to-br from-purple-800 to-pink-700 text-white overflow-hidden">
      {/* Background Particles */}
      <div className="absolute inset-0 z-0">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="particle absolute w-1 h-1 bg-white rounded-full opacity-20 animate-float"
          ></div>
        ))}
      </div>

      {/* Navbar */}
      <header className="flex justify-between items-center px-6 py-4 bg-black/30 backdrop-blur-lg fixed w-full z-50">
        <h1 className="text-2xl font-bold cursor-pointer">
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
                link.path === "/projects" ? "text-yellow-400 font-bold" : ""
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

      {/* Projects Content */}
      <section className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-6 pt-24">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-10">
          🚀 My Projects
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="relative bg-black/50 rounded-xl p-6 shadow-lg backdrop-blur-lg group overflow-hidden hover:scale-105 transition duration-500"
            >
              {/* Project Title */}
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-300 text-sm mb-4">{project.description}</p>

              {/* View Project Button */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-[-50px] left-1/2 transform -translate-x-1/2 px-4 py-2 bg-yellow-400 text-black font-semibold rounded-full shadow-md opacity-0 group-hover:bottom-4 group-hover:opacity-100 transition-all duration-500 ease-in-out hover:bg-yellow-500"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>

        {/* Back to Home */}
        <Link
          href="/profile"
          className="mt-10 px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-black rounded-full font-semibold shadow-lg transition transform hover:scale-105"
        >
          🔙 Back to Home
        </Link>
      </section>

      {/* Particle Animation */}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-20px);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite alternate;
        }
      `}</style>
    </main>
  );
}
