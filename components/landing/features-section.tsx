"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { MouseEvent } from "react";
import {
  Code2,
  Laptop,
  Lightbulb,
  Moon,
  Paintbrush,
  Zap,
} from "lucide-react";

const features = [
  {
    title: "Modern Components",
    description:
      "Pre-built modern UI components with stunning animations and interactions",
    icon: <Laptop className="w-6 h-6" />,
    gradient: "from-blue-600 to-cyan-400",
  },
  {
    title: "Dark Mode Ready",
    description:
      "Seamless dark mode support with perfect color schemes and contrasts",
    icon: <Moon className="w-6 h-6" />,
    gradient: "from-purple-600 to-pink-400",
  },
  {
    title: "Developer Experience",
    description:
      "TypeScript support, detailed documentation, and copy-paste ready code",
    icon: <Code2 className="w-6 h-6" />,
    gradient: "from-orange-600 to-yellow-400",
  },
  {
    title: "Customizable",
    description:
      "Highly customizable components using Tailwind CSS and CSS variables",
    icon: <Paintbrush className="w-6 h-6" />,
    gradient: "from-green-600 to-emerald-400",
  },
  {
    title: "Performance First",
    description:
      "Optimized for performance with minimal bundle size and lazy loading",
    icon: <Zap className="w-6 h-6" />,
    gradient: "from-red-600 to-rose-400",
  },
  {
    title: "Smart Defaults",
    description:
      "Thoughtfully designed default styles that look great out of the box",
    icon: <Lightbulb className="w-6 h-6" />,
    gradient: "from-violet-600 to-indigo-400",
  },
];

function FeatureCard({
  title,
  description,
  icon,
  gradient,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  gradient: string;
}) {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      className="relative group rounded-xl border border-white/10 bg-zinc-900 px-8 py-12 h-full"
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
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
        className={`absolute inset-px rounded-[11px] opacity-10 bg-gradient-to-br ${gradient}`}
      />
      <div className="relative">
        <div
          className={`inline-flex rounded-lg bg-gradient-to-br ${gradient} p-3`}
        >
          {icon}
        </div>
        <h3 className="mt-6 text-xl font-semibold text-white">{title}</h3>
        <p className="mt-2 text-zinc-400 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}

export function FeaturesSection() {
  return (
    <section className="relative py-20 sm:py-32 bg-black overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)]" />
      
      <div className="relative container mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-blue-500 font-semibold mb-4"
          >
            Why Choose Liquid UI?
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-white mb-6"
          >
            Everything you need to build modern interfaces
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-zinc-400"
          >
            A comprehensive suite of high-quality components, ready for your next project.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
