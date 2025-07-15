"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [particles, setParticles] = useState([]);

  // Generate random particles positions
  useEffect(() => {
    const tempParticles = Array.from({ length: 30 }).map(() => ({
      top: Math.random() * 100,
      left: Math.random() * 100,
      size: 2 + Math.random() * 3,
      duration: 4 + Math.random() * 4,
      delay: Math.random() * 2,
    }));
    setParticles(tempParticles);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus("✅ Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("❌ Failed to send. Try again later.");
      }
    } catch (error) {
      console.error(error);
      setStatus("❌ Error sending message.");
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-cyan-900 to-green-800 text-white relative overflow-hidden">
      {/* Background Particles */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {particles.map((p, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white opacity-30 animate-float"
            style={{
              top: `${p.top}%`,
              left: `${p.left}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Navbar */}
      <header className="flex justify-between items-center px-6 py-4 bg-black/30 backdrop-blur-lg fixed w-full z-50">
        <h1 className="text-2xl font-bold cursor-pointer hover:text-yellow-400 transition">
          <Link href="/">AB</Link>
        </h1>

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
                link.path === "/contact" ? "text-yellow-400 font-bold" : ""
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

      {/* Contact Form */}
      <section className="relative flex flex-col items-center justify-center min-h-screen text-center px-6 pt-24 z-10">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 animate-glow">📬 Contact Me</h1>
        <p className="max-w-2xl text-base md:text-lg text-gray-200 mb-6 leading-relaxed animate-fade-in">
          I’d love to hear from you. Fill out the form or connect on social media.
        </p>

        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-xl space-y-4 animate-slide-up"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          ></textarea>

          <button
            type="submit"
            className="w-full px-4 py-2 bg-yellow-400 text-black rounded-lg font-bold hover:bg-yellow-500 transition transform hover:scale-105 cursor-pointer"
          >
            🚀 Send Message
          </button>

          <p className="text-sm text-yellow-300 mt-2">{status}</p>
        </form>

        {/* Social Icons */}
        <div className="flex gap-6 mt-8 animate-fade-in delay-200">
          <a href="https://github.com/Bh-Abhiram" target="_blank" className="hover:text-yellow-400 text-2xl">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/abhiram-bhimaraju" target="_blank" className="hover:text-yellow-400 text-2xl">
            <FaLinkedin />
          </a>
          <a href="mailto:bheemarajuabhiram@gmail.com" className="hover:text-yellow-400 text-2xl">
            <FaEnvelope />
          </a>
        </div>

        <Link
          href="/profile"
          className="mt-6 px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-black rounded-full font-semibold shadow-lg transition transform hover:scale-105"
        >
          🔙 Back to Home
        </Link>
      </section>

      {/* Animations */}
      <style jsx>{`
        
        .animate-float {
          animation: float 6s ease-in-out infinite alternate;
        }
        .animate-slide-up {
          animation: slideUp 1s ease-out forwards;
        }
        .animate-fade-in {
          animation: fadeIn 1.5s ease-out forwards;
        }
        @keyframes glow {
          from {
            text-shadow: 0 0 10px yellow, 0 0 20px teal;
          }
          to {
            text-shadow: 0 0 20px yellow, 0 0 30px teal;
          }
        }
        @keyframes float {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-10px);
          }
        }
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </main>
  );
}
