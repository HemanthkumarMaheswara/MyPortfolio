"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Link } from "react-scroll";

export default function Home() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="pt-24 min-h-screen flex flex-col md:flex-row items-center justify-between bg-[#0a0a0a] px-6 md:px-24 gap-10 md:gap-0 relative overflow-hidden"
    >
      {/* Left Side - Photo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, x: -60 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 80 }}
        className="w-full md:w-1/2 flex justify-center items-center z-10 mb-12 md:mb-0"
      >
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-xl opacity-20 animate-pulse" />
          <Image
            src="my1.jpg"
            alt="Hemanth's Picture"
            width={400}
            height={400}
            className="rounded-full shadow-lg object-cover relative z-10 border-4 border-blue-500/20"
          />
        </div>
      </motion.div>

      {/* Right Side - Text Content */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
        className="w-full md:w-1/2 flex flex-col justify-center items-start z-10"
      >
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-blue-500 font-semibold text-lg mb-2"
        >
          Hello! I&apos;m
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-6xl font-extrabold mb-4 text-white"
        >
          Hemanth <span className="text-blue-500">Maheswara</span>
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-2xl md:text-3xl font-medium text-gray-300 mb-2"
        >
          Data Analyst & Software Engineering Student
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg text-gray-400 mb-8 max-w-xl"
        >
          Building elegant solutions to complex problems with modern technologies.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-row gap-4 mb-6"
        >
          <Link
            to="contact"
            smooth={true}
            duration={500}
            offset={-80}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-xl transition-colors duration-200 shadow-sm cursor-pointer"
          >
            Contact Me
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            offset={-80}
            className="bg-[#181f2a] hover:bg-blue-900 text-white font-semibold px-6 py-3 rounded-xl transition-colors duration-200 shadow-sm border border-blue-900 cursor-pointer"
          >
            View Projects
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-row gap-6 mt-2"
        >
          <a href="https://github.com/HemanthkumarMaheswara" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 text-2xl transition-colors duration-200">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/hemanthkumarmaheswara" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 text-2xl transition-colors duration-200">
            <FaLinkedin />
          </a>
          <a href="mailto:hemanthkumarmaheswara@gmail.com" className="text-gray-400 hover:text-blue-500 text-2xl transition-colors duration-200">
            <FaEnvelope />
          </a>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
