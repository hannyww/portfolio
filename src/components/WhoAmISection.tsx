"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Play, Video, ArrowRight, Sparkles } from "lucide-react";
import { PortfolioData } from "@/data/portfolio";

interface WhoAmISectionProps {
  whoAmI: PortfolioData["whoAmI"];
}

export function WhoAmISection({ whoAmI }: WhoAmISectionProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoNotice, setVideoNotice] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleVideo = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().then(() => {
        setIsPlaying(true);
        setVideoNotice(false);
      }).catch(() => {
        setVideoNotice(true);
      });
    }
  };

  return (
    <section aria-labelledby="whoami-heading" className="space-y-3">
      <div className="flex items-center justify-between px-1">
        <h2 id="whoami-heading" className="text-xs font-mono uppercase tracking-wider text-neutral-400 font-semibold">
          {whoAmI.title}
        </h2>
        <span className="text-[11px] font-mono text-neutral-400">Interactive</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Box 1: Short Personal Video */}
        <div className="group relative rounded-3xl overflow-hidden border border-neutral-200/90 bg-white shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between">
          <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-100">
            <video
              ref={videoRef}
              src={whoAmI.video.src}
              poster={whoAmI.video.poster}
              controls={isPlaying}
              playsInline
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              onError={() => setVideoNotice(true)}
              className="w-full h-full object-cover"
            />

            {/* Video overlay when not playing */}
            {!isPlaying && (
              <div
                onClick={toggleVideo}
                className="absolute inset-0 bg-neutral-900/20 backdrop-blur-[2px] flex items-center justify-center cursor-pointer group-hover:bg-neutral-900/30 transition-all"
              >
                <div className="w-14 h-14 rounded-full bg-white/95 text-neutral-900 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Play className="w-5 h-5 ml-1 fill-current" aria-hidden="true" />
                </div>
              </div>
            )}

            {/* Badge */}
            <div className="absolute top-3 left-3 z-10 px-2.5 py-1 rounded-full bg-neutral-900/75 backdrop-blur-sm text-white text-[11px] font-medium tracking-wide flex items-center gap-1.5 pointer-events-none">
              <Video className="w-3 h-3 text-neutral-300" aria-hidden="true" />
              <span>{whoAmI.video.badge}</span>
            </div>
          </div>

          <div className="p-4 bg-white border-t border-neutral-100 flex flex-col justify-between flex-1">
            <p className="text-xs text-neutral-600 leading-relaxed font-sans">
              {whoAmI.video.caption}
            </p>
            {videoNotice && (
              <p className="mt-2 text-[11px] text-neutral-500 bg-neutral-50 border border-neutral-200/60 p-2 rounded-xl">
                Ready for your video! Drop personal-intro.mp4 into public/videos/ to view here.
              </p>
            )}
            <div className="mt-3 pt-2.5 border-t border-neutral-100 flex items-center justify-between text-[11px] font-mono text-neutral-400">
              <span>Drop-in video:</span>
              <span className="text-neutral-600 truncate max-w-[180px]">
                {whoAmI.video.src}
              </span>
            </div>
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

            <div className="mt-3 pt-2.5 border-t border-neutral-100 flex items-center justify-between text-xs">
              <span className="text-[11px] font-mono text-neutral-400">
                Interactive pictures
              </span>
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
