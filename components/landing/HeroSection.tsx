"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FiArrowRight, FiGithub, FiStar, FiUsers, FiDownload } from "react-icons/fi";
import Link from "next/link";
import { IconSparkles, IconCode, IconPalette } from "@tabler/icons-react";

const stats = [
  { icon: FiStar, label: "GitHub Stars", value: "1" },
  { icon: FiDownload, label: "Weekly Downloads", value: "10" },
  { icon: FiUsers, label: "Developers", value: "100+" },
];

const floatingElements = [
  { icon: IconCode, delay: 0, x: -20, y: -30 },
  { icon: IconPalette, delay: 0.5, x: 20, y: -20 },
  { icon: IconSparkles, delay: 1, x: -30, y: 20 },
];

export default function HeroSection() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
  };

  const item = {
    hidden: { y: 30, opacity: 0 },
    show: { 
      y: 0, 
      opacity: 1, 
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 15 
      } 
    },
  };

  return (
    <section className="relative overflow-hidden pt-20 pb-16 md:pt-28 md:pb-24 min-h-screen flex items-center">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid-gray-900/[0.04] dark:bg-grid-white/[0.02] bg-[size:60px_60px]" />
      <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent dark:from-gray-950 dark:via-transparent dark:to-transparent" />
      
      {/* Floating Elements */}
      {floatingElements.map((element, index) => (
        <motion.div
          key={index}
          className="absolute hidden lg:block"
          style={{
            left: `${20 + index * 25}%`,
            top: `${30 + index * 15}%`,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: 0.6, 
            scale: 1,
            x: [0, element.x, 0],
            y: [0, element.y, 0],
          }}
          transition={{
            delay: element.delay,
            duration: 6,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/10">
            <element.icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
          </div>
        </motion.div>
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          variants={container} 
          initial="hidden" 
          animate="show" 
          className="text-center"
        >
          {/* Badge */}
          <motion.div variants={item as any} className="mb-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/50 dark:to-purple-950/50 border border-blue-200/50 dark:border-blue-800/50">
              <IconSparkles className="w-4 h-4 text-blue-600 dark:text-blue-400 mr-2" />
              <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
                Now with 50+ components
              </span>
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.div variants={item as any} className="mb-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent">
                Build Beautiful UIs
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Lightning Fast
              </span>
            </h1>
            <p className="text-lg md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              The most comprehensive React UI library with 50+ beautiful, accessible components. 
              Copy, paste, and customize to build stunning applications in minutes.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={item as any} className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
             <Button
              size="sm"
              asChild
              className="bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all px-10 py-6 text-lg border-2"
            >
              <Link href="/docs" className="flex items-center">
                <span className="text-center">Get Started</span>
               <FiArrowRight />
              </Link>
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              className="text-lg px-8 py-6 border-2 hover:bg-gray-50 dark:hover:bg-gray-900 transition-all duration-300" 
              asChild
            >
              <a href="https://github.com/pritamawatade/lazyui" target="_blank" rel="noopener noreferrer" className="flex items-center">
                <FiGithub className="mr-2" /> View on GitHub
              </a>
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div variants={item as any} className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <stat.icon className="w-5 h-5 text-gray-600 dark:text-gray-400 mr-2" />
                  <span className="text-2xl font-bold text-gray-900 dark:text-white">
                    {stat.value}
                  </span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
