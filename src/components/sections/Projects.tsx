'use client';

import React, { useState } from 'react';
import { 
  ArrowUpRight, 
  Github, 
  ExternalLink, 
  Layers, 
  Sparkles, 
  BookOpen,
  Filter
} from 'lucide-react';
import { PROJECTS } from '@/data/portfolio-data';
import { Project } from '@/types';
import { sound } from '@/lib/utils';
import { ProjectCaseStudyModal } from './ProjectCaseStudyModal';

const CATEGORIES = ['All', 'Full-Stack', 'AI & ML', 'Frontend'] as const;

export const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = activeCategory === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeCategory);

  const handleOpenCaseStudy = (project: Project) => {
    sound.playPop();
    setSelectedProject(project);
  };

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative border-t border-white/[0.05]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-400">
              02 / Featured Work
            </span>
            <h2 className="font-editorial text-3xl sm:text-5xl text-white font-light">
              Selected Projects & Case Studies
            </h2>
            <p className="text-slate-400 text-sm max-w-xl font-light">
              Real code, verified repositories, and practical problem solving. Click any card to explore the full engineering case study.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-white/[0.03] border border-white/[0.08]">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  sound.playClick();
                  setActiveCategory(cat);
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeCategory === cat
                    ? 'bg-amber-400 text-slate-950 shadow-sm'
                    : 'text-slate-400 hover:text-white hover:bg-white/[0.05]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              className="glass-panel glass-panel-hover rounded-2xl p-6 sm:p-7 flex flex-col justify-between group cursor-pointer"
              onClick={() => handleOpenCaseStudy(project)}
            >
              <div>
                {/* Meta Header */}
                <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-4 pb-3 border-b border-white/[0.06]">
                  <span className="px-2 py-0.5 rounded bg-white/[0.04] text-amber-300 border border-white/[0.06]">
                    {project.category}
                  </span>
                  <div className="flex items-center gap-3">
                    <span>{project.year}</span>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        handleOpenCaseStudy(project);
                      }}
                      className="text-amber-400 hover:underline flex items-center gap-1 text-[11px]"
                    >
                      <span>Case Study</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>

                {/* Title & Tagline */}
                <h3 className="text-xl sm:text-2xl font-medium text-white group-hover:text-amber-300 transition-colors mb-2 leading-snug">
                  {project.title}
                </h3>
                <p className="text-sm text-slate-300 mb-4 line-clamp-2 leading-relaxed">
                  {project.tagline}
                </p>

                {/* Summary */}
                <p className="text-xs text-slate-400 leading-relaxed mb-6 font-light">
                  {project.summary}
                </p>
              </div>

              <div>
                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.technologies.slice(0, 5).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded text-[11px] font-mono text-slate-300 bg-white/[0.03] border border-white/[0.06]"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 5 && (
                    <span className="px-1.5 py-0.5 rounded text-[11px] font-mono text-slate-500">
                      +{project.technologies.length - 5}
                    </span>
                  )}
                </div>

                {/* Links Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-white/[0.06] text-xs">
                  <div className="flex items-center gap-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => {
                        e.stopPropagation();
                        sound.playClick();
                      }}
                      className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors"
                      title="GitHub Repository"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>Code</span>
                    </a>

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => {
                          e.stopPropagation();
                          sound.playClick();
                        }}
                        className="inline-flex items-center gap-1.5 text-amber-400 hover:text-amber-300 transition-colors"
                        title="Live Deployment"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>

                  <span className="text-[11px] font-mono text-slate-500 group-hover:text-amber-400 transition-colors flex items-center gap-1">
                    Read Details ↗
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
      {selectedProject && (
        <ProjectCaseStudyModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};
