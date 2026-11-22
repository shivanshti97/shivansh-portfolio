'use client';

import React, { useState } from 'react';
import { 
  Mail, 
  Copy, 
  Check, 
  Send, 
  Github, 
  Linkedin, 
  Cloud, 
  Sparkles,
  ArrowUpRight,
  Phone,
  MessageSquare
} from 'lucide-react';
import { PERSONAL_INFO } from '@/data/portfolio-data';
import { sound } from '@/lib/utils';

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const copyEmail = () => {
    sound.playChime();
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const copyPhone = () => {
    sound.playChime();
    navigator.clipboard.writeText(PERSONAL_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sound.playChime();
    setSubmitted(true);
    // Open user's default email client pre-filled
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formState.name}`);
    const body = encodeURIComponent(`Hi Shivansh,\n\n${formState.message}\n\nFrom: ${formState.name} (${formState.email})`);
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative border-t border-white/[0.05]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Contact Narrative */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-widest text-amber-400">
                08 / Let&apos;s Connect
              </span>
              <h2 className="font-editorial text-4xl sm:text-5xl text-white font-light">
                Initiate a Conversation
              </h2>
            </div>

            <p className="text-slate-300 text-base leading-relaxed font-light">
              I am actively seeking Software Engineering and Frontend Developer internships for 2026/2027. Whether you want to discuss an open role, an AWS community event, a technical collaboration, or simply share thoughts on AI systems—my inbox and phone are always open.
            </p>

            {/* Quick copy contacts */}
            <div className="space-y-3">
              {/* Email box */}
              <div className="p-4 rounded-2xl glass-panel border-white/[0.08] space-y-2">
                <span className="text-xs font-mono text-slate-400 block uppercase tracking-wider">
                  Direct Email
                </span>
                <div className="flex items-center justify-between gap-3">
                  <a 
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="text-sm font-mono text-amber-300 hover:text-amber-200 transition-colors truncate"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                  <button
                    onClick={copyEmail}
                    className="px-3 py-1.5 rounded-lg text-xs font-mono flex items-center gap-1.5 bg-white/[0.05] hover:bg-white/[0.1] text-slate-200 border border-white/[0.1] transition-all shrink-0"
                    title="Copy Email"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-slate-400" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Phone / WhatsApp box */}
              <div className="p-4 rounded-2xl glass-panel border-white/[0.08] space-y-2">
                <span className="text-xs font-mono text-slate-400 block uppercase tracking-wider">
                  Contact Number / WhatsApp
                </span>
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-emerald-400" />
                    <a 
                      href={`tel:${PERSONAL_INFO.phone}`}
                      className="text-sm font-mono text-slate-200 hover:text-emerald-300 transition-colors"
                    >
                      {PERSONAL_INFO.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <a
                      href={`https://wa.me/919310370585?text=Hi%20Shivansh,%20I%20saw%20your%20portfolio!`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-2.5 py-1.5 rounded-lg text-xs font-mono flex items-center gap-1 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 transition-all"
                      title="Chat on WhatsApp"
                    >
                      <MessageSquare className="w-3 h-3" />
                      <span>WhatsApp</span>
                    </a>
                    <button
                      onClick={copyPhone}
                      className="px-2.5 py-1.5 rounded-lg text-xs font-mono flex items-center gap-1 bg-white/[0.05] hover:bg-white/[0.1] text-slate-200 border border-white/[0.1] transition-all shrink-0"
                      title="Copy Phone"
                    >
                      {copiedPhone ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="text-emerald-400">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 text-slate-400" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Social channels */}
            <div className="space-y-2 pt-1">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block">
                Verified Social Channels
              </span>
              <div className="flex flex-col gap-2">
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => sound.playClick()}
                  className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.06] text-sm text-slate-300 hover:text-white transition-all group"
                >
                  <div className="flex items-center gap-2.5">
                    <Linkedin className="w-4 h-4 text-sky-400" />
                    <span>LinkedIn Profile</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-amber-400" />
                </a>

                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => sound.playClick()}
                  className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.06] text-sm text-slate-300 hover:text-white transition-all group"
                >
                  <div className="flex items-center gap-2.5">
                    <Github className="w-4 h-4 text-slate-400" />
                    <span>GitHub Repositories (@shivanshti97)</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-amber-400" />
                </a>

                <a
                  href={PERSONAL_INFO.awsBuilder}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => sound.playClick()}
                  className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.06] text-sm text-slate-300 hover:text-white transition-all group"
                >
                  <div className="flex items-center gap-2.5">
                    <Cloud className="w-4 h-4 text-amber-500" />
                    <span>AWS Builder Center Community</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-amber-400" />
                </a>
              </div>
            </div>
          </div>

          {/* Interactive Contact Form */}
          <div className="lg:col-span-7 glass-panel p-6 sm:p-8 md:p-10 rounded-3xl border-white/[0.1] bg-[#0c101a]/95">
            <h3 className="text-xl font-medium text-white mb-2">
              Send a Direct Message
            </h3>
            <p className="text-xs text-slate-400 mb-6 font-light">
              Submit your message below. It generates a pre-formatted dispatch directly to {PERSONAL_INFO.email}.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-1.5">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Maya Lin"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] focus:border-amber-400/50 focus:outline-none text-sm text-white placeholder-slate-500 transition-all font-light"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-1.5">
                  Your Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="e.g. maya@company.com"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] focus:border-amber-400/50 focus:outline-none text-sm text-white placeholder-slate-500 transition-all font-light"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-1.5">
                  Message or Opportunity Details
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Tell me about the role, project, or topic you'd like to collaborate on..."
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] focus:border-amber-400/50 focus:outline-none text-sm text-white placeholder-slate-500 transition-all font-light resize-none"
                />
              </div>

              <button
                type="submit"
                onClick={() => sound.playChime()}
                className="w-full py-3.5 rounded-xl text-sm font-medium text-slate-950 bg-amber-400 hover:bg-amber-300 transition-all flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 font-sans"
              >
                <Send className="w-4 h-4 text-slate-950" />
                <span>Send Dispatch</span>
              </button>

              {submitted && (
                <p className="text-xs font-mono text-emerald-400 text-center pt-2">
                  ✓ Dispatch initiated! Opening your default email client.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
