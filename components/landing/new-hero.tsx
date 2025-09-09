"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { AnimatedText } from "../ui/animated-text";
import { Button } from "../ui/button";
import { ChevronRight, Sparkles, Star } from "lucide-react";

export function NewHeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Animated gradient background */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-violet-600/20 via-transparent to-orange-500/20 opacity-75"
        style={{
          transform: `translate(${mousePosition.x * 0.02}px, ${
            mousePosition.y * 0.02
          }px)`,
        }}
      />

      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black/50" />
        <div className="h-full w-full bg-[radial-gradient(#332b4a_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      {/* Floating elements */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          animate={{
            x: [0, Math.random() * 400 - 200],
            y: [0, Math.random() * 400 - 200],
            scale: [1, Math.random() + 0.5],
            rotate: [0, Math.random() * 360],
          }}
          transition={{
            duration: Math.random() * 10 + 5,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        >
          <Star className="w-4 h-4 text-white/10" />
        </motion.div>
      ))}

      {/* Content */}
      <div className="relative z-10 container px-4 mx-auto">
        <div className="text-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-2 mb-6"
          >
            <span className="px-3 py-1 rounded-full bg-zinc-800 text-sm text-zinc-200 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-yellow-500" />
              Beautiful UI Components
            </span>
          </motion.div>

          <AnimatedText
            text="Build stunning interfaces with Liquid UI"
            className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-br from-white to-zinc-400 bg-clip-text text-transparent"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto"
          >
            A modern UI library packed with stunning animations, responsive
            components, and pixel-perfect design system for your next project.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button size="lg" className="group bg-white text-black hover:bg-zinc-200">
              Get Started
              <ChevronRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="group border-white/20 text-white hover:bg-white/10"
            >
              View Components
              <ChevronRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
