"use client";

import React, { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);

    emailjs
      .send(
        "service_7y6kr2p",
        "template_9pmidrb",
        { name, email, subject, message },
        "FfRPOZqlFqqpvXP7A"
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
          setSubject("");
          setMessage("");
          setSending(false);
        },
        (error) => {
          Swal.fire({
            title: "Failed!",
            text: "Something went wrong. Please try again.",
            icon: "error",
            confirmButtonColor: "#dc2626",
          });
          console.error(error);
          setSending(false);
        }
      );
  };

  return (
    <main className="min-h-screen bg-[#121212] px-6 py-16 flex justify-center">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        
        {/* Left: Info + Socials */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-4">Let’s Connect</h2>
          <p className="text-[#ADB7BE] mb-6">
            I’m currently looking for new opportunities. Whether you have a
            question or just want to say hi, I’ll try my best to get back to you!
          </p>

          <div className="flex gap-4">
            <a
              href="https://github.com/githubtestrit123"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-purple-500 text-2xl transition-colors"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/zainab-tariq-186b88301"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-purple-500 text-2xl transition-colors"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="bg-[#18191E] p-6 rounded-xl shadow-lg border border-[#33353F]">
          <form className="flex flex-col" onSubmit={sendEmail}>
            {/* Name */}
            <div className="mb-6">
              <label htmlFor="name" className="text-white block mb-2 text-sm font-medium">
                Your Name
              </label>
              <input
                id="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-[#121212] border border-[#33353F] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Jacob Jones"
              />
            </div>

            {/* Email */}
            <div className="mb-6">
              <label htmlFor="email" className="text-white block mb-2 text-sm font-medium">
                Your Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-[#121212] border border-[#33353F] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="jacob@google.com"
              />
            </div>

            {/* Subject */}
            <div className="mb-6">
              <label htmlFor="subject" className="text-white block text-sm mb-2 font-medium">
                Subject
              </label>
              <input
                id="subject"
                required
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="bg-[#121212] border border-[#33353F] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Just saying hi"
              />
            </div>

            {/* Message */}
            <div className="mb-6">
              <label htmlFor="message" className="text-white block text-sm mb-2 font-medium">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="bg-[#121212] border border-[#33353F] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Let's talk about..."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={sending}
              className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 
              hover:opacity-90 transition-opacity disabled:opacity-60
              text-white font-medium py-2.5 px-5 rounded-lg w-full"
            >
              {sending ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
