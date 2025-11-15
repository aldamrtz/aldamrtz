"use client";

import { motion } from "framer-motion";

export default function About() {
  const paragraphs = [
    <>
      Hi! 🙋🏻‍♀️ <span className="text-[#a5c882]">I’m</span>{" "}
      <span className="text-[#a5c882]">Alda Amorita Azza</span>, a fresh
      graduate in Informatics Engineering who’s{" "}
      <span className="text-[#f6b7c1]">endlessly curious</span> about how tech
      shapes everyday life. <span className="text-[#a5c882]">I’ve</span>{" "}
      explored building <span className="text-[#ffffb0]">web apps</span>{" "}
      end-to-end, from designing the{" "}
      <span className="text-[#ffffb0]">interface</span>, crafting the{" "}
      <span className="text-[#ffffb0]">backend logic</span>, managing{" "}
      <span className="text-[#ffffb0]">databases</span>, integrating{" "}
      <span className="text-[#ffffb0]">APIs</span>, to making sure everything
      runs smoothly through <span className="text-[#ffffb0]">testing</span>.
    </>,
    <>
      Along the way, <span className="text-[#a5c882]">I</span> also discovered
      how much <span className="text-[#a5c882]">I</span> enjoy{" "}
      <span className="text-[#b4dbdc]">collaborating with people</span> and
      growing through <span className="text-[#b4dbdc]">teamwork</span> on
      different <span className="text-[#b4dbdc]">projects</span>. It turns out
      that sharing <span className="text-[#c2b5e3]">knowledge</span> can be just
      as worthwhile as learning{" "}
      <span className="text-[#a5c882]">it myself</span>.
    </>,
    <>
      At the moment, <span className="text-[#a5c882]">I’m</span> embracing every
      chance to <span className="text-[#c2b5e3]">learn</span>,{" "}
      <span className="text-[#c2b5e3]">experiment</span>, and{" "}
      <span className="text-[#c2b5e3]">sharpen my skills</span>. With a big{" "}
      <span className="text-[#f6b7c1]">enthusiasm</span> for{" "}
      <span className="text-[#c2b5e3]">continuous learning</span> and{" "}
      <span className="text-[#c2b5e3]">adaptability</span>,{" "}
      <span className="text-[#a5c882]">I</span> aim to grow into a tech
      professional who’s skilled,{" "}
      <span className="text-[#f6b7c1]">creative</span>, and ready to{" "}
      <span className="text-[#c2b5e3]">thrive</span> in this{" "}
      <span className="text-[#f6b7c1]">ever-evolving digital world</span>.
    </>,
  ];

  return (
    <section
      id="about"
      className="max-w-6xl mx-auto py-10 px-6 lg:px-10 flex flex-col gap-6 bg-[#0f2e51]"
    >
      {/* JUDUL */}
      <h2 className="flex items-center justify-center gap-4">
        <span className="flex-1 h-px bg-[#b4dbdc]"></span>

        <span
          className="text-2xl lg:text-3xl font-semibold flex gap-2 items-end"
          style={{ color: "#eb5c74", WebkitTextStroke: "1px #c3224d" }}
        >
          <span>Get to know</span>
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
            Me
          </span>
        </span>

        <span className="flex-1 h-px bg-[#b4dbdc]"></span>
      </h2>

      <div className="flex flex-col-reverse lg:flex-row gap-20 items-center justify-center">
        <div className="flex-[6] text-left mt-[-30] px-4 lg:mt-0 lg:pl-10 lg:pr-6 lg:max-w-[1200px] flex flex-col gap-4">
          {paragraphs.map((text, idx) => (
            <motion.p
              key={idx}
              className="text-white text-sm lg:text-base leading-relaxed tracking-wide"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: false, amount: 0.2 }}
            >
              {text}
            </motion.p>
          ))}
        </div>

        <motion.div
          className="flex-[0.8] flex justify-center lg:justify-center mt-6 lg:mt-0"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <motion.div
            className="bg-white rounded-lg shadow-md border border-gray-300 relative w-64 lg:w-72 pb-10 pt-3 px-3"
            whileHover={{
              rotate: 2,
              scale: 1.05,
            }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <img
              src="/about.png"
              alt="Aldamrtz"
              className="rounded-sm w-full h-[300px] object-cover object-top border border-gray-300"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
