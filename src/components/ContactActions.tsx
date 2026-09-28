"use client";

import { useState } from "react";
import { Mail, Copy, Check, FileDown, ArrowUpRight } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export function ContactActions() {
  const { personal, contact } = portfolioData;
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      aria-labelledby="direct-contact-title"
      className="rounded-3xl border border-neutral-200/90 bg-white p-6 sm:p-8 shadow-card space-y-6"
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-neutral-100">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 block mb-1">
            Direct Line
          </span>
          <h2 id="direct-contact-title" className="text-xl font-display font-bold text-neutral-900">
            Quick Connect & Links
          </h2>
          <p className="text-xs sm:text-sm text-neutral-500 mt-1">
            Always open to conversations regarding software, product engineering, and advisory.
          </p>
        </div>

        {/* Primary Contact Button */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={copyEmail}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold bg-neutral-900 text-white hover:bg-neutral-800 transition-all shadow-sm active:scale-95"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" aria-hidden="true" />
                <span>Email Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Copy Email Address</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Grid of Contact Alternatives */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {/* Email Direct Link */}
        <a
          href={`mailto:${contact.email}`}
          className="flex items-center justify-between p-4 rounded-2xl bg-neutral-50/80 border border-neutral-200/70 hover:bg-neutral-100/70 hover:border-neutral-300 transition-all"
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-white border border-neutral-200/80 flex items-center justify-center text-neutral-700 shadow-xs">
              <Mail className="w-4 h-4" aria-hidden="true" />
            </div>
            <div>
              <span className="text-xs font-semibold text-neutral-900 block font-display">
                Send Direct Email
              </span>
              <span className="text-[11px] font-mono text-neutral-500 block truncate">
                {contact.email}
              </span>
            </div>
          </div>
          <ArrowUpRight className="w-4 h-4 text-neutral-400" aria-hidden="true" />
        </a>

        {/* Resume PDF Download */}
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between p-4 rounded-2xl bg-neutral-50/80 border border-neutral-200/70 hover:bg-neutral-100/70 hover:border-neutral-300 transition-all"
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-white border border-neutral-200/80 flex items-center justify-center text-neutral-700 shadow-xs">
              <FileDown className="w-4 h-4" aria-hidden="true" />
            </div>
            <div>
              <span className="text-xs font-semibold text-neutral-900 block font-display">
                Download Resume
              </span>
              <span className="text-[11px] font-mono text-neutral-500 block">
                public/resume.pdf
              </span>
            </div>
          </div>
          <ArrowUpRight className="w-4 h-4 text-neutral-400" aria-hidden="true" />
        </a>

        {/* GitHub Link */}
        {personal.socials.github && (
          <a
            href={personal.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-4 rounded-2xl bg-neutral-50/80 border border-neutral-200/70 hover:bg-neutral-100/70 hover:border-neutral-300 transition-all"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-white border border-neutral-200/80 flex items-center justify-center text-neutral-700 shadow-xs">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </div>
              <div>
                <span className="text-xs font-semibold text-neutral-900 block font-display">
                  GitHub Profile
                </span>
                <span className="text-[11px] font-mono text-neutral-500 block">
                  github.com/{personal.handle}
                </span>
              </div>
            </div>
            <ArrowUpRight className="w-4 h-4 text-neutral-400" aria-hidden="true" />
          </a>
        )}

        {/* LinkedIn Link */}
        {personal.socials.linkedin && (
          <a
            href={personal.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-4 rounded-2xl bg-neutral-50/80 border border-neutral-200/70 hover:bg-neutral-100/70 hover:border-neutral-300 transition-all"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-white border border-neutral-200/80 flex items-center justify-center text-neutral-700 shadow-xs">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
              </div>
              <div>
                <span className="text-xs font-semibold text-neutral-900 block font-display">
                  LinkedIn Network
                </span>
                <span className="text-[11px] font-mono text-neutral-500 block">
                  Connect professionally
                </span>
              </div>
            </div>
            <ArrowUpRight className="w-4 h-4 text-neutral-400" aria-hidden="true" />
          </a>
        )}
      </div>
    </section>
  );
}
