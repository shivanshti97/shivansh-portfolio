'use client';

import React from 'react';
import { 
  GraduationCap, 
  Briefcase, 
  Sparkles, 
  Compass, 
  Terminal, 
  ArrowUpRight 
} from 'lucide-react';
import { sound } from '@/lib/utils';
import { EDUCATION_DATA } from '@/data/portfolio-data';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative border-t border-white/[0.05]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-amber-400">
            01 / Narrative & Background
          </span>
          <h2 className="font-editorial text-3xl sm:text-5xl text-white font-light">
            The Journey So Far
          </h2>
        </div>

        {/* Editorial Story Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Main Story Column */}
          <div className="lg:col-span-7 space-y-6 text-slate-300 leading-relaxed text-base sm:text-lg font-light">
            <p className="first-letter:font-editorial first-letter:text-5xl first-letter:float-left first-letter:mr-3 first-letter:text-amber-400 first-letter:leading-none">
              My path in computing began with curiosity about how complex software functions beneath the surface. Pursuing a Diploma in Computer Engineering at Delhi Skill and Entrepreneurship University (DSEU) gave me a rigorous, hands-on foundation in computer architecture, networking, and programming fundamentals.
            </p>

            <p>
              Transitioning directly into the Bachelor of Technology in Computer Science and Engineering at USICT, GGSIPU (current SGPA: 8.7), I broadened my perspective from raw syntax to full-stack systems and user experience. I discovered that I am happiest working at the convergence of clean frontend engineering, intuitive design systems, and applied artificial intelligence.
            </p>

            <p>
              My hands-on experience at Quild / KeilHQ gave me exposure to real product velocity—writing type-safe Next.js code, diagnosing component re-renders, integrating Supabase databases, and embedding AI-driven functionality directly into daily developer workflows.
            </p>

            <p>
              Outside of building products, I serve as an <span className="text-amber-300 font-normal">AWS Student Builder Group Leader</span>, organizing technical workshops and helping student developers take their first steps into cloud-native architectures.
            </p>

            <div className="pt-4 flex flex-wrap gap-3">
              <a
                href="#experience"
                onClick={() => sound.playClick()}
                className="inline-flex items-center gap-1.5 text-xs font-mono text-amber-400 hover:text-amber-300 underline underline-offset-4"
              >
                <span>Read detailed experience timeline</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Quick Facts & Values Cards */}
          <div className="lg:col-span-5 space-y-4">
            <div className="glass-panel p-6 rounded-2xl border-white/[0.07] space-y-4">
              <div className="flex items-center gap-2.5 text-amber-400">
                <Compass className="w-5 h-5" />
                <h3 className="font-mono text-xs uppercase tracking-wider text-slate-200">
                  Engineering Principles
                </h3>
              </div>
              <ul className="space-y-3 text-sm text-slate-300">
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0" />
                  <span><strong>Form Follows Function:</strong> Interfaces should be quiet, responsive, and reduce mental fatigue.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-2 shrink-0" />
                  <span><strong>Type-Safe & Resilient:</strong> Clean TypeScript contracts prevent bugs before they reach the browser.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
                  <span><strong>Pragmatic AI:</strong> Use machine learning to solve concrete friction points, not as superficial gimmicks.</span>
                </li>
              </ul>
            </div>

            <div className="glass-panel p-6 rounded-2xl border-white/[0.07] space-y-3">
              <div className="flex items-center gap-2.5 text-amber-400">
                <GraduationCap className="w-5 h-5" />
                <h3 className="font-mono text-xs uppercase tracking-wider text-slate-200">
                  Current Academic Standing
                </h3>
              </div>
              <div className="space-y-1">
                <p className="text-sm font-medium text-white">USICT, GGSIPU (2025–2028)</p>
                <p className="text-xs text-slate-400">B.Tech in Computer Science & Engineering</p>
                <div className="mt-2 inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-amber-500/10 text-amber-300 text-xs font-mono">
                  SGPA: 8.7 (Distinction)
                </div>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-gradient-to-br from-amber-500/10 to-transparent border border-amber-500/20">
              <div className="flex items-center justify-between text-xs font-mono text-amber-300 mb-2">
                <span>Community Impact</span>
                <span>AWS Leader</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Empowering peers through hands-on cloud labs, serverless architecture demos, and active community participation on AWS Builder Center.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
