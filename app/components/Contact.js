"use client";

import { useState } from "react";
import { Mail, Linkedin, Github, Instagram } from "lucide-react";
import { SiThreads } from "react-icons/si";

const primarySocialLinks = [
  {
    name: "Email",
    username: "aldaamorita@gmail.com",
    icon: Mail,
    link: "mailto:aldaamorita@gmail.com",
  },
  {
    name: "LinkedIn",
    username: "https://www.linkedin.com/in/aldamrtz",
    icon: Linkedin,
    link: "https://www.linkedin.com/in/aldamrtz",
  },
  {
    name: "GitHub",
    username: "https://github.com/aldamrtz",
    icon: Github,
    link: "https://github.com/aldamrtz",
  },
];

const secondarySocialLinks = [
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

const formatContactLabel = (username) => {
  if (!username.startsWith("http")) return username;

  return username
    .replace(/^https?:\/\//, "")
    .replace(/^www\./, "")
    .replace(/\/$/, "");
};

export default function Contact() {
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const data = new FormData(e.target);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          subject: data.get("subject"),
          message: data.get("message"),
        }),
        headers: { "Content-Type": "application/json" },
      });

      if (res.ok) {
        setStatus("Message sent successfully!");
        e.target.reset();
      } else {
        setStatus("Failed to send message.");
      }
      setShow(true);

      setTimeout(() => setShow(false), 3000);
    } catch {
      setStatus("Failed to send message.");
      setShow(true);
      setTimeout(() => setShow(false), 3000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="max-w-6xl mx-auto px-4 py-25">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        <div className="flex flex-col gap-6">
          <div className="relative -mt-5">
            <div className="absolute inset-0 flex items-center justify-start pl-4 mb-7">
              <span
                className="uppercase text-white/10 text-6xl sm:text-6xl lg:text-7xl tracking-widest pointer-events-none"
                style={{
                  fontFamily: "'Anton', sans-serif",
                }}
              >
                Get in Touch
              </span>
            </div>

            <div className="relative z-10 text-left pl-4">
              <h2
                className="uppercase text-5xl text-[#ffffff] mt-7"
                style={{ fontFamily: "'Anton', sans-serif" }}
              >
                Get in Touch
              </h2>
              <p className="text-sm text-[#ffffff] mt-2">
                – Feel free to reach out via social media or send me a message
                here!
              </p>
            </div>
          </div>

          {primarySocialLinks.map(({ name, username, icon: Icon }) => (
            <div key={name} className="flex items-center gap-4">
              <div className="ml-3 w-12 h-12 flex bg-[#b4dbdc] items-center justify-center rounded-full text-[#0b0d10]">
                <Icon />
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-lg text-[#ffffff]">
                  {name}
                </span>
                <span className="text-sm" style={{ color: "#b4dbdc" }}>
                  {formatContactLabel(username)}
                </span>
              </div>
            </div>
          ))}
        </div>

        {status && (
          <div className="fixed top-30 right-4 z-50">
            <div
              className={`bg-[#b4dbdc] text-[#0b0d10] font-semibold px-5 py-3 rounded-lg shadow-lg ${
                show ? "animate-slide-in" : "animate-slide-out"
              }`}
              role="alert"
            >
              {status}
            </div>
          </div>
        )}

        <div className=" rounded-xl p-4 min-h-[408px] flex flex-col justify-between">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-6">
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  placeholder=" "
                  className="text-white peer w-full border border-[#0b0d10] rounded-lg p-4 
    bg-white/10 focus:outline-none focus:border focus:border-[#0b0d10] 
    hover:border-[#0b0d10] transition-colors"
                  required
                />
                <label
                  className="absolute left-3 top-4 text-[#b4dbdc] text-sm px-1 
                    transition-all duration-300 pointer-events-none
                    peer-placeholder-shown:top-4.5 peer-placeholder-shown:text-[#b4dbdc]
                    peer-focus:left-0 peer-valid:left-0 peer-focus:-top-6.5 peer-focus:text-[#b4dbdc] peer-focus:text-sm
                    peer-valid:-top-6.5 peer-valid:text-[#b4dbdc] peer-valid:text-sm"
                >
                  Your Name
                </label>
              </div>

              <div className="relative">
                <input
                  type="email"
                  name="email"
                  placeholder=" "
                  className="text-white peer w-full border border-[#0b0d10] rounded-lg p-4 
    bg-white/10 focus:outline-none focus:border focus:border-[#0b0d10] 
    hover:border-[#0b0d10] transition-colors"
                  required
                />
                <label
                  className="absolute left-3 top-4 text-[#b4dbdc] text-sm px-1 
                    transition-all duration-300 pointer-events-none
                    peer-placeholder-shown:top-4.5 peer-placeholder-shown:text-[#b4dbdc]
                    peer-focus:left-0 peer-valid:left-0 peer-focus:-top-6.5 peer-focus:text-[#b4dbdc] peer-focus:text-sm
                    peer-valid:-top-6.5 peer-valid:text-[#b4dbdc] peer-valid:text-sm"
                >
                  Your Email
                </label>
              </div>
            </div>

            <div className="relative">
              <input
                type="text"
                name="subject"
                placeholder=" "
                className="text-white peer w-full border border-[#0b0d10] rounded-lg p-4 
    bg-white/10 focus:outline-none focus:border focus:border-[#0b0d10] 
    hover:border-[#0b0d10] transition-colors"
                required
              />
              <label
                className="absolute left-3 top-4 text-[#b4dbdc] text-sm px-1 
                  transition-all duration-300 pointer-events-none
                  peer-placeholder-shown:top-4.5 peer-placeholder-shown:text-[#b4dbdc]
                  peer-focus:left-0 peer-valid:left-0 peer-focus:-top-6.5 peer-focus:text-[#b4dbdc] peer-focus:text-sm
                  peer-valid:-top-6.5 peer-valid:text-[#b4dbdc] peer-valid:text-sm"
              >
                Subject
              </label>
            </div>

            <div className="relative">
              <textarea
                name="message"
                rows="4"
                placeholder=" "
                className="text-white peer w-full border border-[#0b0d10] rounded-lg p-4 
    bg-white/10 focus:outline-none focus:border focus:border-[#0b0d10] 
    hover:border-[#0b0d10] transition-colors"
                required
              ></textarea>
              <label
                className="absolute left-3 top-4 text-[#b4dbdc] text-sm px-1 
                  transition-all duration-300 pointer-events-none
                  peer-placeholder-shown:top-4.5 peer-placeholder-shown:text-[#b4dbdc]
                  peer-focus:left-0 peer-valid:left-0 peer-focus:-top-6.5 peer-focus:text-[#b4dbdc] peer-focus:text-sm
                  peer-valid:-top-6.5 peer-valid:text-[#b4dbdc] peer-valid:text-sm"
              >
                Your Message
              </label>
            </div>

            <button
              type="submit"
              className={`bg-[#b4dbdc] text-[#0b0d10] font-sebold py-4 px-5 rounded-full transition-colors w-full flex justify-center cursor-pointer items-center -mt-2 ${
                loading ? "cursor-not-allowed opacity-70" : "hover:bg-[#ffffff]"
              }`}
              disabled={loading}
            >
              {loading ? (
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                  ></path>
                </svg>
              ) : (
                "Send"
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
