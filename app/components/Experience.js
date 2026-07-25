"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Calendar, ChevronLeft, ChevronRight, X } from "lucide-react";

const experienceData = [
  // Work Experience
  {
    type: "WORK EXPERIENCE",
    position: "Information System Intern",
    company: "Rectorate Office, Universitas Jenderal Achmad Yani",
    companyLogo: "/unjani.png",
    year: "Cimahi, Aug 2024 – Sep 2024",
    gallery: [
      "/experience/i1a.jpg",
      "/experience/i1b.jpg",
      "/experience/i1c.jpg",
    ],
    description: [
      "Followed the full SDLC process, including requirements analysis, application flow modeling using UML, relational database design with MySQL, and UI/UX design using Figma.",
      "Built an end-to-end ticketing system (AccessTrack) using MVC architecture with PHP (CodeIgniter), implementing multi-level approval and Role-Based Access Control (RBAC) for validation workflows.",
      "Developed automatic account generation and real-time form validation using AJAX, integrated Regex and Google reCAPTCHA v3, and implemented email notifications via SMTP for status tracking.",
      "Conducted system testing through black-box testing (100% success rate, 21/21 scenarios) and User Acceptance Testing (UAT) with satisfaction rates of 92% (students) and 88% (admin).",
      "Managed the code repository using Git and prepared technical documentation and testing reports.",
    ],
  },
  {
    type: "WORK EXPERIENCE",
    position: "Teaching Assistant",
    company:
      "Department of Informatics Engineering, Universitas Jenderal Achmad Yani ",
    companyLogo: "/unjani.png",
    year: "Cimahi, Oct 2022 – Dec 2022 & Jul 2025",
    gallery: [
      "/experience/t2a.png",
      "/experience/t2b.jpg",
      "/experience/t2c.png",
      "/experience/t2d.jpg",
    ],
    certificate: ["/experience/t1a.png"],
    description: [
      "Assisted 30+ students in understanding course materials and completing practical exercises.",
      "Prepared session materials and coordinated with lecturers to support the delivery of practical classes.",
      "Evaluated and graded students’ practical reports.",
    ],
  },

  // Training
  {
    type: "TRAINING EXPERIENCE",
    position:
      "Project Management Trainee (FGA Digital Talent Scholarship 2025)",
    company: "Google x Kementerian Komunikasi dan Digital (Komdigi)",
    companyLogo: "/google.png",
    year: "Karawang, Oct 2025 – Dec 2025",
    gallery: [
      "/experience/t1a.jpg",
      "/experience/t1b.png",
      "/experience/t1c.png",
      "/experience/t1d.png",
      "/experience/t1e.png",
      "/experience/t1f.png",
    ],
    certificate: [
      "/experience/p1a.png",
      "/experience/p1b.png",
      "/experience/p1c.png",
      "/experience/p1d.png",
      "/experience/p1e.png",
      "/experience/p1f.png",
    ],
    description: [
      "Analyzed project lifecycles through case studies, focusing on scope management, cost efficiency, and risk mitigation strategies.",
      "Applied Agile and Scrum methodologies in practice, including sprint planning and retrospectives to manage workflows.",
      "Prepared capstone project documents, including Project Charter, Risk Assessment, Quality Evaluation, and Stakeholder Report.",
      "Developed Work Breakdown Structures (WBS) and Gantt Charts for task planning and scheduling, and utilized AI-assisted tools in project planning.",
    ],
  },
  {
    type: "TRAINING EXPERIENCE",
    position:
      "Full-Stack Developer Cohort (SIB Dicoding x Kampus Merdeka Cycle 5)",
    company: "Dicoding Indonesia (PT Presentologics)",
    companyLogo: "/dicoding.jpg",
    year: "Bandung, Aug 2023 – Dec 2023",
    gallery: [
      "/experience/p2a.png",
      "/experience/p2b.png",
      "/experience/p2c.png",
      "/experience/p2d.png",
    ],
    certificate: ["/experience/p2e.png", "/experience/p2f.png"],
    description: [
      "Completed 906 hours of intensive training covering full-stack development, including programming fundamentals, Front-End architecture (React), Back-End development (Node.js), and automated testing.",
      "Participated in structured learning sessions, including Instructor-Led Training (ILT), expert sessions, weekly mentoring, and soft skills development.",
      "Learned and applied microservices architecture and DevOps practices, including CI/CD pipeline automation (Jenkins) and containerization using Docker and Kubernetes for application deployment.",
      "Collaborated on a capstone project to integrate technical knowledge by developing a web-based application, Edukasi Fauna Indonesia (EDFA ID).",
    ],
  },
];

