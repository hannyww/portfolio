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

          {/* First Blurb Text */}
          <div className="pt-6">
            <p className="text-base sm:text-lg text-neutral-800 leading-relaxed font-sans">
              {personal.bio || (
                <>
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
                </>
              )}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3 pt-4 border-t border-neutral-100">
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold bg-neutral-900 text-white hover:bg-neutral-800 transition-colors shadow-sm"
              >
                <span>Send a message</span>
                <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
              </Link>
              {personal.socials.linkedin && (
                <a
                  href={personal.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-medium bg-neutral-100 text-neutral-800 hover:bg-neutral-200/80 border border-neutral-200/80 transition-colors"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                  </svg>
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3 h-3 text-neutral-400" aria-hidden="true" />
                </a>
              )}
              <Link
                href="/work"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-medium text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 transition-colors ml-auto"
              >
                <span>View Real Experiences</span>
                <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
              </Link>
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
