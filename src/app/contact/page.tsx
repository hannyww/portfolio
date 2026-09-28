import { FloatingNav } from "@/components/FloatingNav";
import { DropInGuide } from "@/components/DropInGuide";
import { IMessageChat } from "@/components/IMessageChat";
import { MailComposeCard } from "@/components/MailComposeCard";
import { ContactActions } from "@/components/ContactActions";
import { MessageSquareText } from "lucide-react";

export const metadata = {
  title: "Contact & Connect | Portfolio",
  description: "Get in touch via iMessage prompt, direct email composer, or social channels.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] text-neutral-900 pb-28 pt-24 sm:pt-28">
      <FloatingNav />
      <DropInGuide />

      <main className="max-w-2xl mx-auto px-4 sm:px-6 space-y-8">
        {/* Contact Intro Card */}
        <section aria-label="Contact options header" className="rounded-3xl border border-neutral-200/90 bg-white p-6 sm:p-8 shadow-card">
          <div className="flex items-center gap-2 mb-1">
            <MessageSquareText className="w-4 h-4 text-neutral-500" aria-hidden="true" />
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">
              Get in Touch
            </span>
          </div>
          <h1 className="text-3xl font-display font-bold text-neutral-900">
            Let&apos;s Connect
          </h1>
          <p className="mt-2 text-sm sm:text-base text-neutral-600 leading-relaxed font-sans">
            Choose your preferred way to connect: send a quick prompt via the interactive iMessage card,
            draft a note in the Mail compose window, or copy my email address directly.
          </p>
        </section>

        {/* 1. iMessage-style chat prompt */}
        <div className="space-y-2">
          <div className="flex items-center justify-between px-1">
            <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 font-semibold">
              Interactive iMessage Chat
            </span>
            <span className="text-[11px] font-mono text-neutral-400">Quick Prompts</span>
          </div>
          <IMessageChat />
        </div>

        {/* 2. Mail-compose-style card */}
        <div className="space-y-2">
          <div className="flex items-center justify-between px-1">
            <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 font-semibold">
              Mail Compose Card
            </span>
            <span className="text-[11px] font-mono text-neutral-400">macOS Mail Window</span>
          </div>
          <MailComposeCard />
        </div>

        {/* 3. Direct Contact Button & Links */}
        <ContactActions />
      </main>
    </div>
  );
}
