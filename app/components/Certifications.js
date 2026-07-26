"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Grid } from "swiper/modules";
import "swiper/css";
import "swiper/css/grid";

const certificationsData = [
  // Mobile Development
  {
    category: "Mobile Development",
    name: "Belajar Membuat Aplikasi Flutter untuk Pemula",
    year: "2026",
    image: "/certifications/m1.png",
    link: "https://www.dicoding.com/certificates/4EXG3M6LDZRL",
  },
  {
    category: "Mobile Development",
    name: "Memulai Pemrograman dengan Dart",
    year: "2026",
    image: "/certifications/pro6.png",
    link: "https://www.dicoding.com/certificates/1RXYQG9QQZVM",
  },

  // AI
  {
    category: "AI",
    name: "Google AI Essentials V1",
    year: "2025",
    image: "/certifications/ai9.png",
    link: "https://www.credly.com/badges/2903f511-fd09-4e06-bb88-093ea9b0882d/public_url",
  },
  {
    category: "AI",
    name: "Google AI Essentials",
    year: "2025",
    image: "/certifications/ai8.jpg",
    link: "https://coursera.org/share/eaa2117bfb2e872f557e5d99019bd09b",
  },
  {
    category: "AI",
    name: "Stay Ahead of the AI Curve",
    year: "2025",
    image: "/certifications/ai7.png",
    link: "https://coursera.org/share/3f5282e1ec8fab7342c41503f0c352b5",
  },
  {
    category: "AI",
    name: "Use AI Responsibly",
    year: "2025",
    image: "/certifications/ai6.png",
    link: "https://coursera.org/share/2343a9f556663397de15bc4052b8f6f6",
  },
  {
    category: "AI",
    name: "Discover the Art of Prompting",
    year: "2025",
    image: "/certifications/ai5.png",
    link: "https://coursera.org/share/30536728c84d218254cc79b8da707e4f",
  },
  {
    category: "AI",
    name: "Maximize Productivity With AI Tools",
    year: "2025",
    image: "/certifications/ai3.png",
    link: "https://coursera.org/share/f1807645ae70dcea2df2242ba24e2b20",
  },
  {
    category: "AI",
    name: "Introduction to AI",
    year: "2025",
    image: "/certifications/ai2.png",
    link: "https://coursera.org/share/f7bde15adaecac5624775d3a0eaae26d",
  },
  {
    category: "AI",
    name: "Artificial Intelligence (Micro Skill)",
    year: "2025",
    image: "/certifications/ai1.png",
    link: "https://digitalent.komdigi.go.id/cek-sertifikat#",
  },
  {
    category: "AI",
    name: "Learn Basic AI",
    year: "2025",
    image: "/certifications/ai4.png",
    link: "https://www.dicoding.com/certificates/6RPNRE218X2M",
  },

  // Web Development
  {
    category: "Web Development",
    name: "Learn Fundamental Front-End Web Development",
    year: "2025",
    image: "/certifications/web1.png",
    link: "https://www.dicoding.com/certificates/KEXL7O2R0XG2",
  },

  {
    category: "Web Development",
    name: "Learn Back-End for Beginners with Python",
    year: "2025",
    image: "/certifications/pro2.png",
    link: "https://www.dicoding.com/certificates/81P2L098NZOY",
  },
  {
    category: "Web Development",
    name: "Learn to Build Web Apps with React",
    year: "2023",
    image: "/certifications/web2.png",
    link: "https://www.dicoding.com/certificates/4EXGK5QODZRL",
  },
  {
    category: "Web Development",
    name: "Learn to Create Back-End Applications for Beginners",
    year: "2023",
    image: "/certifications/web4.png",
    link: "https://www.dicoding.com/certificates/07Z688552XQR",
  },
  {
    category: "Web Development",
    name: "Learn to Create Front-End Web for Beginners",
    year: "2023",
    image: "/certifications/web3.png",
    link: "https://www.dicoding.com/certificates/98XWVKQ3LPM3",
  },

  {
    category: "Web Development",
    name: "Learn the Basics of Web Programming",
    year: "2023",
    image: "/certifications/pro4.png",
    link: "https://www.dicoding.com/certificates/N9ZO6WV96XG5",
  },
  {
    category: "Web Development",
    name: "Getting Started with Programming Basics to Become a Software Developer",
    year: "2023",
    image: "/certifications/web5.png",
    link: "https://www.dicoding.com/certificates/53XEN8QOYXRN",
  },

  // Programming
  {
    category: "Programming",
    name: "Getting Started with Python Programming",
    year: "2025",
    image: "/certifications/pro1.png",
    link: "https://www.dicoding.com/certificates/MRZMN9GVRPYQ",
  },
  {
    category: "Programming",
    name: "Learn JavaScript Programming Basics",
    year: "2023",
    image: "/certifications/pro3.png",
    link: "https://www.dicoding.com/certificates/GRX52G95KX0M",
  },
  {
    category: "Programming",
    name: "Learn Git Basics with GitHub",
    year: "2023",
    image: "/certifications/pro5.png",
    link: "https://www.dicoding.com/certificates/N9ZO6VY6YXG5",
  },

  {
    category: "Programming",
    name: "Introduction to Programming Logic (Programming Logic 101)",
    year: "2023",
    image: "/certifications/web6.png",
    link: "https://www.dicoding.com/certificates/1OP803R5VXQK",
  },

  // Cloud & DevOps
  {
    category: "Cloud & DevOps",
    name: "Learn Basic Google Cloud",
    year: "2025",
    image: "/certifications/cnd1.png",
    link: "https://www.dicoding.com/certificates/NVP75238OXR0",
  },
  {
    category: "Cloud & DevOps",
    name: "Learn to Build Microservices Architecture",
    year: "2023",
    image: "/certifications/cnd4.png",
    link: "https://www.dicoding.com/certificates/KEXLLRGOWXG2",
  },
  {
    category: "Cloud & DevOps",
    name: "Learn CI/CD Implementation",
    year: "2023",
    image: "/certifications/cnd5.png",
    link: "https://www.dicoding.com/certificates/0LZ0QEK1NZ65",
  },
  {
    category: "Cloud & DevOps",
    name: "Learn DevOps Basics",
    year: "2023",
    image: "/certifications/cnd6.png",
    link: "https://www.dicoding.com/certificates/1RXY0E6OQZVM",
  },
  {
    category: "Cloud & DevOps",
    name: "Architecting on AWS (Building Cloud Architecture on AWS)",
    year: "2023",
    image: "/certifications/cnd2.png",
    link: "https://www.dicoding.com/certificates/QLZ9R7DREP5D",
  },
  {
    category: "Cloud & DevOps",
    name: "Cloud Practitioner Essentials (Learn AWS Cloud Basics)",
    year: "2023",
    image: "/certifications/cnd3.png",
    link: "https://www.dicoding.com/certificates/GRX52L53VX0M",
  },

  // Project Management
  {
    category: "Project Management",
    name: "Google Project Management Professional Certificate (v2)",
    year: "2025",
    image: "/certifications/pm9.png",
    link: "https://www.credly.com/badges/fb6a1d4b-a9ef-4392-bbfe-b04256f9f92e/public_url",
  },
  {
    category: "Project Management",
    name: "Google Project Management",
    year: "2025",
    image: "/certifications/pm8.jpg",
    link: "https://coursera.org/share/bcee7a2daabc9b91979bf93924e0dbbb",
  },
  {
    category: "Project Management",
    name: "Accelerate Your Job Search with AI",
    year: "2025",
    image: "/certifications/pm7.png",
    link: "https://coursera.org/share/ef9d5dcd4440aa0f18a595465f3cb316",
  },
  {
    category: "Project Management",
    name: "Capstone: Applying Project Management in the Real World",
    year: "2025",
    image: "/certifications/pm6.png",
    link: "https://coursera.org/share/9a83f0b8a0fb0edf8676f438ad0a64e7",
  },
  {
    category: "Project Management",
    name: "Agile Project Management",
    year: "2025",
    image: "/certifications/pm5.png",
    link: "https://coursera.org/share/cafe7b70149eda39e6bd6863a8d3b836",
  },
  {
    category: "Project Management",
    name: "Project Execution: Running the Project",
    year: "2025",
    image: "/certifications/pm4.png",
    link: "https://coursera.org/share/7b22575bfe494cff8019f73f13c1fa4c",
  },
  {
    category: "Project Management",
    name: "Project Planning: Putting It All Together",
    year: "2025",
    image: "/certifications/pm3.png",
    link: "https://coursera.org/share/1db3a21802374277e4ae06411226be5c",
  },
  {
    category: "Project Management",
    name: "Project Initiation: Starting a Successful Project",
    year: "2025",
    image: "/certifications/pm2.png",
    link: "https://coursera.org/share/6a39e049a048cffd68c3128ef5016c6b",
  },
  {
    category: "Project Management",
    name: "Foundations of Project Management",
    year: "2025",
    image: "/certifications/pm1.png",
    link: "https://coursera.org/share/78d0eb35ab5b3f57eb03093994869e0a",
  },
];

