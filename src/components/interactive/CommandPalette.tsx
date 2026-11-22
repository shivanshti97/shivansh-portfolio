'use client';

import React, { useState, useEffect } from 'react';
import { 
  Command, 
  Search, 
  X, 
  ArrowRight, 
  FolderGit2, 
  Briefcase, 
  GraduationCap, 
  Layers, 
  Mail, 
  Github, 
  Linkedin, 
  Cloud,
  Terminal,
  Volume2,
  VolumeX,
  Copy,
  Check,
  Phone
} from 'lucide-react';
import { sound } from '@/lib/utils';
import { PERSONAL_INFO, PROJECTS } from '@/data/portfolio-data';

export const CommandPalette: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [copied, setCopied] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        sound.playPop();
        setIsOpen((prev) => !prev);
      }
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    const handleCustomOpen = () => {
      setIsOpen(true);
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('open-command-palette', handleCustomOpen);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('open-command-palette', handleCustomOpen);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const navigateTo = (anchor: string) => {
    sound.playClick();
    setIsOpen(false);
    window.location.hash = anchor;
  };

  const copyEmail = () => {
    sound.playChime();
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const copyPhone = () => {
    sound.playChime();
    navigator.clipboard.writeText(PERSONAL_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const navItems = [
    { label: 'Go to Hero / Top', icon: ArrowRight, action: () => navigateTo('hero') },
    { label: 'View Narrative / About', icon: ArrowRight, action: () => navigateTo('about') },
    { label: 'Explore Featured Projects', icon: FolderGit2, action: () => navigateTo('projects') },
    { label: 'Examine Experience & Leadership', icon: Briefcase, action: () => navigateTo('experience') },
    { label: 'Inspect Skills & Toolkit', icon: Layers, action: () => navigateTo('skills') },
    { label: 'Academic Foundation', icon: GraduationCap, action: () => navigateTo('education') },
    { label: 'Beyond Code / Exploration', icon: ArrowRight, action: () => navigateTo('beyond') },
    { label: 'Contact & Inquiries', icon: Mail, action: () => navigateTo('contact') },
  ];

  const externalLinks = [
    { label: 'Open GitHub Profile (@shivanshti97)', icon: Github, url: PERSONAL_INFO.github },
    { label: 'Open LinkedIn Profile', icon: Linkedin, url: PERSONAL_INFO.linkedin },
    { label: 'Open AWS Builder Center Community', icon: Cloud, url: PERSONAL_INFO.awsBuilder },
  ];

  const filteredProjects = PROJECTS.filter(p => 
    p.title.toLowerCase().includes(query.toLowerCase()) || 
    p.technologies.some(t => t.toLowerCase().includes(query.toLowerCase()))
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 sm:px-6">
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity" 
        onClick={() => setIsOpen(false)}
      />

      <div className="relative w-full max-w-xl glass-panel bg-[#090c14] border border-white/[0.12] rounded-2xl shadow-2xl overflow-hidden z-10 text-slate-200 animate-in fade-in zoom-in-95 duration-150">
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-white/[0.08] gap-3">
          <Search className="w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Type a command, section, or tech (e.g. Next.js, AWS)..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            className="w-full bg-transparent border-none text-sm text-white placeholder-slate-500 focus:outline-none font-light"
          />
          <button 
            onClick={() => setIsOpen(false)}
            className="p-1 rounded text-slate-400 hover:text-white"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content List */}
        <div className="max-h-[60vh] overflow-y-auto p-2 space-y-4 text-xs">
          {/* Quick Actions */}
          <div className="space-y-1">
            <span className="px-3 py-1 text-[10px] font-mono uppercase tracking-wider text-slate-400 block">
              Quick Actions
            </span>
            <button
              onClick={copyEmail}
              className="w-full flex items-center justify-between px-3 py-2 rounded-lg hover:bg-white/[0.05] text-slate-300 hover:text-white transition-all text-left"
            >
              <div className="flex items-center gap-2.5">
                <Copy className="w-3.5 h-3.5 text-amber-400" />
                <span>Copy Email ({PERSONAL_INFO.email})</span>
              </div>
              {copied && <span className="text-emerald-400 font-mono">Copied!</span>}
            </button>
            <button
              onClick={copyPhone}
              className="w-full flex items-center justify-between px-3 py-2 rounded-lg hover:bg-white/[0.05] text-slate-300 hover:text-white transition-all text-left"
            >
              <div className="flex items-center gap-2.5">
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>Copy Phone / WhatsApp ({PERSONAL_INFO.phone})</span>
              </div>
              {copiedPhone && <span className="text-emerald-400 font-mono">Copied!</span>}
            </button>
            <button
              onClick={() => {
                setIsOpen(false);
                window.dispatchEvent(new CustomEvent('open-terminal'));
              }}
              className="w-full flex items-center justify-between px-3 py-2 rounded-lg hover:bg-white/[0.05] text-slate-300 hover:text-white transition-all text-left"
            >
              <div className="flex items-center gap-2.5">
                <Terminal className="w-3.5 h-3.5 text-amber-400" />
                <span>Launch Interactive Terminal Drawer</span>
              </div>
              <span className="text-[10px] font-mono text-slate-400">CLI</span>
            </button>
          </div>

          {/* Section Navigation */}
          <div className="space-y-1">
            <span className="px-3 py-1 text-[10px] font-mono uppercase tracking-wider text-slate-400 block">
              Jump to Section
            </span>
            {navItems
              .filter(item => item.label.toLowerCase().includes(query.toLowerCase()))
              .map((item, idx) => {
                const Icon = item.icon;
                return (
                  <button
                    key={idx}
                    onClick={item.action}
                    className="w-full flex items-center justify-between px-3 py-2 rounded-lg hover:bg-white/[0.05] text-slate-300 hover:text-white transition-all text-left"
                  >
                    <div className="flex items-center gap-2.5">
                      <Icon className="w-3.5 h-3.5 text-slate-400" />
                      <span>{item.label}</span>
                    </div>
                    <ArrowRight className="w-3 h-3 text-slate-600" />
                  </button>
                );
              })}
          </div>

          {/* Projects Quick Jump */}
          {filteredProjects.length > 0 && (
            <div className="space-y-1">
              <span className="px-3 py-1 text-[10px] font-mono uppercase tracking-wider text-slate-400 block">
                Projects ({filteredProjects.length})
              </span>
              {filteredProjects.slice(0, 4).map((p) => (
                <button
                  key={p.id}
                  onClick={() => navigateTo('projects')}
                  className="w-full flex items-center justify-between px-3 py-2 rounded-lg hover:bg-white/[0.05] text-slate-300 hover:text-white transition-all text-left"
                >
                  <span className="truncate">{p.title}</span>
                  <span className="text-[10px] font-mono text-amber-400 shrink-0">{p.category}</span>
                </button>
              ))}
            </div>
          )}

          {/* External Links */}
          <div className="space-y-1">
            <span className="px-3 py-1 text-[10px] font-mono uppercase tracking-wider text-slate-400 block">
              Profiles & External
            </span>
            {externalLinks.map((link, idx) => {
              const Icon = link.icon;
              return (
                <a
                  key={idx}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-white/[0.05] text-slate-300 hover:text-white transition-all text-left"
                >
                  <div className="flex items-center gap-2.5">
                    <Icon className="w-3.5 h-3.5 text-slate-400" />
                    <span>{link.label}</span>
                  </div>
                  <span className="text-slate-500 font-mono">↗</span>
                </a>
              );
            })}
          </div>
        </div>

        {/* Footer shortcuts */}
        <div className="px-4 py-2 border-t border-white/[0.06] bg-black/40 flex items-center justify-between text-[11px] font-mono text-slate-500">
          <span>Navigate with mouse or keyboard</span>
          <span>ESC to close</span>
        </div>
      </div>
    </div>
  );
};
