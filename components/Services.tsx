"use client";

import Reveal from "./Reveal";
import {
  Code2,
  Layout,
  Server,
  ShieldCheck,
  Layers,
  Rocket,
} from "lucide-react";

const services = [
  {
    title: "Full Stack Developer",
    description:
      "End-to-end application development including frontend, backend, database and deployment.",
    icon: Layers,
    accent: "from-emerald-300 to-cyan-300",
  },
  {
    title: "Frontend Development",
    description:
      "Crafting clean and interactive UI using React, Next.js, Tailwind CSS, and animations.",
    icon: Layout,
    accent: "from-cyan-300 to-purple-400",
  },
  {
    title: "Backend & APIs",
    description:
      "Developing secure and scalable REST APIs using Node.js, Express, and MongoDB.",
    icon: Server,
    accent: "from-purple-400 to-pink-400",
  },
  {
    title: "Authentication & Security",
    description:
      "Implementing JWT, role-based access, and secure authentication systems.",
    icon: ShieldCheck,
    accent: "from-amber-300 to-pink-400",
  },
  {
    title: "Web Development",
    description:
      "Building fast, responsive, and scalable web applications using modern technologies.",
    icon: Code2,
    accent: "from-cyan-300 to-amber-300",
  },
  {
    title: "Deployment & Optimization",
    description:
      "Deploying applications with performance optimization and best practices.",
    icon: Rocket,
    accent: "from-emerald-300 to-purple-400",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-24 px-6 max-w-6xl mx-auto"
    >
      <Reveal>
        <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-center mb-16 gradient-text-2">
          Services
        </h2>
      </Reveal>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <Reveal
            key={index}
            delay={index * 0.06}
            className="group card p-6 transition will-change-transform hover:-translate-y-1 hover:bg-white/8"
          >
            <div
              className={`mb-4 inline-flex rounded-2xl p-3 bg-gradient-to-br ${service.accent} bg-opacity-20`}
            >
              <service.icon className="w-7 h-7 text-black" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">
              {service.title}
            </h3>
            <p className="text-black/90 dark:text-slate-300/90">
              {service.description}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
