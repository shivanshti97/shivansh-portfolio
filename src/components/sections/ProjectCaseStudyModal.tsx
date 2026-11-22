'use client';

import React, { useEffect } from 'react';
import { X, Github, ExternalLink, CheckCircle2, ArrowRight, Layers, Sparkles } from 'lucide-react';
import { Project } from '@/types';
import { sound } from '@/lib/utils';

interface Props {
  project: Project;
  onClose: () => void;
}

export const ProjectCaseStudyModal: React.FC<Props> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        sound.playPop();
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 animate-in fade-in duration-200">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity" 
        onClick={() => {
          sound.playPop();
          onClose();
        }}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto glass-panel bg-[#0b0e17] border border-white/[0.12] rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl z-10 text-slate-200">
        {/* Close Button */}
        <button
          onClick={() => {
            sound.playPop();
            onClose();
          }}
          className="absolute top-6 right-6 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/[0.08] transition-all border border-transparent hover:border-white/10"
          aria-label="Close Case Study"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-3 mb-8 pr-10">
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
            <span className="px-2.5 py-1 rounded-md bg-amber-500/10 text-amber-300 border border-amber-500/20">
              {project.category}
            </span>
            <span className="text-slate-400">• {project.year}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-light text-white font-editorial leading-tight">
            {project.title}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-light">
            {project.tagline}
          </p>
        </div>

        {/* Key Metrics / Highlights if available */}
        {project.metrics && (
          <div className="grid grid-cols-3 gap-3 mb-8 p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
            {project.metrics.map((m, i) => (
              <div key={i} className="text-center sm:text-left">
                <span className="block text-[11px] font-mono text-slate-400 uppercase tracking-wider">{m.label}</span>
                <span className="text-xs sm:text-sm font-medium text-amber-300">{m.value}</span>
              </div>
            ))}
          </div>
        )}

        {/* Case Study Sections */}
        <div className="space-y-8 text-sm leading-relaxed text-slate-300">
          {/* Problem */}
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-amber-400 block">
              01 / The Problem & Context
            </span>
            <p className="text-slate-300 font-light">
              {project.problem}
            </p>
          </div>

          {/* Solution */}
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-amber-400 block">
              02 / The Engineered Solution
            </span>
            <p className="text-slate-300 font-light">
              {project.solution}
            </p>
          </div>

          {/* Architecture Highlights */}
          <div className="space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-amber-400 block">
              03 / Technical Decisions & Architecture
            </span>
            <ul className="space-y-2 font-light">
              {project.architectureHighlights.map((highlight, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Key Learnings */}
          <div className="space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-amber-400 block">
              04 / Key Learnings & Takeaways
            </span>
            <ul className="space-y-2 font-light">
              {project.keyLearnings.map((learning, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-2 shrink-0" />
                  <span>{learning}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div className="space-y-2 pt-2">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block">
              Technologies Used
            </span>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 rounded-md text-xs font-mono text-slate-200 bg-white/[0.04] border border-white/[0.08]"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="mt-10 pt-6 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sound.playClick()}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-medium text-slate-200 bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] transition-all"
            >
              <Github className="w-4 h-4" />
              <span>View Repository</span>
            </a>

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => sound.playChime()}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-medium text-slate-950 bg-amber-400 hover:bg-amber-300 transition-all shadow-md shadow-amber-500/20"
              >
                <ExternalLink className="w-4 h-4 text-slate-950" />
                <span>Open Live Deployment</span>
              </a>
            )}
          </div>

          <button
            onClick={() => {
              sound.playPop();
              onClose();
            }}
            className="text-xs font-mono text-slate-400 hover:text-white"
          >
            Close (Esc)
          </button>
        </div>
      </div>
    </div>
  );
};
