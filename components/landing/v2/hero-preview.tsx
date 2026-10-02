"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUp,
  Check,
  Copy,
  ImagePlus,
  Mic,
  Plus,
  Sparkles,
} from "lucide-react";
import { cn } from "@/lib/utils";

const TABS = ["Preview", "Code"] as const;

const codeSnippet = `npx lqdui add ai-input-04

// own the code — no package, no lock-in
import { AIInput } from "@/components/lqdui/ai-input-04"

export function Ask() {
  return <AIInput placeholder="Ask anything…" />
}`;

function PreviewPane() {
  const [value, setValue] = useState("Design a pricing page for…");
  const [sent, setSent] = useState(false);

  return (
    <div className="p-4 sm:p-5">
      {/* window meta row */}
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="rounded-md bg-zinc-100 px-2 py-1 font-mono text-[11px] text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">
            ai-input-04.tsx
          </span>
          <span className="hidden font-mono text-[11px] text-zinc-400 sm:inline dark:text-zinc-500">
            2.1 kB · yours forever
          </span>
        </div>
        <span className="flex items-center gap-1.5 font-mono text-[11px] text-emerald-600 dark:text-emerald-400">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          interactive
        </span>
      </div>

      {/* the component itself */}
      <div className="rounded-2xl border border-zinc-200 bg-white p-3 shadow-[0_2px_20px_-8px_rgba(0,0,0,0.15)] dark:border-zinc-800 dark:bg-zinc-900 dark:shadow-none">
        <div className="flex items-start gap-2">
          <button className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-zinc-200 text-zinc-500 transition-colors hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-400 dark:hover:bg-zinc-800">
            <Plus className="h-4 w-4" />
          </button>
          <textarea
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
              setSent(false);
            }}
            rows={2}
            className="w-full resize-none bg-transparent text-[14px] leading-relaxed text-zinc-900 outline-none placeholder:text-zinc-400 dark:text-zinc-100 dark:placeholder:text-zinc-600"
            placeholder="Ask anything…"
          />
        </div>
        <div className="mt-2 flex items-center justify-between border-t border-zinc-100 pt-2.5 dark:border-zinc-800">
          <div className="flex items-center gap-1.5">
            <span className="flex items-center gap-1 rounded-full border border-zinc-200 px-2 py-1 font-mono text-[10.5px] text-zinc-500 dark:border-zinc-700 dark:text-zinc-400">
              <Sparkles className="h-3 w-3" />
              gpt-4o
            </span>
            <button className="flex h-7 w-7 items-center justify-center rounded-lg text-zinc-400 transition-colors hover:bg-zinc-100 hover:text-zinc-600 dark:hover:bg-zinc-800">
              <ImagePlus className="h-4 w-4" />
            </button>
            <button className="flex h-7 w-7 items-center justify-center rounded-lg text-zinc-400 transition-colors hover:bg-zinc-100 hover:text-zinc-600 dark:hover:bg-zinc-800">
              <Mic className="h-4 w-4" />
            </button>
          </div>
          <button
            onClick={() => setSent(true)}
            className={cn(
              "flex h-8 w-8 items-center justify-center rounded-xl transition-all",
              sent
                ? "bg-emerald-500 text-white"
                : "bg-zinc-950 text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
            )}
            aria-label="Send"
          >
            {sent ? <Check className="h-4 w-4" /> : <ArrowUp className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* supporting row — shows range, not a rainbow */}
      <div className="mt-3 grid grid-cols-3 gap-3">
        {[
          { k: "btn-06", v: "Particle button" },
          { k: "card-04", v: "Metric card" },
          { k: "pricing-02", v: "Pricing tier" },
        ].map((c) => (
          <div
            key={c.k}
            className="rounded-xl border border-zinc-200/80 bg-zinc-50/60 px-3 py-2.5 dark:border-zinc-800/80 dark:bg-zinc-900/40"
          >
            <p className="font-mono text-[10.5px] text-zinc-400 dark:text-zinc-500">{c.k}</p>
            <p className="mt-0.5 truncate text-[12.5px] font-medium text-zinc-700 dark:text-zinc-300">
              {c.v}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function CodePane({ onCopy, copied }: { onCopy: () => void; copied: boolean }) {
  return (
    <div className="relative">
      <button
        onClick={onCopy}
        className="absolute right-3 top-3 flex items-center gap-1.5 rounded-lg border border-zinc-200 bg-white/80 px-2.5 py-1.5 font-mono text-[11px] text-zinc-600 backdrop-blur transition-colors hover:text-zinc-950 dark:border-zinc-700 dark:bg-zinc-900/80 dark:text-zinc-400 dark:hover:text-white"
      >
        {copied ? <Check className="h-3.5 w-3.5 text-emerald-500" /> : <Copy className="h-3.5 w-3.5" />}
        {copied ? "copied" : "copy"}
      </button>
      <pre className="overflow-x-auto p-5 font-mono text-[12.5px] leading-[1.75] text-zinc-600 dark:text-zinc-400">
        <code>{codeSnippet}</code>
      </pre>
    </div>
  );
}

export function HeroPreview() {
  const [tab, setTab] = useState<(typeof TABS)[number]>("Preview");
  const [copied, setCopied] = useState(false);

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText("npx lqdui add ai-input-04");
    } catch {
      /* clipboard unavailable */
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
      className="relative"
    >
      {/* soft liquid shadow behind — one hint, not a rainbow */}
      <div
        aria-hidden
        className="absolute -inset-8 rounded-[32px] bg-[radial-gradient(60%_60%_at_50%_0%,rgba(0,0,0,0.08),transparent_70%)] dark:bg-[radial-gradient(60%_60%_at_50%_0%,rgba(255,255,255,0.09),transparent_70%)]"
      />
      <div className="landing-noise relative overflow-hidden rounded-2xl border border-zinc-200 bg-white/90 shadow-[0_24px_80px_-24px_rgba(0,0,0,0.3)] backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/90">
        {/* title bar */}
        <div className="flex items-center justify-between border-b border-zinc-200/80 px-4 py-3 dark:border-zinc-800/80">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-zinc-300 dark:bg-zinc-700" />
            <span className="h-2.5 w-2.5 rounded-full bg-zinc-300 dark:bg-zinc-700" />
            <span className="h-2.5 w-2.5 rounded-full bg-zinc-300 dark:bg-zinc-700" />
          </div>
          <div className="flex rounded-lg bg-zinc-100 p-0.5 dark:bg-zinc-900">
            {TABS.map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={cn(
                  "rounded-md px-3 py-1 text-[12.5px] font-medium transition-all",
                  tab === t
                    ? "bg-white text-zinc-950 shadow-sm dark:bg-zinc-800 dark:text-white"
                    : "text-zinc-500 hover:text-zinc-800 dark:text-zinc-500 dark:hover:text-zinc-300"
                )}
              >
                {t}
              </button>
            ))}
          </div>
          <span className="hidden font-mono text-[11px] text-zinc-400 sm:block dark:text-zinc-600">
            lqdui / registry
          </span>
        </div>

        {tab === "Preview" ? (
          <PreviewPane />
        ) : (
          <CodePane onCopy={onCopy} copied={copied} />
        )}

        {/* status bar */}
        <div className="flex items-center justify-between border-t border-zinc-200/80 px-4 py-2.5 font-mono text-[11px] text-zinc-400 dark:border-zinc-800/80 dark:text-zinc-600">
          <span>.\components\lqdui\ — local files</span>
          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            no dependency added
          </span>
        </div>
      </div>
    </motion.div>
  );
}
