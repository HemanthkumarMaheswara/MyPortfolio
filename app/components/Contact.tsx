"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaEnvelope as FaMail } from "react-icons/fa";
import type React from "react";

export default function Contact() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      alert("Thank you for reaching out! I'll get back to you soon.");
    }, 2000);
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="py-20 bg-[#0a0a0a]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-extrabold mb-3 text-white text-left">
          Get In Touch <span className="block w-20 h-1 bg-blue-500 mt-2 rounded-full" />
        </h2>
        <p className="text-base text-gray-300 mb-8 text-left max-w-2xl">
          Have a question or want to work together? Feel free to drop me a message. I'd love to hear from you!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <div className="mb-6">
              <h3 className="text-lg font-bold text-white mb-2">Contact Information</h3>
              <p className="text-sm text-gray-300 mb-4">Fill up the form and I'll get back to you as soon as possible.</p>
              <div className="flex items-center gap-3 mb-2 text-gray-300">
                <FaEnvelope className="text-blue-400" />
                <span className="font-semibold text-white">Email</span>
              </div>
              <div className="ml-7 mb-3 text-sm text-gray-300">hemanthkumarmaheswara@gmail.com</div>
              <div className="flex items-center gap-3 mb-2 text-gray-300">
                <FaPhone className="text-blue-400 transform scale-x-[-1]" />
                <span className="font-semibold text-white">Phone</span>
              </div>
              <div className="ml-7 mb-3 text-sm text-gray-300">+91 8309063099</div>
              <div className="flex items-center gap-3 mb-2 text-gray-300">
                <FaMapMarkerAlt className="text-blue-400" />
                <span className="font-semibold text-white">Location</span>
              </div>
              <div className="ml-7 mb-3 text-sm text-gray-300">Andhra Pradesh, India</div>
            </div>
            <div>
              <h4 className="text-base font-semibold text-white mb-2">Connect with me</h4>
              <div className="flex gap-4">
                <a href="https://github.com/HemanthkumarMaheswara" target="_blank" rel="noopener noreferrer" className="bg-[#181f2a] p-3 rounded-full text-gray-300 hover:text-blue-400 transition-colors">
                  <FaGithub size={22} />
                </a>
                <a href="https://www.linkedin.com/in/hemanthkumarmaheswara" target="_blank" rel="noopener noreferrer" className="bg-[#181f2a] p-3 rounded-full text-gray-300 hover:text-blue-400 transition-colors">
                  <FaLinkedin size={22} />
                </a>
                <a href="mailto:hemanthkumarmaheswara@gmail.com" className="bg-[#181f2a] p-3 rounded-full text-gray-300 hover:text-blue-400 transition-colors">
                  <FaMail size={22} />
                </a>
              </div>
            </div>
          </motion.div>
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="bg-[#101624] border border-blue-900 rounded-2xl p-8 flex flex-col gap-5 shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-white mb-1">Your Name</label>
                  <input type="text" name="name" required className="w-full p-3 rounded-lg bg-[#101624] border border-blue-900 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-white mb-1">Your Email</label>
                  <input type="email" name="email" required className="w-full p-3 rounded-lg bg-[#101624] border border-blue-900 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="john@example.com" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-white mb-1">Subject</label>
                <input type="text" name="subject" required className="w-full p-3 rounded-lg bg-[#101624] border border-blue-900 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="How can I help you?" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-white mb-1">Message</label>
                <textarea name="message" rows={4} required className="w-full p-3 rounded-lg bg-[#101624] border border-blue-900 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your message here..." />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                disabled={loading}
                className={`w-full py-3 text-base font-semibold text-white bg-blue-500 rounded-lg transition-all duration-300 hover:bg-blue-600 shadow-md mt-2 ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
              >
                {loading ? "Sending..." : "Send Message"}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
