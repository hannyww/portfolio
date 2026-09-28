"use client";

import { useState } from "react";
import Image from "next/image";
import { Info, X, Camera } from "lucide-react";
import { AboutPhoto } from "@/data/portfolio";

interface PhotoCardGalleryProps {
  photos: AboutPhoto[];
}

export function PhotoCardGallery({ photos }: PhotoCardGalleryProps) {
  const [activePhotoId, setActivePhotoId] = useState<string | null>(null);

  const toggleCaption = (id: string) => {
    setActivePhotoId((current) => (current === id ? null : id));
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {photos.map((photo) => {
        const isRevealed = activePhotoId === photo.id;

        return (
          <div
            key={photo.id}
            className="group relative rounded-3xl overflow-hidden border border-neutral-200/90 bg-white shadow-card hover:shadow-card-hover transition-all duration-300"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-100">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                priority
              />

              {/* Click-to-reveal button banner */}
              <button
                type="button"
                onClick={() => toggleCaption(photo.id)}
                aria-expanded={isRevealed}
                aria-controls={`caption-${photo.id}`}
                className="absolute bottom-3 right-3 z-10 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-neutral-800 text-xs font-medium shadow-sm border border-neutral-200/70 hover:bg-white transition-all active:scale-95"
              >
                {isRevealed ? (
                  <>
                    <X className="w-3.5 h-3.5 text-neutral-600" aria-hidden="true" />
                    <span>Hide caption</span>
                  </>
                ) : (
                  <>
                    <Info className="w-3.5 h-3.5 text-neutral-600" aria-hidden="true" />
                    <span>Click for caption</span>
                  </>
                )}
              </button>

              {/* Photo tag badge */}
              {photo.locationTag && (
                <div className="absolute top-3 left-3 z-10 px-2.5 py-1 rounded-full bg-neutral-900/70 backdrop-blur-sm text-white text-[11px] font-medium tracking-wide flex items-center gap-1">
                  <Camera className="w-3 h-3 text-neutral-300" aria-hidden="true" />
                  <span>{photo.locationTag}</span>
                </div>
              )}

              {/* Caption Overlay */}
              <div
                id={`caption-${photo.id}`}
                className={`absolute inset-0 bg-neutral-900/85 backdrop-blur-md p-6 flex flex-col justify-between transition-all duration-300 text-white ${
                  isRevealed
                    ? "opacity-100 pointer-events-auto"
                    : "opacity-0 pointer-events-none"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-white/10">
                    <span className="text-xs uppercase tracking-widest text-neutral-400 font-mono">
                      Caption
                    </span>
                    <button
                      type="button"
                      onClick={() => setActivePhotoId(null)}
                      className="p-1 rounded-full text-neutral-300 hover:text-white hover:bg-white/10 transition-colors"
                      aria-label="Close caption"
                    >
                      <X className="w-4 h-4" aria-hidden="true" />
                    </button>
                  </div>
                  <p className="mt-4 text-sm md:text-base leading-relaxed text-neutral-100 font-sans">
                    {photo.caption}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-neutral-400 font-mono">
                  <span>Self-serve file:</span>
                  <span className="text-neutral-300 truncate max-w-[200px]">{photo.src}</span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
