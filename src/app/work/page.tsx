import { portfolioData } from "@/data/portfolio";
import { FloatingNav } from "@/components/FloatingNav";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, Calendar, MapPin } from "lucide-react";

export const metadata = {
  title: "Work & Experience | Hanny Wu",
  description: "A closer look at the roles, initiatives, clubs, and projects that have shaped who I am",
};

export default function WorkPage() {
  const { experiences } = portfolioData;

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-neutral-900 pb-28 pt-24 sm:pt-28">
      <FloatingNav />

      <main className="max-w-2xl mx-auto px-4 sm:px-6 space-y-8">
        {/* Work Header Card */}
        <section aria-label="Work overview" className="rounded-3xl border border-neutral-200/90 bg-white p-6 sm:p-8 shadow-card">
          <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 block mb-1">
            Experience
          </span>
          <h1 className="text-3xl font-display font-bold text-neutral-900">
            Work &amp; Experience
          </h1>
          <p className="mt-3 text-sm sm:text-base text-neutral-600 leading-relaxed font-sans">
            A closer look at the roles, initiatives, clubs, and projects that have shaped who I am. My takeaways from each experience, beyond just a surface-level resume entry.
          </p>
        </section>

        {/* Experiences List */}
        <section aria-labelledby="experiences-heading" className="space-y-4">
          <div className="flex items-center justify-between px-1">
            <h2 id="experiences-heading" className="text-xs font-mono uppercase tracking-wider text-neutral-400 font-semibold">
              Selected Experiences
            </h2>
            <span className="text-[11px] font-mono text-neutral-400">
              {experiences.length} roles
            </span>
          </div>

          <div className="space-y-4">
            {experiences.map((exp) => (
              <article
                key={exp.id}
                className="group rounded-3xl border border-neutral-200/90 bg-white p-5 sm:p-6 shadow-card hover:shadow-card-hover transition-all duration-300"
              >
                <Link
                  href={`/work/${exp.slug}`}
                  className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 rounded-2xl"
                >
                  <div className="flex flex-col sm:flex-row gap-5">
                    {/* Logo / Photo */}
                    <div className="relative w-full sm:w-44 aspect-[16/10] sm:aspect-[4/3] rounded-2xl overflow-hidden bg-neutral-100 border border-neutral-200/60 shrink-0">
                      <Image
                        src={exp.photoSrc}
                        alt={`${exp.subtitle} logo`}
                        fill
                        sizes="(max-width: 640px) 100vw, 176px"
                        className="object-contain p-3 transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    {/* Content */}
                    <div className="flex-1 flex flex-col justify-between min-w-0">
                      <div>
                        <div className="flex items-start justify-between gap-2">
                          <h3 className="text-lg font-display font-bold text-neutral-900 group-hover:text-neutral-600 transition-colors">
                            {exp.title}
                          </h3>
                          <span className="p-1 rounded-full text-neutral-400 group-hover:text-neutral-900 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all">
                            <ArrowRight className="w-4 h-4" aria-hidden="true" />
                          </span>
                        </div>

                        <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-neutral-500 mt-1">
                          <span className="text-neutral-800 font-semibold">{exp.subtitle}</span>
                          <span className="text-neutral-300">•</span>
                          <span className="flex items-center gap-1 font-mono text-[11px]">
                            <Calendar className="w-3 h-3 text-neutral-400" aria-hidden="true" />
                            {exp.period}
                          </span>
                          <span className="text-neutral-300">•</span>
                          <span className="flex items-center gap-1 font-mono text-[11px]">
                            <MapPin className="w-3 h-3 text-neutral-400" aria-hidden="true" />
                            {exp.location}
                          </span>
                        </div>

                        <p className="mt-3 text-sm text-neutral-600 leading-relaxed line-clamp-2">
                          {exp.oneLineDescription}
                        </p>
                      </div>

                      <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center justify-between text-xs">
                        <span className="font-mono text-[11px] text-neutral-400">
                          {exp.fullSubpage.technologies.slice(0, 3).join(", ")}
                        </span>
                        <span className="font-semibold text-neutral-900 group-hover:underline inline-flex items-center gap-1">
                          Read fuller subpage
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </section>

        {/* What's Next */}
        <section aria-label="What's next">
          <Link
            href="/whats-next"
            className="group block rounded-3xl border border-neutral-200/90 bg-white p-6 sm:p-8 shadow-card hover:shadow-card-hover transition-all duration-300"
          >
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 block mb-1">
                  Coming Up
                </span>
                <h2 className="text-2xl font-display font-bold text-neutral-900 group-hover:text-neutral-600 transition-colors">
                  What&apos;s Next
                </h2>
                <p className="mt-2 text-sm text-neutral-500 leading-relaxed">
                  Where I am headed and what I am building toward.
                </p>
              </div>
              <ArrowUpRight className="w-6 h-6 text-neutral-400 group-hover:text-neutral-900 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" aria-hidden="true" />
            </div>
          </Link>
        </section>
      </main>
    </div>
  );
}
