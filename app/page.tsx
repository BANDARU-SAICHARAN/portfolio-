"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaBars } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import {
  SiPython,
  SiReact,
  SiMongodb,
  SiTailwindcss,
  SiMysql,
} from "react-icons/si";

const skills = [
  { name: "Python", icon: <SiPython /> },
  { name: "React", icon: <SiReact /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "SQL", icon: <SiMysql /> },
  { name: "RAG", icon: "🧠" },
  { name: "n8n", icon: "⚡" },
  { name: "GenAI", icon: "🤖" },
];

export default function Home() {
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    subject: "",
    message: "",
  });

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          name: formData.from_name,
          email: formData.from_email,
          subject: formData.subject,
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      alert("Message sent successfully!");

      setFormData({
        from_name: "",
        from_email: "",
        subject: "",
        message: "",
      });
    } catch (error: any) {
      alert(error?.text || error?.message || JSON.stringify(error));
    }
  };

  return (
    <main className="overflow-hidden bg-white text-black">

      {/* Navbar */}

      <nav className="fixed left-0 top-0 z-50 w-full border-b border-black/5 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-12">

          <div>
            <span className="text-sm font-semibold">
              Sai Charan
            </span>

            <p className="text-xs text-gray-500">
              If it's difficult, that's the point.
            </p>
          </div>

          <div className="hidden gap-8 lg:flex">

            <a href="#home">HOME</a>
            <a href="#about">ABOUT</a>
            <a href="#skills">SKILLS</a>
            <a href="#projects">PROJECTS</a>

            <a
              href="#contact"
              className="rounded-full border border-black px-5 py-2"
            >
              CONTACT
            </a>

          </div>

          <FaBars className="lg:hidden text-xl" />

        </div>
      </nav>
            {/* Hero */}

      <section
        id="home"
        className="flex min-h-screen items-center justify-center px-5 pt-28 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="uppercase tracking-[5px] text-gray-500">
            AI Developer
          </p>

          <h1 className="mt-5 text-6xl font-black">
            Sai <span className="text-gray-400">Charan</span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            Building intelligent AI systems, full-stack SaaS platforms,
            automation workflows, and modern web experiences.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="#projects"
              className="rounded-full bg-black px-8 py-4 text-white transition hover:scale-105"
            >
              View Projects
            </a>

            <a
             href="/Charan_Resume.pdf"
              target="_blank"
              className="rounded-full border border-black px-8 py-4 transition hover:bg-black hover:text-white"
            >
              Resume
            </a>
          </div>

          <div className="mt-10 flex justify-center gap-6 text-3xl">
            <a
              href="https://github.com/BANDARU-SAICHARAN"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/sai-charan2027/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
          </div>
        </motion.div>
      </section>

          {/* About */}

      <section
        id="about"
        className="px-5 py-20 lg:px-20"
      >
        <h2 className="mb-10 text-center text-5xl font-black">
          About Me
        </h2>

        <div className="mx-auto max-w-5xl rounded-3xl border border-black/10 bg-[#f8f8f8] p-10">

          <p className="text-center text-lg leading-9 text-gray-700">
            I'm Sai Charan, an AI Developer passionate about building
            intelligent software, AI-powered SaaS products, automation
            systems, and modern full-stack applications.

            <br />
            <br />

            My interests include Generative AI, Machine Learning,
            Retrieval-Augmented Generation (RAG), LLM Applications,
            and scalable web development using modern technologies.
          </p>

        </div>

      </section>

      {/* Skills */}

      <section
        id="skills"
        className="px-5 py-20 lg:px-20"
      >
        <h2 className="mb-10 text-center text-5xl font-black">
          Skills
        </h2>

        <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">

          {skills.map((skill, index) => (

            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="rounded-3xl border border-black/10 bg-[#fafafa] p-8 transition-all duration-300 hover:shadow-lg"
            >

              <div className="text-center">

                <div className="mb-4 text-5xl">
                  {skill.icon}
                </div>

                <h3 className="font-semibold text-lg">
                  {skill.name}
                </h3>

              </div>

            </motion.div>

          ))}

        </div>

      </section>
      {/* Projects */}

<section
  id="projects"
  className="px-5 py-20 lg:px-20"
>
  <h2 className="mb-12 text-center text-5xl font-black">
    Projects
  </h2>

 <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">

    {/* AI Sales Intelligence SaaS */}

    <motion.div
      whileHover={{ scale: 1.02 }}
      className="rounded-3xl border border-black/10 bg-[#fafafa] p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
    >
      <img
  src="/projects/SAAS.png"
  alt="AI Sales Intelligence SaaS"
  className="mb-4 h-40 w-full rounded-xl object-cover"
/>

      <h3 className="mb-3 text-2xl font-bold">
        AI Sales Intelligence SaaS
      </h3>

      <p className="mb-6 leading-8 text-gray-600">
        An AI-powered Sales Intelligence platform that automates company research,
        lead scoring, personalized outreach, CRM workflows, and customer management.
        Built using Next.js, TypeScript, Prisma ORM, PostgreSQL, Clerk Authentication,
        Gemini AI, and Tailwind CSS.
      </p>

      <div className="mb-8 flex flex-wrap gap-2">
        {[
          "Next.js",
          "TypeScript",
          "Tailwind CSS",
          "Prisma",
          "PostgreSQL",
          "Gemini AI",
          "Clerk",
        ].map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-black px-3 py-1 text-xs font-medium"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex gap-4">
        <a
          href="https://saas-intelligence-ten.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl bg-black px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
        >
          Live Demo
        </a>

        <a
          href="https://github.com/BANDARU-SAICHARAN/SAAS-INTELLIGENCE"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl border border-black px-5 py-3 text-sm font-semibold transition hover:bg-black hover:text-white"
        >
          GitHub
        </a>
      </div>
    </motion.div>

    {/* AgroSmart */}

    <motion.div
      whileHover={{ scale: 1.02 }}
      className="rounded-3xl border border-black/10 bg-[#fafafa] p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
    >
      <img
        src="/projects/agro.png"
        alt="AgroSmart"
        className="mb-6 h-56 w-full rounded-2xl object-cover"
      />

      <h3 className="mb-3 text-2xl font-bold">
        AgroSmart
      </h3>

      <p className="mb-6 leading-8 text-gray-600">
        AI-powered crop recommendation system that predicts the best crops using
        Machine Learning, helping farmers make smarter agricultural decisions.
      </p>

      <div className="mb-8 flex flex-wrap gap-2">
        {["Python", "Streamlit", "Machine Learning", "Random Forest"].map(
          (tech) => (
            <span
              key={tech}
              className="rounded-full border border-black px-3 py-1 text-xs"
            >
              {tech}
            </span>
          )
        )}
      </div>

      <a
        href="https://github.com/BANDARU-SAICHARAN/AgroSmart"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-xl border border-black px-5 py-3 text-sm font-semibold transition hover:bg-black hover:text-white"
      >
        GitHub
      </a>
    </motion.div>

    {/* AI ApplyOS */}

    <motion.div
      whileHover={{ scale: 1.02 }}
      className="rounded-3xl border border-black/10 bg-[#fafafa] p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
    >
      <img
        src="/projects/ATS.png"
        alt="AI ApplyOS"
        className="mb-6 h-56 w-full rounded-2xl object-cover"
      />

      <h3 className="mb-3 text-2xl font-bold">
        AI ApplyOS
      </h3>

      <p className="mb-6 leading-8 text-gray-600">
        AI-powered job application assistant that provides ATS scoring, resume
        analysis, semantic search, and intelligent automation to improve job
        applications.
      </p>

      <div className="mb-8 flex flex-wrap gap-2">
        {["GenAI", "ATS", "Semantic Search", "Automation"].map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-black px-3 py-1 text-xs"
          >
            {tech}
          </span>
        ))}
      </div>

      <a
        href="https://github.com/BANDARU-SAICHARAN/APPLY-OS-ATS-"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-xl border border-black px-5 py-3 text-sm font-semibold transition hover:bg-black hover:text-white"
      >
        GitHub
      </a>
    </motion.div>

  </div>
