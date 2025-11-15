"use client";

import { useState } from "react";
import { Mail, Linkedin, Github, Instagram } from "lucide-react";
import { SiThreads } from "react-icons/si";

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
    } catch (err) {
      setStatus("Failed to send message.");
      setShow(true);
      setTimeout(() => setShow(false), 3000);
    } finally {
      setLoading(false);
    }
  };

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

  return (
    <section id="contact" className="max-w-6xl mx-auto py-20 px-4">
      <h2 className="flex items-center mb-12 justify-center gap-4">
        <span
          className="flex-1 h-px"
          style={{ backgroundColor: "#9dc5c6" }}
        ></span>
        <span
          className="text-2xl lg:text-3xl font-semibold flex gap-2 items-end"
          style={{ color: "#eb5c74", WebkitTextStroke: "1px #c3224d" }}
        >
          <span>Get in</span>
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
            Touch
          </span>
        </span>
        <span
          className="flex-1 h-px"
          style={{ backgroundColor: "#9dc5c6" }}
        ></span>
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        <div className="flex flex-col gap-6">
          {socialLinks.map(({ name, username, icon: Icon, link }) => (
            <a
              key={name}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-white border-2 border-[#9dc5c6] rounded-xl p-4 shadow-md transition-all duration-300 hover:scale-105 hover:border-[#0f2e51] hover:shadow-[0_4px_10px_#9dc5c6]/60"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-md bg-[#9dc5c6] text-[#0f2e51]">
                <Icon />
              </div>

              <div className="flex flex-col">
                <span className="font-semibold text-lg text-[#0f2e51]">
                  {name}
                </span>
                <span className="text-sm" style={{ color: "#9dc5c6" }}>
                  {name === "Email"
                    ? username
                    : username.split("/").filter(Boolean).pop()}
                </span>
              </div>
            </a>
          ))}

          <div className="flex flex-wrap gap-6">
            {bottomLinks.map(({ name, username, icon: Icon, link }) => (
              <a
                key={name}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 min-w-[200px] flex items-center gap-4 bg-white border-2 border-[#9dc5c6] rounded-xl p-4 shadow-md transition-all duration-300 hover:scale-105 hover:border-[#0f2e51] hover:shadow-[0_4px_10px_#9dc5c6]/60"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-md bg-[#9dc5c6] text-[#0f2e51]">
                  <Icon size={36} className="w-7 h-7" />
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold text-lg text-[#0f2e51]">
                    {name}
                  </span>
                  <span className="text-sm" style={{ color: "#9dc5c6" }}>
                    {username.split("/").filter(Boolean).pop()}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>

        {status && (
          <div className="fixed top-30 right-4 z-50">
            <div
              className={`bg-[#a5c882] text-white px-5 py-3 rounded-lg shadow-lg ${
                show ? "animate-slide-in" : "animate-slide-out"
              }`}
              role="alert"
            >
              {status}
            </div>
          </div>
        )}

        <div className="bg-white border-2 border-[#9dc5c6] rounded-xl p-6 shadow-md min-h-[408px] flex flex-col justify-between">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  placeholder=" "
                  className="peer w-full border border-[#9dc5c6] rounded-lg p-3 
                    focus:outline-none focus:border focus:border-[#0f2e51] 
                    hover:border-[#9dc5c6] transition-colors"
                  required
                />
                <label
                  className="absolute left-3 top-4 text-[#9dc5c6] text-sm bg-white px-1 
                    transition-all duration-300 pointer-events-none
                    peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-[#9dc5c6]
                    peer-focus:-top-2.5 peer-focus:text-[#0f2e51] peer-focus:text-sm
                    peer-valid:-top-2.5 peer-valid:text-[#9dc5c6] peer-valid:text-sm"
                >
                  Your Name
                </label>
              </div>

              <div className="relative">
                <input
                  type="email"
                  name="email"
                  placeholder=" "
                  className="peer w-full border border-[#9dc5c6] rounded-lg p-3 
                    focus:outline-none focus:border focus:border-[#0f2e51] 
                    hover:border-[#9dc5c6] transition-colors"
                  required
                />
                <label
                  className="absolute left-3 top-4 text-[#9dc5c6] text-sm bg-white px-1
                    transition-all duration-300 pointer-events-none
                    peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-[#9dc5c6]
                    peer-[&:not(:placeholder-shown)]:-top-2.5 peer-[&:not(:placeholder-shown)]:text-[#9dc5c6] peer-[&:not(:placeholder-shown)]:text-sm
                    peer-focus:-top-2.5 peer-focus:text-[#0f2e51] peer-focus:text-sm
                    peer-focus:peer-[&:not(:placeholder-shown)]:text-[#0f2e51]"
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
                className="peer w-full border border-[#9dc5c6] rounded-lg p-3 
                  focus:outline-none focus:border focus:border-[#0f2e51] 
                  hover:border-[#9dc5c6] transition-colors"
                required
              />
              <label
                className="absolute left-3 top-4 text-[#9dc5c6] text-sm bg-white px-1 
                  transition-all duration-300 pointer-events-none
                  peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-[#9dc5c6]
                  peer-focus:-top-2.5 peer-focus:text-[#0f2e51] peer-focus:text-sm
                  peer-valid:-top-2.5 peer-valid:text-[#9dc5c6] peer-valid:text-sm"
              >
                Subject
              </label>
            </div>

            <div className="relative">
              <textarea
                name="message"
                rows="4"
                placeholder=" "
                className="peer w-full border border-[#9dc5c6] rounded-lg p-5 
                  focus:outline-none focus:border focus:border-[#0f2e51] 
                  hover:border-[#9dc5c6] transition-colors"
                required
              ></textarea>
              <label
                className="absolute left-3 top-4 text-[#9dc5c6] text-sm bg-white px-1 
                  transition-all duration-300 pointer-events-none
                  peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-[#9dc5c6]
                  peer-focus:-top-2.5 peer-focus:text-[#0f2e51] peer-focus:text-sm
                  peer-valid:-top-2.5 peer-valid:text-[#9dc5c6] peer-valid:text-sm"
              >
                Your Message
              </label>
            </div>

            <button
              type="submit"
              className={`bg-[#9dc5c6] text-white font-bold py-2 px-5 rounded-lg transition-colors w-full flex justify-center items-center gap-2 ${
                loading ? "cursor-not-allowed opacity-70" : "hover:bg-[#0f2e51]"
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