export default function Experience() {
  const lastBulletRef = useRef(null);
  const timelineRef = useRef(null);

  const [lineHeight, setLineHeight] = useState(0);

  const tabs = ["WORK EXPERIENCE", "TRAINING EXPERIENCE"];
  const [activeTab, setActiveTab] = useState("WORK EXPERIENCE");

  const [modalContent, setModalContent] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const filteredData = experienceData.filter((exp) => exp.type === activeTab);

  useEffect(() => {
    if (!timelineRef.current || !lastBulletRef.current) return;

    const calculateLine = () => {
      const timelineRect = timelineRef.current.getBoundingClientRect();

      const bullets = timelineRef.current.querySelectorAll(".timeline-bullet");
      if (bullets.length < 2) return setLineHeight(0);

      const firstRect = bullets[0].getBoundingClientRect();
      const lastRect = bullets[bullets.length - 1].getBoundingClientRect();
      const firstCenter =
        firstRect.top + firstRect.height / 2 - timelineRect.top;
      const lastCenter = lastRect.top + lastRect.height / 2 - timelineRect.top;

      setLineHeight(lastCenter - firstCenter);
    };

    calculateLine();

    const observer = new ResizeObserver(calculateLine);
    observer.observe(timelineRef.current);

    return () => observer.disconnect();
  }, [activeTab]);

  const openModal = (type, items) => {
    setModalContent({ type, items });
    setCurrentSlide(0);
  };

  const closeModal = () => setModalContent(null);

  const nextSlide = () =>
    setCurrentSlide((prev) =>
      prev + 1 >= modalContent.items.length ? 0 : prev + 1,
    );
  const prevSlide = () =>
    setCurrentSlide((prev) =>
      prev - 1 < 0 ? modalContent.items.length - 1 : prev - 1,
    );

  return (
    <section className="mx-auto py-25 px-3 lg:px-30 bg-[#131518]">
      <div className="relative bg-[#131518] py-5 overflow-hidden">
        <div className="absolute inset-0 flex items-center mb-10">
          <span
            className="uppercase text-white/10 text-6xl sm:text-7xl lg:text-8xl tracking-widest"
            style={{
              fontFamily: "'Anton', sans-serif",
            }}
          >
            Experience
          </span>
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-6">
          <h2
            className="uppercase text-4xl lg:text-5xl text-white"
            style={{ fontFamily: "'Anton', sans-serif" }}
          >
            Experience
          </h2>
          <p className="mt-2 text-xs sm:text-base tracking-wide text-[#b4dbdc] flex items-baseline gap-1">
            <span>– Learning along the</span>
            <span
              style={{
                fontFamily: "'Brittany Signature', cursive",
                color: "white",
              }}
              className="text-base sm:text-xl font-semibold"
            >
              Way
            </span>
          </p>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto mt-5 mb-5">
        <div className="flex w-full">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`
    relative
    flex-1
    h-13
    font-medium
    cursor-pointer
    flex items-center justify-center
    rounded-t-lg
    transition-all duration-300 ease-out
    text-sm sm:text-base lg:text-lg
    hover:h-16 hover:-mt-3
    ${
      activeTab === tab
        ? "z-20 h-16 -mt-3 text-white shadow-[8px_0_9px_-7px_rgba(0,0,0,0.9)]"
        : "z-10 text-white/10"
    }
  `}
              style={{
                fontFamily: "'Anton', sans-serif",
                backgroundColor:
                  tab === "TRAINING EXPERIENCE" ? "#0D0F12" : "#0b0d10",
              }}
            >
              {tab}
            </button>
          ))}
        </div>

        <div
          className="rounded-b-xl px-4 py-6 sm:px-8 lg:px-18"
          style={{
            backgroundColor:
              activeTab === "TRAINING EXPERIENCE" ? "#0D0F12" : "#0b0d10",
          }}
        >
          <div className="relative mb-[-32]">
            <div ref={timelineRef} className="relative mt-2 mb-8">
              <motion.span
                className="absolute left-5 w-[2px] bg-white/25"
                style={{ top: 14 }}
                animate={{ height: lineHeight }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              />

              {filteredData.map((exp, index) => (
                <div
                  key={index}
                  ref={index === filteredData.length - 1 ? lastBulletRef : null}
                  className="relative mb-10 w-full"
                >
                  <motion.span
                    key={`${activeTab}-${index}`}
                    className="timeline-bullet absolute left-[21px] top-[6px] h-4 w-4 -translate-x-1/2 rounded-full border-2 bg-[#b4dbdc] shadow-[0_0_0_2px_rgba(180,219,220,0.28)]"
                    style={{
                      borderColor:
                        activeTab === "TRAINING EXPERIENCE"
                          ? "#0C0E11"
                          : "#0b0d10",
                    }}
                    initial={{ opacity: 1, scale: 1 }}
                    animate={{ opacity: 1, scale: [1, 1.16, 1] }}
                    transition={{
                      delay: index * 0.12,
                      duration: 1.4,
                      ease: "easeInOut",
                      repeat: Infinity,
                    }}
                  />

                  <div className="relative w-full pl-10 text-left sm:pl-14 sm:pr-4">
                    <div className="p-1 text-white">
                      <div className="flex items-start justify-between gap-3">
                        <h3 className="text-sm font-medium text-white lg:text-base">
                          {exp.position}
                        </h3>
                        <span className="inline-flex shrink-0 items-center gap-1 px-3 py-2 text-[9px] font-medium text-[#b4dbdc] lg:text-[11px]">
                          <Calendar className="h-3 w-3 shrink-0" />
                          {exp.year}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="grid h-8 w-8 shrink-0 place-items-center overflow-hidden rounded-md border border-white/10 p-1">
                          {exp.companyLogo ? (
                            <img
                              src={exp.companyLogo}
                              alt={`${exp.company} logo`}
                              className="h-full w-full object-contain"
                            />
                          ) : (
                            <span className="text-[9px] text-[#0b0d10]">
                              {exp.companyInitials}
                            </span>
                          )}
                        </span>
                        <span className="text-[11px] font-semibold text-white/30 lg:text-sm">
                          {exp.company}
                        </span>
                      </div>
                      {Array.isArray(exp.description) ? (
                        <ul className="mt-2 list-disc list-outside space-y-1 pl-4 text-xs text-white/85 md:text-sm marker:text-white">
                          {exp.description.map((item, idx) => (
                            <li key={idx} className="text-justify">
                              {item}
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="mt-1 text-justify text-xs text-white/85 md:text-sm">
                          {exp.description}
                        </p>
                      )}

                      <div className="flex gap-3 mt-3 flex-wrap">
                        {exp.gallery?.length > 0 && (
                          <button
                            onClick={() => openModal("gallery", exp.gallery)}
                            className="cursor-pointer rounded bg-[#b4dbdc] px-3 py-1 text-sm font-medium text-[#0b0d10] transition hover:text-white hover:bg-[#72999b]"
                          >
                            View Gallery
                          </button>
                        )}
                        {exp.certificate?.length > 0 && (
                          <button
                            onClick={() =>
                              openModal("gallery", exp.certificate)
                            }
                            className="cursor-pointer rounded border border-white/70 px-3 py-1 text-sm font-medium text-white transition hover:border-[#b4dbdc] hover:text-[#b4dbdc]"
                          >
                            View Certificate
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {modalContent && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[999] flex items-center justify-center bg-white/70 px-4 py-6 backdrop-blur-sm"
          onClick={closeModal}
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            className="relative w-full max-w-md overflow-hidden rounded-xl bg-[#0b0d10] shadow-2xl shadow-black/30"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Close gallery"
              onClick={closeModal}
              className="absolute right-3 top-3 z-10 cursor-pointer rounded-full bg-black/45 p-2 text-white transition hover:bg-black/70"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="relative aspect-video bg-black/20">
              <img
                src={modalContent.items[currentSlide]}
                alt={`Gallery item ${currentSlide + 1}`}
                className="h-full w-full object-contain"
              />
              {modalContent.items.length > 1 && (
                <button
                  type="button"
                  aria-label="Previous photo"
                  onClick={prevSlide}
                  className="absolute left-3 top-1/2 -translate-y-1/2 cursor-pointer rounded-full bg-black/45 p-2 text-white transition hover:bg-black/70"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
              )}
              {modalContent.items.length > 1 && (
                <button
                  type="button"
                  aria-label="Next photo"
                  onClick={nextSlide}
                  className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer rounded-full bg-black/45 p-2 text-white transition hover:bg-black/70"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              )}

              {modalContent.items.length > 1 && (
                <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5 rounded-full bg-black/45 px-2.5 py-1.5">
                  {modalContent.items.map((_, idx) => (
                    <button
                      key={idx}
                      type="button"
                      aria-label={`Show photo ${idx + 1}`}
                      onClick={() => setCurrentSlide(idx)}
                      className={`h-1.5 cursor-pointer rounded-full transition-all ${
                        currentSlide === idx
                          ? "w-5 bg-white"
                          : "w-1.5 bg-white/40 hover:bg-white/70"
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
