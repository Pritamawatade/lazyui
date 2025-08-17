"use client";

import { cn } from "@/lib/utils";
import { motion, useAnimation } from "motion/react";
import { Zap } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

interface Btn04Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    onPowerUp?: () => void;
    chargeDuration?: number;
}

export default function Btn04({
    className,
    onPowerUp,
    chargeDuration = 2000,
    ...props
}: Btn04Props) {
    const [isCharging, setIsCharging] = useState(false);
    const particleControls = useAnimation();
    const chargeControls = useAnimation();

    async function handleStart() {
        setIsCharging(true);
        chargeControls.set({ height: "100%", y: "100%" });
        await chargeControls.start({
            y: "0%",
            transition: {
                duration: chargeDuration / 1000,
                ease: "easeOut",
            },
        });

        await particleControls.start({
            scale: [1, 1.5],
            opacity: [1, 0],
            transition: { duration: 0.3 },
        });

        onPowerUp?.();
    }

    function handleEnd() {
        setIsCharging(false);
        chargeControls.stop();
        chargeControls.start({
            y: "100%",
            transition: { duration: 0.2 },
        });
    }

    return (
        <Button
         className={cn(
        "relative inline-flex items-center justify-center gap-2",
        "px-5 py-2.5 rounded-full backdrop-blur-xs",
        "bg-white/10 border border-white/20 shadow-inner",
        "text-black dark:text-white font-medium",
        "transition-all duration-300 hover:scale-[1.02]",
        "hover:backdrop-blur-3xl",
        "hover:bg-white/20",
        "ring-1 ring-inset ring-white/10",
        "hover:ring-white/20",
        "before:absolute before:inset-0 before:rounded-full before:bg-white/30 before:opacity-0",
        "hover:before:opacity-5",
        "overflow-hidden z-10",
        className
      )}
            onMouseDown={handleStart}
            onMouseUp={handleEnd}
            onMouseLeave={handleEnd}
            onTouchStart={handleStart}
            onTouchEnd={handleEnd}
            onTouchCancel={handleEnd}
            {...props}
        >
            <motion.div
                initial={{ height: "100%", y: "100%" }}
                animate={chargeControls}
                className={cn(
                    "absolute left-0 bottom-0 w-full",
                    "bg-linear-to-t from-indigo-400 to-indigo-300",
                    "dark:from-indigo-500 dark:to-indigo-400",
                    "opacity-50"
                )}
            />
            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={particleControls}
                className={cn(
                    "absolute inset-0",
                    "bg-indigo-200 dark:bg-indigo-400",
                    "rounded-full"
                )}
            />
            <span className="relative z-10 w-full flex items-center justify-center gap-2">
                <Zap
                    className={cn(
                        "w-4 h-4 transition-transform",
                        isCharging && "animate-bounce"
                    )}
                />
                {!isCharging ? "Power Up!" : "Charging..."}
            </span>
        </Button>
    );
}
