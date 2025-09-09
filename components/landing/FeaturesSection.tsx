"use client";

import { motion } from "framer-motion";
import { 
  IconCode, 
  IconDeviceMobile, 
  IconBolt, 
  IconBrandTypescript, 
  IconPalette, 
  IconShield,
  IconCopy,
  IconMoon,
  IconComponents
} from "@tabler/icons-react";

const features = [
  {
    icon: IconComponents,
    title: "50+ Components",
    description: "Comprehensive collection of beautiful, production-ready components for every use case.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: IconCopy,
    title: "Copy & Paste",
    description: "Simply copy the code and paste it into your project. No complex installation required.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: IconDeviceMobile,
    title: "Fully Responsive",
    description: "Every component is mobile-first and works perfectly across all screen sizes.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: IconBrandTypescript,
    title: "TypeScript First",
    description: "Built with TypeScript for excellent developer experience and type safety.",
    color: "from-blue-600 to-indigo-600",
  },
  {
    icon: IconPalette,
    title: "Customizable",
    description: "Easy to customize with CSS variables and Tailwind classes to match your brand.",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: IconMoon,
    title: "Dark Mode",
    description: "Built-in dark mode support with smooth transitions and beautiful themes.",
    color: "from-gray-600 to-gray-800",
  },
  {
    icon: IconBolt,
    title: "Performance",
    description: "Optimized for speed with minimal bundle size and excellent Core Web Vitals.",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: IconShield,
    title: "Accessible",
    description: "WCAG compliant components with proper ARIA labels and keyboard navigation.",
    color: "from-teal-500 to-cyan-500",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-gray-50/50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Everything you need to build
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block">
              amazing interfaces
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A complete design system with components, patterns, and tools to help you build 
            beautiful, accessible user interfaces faster than ever.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50 h-full">
                {/* Gradient background on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-blue-950/20 dark:to-purple-950/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Icon */}
                <div className={`relative w-14 h-14 rounded-xl mb-6 flex items-center justify-center bg-gradient-to-br ${feature.color} shadow-lg`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                
                {/* Content */}
                <div className="relative">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Decorative element */}
                <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
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
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/50 dark:to-purple-950/50 border border-blue-200/50 dark:border-blue-800/50">
            <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
              ✨ And much more coming soon...
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
