"use client";

import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const navItems = [
    "About",
    "Experience",
    "Projects",
    "Certifications",
    "Contact",
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
      setScrolled(scrollTop > 50);

      const sections = navItems.map((id) =>
        document.getElementById(id.toLowerCase())
      );
      sections.forEach((sec, idx) => {
        if (sec) {
          const offsetTop = sec.offsetTop;
          const offsetHeight = sec.offsetHeight;
          if (
            scrollTop >= offsetTop - 100 &&
            scrollTop < offsetTop + offsetHeight - 100
          ) {
            setActiveSection(navItems[idx]);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";
    };
  }, [menuOpen]);

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed w-full z-50 transition-colors duration-500 ${
        menuOpen
          ? "bg-[#b4dbdc]"
          : scrolled
          ? "bg-[#ffffff] backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div
        className="absolute bottom-0 left-0 h-[3px] bg-[#b4dbdc] transition-all duration-150 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />

      <nav className="max-w-7xl mx-auto px-6 py-6 md:py-8 flex items-center justify-between">
        <div className="hidden md:flex flex-1 justify-center">
          <ul
            className={`flex space-x-4 text-lg font-medium ${
              scrolled ? "text-[#0f2e51]" : "text-[#ffffff]"
            }`}
          >
            {navItems.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className={`
              px-4 py-2 rounded-md
              transition-all duration-200
              ${
                activeSection === item
                  ? "bg-[#0f2e51] text-[#ffffff]"
                  : "hover:bg-white/10 hover:text-[#b4dbdc]"
              }
            `}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:hidden ml-auto">
          <button
            className={`focus:outline-none ${
              scrolled ? "text-[#0f2e51]" : "text-[#ffffff]"
            }`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <>
              <motion.div
                className="fixed inset-0 bg-black/40 z-40 md:hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setMenuOpen(false)}
              />

              <motion.div
                className="fixed top-0 right-0 h-screen w-70 bg-[#ffffff] md:hidden z-50 shadow-md"
                initial={{ x: "100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: "100%", opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <ul className="flex flex-col items-start py-10 pl-10 space-y-6 text-lg font-medium text-[#0f2e51]">
                  {navItems.map((item) => (
                    <li key={item} className="w-full">
                      <a
                        href={`#${item.toLowerCase()}`}
                        className={`w-full px-4 py-2 rounded-md
              transition-all duration-200 ${
                activeSection === item
                  ? "bg-[#0f2e51] text-[#ffffff]"
                  : "hover:bg-white/10 hover:text-[#b4dbdc]"
              }`}
                        onClick={() => setMenuOpen(false)}
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
