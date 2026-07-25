"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ExternalLink } from "lucide-react";
import Skills from "./Skills";

const universityEducation = {
  major: "Informatics Engineering",
  school: "Universitas Jenderal Achmad Yani",
  logo: "/education-unjani.png",
  period: "Cimahi, Sep 2021 – Sep 2025",
};

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

function SectionHeading({ children }) {
  return (
    <h3
      className="text-xs lg:text-sm text-[#0b0d10] mb-3 border-b border-[#0b0d10]/20 pb-2 first:mt-0 mt-1"
      style={{ fontFamily: "'Anton', sans-serif" }}
    >
      {children}
    </h3>
  );
}

function FolderTab({ label, isActive, onClick, bg, border, ring }) {
  return (
    <button
      onClick={onClick}
      className={`absolute top-8 -right-[2.65rem] z-40 flex items-center justify-center rounded-r-md border border-l-0 px-2 py-4 text-xs lg:text-sm leading-none tracking-[0.14em] transition-all cursor-pointer ${isActive ? `ring-2 ${ring}` : "opacity-90"}`}
      style={{
        fontFamily: "'Anton', sans-serif",
        backgroundColor: isActive ? bg : `${bg}cc`,
        color: "#0b0d10",
        borderColor: border,
        writingMode: "vertical-rl",
        textOrientation: "mixed",
      }}
    >
      {label}
    </button>
  );
}

