'use client';

import React from 'react';
import { Compass, Sparkles, BookOpen, Cpu, Globe, ArrowUpRight } from 'lucide-react';
import { BEYOND_CODE } from '@/data/portfolio-data';
import { sound } from '@/lib/utils';

export const BeyondCode: React.FC = () => {
  return (
    <section id="beyond" className="py-24 px-4 sm:px-6 lg:px-8 relative border-t border-white/[0.05]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-amber-400">
            07 / Intellectual Curiosity
          </span>
          <h2 className="font-editorial text-3xl sm:text-5xl text-white font-light">
            Beyond Code: What I&apos;m Exploring
          </h2>
          <p className="text-slate-400 text-sm max-w-xl font-light">
            A software engineer is shaped by what they ponder when not pushing commits. Here are the questions, architectures, and concepts currently commanding my attention.
          </p>
        </div>

        {/* Editorial Topics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BEYOND_CODE.map((topic, i) => (
            <div
              key={topic.title}
              className="glass-panel glass-panel-hover p-6 rounded-2xl border-white/[0.08] flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-amber-400 tracking-wider">
                    {topic.eyebrow}
                  </span>
                  <span className="px-2 py-0.5 rounded bg-white/[0.04] text-[10px] text-slate-400">
                    {topic.status}
                  </span>
                </div>

                <h3 className="font-editorial text-xl text-white font-light leading-snug">
                  {topic.title}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed font-light">
                  {topic.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/[0.06] flex flex-wrap gap-1.5">
                {topic.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded text-[10px] font-mono text-slate-400 bg-white/[0.03] border border-white/[0.05]"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
