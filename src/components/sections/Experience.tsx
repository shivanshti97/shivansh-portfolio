'use client';

import React, { useState } from 'react';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  Award, 
  Users, 
  CheckCircle2, 
  ChevronRight,
  ExternalLink 
} from 'lucide-react';
import { EXPERIENCES } from '@/data/portfolio-data';
import { sound } from '@/lib/utils';

export const Experience: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>(EXPERIENCES[0].id);

  const selectedExp = EXPERIENCES.find(e => e.id === activeTab) || EXPERIENCES[0];

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 relative border-t border-white/[0.05]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-amber-400">
            03 / Professional Record
          </span>
          <h2 className="font-editorial text-3xl sm:text-5xl text-white font-light">
            Experience & Leadership
          </h2>
          <p className="text-slate-400 text-sm max-w-xl font-light">
            Hands-on software development, real product delivery, data analysis, and developer community building.
          </p>
        </div>

        {/* Tabbed Editorial Experience Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Roles Navigation List */}
          <div className="lg:col-span-4 space-y-2">
            {EXPERIENCES.map((exp) => {
              const isActive = exp.id === activeTab;
              return (
                <button
                  key={exp.id}
                  onClick={() => {
                    sound.playClick();
                    setActiveTab(exp.id);
                  }}
                  className={`w-full text-left p-4 rounded-xl transition-all border flex items-center justify-between group ${
                    isActive
                      ? 'bg-amber-500/10 border-amber-500/30 text-white shadow-lg shadow-amber-500/5'
                      : 'bg-white/[0.02] border-white/[0.05] text-slate-400 hover:text-white hover:bg-white/[0.04]'
                  }`}
                >
                  <div className="space-y-1">
                    <p className={`text-sm font-medium ${isActive ? 'text-amber-300' : 'text-slate-200'}`}>
                      {exp.company}
                    </p>
                    <p className="text-xs text-slate-400 truncate max-w-[200px]">
                      {exp.role}
                    </p>
                  </div>
                  <ChevronRight className={`w-4 h-4 transition-transform ${isActive ? 'text-amber-400 translate-x-1' : 'text-slate-600'}`} />
                </button>
              );
            })}
          </div>

          {/* Role Details Panel */}
          <div className="lg:col-span-8 glass-panel p-6 sm:p-8 rounded-2xl border-white/[0.08] space-y-6">
            {/* Header info */}
            <div className="border-b border-white/[0.08] pb-6 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="px-2.5 py-1 rounded-md bg-amber-500/10 text-amber-300 text-xs font-mono border border-amber-500/20">
                  {selectedExp.badge || selectedExp.type}
                </span>
                <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-slate-500" />
                  {selectedExp.period}
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-light text-white font-editorial">
                  {selectedExp.role}
                </h3>
                <p className="text-base text-slate-300 font-medium">
                  {selectedExp.company}
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-slate-500" />
                <span>{selectedExp.location}</span>
              </div>
            </div>

            {/* Responsibilities */}
            <div className="space-y-3">
              <p className="text-xs font-mono uppercase tracking-wider text-amber-400">
                Key Contributions & Scope
              </p>
              <ul className="space-y-3 text-sm text-slate-300 font-light">
                {selectedExp.description.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div className="pt-4 border-t border-white/[0.06] space-y-2">
              <p className="text-xs font-mono uppercase tracking-wider text-slate-400">
                Technologies & Tools Applied
              </p>
              <div className="flex flex-wrap gap-2">
                {selectedExp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded text-xs font-mono text-slate-300 bg-white/[0.03] border border-white/[0.06]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