export default function Certifications() {
  const tabs = [
    "All",
    "AI",
    "Web Development",
    "Mobile Development",
    "Programming",
    "Cloud & DevOps",
    "Project Management",
  ];
  const [activeTab, setActiveTab] = useState("All");

  const filteredData =
    activeTab === "All"
      ? certificationsData
      : certificationsData.filter((cert) => cert.category === activeTab);

  const sortedData = [...filteredData].sort((a, b) => b.year - a.year);

  return (
    <section
      id="certifications"
      className="mx-auto py-25 px-3 lg:px-15 bg-[#232527]"
    >
      <div className="relative bg-[#232527] py-5 overflow-hidden">
        <div className="absolute inset-0 flex items-center mb-10 justify-end">
          <span
            className="uppercase text-white/10 text-6xl sm:text-7xl lg:text-8xl tracking-widest"
            style={{
              fontFamily: "'Anton', sans-serif",
            }}
          >
            Certifications
          </span>
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 text-right">
          <h2
            className="uppercase text-4xl lg:text-5xl text-[#ffffff]"
            style={{ fontFamily: "'Anton', sans-serif" }}
          >
            Certifications
          </h2>
          <p className="mt-2 text-xs sm:text-base tracking-wide text-[#b4dbdc] flex justify-end items-baseline gap-1">
            <span>– Certifications </span>
            <span
              style={{
                fontFamily: "'Brittany Signature', cursive",
                color: "#ffffff",
              }}
              className="text-base sm:text-xl font-semibold"
            >
              I’ve
            </span>
            <span> Earned</span>
          </p>
        </div>
      </div>

      <div className="flex justify-end gap-4 mb-10 flex-wrap">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 font-medium transition cursor-pointer ${
              activeTab === tab
                ? "bg-[#b4dbdc] text-[#0b0d10] shadow-lg"
                : "bg-white text-[#0b0d10] hover:bg-[#b4dbdc] hover:shadow-lg"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <Swiper
        modules={[Autoplay, Grid]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        slidesPerView={3}
        grid={{ rows: 2, fill: "row" }}
        spaceBetween={35}
        speed={1200}
        className="pb-0 px-6 overflow-visible relative z-10"
        breakpoints={{
          0: {
            slidesPerView: 2,
            grid: { rows: 2, fill: "row" },
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 3,
            grid: { rows: 2, fill: "row" },
            spaceBetween: 35,
          },
        }}
      >
        {sortedData.map((cert, index) => (
          <SwiperSlide key={index} className="!h-auto">
            <div
              className="
                relative
                group
                overflow-hidden
                transition-all
                duration-500
                hover:scale-105
                hover:shadow-[0_10px_20px_-5px_#b4dbdc]
                bg-white"
            >
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full aspect-[4/3] bg-gray-100 flex items-center justify-center overflow-hidden"
              >
                <img
                  src={cert.image}
                  alt={cert.name}
                  className="max-w-full max-h-full object-contain"
                />
              </a>

              <div
                className="
                  absolute inset-0 bg-gradient-to-r from-transparent
                  via-[#b4dbdc80] to-transparent opacity-0
                  group-hover:opacity-100 translate-x-[-100%]
                  group-hover:translate-x-[100%]
                  transition-all duration-[1200ms]
                  ease-in-out pointer-events-none"
              ></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
