"use client";

import Image from "next/image";
import Reveal from "./Reveal";

const skills = [
  { name: "HTML", icon: "/images/html5.png", badge: "from-orange-400/25 to-amber-400/10" },
  { name: "CSS", icon: "/images/css.png", badge: "from-sky-400/25 to-blue-500/10" },
  { name: "JavaScript", icon: "/images/javascript.png", badge: "from-yellow-400/25 to-amber-500/10" },
  { name: "React", icon: "/images/react.png", badge: "from-cyan-400/25 to-sky-500/10" },
  // Next.js logo is dark; invert it only (keeps other icons unchanged)
  { name: "Next.js", icon: "/images/nextdotjs.png", badge: "from-purple-400/20 to-pink-400/10", invert: true },
  { name: "Node.js", icon: "/images/nodedotjs.png", badge: "from-emerald-400/25 to-green-500/10" },
  { name: "Express", icon: "/images/express.png", badge: "from-slate-400/20 to-slate-200/5" },
  { name: "MongoDB", icon: "/images/mongodb.png", badge: "from-emerald-400/25 to-cyan-400/10" },
  { name: "Tailwind", icon: "/images/tailwindcss.png", badge: "from-cyan-400/25 to-purple-400/10" },
  { name: "TypeScript", icon: "/images/typescript.png", badge: "from-blue-400/25 to-sky-500/10" },
];

const Skills = () => {
  return (
    <section id="skills" className="py-28 px-6 max-w-6xl mx-auto">
      <Reveal>
        <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-center mb-16 gradient-text-1">
          Skills
        </h2>
      </Reveal>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
        {skills.map((skill, i) => (
          <Reveal
            key={skill.name}
            delay={i * 0.03}
            className="
              group flex flex-col items-center gap-3
              p-6 rounded-2xl card
              transition will-change-transform
              hover:-translate-y-1 hover:bg-white/10
            "
          >
            <div
              className={`rounded-2xl p-3 border border-white/10 bg-gradient-to-br ${skill.badge}`}
            >
              <Image
                src={skill.icon}
                alt={skill.name}
                width={48}
                height={48}
                className={[
                  "transition-transform group-hover:scale-110",
                  skill.invert ? "invert brightness-200 contrast-200" : "",
                ].join(" ")}
              />
            </div>
            <span className="text-sm text-slate-200">
              {skill.name}
            </span>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default Skills;
