import React from 'react';
import { GraduationCap, Award, Calendar, CheckCircle } from 'lucide-react';
import { EDUCATION_DATA } from '@/data/portfolio-data';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 px-4 sm:px-6 lg:px-8 relative border-t border-white/[0.05]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-amber-400">
            05 / Academic Foundation
          </span>
          <h2 className="font-editorial text-3xl sm:text-5xl text-white font-light">
            Education & Rigor
          </h2>
          <p className="text-slate-400 text-sm max-w-xl font-light">
            Strong foundational computer engineering background combined with advanced Computer Science degree coursework.
          </p>
        </div>

        {/* Academic Timeline Cards */}
        <div className="space-y-8">
          {EDUCATION_DATA.map((edu, idx) => (
            <div
              key={edu.institution}
              className={`glass-panel p-6 sm:p-8 rounded-2xl border transition-all ${
                edu.current 
                  ? 'border-amber-500/30 bg-[#0d121c]/90' 
                  : 'border-white/[0.07] bg-white/[0.02]'
              }`}
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4 pb-4 border-b border-white/[0.06]">
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-xl sm:text-2xl font-light text-white font-editorial">
                      {edu.institution}
                    </h3>
                    {edu.current && (
                      <span className="px-2.5 py-0.5 rounded-full bg-amber-500/15 text-amber-300 text-xs font-mono border border-amber-500/30">
                        In Progress
                      </span>
                    )}
                  </div>
                  <p className="text-sm font-medium text-amber-400">
                    {edu.degree}
                  </p>
                </div>

                <div className="flex flex-col md:items-end text-xs font-mono text-slate-400 shrink-0">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-slate-500" />
                    {edu.period}
                  </span>
                  {edu.score && (
                    <span className="text-slate-200 mt-1 font-semibold">
                      {edu.score}
                    </span>
                  )}
                </div>
              </div>

              {/* Highlights */}
              <div className="space-y-2">
                <p className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                  Academic Highlights & Leadership
                </p>
                <ul className="space-y-2 text-sm text-slate-300 font-light">
                  {edu.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircle className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
                      <span className="leading-relaxed">{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
