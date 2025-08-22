"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";

// ✅ Project Data (Easily Add More Projects Here)
const projects = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "A modern responsive portfolio built with React and Tailwind CSS.",
    image: "/images/projects/portfolio.png",
    demoLink: "https://your-demo-link.com",
    codeLink: "https://github.com/your-github/portfolio",
  },
  {
    id: 2,
    title: "E-commerce Website",
    description: "Full-stack e-commerce site with cart and checkout system.",
    image: "/images/projects/ecommerce.png",
    demoLink: "https://your-demo-link.com",
    codeLink: "https://github.com/your-github/ecommerce",
  },
  {
    id: 3,
    title: "Blog Website",
    description: "A blog platform with dynamic content using Next.js and MongoDB.",
    image: "/images/projects/blog.png",
    demoLink: "https://your-demo-link.com",
    codeLink: "https://github.com/your-github/blog",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 bg-black text-white">
      <div className="container mx-auto px-6">
        
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12"
        >
          My Projects
        </motion.h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative group rounded-xl overflow-hidden shadow-lg"
            >
              {/* Project Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-60 object-cover group-hover:scale-110 transition-transform duration-300"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-4 transition-opacity duration-300">
                {/* Code Link */}
                <Link
                  href={project.codeLink}
                  target="_blank"
                  className="p-3 bg-white text-black rounded-full hover:bg-gray-200 transition"
                >
                  <CodeBracketIcon className="h-6 w-6" />
                </Link>
                {/* Demo Link */}
                <Link
                  href={project.demoLink}
                  target="_blank"
                  className="p-3 bg-white text-black rounded-full hover:bg-gray-200 transition"
                >
                  <EyeIcon className="h-6 w-6" />
                </Link>
              </div>

              {/* Project Info */}
              <div className="p-5 bg-gray-800">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-gray-300 mt-2">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