function OthersContent() {
  return (
    <div className="text-[#0b0d10] h-full flex flex-col text-left">
      <div className="space-y-5 overflow-y-auto max-h-[320px] pr-1 scrollbar-thin">
        <div>
          <SectionHeading>EDUCATION</SectionHeading>
          <div className="flex items-start gap-2.5 rounded-md bg-[#0b0d10] p-3 text-white shadow-xs">
            <img
              src={universityEducation.logo}
              alt={`Logo ${universityEducation.school}`}
              className="h-10 w-10 shrink-0 rounded-md bg-white p-1 object-contain"
            />
            <div className="min-w-0">
              <p className="font-semibold text-[11px] leading-tight text-white">
                {universityEducation.school}
              </p>
              <p className="mt-0.5 text-[10px] leading-tight text-[#a5c882]">
                {universityEducation.major}
              </p>
              <p className="mt-1 text-[9px] text-[#b4dbdc]">
                {universityEducation.period}
              </p>
            </div>
          </div>
        </div>

        <div>
          <SectionHeading>PUBLICATIONS</SectionHeading>
          {publications.map((pub, idx) => (
            <a
              key={idx}
              href={pub.link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="block p-3 bg-[#0b0d10] text-white rounded-md shadow-xs text-left relative group hover:bg-[#1a1d24] transition-colors"
            >
              <h4 className="font-semibold text-[11px] leading-tight text-white">
                {pub.title}
              </h4>
              <p className="text-[10px] text-[#b4dbdc] mt-0.5">{pub.journal}</p>
              <div className="flex gap-1 mt-1">
                <span className="text-[9px] bg-[#b4dbdc] text-[#0b0d10] px-1.5 py-0.2 rounded font-bold">
                  {pub.sinta}
                </span>
                <span className="text-[9px] bg-[#ffffb0] text-[#0b0d10] px-1.5 py-0.2 rounded font-bold">
                  {pub.year}
                </span>
              </div>
              <ExternalLink className="absolute bottom-2 right-2 w-3 h-3 text-white/70" />
            </a>
          ))}
        </div>

        <div>
          <SectionHeading>AWARDS</SectionHeading>
          {awards.map((a, idx) => (
            <a
              key={idx}
              href={a.link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="block p-3 bg-[#0b0d10] text-white rounded-md shadow-xs text-left relative group hover:bg-[#1a1d24] transition-colors"
            >
              <h4 className="font-semibold text-[11px] leading-tight text-white">
                {a.title}
              </h4>
              <p className="text-[10px] text-[#a5c882] mt-0.5">
                {a.description}
              </p>
              <p className="text-[9px] text-[#b4dbdc] mt-0.5">
                {a.institution}
              </p>
              <ExternalLink className="absolute bottom-2 right-2 w-3 h-3 text-white/70" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

function StackedCards() {
  const [activeTab, setActiveTab] = useState("photo");

  return (
    <div className="relative w-64 lg:w-72 h-[370px] my-6 mr-10 overflow-visible">
      {/* PHOTO CARD */}
      <motion.div
        onClick={() => setActiveTab("photo")}
        animate={
          activeTab === "photo"
            ? { zIndex: 30, rotate: 0, x: 0, y: 0, scale: 1 }
            : { zIndex: 10, rotate: -7, x: -14, y: -4, scale: 0.97 }
        }
        transition={{ type: "spring", stiffness: 220, damping: 20 }}
        whileHover={activeTab !== "photo" ? { rotate: -9, scale: 0.98 } : {}}
        className={`absolute inset-0 bg-white rounded-lg shadow-md border border-[#e2e8f0] w-64 lg:w-72 p-3 cursor-pointer select-none overflow-visible ${
          activeTab === "photo" ? "shadow-2xl ring-2 ring-white/50" : ""
        }`}
      >
        <img
          src="/about.png"
          alt="Alda Amorita Azza"
          className="w-full h-[320px] object-cover object-bottom border border-[#e2e8f0] rounded-sm"
        />
      </motion.div>

      {/* OTHERS FOLDER CARD */}
      <motion.div
        onClick={() => setActiveTab("others")}
        animate={
          activeTab === "others"
            ? { zIndex: 30, rotate: 0, x: 0, y: 0, scale: 1 }
            : { zIndex: 20, rotate: 5, x: 16, y: 8, scale: 0.97 }
        }
        transition={{ type: "spring", stiffness: 220, damping: 20 }}
        whileHover={activeTab !== "others" ? { rotate: 7, scale: 0.98 } : {}}
        className={`absolute inset-0 bg-[#ffffb0] rounded-lg shadow-md border border-[#e6e69b] w-64 lg:w-72 p-4 cursor-pointer select-none overflow-visible ${
          activeTab === "others" ? "shadow-2xl ring-2 ring-[#ffffb0]/50" : ""
        }`}
      >
        <FolderTab
          label="OTHERS"
          isActive={activeTab === "others"}
          onClick={(e) => {
            e.stopPropagation();
            setActiveTab("others");
          }}
          bg="#ffffb0"
          border="#e6e69b"
          ring="ring-[#ffffb0]/50"
        />
        <OthersContent />
      </motion.div>
    </div>
  );
}

export default function AboutSection() {
  return (
    <section id="about" className="bg-[#0b0d10] px-6 lg:px-16 overflow-hidden">
      <div className="w-screen relative left-1/2 -translate-x-1/2 bg-[#b4dbdc] py-4 mb-16">
        <div className="flex whitespace-nowrap gap-8 justify-center">
          {Array.from({ length: 12 }).map((_, i) => (
            <span
              key={i}
              className="uppercase sm:text-lg lg:text-lg tracking-widest"
              style={{
                fontFamily: "'Anton', sans-serif",
                color: "#0b0d10",
              }}
            >
              ABOUT ME
            </span>
          ))}
        </div>
      </div>

      <div className="flex flex-col-reverse lg:flex-row gap-12 lg:gap-20 items-center max-w-[1400px] mx-auto mb-20">
        <div className="flex-[6] px-4 lg:pl-10 lg:pr-25">
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
            My name&apos;s
            <span className="text-[#b4dbdc]"> Alda Amorita Azza</span>, a
            Computer Science graduate who’s endlessly curious about how tech
            shapes everyday life. I&apos;ve explored building web apps
            end-to-end, working across the frontend, backend, and database,
            while making sure everything works as expected through testing.
            Along the way, I also discovered how much I enjoy collaborating with
            people and growing through teamwork on different projects. It turns
            out that sharing knowledge can be just as worthwhile as learning it
            myself. These days, I&apos;m always looking for new things to learn,
            new challenges to take on, and new opportunities to grow as a tech
            professional.
          </motion.p>
        </div>

        <motion.div
          className="flex-[0.8] flex justify-center pt-6 lg:-translate-x-20 overflow-visible"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <StackedCards />
        </motion.div>
      </div>

      <div className="max-w-[1400px] mx-auto pb-16">
        <Skills />
      </div>
    </section>
  );
}
