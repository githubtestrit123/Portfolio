"use client";
import React, { useState } from "react";
import Image from "next/image";
import TabButton from "@/Components/TabButton/TabButton";

const TAB_DATA = {
  skills: (
    <ul className="list-disc pl-5 space-y-1">
      <li>JavaScript</li>
      <li>React.js</li>
      <li>Next.js</li>
      <li>MySQL</li>
      <li>PHP</li>
      <li>Laravel</li>
      <li>Framer Motion</li>
      <li>Git</li>
    </ul>
  ),
  education: (
    <ul className="list-disc pl-5 space-y-1">
      <li>Bachelor&apos;s in Computer Science</li>
      <li>University of Engineering &amp; Technology, Taxila</li>
    </ul>
  ),
  certifications: (
    <ul className="list-disc pl-5 space-y-1">
      <li>AWS Cloud Practitioner</li>
      <li>Google Professional Cloud Developer</li>
    </ul>
  ),
};

const AboutSection = () => {
  const [tab, setTab] = useState("skills");

  return (
    <section className="text-white py-16 bg-black" id="about">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Image */}
        <div className="flex justify-center md:justify-start">
          <Image
            src="public/images/about-image.png"
            width={450}
            height={450}
            alt="Workstation setup"
            className="rounded-2xl shadow-lg"
            loading="lazy"
          />
        </div>

        {/* Right Content */}
        <div className="text-left flex flex-col h-full">
          <h2 className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent text-4xl font-bold mb-4">
            About Me
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-gray-300">
            I am an undergraduate student with a passion for creating interactive
            and responsive web applications. I have experience with JavaScript,
            React, Redux, PHP, Laravel, MySQL, HTML, CSS, and Git. I’m a quick
            learner and love working in teams to build amazing applications.
          </p>

          {/* Tabs */}
          <div
            className="flex flex-row justify-start mt-8 gap-4 flex-wrap"
            role="tablist"
          >
            <TabButton
              selectTab={() => setTab("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => setTab("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => setTab("certifications")}
              active={tab === "certifications"}
            >
              Certifications
            </TabButton>
          </div>

          {/* Tab Content */}
          <div className="mt-6" role="tabpanel">
            {TAB_DATA[tab]}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
