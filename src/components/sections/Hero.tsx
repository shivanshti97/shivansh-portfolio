'use client';

import React from 'react';
import { 
  ArrowDown, 
  ArrowUpRight, 
  Github, 
  Linkedin, 
  Cloud, 
  Download, 
  MapPin, 
  Sparkles,
  Terminal as TerminalIcon,
  Code2
} from 'lucide-react';
import { PERSONAL_INFO } from '@/data/portfolio-data';
import { sound } from '@/lib/utils';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Eyebrow & Status Badge */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <span>AWS Student Builder Group Leader</span>
          </div>
          <div className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-400">
            <MapPin className="w-3.5 h-3.5 text-slate-500" />
            <span>India • USICT GGSIPU</span>
          </div>
        </div>

        {/* Hero Title & Editorial Headline */}
        <div className="max-w-4xl space-y-4 mb-8">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extralight tracking-tight text-white leading-[1.08]">
            Hi, I&apos;m <span className="font-normal text-amber-400">Shivansh Tiwari</span>.
          </h1>
          <p className="font-editorial text-2xl sm:text-4xl lg:text-5xl text-slate-200 leading-snug">
            Building thoughtful digital experiences at the intersection of software and AI.
          </p>
        </div>

        {/* Subtitle / Intro Narrative */}
        <p className="max-w-2xl text-base sm:text-lg text-slate-400 leading-relaxed font-light mb-10">
          Computer Science undergraduate (SGPA 8.7) and frontend engineer. From optimizing Next.js and Supabase workflows at Quild/KeilHQ to leading student builder initiatives with AWS, I craft clean, responsive interfaces and explore intelligent software architectures.
        </p>

        {/* Action Buttons & Links */}
        <div className="flex flex-wrap items-center gap-4 mb-14">
          <a
            href="#projects"
            onClick={() => sound.playClick()}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-medium text-sm text-slate-950 bg-amber-400 hover:bg-amber-300 transition-all shadow-lg shadow-amber-500/15 group"
          >
            <span>View Selected Work</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

          <a
            href="#contact"
            onClick={() => sound.playPop()}
            className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-medium text-sm text-slate-200 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.1] transition-all"
          >
            <Download className="w-4 h-4 text-slate-400" />
            <span>Connect & Resume</span>
          </a>

          {/* Terminal peek trigger */}
          <button
            onClick={() => {
              sound.playPop();
              window.dispatchEvent(new CustomEvent('open-terminal'));
            }}
            className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl font-mono text-xs text-amber-400 hover:text-amber-300 bg-amber-500/[0.05] hover:bg-amber-500/[0.1] border border-amber-500/20 transition-all"
            title="Open Interactive Terminal"
          >
            <TerminalIcon className="w-4 h-4" />
            <span>dev:~/shivansh $</span>
          </button>
        </div>

        {/* Profiles bar & Highlights */}
        <div className="pt-8 border-t border-white/[0.08] flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-400">Public Profiles</span>
            <div className="flex items-center gap-3">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => sound.playClick()}
                className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.06] border border-white/[0.06] transition-all"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => sound.playClick()}
                className="p-2 rounded-lg text-slate-400 hover:text-sky-400 hover:bg-white/[0.06] border border-white/[0.06] transition-all"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.awsBuilder}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => sound.playClick()}
                className="p-2 rounded-lg text-slate-400 hover:text-amber-400 hover:bg-white/[0.06] border border-white/[0.06] transition-all"
                aria-label="AWS Builder Center"
              >
                <Cloud className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs text-slate-400 font-mono">
            <div className="flex items-center gap-2">
              <Code2 className="w-4 h-4 text-amber-400" />
              <span>Next.js • React • TypeScript • Python</span>
            </div>
            <div className="hidden lg:flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-sky-400" />
              <span>Applied AI & Cloud</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
