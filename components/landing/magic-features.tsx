"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { MouseEvent } from "react";
import { GradientShadow } from "../ui/gradient-effects";
import {
  Layers,
  Palette,
  Zap,
  Moon,
  Code2,
  Sparkles,
  Box,
  Keyboard,
} from "lucide-react";

const features = [
  {
    name: "Modern Components",
    description:
      "Beautifully designed components that look great out of the box. Each component is built with accessibility in mind.",
    icon: Layers,
    gradient: "from-blue-600/20 to-cyan-600/20",
    hover: "group-hover:from-blue-600/30 group-hover:to-cyan-600/30",
  },
  {
    name: "Customizable",
    description:
      "Highly customizable components using Tailwind CSS utility classes and CSS variables. Make it match your brand.",
    icon: Palette,
    gradient: "from-purple-600/20 to-pink-600/20",
    hover: "group-hover:from-purple-600/30 group-hover:to-pink-600/30",
  },
  {
    name: "Performance",
    description:
      "Optimized for performance with tree-shaking, code-splitting and minimal runtime overhead.",
    icon: Zap,
    gradient: "from-orange-600/20 to-red-600/20",
    hover: "group-hover:from-orange-600/30 group-hover:to-red-600/30",
  },
  {
    name: "Dark Mode",
    description:
      "Built-in dark mode support with smart defaults. Easily customize the color scheme to your needs.",
    icon: Moon,
    gradient: "from-indigo-600/20 to-violet-600/20",
    hover: "group-hover:from-indigo-600/30 group-hover:to-violet-600/30",
  },
  {
    name: "Developer Experience",
    description:
      "Written in TypeScript with full type support. Comprehensive documentation with examples.",
    icon: Code2,
    gradient: "from-green-600/20 to-emerald-600/20",
    hover: "group-hover:from-green-600/30 group-hover:to-emerald-600/30",
  },
  {
    name: "Animations",
    description:
      "Smooth animations and transitions built-in. Create engaging user experiences with minimal effort.",
    icon: Sparkles,
    gradient: "from-yellow-600/20 to-amber-600/20",
    hover: "group-hover:from-yellow-600/30 group-hover:to-amber-600/30",
  },
  {
    name: "Copy & Paste",
    description:
      "Simply copy and paste the code into your project. No complex setup or configuration required.",
    icon: Box,
    gradient: "from-rose-600/20 to-pink-600/20",
    hover: "group-hover:from-rose-600/30 group-hover:to-pink-600/30",
  },
  {
    name: "Keyboard Navigation",
    description:
      "Full keyboard navigation support. All components are built with accessibility in mind.",
    icon: Keyboard,
    gradient: "from-teal-600/20 to-cyan-600/20",
    hover: "group-hover:from-teal-600/30 group-hover:to-cyan-600/30",
  },
];

function FeatureCard({
  name,
  description,
  icon: Icon,
  gradient,
  hover,
}: (typeof features)[number]) {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: MouseEvent<HTMLDivElement>) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      className="group relative rounded-2xl bg-zinc-900 border border-zinc-800 px-8 py-12"
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              450px circle at ${mouseX}px ${mouseY}px,
              rgba(255,255,255,0.1),
              transparent 80%
            )
          `,
        }}
      />
      <div
        className={`absolute inset-px rounded-[15px] opacity-20 blur-xl transition-all duration-500 ${gradient} ${hover}`}
      />
      <div className="relative">
        <div className={`inline-flex rounded-xl bg-gradient-to-br ${gradient} p-3`}>
          <Icon className="h-6 w-6 text-white" />
        </div>
        <h3 className="mt-6 text-xl font-medium text-white">{name}</h3>
        <p className="mt-2 text-zinc-400 text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

export function MagicFeatures() {
  return (
    <section className="relative py-20 sm:py-32 bg-black">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black" />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mx-auto lg:max-w-none">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-sm font-semibold text-violet-500 tracking-wide uppercase mb-4"
            >
              Features
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-400 mb-4"
            >
              Everything you need to build modern UIs
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-zinc-400"
            >
              A comprehensive suite of high-quality components, ready for your next project.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
