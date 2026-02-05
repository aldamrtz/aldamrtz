"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, X, ExternalLink } from "lucide-react";
import { Pin } from "lucide-react";

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
    pinned: true,
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
    pinned: true,
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
    title: "MyDay",
    pinned: false,
    category: "Mobile Development",
    description:
      "MyDay is a Flutter-based productivity application designed to help users organize their daily activities through task planning, habit tracking, and personal notes. The app features user authentication, daily planners, habit streak tracking, calendar-based activity overview, and note management, all stored locally with cross-platform support for mobile and web.",
    images: ["/project/pm3.png"],
    github: "https://github.com/aldamrtz/my_day",
    tech: [
      "Flutter",
      "Dart",
      "SQLite",
      "Hive",
      "CRUD Operations",
      "Android Studio",
    ],
  },
  {
    title: "Dart Programming",
    pinned: false,
    category: "Mobile Development",
    description:
      "A Dart-based command-line project that demonstrates core programming concepts including variables, control flow, collections, object-oriented programming, asynchronous processing, and exception handling. The project consists of multiple exam modules validated through automated unit testing to ensure correctness and adherence to Dart best practices.",
    images: ["/project/pm2.png"],
    github: "https://github.com/aldamrtz/a191-dart-code-submission",
    tech: ["Dart", "Android Studio"],
  },
  {
    title: "CatatanKeuangan",
    category: "Mobile Development",
    description:
      "An Android application developed in Java for tracking daily income and expenses. Users can add, edit, and delete financial records while viewing a summary of income and expenses.",
    images: ["/project/pm1.png"],
    github: "https://github.com/aldamrtz/CatatanKeuangan",
    tech: ["Java", "SQLite", "Android Studio"],
  },
  {
    title: "KonversiSuhu",
    category: "Desktop Development",
    description:
      "A Java-based desktop application that allows users to easily convert temperatures between Celsius, Fahrenheit, and Kelvin. The application provides options for selecting input and output units, buttons to calculate, clear, and save conversion results to a file. Each conversion result is timestamped for documented records.",
    images: ["/project/pd1.png"],
    tech: ["Java", "Swing", "NetBeans"],
  },
  {
    title: "PemesananHotel",
    category: "Desktop Development",
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
    title: "E-Commerce App with Asynchronous Communication",
    category: "DevOps & Microservices",
    description:
      "A microservices-based e-commerce application demonstrating asynchronous communication using RabbitMQ. The app consists of two services: order service and shipping service. The order service receives orders via HTTP POST requests and publishes them to a RabbitMQ queue. The shipping service consumes these messages from the queue and processes them asynchronously, printing the order data to the console. The architecture can be deployed using Docker Compose or Kubernetes, and optionally integrated with Istio for service mesh routing. This project emphasizes containerization, inter-service messaging, and microservices deployment best practices.",
    images: ["/project/dm4.png"],
    github: "https://github.com/aldamrtz/proyek-ketiga",
    tech: [
      "Node.js",
      "Express.js",
      "RabbitMQ (AMQP)",
      "Docker",
      "Docker Compose",
      "Kubernetes",
      "Istio",
      "Git",
      "GitHub",
      "GitHub Container Registry (GHCR)",
      "Postman",
      "Visual Studio Code",
    ],
  },
  {
    title: "Karsa Jobs Deployment with Kubernetes",
    pinned: false,
    category: "DevOps & Microservices",
    description:
      "A web application for managing job listings, deployed using Kubernetes on a local Minikube cluster. The project consists of a Vue.js frontend, a Go-based API backend, and a MongoDB database. It covers containerizing both frontend and backend services, building and pushing Docker images to GitHub Container Registry, deploying multiple services with Kubernetes manifests, and optionally implementing monitoring with Prometheus and Grafana as well as CI pipelines for automated build and deployment.",
    images: ["/project/dm3.png"],
    github: ["https://github.com/aldamrtz/proyek-kedua"],
    tech: [
      "Vue.js",
      "Go",
      "MongoDB",
      "Docker",
      "Kubernetes",
      "Minikube",
      "Prometheus",
      "Grafana",
      "Git",
      "GitHub",
      "GitHub Container Registry (GHCR)",
      "Visual Studio Code",
    ],
  },
  {
    title: "Item App Deployment with Docker Compose",
    pinned: false,
    category: "DevOps & Microservices",
    description:
      "A simple web app to add and view items, deployed using Docker Compose. The project uses Node.js + Express for the app service and MongoDB for the database service. It covers containerizing the app, building and pushing Docker images, and managing multiple services with Docker Compose.",
    images: ["/project/dm2.png"],
    github:
      "https://github.com/aldamrtz/a433-microservices/tree/proyek-pertama",
    tech: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Docker",
      "Docker Compose",
      "Git",
      "GitHub",
      "GitHub Container Registry (GHCR)",
      "Visual Studio Code",
    ],
  },
  {
    title: "CI/CD Pipeline Automation with Jenkins",
    category: "DevOps & Microservices",
    description:
      "A complete CI/CD implementation using Jenkins with scripted pipelines, featuring automated build, test, deliver, and deploy stages for Java Maven applications. The project includes user and role management, Docker-based build agents, Poll SCM for automated triggers, and deployment workflows with manual approval.",
    images: ["/project/dm1.png"],
    github: "https://github.com/aldamrtz/simple-java-maven-app",
    tech: [
      "Jenkins",
      "Java",
      "Maven",
      "Docker",
      "NGINX",
      "Grafana",
      "Prometheus",
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
    "Mobile Development",
    "Desktop Development",
    "API",
    "DevOps & Microservices",
  ];
  const [activeTab, setActiveTab] = useState("All");
  const [selected, setSelected] = useState(null);
  const [currentImg, setCurrentImg] = useState(0);
  const [showAll, setShowAll] = useState(false);

  const filteredProjects = (
    activeTab === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === activeTab)
  ).sort((a, b) => (b.pinned === true) - (a.pinned === true));

  const visibleProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, 6);

  return (
    <section id="projects" className=" py-10 px-15 bg-[#f1f5f9]">
      <div className="relative bg-[#f1f5f9] py-10 overflow-hidden">
        <div className="absolute inset-0 flex items-center mb-10 justify-center">
          <span
            className="uppercase text-[#ffffff] text-6xl sm:text-7xl lg:text-8xl tracking-widest"
            style={{
              fontFamily: "'Anton', sans-serif",
            }}
          >
            Projects
          </span>
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 text-center">
          <h2
            className="uppercase text-4xl lg:text-5xl text-[#0f2e51] mx-auto"
            style={{ fontFamily: "'Anton', sans-serif" }}
          >
            Projects
          </h2>
          <p className="mt-2 text-xs sm:text-base tracking-wide text-[#56718c] flex justify-center items-baseline gap-1">
            <span>– What </span>
            <span
              style={{
                fontFamily: "'Brittany Signature', cursive",
                color: "#0f2e51",
              }}
              className="text-base sm:text-xl font-semibold"
            >
              I’ve
            </span>
            <span> Built</span>
          </p>
        </div>
      </div>

      <div className="relative flex justify-center gap-6 mb-10 flex-wrap">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => {
              setActiveTab(tab);
              setShowAll(false);
            }}
            className="text-sm sm:text-base lg:text-lg font-medium transition-all duration-300 cursor-pointer pb-1 relative z-10"
          >
            <span
              className={`${
                activeTab === tab
                  ? "text-[#0f2e51]"
                  : "text-[#56718c] hover:text-[#0f2e51]"
              }`}
            >
              {tab}
            </span>
            {activeTab === tab && (
              <motion.div
                layoutId="underline"
                className="absolute left-0 bottom-0 w-full h-0.5 bg-[#0f2e51]"
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 pb-10">
        {visibleProjects.map((project, index) => (
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
            className="cursor-pointer bg-[#0f2e51] border-2 rounded-xl shadow-md 
             border-[#0f2e51] hover:shadow-xl hover:border-[#b4dbdc] 
             transition-all duration-300 overflow-hidden group"
          >
            <div className="relative">
              <img
                src={project.images[0]}
                className="w-full h-50 object-cover rounded-t-xl transition-transform duration-500"
              />
              {project.pinned && (
                <div className="absolute top-2 left-2 bg-[#0f2e51] p-2 rounded-full shadow-md">
                  <Pin className="w-3.5 h-3.5 text-white" />
                </div>
              )}

              <span
                className="absolute top-2 right-2 text-white text-xs px-3 py-1 rounded-full shadow-md"
                style={{ backgroundColor: "#0f2e51" }}
              >
                {project.category}
              </span>
            </div>

            <div className="p-5">
              <div className="flex justify-between items-center mb-2">
                <h3
                  className="text-lg font-semibold"
                  style={{ color: "#ffffff" }}
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
                    <Github className="w-5 h-5 text-[#b4dbdc] hover:text-[#ffffff] transition" />
                  </a>
                )}
              </div>

              <p className="text-sm line-clamp-2" style={{ color: "#ffffff" }}>
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-4">
                {project.tech.slice(0, 3).map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs font-medium px-2 py-1 rounded-full"
                    style={{
                      backgroundColor: "#a5c882",
                      color: "#0f2e51",
                    }}
                  >
                    {tech}
                  </span>
                ))}
                {project.tech.length > 3 && (
                  <span
                    className="text-xs font-medium"
                    style={{ color: "#ffffb0" }}
                  >
                    +{project.tech.length - 3} more
                  </span>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {filteredProjects.length > 6 && !showAll && (
        <div className="flex justify-center">
          <button
            onClick={() => setShowAll(true)}
            className="group text-sm sm:text-base lg:text-lg font-medium relative pb-1 cursor-pointer transition-colors duration-300 text-[#56718c] hover:text-[#0f2e51]"
          >
            Load more
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-[#56718c] transition-colors duration-300 group-hover:bg-[#0f2e51]" />
          </button>
        </div>
      )}

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
              className="bg-[#0f2e51] rounded-xl shadow-2xl w-full max-w-2xl sm:max-w-3xl max-h-[90vh] overflow-y-auto relative"
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
                    style={{ color: "#ffffff" }}
                  >
                    {selected.title}
                  </h3>
                </div>
                <p className="text-sm italic" style={{ color: "#b4dbdc" }}>
                  {selected.category}
                </p>
              </div>

              <div className="relative w-full max-h-[60vh] aspect-video bg-gray-100 overflow-hidden">
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
                    style={{ color: "#ffffff" }}
                  >
                    Project Overview
                  </h4>
                  <p className="leading-relaxed" style={{ color: "#ffffff" }}>
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
                          backgroundColor: "#b4dbdc",
                          color: "#0f2e51",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = "#ffffff";
                          e.currentTarget.style.color = "#0f2e51";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = "#b4dbdc";
                          e.currentTarget.style.color = "#0f2e51";
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
                          backgroundColor: "#ffffb0",
                          color: "#0f2e51",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = "#ffffff";
                          e.currentTarget.style.color = "#0f2e51";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = "#ffffb0";
                          e.currentTarget.style.color = "#0f2e51";
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
                    style={{ color: "#ffffff" }}
                  >
                    Tech Used:
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {selected.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs font-medium px-2 py-1 rounded-full"
                        style={{
                          backgroundColor: "#a5c882",
                          color: "#0f2e51",
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
