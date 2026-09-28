"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { portfolioData } from "@/data/portfolio";

export function FloatingNav() {
  const pathname = usePathname();

  const navItems = [
    { label: "About", href: "/" },
    { label: "Work", href: "/work" },
    { label: "What's Next", href: "/whats-next" },
  ];

  return (
    <header className="fixed top-6 inset-x-0 z-50 flex justify-center px-4 pointer-events-none">
      <nav
        aria-label="Primary navigation"
        className="pointer-events-auto flex items-center gap-1.5 p-1.5 rounded-full bg-white/85 backdrop-blur-md border border-neutral-200/80 shadow-pill transition-all duration-200"
      >
        <div className="flex items-center pl-3 pr-2 py-1 gap-2 border-r border-neutral-200/60 mr-1">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-xs font-mono text-neutral-500 hidden sm:inline">
            {portfolioData.personal.availabilityStatus}
          </span>
        </div>

        {navItems.map((item) => {
          const isActive =
            item.href === "/"
              ? pathname === "/" || pathname === "/about"
              : pathname.startsWith(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`relative px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                isActive
                  ? "text-neutral-900 bg-neutral-100 font-semibold shadow-sm"
                  : "text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50"
              }`}
              aria-current={isActive ? "page" : undefined}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
