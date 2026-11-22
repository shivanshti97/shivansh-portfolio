'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Terminal, 
  Volume2, 
  VolumeX, 
  Command, 
  Menu, 
  X, 
  ArrowUpRight, 
  Sparkles 
} from 'lucide-react';
import { sound } from '@/lib/utils';
import { PERSONAL_INFO } from '@/data/portfolio-data';

const NAV_ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Beyond Code', href: '#beyond' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    setIsMuted(sound.getIsMuted());

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSound = () => {
    const nextState = !isMuted;
    setIsMuted(nextState);
    sound.setMuted(nextState);
    if (!nextState) sound.playPop();
  };

  const handleNavClick = () => {
    sound.playClick();
    setMobileOpen(false);
  };

  const triggerCommandPalette = () => {
    sound.playPop();
    window.dispatchEvent(new CustomEvent('open-command-palette'));
  };

  const triggerTerminal = () => {
    sound.playPop();
    window.dispatchEvent(new CustomEvent('open-terminal'));
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 py-3 transition-all duration-300">
      <div 
        className={`max-w-6xl mx-auto rounded-2xl transition-all duration-300 ${
          scrolled 
            ? 'glass-panel bg-[#0d111a]/85 border-white/[0.08] shadow-2xl py-2 px-4 sm:px-6' 
            : 'bg-transparent py-3 px-2 sm:px-4'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo / Monogram & Photo */}
          <Link 
            href="#hero" 
            onClick={() => sound.playClick()}
            className="flex items-center gap-3 group"
          >
            <div className="relative w-9 h-9 rounded-xl overflow-hidden border border-white/10 group-hover:border-amber-400/50 group-hover:scale-105 transition-all bg-[#0d111a]">
              <Image
                src="/shivansh-profile.jpg"
                alt="Shivansh Tiwari"
                fill
                sizes="36px"
                className="object-cover object-top"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-medium text-sm text-slate-100 tracking-tight group-hover:text-amber-300 transition-colors">
                Shivansh Tiwari
              </span>
              <span className="text-[10px] text-slate-400 flex items-center gap-1.5 font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Open for Opportunities
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleNavClick}
                className="px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white rounded-lg hover:bg-white/[0.05] transition-all"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Action Tools */}
          <div className="flex items-center gap-2">
            {/* Terminal Drawer trigger */}
            <button
              onClick={triggerTerminal}
              aria-label="Open Interactive Developer Terminal"
              title="Open Terminal (CLI View)"
              className="p-2 rounded-lg text-slate-400 hover:text-amber-400 hover:bg-white/[0.05] transition-colors border border-transparent hover:border-white/10"
            >
              <Terminal className="w-4 h-4" />
            </button>

            {/* Sound Toggle */}
            <button
              onClick={toggleSound}
              aria-label={isMuted ? 'Unmute UI sounds' : 'Mute UI sounds'}
              title={isMuted ? 'Sound muted (click to enable)' : 'Sound enabled (click to mute)'}
              className="p-2 rounded-lg text-slate-400 hover:text-amber-400 hover:bg-white/[0.05] transition-colors border border-transparent hover:border-white/10"
            >
              {isMuted ? <VolumeX className="w-4 h-4 text-slate-500" /> : <Volume2 className="w-4 h-4 text-amber-400" />}
            </button>

            {/* Command Palette Button */}
            <button
              onClick={triggerCommandPalette}
              className="hidden sm:flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-mono text-slate-400 hover:text-white bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.08] rounded-lg transition-all"
            >
              <Command className="w-3.5 h-3.5 text-amber-400" />
              <span className="text-[11px]">⌘K</span>
            </button>

            {/* Resume / Connect */}
            <a
              href="#contact"
              onClick={() => sound.playChime()}
              className="hidden lg:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-900 bg-amber-400 hover:bg-amber-300 transition-colors shadow-sm shadow-amber-500/20"
            >
              <Sparkles className="w-3 h-3 text-slate-900" />
              Get In Touch
            </a>

            {/* Mobile Hamburger */}
            <button
              onClick={() => {
                sound.playPop();
                setMobileOpen(!mobileOpen);
              }}
              className="md:hidden p-2 text-slate-300 hover:text-white rounded-lg hover:bg-white/[0.05]"
              aria-label="Toggle navigation menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileOpen && (
          <div className="md:hidden pt-4 pb-3 border-t border-white/[0.08] mt-3 flex flex-col gap-1 animate-in fade-in slide-in-from-top-2 duration-200">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleNavClick}
                className="px-3 py-2 text-sm font-medium text-slate-200 hover:text-amber-300 rounded-lg hover:bg-white/[0.05] transition-all flex items-center justify-between"
              >
                <span>{item.label}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-500" />
              </a>
            ))}
            <div className="pt-2 mt-2 border-t border-white/[0.06] flex items-center justify-between px-3">
              <button
                onClick={triggerCommandPalette}
                className="text-xs font-mono text-amber-400 flex items-center gap-1.5 py-1"
              >
                <Command className="w-3.5 h-3.5" />
                Quick Commands (⌘K)
              </button>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono text-slate-400 hover:text-white"
              >
                GitHub ↗
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
