"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutMe from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import { Typewriter } from "react-simple-typewriter";
import { ArrowUp } from "lucide-react";

export default function Page() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const letterVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <div>
      <Header />

      <section
        id="landing"
        className="h-screen relative flex justify-center items-center px-8 lg:px-20"
        style={{
          backgroundColor: "#0f2e51",
        }}
      >
        <div className="flex flex-col items-start text-left z-10">
          <div className="flex items-center gap-4">
            <div
              className="flex flex-col text-[18px] lg:text-[22px] leading-tight"
              style={{ WebkitTextStroke: "0.5px #ffbd4a", color: "#ffffb0" }}
            >
              <span>Hey! You’ve just</span>
              <span>landed on</span>
            </div>

            <div
              className="font-medium text-7xl lg:text-[6rem] leading-none flex items-center -ml-13 lg:-ml-15 -translate-y-[-30px] lg:translate-y-[45px]"
              style={{
                fontFamily: "'Brittany Signature', cursive",
                color: "#a5c882",
                WebkitTextStroke: "2px #6f8757",
              }}
            >
              <span>Alda’s</span>
            </div>
          </div>

          <h2
            className="mt-17 relative text-5xl lg:text-8xl font-bold z-10"
            style={{
              position: "relative",
              color: "#eb5c74",
              WebkitTextStroke: "3px #c3224d",
              letterSpacing: "0.05em",
              lineHeight: 1,
            }}
          >
            {["P", "O", "R", "T", "F", "O", "L", "I"].map((char, idx) => (
              <motion.span
                key={idx}
                style={{
                  display: "inline-block",
                  position: "relative",
                  overflow: "hidden",
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
            ))}

            <motion.span
              className="relative inline-block overflow-visible px-1"
              initial={{ rotate: -180, scale: 0, y: isMobile ? -5 : -18 }}
              animate={{ rotate: 0, scale: 1, y: isMobile ? -5 : -18 }}
              transition={{ duration: 1, delay: 0.8 }}
              style={{ display: "inline-block" }}
            >
              O
              <svg
                className="absolute transition-transform duration-700 ease-in-out hover:rotate-[180deg]"
                style={{
                  left: isMobile ? "-11%" : "-19%",
                  top: isMobile ? "-10%" : "-16%",
                  width: isMobile ? "120%" : "140%",
                  height: isMobile ? "120%" : "140%",
                }}
                viewBox="0 0 100 100"
                preserveAspectRatio="xMidYMid meet"
              >
                <image href="/star.png" width="100" height="100" />
              </svg>
            </motion.span>

            <motion.span
              initial={{ y: 2, opacity: 0 }}
              animate={{ y: -5, opacity: 1 }}
              transition={{ delay: 1.0, duration: 0.5 }}
              style={{ display: "inline-block" }}
            >
              !
            </motion.span>
          </h2>

          <h3
            className="text-[18px] lg:text-[22px] leading-tight z-10 text-white"
            style={{
              WebkitTextStroke: "0.5px ",
              color: "#b4dbdc",
            }}
          >
            <Typewriter
              words={[
                "Software Engineer",
                "Web Developer",
                "Full-Stack Enthusiast",
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
      </section>

      <main>
        <section id="about">
          <AboutMe />
        </section>

        <section id="education">
          <Education />
        </section>

        <section id="skills">
          <Skills />
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
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 bg-[#eb5c74] hover:bg-[#c3224d] 
    text-white rounded-full p-4 shadow-lg transition-all duration-300 cursor-pointer flex items-center justify-center"
          style={{
            width: "45px",
            height: "45px",
          }}
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}
    </div>
  );
}
