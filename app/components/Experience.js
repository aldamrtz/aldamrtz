"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const experienceData = [
  // Internship
  {
    type: "Internship",
    position: "Information Systems Intern",
    company: "Rectorate, Universitas Jenderal Achmad Yani",
    year: "Cimahi, August 2024 – September 2024",
    gallery: ["/experience/i1a.jpg", "/experience/i1b.jpg"],
    description:
      "Developed a web-based application to manage account and subdomain requests at Jenderal Achmad Yani University, including system analysis, UI/UX design, Black Box and User Acceptance Testing (92% student and 88% admin satisfaction), and preparation of technical documentation for implementation.",
  },
  {
    type: "Internship",
    position: "Field Work Practice",
    company: "PT. Hitachi Chemical Indonesia",
    year: "Karawang, October 2019 – December 2019",
    certificate: ["/experience/i2a.png", "/experience/i2c.png"],
    description:
      "Managed daily production line tasks at PT. Hitachi Chemical Indonesia, including preparing worksheets and Process Control Sheets, summarizing production data for Plant 1 and Plant 2, handling around 150 physical documents, and participating in 5S initiatives to ensure workplace efficiency and organization.",
  },

  // Teaching Assistant
  {
    type: "Teaching Assistant",
    position: "Teaching Assistant – Computer Education Practicum",
    company: "Law Study Program, Universitas Jenderal Achmad Yani",
    year: "Cimahi, July 2025",
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
    position: "Teaching Assistant – Computer Applications Practicum",
    company:
      "Informatics Engineering Study Program, Universitas Jenderal Achmad Yani",
    year: "Cimahi, October 2022 – December 2022",
    certificate: ["/experience/t1a.png"],
    description:
      "Assisted 30+ students in understanding practicum materials and exercises, focusing on Microsoft Word, Excel, and PowerPoint. Provided support by answering questions, facilitating learning during sessions, preparing practicum materials, coordinating with lecturers, and evaluating students’ practicum reports.",
  },

  // Training
  {
    type: "Training",
    position: "Project Management Participant – Google Career Certificate",
    company:
      "Kementerian Komunikasi dan Informatika Republik Indonesia (KOMDIGI)",
    year: "Karawang, October 2025 – Present",
    certificate: ["/experience/p1a.png", "/experience/p1b.png"],
    description:
      "Currently progressing in the Google Project Management Learning Path at the Intermediate level. The program builds on fundamental project management skills, covering risk management, quality control, digital project tools, and practical application through case studies. It integrates AI essentials to enhance productivity and responsible use of AI in project planning and execution. Focused on applying theory to real-world project scenarios while developing competencies in project initiation, planning, and execution.",
  },
  {
    type: "Training",
    position:
      "Full-Stack Developer Participant – Studi Independen Bersertifikat Dicoding x Kampus Merdeka Cycle 5 Program ",
    company: "Dicoding Indonesia (PT Presentologics)",
    year: "Bandung, August 2023 – December 2023",
    gallery: [
      "/experience/p2a.png",
      "/experience/p2b.png",
      "/experience/p2c.png",
    ],
    certificate: [
      "/experience/p2d.png",
      "/experience/p2e.png",
      "/experience/p2f.png",
    ],
    description:
      "Completed intensive online training covering theory, hands-on practice, quizzes, exams, and a capstone project. Gained technical proficiency in Front-End, Back-End, and DevOps through 10+ certification classes, instructor-led sessions, expert mentoring, and consultations. Developed non-technical skills in Growth Mindset, Communication, and Business Presentation, etc. Collaborated on a team project to build a web-based application integrating Front-End, Back-End, and DevOps.",
  },

  // Organization
  {
    type: "Organization",
    position: "Committee – New Student Orientation",
    company:
      "Informatics Engineering Study Program, Universitas Jenderal Achmad Yani",
    year: "Cimahi, July 2024",
    gallery: ["/experience/o1.jpg", "/experience/o2.jpg", "/experience/o3.jpg"],
    description:
      "Managed participant and staff needs, including meals and health, from preparation to distribution to ensure smooth event operations. Coordinated with team members across divisions to maintain organized and efficient processes, and supervised on-site activities while addressing any arising issues.",
  },
];

export default function Experience() {
  const bulletPositions = [10, 30, 180, 250];
  const tabs = ["Internship", "Teaching Assistant", "Training", "Organization"];
  const [activeTab, setActiveTab] = useState("Internship");
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
    <section className="max-w-6xl mx-auto py-12 px-4 bg-[#0f2e51]">
      <h2 className="flex items-center mb-10 justify-center gap-4 text-center">
        <span className="flex-1 h-px bg-[#b4dbdc]"></span>
        <span
          className="text-2xl lg:text-3xl font-semibold flex gap-2 items-end"
          style={{ color: "#eb5c74", WebkitTextStroke: "1px #c3224d" }}
        >
          <span>Learning Along the</span>
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
            Way
          </span>
        </span>
        <span className="flex-1 h-px bg-[#b4dbdc]"></span>
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

      <div className="relative mb-[-32]">
        <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full border-l-2 border-[#b4dbdc]"></div>

        {filteredData.map((exp, index) => {
          const isRight = index % 2 === 0;
          return (
            <div key={index} className="relative mb-10 w-full">
              <div
                className="absolute left-4 md:left-1/2 w-4 h-4 bg-[#eb5c74] rounded-full border-2 border-[#b4dbdc] transform -translate-x-1/2 md:-translate-x-1/2"
                style={{ top: `${bulletPositions[index]}px` }}
              ></div>

              <div
                className={`w-full md:w-1/2 ${
                  isRight
                    ? "pl-10 pr-5 md:ml-auto md:pl-7 md:pr-5 relative text-left"
                    : "pl-10 pr-5 md:mr-auto md:pr-7 md:pl-5 relative text-left md:text-right -mt-10"
                }`}
                style={isRight ? { transform: "translateY(-20px)" } : {}}
              >
                <div className="p-1 text-white">
                  <h3 className="mt-5 text-base md:text-md font-semibold text-[#eb5c74]">
                    {exp.position}
                  </h3>
                  <div>
                    <span className="text-sm md:text-sm text-[#a5c882]">
                      {exp.company}
                    </span>
                    <span className="block text-xs md:text-xs mt-1 font-medium text-[#b4dbdc]">
                      {exp.year}
                    </span>
                  </div>
                  <p className="mt-2 text-justify md:text-sm text-xs">
                    {Array.isArray(exp.description)
                      ? exp.description.join(" ")
                      : exp.description}
                  </p>

                  <div className="flex gap-3 mt-3 flex-wrap">
                    {exp.gallery?.length > 0 && (
                      <button
                        onClick={() => openModal("gallery", exp.gallery)}
                        className="px-3 py-1 bg-[#f6b7c1] text-sm font-medium text-[#0f2e51] rounded hover:scale-105 transition cursor-pointer"
                      >
                        View Gallery
                      </button>
                    )}
                    {exp.certificate?.length > 0 && (
                      <button
                        onClick={() => openModal("gallery", exp.certificate)}
                        className="px-3 py-1 bg-[#ffffb0] text-sm font-medium text-[#0f2e51] rounded hover:scale-105 transition cursor-pointer"
                      >
                        View Certificate
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
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
                  className="p-2 rounded-full transition hover:bg-gray-200 hover:shadow-md hover:scale-105 cursor-pointer text-[#0f2e51]"
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
                      currentSlide === idx ? "bg-[#0f2e51]" : "bg-gray-300"
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
