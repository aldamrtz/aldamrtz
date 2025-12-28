"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { GraduationCap, ExternalLink } from "lucide-react";
import Skills from "./Skills";

const educationData = [
  {
    major: "Informatics Engineering",
    school: "Universitas Jenderal Achmad Yani",
    period: "Cimahi, Sep 2021 – Sep 2025",
    grade: "GPA: 3.59/4.00",
  },
  {
    major: "Computer and Network Engineering",
    school: "SMK Rosma Karawang",
    period: "Karawang, Jul 2018 – Jun 2021",
    grade: "Final Grade Average: 85/100",
  },
];

const publications = [
  {
    journal: "Jurnal Teknologi Informasi Komunikasi (TEMATIK)",
    title:
      "Klasifikasi Aktivitas Pengguna yang Berpotensi Menyebabkan Kebocoran Informasi Sensitif Menggunakan Algoritma Random Forest",
    author: "Alda Amorita Azza, Asep Id Hadiana, Agus Komarudin",
    sinta: "Sinta 3",
    year: 2025,
    link: "https://jurnal.plb.ac.id/index.php/tematik/article/view/2325",
  },
];

const awards = [
  {
    title: "🏆 Best Full-Stack Developer Participant",
    description: "SIB Dicoding x Kampus Merdeka Cycle 5",
    institution: "Dicoding Indonesia (PT Presentologics)",
    period: "Bandung, December 2023",
    link: "https://drive.google.com/drive/folders/1E0cCQd0aZodnbprX2wnZfZ41l5DitM3X",
  },
];

