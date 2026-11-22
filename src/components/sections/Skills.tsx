'use client';

import React, { useState } from 'react';
import { Code2, Cpu, Wrench, Cloud, Sparkles, CheckCircle2 } from 'lucide-react';
import { SKILL_CATEGORIES } from '@/data/portfolio-data';
import { sound } from '@/lib/utils';

export const Skills: React.FC = () => {
  const [selectedLevel, setSelectedLevel] = useState<'All' | 'Core' | 'Proficient' | 'Exploring'>('All');

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative border-t border-white/[0.05]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-400">
              04 / Technical Capabilities
            </span>
            <h2 className="font-editorial text-3xl sm:text-5xl text-white font-light">
              Skills & Engineering Toolkit
            </h2>
            <p className="text-slate-400 text-sm max-w-xl font-light">
              Clear, authentic proficiency levels. No arbitrary percentage bars—just transparent distinctions between what I build with daily, what I know well, and what I am actively exploring.
            </p>
          </div>

          {/* Level Filter */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-white/[0.03] border border-white/[0.08]">
            {(['All', 'Core', 'Proficient', 'Exploring'] as const).map((lvl) => (
              <button
                key={lvl}
                onClick={() => {
                  sound.playClick();
                  setSelectedLevel(lvl);
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  selectedLevel === lvl
                    ? 'bg-amber-400 text-slate-950 font-semibold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {lvl}
              </button>
            ))}
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SKILL_CATEGORIES.map((cat, idx) => {
            const filteredSkills = selectedLevel === 'All'
              ? cat.skills
              : cat.skills.filter(s => s.level === selectedLevel);

            if (filteredSkills.length === 0) return null;

            return (
              <div 
                key={cat.category}
                className="glass-panel p-6 sm:p-8 rounded-2xl border-white/[0.08] space-y-5"
              >
                <div className="space-y-1 pb-3 border-b border-white/[0.06]">
                  <h3 className="text-lg font-medium text-white flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-amber-400" />
                    {cat.category}
                  </h3>
                  <p className="text-xs text-slate-400 font-light">
                    {cat.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {filteredSkills.map((skill) => {
                    const isCore = skill.level === 'Core';
                    const isProficient = skill.level === 'Proficient';
                    return (
                      <div
                        key={skill.name}
                        className={`px-3 py-2 rounded-xl text-xs font-mono flex items-center gap-2 border transition-all ${
                          isCore
                            ? 'bg-amber-500/[0.08] text-amber-200 border-amber-500/25 hover:border-amber-400/50'
                            : isProficient
                            ? 'bg-sky-500/[0.06] text-sky-200 border-sky-500/20 hover:border-sky-400/40'
                            : 'bg-white/[0.03] text-slate-400 border-white/[0.06] hover:border-white/20'
                        }`}
                      >
                        <span className="font-medium">{skill.name}</span>
                        <span className={`text-[10px] px-1.5 py-0.2 rounded font-sans uppercase tracking-wider ${
                          isCore 
                            ? 'bg-amber-400/20 text-amber-300' 
                            : isProficient 
                            ? 'bg-sky-400/20 text-sky-300' 
                            : 'bg-white/10 text-slate-400'
                        }`}>
                          {skill.level}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Legend */}
        <div className="mt-8 pt-6 border-t border-white/[0.06] flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-mono">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-400" />
            <span>Core: Daily production stack</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-sky-400" />
            <span>Proficient: Practical project experience</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-slate-500" />
            <span>Exploring: Actively learning & researching</span>
          </div>
        </div>
      </div>
    </section>
  );
};
