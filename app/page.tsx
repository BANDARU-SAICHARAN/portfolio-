"use client";

import { motion } from "framer-motion";

import {
  FaGithub,
  FaLinkedin,
  FaBars,
} from "react-icons/fa";

import {
  SiPython,
  SiReact,
  SiMongodb,
  SiTailwindcss,
  SiMysql,
} from "react-icons/si";

const skills = [
  {
    name: "Python",
    icon: <SiPython />,
  },

  {
    name: "React",
    icon: <SiReact />,
  },

  {
    name: "MongoDB",
    icon: <SiMongodb />,
  },

  {
    name: "Tailwind",
    icon: <SiTailwindcss />,
  },

  {
    name: "SQL",
    icon: <SiMysql />,
  },

  {
    name: "RAG",
    icon: "🧠",
  },

  {
    name: "n8n",
    icon: "⚡",
  },

  {
    name: "GenAI",
    icon: "🤖",
  },
];

export default function Home() {
  return (
    <main className="overflow-hidden bg-white text-black">

      {/* Navbar */}
      <nav className="fixed left-0 top-0 z-50 w-full border-b border-black/5 bg-white/80 backdrop-blur-xl">

        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-12">

          {/* Left Quote */}
          <div className="flex flex-col leading-tight">

            <span className="text-xs font-black uppercase tracking-[3px] text-black sm:text-sm md:text-base">
              Stay Hungry
            </span>

            <span className="text-[10px] font-medium tracking-wide text-gray-400 sm:text-xs md:text-sm">
              If it’s difficult, that’s the point.
            </span>

          </div>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-8 lg:flex">

            <a
              href="#home"
              className="text-sm font-semibold tracking-wide text-gray-500 transition hover:text-black"
            >
              HOME
            </a>

            <a
              href="#about"
              className="text-sm font-semibold tracking-wide text-gray-500 transition hover:text-black"
            >
              ABOUT
            </a>

            <a
              href="#skills"
              className="text-sm font-semibold tracking-wide text-gray-500 transition hover:text-black"
            >
              SKILLS
            </a>

            <a
              href="#projects"
              className="text-sm font-semibold tracking-wide text-gray-500 transition hover:text-black"
            >
              PROJECTS
            </a>

            <a
              href="#contact"
              className="rounded-full border border-black px-5 py-2 text-sm font-semibold transition hover:bg-black hover:text-white"
            >
              CONTACT
            </a>

          </div>

          {/* Mobile Menu */}
          <div className="lg:hidden">
            <FaBars className="text-xl text-black" />
          </div>

        </div>

      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="flex min-h-screen items-center justify-center px-5 pt-28 text-center sm:px-8 md:px-12"
      >

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="w-full"
        >

          <p className="mb-4 text-[10px] uppercase tracking-[5px] text-gray-500 sm:text-sm">
            AI Developer
          </p>

          <h1 className="text-4xl font-black leading-tight tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">

            Sai <span className="text-gray-400">Charan</span>

          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-sm leading-7 text-gray-600 sm:text-base sm:leading-8 md:text-lg md:leading-9">

            Building intelligent AI systems,
            futuristic web applications,
            and clean digital experiences
            with modern technologies.

          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">

            <a
              href="#projects"
              className="w-full rounded-full bg-black px-8 py-4 text-center text-sm font-semibold text-white transition duration-300 hover:scale-105 sm:w-auto"
            >
              View Projects
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              className="w-full rounded-full border border-black px-8 py-4 text-center text-sm font-semibold transition duration-300 hover:bg-black hover:text-white sm:w-auto"
            >
              Resume
            </a>

          </div>

          {/* Social Icons */}
          <div className="mt-10 flex justify-center gap-6 text-2xl text-gray-500 sm:text-3xl">

            <a
              href="https://github.com/"
              target="_blank"
              className="transition duration-300 hover:scale-110 hover:text-black"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              className="transition duration-300 hover:scale-110 hover:text-black"
            >
              <FaLinkedin />
            </a>

          </div>

        </motion.div>

      </section>

      {/* About Section */}
      <section
        id="about"
        className="px-5 py-20 sm:px-8 md:px-12 lg:px-20"
      >

        <h2 className="mb-10 text-center text-3xl font-black sm:text-4xl md:text-5xl">
          About Me
        </h2>

        <div className="mx-auto max-w-5xl rounded-[30px] border border-black/10 bg-[#f8f8f8] p-6 sm:p-8 md:rounded-[40px] md:p-14">

          <p className="text-center text-sm leading-8 text-gray-700 sm:text-base md:text-lg md:leading-10">

            I’m Sai Charan, a tech enthusiast and Computer Science and Application student
            passionate about building intelligent and interactive systems.

            <br />
            <br />

            With a strong foundation in AI/ML, Generative AI  and automation systems,
            I blend creativity and logic to craft impactful digital solutions
            that connect users and technology.

          </p>

        </div>

      </section>

      {/* Skills */}
      <section
        id="skills"
        className="px-5 py-20 sm:px-8 md:px-12 lg:px-20"
      >

        <h2 className="mb-10 text-center text-3xl font-black sm:text-4xl md:text-5xl">
          Skills
        </h2>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">

          {skills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.04 }}
              className="rounded-3xl border border-black/10 bg-[#fafafa] p-5 transition duration-300 hover:bg-[#f1f1f1] sm:p-6 md:p-8"
            >

              <div className="flex flex-col items-center justify-center">

                <div className="mb-4 text-3xl text-black sm:text-4xl md:text-5xl">
                  {skill.icon}
                </div>

                <p className="text-sm font-semibold sm:text-base md:text-lg">
                  {skill.name}
                </p>

              </div>

            </motion.div>
          ))}

        </div>

      </section>

      {/* Projects */}
      <section
        id="projects"
        className="px-5 py-20 sm:px-8 md:px-12 lg:px-20"
      >

        <h2 className="mb-10 text-center text-3xl font-black sm:text-4xl md:text-5xl">
          Projects
        </h2>

        <div className="grid gap-6 lg:grid-cols-2">

          {/* Project 1 */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="rounded-3xl border border-black/10 bg-[#fafafa] p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
          >

            <img
              src="/projects/agro.png"
              alt="AgroSmart"
              className="mb-6 h-52 w-full rounded-2xl object-cover"
            />

            <h3 className="mb-4 text-2xl font-bold">
              AgroSmart
            </h3>

            <p className="leading-8 text-gray-600">

              AI-powered crop recommendation system using
              Machine Learning, Random Forest,
              Streamlit, and smart dashboards.

            </p>

          </motion.div>

          {/* Project 2 */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="rounded-3xl border border-black/10 bg-[#fafafa] p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
          >

            <img
              src="/projects/ATS.png"
              alt="AI ApplyOS"
              className="mb-6 h-52 w-full rounded-2xl object-cover"
            />

            <h3 className="mb-4 text-2xl font-bold">
              AI ApplyOS
            </h3>

            <p className="leading-8 text-gray-600">

              AI Job Application Agent using
              GenAI, ATS scoring,
              semantic search, and automation workflows.

            </p>

          </motion.div>

        </div>

      </section>

      {/* Contact */}
      <section
        id="contact"
        className="px-5 py-24 sm:px-8 md:px-12 lg:px-20"
      >

        <h2 className="mb-16 text-center text-3xl font-black sm:text-4xl md:text-5xl">
          Contact Me
        </h2>

        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[350px_1fr]">

          {/* Left Side */}
          <div className="rounded-[30px] bg-[#f7f7f7] p-8">

            <div className="mb-10">

              <p className="mb-2 text-sm font-black uppercase tracking-wide">
                Location:
              </p>

              <p className="text-gray-500">
                Bangalore, India
              </p>

            </div>

            <div className="mb-10">

              <p className="mb-2 text-sm font-black uppercase tracking-wide">
                Email Me:
              </p>

              <p className="text-gray-500">
                saicharan@gmail.com
              </p>

            </div>

            <div>

              <p className="mb-4 text-sm font-black uppercase tracking-wide">
                Socials
              </p>

              <div className="flex gap-4">

                <a
                  href="https://linkedin.com/"
                  target="_blank"
                  className="flex h-14 w-14 items-center justify-center border border-black/10 bg-white text-xl transition hover:bg-black hover:text-white"
                >
                  <FaLinkedin />
                </a>

                <a
                  href="https://github.com/"
                  target="_blank"
                  className="flex h-14 w-14 items-center justify-center border border-black/10 bg-white text-xl transition hover:bg-black hover:text-white"
                >
                  <FaGithub />
                </a>

              </div>

            </div>

          </div>

          {/* Right Side */}
          <div className="rounded-[30px] bg-[#f7f7f7] p-8 md:p-10">

            <div className="grid gap-6 md:grid-cols-2">

              <div>

                <label className="mb-3 block text-sm font-black uppercase">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Sai Charan"
                  className="w-full rounded-2xl border border-black/20 bg-transparent px-5 py-4 outline-none transition focus:border-black"
                />

              </div>

              <div>

                <label className="mb-3 block text-sm font-black uppercase">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="yourmail@gmail.com"
                  className="w-full rounded-2xl border border-black/20 bg-transparent px-5 py-4 outline-none transition focus:border-black"
                />

              </div>

            </div>

            <div className="mt-6">

              <label className="mb-3 block text-sm font-black uppercase">
                Subject
              </label>

              <input
                type="text"
                placeholder="Your Subject"
                className="w-full rounded-2xl border border-black/20 bg-transparent px-5 py-4 outline-none transition focus:border-black"
              />

            </div>

            <div className="mt-6">

              <label className="mb-3 block text-sm font-black uppercase">
                Your Message
              </label>

              <textarea
                rows={6}
                placeholder="Write Your Message"
                className="w-full rounded-2xl border border-black/20 bg-transparent px-5 py-4 outline-none transition focus:border-black"
              ></textarea>

            </div>

            <button className="mt-8 rounded-2xl bg-black px-10 py-4 text-sm font-semibold text-white transition hover:scale-105">
              Send Me Message
            </button>

          </div>

        </div>

      </section>

    </main>
  );
}