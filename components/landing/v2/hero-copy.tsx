"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check, Copy } from "lucide-react";

export function HeroCopy() {
  const [copied, setCopied] = useState(false);
  const cmd = "npx lqdui add ai-input-04";

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/70 py-1 pl-2 pr-3 text-[12.5px] text-zinc-600 backdrop-blur dark:border-zinc-800 dark:bg-zinc-900/70 dark:text-zinc-400">
          <span className="rounded-full bg-zinc-950 px-2 py-0.5 font-mono text-[10.5px] font-medium uppercase tracking-widest text-white dark:bg-white dark:text-zinc-950">
            New
          </span>
          100+ blocks — AI inputs, pricing, cards
        </p>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        className="mt-6 text-balance text-[44px] font-semibold leading-[1.02] tracking-[-0.035em] sm:text-6xl lg:text-[68px]"
      >
        Stop building UI
        <br />
        <span className="font-accent font-normal italic tracking-[-0.01em]">from scratch.</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
        className="mt-5 max-w-md text-[16.5px] leading-relaxed text-zinc-600 dark:text-zinc-400"
      >
        lqdui is a hand-built collection of production-grade React
        components. Copy them into your app, own the code, and skip the
        weeks of polishing nobody sees.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
        className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
      >
        <Link
          href="/docs/components/ai-input"
          className="group flex items-center justify-center gap-1.5 rounded-xl bg-zinc-950 px-6 py-3 text-[14.5px] font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
        >
          Browse components
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
        <button
          onClick={async () => {
            try {
              await navigator.clipboard.writeText(cmd);
            } catch {
              /* noop */
            }
            setCopied(true);
            setTimeout(() => setCopied(false), 1600);
          }}
          className="group flex items-center justify-between gap-3 rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 font-mono text-[13px] text-zinc-700 transition-colors hover:border-zinc-300 hover:bg-zinc-100 sm:min-w-[280px] dark:border-zinc-800 dark:bg-zinc-900/60 dark:text-zinc-300 dark:hover:border-zinc-700 dark:hover:bg-zinc-900"
          title="Copy install command"
        >
          <span className="truncate">
            <span className="text-zinc-400 dark:text-zinc-600">$ </span>
            {cmd}
          </span>
          {copied ? (
            <Check className="h-4 w-4 shrink-0 text-emerald-500" />
          ) : (
            <Copy className="h-4 w-4 shrink-0 text-zinc-400 transition-colors group-hover:text-zinc-600 dark:group-hover:text-zinc-200" />
          )}
        </button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.36 }}
        className="mt-8 flex items-center gap-5 border-t border-zinc-200/70 pt-6 dark:border-zinc-800/70"
      >
        {[
          ["100+", "components"],
          ["10", "categories"],
          ["0", "lock-in"],
        ].map(([v, l]) => (
          <div key={l}>
            <p className="text-[22px] font-semibold tabular-nums tracking-tight">{v}</p>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-zinc-400 dark:text-zinc-500">
              {l}
            </p>
          </div>
        ))}
        <div className="ml-auto hidden text-right sm:block">
          <p className="text-[13px] text-zinc-500 dark:text-zinc-500">Open source.</p>
          <p className="text-[13px] text-zinc-500 dark:text-zinc-500">Copy, don&apos;t install.</p>
        </div>
      </motion.div>
    </div>
  );
}
