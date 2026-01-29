"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Download } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen pt-24 flex items-center justify-center overflow-hidden">

      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-10 w-[28rem] h-[28rem] bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/3 right-12 w-[30rem] h-[30rem] bg-purple-600/20 rounded-full blur-3xl animate-pulse delay-200" />
        <div className="absolute bottom-16 left-1/4 w-[26rem] h-[26rem] bg-pink-600/15 rounded-full blur-3xl animate-pulse delay-500" />
        <div className="absolute bottom-10 right-1/4 w-[24rem] h-[24rem] bg-amber-500/15 rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center flex flex-col items-center"
      >
       
        <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border border-white/10 bg-white/5 p-2 mb-8 shadow-glow">
          <div className="rounded-full overflow-hidden border border-white/10">
          <Image
            src="/images/sherin.png"
            alt="Allen"
            width={320}
            height={320}
            className="object-cover"
            priority
          />
          </div>
        </div>

       
        <h1 className="text-5xl md:text-7xl font-bold mb-4 text-black dark:text-white">
          Hi, I'm{" "}
          <span className="gradient-text-1">
            Allen
          </span>
        </h1>

       
        <p className="text-black/70 dark:text-slate-200/70 text-lg mb-10">
          MERN-Stack Developer | Next.js | React
        </p>

        
        <div className="flex flex-col sm:flex-row gap-4">
          
          {/* View Work */}
          <a
            href="#projects"
            className="
              inline-flex items-center gap-2
              px-7 py-3 rounded-xl
              bg-gradient-to-r from-cyan-400 to-purple-500 text-black
              shadow-[0_12px_30px_rgba(34,211,238,0.18)]
              transition hover:-translate-y-0.5 hover:brightness-110
            "
          >
            View My Work
            <ArrowRight size={18} />
          </a>

          {/* Resume Download */}
          <a
            href="/resume/Allen_resume.pdf"
            download
            className="
              inline-flex items-center gap-2
              px-7 py-3 rounded-xl
              border border-white/15 bg-gradient-to-r from-cyan-400 to-purple-500 text-black
              bg-white/5 backdrop-blur
              hover:bg-white/10 transition
            "
          >
            Resume
            <Download size={18} />
          </a>

        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
