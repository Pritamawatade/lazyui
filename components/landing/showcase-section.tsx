"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "../ui/button";
import { FiCopy, FiCheck, FiPlay } from "react-icons/fi";
import { IconCode, IconEye } from "@tabler/icons-react";

const showcaseComponents = [
  {
    title: "Interactive Buttons",
    description:
      "Beautiful buttons with hover effects, gradients, and smooth animations",
    category: "Buttons",
    code: `<Button className="group relative overflow-hidden bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl">
  <span className="relative z-10 flex items-center">
    Get Started
    <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
    </svg>
  </span>
  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
</Button>`,
    preview: (
      <Button className="group relative overflow-hidden bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl">
        <span className="relative z-10 flex items-center">
          Get Started
          <svg
            className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </span>
        <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </Button>
    ),
  },
  {
    title: "Modern Input Fields",
    description:
      "Elegant form inputs with floating labels, validation states, and focus effects",
    category: "Forms",
    code: `<div className="relative group">
  <input
    type="email"
    className="peer w-full px-4 py-3 border-2 border-gray-200 rounded-lg bg-white dark:bg-gray-800 dark:border-gray-700 focus:border-blue-500 focus:outline-none transition-colors duration-200"
    placeholder=" "
  />
  <label className="absolute left-4 top-3 text-gray-500 transition-all duration-200 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-500 peer-[:not(:placeholder-shown)]:-translate-y-6 peer-[:not(:placeholder-shown)]:scale-75">
    Email address
  </label>
  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 peer-focus:opacity-100 transition-opacity duration-200 pointer-events-none" />
</div>`,
    preview: (
      <div className="relative group w-full max-w-sm">
        <input
          type="email"
          className="peer w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 focus:border-blue-500 focus:outline-none transition-colors duration-200"
          placeholder=" "
        />
        <label className="absolute left-4 top-3 text-gray-500 dark:text-gray-400 transition-all duration-200 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-500 peer-[:not(:placeholder-shown)]:-translate-y-6 peer-[:not(:placeholder-shown)]:scale-75 pointer-events-none">
          Email address
        </label>
        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 peer-focus:opacity-100 transition-opacity duration-200 pointer-events-none" />
      </div>
    ),
  },
  {
    title: "Glass Card Components",
    description:
      "Modern glassmorphism cards with backdrop blur and subtle animations",
    category: "Cards",
    code: `<div className="group relative p-6 rounded-2xl bg-white/10 dark:bg-gray-900/10 backdrop-blur-md border border-white/20 dark:border-gray-700/20 hover:bg-white/20 dark:hover:bg-gray-900/20 transition-all duration-300 shadow-xl hover:shadow-2xl">
  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
  <div className="relative">
    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mb-4">
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    </div>
    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Lightning Fast</h3>
    <p className="text-gray-600 dark:text-gray-300">Optimized for performance with minimal bundle size.</p>
  </div>
</div>`,
    preview: (
      <div className="group relative p-6 rounded-2xl bg-white/10 dark:bg-gray-900/10 backdrop-blur-md border border-white/20 dark:border-gray-700/20 hover:bg-white/20 dark:hover:bg-gray-900/20 transition-all duration-300 shadow-xl hover:shadow-2xl w-full max-w-sm">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="relative">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mb-4">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            Lightning Fast
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Optimized for performance with minimal bundle size.
          </p>
        </div>
      </div>
    ),
  },
];

function CodeBlock({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative">
      <pre className="p-4 rounded-lg bg-gray-900 dark:bg-gray-950 border border-gray-700 overflow-x-auto text-sm">
        <code className="text-gray-300">{code}</code>
      </pre>
      <button
        onClick={copyToClipboard}
        className="absolute top-3 right-3 p-2 rounded-md bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white transition-colors duration-200"
      >
        {copied ? (
          <FiCheck className="w-4 h-4" />
        ) : (
          <FiCopy className="w-4 h-4" />
        )}
      </button>
    </div>
  );
}

function ShowcaseItem({
  component,
  index,
}: {
  component: (typeof showcaseComponents)[0];
  index: number;
}) {
  const [activeTab, setActiveTab] = useState<"preview" | "code">("preview");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden shadow-lg"
    >
      {/* Header */}
      <div className="p-6 border-b border-gray-200 dark:border-gray-800">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/50 px-3 py-1 rounded-full">
            {component.category}
          </span>
        </div>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          {component.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300">
          {component.description}
        </p>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-gray-200 dark:border-gray-800">
        <button
          onClick={() => setActiveTab("preview")}
          className={`flex items-center px-6 py-3 text-sm font-medium transition-colors duration-200 ${
            activeTab === "preview"
              ? "text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400 bg-blue-50/50 dark:bg-blue-950/20"
              : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
          }`}
        >
          <IconEye className="w-4 h-4 mr-2" />
          Preview
        </button>
        <button
          onClick={() => setActiveTab("code")}
          className={`flex items-center px-6 py-3 text-sm font-medium transition-colors duration-200 ${
            activeTab === "code"
              ? "text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400 bg-blue-50/50 dark:bg-blue-950/20"
              : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
          }`}
        >
          <IconCode className="w-4 h-4 mr-2" />
          Code
        </button>
      </div>

      {/* Content */}
      <div className="p-6">
        {activeTab === "preview" ? (
          <div className="flex items-center justify-center min-h-[200px] bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-lg">
            {component.preview}
          </div>
        ) : (
          <CodeBlock code={component.code} />
        )}
      </div>
    </motion.div>
  );
}

export default function ShowcaseSection() {
  return (
    <section id="showcase" className="py-24 bg-gray-50/50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Beautiful components
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block">
              ready to use
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Explore our collection of carefully crafted components. Each one is
            designed with attention to detail and built for modern web
            applications.
          </p>
        </motion.div>

        <div className="space-y-12">
          {showcaseComponents.map((component, index) => (
            <ShowcaseItem key={index} component={component} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-20"
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4"
            asChild
          >
            <a href="/docs">
              <FiPlay className="w-4 h-4 mr-2" />
              Explore All Components
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
