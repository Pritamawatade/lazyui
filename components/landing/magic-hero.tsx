"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { GradientShadow } from "../ui/gradient-effects";
import { Button } from "../ui/button";
import { ArrowRight, Github, Sparkles, Code2 } from "lucide-react";
import Link from "next/link";

export function MagicHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const position = useTransform(scrollYProgress, (pos) => {
    return pos === 1 ? "relative" : "fixed";
  });

  return (
    <motion.div
      ref={containerRef}
      className="relative w-full h-screen mb-[100vh]"
      style={{ opacity }}
    >
      <motion.div
        className="fixed inset-0 w-full h-full"
        style={{ position, scale }}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black" />
        </div>

        {/* Gradient Orbs */}
        <div className="absolute left-[20%] top-1/4 w-64 h-64 bg-blue-500/30 rounded-full blur-3xl" />
        <div className="absolute right-[20%] top-1/3 w-64 h-64 bg-purple-500/30 rounded-full blur-3xl" />

        <div className="relative container mx-auto px-4 pt-32 sm:pt-40">
          <div className="text-center">
            {/* Small Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-zinc-800/40 border border-zinc-700/40 backdrop-blur-sm px-4 py-2 rounded-full text-sm text-zinc-200 mb-8"
            >
              <Sparkles className="w-4 h-4 text-yellow-500" />
              <span>Stunning UI Components for your next project</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-white to-zinc-400 pb-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Build faster with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-fuchsia-500">
                beautiful components
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              className="max-w-2xl mx-auto text-lg sm:text-xl text-zinc-400 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              A professional UI library with beautifully crafted components,
              animations, and interactions. Built with React, TypeScript, and
              Tailwind CSS.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <GradientShadow className="bg-gradient-to-r from-violet-500/50 to-fuchsia-500/50">
                <Button
                  size="lg"
                  className="group bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white border-0"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </GradientShadow>

              <Link
                href="https://github.com/Pritamawatade/lazyui"
                target="_blank"
                className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors"
              >
                <Github className="w-5 h-5" />
                Star on GitHub
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              {[
                { label: "Components", value: "50+" },
                { label: "Animations", value: "20+" },
                { label: "TypeScript Ready", value: "100%" },
                { label: "Bundle Size", value: "<10kb" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-br from-white to-zinc-400 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-zinc-400 mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            {/* Code Preview */}
            <motion.div
              className="mt-20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <div className="relative mx-auto max-w-3xl rounded-xl border border-zinc-800 bg-black/50 backdrop-blur-xl p-4">
                <div className="absolute -inset-px bg-gradient-to-br from-violet-500/10 to-fuchsia-500/10 rounded-xl" />
                <div className="relative flex items-center gap-2 text-zinc-400 text-sm mb-4">
                  <Code2 className="w-4 h-4" />
                  <span>Install and import components</span>
                </div>
                <pre className="text-sm text-zinc-300 overflow-x-auto">
                  <code>{`npm install @lazyui/react

import { Button } from "@lazyui/react"

export default function App() {
  return (
    <Button variant="gradient">
      Get Started
    </Button>
  )
}`}</code>
                </pre>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
