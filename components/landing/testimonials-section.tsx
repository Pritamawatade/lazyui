"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    content:
      "Liquid UI has revolutionized how we build our interfaces. The components are not just beautiful, they're incredibly well thought out.",
    author: "Sarah Chen",
    role: "Senior Frontend Developer",
    avatar: "https://i.pravatar.cc/100?img=1",
  },
  {
    content:
      "The attention to detail in each component is impressive. It's saved us countless hours of development time.",
    author: "Mark Thompson",
    role: "Lead UI Engineer",
    avatar: "https://i.pravatar.cc/100?img=2",
  },
  {
    content:
      "Best UI library I've used in years. The animations are smooth, and the dark mode support is flawless.",
    author: "Lisa Rodriguez",
    role: "Product Designer",
    avatar: "https://i.pravatar.cc/100?img=3",
  },
];

function TestimonialCard({
  content,
  author,
  role,
  avatar,
  index,
}: {
  content: string;
  author: string;
  role: string;
  avatar: string;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative group"
    >
      <div className="absolute -inset-px rounded-xl bg-gradient-to-br from-blue-500 to-violet-500 opacity-50 blur-lg group-hover:opacity-75 transition-opacity" />
      <div className="relative rounded-xl bg-zinc-900 border border-white/10 p-8">
        <div className="flex items-start gap-4">
          <div className="relative w-12 h-12 rounded-full overflow-hidden">
            <Image
              src={avatar}
              alt={author}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-lg font-medium text-white">{author}</p>
            <p className="text-sm text-zinc-400">{role}</p>
          </div>
        </div>
        <div className="mt-6">
          <svg
            className="h-8 w-8 text-zinc-600"
            fill="currentColor"
            viewBox="0 0 32 32"
            aria-hidden="true"
          >
            <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
          </svg>
          <p className="mt-4 text-zinc-300 leading-relaxed">{content}</p>
        </div>
      </div>
    </motion.div>
  );
}

export function TestimonialsSection() {
  return (
    <section className="relative py-20 sm:py-32 bg-black overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_0%_200px,#3e3e3e,transparent)]" />

      <div className="relative container mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-blue-500 font-semibold mb-4"
          >
            Testimonials
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-white mb-6"
          >
            Loved by Developers
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-zinc-400"
          >
            Here's what developers are saying about Liquid UI.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
