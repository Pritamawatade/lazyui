import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check, Copy } from "lucide-react";
import { SiteNav } from "@/components/landing/v2/site-nav";
import { HeroPreview } from "@/components/landing/v2/hero-preview";
import {
  Categories,
  FinalCta,
  HowItWorks,
  Principles,
  Ticker,
} from "@/components/landing/v2/landing-sections";
import { HeroCopy } from "@/components/landing/v2/hero-copy";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-zinc-950 antialiased dark:bg-zinc-950 dark:text-zinc-50">
      <SiteNav />

      {/* ---------- hero ---------- */}
      <main className="relative overflow-hidden">
        {/* backdrop: faint grid + single soft wash */}
        <div aria-hidden className="absolute inset-0">
          <div className="landing-grid landing-mask absolute inset-0" />
          <div className="absolute inset-x-0 top-0 h-[560px] bg-[radial-gradient(55%_60%_at_50%_0%,rgba(0,0,0,0.07),transparent_70%)] dark:bg-[radial-gradient(55%_60%_at_50%_0%,rgba(255,255,255,0.08),transparent_70%)]" />
        </div>

        <div className="relative mx-auto grid max-w-6xl gap-12 px-5 pb-16 pt-32 sm:px-8 sm:pt-40 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:gap-14">
          <HeroCopy />
          <HeroPreview />
        </div>

        {/* proof strip */}
        <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-zinc-200/80 py-5 font-mono text-[12px] text-zinc-400 dark:border-zinc-800/80 dark:text-zinc-500">
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              MIT licensed — yours forever
            </span>
            <span>Next.js · Tailwind · shadcn · Motion</span>
            <span className="hidden sm:inline">TypeScript-first</span>
            <span className="hidden md:inline">Dark-mode aware</span>
          </div>
        </div>
      </main>

      <Ticker />
      <Categories />
      <HowItWorks />
      <Principles />
      <FinalCta />
    </div>
  );
}
