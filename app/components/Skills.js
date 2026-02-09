"use client";

import { motion } from "framer-motion";
import {
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiBootstrap,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiPhp,
  SiCodeigniter,
  SiFlutter,
  SiDart,
  SiMysql,
  SiPostman,
  SiGit,
  SiDocker,
  SiKubernetes,
  SiFigma,
  SiCanva,
} from "react-icons/si";
import { FaJava } from "react-icons/fa6";

export default function Skills() {
  const techStack = [
    { name: "HTML", icon: SiHtml5 },
    { name: "CSS", icon: SiCss3 },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "Bootstrap", icon: SiBootstrap },
    { name: "JavaScript", icon: SiJavascript },
    { name: "React", icon: SiReact },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "Node.js", icon: SiNodedotjs },
    { name: "Java", icon: FaJava },
    { name: "PHP", icon: SiPhp },
    { name: "CodeIgniter", icon: SiCodeigniter },
    { name: "Flutter", icon: SiFlutter },
    { name: "Dart", icon: SiDart },
    { name: "MySQL", icon: SiMysql },
    { name: "Postman", icon: SiPostman },
    { name: "Git", icon: SiGit },
    { name: "Docker", icon: SiDocker },
    { name: "Kubernetes", icon: SiKubernetes },
    { name: "Figma", icon: SiFigma },
    { name: "Canva", icon: SiCanva },
  ];

  return (
    <section
      id="skills"
      className="max-w-6xl mx-auto px-6 lg:px-30 mt-10 mb-35 lg:mt-0 bg-[#0f2e51]"
    >
      <h2
        className="text-3xl lg:text-4xl text-[#ffffff] mb-1"
        style={{ fontFamily: "'Anton', sans-serif" }}
      >
        Tech & Tools
      </h2>
      <p className="text-xs lg:text-base text-[#b4dbdc] mb-5">
        Technologies and tools I actively use and learn
      </p>

      <motion.div
        className="
          grid
          grid-cols-4
          lg:grid-cols-[repeat(5,70px)]
          md:grid-cols-[repeat(5,70px)]
          gap-3
        "
      >
        {techStack.map((skill, idx) => {
          const Icon = skill.icon;
          return (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: idx * 0.03 }}
              className="
                bg-white
                aspect-square
                w-[70px]
                rounded-md
                shadow-sm
                flex items-center justify-center
                hover:-translate-y-0.5 hover:shadow-md
                transition-all
              "
              title={skill.name}
            >
              <Icon className="text-[#0f2e51] text-3xl" />
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
