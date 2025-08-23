"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="pt-20 lg:py-24 bg-black">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="lg:col-span-7 text-center lg:text-left"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-7xl font-extrabold">
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Hello, I&apos;m{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={["Zainab Tariq", 2000]}
              wrapper="span"
              speed={50}
              repeat={0}
            />
          </h1>

          <p className="text-white-400 text-lg mb-8">Frontend Developer</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link
              href="/contact"
              className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium hover:opacity-90 transition"
            >
              Hire Me
            </Link>
            <Link
              href="/cv.pdf"
              className="px-6 py-3 rounded-full border border-purple-500 text-white hover:bg-purple-600 transition"
              download
            >
              Download CV
            </Link>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="lg:col-span-5 flex justify-center lg:justify-end"
        >
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] lg:w-[350px] lg:h-[350px] relative overflow-hidden">
            <Image
              src="/images/photo.jpeg"
              alt="hero image"
              className="object-cover"
              width={350}
              height={350}
              priority
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;