function EducationTimeline({ data }) {
  return (
    <div className="relative mt-2 lg:ml-10">
      <h3
        className="text-3xl text-[#0f2e51] mb-5 flex items-center gap-4"
        style={{ fontFamily: "'Anton', sans-serif" }}
      >
        <span className="bg-[#0f2e51] p-2 rounded-sm border-2 border-[#ffffff] flex items-center justify-center relative z-10">
          <GraduationCap className="w-6 h-6 text-[#ffffff]" />
        </span>
        Education
      </h3>
      <span className="absolute left-5 top-[40px] h-39 lg:h-40 w-[2px] bg-[#ffffff]"></span>
      <ul className="relative ml-15">
        {data.map((edu, i) => (
          <li key={i} className="relative mb-5">
            <span className="absolute lg:right-[331px] right-[286px] lg:top-1 w-4 h-4 rounded-full bg-[#0f2e51] border-3 border-[#ffffff]" />
            <p className="font-bold text-sm sm:text-base text-[#0f2e51]">
              {edu.school}
            </p>
            <p className="font-semibold text-sm text-[#0f2e51] mt-1">
              {edu.major}
            </p>
            <p className="font-medium text-xs text-[#0f2e51] mt-1">
              {edu.period}
            </p>
            <p className="inline-block font-medium text-sm text-[#0f2e51] mt-2 bg-[#ffffb0] px-2 py-1 rounded-md shadow-md transform rotate-1">
              {edu.grade}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

function PublicationAward({ publications, awards }) {
  return (
    <div
      className="relative
  sm:ml-3 lg:ml-5
  sm:w-[360px]
  lg:w-[430px]"
    >
      <div>
        <h3
          className="text-xl text-[#0f2e51] mb-2"
          style={{ fontFamily: "'Anton', sans-serif" }}
        >
          Publications
        </h3>
        {publications.map((pub) => (
          <a
            key={pub.title}
            href={pub.link}
            target="_blank"
            className="
    relative block w-full p-5 mb-5
    text-[#ffffff] bg-[#0f2e51] rounded-lg
    shadow-md
    transition-all duration-300 ease-out
    hover:-translate-y-1 hover:shadow-xl
  "
          >
            <h4 className="font-medium text-xs lg:text-sm">{pub.title}</h4>
            <p className="font-medium text-[11px] sm:text-sm mt-1 text-[#b4dbdc]">
              {pub.journal}
            </p>
            <p className="font-normal text-[10px] sm:text-xs mt-1 text-[#a5c882]">
              {pub.author}
            </p>

            <div className="flex gap-2 mt-2">
              <span className="text-xs bg-[#b4dbdc] text-[#0f2e51] px-2 py-1 rounded-full font-semibold">
                {pub.sinta}
              </span>
              <span className="text-xs bg-[#ffffb0] text-[#0f2e51] px-2 py-1 rounded-full font-semibold">
                {pub.year}
              </span>
            </div>

            <ExternalLink className="absolute bottom-3 right-3 w-5 h-5 text-[#ffffff]" />
          </a>
        ))}
      </div>

      <div>
        <h3
          className="text-xl text-[#0f2e51] mb-2"
          style={{ fontFamily: "'Anton', sans-serif" }}
        >
          Awards
        </h3>
        {awards.map((a) => (
          <a
            key={a.title}
            href={a.link}
            target="_blank"
            className="
    relative block w-full p-5 mb-1
    text-[#ffffff] bg-[#0f2e51] rounded-lg
    shadow-md
    transition-all duration-300 ease-out
    hover:-translate-y-1 hover:shadow-xl
  "
          >
            <h4 className="font-medium text-xs lg:text-sm">{a.title}</h4>
            <p className="font-medium text-xs lg:text-sm text-[#a5c882] mt-1">
              {a.description}
            </p>
            <p className="font-medium text-[11px] lg:text-sm text-[#b4dbdc] mt-1">
              {a.institution}
            </p>
            <p className="font-normal text-[10px] lg:text-xs mt-1">
              {a.period}
            </p>
            <ExternalLink className="absolute bottom-3 right-3 w-5 h-5 text-[#ffffff]" />
          </a>
        ))}
      </div>
    </div>
  );
}

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState("education");

  return (
    <section
      id="about"
      className="bg-[#0f2e51] -mb-10 px-6 lg:px-16 overflow-hidden"
    >
      <div className="w-screen relative left-1/2 -translate-x-1/2 bg-[#a5c882] py-4 mb-16">
        <div className="flex whitespace-nowrap gap-8 justify-center">
          {Array.from({ length: 12 }).map((_, i) => (
            <span
              key={i}
              className="uppercase sm:text-lg lg:text-lg tracking-widest"
              style={{
                fontFamily: "'Anton', sans-serif",
                color: "#1D2A62",
              }}
            >
              ABOUT ME
            </span>
          ))}
        </div>
      </div>

      <div className="flex flex-col-reverse lg:flex-row gap-20 items-center max-w-[1400px] mx-auto mb-24">
        <div className="flex-[6] px-4 lg:pl-10 lg:pr-6">
          <motion.p
            className="text-[#ffffff] text-xs lg:text-base leading-relaxed tracking-wide text-justify"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span
              className="float-left mr-3 leading-none"
              style={{
                fontFamily: "'Anton', sans-serif",
                fontSize: "4rem",
              }}
            >
              Hello!
            </span>
            My name's<span className="text-[#a5c882]"> Alda Amorita Azza</span>,
            a fresh graduate in Informatics Engineering who’s endlessly curious
            about how tech shapes everyday life. I’ve explored building web apps
            end-to-end, from designing the interface, crafting the backend
            logic, managing databases, integrating APIs, to making sure
            everything runs smoothly through testing. Along the way, I also
            discovered how much I enjoy collaborating with people and growing
            through teamwork on different projects. It turns out that sharing
            knowledge can be just as worthwhile as learning it myself. At the
            moment, I’m embracing every chance to learn, experiment, and sharpen
            my skills. With a big enthusiasm for continuous learning and
            adaptability, I aim to grow into a tech professional who’s skilled,
            creative, and ready to thrive in this ever-evolving digital world.
          </motion.p>
        </div>

        <motion.div
          className="flex-[0.8] flex justify-center"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="bg-white rounded-lg shadow-md border border-[#e2e8f0] w-64 lg:w-72 p-3 pb-10"
            whileHover={{ rotate: 2, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <img
              src="/about.png"
              alt="Alda Amorita Azza"
              className="w-full h-[300px] object-cover object-top border border-[#e2e8f0] rounded-sm"
            />
          </motion.div>
        </motion.div>
      </div>

      <div className="w-screen relative left-1/2 -translate-x-1/2">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex flex-col xl:flex-row gap-16 items-start">
            <div className="flex-1 relative max-w-[680px] xl:max-w-[40vw] -translate-x-6 xl:-translate-x-10">
              <div className="relative min-h-[360px] sm:min-h-[420px] lg:min-h-[520px] max-w-[680px]">
                <div
                  className="absolute -bottom-1 lg:bottom-30
  w-[105%] lg:w-[105%]
  h-[105%] lg:h-[80%]
  bg-white rounded-lg shadow-lg -rotate-1 z-0"
                ></div>
                <div
                  className="relative overflow-hidden rounded-b-xl
    p-5 lg:p-8
    pr-5 lg:pr-20"
                  style={{
                    backgroundColor:
                      activeTab === "education" ? "#a5c882" : "#ffffb0",
                    boxShadow: "0 3px 13px rgba(0,0,0,0.5)",
                    minHeight: "250px",
                  }}
                >
                  {activeTab === "education" && (
                    <EducationTimeline data={educationData} />
                  )}
                  {activeTab === "others" && (
                    <PublicationAward
                      publications={publications}
                      awards={awards}
                    />
                  )}
                </div>
                <div className="absolute top-0 right-0 translate-x-full flex flex-col">
                  <button
                    onClick={() => setActiveTab("education")}
                    className={`
    cursor-pointer
    h-36
    w-10 lg:w-13
    hover:w-13 lg:hover:w-15
    flex items-center justify-center
    tracking-widest
    text-base
    rounded-r-xl
    transition-all duration-300 ease-out
    ${
      activeTab === "education"
        ? "bg-[#a5c882] text-[#0f2e51] z-20 w-13 lg:w-15"
        : "bg-[#a5c882]/80 text-[#0f2e51] z-10"
    }
  `}
                    style={{
                      writingMode: "vertical-rl",
                      fontFamily: "'Anton', sans-serif",
                      boxShadow:
                        "0 -4px 6px -4px rgba(0,0,0,0.35), 0 4px 6px -4px rgba(0,0,0,0.35)",
                      clipPath: "inset(-10px -10px -10px 0)",
                    }}
                  >
                    Education
                  </button>

                  <button
                    onClick={() => setActiveTab("others")}
                    className={`cursor-pointer -mt-5
    h-36
    w-10 lg:w-13
    hover:w-12 lg:hover:w-15
    flex items-center justify-center
    tracking-widest
    text-base
    rounded-r-xl
    transition-all duration-300 ease-out ${
      activeTab === "others" && "translate-x-1 scale-[1.03]"
        ? "bg-[#ffffb0] text-[#0f2e51] z-20 w-12 lg:w-15"
        : "bg-[#ffffb0]/80 text-[#0f2e51] z-10"
    } rounded-r-xl`}
                    style={{
                      writingMode: "vertical-rl",
                      textOrientation: "mixed",
                      fontFamily: "'Anton', sans-serif",
                      boxShadow:
                        "0 -4px 6px -4px rgba(0,0,0,0.35), 0 4px 6px -4px rgba(0,0,0,0.35)",
                      clipPath: "inset(-10px -10px -10px 0)",
                    }}
                  >
                    Others
                  </button>
                </div>
              </div>
            </div>
            <div className="flex-1 mt-[-20px]">
              <Skills />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
