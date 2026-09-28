import { FloatingNav } from "@/components/FloatingNav";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "What's Next | Hanny Wu",
  description: "Where I am headed and what I am building toward.",
};

export default function WhatsNextPage() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] text-neutral-900 pb-28 pt-24 sm:pt-28">
      <FloatingNav />

      <main className="max-w-2xl mx-auto px-4 sm:px-6 space-y-8">
        {/* Back */}
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-xs font-mono text-neutral-500 hover:text-neutral-900 transition-colors group"
        >
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" aria-hidden="true" />
          Back to Work
        </Link>

        {/* Header */}
        <section className="rounded-3xl border border-neutral-200/90 bg-white p-6 sm:p-8 shadow-card">
          <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 block mb-1">
            Coming Up
          </span>
          <h1 className="text-3xl sm:text-4xl font-display font-bold text-neutral-900">
            What&apos;s Next
          </h1>
          <p className="mt-3 text-sm sm:text-base text-neutral-600 leading-relaxed">
            Where I am headed and what I am building toward.
          </p>
        </section>

        {/* Content placeholder */}
        <section className="rounded-3xl border border-dashed border-neutral-300 bg-neutral-50 p-8 text-center space-y-3">
          <p className="text-sm font-display font-semibold text-neutral-700">
            Coming soon
          </p>
          <p className="text-xs font-mono text-neutral-400">
            Tell me what you want here and I will build it out.
          </p>
        </section>
      </main>
    </div>
  );
}
