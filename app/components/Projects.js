"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github,
  ChevronLeft,
  ChevronRight,
  X,
  ExternalLink,
} from "lucide-react";

const projectsData = [
  {
    title: "Notes App",
    category: "Web Development",
    description:
      "A web application that allows users to create, edit, archive, unarchive, and delete notes. The app features a responsive custom UI built with Web Components, live search functionality, real-time form validation, smooth animations, and integration with a remote API for persistent note storage. Users receive visual feedback via toast notifications and confirmation modals for actions such as deleting or archiving notes.",
    images: ["/project/pw1.png"],
    github: "https://github.com/aldamrtz/notes-app",
    liveDemo: "https://aldamrtz.github.io/notes-app/",
    tech: [
      "JavaScript",
      "HTML",
      "CSS",
      "Anime.js",
      "SweetAlert2",
      "Fetch API",
      "Visual Studio Code",
    ],
  },
  {
    title: "AccessTrack",
    category: "Web Development",
    description:
      "A web-based application designed to streamline the account and subdomain request process at Jenderal Achmad Yani University. The platform features dual user roles (user and admin), where users can submit requests for email or subdomain creation and track their progress through a unique access code.",
    images: ["/project/pw2.png"],
    github: "https://github.com/aldamrtz/AccessTrack",
    tech: [
      "HTML",
      "CSS",
      "Bootstrap",
      "JavaScript",
      "jQuery",
      "PHP",
      "CodeIgniter",
      "Google API Client (OAuth & reCAPTCHA v3)",
      "RESTful API",
      "MySQL",
      "XAMPP",
      "phpMyAdmin",
      "Figma",
      "Git",
      "GitHub",
      "Visual Studio Code",
    ],
  },
  {
    title: "Wisata Jabar",
    category: "Web Development",
    description:
      "A web-based platform that showcases various tourist destinations in West Java. Users can browse destination galleries, read brief descriptions, view locations on a map, and book tickets directly through the booking form. Admins have special access to manage destination data and monitor ticket bookings.",
    images: ["/project/pw3.png"],
    github: "https://github.com/aldamrtz/wisata-jabar",
    tech: [
      "HTML",
      "CSS",
      "Bootstrap",
      "JavaScript",
      "PHP",
      "RESTful API",
      "MySQL",
      "XAMPP",
      "phpMyAdmin",
      "Postman",
      "Figma",
      "Visual Studio Code",
    ],
  },
  {
    title: "Personal Notes",
    category: "Web Development",
    description:
      "A web application built for creating, managing, and organizing notes. Users can add new notes, edit existing ones, delete, archive, and unarchive them. Each note displays a title, content, and creation date, with active and archived notes separated into distinct sections. The app supports live search filtering and provides real-time character limits for note titles. User actions trigger visual feedback using modal alerts to confirm success, deletion, or cancellation.",
    images: ["/project/pw4.png"],
    github: "https://github.com/aldamrtz/personal-notes-alda",
    tech: [
      "React",
      "Vite",
      "JavaScript (ES6+)",
      "CSS",
      "Bootstrap",
      "React Toastify",
      "SweetAlert2",
      "Visual Studio Code",
    ],
  },
  {
    title: "EDFA ID",
    category: "Web Development",
    description:
      "A web-based educational platform designed to introduce and explore Indonesia’s diverse fauna. The application features dual user roles (user and admin), where users can browse detailed information about various animal species categorized by name, island, type, habitat, population, and description. It also includes an interactive quiz system with scoring and leaderboards to enhance learning engagement, while the admin panel enables efficient management of fauna data and quiz content through CRUD operations.",
    images: ["/project/pw5.png"],
    github:
      "https://github.com/KhoyrurRoykhan/Aplikasi-Edukasi-Fauna-Indonesia",
    liveDemo: "https://apl-edfa-id-devn.vercel.app/",
    tech: [
      "HTML",
      "CSS",
      "Bootstrap",
      "JavaScript",
      "React",
      "Node.js",
      "Express.js",
      "RESTful API",
      "MySQL",
      "XAMPP",
      "phpMyAdmin",
      "Postman",
      "Figma",
      "Git",
      "GitHub",
      "Visual Studio Code",
    ],
  },
  {
    title: "Bookshelf Apps",
    category: "Web Development",
    description:
      "A web-based application for managing personal book collections. Users can add new books, mark them as read or unread, search by title, and delete entries. The interface displays separate sections for completed and pending books, updates the total book count in real time, and provides visual feedback when actions succeed. Confirmation dialogs ensure safe deletion of books.",
    images: ["/project/pw6.png"],
    github: "https://github.com/aldamrtz/bookshelf-apps-alda",
    liveDemo: "https://aldamrtz.github.io/bookshelf-apps-alda/",
    tech: ["HTML", "CSS", "JavaScript", "Visual Studio Code"],
  },
  {
    title: "OBS Profile",
    category: "Web Development",
    description:
      "A web page showcasing the Korean drama Our Beloved Summer. Includes sections for summaries, cast, OST, and profile information. Features a responsive navigation bar with hamburger menu, image galleries, slider for OST tracks, and external links to streaming platforms.",
    images: ["/project/pw7.png"],
    github: "https://github.com/aldamrtz/simple-website-obs",
    liveDemo: "https://aldamrtz.github.io/simple-website-obs/",
    tech: ["HTML", "CSS", "JavaScript", "Visual Studio Code"],
  },
  {
    title: "FSI Profile",
    category: "Web Development",
    description:
      "A web-based application that presents information about the Faculty of Science and Informatics at Jenderal Achmad Yani University, including a list of study programs with brief descriptions, faculty profile, a contact form for submitting messages or inquiries, and a list of available services.",
    images: ["/project/pw8.png"],
    github: "https://github.com/aldamrtz/fsi-profile",
    tech: ["HTML", "CSS", "Bootstrap", "Visual Studio Code"],
  },
  {
    title: "CatatanKeuangan",
    category: "Mobile Apps",
    description:
      "An Android application developed in Java for tracking daily income and expenses. Users can add, edit, and delete financial records while viewing a summary of income and expenses.",
    images: ["/project/pm1.png"],
    github: "https://github.com/aldamrtz/CatatanKeuangan",
    tech: ["Java", "SQLite", "Android Studio"],
  },
  {
    title: "KonversiSuhu",
    category: "Desktop Apps",
    description:
      "A Java-based desktop application that allows users to easily convert temperatures between Celsius, Fahrenheit, and Kelvin. The application provides options for selecting input and output units, buttons to calculate, clear, and save conversion results to a file. Each conversion result is timestamped for documented records.",
    images: ["/project/pd1.png"],
    tech: ["Java", "Swing", "NetBeans"],
  },
  {
    title: "PemesananHotel",
    category: "Desktop Apps",
    description:
      "A Java-based desktop application designed to streamline hotel operations. The application includes a secure login system for admins, allowing them to add new bookings where tariffs are automatically calculated based on room type and length of stay. Staff can also search for existing reservations and cancel bookings when necessary, while managing customer data and generating reports efficiently.",
    images: ["/project/pd2.png"],
    github: "https://github.com/aldamrtz/PemesananHotel",
    tech: ["Java", "MySQL", "Swing", "NetBeans"],
  },
  {
    title: "OpenShop RESTful API",
    category: "API",
    description:
      "OpenShop RESTful API is a backend service built with the Django REST Framework, designed to manage product data for an e-commerce platform. The API provides complete CRUD functionality (Create, Read, Update, Delete), product search by name, input validation, and a HATEOAS implementation for seamless navigation between resources.",
    images: ["/project/api2.png"],
    github: "https://github.com/aldamrtz/OpenShop-RESTful-API",
    tech: [
      "Python",
      "Django",
      "Django REST Framework",
      "SQLite",
      "Postman",
      "Visual Studio Code",
    ],
  },
  {
    title: "Bookshelf API",
    category: "API",
    description:
      "A RESTful API built to manage a digital bookshelf system. It allows users to create, read, update, and delete book records, complete with validation logic for reading progress and filtering options. The API follows clean modular structure using Hapi.js and supports query-based searches for reading status, book completion, and name matching.",
    images: ["/project/api1.png"],
    github: "https://github.com/aldamrtz/bookshelf-api",
    tech: [
      "Node.js",
      "Hapi.js",
      "JavaScript",
      "RESTful API",
      "JSON",
      "Postman",
      "Visual Studio Code",
    ],
  },
  {
    title: "CI/CD Pipeline Automation with Jenkins",
    category: "DevOps",
    description:
      "A complete CI/CD implementation using Jenkins with scripted pipelines, featuring automated build, test, deliver, and deploy stages for Java Maven applications. The project includes user and role management, Docker-based build agents, Poll SCM for automated triggers, and deployment workflows with manual approval.",
    images: ["/project/do1.png"],
    github: "https://github.com/aldamrtz/simple-java-maven-app",
    tech: [
      "Jenkins",
      "Java",
      "Maven",
      "Docker",
      "NGINX",
      "Git",
      "GitHub",
      "Visual Studio Code",
    ],
  },
];

