"use client";

import Reveal from "./Reveal";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Double Barrel",
    description:
      "Collaboratively developed a product application as part of a team project.Contributed to requirement analysis, application workflow, and functionality development.Coordinated with team members to ensure smooth integration and timely completion of the project.",
    tech: ["React","Express","MongoDB","Node.js","TypeScript","Tailwind"],
    status: "Team project",
  },
  {
     title: "Agency.ai",
    description:
      "Developed a responsive Website using React and Tailwind CSS, focusing on reusable components, state management, and modern UI design. Optimized performance by using efficient React patterns, component memoization, and minimized re-renders. Integrated modern design principles, including dark/light mode support, consistent color schemes.",
    tech: ["React","Tailwind"],
   
    status: "Frontend",
  },
  {
    title: "College Management System",
    description:
      "Developed a full-stack College Management System using the MERN stack. Implemented secure authentication, role-based access for admins, faculty, andstudents, and features such as course management, student registration, and timetable handling. Built responsive React interfaces and RESTful APIs with Node.js and Express, with MongoDB used for efficientdata storage and retrieval.",
    tech: ["Node.js","Express","MongoDB","JavaScript","Tailwind","HTML"],
    status: "Full-stack",
  },
  {
    title: "Contact Management  Application",
    description:
      "I developed a Contact Management Application using React JS that allows users to add, view, update, and delete contact details, implemented state management using React Hooks, and integrated local storage to ensure data persistence while maintaining a responsive and user-friendly interface",
    tech: ["Node.js","Express.js","MongoDB","JavaScript","HTML","Css"],
    status: "CRUD app",
  },
   {
    title: "Weather Application",
    description:
      "Built a Weather Forecast Application using HTML, CSS, and JavaScript, integrating the OpenWeatherMap API to display real-time weather updates with a responsive and user-friendly interface.",
    tech: ["JavaScript","HTML","Css"],
    status: "API integration",
  },
];

function techChipClass(t: string) {
  const key = t.toLowerCase();
  if (key.includes("react")) return "border-cyan-300/20 bg-cyan-300/10 dark:bg-cyan-300/10 text-cyan-900 dark:text-cyan-100";
  if (key.includes("next")) return "border-slate-200/15 bg-slate-200/5 dark:bg-slate-200/5 text-slate-900 dark:text-slate-100";
  if (key.includes("typescript")) return "border-blue-300/20 bg-blue-300/10 dark:bg-blue-300/10 text-blue-900 dark:text-blue-100";
  if (key.includes("javascript")) return "border-amber-300/20 bg-amber-300/10 dark:bg-amber-300/10 text-amber-900 dark:text-amber-50";
  if (key.includes("tailwind")) return "border-cyan-300/20 bg-cyan-300/10 dark:bg-cyan-300/10 text-cyan-900 dark:text-cyan-100";
  if (key.includes("mongo")) return "border-emerald-300/20 bg-emerald-300/10 dark:bg-emerald-300/10 text-emerald-900 dark:text-emerald-50";
  if (key.includes("express")) return "border-violet-300/20 bg-violet-300/10 dark:bg-violet-300/10 text-violet-900 dark:text-violet-50";
  if (key.includes("node")) return "border-emerald-300/20 bg-emerald-300/10 dark:bg-emerald-300/10 text-emerald-900 dark:text-emerald-50";
  if (key.includes("html")) return "border-orange-300/20 bg-orange-300/10 dark:bg-orange-300/10 text-orange-900 dark:text-orange-50";
  if (key.includes("css")) return "border-sky-300/20 bg-sky-300/10 dark:bg-sky-300/10 text-sky-900 dark:text-sky-50";
  return "border-white/10 bg-white/5 dark:bg-white/5 text-black dark:text-slate-100";
}

function accentByIndex(index: number) {
  const accents = [
    "from-cyan-400/25 via-purple-500/15 to-pink-500/15",
    "from-emerald-400/20 via-cyan-500/15 to-purple-500/15",
    "from-amber-400/20 via-pink-500/15 to-purple-500/15",
  ] as const;
  return accents[index % accents.length];
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 px-6 max-w-6xl mx-auto"
    >
      <Reveal>
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-black/70 dark:text-slate-200/70">
            Selected work
          </p>
          <h2 className="mt-3 text-4xl sm:text-5xl font-semibold tracking-tight gradient-text-3">
            Projects
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-black/75 dark:text-slate-200/75">
            A mix of full‑stack builds, UI projects, and APIs — focused on clean UX,
            scalable code, and performance.
          </p>
        </div>
      </Reveal>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (

         <Reveal
          key={index}
          delay={index * 0.06}
          className="group card p-3 md:p-2 transition-all duration-300 will-change-transform hover:-translate-y-1 hover:bg-white/8 hover:shadow-[0_0_55px_rgba(34,211,238,0.10)] h-full flex flex-col"
        >
  <div className={`-m-3 mb-3 rounded-[1rem] p-3 bg-gradient-to-br ${accentByIndex(index)}`}>
    <div className="flex items-start justify-between gap-2">
      <div>
        <p className="text-xs text-black/75 dark:text-white/75">{project.status}</p>
        <h3 className="mt-1 text-lg font-semibold text-black dark:text-white">
          {project.title}
        </h3>
      </div>
      <span className="text-xs font-mono text-black/60 dark:text-white/60">0{index + 1}</span>
    </div>
  </div>

  <p className="text-black/80 dark:text-slate-200/80 mb-2 leading-snug text-sm flex-grow">
    {project.description}
  </p>

  <div className="flex flex-wrap gap-1 mt-auto">
    {project.tech.map((t) => (
      <span
        key={t}
        className={`text-xs px-2 py-0.5 rounded-full border ${techChipClass(t)}`}
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
