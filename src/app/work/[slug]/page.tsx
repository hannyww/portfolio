import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { portfolioData } from "@/data/portfolio";
import { FloatingNav } from "@/components/FloatingNav";
import { DropInGuide } from "@/components/DropInGuide";
import { ArrowLeft, Calendar, MapPin, CheckCircle2, Cpu, Award } from "lucide-react";

interface PageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return portfolioData.experiences.map((exp) => ({
    slug: exp.slug,
  }));
}

export function generateMetadata({ params }: PageProps) {
  const exp = portfolioData.experiences.find((item) => item.slug === params.slug);
  if (!exp) return { title: "Experience Not Found" };
  return {
    title: `${exp.title} at ${exp.subtitle} | Work`,
    description: exp.oneLineDescription,
  };
}

export default function WorkSubpage({ params }: PageProps) {
  const currentIndex = portfolioData.experiences.findIndex(
    (item) => item.slug === params.slug
  );

  if (currentIndex === -1) {
    notFound();
  }

  const exp = portfolioData.experiences[currentIndex];
  const prevExp = currentIndex > 0 ? portfolioData.experiences[currentIndex - 1] : null;
  const nextExp =
    currentIndex < portfolioData.experiences.length - 1
      ? portfolioData.experiences[currentIndex + 1]
      : null;

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-neutral-900 pb-28 pt-24 sm:pt-28">
      <FloatingNav />
      <DropInGuide />

      <main className="max-w-2xl mx-auto px-4 sm:px-6 space-y-8">
        {/* Navigation Breadcrumb */}
        <div>
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-xs font-mono font-medium text-neutral-500 hover:text-neutral-950 transition-colors px-3 py-1.5 rounded-full bg-white border border-neutral-200/80 shadow-sm"
          >
            <ArrowLeft className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Back to all work</span>
          </Link>
        </div>

        {/* Experience Header Card */}
        <section aria-labelledby="experience-title" className="rounded-3xl border border-neutral-200/90 bg-white p-6 sm:p-8 shadow-card">
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-neutral-500 mb-3">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-neutral-400" aria-hidden="true" />
              {exp.period}
            </span>
            <span className="text-neutral-300">•</span>
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-neutral-400" aria-hidden="true" />
              {exp.location}
            </span>
          </div>

          <h1 id="experience-title" className="text-2xl sm:text-3xl font-display font-bold text-neutral-900">
            {exp.title}
          </h1>
          <p className="text-base font-semibold text-neutral-600 mt-1 font-sans">
            {exp.subtitle}
          </p>

          <div className="mt-4 p-4 rounded-2xl bg-neutral-50 border border-neutral-200/70">
            <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 block mb-1 font-semibold">
              Summary
            </span>
            <p className="text-sm text-neutral-700 leading-relaxed font-sans">
              {exp.oneLineDescription}
            </p>
          </div>
        </section>

        {/* Hero Photo Card */}
        <section aria-label="Project Preview" className="rounded-3xl overflow-hidden border border-neutral-200/90 bg-white shadow-card">
          <div className="relative aspect-[16/9] w-full bg-neutral-100">
            <Image
              src={exp.photoSrc}
              alt={`${exp.title} showcase visual`}
              fill
              priority
              className="object-cover"
            />
          </div>
          <div className="p-4 bg-white border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-400 font-mono">
            <span>Showcase image file:</span>
            <span className="text-neutral-600">{exp.photoSrc}</span>
          </div>
        </section>

        {/* In-depth Overview */}
        <section aria-labelledby="overview-heading" className="rounded-3xl border border-neutral-200/90 bg-white p-6 sm:p-8 shadow-card space-y-4">
          <h2 id="overview-heading" className="text-lg font-display font-semibold text-neutral-900">
            Overview & Context
          </h2>
          <p className="text-sm sm:text-base text-neutral-700 leading-relaxed font-sans">
            {exp.fullSubpage.overview}
          </p>
        </section>

        {/* Highlights and Contributions */}
        <section aria-labelledby="contributions-heading" className="rounded-3xl border border-neutral-200/90 bg-white p-6 sm:p-8 shadow-card space-y-4">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-neutral-800" aria-hidden="true" />
            <h2 id="contributions-heading" className="text-lg font-display font-semibold text-neutral-900">
              Key Contributions & Highlights
            </h2>
          </div>
          <ul className="space-y-3 pt-1">
            {exp.fullSubpage.highlights.map((point, idx) => (
              <li key={idx} className="flex items-start gap-3 text-sm text-neutral-700 leading-relaxed">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-neutral-100 text-[11px] font-mono font-medium text-neutral-600 mt-0.5">
                  {idx + 1}
                </span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Technologies & Learnings */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <section aria-labelledby="technologies-heading" className="rounded-3xl border border-neutral-200/90 bg-white p-6 shadow-card space-y-3">
            <div className="flex items-center gap-2">
              <Cpu className="w-4 h-4 text-neutral-600" aria-hidden="true" />
              <h2 id="technologies-heading" className="text-sm font-display font-semibold text-neutral-900">
                Technologies & Tools
              </h2>
            </div>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {exp.fullSubpage.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-lg text-xs font-mono bg-neutral-100 text-neutral-700 border border-neutral-200/60"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>

          <section aria-labelledby="takeaways-heading" className="rounded-3xl border border-neutral-200/90 bg-white p-6 shadow-card space-y-3">
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-neutral-600" aria-hidden="true" />
              <h2 id="takeaways-heading" className="text-sm font-display font-semibold text-neutral-900">
                Outcomes & Impact
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed pt-1">
              {exp.fullSubpage.outcomes}
            </p>
          </section>
        </div>

        {/* Subpage Pagination */}
        <nav aria-label="Experiences pagination" className="pt-4 flex items-center justify-between gap-4">
          {prevExp ? (
            <Link
              href={`/work/${prevExp.slug}`}
              className="flex-1 p-4 rounded-2xl bg-white border border-neutral-200/80 hover:border-neutral-300 transition-colors shadow-sm"
            >
              <span className="text-[11px] font-mono text-neutral-400 block mb-0.5">
                Previous Role
              </span>
              <span className="text-xs sm:text-sm font-display font-semibold text-neutral-900 block truncate">
                {prevExp.title}
              </span>
            </Link>
          ) : (
            <div className="flex-1" />
          )}

          {nextExp ? (
            <Link
              href={`/work/${nextExp.slug}`}
              className="flex-1 p-4 rounded-2xl bg-white border border-neutral-200/80 hover:border-neutral-300 transition-colors text-right shadow-sm"
            >
              <span className="text-[11px] font-mono text-neutral-400 block mb-0.5">
                Next Role
              </span>
              <span className="text-xs sm:text-sm font-display font-semibold text-neutral-900 block truncate">
                {nextExp.title}
              </span>
            </Link>
          ) : (
            <div className="flex-1" />
          )}
        </nav>
      </main>
    </div>
  );
}
