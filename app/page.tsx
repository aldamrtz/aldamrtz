"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutMe from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import { Typewriter } from "react-simple-typewriter";
import { ArrowUp } from "lucide-react";

export default function Page() {
  const [showButton, setShowButton] = useState(false);
  const [activeSection, setActiveSection] = useState("landing");
  const sectionNavigation = [
    { id: "landing", label: "Home" },
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "certifications", label: "Certifications" },
    { id: "contact", label: "Contact" },
  ];
  const heroSupportingTextClass =
    "text-sm sm:text-base lg:text-lg leading-tight";

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleSection) {
          setActiveSection(visibleSection.target.id);
        }
      },
      { threshold: [0.2, 0.4, 0.6], rootMargin: "-20% 0px -35%" },
    );

    sectionNavigation.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const letterVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <div>
      <Header />

      <nav
        className="fixed right-2.5 top-1/2 z-50 hidden -translate-y-1/2 flex-col items-center gap-3 md:flex"
        aria-label="Section navigation"
      >
        {sectionNavigation.map((section) => {
          const isActive = activeSection === section.id;

          return (
            <button
              key={section.id}
              type="button"
              onClick={() => scrollToSection(section.id)}
              className="group relative grid h-3 w-3 place-items-center cursor-pointer"
              aria-label={`Go to ${section.label}`}
              aria-current={isActive ? "true" : undefined}
            >
              <span
                className={`block rounded-full transition-all duration-300 ${
                  isActive
                    ? "h-3 w-3 bg-white shadow-[0_0_0_2px_rgba(255,255,255,0.12)]"
                    : "h-2 w-2 bg-white/25 group-hover:bg-[#b4dbdc]"
                }`}
              />
              <span className="pointer-events-none absolute right-7 whitespace-nowrap rounded-md bg-[#0b0d10] px-2 py-1 text-xs text-white opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100">
                {section.label}
              </span>
            </button>
          );
        })}
      </nav>

      <section
        id="landing"
        className="h-screen relative flex justify-center items-center px-8 lg:px-20"
        style={{
          backgroundColor: "#0b0d10",
        }}
      >
        <div className="flex flex-col items-center text-left z-10">
          <div className="flex items-center gap-4">
            <div
              className={`flex flex-col mt-6 sm:mt-12 lg:mt-16 mr-50 sm:mr-10 lg:mr-65 ${heroSupportingTextClass}`}
              style={{ WebkitTextStroke: "0.5px ", color: "#ffffff" }}
            >
              <span>Hey! You’ve just</span>
              <span className="relative mt-1 sm:mt-2 lg:mt-[7px]">
                landed on
              </span>
            </div>

            <div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[90%] lg:-translate-y-[85%] text-7xl lg:text-[6rem] leading-none z-100"
              style={{
                fontFamily: "'Brittany Signature', cursive",
                color: "#b4dbdc",
                WebkitTextStroke: "2px #72999b",
              }}
            >
              <span>alda’s</span>
            </div>
          </div>

          <h2 className="mt-5 lg:mt-5 relative text-7xl lg:text-9xl z-10">
            {["P", "O", "R", "T", "F", "O", "L", "I", "O", "!"].map(
              (char, idx) => (
                <motion.span
                  key={idx}
                  style={{
                    fontFamily: "'Anton', sans-serif",
                    letterSpacing: "0.05em",
                    display: "inline-block",
                    verticalAlign: "middle",
                    position: "relative",
                    overflow: "hidden",
                    color: "#ffffff",
                    lineHeight: 1,
                  }}
                  variants={letterVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                >
                  <span
                    style={{
                      display: "block",
                      transform: `translateY(0px)`,
                    }}
                  >
                    {char}
                  </span>
                </motion.span>
              ),
            )}
          </h2>
          <div className="w-full flex justify-start mt-2 lg:mt-2">
            <h3
              className={`${heroSupportingTextClass} z-10`}
              style={{
                WebkitTextStroke: "0.5px ",
                color: "#b4dbdc",
              }}
            >
              <Typewriter
                words={[
                  "Software Engineer",
                  "Web Developer",
                  "Full-Stack Developer",
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </h3>
          </div>
        </div>
      </section>

      <main>
        <section id="about">
          <AboutMe />
        </section>

        <section id="experience">
          <Experience />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="certifications">
          <Certifications />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
}
