"use client";

import Reveal from "./Reveal";
import Image from "next/image";

const projects = [
  {
    title: "Double Barrel",
    image: "/projects/Screenshot 2026-01-29 144026.png",
    description:
      "Collaboratively developed a product application as part of a team project. Contributed to requirement analysis, application workflow, and functionality development.",
    tech: ["React", "Express", "MongoDB", "Node.js", "TypeScript", "Tailwind"],
    status: "Team project",
  },
  {
    title: "Agency.ai",
    image: "/projects/Screenshot 2026-01-29 144435.png",
    description:
      "Developed a responsive Website using React and Tailwind CSS with reusable components and modern UI design.",
    tech: ["React", "Tailwind"],
    status: "Frontend",
  },
  {
    title: "College Management System",
    image: "/projects/Screenshot 2026-01-29 150419.png",
    description:
      "Developed a full-stack College Management System using the MERN stack with secure authentication and scalable APIs.",
    tech: ["Node.js", "Express", "MongoDB", "JavaScript", "Tailwind"],
    status: "Full-stack",
  },
  {
    title: "Contact Management Application",
    image: "/projects/Screenshot 2025-12-18 105913.png",
    description:
      "Contact management application with CRUD operations and persistent storage.",
    tech: ["React", "JavaScript", "HTML", "CSS"],
    status: "CRUD app",
  },
  {
    title: "Weather Application",
    image: "/projects/weather.jpeg",
    description:
      "Weather forecast app using OpenWeather API with real-time data.",
    tech: ["JavaScript", "HTML", "CSS"],
    status: "API integration",
  },
];

function techChipClass(t: string) { 
  const key = t.toLowerCase();
   if (key.includes("react"))
     return "border-cyan-300/20 bg-cyan-300/10 dark:bg-cyan-300/10 text-cyan-900 dark:text-cyan-100";
     if (key.includes("next")) return "border-slate-200/15 bg-slate-200/5 dark:bg-slate-200/5 text-slate-900 dark:text-slate-100"; 
     if (key.includes("typescript")) return "border-blue-300/20 bg-blue-300/10 dark:bg-blue-300/10 text-blue-900 dark:text-blue-100";
     if (key.includes("javascript")) return "border-amber-300/20 bg-amber-300/10 dark:bg-amber-300/10 text-amber-900 dark:text-amber-50";
     if (key.includes("tailwind")) return "border-cyan-300/20 bg-cyan-300/10 dark:bg-cyan-300/10 text-cyan-900 dark:text-cyan-100";
     if (key.includes("mongo")) return "border-emerald-300/20 bg-emerald-300/10 dark:bg-emerald-300/10 text-emerald-900 dark:text-emerald-50";
     if (key.includes("express")) return "border-violet-300/20 bg-violet-300/10 dark:bg-violet-300/10 text-violet-900 dark:text-violet-50";
     if (key.includes("node")) return "border-emerald-300/20 bg-emerald-300/10 dark:bg-emerald-300/10 text-emerald-900 dark:text-emerald-50"; 
     if (key.includes("html")) return "border-orange-300/20 bg-orange-300/10 dark:bg-orange-300/10 text-orange-900 dark:text-orange-50"; 
     if (key.includes("css")) return "border-sky-300/20 bg-sky-300/10 dark:bg-sky-300/10 text-sky-900 dark:text-sky-50";
     return "border-white/10 bg-white/5 dark:bg-white/5 text-black dark:text-slate-100"; }

function accentByIndex(index: number) {
  const accents = [
    "from-cyan-400/25 via-purple-500/15 to-pink-500/15 dark:from-cyan-400/25 via-purple-500/15 to-pink-500/15",
    "from-emerald-400/20 via-cyan-500/15 to-purple-500/15 dark:from-emerald-400/20 via-cyan-500/15 to-purple-500/15",
    "from-amber-400/20 via-pink-500/15 to-purple-500/15 dark:from-amber-400/20 via-pink-500/15 to-purple-500/15",
  ] as const;
  return accents[index % accents.length];
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
      <Reveal>
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-black/70 dark:text-slate-200/70">
            Selected work
          </p>
          <h2 className="mt-3 text-4xl sm:text-5xl font-semibold tracking-tight gradient-text-3">
            Projects
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-black/75 dark:text-slate-200/75">
            A mix of full-stack builds, UI projects, and APIs — focused on clean UX, scalable code, and performance.
          </p>
        </div>
      </Reveal>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <Reveal
            key={index}
            delay={index * 0.06}
            className="group card p-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_55px_rgba(34,211,238,0.10)] flex flex-col"
          >
            

           
            <div
              className={`-m-3 mb-3 rounded-[1rem] p-3 bg-gradient-to-br ${accentByIndex(
                index
              )}`}
            >
              <div className="flex items-start justify-between gap-2">
                <div>
                  <p className="text-xs text-black/75 dark:text-white/75">{project.status}</p>
                  <h3 className="mt-1 text-lg font-semibold text-black dark:text-white">
                    {project.title}
                  </h3>
                </div>
                <span className="text-xs font-mono text-black/60 dark:text-white/60">
                  0{index + 1}
                </span>
              </div>
            </div>


             <div className="relative -m-3 mb-3 overflow-hidden ">
              <Image
                src={project.image}
                alt={project.title}
                width={800}
                height={450}
                className="p-4 h-50 w-[110%] object-center transition-transform duration-500 group-hover:scale-105"
                priority={index < 2}
              />
            </div>

            {/* DESCRIPTION */}
            <p className="text-black/80 dark:text-slate-200/80 mb-2 text-sm leading-snug flex-grow ">
              {project.description}
            </p>

            {/* TECH STACK */}
            <div className="flex flex-wrap gap-1 mt-auto">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className={`text-xs px-2 py-0.5 rounded-full border ${techChipClass(
                    t
                  )}`}
                >
                  {t}
                </span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
