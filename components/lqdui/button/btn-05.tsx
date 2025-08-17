"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, useAnimation } from "motion/react";
import { Trash2Icon } from "lucide-react";
import { useState } from "react";

interface Btn_05Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    holdDuration?: number;
}

export default function Btn_05({
    className,
    holdDuration = 3000,
    ...props
}: Btn_05Props) {
    const [isHolding, setIsHolding] = useState(false);
    const controls = useAnimation();

    async function handleHoldStart() {
        setIsHolding(true);
        controls.set({ width: "0%" });
        await controls.start({
            width: "100%",
            transition: {
                duration: holdDuration / 1000,
                ease: "linear",
            },
        });
    }

    function handleHoldEnd() {
        setIsHolding(false);
        controls.stop();
        controls.start({
            width: "0%",
            transition: { duration: 0.1 },
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
            onMouseDown={handleHoldStart}
            onMouseUp={handleHoldEnd}
            onMouseLeave={handleHoldEnd}
            onTouchStart={handleHoldStart}
            onTouchEnd={handleHoldEnd}
            onTouchCancel={handleHoldEnd}
            {...props}
        >
            <motion.div
                initial={{ width: "0%" }}
                animate={controls}
                className={cn(
                    "absolute left-0 top-0 h-full",
                    "bg-red-200/30",
                    "dark:bg-red-300/30"
                )}
            />
            <span className="relative z-10 w-full flex items-center justify-center gap-2">
                <Trash2Icon className="w-4 h-4" />
                {!isHolding ? "Hold me" : "Release"}
            </span>
        </Button>
    );
}
