"use client";
import { FaCode, FaDatabase, FaTools, FaPalette, FaLayerGroup, FaLaptopCode } from "react-icons/fa";
import { SiFrontendmentor, SiBackendless } from "react-icons/si";
import { motion } from "framer-motion";

const skillCategories = [
  {
    icon: <FaCode className="text-blue-400 text-2xl" />,
    title: "Programming Languages",
    skills: ["Python","SQL", "C"],
  },
  {
    icon: <FaDatabase className="text-blue-400 text-2xl" />,
    title: "Databases",
    skills: ["MySQL", "PostgreSQL", "MongoDB"],
  },
  {
    icon: <FaTools className="text-blue-400 text-2xl" />,
    title: "Data Visualization",
    skills: ["Power BI", "Tableau", "Matplotlib", "Seaborn"],
  },
  {
    icon: <FaTools className="text-blue-400 text-2xl" />,
    title: "Tools & Technologies",
    skills: ["Excel", "Jupyter Notebook", "Git"],
  },
  {
    icon: <FaPalette className="text-blue-400 text-2xl" />,
    title: "Statistical Methods",
    skills: ["Regression", "Clustering", "Hypothesis Testing", "Time Series"],
  },
];

export default function Skills() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="py-20 bg-[#0a0a0a] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-16 relative z-10">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-extrabold mb-3 text-white text-left">
          Skills <span className="block w-16 h-1 bg-blue-500 mt-2 rounded-full" />
        </h2>
        <p className="text-base text-gray-300 mb-8 text-left max-w-2xl">
          I have hands-on experience with a wide range of data analytics tools, programming languages, databases, and statistical methods for extracting insights and building data-driven solutions.
        </p>
        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, idx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 + idx * 0.1 }}
              className="bg-[#101624] border border-blue-900 rounded-2xl p-6 min-w-0"
            >
              <div className="flex items-center gap-3 mb-3">
                {cat.icon}
                <span className="text-xl font-bold text-white">{cat.title}</span>
              </div>
              <div className="flex flex-wrap gap-3 mt-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-[#181f2a] text-gray-100 px-3 py-0.5 rounded-full text-sm font-medium border border-blue-900"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
