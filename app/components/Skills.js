"use client";

import { motion } from "framer-motion";

export default function Skills() {
  const techStack = [
    { name: "HTML", icon: "/logo/html.png" },
    { name: "CSS", icon: "/logo/css.png" },
    { name: "Tailwind CSS", icon: "/logo/tailwind-css.png" },
    { name: "Bootstrap", icon: "/logo/bootstrap.png" },
    { name: "JavaScript", icon: "/logo/js.png" },
    { name: "React", icon: "/logo/react.png" },
    { name: "Next.js", icon: "/logo/nextjs.png" },
    { name: "Node.js", icon: "/logo/nodejs.png" },
    { name: "Java", icon: "/logo/java.png" },
    { name: "PHP", icon: "/logo/php.png" },
    { name: "CodeIgniter", icon: "/logo/ci.png" },
    { name: "MySQL", icon: "/logo/mysql.png" },
    { name: "Postman", icon: "/logo/postman.png" },
    { name: "Git", icon: "/logo/git.png" },
    { name: "Docker", icon: "/logo/docker.png" },
    { name: "Kubernetes", icon: "/logo/kubernetes.png" },
    { name: "Jenkins", icon: "/logo/jenkins.png" },
    { name: "Figma", icon: "/logo/figma.png" },
    { name: "Canva", icon: "/logo/canva.png" },
    { name: "Microsoft Office", icon: "/logo/ms-office.png" },
    { name: "Google Workspace", icon: "/logo/google-ws.png" },
  ];

  return (
    <section id="skills" className="max-w-6xl mx-auto py-15 px-4 bg-[#0f2e51]">
      <h2 className="flex items-center mb-10 justify-center gap-4">
        <span className="flex-1 h-px bg-[#b4dbdc]" />
        <span
          className="text-2xl lg:text-3xl font-semibold flex gap-2 items-end"
          style={{
            color: "#eb5c74",
            WebkitTextStroke: "1px #c3224d",
          }}
        >
          <span>Tech & Tools</span>
        </span>
        <span className="flex-1 h-px bg-[#b4dbdc]" />
      </h2>

      <motion.div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-6 gap-4">
        {techStack.map((skill, idx) => (
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
      </motion.div>
    </section>
  );
}
