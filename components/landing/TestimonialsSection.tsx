"use client";

import { motion } from "framer-motion";
import { FiStar } from "react-icons/fi";
import { IconBrandTwitter, IconBrandGithub } from "@tabler/icons-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Senior Frontend Developer",
    company: "Vercel",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    content: "Liquid UI has completely transformed how we build interfaces. The components are beautiful, accessible, and incredibly easy to customize. Our development speed increased by 40%.",
    rating: 5,
    social: IconBrandTwitter,
    handle: "@sarahchen"
  },
  {
    name: "Marcus Rodriguez",
    role: "Lead Designer",
    company: "Stripe",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    content: "The attention to detail in these components is outstanding. Every interaction feels polished and the design system is incredibly cohesive. A must-have for any React project.",
    rating: 5,
    social: IconBrandGithub,
    handle: "@marcusdev"
  },
  {
    name: "Emily Watson",
    role: "Full Stack Developer",
    company: "Linear",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    content: "I've tried many UI libraries, but Liquid UI stands out. The TypeScript support is excellent, and the copy-paste approach means no vendor lock-in. Absolutely love it!",
    rating: 5,
    social: IconBrandTwitter,
    handle: "@emilywatson"
  },
  {
    name: "David Kim",
    role: "Product Engineer",
    company: "Notion",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    content: "The dark mode implementation is flawless, and the animations are buttery smooth. Our users constantly compliment the UI since we switched to Liquid UI components.",
    rating: 5,
    social: IconBrandGithub,
    handle: "@davidkim"
  },
  {
    name: "Alex Thompson",
    role: "Frontend Architect",
    company: "Figma",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    content: "Finally, a UI library that doesn't compromise on performance or accessibility. The components are lightweight yet feature-rich. Perfect for our design system.",
    rating: 5,
    social: IconBrandTwitter,
    handle: "@alexthompson"
  },
  {
    name: "Lisa Park",
    role: "Senior Developer",
    company: "GitHub",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
    content: "The documentation is crystal clear, and the components work exactly as expected. No surprises, no bugs, just beautiful UI that works. Highly recommended!",
    rating: 5,
    social: IconBrandGithub,
    handle: "@lisapark"
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Loved by developers
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block">
              around the world
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Join thousands of developers who are building amazing products with Liquid UI.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative bg-gray-50 dark:bg-gray-900 p-8 rounded-2xl border border-gray-200/50 dark:border-gray-800/50 hover:border-blue-200 dark:hover:border-blue-800 transition-all duration-300 h-full">
                {/* Quote content */}
                <div className="mb-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FiStar key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    "{testimonial.content}"
                  </p>
                </div>

                {/* Author info */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {testimonial.role} at {testimonial.company}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center text-gray-400 hover:text-blue-500 transition-colors">
                    <testimonial.social className="w-4 h-4 mr-1" />
                    <span className="text-xs">{testimonial.handle}</span>
                  </div>
                </div>

                {/* Decorative gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 text-center"
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">98%</div>
              <div className="text-gray-600 dark:text-gray-400">Developer Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">2.8k+</div>
              <div className="text-gray-600 dark:text-gray-400">Active Users</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">45k+</div>
              <div className="text-gray-600 dark:text-gray-400">Weekly Downloads</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}