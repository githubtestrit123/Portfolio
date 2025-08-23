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

// Animation variants
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const Projects = () => {
  return (
    <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 bg-black text-white">
      <div className="container mx-auto text-center">
        
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-12 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent"
        >
          My Projects
        </motion.h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="relative group rounded-xl overflow-hidden shadow-lg"
            >
              {/* Project Image */}
              <img
                src={project.image}
                alt={`Preview of ${project.title}`}
                className="w-full h-60 object-cover group-hover:scale-110 transition-transform duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent opacity-0 group-hover:opacity-100 flex items-center justify-center gap-4 transition-opacity duration-500 backdrop-blur-sm">
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
              <div className="p-5 bg-black-800 hover: bg-purple-500">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-white-300 mt-2">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
