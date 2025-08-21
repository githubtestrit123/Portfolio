"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }} // ✅ animation sirf ek dafa chalega
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Hello, I&apos;m{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Zainab Tariq", // ✅ ek hi naam, no infinite loop needed
                2000,           // 2 sec rukega
              ]}
              wrapper="span"
              speed={50}
              repeat={0} // ✅ sirf ek dafa chalega
            />
          </h1>
          <p className="text-gray-400 text-lg mb-8">Frontend Developer</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
            <Link
              href="/contact"
              className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium hover:opacity-90 transition"
            >
              Hire Me
            </Link>
            <Link
              href="/cv.pdf" // ✅ direct CV link daal dena
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
          viewport={{ once: true }} // ✅ sirf ek dafa chalega
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[350px] lg:h-[350px] relative overflow-hidden">
            <Image
              src="/images/hero-image.png"
              alt="hero image"
              className="object-cover"
              width={350}
              height={350}
              priority // ✅ first image fast load hogi
              placeholder="blur" // agar blur placeholder chahiye to image ko `next/image` blur support se save karna hoga
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
