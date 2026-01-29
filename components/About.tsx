"use client";

import Reveal from "./Reveal";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 px-6 max-w-5xl mx-auto"
    >
      <Reveal>
        <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight mb-6 gradient-text-2">
          About me
        </h2>

        <p className="text-black/90 dark:text-slate-300/90 leading-relaxed text-lg">
          I’m a MERN Stack Developer passionate about building modern, responsive,
          and scalable web applications. I work with MongoDB, Express.js, React.js,
          and Node.js to develop full-stack solutions with clean, maintainable
          code and efficient functionality.
          <br />
          <br />
          I enjoy backend development (REST APIs, server-side logic, databases)
          and also love crafting intuitive, user-friendly frontends with strong UX.
          I believe in continuous learning through real-world projects and
          collaboration.
          <br />
          <br />I’m actively looking for opportunities to learn, contribute, and
          grow as a full-stack developer.
        </p>
      </Reveal>
    </section>
  );
}
