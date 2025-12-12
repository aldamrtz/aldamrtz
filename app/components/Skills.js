"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

export default function Skills() {
  const hardSkills = [
    { name: "HTML", icon: "/logo/html.png" },
    { name: "CSS", icon: "/logo/css.png" },
    { name: "Bootstrap", icon: "/logo/bootstrap.png" },
    { name: "Tailwind CSS", icon: "/logo/tailwind-css.png" },
    { name: "Java", icon: "/logo/java.png" },
    { name: "JavaScript", icon: "/logo/js.png" },
    { name: "PHP", icon: "/logo/php.png" },
    { name: "React", icon: "/logo/react.png" },
    { name: "Next.js", icon: "/logo/nextjs.png" },
    { name: "Node.js", icon: "/logo/nodejs.png" },
    { name: "CodeIgniter", icon: "/logo/ci.png" },
    { name: "MySQL", icon: "/logo/mysql.png" },
    { name: "Git", icon: "/logo/git.png" },
    { name: "Docker", icon: "/logo/docker.png" },
    { name: "Kubernetes", icon: "/logo/kubernetes.png" },
    { name: "Jenkins", icon: "/logo/jenkins.png" },
    { name: "Figma", icon: "/logo/figma.png" },
    { name: "Canva", icon: "/logo/canva.png" },
    { name: "Word", icon: "/logo/ms-word.png" },
    { name: "Excel", icon: "/logo/ms-excel.png" },
    { name: "PowerPoint", icon: "/logo/ms-ppt.png" },
    { name: "Access", icon: "/logo/ms-access.png" },
  ];

  const softSkills = [
    "Teamwork",
    "Communication",
    "Adaptability",
    "Attention to Detail",
    "Time Management",
    "Initiative",
    "Problem Solving",
  ];

  return (
    <section id="skills" className="max-w-6xl mx-auto py-15 px-4 bg-[#0f2e51]">
      <h2 className="flex items-center mb-10 justify-center gap-4">
        <span className="flex-1 h-px bg-[#b4dbdc]"></span>
        <span
          className="text-2xl lg:text-3xl font-semibold flex gap-2 items-end"
          style={{
            color: "#eb5c74",
            WebkitTextStroke: "1px #c3224d",
          }}
        >
          <span
            className="text-3xl lg:text-4xl"
            style={{
              color: "#a5c882",
              WebkitTextStroke: "1px #6f8757",
              fontFamily: "'Brittany Signature', cursive",
              fontWeight: "400",
              lineHeight: "1",
              transform: "translateY(4px)",
            }}
          >
            My
          </span>
          <span>Skill Set</span>
        </span>
        <span className="flex-1 h-px bg-[#b4dbdc]"></span>
      </h2>

      <motion.div className="flex flex-col gap-5">
        <div className="flex flex-col md:flex-row md:gap-8">
          <div className="flex-none md:w-1/5">
            <h3 className="font-semibold mb-3 text-lg text-white">Languages</h3>
            <div className="flex flex-col gap-2">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                className="flex items-center justify-center px-3 py-1 rounded-full text-sm bg-white text-[#0f2e51]"
              >
                <span>Indonesian</span>
              </motion.span>

              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                viewport={{ once: false, amount: 0.2 }}
                className="flex items-center justify-center px-3 py-1 rounded-full text-sm bg-white text-[#0f2e51]"
              >
                <span>English</span>
              </motion.span>
            </div>
          </div>

          <div className="flex-1 mt-4 md:mt-0">
            <h3 className="font-semibold mb-3 text-lg text-white">
              Non-Technical Skills
            </h3>
            <div className="grid grid-cols-2 grid-rows-4 gap-2 md:grid-cols-4 md:grid-rows-2">
              {softSkills.map((soft, idx) => (
                <motion.span
                  key={soft}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  viewport={{ once: false, amount: 0.2 }}
                  className="bg-white text-[#0f2e51] px-3 py-1 rounded-full text-sm text-center"
                >
                  {soft}
                </motion.span>
              ))}
            </div>
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-3 text-lg text-white">
            Technical Skills
          </h3>
          <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-6 gap-4">
            {hardSkills.map((skill, idx) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                viewport={{ once: false, amount: 0.2 }}
                className="bg-white p-4 rounded-lg shadow flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-12 h-12 object-contain"
                />
                <span className="mt-2 text-sm font-medium text-center text-[#0f2e51]">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
