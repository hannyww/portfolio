import { portfolioData } from "@/data/portfolio";
import { PhotoCardGallery } from "@/components/PhotoCardGallery";
import { MediaCard } from "@/components/MediaCard";
import { FloatingNav } from "@/components/FloatingNav";
import { DropInGuide } from "@/components/DropInGuide";
import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";

export default function AboutPage() {
  const { personal, aboutPhotos, media } = portfolioData;

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-neutral-900 pb-28 pt-24 sm:pt-28">
      <FloatingNav />
      <DropInGuide />

      <main className="max-w-2xl mx-auto px-4 sm:px-6 space-y-8">
        {/* Header Hero Card */}
        <section aria-label="Introduction" className="rounded-3xl border border-neutral-200/90 bg-white p-6 sm:p-8 shadow-card">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-neutral-100">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 block mb-1">
                Portfolio & Index
              </span>
              <h1 className="text-3xl sm:text-4xl font-display font-bold tracking-tight text-neutral-900">
                {personal.name}
              </h1>
            </div>

            <div className="flex items-center gap-2 self-start sm:self-auto text-xs font-mono text-neutral-500 bg-neutral-100/80 px-3 py-1.5 rounded-full border border-neutral-200/60">
              <MapPin className="w-3.5 h-3.5 text-neutral-600" aria-hidden="true" />
              <span>{personal.location}</span>
            </div>
          </div>

          {/* One-line status: current role/interest + previous roles (bold) */}
          <div className="pt-6">
            <p className="text-base sm:text-lg text-neutral-700 leading-relaxed font-sans">
              Currently {personal.status.currentRole}. Previously at{" "}
              {personal.status.previousRoles.map((role, idx, arr) => (
                <span key={role}>
                  <strong className="font-semibold text-neutral-950 font-display">
                    {role}
                  </strong>
                  {idx < arr.length - 2
                    ? ", "
                    : idx === arr.length - 2
                    ? ", and "
                    : "."}
                </span>
              ))}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3 pt-4 border-t border-neutral-100">
              <Link
                href="/work"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold bg-neutral-900 text-white hover:bg-neutral-800 transition-colors"
              >
                <span>View Real Experiences</span>
                <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-medium bg-neutral-100 text-neutral-800 hover:bg-neutral-200/70 border border-neutral-200/80 transition-colors"
              >
                <span>Send a message</span>
              </Link>
              {personal.socials.github && (
                <a
                  href={personal.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-neutral-500 hover:text-neutral-900 transition-colors ml-auto"
                >
                  github/{personal.handle}
                </a>
              )}
            </div>
          </div>
        </section>

        {/* Clickable Photos with Reveal Captions */}
        <section aria-labelledby="photos-heading" className="space-y-3">
          <div className="flex items-center justify-between px-1">
            <h2 id="photos-heading" className="text-xs font-mono uppercase tracking-wider text-neutral-400">
              Moments & Workspace (Click to reveal caption)
            </h2>
            <span className="text-[11px] font-mono text-neutral-400">Interactive</span>
          </div>
          <PhotoCardGallery photos={aboutPhotos} />
        </section>

        {/* Currently Listening / Reading Card */}
        <MediaCard media={media} />
      </main>
    </div>
  );
}
