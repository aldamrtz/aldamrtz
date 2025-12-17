"use client";

import { Mail, Linkedin, Github, Instagram } from "lucide-react";
import { SiThreads } from "react-icons/si";

const navItems = [
  "About",
  "Education",
  "Skills",
  "Experience",
  "Projects",
  "Certifications",
  "Contact",
];

const socialLinks = [
  {
    name: "Email",
    username: "aldaamorita@gmail.com",
    icon: Mail,
    link: "mailto:aldaamorita@gmail.com",
  },
  {
    name: "LinkedIn",
    username: "https://www.linkedin.com/in/alda-amorita-azza/",
    icon: Linkedin,
    link: "https://www.linkedin.com/in/alda-amorita-azza/",
  },
  {
    name: "GitHub",
    username: "https://github.com/aldamrtz",
    icon: Github,
    link: "https://github.com/aldamrtz",
  },
];

const bottomLinks = [
  {
    name: "Instagram",
    username: "https://www.instagram.com/aldamrtz_/",
    icon: Instagram,
    link: "https://www.instagram.com/aldamrtz_/",
  },
  {
    name: "Threads",
    username: "https://www.threads.com/aldamrtz_",
    icon: SiThreads,
    link: "https://www.threads.com/aldamrtz_",
  },
];

export default function Footer() {
  return (
    <footer className="relative bg-white py-9 mt-20 px-8">
      <div className="absolute bottom-212 lg:bottom-73 left-0 w-full overflow-hidden leading-[0] rotate-180 z-10">
        <svg
          className="relative block w-350 h-24"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
        >
          <path
            d="M0,0V50c50,20,110,30,165,15,55-12,100-35,150-45,75-15,150,25,225,40,75,15,150,25,225,5,55-12,105-30,160-35,70-8,140,10,210,25V0Z"
            fill="#b4dbdc"
          ></path>
        </svg>
      </div>

      <div className="absolute bottom-210 lg:bottom-70 left-0 w-full overflow-hidden leading-[0] rotate-180 z-20">
        <svg
          className="relative block w-350 h-20"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
        >
          <path
            d="M0,0V60c48,25,105,35,160,20,50-12,92-40,140-50,75-12,150,30,225,50,75,20,150,30,225,10,50-12,98-35,150-40,70-7,140,10,210,30V0Z"
            fill="#ffffff"
          ></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-30 relative z-10">
        <div className="flex justify-center items-center">
          <div className="text-left space-y-[2px]">
            <p
              className="text-md mb-[-3] font-semibold leading-tight text-center lg:text-left"
              style={{ color: "#0f2e51" }}
            >
              You’ve reached the bottom!
            </p>

            <h2
              className="text-6xl mb-[-3] font-bold text-gray-900 leading-tight text-center lg:text-left"
              style={{ color: "#c2b5e3", WebkitTextStroke: "2px #7f6e9e" }}
            >
              Thanks
            </h2>

            <p
              className="text-md font-semibold leading-tight text-center lg:text-left"
              style={{ color: "#0f2e51" }}
            >
              for scrolling this far! Who knows,
            </p>

            <div className="text-md leading-tight mt-[3px] relative">
              <div className="flex items-end font-semibold justify-center lg:justify-start flex-wrap">
                <p
                  className="relative top-[0.10rem] lg:top-[-0.8rem]"
                  style={{ color: "#0f2e51" }}
                >
                  this could be the start of
                </p>

                <span
                  className="text-4xl lg:top-[-0.25rem] top-[-0.35rem] font-bold text-[#eb5c74] relative flex items-center"
                  style={{
                    top: "0.25rem",
                    marginLeft: "0.5rem",
                    WebkitTextStroke: "2px #c3224d",
                    letterSpacing: "1px",
                  }}
                >
                  S
                  <span className="relative inline-block overflow-visible px-[1px]">
                    O
                    <svg
                      className="absolute left-1/2 w-[130%] h-[130%] -translate-x-1/2 transition-transform duration-700 ease-in-out hover:rotate-[180deg]"
                      style={{ top: "-5px" }}
                      viewBox="0 0 100 100"
                      preserveAspectRatio="xMidYMid meet"
                    >
                      <image href="/star.png" width="100" height="100" />
                    </svg>
                  </span>
                  METHING
                </span>
              </div>

              <p
                className="relative text-4xl left-4 lg:left-51 font-bold text-[#eb5c74] mt-1 text-center lg:text-left"
                style={{
                  WebkitTextStroke: "2px #c3224d",
                }}
              >
                EXCITING!{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center lg:flex-row lg:items-start lg:justify-end gap-16 mt-6 lg:mt-0 px-6 lg:px-0">
          <div className="lg:mr-35 mt-[-70] lg:mt-0">
            <h3 className="text-lg font-semibold mb-2 text-[#eb5c74]">
              Quick Links
            </h3>
            <ul className="space-y-1">
              {navItems.map((item, idx) => (
                <li key={idx}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-md font-medium text-[#0f2e51] hover:text-[#7f6e9e] transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:mr-20 flex flex-col space-y-2">
            <h3 className="text-lg font-semibold mb-2 text-[#eb5c74]">
              Get in Touch
            </h3>

            {socialLinks.map((item, idx) => {
              const Icon = item.icon;
              return (
                <p
                  key={idx}
                  className="flex items-center font-medium text-md text-[#0f2e51]"
                >
                  <Icon className="w-5 h-5 mr-2 text-[#7f6e9e]" />
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#7f6e9e]"
                  >
                    {item.name}
                  </a>
                </p>
              );
            })}

            {bottomLinks.map((item, idx) => {
              const Icon = item.icon;
              return (
                <p
                  key={idx}
                  className="flex items-center font-medium text-md text-[#0f2e51]"
                >
                  <Icon className="w-5 h-5 mr-2 text-[#7f6e9e]" />
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#7f6e9e]"
                  >
                    {item.name}
                  </a>
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
