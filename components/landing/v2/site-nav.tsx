"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowUpRight, Github } from "lucide-react";
import { ThemeToggle } from "@/lib/theme-toggle";
import { cn } from "@/lib/utils";

const links = [
  { label: "Components", href: "/docs/components/ai-input" },
  { label: "Docs", href: "/docs" },
];

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
      <nav
        className={cn(
          "flex w-full max-w-3xl items-center justify-between gap-2 rounded-2xl border py-2 pl-4 pr-2 transition-all duration-300",
          scrolled
            ? "border-zinc-200 bg-white/80 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.25)] backdrop-blur-xl dark:border-zinc-800 dark:bg-zinc-950/80"
            : "border-transparent bg-transparent"
        )}
      >
        <Link href="/" className="flex items-center gap-2.5">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-zinc-950 text-[13px] font-bold tracking-tighter text-white dark:bg-white dark:text-zinc-950">
            lq
          </span>
          <span className="text-[15px] font-semibold tracking-tight">lqdui</span>
          <span className="hidden rounded-full border border-zinc-200 px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-zinc-500 sm:inline-block dark:border-zinc-800 dark:text-zinc-400">
            v2.0
          </span>
        </Link>

        <div className="hidden items-center gap-1 sm:flex">
          {links.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className="rounded-lg px-3 py-1.5 text-[13.5px] text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-950 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-white"
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-1.5">
          <span className="mr-1 hidden text-zinc-400 md:block dark:text-zinc-600">
            <ThemeToggle />
          </span>
          <a
            href="https://github.com/pritamawatade/lazyui"
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-1.5 rounded-lg px-3 py-1.5 text-[13.5px] text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-950 sm:flex dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-white"
          >
            <Github className="h-4 w-4" />
            <span className="font-mono text-xs tabular-nums">Star</span>
          </a>
          <Link
            href="/docs"
            className="group flex items-center gap-1 rounded-xl bg-zinc-950 px-3.5 py-2 text-[13.5px] font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
          >
            Get started
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-px group-hover:-translate-y-px" />
          </Link>
        </div>
      </nav>
    </header>
  );
}