</section>
      {/* Contact */}

      <section
        id="contact"
        className="px-5 py-24 lg:px-20"
      >
        <h2 className="mb-14 text-center text-5xl font-black">
          Contact Me
        </h2>

        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[350px_1fr]">

          {/* Left Card */}

          <div className="rounded-3xl bg-[#f8f8f8] p-8">

            <div className="mb-10">
              <p className="mb-2 text-sm font-bold uppercase tracking-wide">
                Location
              </p>

              <p className="text-gray-600">
                Bangalore, Karnataka, India
              </p>
            </div>

            <div className="mb-10">
              <p className="mb-2 text-sm font-bold uppercase tracking-wide">
                Email
              </p>

              <p className="text-gray-600">
                saicharan.b2027@gmail.com
              </p>
            </div>

            <div>
              <p className="mb-4 text-sm font-bold uppercase tracking-wide">
                Social Links
              </p>

              <div className="flex gap-4">

                <a
                  href="https://www.linkedin.com/in/sai-charan2027/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-14 w-14 items-center justify-center rounded-xl border border-black/10 bg-white text-xl transition hover:bg-black hover:text-white"
                >
                  <FaLinkedin />
                </a>

                <a
                  href="https://github.com/BANDARU-SAICHARAN"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-14 w-14 items-center justify-center rounded-xl border border-black/10 bg-white text-xl transition hover:bg-black hover:text-white"
                >
                  <FaGithub />
                </a>

              </div>
            </div>

          </div>

          {/* Contact Form */}

          <form
            onSubmit={sendEmail}
            className="rounded-3xl bg-[#f8f8f8] p-8 md:p-10"
          >

            <div className="grid gap-6 md:grid-cols-2">

              <input
                type="text"
                placeholder="Your Name"
                value={formData.from_name}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    from_name: e.target.value,
                  })
                }
                className="rounded-2xl border border-black/20 bg-transparent px-5 py-4 outline-none transition focus:border-black"
                required
              />

              <input
                type="email"
                placeholder="Your Email"
                value={formData.from_email}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    from_email: e.target.value,
                  })
                }
                className="rounded-2xl border border-black/20 bg-transparent px-5 py-4 outline-none transition focus:border-black"
                required
              />

            </div>

            <input
              type="text"
              placeholder="Subject"
              value={formData.subject}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  subject: e.target.value,
                })
              }
              className="mt-6 w-full rounded-2xl border border-black/20 bg-transparent px-5 py-4 outline-none transition focus:border-black"
              required
            />

            <textarea
              rows={6}
              placeholder="Write your message..."
              value={formData.message}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  message: e.target.value,
                })
              }
              className="mt-6 w-full rounded-2xl border border-black/20 bg-transparent px-5 py-4 outline-none transition focus:border-black"
              required
            />

            <button
              type="submit"
              className="mt-8 rounded-2xl bg-black px-8 py-4 font-semibold text-white transition hover:scale-105"
            >
              Send Message
            </button>

          </form>

        </div>

      </section>

    </main>
  );
}