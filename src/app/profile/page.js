"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Profile() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [particles, setParticles] = useState([]);
  const [showImage, setShowImage] = useState(false);

  // Floating particles generation
  useEffect(() => {
    const tempParticles = Array.from({ length: 30 }).map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      animationDuration: `${2 + Math.random() * 4}s`,
      animationDelay: `${Math.random() * 2}s`,
    }));
    setParticles(tempParticles);

    // Delay profile image appearance
    const timer = setTimeout(() => setShowImage(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen relative text-white bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] overflow-hidden">
      {/* Background Glows */}
      <div className="absolute w-96 h-96 bg-purple-600 opacity-20 rounded-full -top-24 -left-24 filter blur-3xl animate-pulse"></div>
      <div className="absolute w-96 h-96 bg-pink-500 opacity-20 rounded-full bottom-0 right-0 filter blur-3xl animate-pulse delay-500"></div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {particles.map((p, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-70 animate-float"
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
      <header className="flex justify-between items-center px-6 py-4 bg-black/30 backdrop-blur-lg fixed w-full z-50 shadow-lg">
        <h1
          className="text-2xl font-bold cursor-pointer hover:text-yellow-300 transition"
          onClick={() => router.push("/")}
        >
          AB
        </h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 text-base lg:text-lg">
          {[
            { name: "Home", path: "/profile" },
            { name: "About", path: "/about" },
            { name: "Education", path: "/education" },
            { name: "Experience", path: "/experience" },
            { name: "Skills", path: "/skills" },
            { name: "Projects", path: "/projects" },
            { name: "Contact", path: "/contact" },
          ].map((link) => (
            <button
              key={link.name}
              onClick={() => router.push(link.path)}
              className="relative group transition cursor-pointer"
            >
              {link.name}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-yellow-400 rounded-full group-hover:w-full transition-all duration-300"></span>
            </button>
          ))}
        </nav>

        {/* Mobile Hamburger */}
        <div
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 cursor-pointer space-y-1 z-10"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="block w-6 h-0.5 bg-white"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
        </div>
      </header>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-black/90 backdrop-blur-lg text-center z-40">
          {[
            { name: "Home", path: "/profile" },
            { name: "About", path: "/about" },
            { name: "Education", path: "/education" },
            { name: "Experience", path: "/experience" },
            { name: "Skills", path: "/skills" },
            { name: "Projects", path: "/projects" },
            { name: "Contact", path: "/contact" },
          ].map((link) => (
            <div
              key={link.name}
              onClick={() => {
                router.push(link.path);
                setMenuOpen(false);
              }}
              className="py-4 border-b border-white/10 hover:bg-gray-800 transition cursor-pointer"
            >
              {link.name}
            </div>
          ))}
        </div>
      )}

      {/* Home Content */}
      <section className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4 pt-24">
        {/* Profile Image with Fade & Glow */}
        <div
          className={`relative group transition-transform duration-700 ${
            showImage ? "opacity-100 scale-100" : "opacity-0 scale-50"
          }`}
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 opacity-40 blur-2xl animate-spin-slow"></div>

          <Image
            src="/images/profile.jpg"
            alt="Abhiram Bhimaraju"
            width={180}
            height={180}
            className="rounded-full border-4 border-yellow-400 shadow-2xl relative z-10"
          />
        </div>

        {/* Name with Typing Effect */}
        <h2 className="text-4xl md:text-5xl font-bold mt-6 bg-gradient-to-r from-yellow-400 via-pink-400 to-red-500 bg-clip-text text-transparent animate-typewriter overflow-hidden border-r-4 border-yellow-400 whitespace-nowrap">
          Abhiram Bhimaraju
        </h2>

        <p className="text-base md:text-lg text-gray-200 mt-3 mb-6 animate-fade-in delay-300">
          🚀 Full Stack Developer | MERN Stack | Next.js
        </p>

        {/* Social Buttons */}
        <div className="flex gap-5 justify-center animate-fade-in delay-500">
          <a
            href="https://github.com/Bh-Abhiram"
            target="_blank"
            className="bg-gray-800 hover:bg-gray-700 px-6 py-2 rounded-full transition font-medium shadow-md hover:scale-105 cursor-pointer"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/abhiram-bhimaraju"
            target="_blank"
            className="bg-blue-600 hover:bg-blue-500 px-6 py-2 rounded-full transition font-medium shadow-md hover:scale-105 cursor-pointer"
          >
            LinkedIn
          </a>
          {/* <a href="https://drive.google.com/file/d/1avgb4N5XL02-VVRsYTNbtY5yjzuF2jWB/view?usp=drive_link" */}
          {/* target="_blank" */}
          <a href="https://drive.google.com/uc?export=download&id=1avgb4N5XL02-VVRsYTNbtY5yjzuF2jWB"
          // target="_blank"
          rel="noopener noreferrer"
          className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-2 rounded-full font-semibold shadow-md transition hover:scale-105 cursor-pointer"
          >
            View CV / Resume
          </a>
        </div>
      </section>

      {/* Animations */}
      <style jsx>{`
        .animate-fade-in {
          animation: fadeIn 1.5s ease-out forwards;
        }
        .animate-typewriter {
          animation: typing 3s steps(30, end), blink 0.75s step-end infinite;
        }
        .animate-float {
          animation: floatUpDown linear infinite alternate;
        }
        .animate-spin-slow {
          animation: spin 10s linear infinite;
        }
        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
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
        @keyframes floatUpDown {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-10px);
          }
        }
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </main>
  );
}
