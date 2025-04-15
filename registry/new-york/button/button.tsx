"use client";
import { HTMLMotionProps } from "framer-motion";
import React, { useState, MouseEvent } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "danger" | "success";
type ButtonSize = "small" | "medium" | "large";

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: React.ReactNode;
  children: React.ReactNode;
}

const buttonStyles = {
  base: "px-6 py-3 font-medium tracking-wide transition-all duration-300 ease-out border-none outline-none",
  variants: {
    primary: "bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 border-t border-blue-400/30",
    secondary: "bg-gradient-to-r from-slate-700 to-gray-800 text-white hover:from-slate-800 hover:to-gray-900 border-t border-slate-500/30",
    danger: "bg-gradient-to-r from-rose-600 to-red-600 text-white hover:from-rose-700 hover:to-red-700 border-t border-rose-400/30",
    success: "bg-gradient-to-r from-emerald-600 to-green-600 text-white hover:from-emerald-700 hover:to-green-700 border-t border-emerald-400/30",
  },
  sizes: {
    small: "text-xs px-4 py-2",
    medium: "text-sm px-6 py-3",
    large: "text-base px-8 py-4",
  },
  shadows: {
    primary: "rgba(37, 99, 235, 0.25)",
    secondary: "rgba(107, 114, 128, 0.25)",
    danger: "rgba(225, 29, 72, 0.25)",
    success: "rgba(5, 150, 105, 0.25)",
  },
};

export default function Button({
  variant = "primary",
  size = "medium",
  children,
  icon,
  onClick,
  disabled = false,
  className,
  ...props
}: ButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    if (disabled) return;

    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const ripple = document.createElement("span");
    ripple.style.position = "absolute";
    ripple.style.backgroundColor = "rgba(255, 255, 255, 0.4)";
    ripple.style.borderRadius = "50%";
    ripple.style.width = "0px";
    ripple.style.height = "0px";
    ripple.style.top = `${y}px`;
    ripple.style.left = `${x}px`;
    ripple.style.transform = "translate(-50%, -50%)";
    ripple.style.pointerEvents = "none";

    button.appendChild(ripple);

    setTimeout(() => {
      ripple.style.width = `${button.offsetWidth * 2.5}px`;
      ripple.style.height = `${button.offsetWidth * 2.5}px`;
      ripple.style.opacity = "0";
      ripple.style.transition = "all 0.9s cubic-bezier(0.25, 0.8, 0.25, 1)";
    }, 0);

    setTimeout(() => {
      ripple.remove();
    }, 600);

    if (onClick) onClick(e); // safer check
  };

  return (
    <motion.button
      initial={{ boxShadow: "0 0 0 rgba(0, 0, 0, 0)" }}
      whileHover={{
        scale: 1.03,
        boxShadow: `0 8px 20px ${buttonStyles.shadows[variant]}`,
        borderRadius: "8px",
      }}
      whileTap={{
        scale: 0.97,
        boxShadow: "0 0 0 rgba(0, 0, 0, 0)",
      }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 15,
      }}
      className={cn(
        "relative overflow-hidden",
        buttonStyles.base,
        buttonStyles.variants[variant],
        buttonStyles.sizes[size],
        disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer",
        className
      )}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      disabled={disabled}
      {...props}
    >
      <motion.div
        className="relative z-10 flex items-center justify-center gap-2"
        animate={{ y: isHovered ? -2 : 0 }}
        transition={{ duration: 0.2 }}
      >
        {icon && (
          <motion.span
            className="inline-block"
            animate={{
              rotate: isHovered ? [0, -10, 10, -5, 5, 0] : 0,
              scale: isHovered ? 1.1 : 1,
            }}
            transition={{ duration: 0.4 }}
          >
            {icon}
          </motion.span>
        )}
        <span>{children}</span>
      </motion.div>
    </motion.button>
  );
}
