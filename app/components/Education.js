"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const educationData = [
  {
    major: "Bachelor’s Degree – Informatics Engineering",
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
    description:
      "Studi Independen Bersertifikat Dicoding x Kampus Merdeka Cycle 5",
    institution: "Dicoding Indonesia (PT Presentologics)",
    period: "Bandung, December 2023",
    link: "https://drive.google.com/drive/folders/1E0cCQd0aZodnbprX2wnZfZ41l5DitM3X",
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="mx-auto py-10 px-6 lg:px-16 text-white bg-[#0f2e51]"
    >
      <h2 className="flex items-center mb-10 justify-center gap-4">
        <span className="flex-1 h-px bg-[#b4dbdc]"></span>
        <span
          className="text-2xl lg:text-3xl font-semibold flex gap-2 items-end"
          style={{ color: "#eb5c74", WebkitTextStroke: "1px #c3224d" }}
        >
          <span>Highlights of</span>
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
            My
          </span>
          <span>Journey</span>
        </span>
        <span className="flex-1 h-px bg-[#b4dbdc]"></span>
      </h2>

      <div className="flex flex-col lg:flex-row gap-8">
        <motion.div
          className="lg:w-1/2 relative"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <h3 className="text-xl font-semibold text-white mb-3 pl-0 lg:pl-0">
            Education
          </h3>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 relative min-h-[300px] lg:min-h-[325px]">
            <div className="absolute left-10 top-7 bottom-7 lg:bottom-7 w-[2px] bg-[#0f2e51]"></div>
            {educationData.map((edu, idx) => (
              <div key={edu.school} className="mb-4 relative pl-10">
                <div
                  className="absolute left-4 w-4 h-4 bg-[#b4dbdc] border-2 border-[#0f2e51] rounded-full -translate-x-1/2"
                  style={{ top: idx === 0 ? "2rem" : "2rem" }}
                ></div>
                <div style={{ paddingTop: idx === 0 ? "1.7rem" : "1.7rem" }}>
                  <h3 className="text-lg font-semibold text-[#0f2e51]">
                    {edu.school}
                  </h3>
                  <p className="text-[#0f2e51] text-sm font-medium">
                    {edu.major}
                  </p>
                  <p className="text-[#0f2e51] text-xs mt-1 font-medium">
                    {edu.grade}
                  </p>
                  <p className="text-[#b4dbdc] text-xs mt-1 font-medium">
                    {edu.period}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="lg:w-3/5 flex flex-col gap-6 pr-4 lg:pr-8">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <h3 className="text-xl font-semibold text-white mb-3">
              Publications
            </h3>
            <div className="grid grid-cols-1 gap-4">
              {publications.map((pub, idx) => (
                <a
                  key={pub.title}
                  href={pub.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white border-gray-300 p-4 rounded-lg shadow-md hover:shadow-lg hover:bg-[#ffffb0] transform hover:-translate-y-1 transition-all duration-300 relative"
                >
                  <ExternalLink className="w-5 h-5 text-[#0f2e51] absolute bottom-3 right-3" />
                  <h4 className="text-sm font-semibold text-[#0f2e51]">
                    {pub.title}
                  </h4>
                  <p className="text-[#0f2e51] text-sm font-medium mt-1">
                    {pub.journal}
                  </p>
                  <p className="text-[#b4dbdc] font-medium text-xs mt-1">
                    {pub.author}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-1">
                    <span className="bg-[#c2b5e3] text-[#3a2f53] px-2 py-0.5 rounded-full text-xs mt-1">
                      {pub.sinta}
                    </span>
                    <span className="bg-[#f6b7c1] text-[#c3224d] px-2 py-0.5 rounded-full text-xs mt-1">
                      {pub.year}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <h3 className="text-xl font-semibold text-white mb-3">Awards</h3>
            <div className="grid grid-cols-1 gap-4">
              {awards.map((ach) => (
                <a
                  key={ach.title}
                  href={ach.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg  hover:bg-[#ffffb0] transform hover:-translate-y-1 transition-all duration-300 relative"
                >
                  <ExternalLink className="w-5 h-5 text-[#0f2e51] absolute bottom-3 right-3" />

                  <h4 className="text-sm font-semibold text-[#0f2e51]">
                    {ach.title}
                  </h4>
                  <p className="text-[#0f2e51] text-sm font-medium mt-1">
                    {ach.description}
                  </p>
                  <p className="text-[#0f2e51] text-xs mt-1 font-medium">
                    {ach.institution}
                  </p>
                  <p className="text-[#b4dbdc] font-medium text-xs mt-1">
                    {ach.period}
                  </p>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
