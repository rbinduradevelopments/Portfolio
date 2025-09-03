"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  const projects = [
    {
      title: "2D Platformer Game 🎮",
      caption: "My first ever game",
      description:
        "The first game I made during my A-Level Digital Media studies — a 2D platformer built with Construct 3.",
      previewType: "video", // video for the game
      preview: "/game-preview.mp4", // save this file inside /public
      link: "/projects/game",
    },
    {
      title: "Car Hire System 🚗",
      caption: "Computer Science NEA",
      description:
        "A car rental web app I created for my A-Level NEA using ASP.NET MVC with C#.",
      previewType: "image", // screenshot preview
      preview: "/carhire1.png", // save inside /public
      link: "/projects/car-rental",
    },
    {
      title: "Careomat Cleaning Web App 🧹",
      caption: "Freelance project",
      description:
        "A business web app designed for a cleaning company to showcase services and manage inquiries.The link below does not go anywhere, i will add the Careomat weblink soon.",
      previewType: "image", // screenshot preview
      preview: "/careomat1.png", // save inside /public
      link: "/projects/careomat",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-300 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white py-16 px-6">
      {/* Header Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl font-extrabold mb-4">My Projects</h1>
        <p className="text-lg max-w-2xl mx-auto text-gray-700 dark:text-gray-300">
          Welcome to my project showcase! 🚀 <br />
          Click any project below to learn more about how I built it and explore
          the final result.
        </p>
      </section>

      {/* Projects Gallery */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden transition"
          >
            {/* Preview Section */}
            <div className="relative w-full h-48">
              {project.previewType === "video" ? (
                <video
                  src={project.preview}
                  autoPlay
                  muted
                  loop
                  className="w-full h-full object-cover"
                />
              ) : (
                <Image
                  src={project.preview}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              )}
              <div className="absolute bottom-2 left-2 bg-black bg-opacity-60 text-white text-sm px-3 py-1 rounded-lg">
                {project.caption}
              </div>
            </div>

            {/* Content Section */}
            <div className="p-5">
              <h2 className="text-xl font-bold mb-2">{project.title}</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {project.description}
              </p>
              <Link
                href={project.link}
                className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
              >
                Learn More →
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
