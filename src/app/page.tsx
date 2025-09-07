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
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-16 px-6">
        <Image
          src="/mypic1.jpg" // profile pic/
          alt="Redeemed Bindura"
          width={200}
          height={150}
          className="rounded-full shadow-lg mb-6"
        />
        <h1 className="text-5xl font-extrabold mb-4">
          Hi, my name is Redeemed Bindura
        </h1>
        <TypeAnimation
          sequence={[
            "Web Developer 🌐",
            2000,
            "Game Creator 🎮",
            2000,
            "Entrepreneur 🚀",
            2000,
            "Media Creative 🎥",
            2000,
            "Future Software Engineer 💻",
            2000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
          className="text-xl font-medium text-blue-600"
        />
        <p className="mt-6 max-w-2xl text-lg">
          Welcome to my Website Portfolio. I am interested and invested in
          building diverse projects including{" "}
          <span className="font-semibold">
            Websites, Games, Software applications, Business ventures, Digital
            products, and Creative brands
          </span>
          . I’m passionate about exploring different ways to bring ideas to life
          — from tech solutions and startups to creative media and future
          innovations like{" "}
          <span className="font-semibold">
            AI projects, Web Apps, SaaS Tools, and Mobile apps
          </span>
          . This portfolio reflects not only what I’ve built so far, but also
          the ambitions I’m working toward for the future.
        </p>

        
      </section>

      {/* Highlight Tags */}
      <motion.div
        className="flex flex-wrap justify-center gap-3 px-6 mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {[
          "#GameDeveloper",
          "#Entrepreneur",
          "#MediaCreative",
          "#FutureSoftwareEngineer",
        ].map((tag) => (
          <span
            key={tag}
            className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full shadow hover:bg-blue-200 transition"
          >
            {tag}
          </span>
        ))}
      </motion.div>

      {/* Background Story */}
      <section className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6 max-w-3xl mx-auto mb-12">
        <h2 className="text-2xl font-bold mb-4">My Story</h2>
        <p className="leading-relaxed text-gray-600 dark:text-gray-300">
          Looking back, I’ve always wanted to make a difference in the world
          through creativity, innovation, and determination. I was born and
          raised in Zimbabwe, where I spent most of my childhood before moving
          to the United Kingdom in my late teens. One of the defining moments in
          my journey came at the age of 14, when my father bought me my first
          laptop. I was fascinated by technology — how software, phones, and
          computers worked — and that curiosity soon grew into a real passion.
          It led me to pursue Computer Science at GCSE and A Level, where I
          achieved strong results and discovered my aspiration to become a
          software engineer.
        </p>
        <p className="leading-relaxed mt-4 text-gray-600 dark:text-gray-300">
          Growing up, I was also influenced by the vibrant fashion culture
          around me. Fashion gave me a way to self-express, and I even started
          my own clothing brand in Zimbabwe, making a few sales before pausing
          when I relocated. Today, I’m working on reviving that brand with a
          renewed purpose — not just as a business, but as something meaningful
          and impactful.
        </p>
        <p className="leading-relaxed mt-4 text-gray-600 dark:text-gray-300">
          Alongside tech and fashion, I’ve always had an entrepreneurial spirit.
          From a young age, I enjoyed planning, visualizing, and turning ideas
          into reality. This became clear when I studied Business and Enterprise
          Skills at GCSE — even with just six months of preparation, I earned a
          solid grade, reinforcing my belief that entrepreneurship is part of
          who I am.
        </p>
        <p className="leading-relaxed mt-4 text-gray-600 dark:text-gray-300">
          I also pursued my creative side through media. At A Level, I completed
          a Pearson BTEC Level 3 in Creative Digital Media Production,
          graduating with distinction. Through this, I explored projects such as
          digital game development, media representation, and production design.
          My first ever 2D platformer game was built during this time, sparking
          my love for game development and digital creativity.
        </p>
        <p className="leading-relaxed mt-4 text-gray-600 dark:text-gray-300">
          Over the years, I’ve invested in developing a wide range of skills —
          in tech, business, fashion, and media — all with one mission in mind:
          to create projects that are innovative, impactful, and make life
          better in some way. Now, at 19, I feel I have a lot to show, which is
          why I built this portfolio — to share my journey, showcase my
          projects, and connect with people who share the same drive for growth
          and change.
        </p>
      </section>

      {/* Ambitions */}
      <section className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6 max-w-3xl mx-auto mb-12">
        <h2 className="text-2xl font-bold mb-4">My Ambitions</h2>
        <p className="leading-relaxed text-gray-600 dark:text-gray-300">
          My ambition is simple but powerful: to turn my ideas into reality. I
          want to continue building across different fields — from software and
          game development to business ventures, media, and fashion. I aspire to
          create solutions that not only showcase my skills but also have a
          positive impact on the world.
        </p>
        <p className="leading-relaxed mt-4 text-gray-600 dark:text-gray-300">
          In the future, I aim to expand into AI projects, mobile apps, and
          startups that address real-world problems. At the same time, I want to
          grow as an entrepreneur, develop meaningful brands, and collaborate
          with others to make bold ideas happen. This portfolio is just the
          beginning of that journey — a place where I can share my progress, my
          ambitions, and the vision I’m working towards.
        </p>

        
      </section>
       {/* explore projects Section */}
      <section className="flex flex-col items-center justify-center text-center py-16 px-6">
<div className="flex gap-4 mt-6">
          <a
            href="/projects"
            className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition"
          >
            Explore Projects 🚀
          </a>
          
        
        </div>
      </section>
      

            {/* Featured Projects */}
      <section className="px-6 max-w-5xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-4 hover:scale-105 transition">
            <h3 className="font-bold mb-2 text-gray-900 dark:text-white">2D Platformer Game 🎮</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              My first ever game project during A Levels.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-4 hover:scale-105 transition">
            <h3 className="font-bold mb-2 text-gray-900 dark:text-white">Clothing Brand 👕</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Designed and sold fashion pieces in Zimbabwe.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-4 hover:scale-105 transition">
            <h3 className="font-bold mb-2 text-gray-900 dark:text-white">Portfolio Website 🚀</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              This site — documenting my journey and projects.
            </p>
          </div>
        </div>
      </section>


      {/* Dark Mode Toggle */}
      <div className="fixed bottom-6 right-6">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-4 py-2 bg-gray-700 text-white rounded-full shadow hover:bg-gray-800 transition"
        >
          {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>

      {/* Footer */}
      <footer className="text-center py-6 mt-12 border-t border-gray-400 dark:border-gray-700">
        <p className="mb-2">Let’s connect and build something great!</p>
        <div className="flex justify-center gap-4">
          <a href="https://github.com/rbinduradevelopments" target="_blank">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/redeemed-bindura-9b690728b/" target="_blank">
            LinkedIn
          </a>
          <a href="mailto:rbinduradevelopments@gmail.com">Email</a>
        </div>
      </footer>
    </main>
  );
}
