"use client";

import React, { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_7y6kr2p", // from EmailJS
        "template_9pmidrb", // from EmailJS
        { name, email, title, message },
        "FfRPOZqlFqqpvXP7A" // from EmailJS
      )
      .then(
        () => {
          Swal.fire({
            title: "Message Sent!",
            text: "Thanks for reaching out.",
            icon: "success",
            confirmButtonColor: "#4f46e5",
          });
          setName("");
          setEmail("");
          setTitle("");
          setMessage("");
        },
        (error) => {
          Swal.fire({
            title: "Failed!",
            text: "Something went wrong. Please try again.",
            icon: "error",
            confirmButtonColor: "#dc2626",
          });
          console.error(error);
        }
      );
  };

  return (
    <main className="min-h-screen bg-[#121212] px-6 py-16 flex justify-center">
      <div className="max-w-5xl w-full grid md:grid-cols-2 gap-12 items-start">
        
        {/* Left Side */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-4">Let’s Connect</h2>
          <p className="text-[#ADB7BE] mb-6">
            I’m currently looking for new opportunities, my inbox is always
            open. Whether you have a question or just want to say hi, I’ll try
            my best to get back to you!
          </p>

          <div className="flex gap-4">
            <a
              href="https://github.com/githubtestrit123"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-primary-500 text-2xl"
            >
              <FaGithub />
            </a>
            <a
              href="www.linkedin.com/in/zainab-tariq-186b88301"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-primary-500 text-2xl"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Right Side (Form) */}
        <div>
          {setEmail ? (
            <p className="text-green-500 text-sm mt-2">
              ✅ Email sent successfully!
            </p>
          ) : (
            <form className="flex flex-col" onSubmit={handleSubmit}>
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="text-white block mb-2 text-sm font-medium"
                >
                  Your Name
                </label>
                <input
                  name="name"
                  id="name"
                  required
                  className="bg-[#18191E] border border-[#33353F] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                  placeholder="Jacob Jones"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="text-white block mb-2 text-sm font-medium"
                >
                  Your Email
                </label>
                <input
                  name="email"
                  type="email"
                  id="email"
                  required
                  className="bg-[#18191E] border border-[#33353F] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                  placeholder="jacob@google.com"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="subject"
                  className="text-white block text-sm mb-2 font-medium"
                >
                  Subject
                </label>
                <input
                  name="subject"
                  type="text"
                  id="subject"
                  required
                  className="bg-[#18191E] border border-[#33353F] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                  placeholder="Just saying hi"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="text-white block text-sm mb-2 font-medium"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  required
                  rows="5"
                  className="bg-[#18191E] border border-[#33353F] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                  placeholder="Let's talk about..."
                />
              </div>

              <button
                type="submit"
                className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 
             hover:opacity-90 transition-opacity 
             text-white font-medium py-2.5 px-5 rounded-lg w-full"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </main>
  );
}
