"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Copy,
  FileCode2,
  MousePointerClick,
  Terminal,
} from "lucide-react";
import { useState } from "react";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
};

/* ---------------- ticker ---------------- */

const tickerItems = [
  "ai-input",
  "action-search-bar",
  "particle-button",
  "bento-grid",
  "checkout-interaction",
  "vercel-v0-chat",
  "tweet-card",
  "currency-transfer",
  "toolbar",
  "avatar-picker",
  "matrix-text",
  "pricing",
];

export function Ticker() {
  const row = [...tickerItems, ...tickerItems];
  return (
    <div className="relative overflow-hidden border-y border-zinc-200/80 py-3.5 dark:border-zinc-800/80">
      <div className="flex w-max animate-marquee gap-0">
        {row.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-6 pr-6 font-mono text-[12px] uppercase tracking-[0.18em] text-zinc-400 dark:text-zinc-600"
          >
            {item}
            <span className="text-zinc-300 dark:text-zinc-700">/</span>
          </span>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent dark:from-zinc-950" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent dark:from-zinc-950" />
    </div>
  );
}

/* ---------------- categories ---------------- */

const categories = [
  { name: "AI Inputs", href: "/docs/components/ai-input", count: "17 variants", note: "Chat boxes, prompts, attachments" },
  { name: "Buttons", href: "/docs/components/button", count: "13 variants", note: "Particles, magnetic, copy states" },
  { name: "Cards", href: "/docs/components/card", count: "10 variants", note: "Metrics, media, interactive" },
  { name: "Text & Motion", href: "/docs/components/text", count: "6 variants", note: "Handwritten, matrix, reveals" },
  { name: "Inputs", href: "/docs/components/input", count: "9 variants", note: "Tags, files, popovers" },
  { name: "Pricing", href: "/docs/components/pricing", count: "6 variants", note: "Tiers, toggles, comparison" },
  { name: "Alerts", href: "/docs/components/alert", count: "7 variants", note: "Banners, toasts, inline" },
  { name: "Profiles & Lists", href: "/docs/components/profile", count: "11 variants", note: "People, feeds, rows" },
  { name: "FAQ", href: "/docs/components/faq", count: "4 variants", note: "Accordions, search" },
];

export function Categories() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
      <motion.div {...fadeUp} className="mb-10 flex flex-col gap-4 sm:mb-14 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-zinc-400 dark:text-zinc-500">
            01 — The registry
          </p>
          <h2 className="mt-3 max-w-xl text-3xl font-semibold tracking-[-0.02em] text-zinc-950 sm:text-4xl dark:text-white">
            Every block you keep rebuilding.
          </h2>
        </div>
        <Link
          href="/docs"
          className="group flex w-fit items-center gap-1.5 text-[14px] font-medium text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white"
        >
          Browse all docs
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </motion.div>

      <div className="overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800">
        {categories.map((c, i) => (
          <motion.div key={c.name} {...fadeUp} transition={{ ...fadeUp.transition, delay: Math.min(i * 0.04, 0.3) }}>
            <Link
              href={c.href}
              className="group flex items-center justify-between gap-4 border-b border-zinc-200/80 bg-white px-5 py-4 transition-colors last:border-b-0 hover:bg-zinc-50 sm:px-6 dark:border-zinc-800/80 dark:bg-zinc-950 dark:hover:bg-zinc-900/60"
            >
              <div className="flex min-w-0 items-baseline gap-3 sm:gap-5">
                <span className="hidden font-mono text-[11px] tabular-nums text-zinc-300 sm:block dark:text-zinc-700">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="truncate text-[15px] font-medium tracking-tight text-zinc-900 dark:text-zinc-100">
                  {c.name}
                </span>
                <span className="hidden truncate text-[13.5px] text-zinc-400 md:block dark:text-zinc-600">
                  {c.note}
                </span>
              </div>
              <div className="flex shrink-0 items-center gap-3">
                <span className="rounded-full border border-zinc-200 px-2.5 py-1 font-mono text-[11px] text-zinc-500 dark:border-zinc-800 dark:text-zinc-400">
                  {c.count}
                </span>
                <ArrowUpRight className="h-4 w-4 text-zinc-300 transition-all group-hover:translate-x-px group-hover:-translate-y-px group-hover:text-zinc-900 dark:text-zinc-700 dark:group-hover:text-white" />
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- how it works ---------------- */

const steps = [
  {
    n: "01",
    icon: MousePointerClick,
    title: "Find the block",
    body: "Browse the registry like a menu, not a maze. Each component shows live preview, variants, and the exact files it needs.",
  },
  {
    n: "02",
    icon: Terminal,
    title: "Paste one command",
    body: "The CLI drops source files straight into your project. Tailwind, shadcn and motion wired up — nothing hidden in node_modules.",
  },
  {
    n: "03",
    icon: FileCode2,
    title: "Own it forever",
    body: "It's your code now. Restyle it, rip it apart, ship it. MIT licensed, no telemetry, no version-lock anxiety.",
  },
];

function CliCard() {
  const [copied, setCopied] = useState(false);
  const cmd = "npx lqdui add ai-input-04 card-04 pricing-02";
  return (
    <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-950 text-zinc-100 dark:border-zinc-800">
      <div className="flex items-center justify-between border-b border-white/10 px-5 py-3">
        <div className="flex items-center gap-2 font-mono text-[12px] text-zinc-400">
          <Terminal className="h-3.5 w-3.5" />
          terminal
        </div>
        <button
          onClick={async () => {
            try {
              await navigator.clipboard.writeText(cmd);
            } catch { /* noop */ }
            setCopied(true);
            setTimeout(() => setCopied(false), 1600);
          }}
          className="flex items-center gap-1.5 rounded-lg border border-white/10 px-2.5 py-1.5 font-mono text-[11px] text-zinc-400 transition-colors hover:text-white"
        >
          {copied ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
          {copied ? "copied" : "copy"}
        </button>
      </div>
      <div className="space-y-1.5 p-5 font-mono text-[13px] leading-relaxed">
        <p><span className="text-zinc-500">$</span> <span className="text-white">{cmd}</span></p>
        <p className="text-zinc-500">✓ ai-input-04.tsx → components/lqdui/</p>
        <p className="text-zinc-500">✓ card-04.tsx → components/lqdui/</p>
        <p className="text-zinc-500">✓ pricing-02.tsx → components/lqdui/</p>
        <p className="text-emerald-400">Done. 3 files, 0 new dependencies.</p>
      </div>
    </div>
  );
}

export function HowItWorks() {
  return (
    <section className="border-y border-zinc-200/80 bg-zinc-50/70 dark:border-zinc-800/80 dark:bg-zinc-900/30">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <motion.div {...fadeUp}>
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-zinc-400 dark:text-zinc-500">
              02 — How it works
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.02em] text-zinc-950 sm:text-4xl dark:text-white">
              No package.
              <br />
              Just files.
            </h2>
            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-zinc-600 dark:text-zinc-400">
              lqdui follows the shadcn model: the registry is a shelf, not a
              dependency. You copy real source code into your repo and it
              becomes invisible infrastructure.
            </p>
          </motion.div>
          <div className="mt-8 space-y-0 overflow-hidden rounded-2xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                {...fadeUp}
                className="flex gap-4 border-b border-zinc-200/70 p-5 last:border-b-0 dark:border-zinc-800/70"
              >
                <span className="font-mono text-[11px] tabular-nums text-zinc-300 dark:text-zinc-700">{s.n}</span>
                <div>
                  <h3 className="flex items-center gap-2 text-[15px] font-medium tracking-tight text-zinc-900 dark:text-zinc-100">
                    <s.icon className="h-4 w-4 text-zinc-400" />
                    {s.title}
                  </h3>
                  <p className="mt-1.5 text-[13.5px] leading-relaxed text-zinc-600 dark:text-zinc-400">{s.body}</p>
                </div>
                {i === 0 && <span className="sr-only">step</span>}
              </motion.div>
            ))}
          </div>
        </div>
        <motion.div {...fadeUp} className="flex flex-col justify-center gap-4">
          <CliCard />
          <p className="font-mono text-[12px] leading-relaxed text-zinc-400 dark:text-zinc-600">
            Works with Next.js, Vite, Remix — anywhere Tailwind + React live.
            TypeScript-first, dark-mode aware, keyboard navigable.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------- principles ---------------- */

const principles = [
  {
    title: "Designed, not decorated",
    body: "One type scale. One border radius. Hairlines instead of shadows. Every component is reviewed for restraint before it ships.",
  },
  {
    title: "Motion with manners",
    body: "Micro-interactions that explain themselves — focus rings, press states, layout shifts under 200ms. Nothing bounces for attention.",
  },
  {
    title: "Accessible by default",
    body: "Radix primitives underneath, real contrast ratios, keyboard paths tested. WCAG AA isn't a badge, it's the baseline.",
  },
];

export function Principles() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
      <motion.div {...fadeUp} className="mb-10 sm:mb-14">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-zinc-400 dark:text-zinc-500">
          03 — House rules
        </p>
        <h2 className="mt-3 max-w-xl text-3xl font-semibold tracking-[-0.02em] text-zinc-950 sm:text-4xl dark:text-white">
          Taste is a feature.
        </h2>
      </motion.div>
      <div className="grid gap-px overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-200 sm:grid-cols-3 dark:border-zinc-800 dark:bg-zinc-800">
        {principles.map((p, i) => (
          <motion.div
            key={p.title}
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: i * 0.08 }}
            className="bg-white p-7 sm:p-8 dark:bg-zinc-950"
          >
            <span className="font-mono text-[11px] tabular-nums text-zinc-300 dark:text-zinc-700">
              0{i + 1}
            </span>
            <h3 className="mt-4 text-[17px] font-medium tracking-tight text-zinc-950 dark:text-white">
              {p.title}
            </h3>
            <p className="mt-2.5 text-[14px] leading-relaxed text-zinc-600 dark:text-zinc-400">{p.body}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- final CTA ---------------- */

export function FinalCta() {
  return (
    <section className="px-4 pb-24 sm:px-8">
      <motion.div
        {...fadeUp}
        className="landing-noise relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-zinc-950 px-6 py-16 text-center sm:px-12 sm:py-24 dark:bg-white dark:text-zinc-950"
      >
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(70%_100%_at_50%_0%,rgba(255,255,255,0.12),transparent_70%)] dark:bg-[radial-gradient(70%_100%_at_50%_0%,rgba(0,0,0,0.08),transparent_70%)]"
        />
        <div className="relative">
          <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-zinc-400 dark:text-zinc-500">
            Free · Open source · MIT
          </p>
          <h2 className="mx-auto mt-4 max-w-2xl text-balance text-4xl font-semibold tracking-[-0.03em] text-white sm:text-6xl dark:text-zinc-950">
            Build less chrome.
            <br />
            <span className="font-accent font-normal italic">Ship more product.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-md text-[15px] leading-relaxed text-zinc-400 dark:text-zinc-600">
            Grab the blocks you need, skip the weeks you don&apos;t have.
            Your next interface is one paste away.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/docs/components/ai-input"
              className="group flex w-full items-center justify-center gap-1.5 rounded-xl bg-white px-6 py-3 text-[14.5px] font-medium text-zinc-950 transition-colors hover:bg-zinc-200 sm:w-auto dark:bg-zinc-950 dark:text-white dark:hover:bg-zinc-800"
            >
              Browse components
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/docs"
              className="w-full rounded-xl border border-white/15 px-6 py-3 text-[14.5px] font-medium text-white transition-colors hover:bg-white/10 sm:w-auto dark:border-zinc-950/15 dark:text-zinc-950 dark:hover:bg-zinc-950/5"
            >
              Read the docs
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
