"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedTextProps {
  text: string | string[];
  className?: string;
  strokeColor?: string;
  el?: any;
}

const defaultAnimations = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export const AnimatedText = ({
  text,
  className,
  strokeColor,
  el: Element = "p",
}: AnimatedTextProps) => {
  const words = Array.isArray(text) ? text : text.split(" ");

  return (
    <motion.div
      className="flex flex-wrap w-full"
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.1,
          },
        },
      }}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, index) => (
        <div key={index} className="inline-block mr-2">
          <motion.span
            className={cn(
              strokeColor ? `text-transparent bg-clip-text` : "",
              className
            )}
            variants={defaultAnimations}
            style={
              strokeColor
                ? {
                    WebkitTextStroke: `1px ${strokeColor}`,
                  }
                : {}
            }
          >
            {word}&nbsp;
          </motion.span>
        </div>
      ))}
    </motion.div>
  );
};
