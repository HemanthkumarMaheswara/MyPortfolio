"use client";
import { motion } from "framer-motion";
import { FaTag } from "react-icons/fa";

const projects = [
  {
    title: "Sentiment Analysis",
    description: "Developed a machine learning project using the Naive Bayes algorithm to predict sentiment of reviews.",
    image: "p1.png",
    viewLink: "https://github.com/HemanthkumarMaheswara/Sentiment-Analysis-Using-Naive-Bayes.git",
  },
  {
    title: "Seat Allotment Dashboard",
    description: "It provides insights into the distribution of seats across colleges and categories in India.",
    image: "p4.png",
    viewLink: "https://github.com/HemanthkumarMaheswara/BDS-Seat-Allotment.git",
  },
  {
    title: "Customer Segmentation",
    description: "Segmenting customers based on purchasing behaviors using clustering algorithms to identify target customer groups.",
    image: "p2.png",
    viewLink: "https://github.com/HemanthkumarMaheswara/Customer-Segmentation.git",
  },
];

export default function Projects() {
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
          Projects <span className="block w-16 h-1 bg-blue-500 mt-2 rounded-full" />
        </h2>
        <p className="text-base text-gray-300 mb-8 text-left max-w-2xl">
          Here are some of the projects I've worked on, showcasing my skills in various technologies and problem domains.
        </p>
        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 + idx * 0.1 }}
              className="bg-[#101624] rounded-2xl overflow-hidden border border-blue-900 flex flex-col shadow-lg"
            >
              {/* Project Image */}
              <div className="flex items-center justify-center p-6 min-h-[180px] bg-transparent">
                <img src={project.image} alt={project.title} className="rounded-lg shadow-md w-full h-40 object-cover object-center" />
              </div>
              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-lg font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-3 text-sm flex-1">{project.description}</p>
                <a
                  href={project.viewLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-auto bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg transition-colors duration-200 text-xs text-center"
                >
                  View Project
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
