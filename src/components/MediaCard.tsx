"use client";

import Image from "next/image";
import { Headphones, BookOpen, ExternalLink } from "lucide-react";
import { PortfolioData } from "@/data/portfolio";

interface MediaCardProps {
  media: PortfolioData["media"];
}

export function MediaCard({ media }: MediaCardProps) {
  return (
    <section aria-labelledby="media-card-title" className="rounded-3xl border border-neutral-200/90 bg-white p-6 md:p-8 shadow-card">
      <div className="flex items-center justify-between pb-6 border-b border-neutral-100 mb-6">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-neutral-900" />
          <h2 id="media-card-title" className="text-base font-display font-semibold text-neutral-900">
            Currently In Rotation
          </h2>
        </div>
        <span className="text-xs font-mono text-neutral-400">Listening & Reading</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {/* Currently Listening */}
        <div className="flex flex-col justify-between p-5 rounded-2xl bg-neutral-50/80 border border-neutral-200/70 hover:border-neutral-300 transition-colors">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-neutral-500">
                <Headphones className="w-3.5 h-3.5 text-neutral-700" aria-hidden="true" />
                Listening
              </span>
              <div className="flex items-end gap-0.5 h-3.5 px-2 py-0.5 rounded-full bg-neutral-200/70" title="Now playing simulation">
                <span className="w-1 bg-emerald-600 rounded-full animate-[pulse_0.8s_ease-in-out_infinite] h-3"></span>
                <span className="w-1 bg-emerald-600 rounded-full animate-[pulse_1.2s_ease-in-out_infinite] h-2"></span>
                <span className="w-1 bg-emerald-600 rounded-full animate-[pulse_0.9s_ease-in-out_infinite] h-3.5"></span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-neutral-200 shrink-0 shadow-sm border border-neutral-300/60">
                <Image
                  src={media.listening.artworkSrc}
                  alt={media.listening.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="min-w-0 flex-1">
                <p className="font-display font-semibold text-neutral-900 truncate">
                  {media.listening.title}
                </p>
                <p className="text-xs text-neutral-600 truncate mt-0.5">
                  {media.listening.artist}
                </p>
                <p className="text-[11px] text-neutral-400 truncate mt-0.5">
                  {media.listening.album}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-5 pt-3 border-t border-neutral-200/60 flex items-center justify-between text-xs">
            <span className="text-neutral-500 font-mono text-[11px]">
              Platform: {media.listening.platform}
            </span>
            <a
              href={media.listening.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-medium text-neutral-700 hover:text-neutral-950 transition-colors"
            >
              <span>Play</span>
              <ExternalLink className="w-3 h-3" aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Currently Reading */}
        <div className="flex flex-col justify-between p-5 rounded-2xl bg-neutral-50/80 border border-neutral-200/70 hover:border-neutral-300 transition-colors">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-neutral-500">
                <BookOpen className="w-3.5 h-3.5 text-neutral-700" aria-hidden="true" />
                Reading
              </span>
              <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-neutral-200/80 text-neutral-700">
                {media.reading.progress}
              </span>
            </div>

            <div className="flex items-start gap-4">
              <div className="relative w-14 h-20 rounded-lg overflow-hidden bg-neutral-200 shrink-0 shadow-sm border border-neutral-300/60">
                <Image
                  src={media.reading.coverSrc}
                  alt={media.reading.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="min-w-0 flex-1">
                <p className="font-display font-semibold text-neutral-900 leading-snug">
                  {media.reading.title}
                </p>
                <p className="text-xs text-neutral-600 mt-0.5">
                  by {media.reading.author}
                </p>
                <p className="text-xs text-neutral-500 italic mt-2 line-clamp-2">
                  &ldquo;{media.reading.note}&rdquo;
                </p>
              </div>
            </div>
          </div>

          <div className="mt-5 pt-3 border-t border-neutral-200/60 flex items-center justify-between text-xs text-neutral-400 font-mono text-[11px]">
            <span>Book reflections</span>
            <span className="text-neutral-500">Active read</span>
          </div>
        </div>
      </div>
    </section>
  );
}
