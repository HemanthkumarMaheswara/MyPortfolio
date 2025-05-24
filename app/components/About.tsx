"use client";
import { motion } from "framer-motion";
import { FaGraduationCap, FaBriefcase, FaDownload, FaUser } from "react-icons/fa";
import Image from "next/image";

export default function About() {
  return (
    <motion.section
      id="about"
      className="py-20 bg-[#0a0a0a] relative overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-16 flex flex-col lg:flex-row gap-12 items-start">
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="flex-1 min-w-0"
        >
          {/* Section Title */}
          <h2 className="text-3xl md:text-4xl font-extrabold mb-3 text-white text-left">
            About Me <span className="block w-16 h-1 bg-blue-500 mt-2 rounded-full" />
          </h2>

          {/* Bio */}
          <div className="flex items-center gap-2 mb-1">
            <FaUser className="text-blue-400 text-lg" />
            <span className="text-lg font-semibold text-blue-400">Bio</span>
          </div>
          <p className="text-base text-gray-300 mb-6 max-w-2xl text-justify">
            I am an aspiring data analyst with a passion for transforming data into meaningful insights. Specializing in data analysis and visualization, I combine analytical thinking with technical skills to uncover valuable patterns and trends. With a strong foundation in data science and statistical analysis, I strive to deliver data-driven solutions that help organizations make informed decisions and achieve their goals.
          </p>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Education Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="bg-[#101624] border border-blue-900 rounded-2xl p-5 min-w-0"
            >
              <div className="flex items-center gap-2 mb-1">
                <FaGraduationCap className="text-blue-400 text-base" />
                <span className="text-lg font-bold text-white">Education</span>
              </div>
              <div className="mt-1">
                <div className="font-semibold text-white text-base">B.Tech in Data Science</div>
                <div className="text-gray-400 text-xs mb-1">Aditya University</div>
                <div className="text-gray-400 text-xs">2022 - Present</div>
                <div className="text-blue-400 text-xs mt-1">Surampalem, Andhra Pradesh</div>
              </div>
            </motion.div>
            {/* Experience Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="bg-[#101624] border border-blue-900 rounded-2xl p-5 min-w-0"
            >
              <div className="flex items-center gap-2 mb-1">
                <FaBriefcase className="text-blue-400 text-base" />
                <span className="text-lg font-bold text-white">Experience</span>
              </div>
              <div className="mt-1">
                <div className="font-semibold text-white text-base">Data Analytics Intern</div>
                <div className="text-gray-400 text-xs mb-1">Easy Hiring Infotech</div>
                <div className="text-gray-400 text-xs">May 2025 - July 2025</div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col items-center w-full lg:w-80 flex-shrink-0"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative mb-4"
          >
            <Image
              src="my.jpg"
              alt="Hemanth's Picture"
              width={160}
              height={160}
              className="rounded-full border-4 border-blue-500/30 shadow-lg object-cover"
            />
          </motion.div>
          <div className="text-xl font-bold text-white text-center">Hemanth Maheswara</div>
          <div className="text-gray-400 text-center mb-2 text-sm">Data Analyst & Software Engineering Student</div>
          <div className="flex flex-wrap gap-2 justify-center mb-4">
            <span className="bg-[#181f2a] text-blue-400 px-3 py-0.5 rounded-full text-xs font-semibold">Python</span>
            <span className="bg-[#181f2a] text-blue-400 px-3 py-0.5 rounded-full text-xs font-semibold">SQL</span>
            <span className="bg-[#181f2a] text-blue-400 px-3 py-0.5 rounded-full text-xs font-semibold">PowerBI</span>
            <span className="bg-[#181f2a] text-blue-400 px-3 py-0.5 rounded-full text-xs font-semibold">Excel</span>
          </div>
          <a
            href="https://drive.google.com/file/d/10OsSq0IfLb2Ijxbw1R57OMFwIh_UjEu6/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-xl transition-colors duration-200 shadow-sm w-full text-center text-lg"
          >
            <FaDownload /> Resume
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
}
