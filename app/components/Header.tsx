"use client";
import { useState, useCallback, useEffect } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  "Home",
  "About",
  "Skills",
  "Projects",
  "Contact",
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShadow, setHasShadow] = useState(false);

  // Toggle Mobile Menu
  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  // Close Mobile Menu
  const closeMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

  // Add Shadow on Scroll
  useEffect(() => {
    const handleScroll = () => {
      setHasShadow(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 w-full z-50 transition-shadow duration-300 font-sans ${
        hasShadow ? "shadow-lg" : "shadow-none"
      } bg-[#0a0a0a]`}
    >
      <div className="w-full flex justify-between items-center px-8 py-4">
        {/* Logo */}
        <motion.h1
          initial={{ y: -200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
          className="text-2xl font-extrabold text-white tracking-tight select-none font-serif"
        >
          MH.
        </motion.h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <motion.div
              key={item}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <Link
                to={item.toLowerCase()}
                smooth={true}
                duration={500}
                className="relative text-white/90 hover:text-blue-400 cursor-pointer font-semibold transition-all duration-300 group px-1"
              >
                {item}
                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </Link>
            </motion.div>
          ))}
          {/* Resume Button */}
          <a
            href="https://drive.google.com/file/d/10OsSq0IfLb2Ijxbw1R57OMFwIh_UjEu6/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded-xl transition-colors duration-200 shadow-sm"
          >
            Resume
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white/80 focus:outline-none"
          aria-label="Toggle Menu"
          aria-expanded={isOpen}
        >
          <motion.svg
            className="w-7 h-7"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
            animate={{ rotate: isOpen ? 90 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <path
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            ></path>
          </motion.svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#101624] shadow-lg rounded-b-lg overflow-hidden"
          >
            {navItems.map((item) => (
              <motion.div
                key={item}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <Link
                  to={item.toLowerCase()}
                  smooth={true}
                  duration={500}
                  className="block py-3 px-4 text-white/90 hover:bg-blue-500/10 hover:text-blue-400 cursor-pointer transition-colors duration-300"
                  onClick={closeMenu}
                >
                  {item}
                </Link>
              </motion.div>
            ))}
            <div className="flex items-center px-4 py-2 space-x-4 border-t border-white/10">
              <a
                href="https://drive.google.com/file/d/10OsSq0IfLb2Ijxbw1R57OMFwIh_UjEu6/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-xl transition-colors duration-200 shadow-sm"
              >
                Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
