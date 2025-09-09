"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { Copy } from "lucide-react";

const examples = [
  {
    name: "Gradient Button",
    description: "Beautiful gradient buttons with hover effects",
    code: `<Button
  variant="gradient"
  className="bg-gradient-to-r from-violet-600 to-indigo-600"
>
  Get Started
</Button>`,
    preview: (
      <Button
        className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white"
      >
        Get Started
      </Button>
    ),
  },
  {
    name: "Card Component",
    description: "Modern cards with hover effects",
    code: `<Card className="group hover:border-violet-500/50">
  <CardHeader>
    <CardTitle>Beautiful Card</CardTitle>
    <CardDescription>With smooth transitions</CardDescription>
  </CardHeader>
  <CardContent>
    Content goes here
  </CardContent>
</Card>`,
    preview: (
      <div className="w-full max-w-sm rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 transition-colors duration-300 hover:border-violet-500/50">
        <div className="space-y-1">
          <h3 className="text-lg font-medium text-white">Beautiful Card</h3>
          <p className="text-sm text-zinc-400">With smooth transitions</p>
        </div>
        <div className="mt-4 text-zinc-400">Content goes here</div>
      </div>
    ),
  },
  {
    name: "Input Field",
    description: "Sleek input fields with animations",
    code: `<Input
  placeholder="Enter your email"
  className="border-zinc-800 bg-zinc-900/50"
/>`,
    preview: (
      <input
        type="text"
        placeholder="Enter your email"
        className="w-full rounded-lg border border-zinc-800 bg-zinc-900/50 px-4 py-2 text-white placeholder:text-zinc-500 focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500/50"
      />
    ),
  },
];

function CodeBlock({ code }: { code: string }) {
  return (
    <div className="relative group">
      <pre className="overflow-x-auto rounded-lg bg-zinc-900 p-4 text-sm text-zinc-300">
        <code>{code}</code>
      </pre>
      <button className="absolute right-4 top-4 p-2 opacity-0 transition-opacity group-hover:opacity-100">
        <Copy className="h-4 w-4 text-zinc-500 hover:text-zinc-300" />
      </button>
    </div>
  );
}

function ShowcaseItem({
  name,
  description,
  code,
  preview,
  index,
}: {
  name: string;
  description: string;
  code: string;
  preview: React.ReactNode;
  index: number;
}) {
  const itemRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: itemRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <motion.div
      ref={itemRef}
      style={{ y, opacity }}
      className={cn(
        "grid gap-8",
        index % 2 === 0 ? "md:grid-cols-[1fr,1.5fr]" : "md:grid-cols-[1.5fr,1fr]"
      )}
    >
      <div
        className={cn(
          "flex flex-col justify-center space-y-6",
          index % 2 === 0 ? "md:order-1" : "md:order-2"
        )}
      >
        <div>
          <h3 className="text-2xl font-semibold text-white mb-2">{name}</h3>
          <p className="text-zinc-400">{description}</p>
        </div>
        <CodeBlock code={code} />
      </div>
      <div
        className={cn(
          "flex items-center justify-center p-8 rounded-xl border border-zinc-800 bg-zinc-900/50",
          index % 2 === 0 ? "md:order-2" : "md:order-1"
        )}
      >
        {preview}
      </div>
    </motion.div>
  );
}

export function MagicShowcase() {
  return (
    <section className="relative py-20 sm:py-32 bg-black overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black" />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-sm font-semibold text-violet-500 tracking-wide uppercase mb-4"
          >
            Components
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-400 mb-4"
          >
            Beautiful and accessible components
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-zinc-400"
          >
            Pre-built components that you can copy and paste into your apps.
            Accessible. Customizable. Open Source.
          </motion.p>
        </div>

        <div className="space-y-32">
          {examples.map((example, index) => (
            <ShowcaseItem key={index} {...example} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
