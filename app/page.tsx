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
        <div className="flex flex-col items-center text-left z-10">
          <div className="flex items-center gap-4">
            <div
              className="flex flex-col mt-6 sm:mt-12 lg:mt-16 mr-50 sm:mr-10 lg:mr-65 text-sm sm:text-base lg:text-lg leading-tight"
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
                color: "#a5c882",
                WebkitTextStroke: "2px #6f8757",
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
              )
            )}
          </h2>
          <div className="w-full flex justify-start mt-2 lg:mt-2">
            <h3
              className="text-sm sm:text-base lg:text-lg leading-tight z-10"
              style={{
                WebkitTextStroke: "0.5px ",
                color: "#a5c882",
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
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 bg-[#a5c882] hover:bg-[#6f8757] 
    hover:text-white text-[#0f2e51] rounded-full p-4 shadow-lg transition-all duration-300 cursor-pointer flex items-center justify-center"
          style={{
            width: "45px",
            height: "45px",
          }}
          aria-label="Scroll to top"
        >
          <ArrowUp strokeWidth={4.5} className="w-6 h-6 " />
        </button>
      )}
    </div>
  );
}
