"use client";

import { useState, useEffect } from "react";
import { FolderDown, X, Check, Copy, FileCode } from "lucide-react";

export function DropInGuide() {
  const [isOpen, setIsOpen] = useState(false);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const copyPath = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 1800);
  };

  const assetList = [
    {
      group: "About Page Photos",
      items: [
        {
          file: "public/photos/about-photo-1.jpg",
          desc: "First interactive photo with caption reveal",
        },
        {
          file: "public/photos/about-photo-2.jpg",
          desc: "Second interactive photo with caption reveal",
        },
        {
          file: "public/photos/listening-cover.jpg",
          desc: "Album or podcast cover in media card",
        },
        {
          file: "public/photos/reading-cover.jpg",
          desc: "Book cover in reading card",
        },
      ],
    },
    {
      group: "Work Page Assets",
      items: [
        {
          file: "public/photos/work-1.jpg",
          desc: "Preview image for first experience card and subpage",
        },
        {
          file: "public/photos/work-2.jpg",
          desc: "Preview image for second experience card and subpage",
        },
        {
          file: "public/photos/work-3.jpg",
          desc: "Preview image for third experience card and subpage",
        },
        {
          file: "public/logos/company-1.svg",
          desc: "Company logo for logo wall (SVG recommended)",
        },
      ],
    },
    {
      group: "Resume and Profile",
      items: [
        {
          file: "public/resume.pdf",
          desc: "Your printable PDF resume for direct download",
        },
        {
          file: "src/data/portfolio.ts",
          desc: "Single configuration file for real facts, roles, and links",
        },
      ],
    },
  ];

  return (
    <>
      <aside aria-label="Drop-in assets helper" className="fixed bottom-6 right-6 z-40">
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-white text-neutral-800 text-xs font-medium border border-neutral-200/90 shadow-lg hover:bg-neutral-50 hover:border-neutral-300 transition-all duration-200"
          title="Open drop-in asset guide"
        >
          <FolderDown className="w-3.5 h-3.5 text-neutral-600" aria-hidden="true" />
          <span>Self-Serve Drop-In Guide</span>
        </button>
      </aside>

      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="drop-in-guide-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsOpen(false);
          }}
        >
          <div className="bg-white rounded-3xl border border-neutral-200 shadow-2xl max-w-xl w-full max-h-[85vh] overflow-y-auto p-6 md:p-8">
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-neutral-100">
              <div>
                <h2
                  id="drop-in-guide-title"
                  className="text-xl font-display font-semibold text-neutral-900"
                >
                  Self-Serve Drop-In Guide
                </h2>
                <p className="text-sm text-neutral-500 mt-1">
                  Replace placeholders anytime just by dropping files into the folders below. No code edits required!
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-full text-neutral-400 hover:text-neutral-700 hover:bg-neutral-100 transition-colors"
                aria-label="Close guide"
              >
                <X className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>

            <div className="mt-6 space-y-6">
              {assetList.map((section) => (
                <section key={section.group} className="space-y-3">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                    {section.group}
                  </h3>
                  <div className="space-y-2">
                    {section.items.map((item) => (
                      <div
                        key={item.file}
                        className="p-3 rounded-2xl bg-neutral-50 border border-neutral-200/60 flex items-center justify-between gap-3 text-left"
                      >
                        <div className="min-w-0 flex-1">
                          <code className="text-xs font-mono font-semibold text-neutral-800 block truncate">
                            {item.file}
                          </code>
                          <p className="text-xs text-neutral-500 mt-0.5 truncate">
                            {item.desc}
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={() => copyPath(item.file, item.file)}
                          className="flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-medium text-neutral-600 bg-white border border-neutral-200 hover:bg-neutral-100 transition-colors shrink-0"
                          title="Copy file path"
                        >
                          {copiedKey === item.file ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-emerald-600" aria-hidden="true" />
                              <span className="text-emerald-700">Copied</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3.5 h-3.5" aria-hidden="true" />
                              <span>Copy path</span>
                            </>
                          )}
                        </button>
                      </div>
                    ))}
                  </div>
                </section>
              ))}

              <div className="p-4 rounded-2xl bg-neutral-100/70 border border-neutral-200 text-xs text-neutral-600 flex items-start gap-3">
                <FileCode className="w-4 h-4 text-neutral-700 shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <span className="font-semibold text-neutral-900 block mb-1">
                    Text facts and real experience
                  </span>
                  To update your name, roles, listening/reading stats, and real work experiences, open{" "}
                  <code className="bg-white px-1.5 py-0.5 rounded border border-neutral-200 text-neutral-800 font-mono">
                    src/data/portfolio.ts
                  </code>
                  . All text fields are organized in one single file.
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-neutral-100 flex justify-end">
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="px-5 py-2 rounded-full text-sm font-medium bg-neutral-900 text-white hover:bg-neutral-800 transition-colors"
              >
                Got it
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
