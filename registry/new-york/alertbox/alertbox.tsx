"use client"
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  AlertCircle,
  CheckCircle,
  AlertTriangle,
  Info,
} from "lucide-react";

interface AlertBoxProps {
  type?: "info" | "success" | "warning" | "error";
  title?: string;
  message?: string;
  onClose?: () => void;
  show?: boolean;
  autoDismiss?: boolean;
  dismissTime?: number;
}

const VARIANTS = {
  info: {
    bg: "bg-indigo-50",
    border: "border-indigo-500",
    text: "text-indigo-900",
    iconColor: "text-indigo-500",
    shadowColor: "shadow-indigo-200/50",
    icon: Info,
  },
  success: {
    bg: "bg-emerald-50",
    border: "border-emerald-500",
    text: "text-emerald-900",
    iconColor: "text-emerald-500",
    shadowColor: "shadow-emerald-200/50",
    icon: CheckCircle,
  },
  warning: {
    bg: "bg-amber-50",
    border: "border-amber-500",
    text: "text-amber-900",
    iconColor: "text-amber-500",
    shadowColor: "shadow-amber-200/50",
    icon: AlertTriangle,
  },
  error: {
    bg: "bg-rose-50",
    border: "border-rose-500",
    text: "text-rose-900",
    iconColor: "text-rose-500",
    shadowColor: "shadow-rose-200/50",
    icon: AlertCircle,
  },
} as const;

const AlertBox: React.FC<AlertBoxProps> = ({
  type = "info",
  title,
  message = "This is an alert message.",
  onClose,
  show = false,
  autoDismiss = false,
  dismissTime = 3000,
}) => {
  const variant = VARIANTS[type] || VARIANTS.info;
  const Icon = variant.icon;
  const [progress, setProgress] = useState<number>(100);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    let progressTimer: number;

    if (autoDismiss && show) {
      const startTime = Date.now();
      const endTime = startTime + dismissTime;

      const updateProgress = () => {
        const now = Date.now();
        const remaining = Math.max(0, endTime - now);
        const percentRemaining = (remaining / dismissTime) * 100;
        setProgress(percentRemaining);

        if (percentRemaining > 0) {
          progressTimer = requestAnimationFrame(updateProgress);
        }
      };

      progressTimer = requestAnimationFrame(updateProgress);

      timer = setTimeout(() => {
        onClose?.();
      }, dismissTime);
    } else if (show) {
      setProgress(100);
    }

    return () => {
      clearTimeout(timer);
      cancelAnimationFrame(progressTimer);
    };
  }, [autoDismiss, show, dismissTime, onClose]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && show) {
        onClose?.();
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [show, onClose]);

  return (
    <AnimatePresence>
      {show && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/20 backdrop-blur-sm">
          <motion.div
            className={`relative overflow-hidden ${variant.bg} ${variant.text} ${variant.border} border-l-4 shadow-lg ${variant.shadowColor} max-w-md w-full rounded-2xl`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            {autoDismiss && (
              <motion.div
                className={`absolute bottom-0 left-0 h-1 ${variant.border.replace("border", "bg")}`}
                initial={{ width: "100%" }}
                animate={{ width: `${progress}%` }}
                transition={{ ease: "linear" }}
              />
            )}

            <div className="flex items-start p-6">
              <div className={`shrink-0 ${variant.iconColor} mr-4`}>
                <motion.div
                  initial={{ rotate: -15, scale: 0.8 }}
                  animate={{ rotate: 0, scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 300 }}
                >
                  <Icon size={28} strokeWidth={1.75} />
                </motion.div>
              </div>

              <div className="flex-1 min-w-0">
                {title && (
                  <motion.h3
                    className="font-medium text-base mb-1"
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    {title}
                  </motion.h3>
                )}
                <motion.div
                  className="text-sm opacity-90"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {message}
                </motion.div>
              </div>

              <motion.button
                className={`ml-4 ${variant.iconColor} p-1 rounded-full hover:bg-black/5 active:bg-black/10 transition-all`}
                onClick={onClose}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <X size={20} />
              </motion.button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default AlertBox;    