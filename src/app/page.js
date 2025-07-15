"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Welcome() {
  const router = useRouter();
  const [particles, setParticles] = useState([]);

  // Generate random particles client-side
  useEffect(() => {
    const tempParticles = Array.from({ length: 30 }).map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      animationDuration: `${2 + Math.random() * 4}s`,
      animationDelay: `${Math.random() * 2}s`,
    }));
    setParticles(tempParticles);
  }, []);

  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] text-white overflow-hidden">
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

      {/* Main Content */}
      <div className="z-10 text-center px-6">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4 drop-shadow-2xl animate-fade-in">
          👋 Welcome!
        </h1>

        {/* Name */}
        <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-yellow-400 via-pink-400 to-red-500 bg-clip-text text-transparent mb-4 animate-typewriter overflow-hidden border-r-4 border-yellow-400 whitespace-nowrap">
          I’m Abhiram Bhimaraju
        </h2>

        <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-300 mb-8 animate-fade-in delay-200">
          🚀 Full Stack Developer focused on MERN & Next.js | Passionate about building modern, scalable frontend & backend solutions.
        </p>

        <button
          onClick={() => router.push("/profile")}
          className="px-8 py-3 bg-gradient-to-r from-green-400 to-green-600 rounded-full text-lg font-semibold shadow-lg hover:scale-105 hover:shadow-green-500/50 transition duration-300 ease-in-out backdrop-blur-sm cursor-pointer"
        >
          🌟 View My Profile
        </button>
      </div>

      {/* Floating Developer Badge */}
      <div className="absolute bottom-4 left-4 bg-black/50 px-4 py-2 rounded-full text-sm font-mono backdrop-blur-md shadow-lg">
        💻 Developer: Abhiram Bhimaraju
      </div>

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
            transform: translateY(-15px);
          }
        }
      `}</style>
    </main>
  );
}
