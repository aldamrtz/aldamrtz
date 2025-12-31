"use client";

import { useState } from "react";
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
  Internship: {
    title: "Internship Experience",
    icon: <Briefcase className="w-6 h-6 text-white" />,
  },
  "Teaching Assistant": {
    title: "Teaching Assistant Experience",
    icon: <BookOpen className="w-6 h-6 text-white" />,
  },
  Training: {
    title: "Training Experience",
    icon: <Laptop className="w-6 h-6 text-white" />,
  },
  Organization: {
    title: "Organization Experience",
    icon: <Users className="w-6 h-6 text-white" />,
  },
};

const experienceData = [
  // Internship
  {
    type: "Internship",
    position: "Information Systems Intern",
    company: "Rectorate of Universitas Jenderal Achmad Yani ",
    year: "Cimahi, Aug 2024 – Sep 2024",
    gallery: [
      "/experience/i1a.jpg",
      "/experience/i1b.jpg",
      "/experience/i1c.jpg",
    ],
    description:
      "Developed a web-based application to manage account and subdomain requests at Universitas Jenderal Achmad Yani, including system analysis, UI/UX design, Black Box and User Acceptance Testing (92% student and 88% admin satisfaction), and preparation of technical documentation for implementation.",
  },
  {
    type: "Internship",
    position: "Field Work Practice",
    company: "PT Hitachi Chemical Indonesia",
    year: "Karawang, Oct 2019 – Dec 2019",
    certificate: ["/experience/i2a.png", "/experience/i2c.png"],
    description:
      "Managed daily production line tasks at PT. Hitachi Chemical Indonesia, including preparing worksheets and Process Control Sheets, summarizing production data for Plant 1 and Plant 2, handling around 150 physical documents, and participating in 5S initiatives to ensure workplace efficiency and organization.",
  },

  // Teaching Assistant
  {
    type: "Teaching Assistant",
    position: "Teaching Assistant | Computer Education Practicum",
    company: "Law Study Program at UNJANI",
    year: "Cimahi, Jul 2025",
    gallery: [
      "/experience/t2a.png",
      "/experience/t2b.jpg",
      "/experience/t2c.png",
      "/experience/t2d.jpg",
    ],
    description:
      "Assisted 40+ students in practical sessions, guiding them on Microsoft Word for thesis preparation, answering questions, preparing materials, coordinating with lecturers, and evaluating student assignments.",
  },
  {
    type: "Teaching Assistant",
    position: "Teaching Assistant | Computer Applications Practicum",
    company: "Informatics Engineering Study Program at UNJANI",
    year: "Cimahi, Oct 2022 – Dec 2022",
    certificate: ["/experience/t1a.png"],
    description:
      "Assisted 30+ students in understanding practicum materials and exercises, focusing on Microsoft Word, Excel, and PowerPoint. Provided support by answering questions, facilitating learning during sessions, preparing practicum materials, coordinating with lecturers, and evaluating students’ practicum reports.",
  },

  // Training
  {
    type: "Training",
    position:
      "Project Management | Fresh Graduate Academy (Digital Talent Scholarship 2025)",
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
    ],
    description:
      "Participated in an intensive online Project Management training through the Fresh Graduate Academy (Digital Talent Scholarship 2025), completing a structured four-stage Learning Path from Micro Skills to Final Course with certification. Developed practical project management skills and supporting competencies in AI Essentials, including AI fundamentals, productivity techniques with AI tools, prompt engineering, and ethical AI usage.",
  },
  {
    type: "Training",
    position:
      "Full-Stack Developer | Studi Independen Bersertifikat Dicoding x Kampus Merdeka Cycle 5",
    company: "Dicoding Indonesia (PT Presentologics)",
    year: "Bandung, Aug 2023 – Dec 2023",
    gallery: [
      "/experience/p2a.png",
      "/experience/p2b.png",
      "/experience/p2c.png",
      "/experience/p2d.png",
    ],
    certificate: ["/experience/p2e.png", "/experience/p2f.png"],
    description:
      "Completed intensive online training covering theory, hands-on practice, quizzes, exams, and a capstone project. Gained technical proficiency in Front-End, Back-End, and DevOps through 10+ certification classes, instructor-led sessions, expert mentoring, and consultations. Developed non-technical skills in Growth Mindset, Communication, and Business Presentation, etc. Collaborated on a team project to build a web-based application integrating Front-End, Back-End, and DevOps.",
  },

  // Organization
  {
    type: "Organization",
    position: "Committee Member | New Student Orientation",
    company: "Informatics Engineering Study Program at UNJANI",
    year: "Cimahi, Jul 2024",
    gallery: [
      "/experience/o1.jpg",
      "/experience/o2.jpg",
      "/experience/o3.jpg",
      "/experience/o4.jpg",
      "/experience/o5.jpg",
    ],
    description:
      "Managed participant and staff needs, including meals and health, from preparation to distribution to ensure smooth event operations. Coordinated with team members across divisions to maintain organized and efficient processes, and supervised on-site activities while addressing any arising issues.",
  },
];

export default function Experience() {
  const bulletPositions = [10, 12, 180, 250];

  const tabs = ["Internship", "Teaching Assistant", "Training", "Organization"];
  const [activeTab, setActiveTab] = useState("Internship");

  const activeIndex = tabs.indexOf(activeTab);
  const activeColor = tabColors[activeIndex];
  const [modalContent, setModalContent] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const filteredData = experienceData.filter((exp) => exp.type === activeTab);

  const openModal = (type, items) => {
    setModalContent({ type, items });
    setCurrentSlide(0);
  };

  const closeModal = () => setModalContent(null);

  const nextSlide = () =>
    setCurrentSlide((prev) =>
      prev + 1 >= modalContent.items.length ? 0 : prev + 1
    );
  const prevSlide = () =>
    setCurrentSlide((prev) =>
      prev - 1 < 0 ? modalContent.items.length - 1 : prev - 1
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
            <span>– learning along the</span>
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
            <div className="relative mt-2 lg:ml-6 mb-8">
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

              <span
                className="absolute left-5 w-[2px] bg-[#ffffff]"
                style={{
                  top: "44px",
                  height: activeTab === "Organization" ? "30px" : "55%",
                }}
              />

              {filteredData.map((exp, index) => (
                <div key={index} className="relative mb-10 w-full">
                  <div
                    className="absolute left-[21px] w-4 h-4 rounded-full border-3 border-[#ffffff] transform -translate-x-1/2"
                    style={{
                      top: `${bulletPositions[index]}px`,
                      backgroundColor: activeColor,
                    }}
                  ></div>

                  <div className="w-full pl-14 -pr-1 lg:pr-15 relative text-left">
                    <div className="p-1 text-white">
                      <h3 className="font-bold text-sm lg:text-base mt-1 text-[#ffffb0]">
                        {exp.position}
                      </h3>
                      <div>
                        <span className="font-semibold text-xs text-[11px] lg:text-sm text-[#a5c882]">
                          {exp.company}
                        </span>
                        <span className="font-medium block text-[10px] lg:text-xs mt-1 text-[#b4dbdc]">
                          {exp.year}
                        </span>
                      </div>
                      <p className="mt-1 text-justify md:text-sm text-xs">
                        {Array.isArray(exp.description)
                          ? exp.description.join(" ")
                          : exp.description}
                      </p>

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
