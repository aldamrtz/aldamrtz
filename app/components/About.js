"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { createPortal } from "react-dom";
import {
  Calendar,
  Award,
  BookOpen,
  Trophy,
  UsersRound,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";
import Skills from "./Skills";

const universityEducation = {
  major: "Bachelor of Computer Science",
  school: "Universitas Jenderal Achmad Yani",
  logo: "/unjani.png",
  period: "Sep 2021 – Sep 2025",
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

const organization = {
  title: "Committee Member — PKKMO 2024",
  detail: "Informatics Engineering, Universitas Jenderal Achmad Yani",
  period: "Cimahi, Jul 2024",
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
};

function FolderTab({ label, isActive, onClick, bg, border, ring }) {
  return (
    <button
      onClick={onClick}
      className={`absolute -top-8 left-10 sm:-top-9 sm:left-15 z-40 rounded-t-md border border-[#0b0d10]/10 border-b-0 px-3 py-2 sm:px-5 sm:py-3 text-xs sm:text-sm lg:text-base leading-none tracking-[0.12em] transition-all cursor-pointer ring-2 ${ring}`}
      style={{
        fontFamily: "'Anton', sans-serif",
        backgroundColor: bg,
        color: "#0b0d10",
      }}
    >
      {label}
    </button>
  );
}

function EducationBulletDetails() {
  const publication = publications[0];
  const award = awards[0];
  const [isOrganizationOpen, setIsOrganizationOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const showPreviousSlide = () => {
    setCurrentSlide((slide) =>
      slide === 0 ? organization.gallery.length - 1 : slide - 1,
    );
  };

  const showNextSlide = () => {
    setCurrentSlide((slide) =>
      slide === organization.gallery.length - 1 ? 0 : slide + 1,
    );
  };

  return (
    <div className="flex h-full flex-col text-left text-[#0b0d10]">
      <div className="mt-3 sm:mt-4 flex items-start gap-2 sm:gap-3">
        <div className="grid h-12 w-12 sm:h-16 sm:w-16 shrink-0 place-items-center rounded-lg bg-[#0b0d10]/10 p-1.5">
          <img
            src={universityEducation.logo}
            alt="Universitas Jenderal Achmad Yani"
            className="h-full w-full object-contain"
          />
        </div>
        <div className="min-w-0">
          <h3 className="text-[11px] sm:text-[13px] lg:text-[14px] font-bold leading-tight text-[#0b0d10]">
            {universityEducation.school}
          </h3>
          <p className="mt-1 text-[9px] sm:text-[11px] lg:text-[12px] leading-tight text-[#0b0d10]">
            {universityEducation.major}
          </p>
          <div className="mt-2 flex flex-wrap gap-1 text-[8px] sm:text-[9px] lg:text-[10px] font-semibold text-white">
            <span className="inline-flex items-center gap-1 rounded-full bg-[#0b0d10] px-1.5 py-0.5 sm:px-2 sm:py-1">
              {universityEducation.period}
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-[#0b0d10] px-1.5 py-0.5 sm:px-2 sm:py-1">
              GPA 3.59/4.00
            </span>
          </div>
        </div>
      </div>
      <div className="my-2.5 sm:my-3.5 border-t border-[#0b0d10]/10" />
      <ul className="space-y-1.5 sm:space-y-2 text-[10px] sm:text-[12px] lg:text-[13px] leading-[1.45] lg:leading-[1.55] text-[#0b0d10]">
        <li className="flex items-start gap-2">
          <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[#b4dbdc]">
            <BookOpen className="h-3.5 w-3.5 text-[#0b0d10]" />
          </span>
          <div>
            <span className="font-bold text-[#0b0d10]">Publications: </span>
            {publication.title} (2025).{" "}
            <a
              href={publication.link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              aria-label="Open publication"
              className="font-semibold text-[#0b0d10] underline decoration-[#b4dbdc] underline-offset-2 transition hover:text-[#b4dbdc]"
            >
              Read paper
            </a>
          </div>
        </li>
        <li className="flex items-start gap-2">
          <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[#b4dbdc]">
            <Award className="h-3.5 w-3.5 text-[#0b0d10]" />
          </span>
          <div>
            <span className="font-bold text-[#0b0d10]">Awards: </span>
            Best Graduate in the Full-Stack Developer program at Studi
            Independen Bersertifikat Dicoding x Kampus Merdeka Cycle 5 (2023).{" "}
            <a
              href={award.link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              aria-label="Open award certificate"
              className="font-semibold text-[#0b0d10] underline decoration-[#b4dbdc] underline-offset-2 transition hover:text-[#b4dbdc]"
            >
              View certificate
            </a>
          </div>
        </li>
        <li className="flex items-start gap-2">
          <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[#b4dbdc]">
            <UsersRound className="h-3.5 w-3.5 text-[#0b0d10]" />
          </span>
          <div>
            <span className="font-bold text-[#0b0d10]">Organization: </span>
            Committee Member BAPKMO (2024), Informatics Engineering, Universitas
            Jenderal Achmad Yani.{" "}
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                setCurrentSlide(0);
                setIsOrganizationOpen(true);
              }}
              aria-label="View organization experience"
              className="font-semibold text-[#0b0d10] underline decoration-[#b4dbdc] underline-offset-2 transition hover:text-[#b4dbdc] cursor-pointer"
            >
              Open gallery
            </button>
          </div>
        </li>
      </ul>

      {isOrganizationOpen &&
        createPortal(
          <div
            className="fixed inset-0 z-[999] flex items-center justify-center bg-white/70 px-4 py-6 backdrop-blur-sm"
            onClick={() => setIsOrganizationOpen(false)}
          >
            <div
              className="relative w-full max-w-md overflow-hidden rounded-xl bg-[#0b0d10] shadow-2xl shadow-black/30"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                aria-label="Close organization experience"
                onClick={() => setIsOrganizationOpen(false)}
                className="absolute right-3 top-3 z-10 rounded-full bg-black/45 p-2 text-white transition hover:bg-black/70 cursor-pointer"
              >
                <X className="h-4 w-4" />
              </button>

              <div className="relative aspect-video bg-black/20">
                <img
                  src={organization.gallery[currentSlide]}
                  alt={`Organization activity ${currentSlide + 1}`}
                  className="h-full w-full object-contain"
                />
                <button
                  type="button"
                  aria-label="Previous photo"
                  onClick={showPreviousSlide}
                  className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/45 p-2 text-white transition hover:bg-black/70 cursor-pointer"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  aria-label="Next photo"
                  onClick={showNextSlide}
                  className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/45 p-2 text-white transition hover:bg-black/70 cursor-pointer"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
                <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5 rounded-full bg-black/45 px-2.5 py-1.5">
                  {organization.gallery.map((_, index) => (
                    <button
                      key={index}
                      type="button"
                      aria-label={`Show photo ${index + 1}`}
                      onClick={() => setCurrentSlide(index)}
                      className={`h-1.5 rounded-full transition-all cursor-pointer ${
                        currentSlide === index
                          ? "w-5 bg-white"
                          : "w-1.5 bg-white/40 hover:bg-white/70"
                      }`}
                    />
                  ))}
                </div>
              </div>

              <div className="p-5">
                <ul className="list-disc space-y-1.5 pl-4 text-sm leading-relaxed text-white marker:text-[#b4dbdc]">
                  {organization.description.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>,
          document.body,
        )}
    </div>
  );
}

function StackedCards() {
  const [activeTab, setActiveTab] = useState("photo");

  return (
    <div className="relative w-60 sm:w-64 lg:w-72 h-[410px] my-2 pt-4 overflow-visible">
      {/* PHOTO CARD */}
      <motion.div
        onClick={() => setActiveTab("photo")}
        animate={
          activeTab === "photo"
            ? { zIndex: 30, rotate: 0, x: 0, y: 5, scale: 1 }
            : { zIndex: 10, rotate: -7, x: -14, y: -4, scale: 0.97 }
        }
        transition={{ type: "spring", stiffness: 220, damping: 20 }}
        whileHover={activeTab !== "photo" ? { rotate: -9, scale: 0.98 } : {}}
        className={`absolute inset-0 bg-[#b4dbdc] rounded-lg shadow-md border border-[#72999b] w-60 sm:w-64 lg:w-72 p-3 cursor-pointer select-none overflow-visible ring-2 ring-[#b4dbdc]/50 ${
          activeTab === "photo" ? "shadow-2xl" : ""
        }`}
      >
        <img
          src="/about.png"
          alt="Alda Amorita Azza"
          className="w-full h-[360px] object-cover object-bottom border border-white rounded-sm"
        />
      </motion.div>

      {/* EDUCATION FOLDER CARD */}
      <motion.div
        onClick={() => setActiveTab("others")}
        animate={
          activeTab === "others"
            ? { zIndex: 30, rotate: 0, x: 0, y: 0, scale: 1 }
            : { zIndex: 20, rotate: 1, x: -25, y: 1, scale: 0.97 }
        }
        transition={{ type: "spring", stiffness: 220, damping: 20 }}
        whileHover={activeTab !== "others" ? { rotate: 5, scale: 0.98 } : {}}
        className={`absolute inset-0 bg-white rounded-lg shadow-md border border-[#0b0d10]/10 w-[17rem] sm:w-72 lg:w-[21rem] p-3 sm:p-4 cursor-pointer select-none overflow-visible ring-2 ring-white/50 ${
          activeTab === "others" ? "shadow-2xl" : ""
        }`}
      >
        <FolderTab
          label="Education"
          isActive={activeTab === "others"}
          onClick={(e) => {
            e.stopPropagation();
            setActiveTab("others");
          }}
          bg="#ffffff"
          border="#e2e8f0"
          ring="ring-white/50"
        />
        <EducationBulletDetails />
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
