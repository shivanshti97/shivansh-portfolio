'use client';

import React from 'react';
import Image from 'next/image';
import { 
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
    <section id="hero" className="relative pt-32 pb-20 md:pt-36 md:pb-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center mb-14">
          {/* Left Column: Narrative & Headline */}
          <div className="lg:col-span-7 space-y-6">
            {/* Eyebrow & Status Badge */}
            <div className="flex flex-wrap items-center gap-3">
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
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extralight tracking-tight text-white leading-[1.08]">
                Hi, I&apos;m <span className="font-normal text-amber-400">Shivansh Tiwari</span>.
              </h1>
              <p className="font-editorial text-2xl sm:text-4xl lg:text-5xl text-slate-200 leading-snug">
                Building thoughtful digital experiences at the intersection of software and AI.
              </p>
            </div>

            {/* Subtitle / Intro Narrative */}
            <p className="text-base sm:text-lg text-slate-400 leading-relaxed font-light">
              Computer Science undergraduate (SGPA 8.7) and frontend engineer. From optimizing Next.js and Supabase workflows at Quild/KeilHQ to leading student builder initiatives with AWS, I craft clean, responsive interfaces and explore intelligent software architectures.
            </p>

            {/* Action Buttons & Links */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
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
          </div>

          {/* Right Column: Editorial Portrait Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative group max-w-sm w-full">
              {/* Ambient Glow */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-amber-500/20 via-sky-500/10 to-amber-500/20 blur-xl opacity-60 group-hover:opacity-90 transition-opacity duration-500 pointer-events-none" />

              {/* Portrait Frame Card */}
              <div className="relative rounded-3xl glass-panel bg-[#0b0f19] border border-white/[0.12] p-4 sm:p-5 shadow-2xl transition-all duration-300 group-hover:border-amber-400/40">
                {/* Photo container */}
                <div className="relative w-full aspect-square rounded-2xl overflow-hidden border border-white/[0.08] bg-[#07090e]">
                  <Image
                    src="/shivansh-profile.jpg"
                    alt="Shivansh Tiwari — Software Developer"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 380px"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Subtle gradient vignette at bottom of photo */}
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0b0f19] to-transparent pointer-events-none" />

                  {/* Corner Badge */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] font-mono">
                    <span className="px-2 py-1 rounded-md bg-black/75 backdrop-blur-md text-amber-300 border border-white/10 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Active Builder
                    </span>
                    <span className="px-2 py-1 rounded-md bg-black/75 backdrop-blur-md text-slate-300 border border-white/10">
                      USICT &apos;28
                    </span>
                  </div>
                </div>

                {/* Card caption info */}
                <div className="mt-4 pt-3 border-t border-white/[0.07] flex items-center justify-between text-xs">
                  <div>
                    <p className="font-medium text-white text-sm">Shivansh Tiwari</p>
                    <p className="text-[11px] text-slate-400 font-mono">B.Tech CSE • SGPA 8.7</p>
                  </div>
                  <div className="text-right">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 text-[10px] font-mono border border-amber-500/20">
                      <Sparkles className="w-3 h-3 text-amber-400" />
                      AWS Leader
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
