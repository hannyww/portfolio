"use client";

import { useState } from "react";
import Image from "next/image";
import { WhyFinancePhoto } from "@/data/portfolio";

interface WhyFinanceGalleryProps {
  photos: WhyFinancePhoto[];
}

export function WhyFinanceGallery({ photos }: WhyFinanceGalleryProps) {
  const [flipped, setFlipped] = useState<Set<string>>(new Set());

  const toggle = (id: string) => {
    setFlipped((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  return (
    <section aria-label="Why Finance photo gallery" className="space-y-4">
      {/* First row: 2 portrait cards side-by-side */}
      <div className="grid grid-cols-2 gap-4">
        {photos.slice(0, 2).map((photo) => (
          <FlipCard
            key={photo.id}
            photo={photo}
            isFlipped={flipped.has(photo.id)}
            onToggle={() => toggle(photo.id)}
            aspectClass="aspect-[3/4]"
          />
        ))}
      </div>

      {/* Second row: 1 full-width wide card */}
      {photos[2] && (
        <FlipCard
          photo={photos[2]}
          isFlipped={flipped.has(photos[2].id)}
          onToggle={() => toggle(photos[2].id)}
          aspectClass="aspect-[16/7]"
        />
      )}

      {/* Any overflow: single cards */}
      {photos.slice(3).map((photo) => (
        <FlipCard
          key={photo.id}
          photo={photo}
          isFlipped={flipped.has(photo.id)}
          onToggle={() => toggle(photo.id)}
          aspectClass="aspect-[4/3]"
        />
      ))}
    </section>
  );
}

interface FlipCardProps {
  photo: WhyFinancePhoto;
  isFlipped: boolean;
  onToggle: () => void;
  aspectClass: string;
}

function FlipCard({ photo, isFlipped, onToggle, aspectClass }: FlipCardProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className={`relative ${aspectClass} w-full rounded-3xl overflow-hidden border border-neutral-200/90 shadow-card group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2`}
      aria-pressed={isFlipped}
      aria-label={isFlipped ? `Hide caption for ${photo.badge}` : `Reveal caption for ${photo.badge}`}
    >
      {/* Photo layer */}
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        className={`object-cover transition-all duration-500 ${
          isFlipped ? "scale-105 brightness-[0.3]" : "scale-100 group-hover:scale-[1.02]"
        }`}
        sizes="(max-width: 640px) 50vw, 600px"
      />

      {/* Badge — hidden when flipped */}
      {!isFlipped && (
        <div className="absolute top-3 left-3 z-10 px-2.5 py-1 rounded-full bg-neutral-900/70 backdrop-blur-sm text-white text-[11px] font-medium tracking-wide pointer-events-none">
          {photo.badge}
        </div>
      )}

      {/* Tap hint */}
      {!isFlipped && (
        <div className="absolute inset-0 flex items-end justify-center pb-4 z-10 pointer-events-none">
          <span className="px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-sm text-neutral-700 text-[11px] font-semibold shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            Click to reveal
          </span>
        </div>
      )}

      {/* Caption overlay — scrollable for long text */}
      {isFlipped && (
        <div className="absolute inset-0 z-20 flex flex-col p-5 overflow-y-auto">
          <span className="flex-shrink-0 mb-3 self-start px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-[11px] font-medium tracking-wide border border-white/30">
            {photo.badge}
          </span>
          <p className="text-white text-xs sm:text-sm font-sans leading-relaxed drop-shadow-md flex-1">
            {photo.caption}
          </p>
          <span className="flex-shrink-0 mt-3 text-white/50 text-[10px] font-mono self-center">
            click to close
          </span>
        </div>
      )}
    </button>
  );
}
