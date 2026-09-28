"use client";

import { useState } from "react";
import { Mail, Paperclip, Send, Copy, Check, Bold, Italic } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export function MailComposeCard() {
  const { personal, contact } = portfolioData;

  const [fromEmail, setFromEmail] = useState("");
  const [subject, setSubject] = useState(contact.subjectDefault);
  const [message, setMessage] = useState(
    "Hi " + personal.name + ",\n\nI came across your portfolio and wanted to get in touch regarding..."
  );
  const [copied, setCopied] = useState(false);

  const handleSendMail = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${encodeURIComponent(contact.email)}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(message + (fromEmail ? `\n\nFrom: ${fromEmail}` : ""))}`;
    window.location.href = mailtoUrl;
  };

  const handleCopyDraft = () => {
    const fullDraft = `To: ${contact.email}\nSubject: ${subject}\n\n${message}`;
    navigator.clipboard.writeText(fullDraft);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      aria-labelledby="mail-compose-title"
      className="rounded-3xl border border-neutral-200/90 bg-white shadow-card overflow-hidden"
    >
      {/* macOS Window Title Bar */}
      <div className="bg-neutral-100/90 border-b border-neutral-200/80 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {/* Traffic lights */}
          <span className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]/50" />
          <span className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]/50" />
          <span className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]/50" />
          <span className="ml-2 text-xs font-mono font-medium text-neutral-500">
            Mail.app
          </span>
        </div>

        <div className="flex items-center gap-1.5 text-xs font-mono text-neutral-400">
          <Mail className="w-3.5 h-3.5" aria-hidden="true" />
          <h2 id="mail-compose-title" className="text-xs font-medium text-neutral-700 font-sans">
            New Message
          </h2>
        </div>

        <div className="w-12" />
      </div>

      {/* Form Fields */}
      <form onSubmit={handleSendMail} className="p-4 sm:p-6 space-y-3">
        {/* To field */}
        <div className="flex items-center gap-3 pb-2 border-b border-neutral-100 text-xs sm:text-sm">
          <label htmlFor="to-email-input" className="w-14 font-mono text-neutral-400 font-medium shrink-0">
            To:
          </label>
          <div className="flex-1 flex items-center justify-between">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-neutral-100 text-neutral-800 font-medium border border-neutral-200 text-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-neutral-900" />
              {personal.name} &lt;{contact.email}&gt;
            </span>
            <span className="text-[11px] font-mono text-neutral-400 hidden sm:inline">
              Recipient
            </span>
          </div>
        </div>

        {/* From field */}
        <div className="flex items-center gap-3 pb-2 border-b border-neutral-100 text-xs sm:text-sm">
          <label htmlFor="from-email-input" className="w-14 font-mono text-neutral-400 font-medium shrink-0">
            From:
          </label>
          <input
            id="from-email-input"
            type="email"
            value={fromEmail}
            onChange={(e) => setFromEmail(e.target.value)}
            placeholder="your.email@example.com (optional)"
            className="flex-1 bg-transparent text-neutral-800 placeholder-neutral-400 focus:outline-none text-xs sm:text-sm"
          />
        </div>

        {/* Subject field */}
        <div className="flex items-center gap-3 pb-2 border-b border-neutral-100 text-xs sm:text-sm">
          <label htmlFor="subject-input" className="w-14 font-mono text-neutral-400 font-medium shrink-0">
            Subject:
          </label>
          <input
            id="subject-input"
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="Subject of your message"
            className="flex-1 bg-transparent font-medium text-neutral-900 placeholder-neutral-400 focus:outline-none text-xs sm:text-sm"
          />
        </div>

        {/* Formatting Toolbar */}
        <div className="flex items-center gap-2 py-1 text-neutral-400 border-b border-neutral-100">
          <button
            type="button"
            className="p-1 rounded hover:bg-neutral-100 text-neutral-500 hover:text-neutral-800"
            title="Bold formatting note"
            aria-label="Bold format"
          >
            <Bold className="w-3.5 h-3.5" aria-hidden="true" />
          </button>
          <button
            type="button"
            className="p-1 rounded hover:bg-neutral-100 text-neutral-500 hover:text-neutral-800"
            title="Italic formatting note"
            aria-label="Italic format"
          >
            <Italic className="w-3.5 h-3.5" aria-hidden="true" />
          </button>
          <button
            type="button"
            className="p-1 rounded hover:bg-neutral-100 text-neutral-500 hover:text-neutral-800"
            title="Attachment"
            aria-label="Attachment icon"
          >
            <Paperclip className="w-3.5 h-3.5" aria-hidden="true" />
          </button>
          <span className="text-[11px] font-mono text-neutral-400 ml-auto">
            Plain Text Mode
          </span>
        </div>

        {/* Text Area */}
        <div className="pt-2">
          <label htmlFor="message-body" className="sr-only">
            Message Body
          </label>
          <textarea
            id="message-body"
            rows={6}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full bg-transparent text-sm leading-relaxed text-neutral-800 placeholder-neutral-400 focus:outline-none resize-none font-sans"
            placeholder="Type your message here..."
          />
        </div>

        {/* Bottom Actions Bar */}
        <div className="pt-4 border-t border-neutral-100 flex flex-wrap items-center justify-between gap-3">
          <button
            type="button"
            onClick={handleCopyDraft}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-neutral-600 bg-neutral-100 hover:bg-neutral-200/70 border border-neutral-200/80 transition-colors"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" aria-hidden="true" />
                <span className="text-emerald-700">Draft Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Copy Draft</span>
              </>
            )}
          </button>

          <button
            type="submit"
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-semibold bg-neutral-900 text-white hover:bg-neutral-800 transition-colors shadow-sm"
          >
            <Send className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Open in Mail App</span>
          </button>
        </div>
      </form>
    </section>
  );
}
