import { portfolioData } from "@/data/portfolio";
import { FloatingNav } from "@/components/FloatingNav";
import { WhyFinanceGallery } from "@/components/WhyFinanceGallery";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Why Finance | Hanny Wu",
  description:
    "Discovered finance through engineering and impact",
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
            Click any card to reveal what it means to me.
          </p>
        </section>

        {/* Interactive photo gallery */}
        <WhyFinanceGallery photos={whyFinancePhotos} />
      </main>
    </div>
  );
}
