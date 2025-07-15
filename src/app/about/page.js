"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function About() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [particles, setParticles] = useState([]);

  // Floating particles
  useEffect(() => {
    const tempParticles = Array.from({ length: 20 }).map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      animationDuration: `${3 + Math.random() * 4}s`,
      animationDelay: `${Math.random() * 2}s`,
    }));
    setParticles(tempParticles);
  }, []);

  return (
    <main className="min-h-screen relative bg-gradient-to-br from-purple-800 to-indigo-900 text-white overflow-hidden">
      {/* Background Particles */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {particles.map((p, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-60 animate-float"
            style={{
              top: p.top,
              left: p.left,
              animationDuration: p.animationDuration,
              animationDelay: p.animationDelay,
            }}
          />
        ))}
      </div>

      {/* Navbar */}
      <header className="flex justify-between items-center px-6 py-4 bg-black/30 backdrop-blur-lg fixed w-full z-50">
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
                link.path === "/about" ? "text-yellow-400 font-bold" : ""
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
        <div className="md:hidden absolute top-16 left-0 w-full bg-black/90 backdrop-blur-lg text-center z-40 animate-fade-in">
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
                link.path === "/about" ? "text-yellow-400 font-bold" : ""
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}

      {/* About Content */}
      <section className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-6 pt-24">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 animate-typewriter border-r-4 border-yellow-400 overflow-hidden whitespace-nowrap">
          👨‍💻 About Me
        </h1>

        {[
          "Hello! I’m Abhiram Bhimaraju, a passionate developer with an eye for building intuitive and efficient web applications.",
          "I specialize in creating clean, responsive, and scalable websites using the MERN stack and have a growing knowledge of Next.js for modern web development.",
          "With a strong foundation in Java (OOPs concepts & DSA basics) and working knowledge of Python, I enjoy solving problems and improving application workflows.",
          "I’m also skilled at understanding and debugging application flows, identifying errors, and implementing practical solutions that enhance user experience.",
        ].map((text, idx) => (
          <p
            key={idx}
            className="max-w-2xl text-base md:text-lg text-gray-200 mb-6 leading-relaxed animate-fade-in"
            style={{ animationDelay: `${0.5 + idx * 0.3}s` }}
          >
            {text}
          </p>
        ))}

        {/* Back to Home */}
        <Link
          href="/profile"
          className="mt-6 px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-black rounded-full font-semibold shadow-lg transition transform hover:scale-105 animate-glow"
        >
          🔙 Back to Home
        </Link>
      </section>

      {/* Animations */}
      <style jsx>{`
        .animate-typewriter {
          animation: typing 3s steps(30, end), blink 0.75s step-end 3 forwards;
        }
        .animate-fade-in {
          animation: fadeIn 1.2s ease-out forwards;
          opacity: 0;
          transform: translateY(20px);
        }
        .animate-glow {
          animation: glow 2s ease-in-out infinite alternate;
        }
        .animate-float {
          animation: floatUpDown 5s ease-in-out infinite alternate;
        }
        @keyframes typing {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }
        @keyframes blink {
          0%,
          100% {
            border-color: transparent;
          }
          50% {
            border-color: yellow;
          }
        }
        @keyframes fadeIn {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes floatUpDown {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </main>
  );
}