export default function Projects() {
  const tabs = [
    "All",
    "Web Development",
    "Mobile Apps",
    "Desktop Apps",
    "API",
    "DevOps",
  ];
  const [activeTab, setActiveTab] = useState("All");
  const [selected, setSelected] = useState(null);
  const [currentImg, setCurrentImg] = useState(0);

  const filteredProjects =
    activeTab === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === activeTab);

  const nextImage = () => {
    if (selected) {
      setCurrentImg((prev) => (prev + 1) % selected.images.length);
    }
  };

  const prevImage = () => {
    if (selected) {
      setCurrentImg(
        (prev) => (prev - 1 + selected.images.length) % selected.images.length
      );
    }
  };

  return (
    <section
      id="projects"
      className="max-w-6xl mx-auto py-15 px-4 bg-[#0f2e51]"
    >
      <h2 className="flex items-center mb-10 justify-center gap-4">
        <span
          className="flex-1 h-px"
          style={{ backgroundColor: "#b4dbdc" }}
        ></span>

        <span
          className="text-2xl lg:text-3xl font-semibold flex gap-2 items-end"
          style={{
            color: "#eb5c74",
            WebkitTextStroke: "1px #c3224d",
          }}
        >
          <span>Things</span>
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
            I’ve
          </span>
          <span>Created</span>
        </span>

        <span
          className="flex-1 h-px"
          style={{ backgroundColor: "#b4dbdc" }}
        ></span>
      </h2>

      <div className="flex justify-center gap-4 mb-10 flex-wrap">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-lg font-medium transition cursor-pointer ${
              activeTab === tab
                ? "bg-[#b4dbdc] text-[#0f2e51] shadow-lg"
                : "bg-white text-[#0f2e51] hover:bg-[#b4dbdc] hover:shadow-lg"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ duration: 0.2 }}
            viewport={{ once: true }}
            onClick={() => {
              setSelected(project);
              setCurrentImg(0);
            }}
            className="cursor-pointer bg-white border-2 rounded-xl shadow-md 
             border-[#c2b5e3] hover:shadow-xl hover:border-[#7f6e9e] 
             transition-all duration-300 overflow-hidden group"
          >
            <div className="relative">
              <img
                src={project.images[0]}
                className="w-full h-48 object-cover rounded-t-xl transition-transform duration-500 group-hover:scale-110"
              />
              <span
                className="absolute top-2 right-2 text-white text-xs px-3 py-1 rounded-full shadow-md"
                style={{ backgroundColor: "#7f6e9e" }}
              >
                {project.category}
              </span>
            </div>

            <div className="p-5">
              <div className="flex justify-between items-center mb-2">
                <h3
                  className="text-lg font-semibold"
                  style={{ color: "#0f2e51" }}
                >
                  {project.title}
                </h3>

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Github className="w-5 h-5 text-[#7f6e9e] hover:text-[#4e3f66] transition" />
                  </a>
                )}
              </div>

              <p className="text-sm line-clamp-2" style={{ color: "#0f2e51" }}>
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-4">
                {project.tech.slice(0, 3).map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs font-medium px-2 py-1 rounded-full"
                    style={{
                      backgroundColor: "#c2b5e3",
                      color: "#3a2f53",
                    }}
                  >
                    {tech}
                  </span>
                ))}
                {project.tech.length > 3 && (
                  <span
                    className="text-xs font-medium"
                    style={{ color: "#b4dbdc" }}
                  >
                    +{project.tech.length - 3} more
                  </span>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-[999] px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="bg-white rounded-xl shadow-2xl w-full max-w-2xl sm:max-w-3xl max-h-[90vh] overflow-y-auto relative"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-6 right-4 z-50 p-2 flex items-center justify-center transition duration-200 ease-in-out cursor-pointer"
                style={{
                  color: "#0f2e51",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#b4dbdc";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "#0f2e51";
                }}
              >
                <X className="w-5 h-5" />
              </button>

              <div className="px-5 py-4 border-b border-gray-200">
                <div className="flex items-center gap-2 mb-1">
                  <h3
                    className="text-lg font-semibold"
                    style={{ color: "#0f2e51" }}
                  >
                    {selected.title}
                  </h3>
                </div>
                <p className="text-sm italic" style={{ color: "#b4dbdc" }}>
                  {selected.category}
                </p>
              </div>

              <div className="relative w-full max-h-[60vh] aspect-video bg-gray-100 rounded-b-xl overflow-hidden">
                <img
                  src={selected.images[0]}
                  alt={selected.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6 space-y-4 px-5 py-4">
                <div>
                  <h4
                    className="text-lg font-semibold mb-1"
                    style={{ color: "#0f2e51" }}
                  >
                    Project Overview
                  </h4>
                  <p className="leading-relaxed" style={{ color: "#0f2e51" }}>
                    {selected.description}
                  </p>
                  <div className="flex gap-2 mt-2 flex-wrap">
                    {selected.github && (
                      <a
                        href={selected.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium px-3 py-2 rounded-lg transition"
                        style={{
                          backgroundColor: "#0f2e51",
                          color: "#ffffff",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = "#b4dbdc";
                          e.currentTarget.style.color = "#0f2e51";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = "#0f2e51";
                          e.currentTarget.style.color = "#ffffff";
                        }}
                      >
                        <Github className="w-4 h-4" />
                        View on GitHub
                      </a>
                    )}

                    {selected.liveDemo && (
                      <a
                        href={selected.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium px-3 py-2 rounded-lg transition"
                        style={{
                          backgroundColor: "#eb5c74",
                          color: "#ffffff",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = "#f6b7c1";
                          e.currentTarget.style.color = "#eb5c74";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = "#eb5c74";
                          e.currentTarget.style.color = "#ffffff";
                        }}
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>

                <div>
                  <p
                    className="text-lg font-semibold mb-2"
                    style={{ color: "#0f2e51" }}
                  >
                    Tech Used:
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {selected.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs font-medium px-2 py-1 rounded-full"
                        style={{
                          backgroundColor: "#c2b5e3",
                          color: "#3a2f53",
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
