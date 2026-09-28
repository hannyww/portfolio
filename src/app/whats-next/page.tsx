import { FloatingNav } from "@/components/FloatingNav";
import Link from "next/link";
import { ArrowLeft, Mail } from "lucide-react";

export const metadata = {
  title: "What's Next | Hanny Wu",
  description: "Where I am headed and what I am building toward.",
};

export default function WhatsNextPage() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] text-neutral-900 pb-28 pt-24 sm:pt-28">
      <FloatingNav />

      <main className="max-w-2xl mx-auto px-4 sm:px-6 space-y-6">
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

        {/* Main content */}
        <section className="rounded-3xl border border-neutral-200/90 bg-white p-6 sm:p-8 shadow-card space-y-5">
          <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
            I&apos;m an engineer who wants to build a career in investing. I bring a strong analytical background and the ability to build things, including this website. What I don&apos;t yet have is the finance training and industry relationships many other candidates start with.
          </p>
          <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
            As AI reshapes finance, I believe the strongest investors will pair financial judgment with the ability to understand and build technology. Recalc would give me the financial foundation, and I&apos;d bring a builder&apos;s mindset to the cohort.
          </p>
        </section>

        {/* Contact */}
        <section className="rounded-3xl border border-neutral-200/90 bg-white p-6 sm:p-8 shadow-card space-y-4">
          <h2 className="text-sm font-mono uppercase tracking-wider text-neutral-400 font-semibold">
            Get in touch
          </h2>

          <a
            href="mailto:hsw53@cornell.edu"
            className="flex items-center gap-3 group"
          >
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-neutral-100 border border-neutral-200/60 group-hover:bg-neutral-900 transition-colors">
              <Mail className="w-4 h-4 text-neutral-600 group-hover:text-white transition-colors" aria-hidden="true" />
            </div>
            <span className="text-sm font-mono text-neutral-700 group-hover:text-neutral-900 transition-colors">
              hsw53@cornell.edu
            </span>
          </a>

          <a
            href="https://www.linkedin.com/in/hannywu223/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 group"
          >
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-neutral-100 border border-neutral-200/60 group-hover:bg-[#0077B5] transition-colors">
              <svg className="w-4 h-4 text-neutral-600 group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </div>
            <span className="text-sm font-mono text-neutral-700 group-hover:text-neutral-900 transition-colors">
              linkedin.com/in/hannywu223
            </span>
          </a>
        </section>
      </main>
    </div>
  );
}
