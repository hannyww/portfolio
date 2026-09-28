"use client";

import Image from "next/image";
import Link from "next/link";
import { Video, ArrowRight, Sparkles } from "lucide-react";
import { PortfolioData } from "@/data/portfolio";

interface WhoAmISectionProps {
  whoAmI: PortfolioData["whoAmI"];
}

export function WhoAmISection({ whoAmI }: WhoAmISectionProps) {

  return (
    <section aria-labelledby="whoami-heading" className="space-y-3">
      <div className="flex items-center justify-between px-1">
        <h2 id="whoami-heading" className="text-xs font-mono uppercase tracking-wider text-neutral-400 font-semibold">
          {whoAmI.title}
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Box 1: Personal Video */}
        <div className="group relative rounded-3xl overflow-hidden border border-neutral-200/90 bg-white shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between">
          <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-900">
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${whoAmI.video.youtubeId}?rel=0&modestbranding=1`}
              title={whoAmI.video.caption}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full border-0"
            />

            {/* Badge */}
            <div className="absolute top-3 left-3 z-10 px-2.5 py-1 rounded-full bg-neutral-900/75 backdrop-blur-sm text-white text-[11px] font-medium tracking-wide flex items-center gap-1.5 pointer-events-none">
              <Video className="w-3 h-3 text-neutral-300" aria-hidden="true" />
              <span>{whoAmI.video.badge}</span>
            </div>
          </div>

          <div className="p-4 bg-white border-t border-neutral-100">
            <p className="text-xs text-neutral-600 leading-relaxed font-sans">
              {whoAmI.video.caption}
            </p>
          </div>
        </div>

        {/* Box 2: Why Finance Story - links to full interactive page */}
        <Link
          href="/why-finance"
          className="group relative rounded-3xl overflow-hidden border border-neutral-200/90 bg-white shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between cursor-pointer"
        >
          <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-100">
            <Image
              src={whoAmI.whyFinance.coverSrc}
              alt={whoAmI.whyFinance.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />

            <div className="absolute top-3 left-3 z-10 px-2.5 py-1 rounded-full bg-neutral-900/75 backdrop-blur-sm text-white text-[11px] font-medium tracking-wide flex items-center gap-1.5">
              <Sparkles className="w-3 h-3 text-neutral-300" aria-hidden="true" />
              <span>{whoAmI.whyFinance.badge}</span>
            </div>

            {/* Hover arrow cue */}
            <div className="absolute bottom-3 right-3 z-10 flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-neutral-900 text-xs font-semibold shadow-sm border border-neutral-200/80 opacity-0 group-hover:opacity-100 transition-all translate-y-1 group-hover:translate-y-0">
              <span>Explore</span>
              <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
            </div>
          </div>

          <div className="p-4 bg-white border-t border-neutral-100 flex flex-col justify-between flex-1">
            <div>
              <h3 className="text-sm font-display font-bold text-neutral-900">
                {whoAmI.whyFinance.title}
              </h3>
              <p className="text-xs text-neutral-500 mt-1 line-clamp-2 leading-relaxed">
                {whoAmI.whyFinance.preview}
              </p>
            </div>

            <div className="mt-3 pt-2.5 border-t border-neutral-100 flex items-center justify-end text-xs">
              <span className="font-semibold text-neutral-900 text-xs inline-flex items-center gap-1 group-hover:underline">
                <span>Open story</span>
                <ArrowRight className="w-3 h-3" aria-hidden="true" />
              </span>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}
