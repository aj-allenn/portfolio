"use client";

import React from "react";
import { Mail, Github, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full py-10 mt-10">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      <div className="bg-black/25 backdrop-blur-md">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 px-6">
        <p className="text-slate-400 text-sm">
          &copy; {new Date().getFullYear()} Allen John. All rights reserved.
        </p>

        <div className="flex items-center gap-6">
          {/* Email */}
          <a
            href="mailto:johnallenjohn2004@email.com"
            className="text-slate-300 hover:text-emerald-300 transition-all duration-300"
            title="Email"
          >
            <Mail size={20} />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/aj-allenn"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-300 hover:text-cyan-300 transition-all duration-300"
            title="GitHub"
          >
            <Github size={20} />
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/allen-john-5b9629289"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-300 hover:text-purple-300 transition-all duration-300"
            title="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
        </div>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
