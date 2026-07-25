"use client";

import { motion } from "framer-motion";
import {
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiBootstrap,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiPhp,
  SiCodeigniter,
  SiMysql,
  SiPostman,
  SiGit,
  SiDocker,
  SiKubernetes,
  SiFigma,
  SiCanva,
} from "react-icons/si";

export default function Skills() {
  const techStack = [
    { name: "HTML", icon: SiHtml5, color: "#e34f26" },
    { name: "CSS", icon: SiCss, color: "#1572b6" },
    { name: "JavaScript", icon: SiJavascript, color: "#f7df1e" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178c6" },
    { name: "React", icon: SiReact, color: "#61dafb" },
    { name: "Next.js", icon: SiNextdotjs, color: "#0b0d10" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38bdf8" },
    { name: "Bootstrap", icon: SiBootstrap, color: "#7952b3" },
    { name: "Node.js", icon: SiNodedotjs, color: "#5fa04e" },
    { name: "Express.js", icon: SiExpress, color: "#0b0d10" },
    { name: "PHP", icon: SiPhp, color: "#777bb4" },
    { name: "CodeIgniter", icon: SiCodeigniter, color: "#ef4223" },
    { name: "MySQL", icon: SiMysql, color: "#4479a1" },
    { name: "Git", icon: SiGit, color: "#f05032" },
    { name: "Postman", icon: SiPostman, color: "#ff6c37" },
    { name: "Docker", icon: SiDocker, color: "#2496ed" },
    { name: "Kubernetes", icon: SiKubernetes, color: "#326ce5" },
    { name: "Figma", icon: SiFigma, color: "#f24e1e" },
    { name: "Canva", icon: SiCanva, color: "#00c4cc" },
  ];

  return (
    <section
      id="skills"
      className="max-w-6xl mx-auto px-6 lg:px-30 mt-10 mb-15 lg:mt-0 bg-[#0b0d10]"
    >
      <h2
        className="mb-1 text-center text-3xl text-[#ffffff] lg:text-4xl"
        style={{ fontFamily: "'Anton', sans-serif" }}
      >
        Tech & Tools
      </h2>
      <p className="mb-5 text-center text-xs text-[#b4dbdc] lg:text-base">
        Technologies and tools I actively use and learn
      </p>

      <motion.div className="flex flex-wrap justify-center gap-2.5 lg:gap-3">
        {techStack.map((skill, idx) => {
          const Icon = skill.icon;
          return (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: idx * 0.03 }}
              className="
                flex items-center gap-2
                rounded-full border border-white/25 bg-white
                px-3.5 py-2
                text-xs font-medium text-[#0b0d10]
                shadow-sm
                hover:-translate-y-0.5 hover:border-[#b4dbdc] hover:bg-[#b4dbdc]
                transition-all duration-300
              "
              title={skill.name}
            >
              <Icon className="text-base" style={{ color: skill.color }} />
              <span>{skill.name}</span>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
