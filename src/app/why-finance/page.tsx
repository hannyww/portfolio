import { portfolioData } from "@/data/portfolio";
import { FloatingNav } from "@/components/FloatingNav";
import { WhyFinanceGallery } from "@/components/WhyFinanceGallery";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "My Why Finance Story | Hanny Wu",
  description:
    "The moments and ideas that shaped my interest in finance and operations research.",
};

export default function WhyFinancePage() {
  const { whoAmI, whyFinancePhotos } = portfolioData;

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-neutral-900 pb-28 pt-24 sm:pt-28">
      <FloatingNav />

      <main className="max-w-2xl mx-auto px-4 sm:px-6 space-y-8">
        {/* Back button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-mono text-neutral-500 hover:text-neutral-900 transition-colors group"
        >
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" aria-hidden="true" />
          Back to About
        </Link>

        {/* Header */}
        <section aria-label="Why Finance header" className="rounded-3xl border border-neutral-200/90 bg-white p-6 sm:p-8 shadow-card">
          <div className="flex flex-col gap-3">
            <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-400">
              Personal Story
            </span>
            <h1 className="text-3xl sm:text-4xl font-display font-bold tracking-tight text-neutral-900">
              {whoAmI.whyFinance.title}
            </h1>
            <p className="text-sm text-neutral-500 leading-relaxed max-w-prose">
              {whoAmI.whyFinance.tagline}
            </p>
          </div>

          <p className="mt-5 pt-5 border-t border-neutral-100 text-sm text-neutral-600 leading-relaxed">
            Each picture below is a moment or idea that shapes why I care about
            finance. Click any card to reveal what it means to me.
          </p>
        </section>

        {/* Interactive photo gallery */}
        <WhyFinanceGallery photos={whyFinancePhotos} />

        {/* Drop-in instructions */}
        <div className="rounded-2xl border border-dashed border-neutral-300 bg-neutral-50 p-5 text-xs font-mono text-neutral-500 space-y-1">
          <p className="font-semibold text-neutral-700">How to add your own photos</p>
          <p>Drop images named why-finance-1.jpg through why-finance-5.jpg into</p>
          <p className="text-neutral-400">public/photos/</p>
          <p className="pt-2 text-[11px]">Edit captions and badges in src/data/portfolio.ts under whyFinancePhotos</p>
        </div>
      </main>
    </div>
  );
}
