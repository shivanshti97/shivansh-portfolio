'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Terminal as TerminalIcon, X, Maximize2, Minimize2, CornerDownLeft } from 'lucide-react';
import { sound } from '@/lib/utils';
import { PERSONAL_INFO } from '@/data/portfolio-data';

interface CommandOutput {
  command: string;
  output: string | React.ReactNode;
}

export const TerminalDrawer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<CommandOutput[]>([
    {
      command: 'init',
      output: (
        <div className="space-y-1 text-slate-300 text-xs font-mono">
          <p className="text-amber-400 font-bold">Shivansh Tiwari Developer Terminal v1.0.0</p>
          <p>Type <span className="text-amber-300">&apos;help&apos;</span> to view available commands.</p>
        </div>
      )
    }
  ]);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener('open-terminal', handleOpen);
    return () => window.removeEventListener('open-terminal', handleOpen);
  }, []);

  useEffect(() => {
    if (isOpen) {
      bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [history, isOpen]);

  if (!isOpen) return null;

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    sound.playClick();
    const cmd = inputVal.trim().toLowerCase();
    let res: React.ReactNode = '';

    switch (cmd) {
      case 'help':
        res = (
          <div className="space-y-1 text-slate-300 text-xs font-mono">
            <p><span className="text-amber-400">whoami</span> — Display bio and identity</p>
            <p><span className="text-amber-400">skills</span> — List core programming stack</p>
            <p><span className="text-amber-400">education</span> — Display academic credentials</p>
            <p><span className="text-amber-400">aws</span> — AWS Student Builder Group role details</p>
            <p><span className="text-amber-400">contact</span> — Get direct email and profiles</p>
            <p><span className="text-amber-400">clear</span> — Clear terminal output</p>
            <p><span className="text-amber-400">exit</span> — Close terminal</p>
          </div>
        );
        break;

      case 'whoami':
        res = `${PERSONAL_INFO.name} — B.Tech CSE (USICT GGSIPU, SGPA 8.7), AWS Student Builder Group Leader, Frontend Developer & Applied AI Enthusiast.`;
        break;

      case 'skills':
        res = 'Core: Next.js, React, TypeScript, Python, Tailwind CSS, Supabase, Git, AWS Cloud fundamentals.';
        break;

      case 'education':
        res = '• B.Tech in CSE at USICT, GGSIPU (2025–2028, SGPA: 8.7)\n• Diploma in Computer Engineering at DSEU (2022–2025, First Division with Distinction)';
        break;

      case 'aws':
        res = 'AWS Student Builder Group Leader — Organizing student workshops, mentoring cloud builders, active contributor on AWS Builder Center (@shivanshti97).';
        break;

      case 'contact':
        res = `Email: ${PERSONAL_INFO.email}\nPhone: ${PERSONAL_INFO.phone}\nGitHub: ${PERSONAL_INFO.github}\nLinkedIn: ${PERSONAL_INFO.linkedin}`;
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      case 'exit':
        setIsOpen(false);
        setInputVal('');
        return;

      default:
        res = `Command not recognized: '${cmd}'. Type 'help' for supported commands.`;
    }

    setHistory((prev) => [...prev, { command: inputVal, output: res }]);
    setInputVal('');
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-[95vw] sm:w-[480px] max-h-[460px] glass-panel bg-[#090c14]/95 border border-white/[0.12] rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-200">
      {/* Terminal Titlebar */}
      <div className="px-4 py-2.5 bg-black/60 border-b border-white/[0.08] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
          </div>
          <span className="text-xs font-mono text-slate-400 ml-2">shivansh@portfolio:~</span>
        </div>
        <button
          onClick={() => {
            sound.playPop();
            setIsOpen(false);
          }}
          className="p-1 rounded text-slate-400 hover:text-white"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Terminal Output Body */}
      <div className="flex-1 p-4 overflow-y-auto space-y-3 font-mono text-xs max-h-[340px]">
        {history.map((h, i) => (
          <div key={i} className="space-y-1">
            <div className="flex items-center gap-2 text-slate-400">
              <span className="text-amber-400">❯</span>
              <span>{h.command}</span>
            </div>
            <div className="text-slate-300 whitespace-pre-wrap pl-4 leading-relaxed">
              {h.output}
            </div>
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      {/* Terminal Command Input */}
      <form onSubmit={handleCommand} className="p-3 bg-black/40 border-t border-white/[0.08] flex items-center gap-2">
        <span className="text-amber-400 font-mono text-xs">❯</span>
        <input
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          placeholder="type 'help'..."
          className="flex-1 bg-transparent border-none text-xs font-mono text-white placeholder-slate-600 focus:outline-none"
        />
        <button type="submit" className="p-1 text-slate-400 hover:text-amber-400">
          <CornerDownLeft className="w-3.5 h-3.5" />
        </button>
      </form>
    </div>
  );
};
