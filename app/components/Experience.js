"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Briefcase,
  BookOpen,
  Laptop,
  Users,
} from "lucide-react";

const tabColors = ["#0f2e51", "#12345a", "#153a63", "#18406c"];

const tabHeader = {
  "WORK EXPERIENCE": {
    title: "WORK EXPERIENCE",
    icon: <Briefcase className="w-6 h-6 text-white" />,
  },
  "TRAINING EXPERIENCE": {
    title: "TRAINING EXPERIENCE",
    icon: <Laptop className="w-6 h-6 text-white" />,
  },
  "ORGANIZATION EXPERIENCE": {
    title: "ORGANIZATION EXPERIENCE",
    icon: <Users className="w-6 h-6 text-white" />,
  },
};

const experienceData = [
  // Work Experience
  {
    type: "WORK EXPERIENCE",
    position: "Information System Intern",
    company: "Rectorate Office, Universitas Jenderal Achmad Yani",
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
  {
    type: "WORK EXPERIENCE",
    position: "Field Work Practice",
    company: "PT Hitachi Chemical Indonesia",
    year: "Karawang, Oct 2019 – Dec 2019",
    certificate: ["/experience/i2a.png", "/experience/i2c.png"],
    description: [
      "Performed routine operations on the production line, including preparing approximately 15 daily worksheets, archiving around 10 Quality Assurance (QA)-approved Process Control Sheets (PCS), and inputting and summarizing daily production data for Plant 1 and Plant 2.",
      "Prepared and managed approximately 150 physical documents, including Process Control Sheets (PCS), daily worksheets, and production tag labels, to support weekend operations.",
      "Participated in 5S activities to maintain cleanliness, organization, and efficiency in the work area.",
    ],
  },

  // Training
  {
    type: "TRAINING EXPERIENCE",
    position:
      "Project Management Trainee (Fresh Graduate Academy Digital Talent Scholarship 2025)",
    company: "Google x Kementerian Komunikasi dan Digital (Komdigi)",
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

  // Organization
  {
    type: "ORGANIZATION EXPERIENCE",
    position:
      "Committee Member (Bimbingan Angkatan Pembekalan Kepemimpinan, Manajemen, dan Organisasi)",
    company:
      "Department of Informatics Engineering, Universitas Jenderal Achmad Yani ",
    year: "Cimahi, Jul 2024",
    gallery: [
      "/experience/o1.jpg",
      "/experience/o2.jpg",
      "/experience/o3.jpg",
      "/experience/o4.jpg",
      "/experience/o5.jpg",
    ],
    description: [
      "Collaborated with cross-functional committees from the planning stage through to the full execution of the event.",
      "Managed logistical needs, including food and health support for all participants and organizing committee members throughout the event duration.",
      "Monitored on-site activities and resolved operational issues to ensure smooth event execution.",
    ],
  },
];

export default function Experience() {
  const lastBulletRef = useRef(null);
  const timelineRef = useRef(null);

  const [lineHeight, setLineHeight] = useState(0);

  const tabs = [
    "WORK EXPERIENCE",
    "TRAINING EXPERIENCE",
    "ORGANIZATION EXPERIENCE",
  ];
  const [activeTab, setActiveTab] = useState("WORK EXPERIENCE");

  const activeIndex = tabs.indexOf(activeTab);
  const activeColor = tabColors[activeIndex];
  const [modalContent, setModalContent] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const filteredData = experienceData.filter((exp) => exp.type === activeTab);

  useEffect(() => {
    if (!timelineRef.current || !lastBulletRef.current) return;

    const calculateLine = () => {
      const timelineRect = timelineRef.current.getBoundingClientRect();

      const bullet = lastBulletRef.current.querySelector(".timeline-bullet");
      if (!bullet) return;

      const bulletRect = bullet.getBoundingClientRect();

      const bulletCenter =
        bulletRect.top + bulletRect.height / 2 - timelineRect.top;
      const headerBottom =
        timelineRef.current.querySelector("h3").getBoundingClientRect().bottom -
        timelineRect.top;

      setLineHeight(bulletCenter - headerBottom);
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
    <section className="mx-auto py-10 px-3 lg:px-15 bg-[#ffffff]">
      <div className="relative bg-[#ffffff] py-10 overflow-hidden">
        <div className="absolute inset-0 flex items-center mb-10">
          <span
            className="uppercase text-[#f1f5f9] text-6xl sm:text-7xl lg:text-8xl tracking-widest"
            style={{
              fontFamily: "'Anton', sans-serif",
            }}
          >
            Experience
          </span>
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-6">
          <h2
            className="uppercase text-4xl lg:text-5xl text-[#0f2e51]"
            style={{ fontFamily: "'Anton', sans-serif" }}
          >
            Experience
          </h2>
          <p className="mt-2 text-xs sm:text-base tracking-wide text-[#56718c] flex items-baseline gap-1">
            <span>– Learning along the</span>
            <span
              style={{
                fontFamily: "'Brittany Signature', cursive",
                color: "#0f2e51",
              }}
              className="text-base sm:text-xl font-semibold"
            >
              Way
            </span>
          </p>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto mt-5 mb-10">
        <div className="flex w-full">
          {tabs.map((tab, index) => (
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
        ? "text-[#ffffff] z-20 h-16 -mt-3"
        : "text-[#ffffff]/90 z-10"
    }
  `}
              style={{
                fontFamily: "'Anton', sans-serif",
                backgroundColor: tabColors[index],
                boxShadow:
                  activeTab === tab
                    ? "-6px 0 8px -4px rgba(0,0,0,0.45), 6px 0 8px -4px rgba(0,0,0,0.45)"
                    : "-4px 0 6px -4px rgba(0,0,0,0.25), 4px 0 6px -4px rgba(0,0,0,0.25)",
                clipPath: "inset(0 -10px 0 -10px)",
              }}
            >
              {tab}
            </button>
          ))}
        </div>

        <div
          className="pl-4 lg:pl-11 rounded-b-xl p-6 shadow-lg"
          style={{ backgroundColor: activeColor }}
        >
          <div className="relative mb-[-32]">
            <div ref={timelineRef} className="relative mt-2 lg:ml-6 mb-8">
              <h3
                className="text-2xl text-[#ffffff] mb-5 flex items-center gap-4"
                style={{ fontFamily: "'Anton', sans-serif" }}
              >
                <span
                  className="p-2 rounded-sm border-2 border-[#ffffff] flex items-center justify-center relative z-10"
                  style={{ backgroundColor: activeColor }}
                >
                  {tabHeader[activeTab].icon}
                </span>

                {tabHeader[activeTab].title}
              </h3>

              <motion.span
                className="absolute left-5 w-[2px] bg-white"
                style={{ top: 44 }}
                animate={{ height: lineHeight }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              />

              {filteredData.map((exp, index) => (
                <div
                  key={index}
                  ref={index === filteredData.length - 1 ? lastBulletRef : null}
                  className="relative mb-10 w-full"
                >
                  <span
                    className="timeline-bullet absolute left-[21px] top-[6px] w-4 h-4 rounded-full border-3 border-white -translate-x-1/2"
                    style={{ backgroundColor: activeColor }}
                  />

                  <div className="w-full pl-14 relative text-left">
                    <div className="p-1 text-white">
                      <h3 className="font-medium text-sm lg:text-base text-[#ffffb0]">
                        {exp.position}
                      </h3>
                      <div>
                        <span className="font-medium text-[11px] lg:text-sm text-[#a5c882]">
                          {exp.company}
                        </span>
                        <span className="font-medium block text-[10px] lg:text-xs mt-1 text-[#b4dbdc]">
                          {exp.year}
                        </span>
                      </div>
                      {Array.isArray(exp.description) ? (
                        <ul className="mt-1 list-disc list-outside pl-4 space-y-1 md:text-sm text-xs">
                          {exp.description.map((item, idx) => (
                            <li key={idx} className="text-justify">
                              {item}
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="mt-1 text-justify md:text-sm text-xs">
                          {exp.description}
                        </p>
                      )}

                      <div className="flex gap-3 mt-2 flex-wrap">
                        {exp.gallery?.length > 0 && (
                          <button
                            onClick={() => openModal("gallery", exp.gallery)}
                            className="px-3 py-1 bg-[#b4dbdc] text-sm font-medium text-[#0f2e51] rounded hover:scale-105 transition cursor-pointer"
                          >
                            View Gallery
                          </button>
                        )}
                        {exp.certificate?.length > 0 && (
                          <button
                            onClick={() =>
                              openModal("gallery", exp.certificate)
                            }
                            className="px-3 py-1 bg-[#a5c882] text-sm font-medium text-[#0f2e51] rounded hover:scale-105 transition cursor-pointer"
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
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            className="bg-white p-0 rounded-lg max-w-lg w-full relative flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative flex items-center justify-between px-4 py-6">
              {modalContent.items.length > 1 && (
                <button
                  onClick={prevSlide}
                  className="p-2 rounded-full transition hover:bg-gray-200 hover:shadow-md hover:scale-105 cursor-pointer text-[#0f2e51]"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
              )}

              <div className="flex-1 flex justify-center px-4">
                <img
                  src={modalContent.items[currentSlide]}
                  alt="Gallery"
                  className="max-h-96 object-contain rounded"
                />
              </div>

              {modalContent.items.length > 1 && (
                <button
                  onClick={nextSlide}
                  className="p-2 rounded-full transition hover:bg-[#e2e8f0] hover:shadow-md hover:scale-105 cursor-pointer text-[#0f2e51]"
                >
                  <ChevronRight className="w-6 h-6 text-[#0f2e51]" />
                </button>
              )}
            </div>

            {modalContent.items.length > 1 && (
              <div className="flex gap-2 mt-[-7] justify-center pb-4">
                {modalContent.items.map((_, idx) => (
                  <span
                    key={idx}
                    className={`w-3 h-3 rounded-full transition-all ${
                      currentSlide === idx ? "bg-[#0f2e51]" : "bg-[#e2e8f0]"
                    }`}
                  />
                ))}
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
