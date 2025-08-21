"use client";
import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaGlobe, FaMobileAlt, FaThLarge } from "react-icons/fa"; // ✅ react-icons
import Link from "next/link";

// ✅ All project data here
const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "Project 1 description",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Photography Portfolio Website",
    description: "Project 2 description",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "E-commerce Application",
    description: "Project 3 description",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Food Ordering Application",
    description: "Project 4 description",
    image: "/images/projects/4.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "React Firebase Template",
    description: "Authentication and CRUD operations",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Full-stack Roadmap",
    description: "Project 6 description",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

// ✅ Single Project Card
const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  return (
    <div>
      <div
        className="h-52 md:h-72 rounded-t-xl relative group"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
      >
        {/* Overlay buttons */}
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 ">
          <Link
            href={gitUrl}
            className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <span className="absolute inset-0 flex items-center justify-center text-[#ADB7BE] group-hover/link:text-white">
              {"</>"}
            </span>
          </Link>
          <Link
            href={previewUrl}
            className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <span className="absolute inset-0 flex items-center justify-center text-[#ADB7BE] group-hover/link:text-white">
              👁
            </span>
          </Link>
        </div>
      </div>

      {/* Card Bottom */}
      <div className="text-white rounded-b-xl mt-3 bg-[#181818] py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE]">{description}</p>
      </div>
    </div>
  );
};

// ✅ Tab Button with underline + icons
const ProjectTab = ({ label, icon, active, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="relative flex items-center gap-2 px-4 py-2 text-lg font-medium group"
    >
      <span className={`${active ? "text-white" : "text-[#ADB7BE] group-hover:text-white"} flex items-center gap-2`}>
        {icon} {label}
      </span>
      {/* underline */}
      <span
        className={`absolute bottom-0 left-0 h-[2px] bg-purple-500 transition-all duration-300 ${
          active ? "w-full" : "w-0 group-hover:w-full"
        }`}
      ></span>
    </button>
  );
};

// ✅ Main Section
const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>

      {/* Tabs with icons + underline */}
      <div className="flex justify-center gap-8 border-b border-gray-700 pb-4">
        <ProjectTab
          label="All"
          icon={<FaThLarge />}
          active={tag === "All"}
          onClick={() => setTag("All")}
        />
        <ProjectTab
          label="Web"
          icon={<FaGlobe />}
          active={tag === "Web"}
          onClick={() => setTag("Web")}
        />
        <ProjectTab
          label="Mobile"
          icon={<FaMobileAlt />}
          active={tag === "Mobile"}
          onClick={() => setTag("Mobile")}
        />
      </div>

      {/* Project Cards */}
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12 mt-8">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={project.id}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
