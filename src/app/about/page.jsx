"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "@/Components/TabButton/TabButton";


const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-5 space-y-1">
        <li>JavaScript</li>
        <li>React.js</li>
        <li>Next.js</li>
        <li>MySQL</li>
        <li>PHP</li>
        <li>Laravel</li>
        
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-5 space-y-1">
        <li>Bachelor's in Computer Science</li>
        <li>University of Engineering & Technology, Taxila</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-5 space-y-1">
        <li>AWS Cloud Practitioner</li>
        <li>Google Professional Cloud Developer</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-12 items-center py-12 px-6 lg:px-16">
        {/* Image */}
        <div className="flex justify-center">
          <Image
            src="/Images/about-image.png"
            width={450}
            height={450}
            alt="Workstation setup"
            className="rounded-2xl shadow-lg"
          />
        </div>

        {/* Text content */}
        <div className="mt-8 md:mt-0 text-left flex flex-col h-full">
          <h2 className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent txt-4xl font-bold mb-4">
            About Me
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-gray-300">
            I am an undergraduate Student with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, Redux, PHP , Laravel, MySQL,
            HTML, CSS, and Git. I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing applications.
          </p>

          {/* Tabs */}
          <div className="flex flex-row justify-start mt-8 gap-4 flex-wrap">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
            </TabButton>
          </div>

          {/* Tab Content */}
          <div className="mt-6">{TAB_DATA.find((t) => t.id === tab).content}</div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
