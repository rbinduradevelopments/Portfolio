/* eslint-disable react/no-unescaped-entities */
"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <main
      className={`min-h-screen transition-colors duration-500 ${
        darkMode
          ? "bg-gray-900 text-white"
          : "bg-gradient-to-b from-gray-100 to-gray-300 text-gray-900"
      }`}
    >
      {/* Apprenticeship Banner */}
      <div className="w-full bg-blue-600 text-white text-center text-sm md:text-base py-2">
        Actively seeking a <strong>Software Engineering Apprenticeship </strong> —
        <a href="mailto:redeemedbinduraa@gmail.com" className="underline ml-1">get in touch</a>.
      </div>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-16 px-6">
        <Image
          src="/mypic1.jpg" // profile pic
          alt="Redeemed Bindura"
          width={200}
          height={150}
          className="rounded-full shadow-lg mb-6 object-cover"
          priority
        />
        <h1 className="text-5xl font-extrabold mb-4">Hi, I'm Redeemed Bindura</h1>
        <TypeAnimation
          sequence={[
            "Software Developer 💻",
            2000,
            "Web Builder 🌐",
            2000,
            "Game Creator 🎮",
            2000,
            "Entrepreneur 🚀",
            2000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
          className="text-xl font-medium text-blue-600"
        />
        <p className="mt-6 max-w-2xl text-lg">
          Welcome to my portfolio. I build things that are useful and creative —
          from web apps and small tools to games and brand ideas. This site
          showcases what I've made so far and where I'm heading next.
        </p>
        <div className="flex flex-wrap gap-3 mt-6">
          <a
            href="/projects"
            className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition"
          >
            Explore Projects 🚀
          </a>
         
          <a
            href="mailto:rbinduradevelopments@gmail.com"
            className="px-6 py-3 bg-gray-900 text-white rounded-xl shadow hover:bg-gray-800 transition"
          >
            Contact Me
          </a>
        </div>
      </section>

      {/* Highlight Tags */}
      <motion.div
        className="flex flex-wrap justify-center gap-3 px-6 mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {["#FullStack", "#TypeScript", "#NextJS", "#ASPdotNET", "#SQL", "#Flutter", "#Supabase"].map((tag) => (
          <span
            key={tag}
            className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full shadow hover:bg-blue-200 transition"
          >
            {tag}
          </span>
        ))}
      </motion.div>

      {/* Background Story (kept, cleaned, no grades) */}
      <section className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6 max-w-3xl mx-auto mb-12">
        <h2 className="text-2xl font-bold mb-4">My Story</h2>
        <p className="leading-relaxed text-gray-700 dark:text-gray-300">
          I was born and raised in Zimbabwe and moved to the UK in my late teens. At 14,
          my dad bought me my first laptop and that curiosity about how software and
          devices work turned into a real passion. I pursued Computer Science in school
          and have been building ever since — learning by doing and sharing my progress here.
        </p>
        <p className="leading-relaxed mt-4 text-gray-700 dark:text-gray-300">
          I also have a creative side from fashion and media, which influences my design taste
          and the way I approach projects — practical, clean, and with an eye for detail.
        </p>
      </section>

      {/* Featured Projects (real + in-progress) */}
      <section className="px-6 max-w-5xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">Selected Projects</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {/* Game project */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-5 hover:scale-105 transition">
            <h3 className="font-bold mb-2 text-gray-900 dark:text-white">2D Platformer Game 🎮</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Built in Construct with maths logic and event-based programming. Designed levels,
              player physics, collectibles, and UI. This project sparked my love for game dev.
            </p>
            <div className="mt-3 text-sm text-blue-700 dark:text-blue-400 flex gap-3">
              <span className="px-2 py-1 bg-blue-100 rounded-full">Construct</span>
              <span className="px-2 py-1 bg-blue-100 rounded-full">Game Design</span>
              <span className="px-2 py-1 bg-blue-100 rounded-full">Logic</span>
            </div>
          </div>

          {/* Car rental */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-5 hover:scale-105 transition">
            <h3 className="font-bold mb-2 text-gray-900 dark:text-white">RB Car Rentals 🚗</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              ASP.NET Core MVC app with EF Core and SQL Server. Role-based access, vehicle
              availability, and booking logic. Deployed with a low-cost Azure setup.
            </p>
            <div className="mt-3 text-sm text-blue-700 dark:text-blue-400 flex gap-3">
              <span className="px-2 py-1 bg-blue-100 rounded-full">ASP.NET MVC</span>
              <span className="px-2 py-1 bg-blue-100 rounded-full">EF Core</span>
              <span className="px-2 py-1 bg-blue-100 rounded-full">Azure</span>
            </div>
          </div>

          {/* Finance tracker (aim) */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-5 hover:scale-105 transition">
            <h3 className="font-bold mb-2 text-gray-900 dark:text-white">Finance/Bill Tracker (In Progress) 💸</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              I’m building a phone‑first tracker to manage bills, subscriptions, debts, and goals.
              Planned stack: Flutter + Supabase with offline-first and reminders.
            </p>
            <div className="mt-3 text-sm text-blue-700 dark:text-blue-400 flex gap-3">
              <span className="px-2 py-1 bg-blue-100 rounded-full">Flutter</span>
              <span className="px-2 py-1 bg-blue-100 rounded-full">Supabase</span>
              <span className="px-2 py-1 bg-blue-100 rounded-full">Postgres</span>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="px-6 max-w-5xl mx-auto mb-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Skills & Tools</h2>
        <p className="mb-4 text-sm text-gray-700 dark:text-gray-300">
          JavaScript/TypeScript, React/Next.js, Tailwind, Node.js, C#, ASP.NET Core MVC, EF Core,
          SQL Server, PostgreSQL, Supabase, Flutter/Dart, Firebase, Azure, Git/GitHub.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 text-sm">
          {["TypeScript", "Next.js", "React", "Tailwind", "Node.js", "C#", "ASP.NET Core", "EF Core", "SQL Server", "PostgreSQL", "Supabase", "Flutter/Dart", "Firebase", "Azure"].map((t) => (
            <span key={t} className="px-3 py-2 rounded-xl bg-white dark:bg-gray-900/50 border border-gray-200 dark:border-white/10 text-center">
              {t}
            </span>
          ))}
        </div>
      </section>

      {/* Short About (no grades) */}
      <section className="px-6 max-w-3xl mx-auto mb-16 rounded-2xl bg-white dark:bg-gray-900/50 border border-gray-200 dark:border-white/10 p-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">About</h2>
        <p className="text-gray-700 dark:text-gray-300">
          Zimbabwe → UK. I learn fast, document well, and like turning ideas into working software.
          I'm motivated by building practical solutions and improving a little every day.
        </p>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 mt-12 border-t border-gray-400 dark:border-gray-700">
        <p className="mb-2">Open to apprenticeship opportunities and junior roles.</p>
        <div className="flex justify-center gap-4">
          <a href="https://github.com/rbinduradevelopments" target="_blank" className="hover:underline">GitHub</a>
          <a href="https://www.linkedin.com/in/redeemed-bindura-9b690728b/" target="_blank" className="hover:underline">LinkedIn</a>
          <a href="mailto:rbinduradevelopments@gmail.com" className="hover:underline">Email</a>
        </div>
      </footer>

      {/* Dark Mode Toggle */}
      <div className="fixed bottom-6 right-6">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-4 py-2 bg-gray-700 text-white rounded-full shadow hover:bg-gray-800 transition"
        >
          {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>
    </main>
  );
}
