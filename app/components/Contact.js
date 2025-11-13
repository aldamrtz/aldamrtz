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

  const ThreadsIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className="w-6 h-6"
    >
      <path d="M128 0C57.307 0 0 57.307 0 128s57.307 128 128 128 128-57.307 128-128S198.693 0 128 0zm58.758 144.242c-4.45 26.01-25.696 42.842-56.473 42.842-24.324 0-41.57-9.92-51.156-29.497l17.41-8.837c6.325 12.344 17.696 18.535 33.746 18.535 17.923 0 30.706-9.864 33.902-26.59 2.698-13.982-2.224-23.868-14.944-29.166-7.64-3.222-17.804-4.702-28.515-4.702h-6.908v-17.303h6.908c8.672 0 16.7-1.2 23.078-3.573 9.466-3.483 13.543-10.428 11.892-20.23-2.243-13.373-12.316-20.43-29.584-20.43-14.75 0-25.048 5.365-30.602 15.78l-17.007-8.987c8.648-15.67 24.852-25.086 47.609-25.086 28.627 0 48.486 13.384 52.74 35.998 2.486 13.338-.839 24.885-9.542 33.55 13.495 8.132 18.974 21.033 16.286 37.096z" />
    </svg>
  );

  const InstagramIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
      fill="currentColor"
      className="w-6 h-6"
    >
      <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9S160.5 370.8 224.1 370.8 339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.2 0-74.7-33.5-74.7-74.7S182.9 181.2 224.1 181.2 298.8 214.7 298.8 255.9s-33.5 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.9-26.9 26.9s-26.9-12-26.9-26.9 12-26.9 26.9-26.9 26.9 12 26.9 26.9zm76.1 27.2c-1.7-35.7-9.9-67.3-36.3-93.6s-57.9-34.6-93.6-36.3C293.3 32 154.7 32 102.7 34.7 67 36.4 35.4 44.6 9.1 71S-27.3 128.9-29 164.6C-31.7 216.6-31.7 355.3-29 407.3c1.7 35.7 9.9 67.3 36.3 93.6s57.9 34.6 93.6 36.3c52 2.7 190.6 2.7 242.6 0 35.7-1.7 67.3-9.9 93.6-36.3s34.6-57.9 36.3-93.6c2.7-52 2.7-190.6 0-242.6zM398.8 388c-7.8 19.5-22.9 34.6-42.4 42.4-29.4 11.7-99.2 9-132.4 9s-103 2.6-132.4-9c-19.5-7.8-34.6-22.9-42.4-42.4-11.7-29.4-9-99.2-9-132.4s-2.6-103 9-132.4c7.8-19.5 22.9-34.6 42.4-42.4 29.4-11.7 99.2-9 132.4-9s103-2.6 132.4 9c19.5 7.8 34.6 22.9 42.4 42.4 11.7 29.4 9 99.2 9 132.4s2.7 103-9 132.4z" />
    </svg>
  );

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
          style={{ backgroundColor: "#b4dbdc" }}
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
          style={{ backgroundColor: "#b4dbdc" }}
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
              className="flex items-center gap-4 bg-white border-2 border-[#9dc5c6] rounded-xl p-4 shadow-md transition-all duration-300 hover:scale-105 hover:border-[#0f2e51] hover:shadow-[0_4px_10px_#b4dbdc]/60"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-md bg-[#b4dbdc] text-[#0f2e51]">
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
                className="flex-1 min-w-[200px] flex items-center gap-4 bg-white border-2 border-[#9dc5c6] rounded-xl p-4 shadow-md transition-all duration-300 hover:scale-105 hover:border-[#0f2e51] hover:shadow-[0_4px_10px_#b4dbdc]/60"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-md bg-[#b4dbdc] text-[#0f2e51]">
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
