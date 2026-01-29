"use client";

import Reveal from "./Reveal";

const experiences = [
  {
    role: "Full Stak Developer",
    company: "Synnefo Solutions",
    duration: "2025 – Present",
    description:
      "Built full-stack web application using MongoDB, Express.js, React.js and Node.js .Developed RESTful APIs and integrated frontend with backend. Implemented responsive UI components using React and TailwindCSS. Managed database operations and performed CRUD functionalities. ",
  },
  {
    role: "Web Development",
    company: "Wogle Tech,Bangalore",
    duration: "2024-2025",
    description:
      "Built interactive web-based applications using HTML, CSS and JavaScript. Implemented responsive design to ensure usability on multiple devices. Practiced frontend development and debugging. "
  },
];

export default function Experience() {
  return (
    <section className="py-24" id="experience">
      <div className="max-w-5xl mx-auto px-6">
        <Reveal>
          <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-black dark:text-white mb-16 text-center">
            Experience
          </h2>
        </Reveal>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <Reveal
              key={index}
              delay={index * 0.08}
              className="relative pl-8 border-l border-black/15 dark:border-white/15"
            >
              <span className="absolute -left-[7px] top-1.5 w-3.5 h-3.5 rounded-full bg-gradient-to-r from-cyan-300 to-purple-400 shadow-[0_0_0_4px_rgba(0,0,0,0.06)] dark:shadow-[0_0_0_4px_rgba(255,255,255,0.06)]" />

              <h3 className="text-xl font-semibold text-black dark:text-white">
                {exp.role}
              </h3>
              <p className="text-sm text-black/70 dark:text-slate-300/70">
                {exp.company} • {exp.duration}
              </p>
              <p className="mt-3 text-black/90 dark:text-slate-200/90">
                {exp.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
