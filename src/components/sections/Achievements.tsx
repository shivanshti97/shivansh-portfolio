import React from 'react';
import { Award, ArrowUpRight, CheckCircle2, ShieldCheck } from 'lucide-react';
import { ACHIEVEMENTS } from '@/data/portfolio-data';

export const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-24 px-4 sm:px-6 lg:px-8 relative border-t border-white/[0.05]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-amber-400">
            06 / Recognitions
          </span>
          <h2 className="font-editorial text-3xl sm:text-5xl text-white font-light">
            Certifications & Community Honors
          </h2>
          <p className="text-slate-400 text-sm max-w-xl font-light">
            Verified leadership roles, competitive student selections, and open-source milestones.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ACHIEVEMENTS.map((ach) => (
            <div
              key={ach.title}
              className="glass-panel glass-panel-hover p-6 rounded-2xl border-white/[0.08] flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/20">
                    {ach.badge}
                  </span>
                  <span className="text-slate-400">{ach.date}</span>
                </div>

                <h3 className="text-lg font-medium text-white leading-snug">
                  {ach.title}
                </h3>

                <p className="text-xs font-mono text-slate-400">
                  Issued by: {ach.issuer}
                </p>

                <p className="text-xs text-slate-300 leading-relaxed font-light">
                  {ach.description}
                </p>
              </div>

              {ach.url && (
                <div className="mt-5 pt-3 border-t border-white/[0.06]">
                  <a
                    href={ach.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-amber-400 hover:text-amber-300"
                  >
                    <span>View Official Profile</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
