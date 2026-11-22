import React from 'react';
import { ArrowUp, Github, Linkedin, Cloud, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '@/data/portfolio-data';

export const Footer: React.FC = () => {
  return (
    <footer className="relative z-10 border-t border-white/[0.07] bg-[#06080d]/90 pt-16 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Identity & Mission */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <span className="font-mono text-xs text-amber-400 uppercase tracking-widest">
                Shivansh Tiwari
              </span>
            </div>
            <p className="font-editorial text-2xl sm:text-3xl text-slate-100 font-light leading-snug">
              Crafting reliable software at the intersection of frontend elegance and applied AI.
            </p>
            <p className="text-sm text-slate-400 max-w-md leading-relaxed">
              B.Tech Computer Science at USICT, GGSIPU • AWS Student Builder Group Leader. Based in New Delhi, India.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="space-y-3">
            <p className="text-xs font-mono uppercase tracking-wider text-slate-400">Navigation</p>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="text-slate-300 hover:text-amber-400 transition-colors">
                  About Journey
                </a>
              </li>
              <li>
                <a href="#projects" className="text-slate-300 hover:text-amber-400 transition-colors">
                  Selected Work
                </a>
              </li>
              <li>
                <a href="#experience" className="text-slate-300 hover:text-amber-400 transition-colors">
                  Experience & Roles
                </a>
              </li>
              <li>
                <a href="#skills" className="text-slate-300 hover:text-amber-400 transition-colors">
                  Technical Stack
                </a>
              </li>
              <li>
                <a href="#education" className="text-slate-300 hover:text-amber-400 transition-colors">
                  Academic Timeline
                </a>
              </li>
              <li>
                <a href="#beyond" className="text-slate-300 hover:text-amber-400 transition-colors">
                  Beyond Coding
                </a>
              </li>
            </ul>
          </div>

          {/* Official Profiles */}
          <div className="space-y-3">
            <p className="text-xs font-mono uppercase tracking-wider text-slate-400">Public Profiles</p>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors group"
                >
                  <Github className="w-4 h-4 text-slate-400 group-hover:text-amber-400" />
                  <span>GitHub (@shivanshti97)</span>
                </a>
              </li>
              <li>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors group"
                >
                  <Linkedin className="w-4 h-4 text-slate-400 group-hover:text-sky-400" />
                  <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a
                  href={PERSONAL_INFO.awsBuilder}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors group"
                >
                  <Cloud className="w-4 h-4 text-slate-400 group-hover:text-amber-500" />
                  <span>AWS Builder Center</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors group"
                >
                  <Mail className="w-4 h-4 text-slate-400 group-hover:text-amber-300" />
                  <span>Direct Email</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Shivansh Tiwari. Designed & developed with Next.js, TypeScript & Tailwind CSS.</p>
          <a
            href="#hero"
            className="flex items-center gap-1.5 text-slate-400 hover:text-amber-400 transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
};
