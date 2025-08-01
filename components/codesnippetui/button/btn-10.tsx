"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Sun, Moon, Laptop } from "lucide-react";
import { useState } from "react";

type ThemeMode = "light" | "dark" | "system";

interface Btn10Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "pill" | "minimal" | "ghost";
    size?: "sm" | "default" | "lg";
    showLabel?: boolean;
    defaultMode?: ThemeMode;
    onModeChange?: (mode: ThemeMode) => void;
}

export default function Btn10({
    className,
    variant = "minimal",
    size = "default",
    showLabel = true,
    defaultMode = "system",
    onModeChange,
    ...props
}: Btn10Props) {
    const [mode, setMode] = useState<ThemeMode>(defaultMode);

    const handleClick = () => {
        const modes: ThemeMode[] = ["light", "dark", "system"];
        const currentIndex = modes.indexOf(mode);
        const nextMode = modes[(currentIndex + 1) % modes.length];
        setMode(nextMode);
        onModeChange?.(nextMode);
    };

    const getIcon = () => {
        switch (mode) {
            case "light":
                return Sun;
            case "dark":
                return Moon;
            case "system":
                return Laptop;
        }
    };

    const Icon = getIcon();

    const variants = {
        pill: [
            "rounded-full",
            "bg-linear-to-b from-white to-zinc-50",
            "dark:from-zinc-900 dark:to-zinc-800",
            "border border-zinc-200 dark:border-zinc-800",
            "hover:border-zinc-300 dark:hover:border-zinc-700",
            "shadow-xs",
        ],
        minimal: [
            "rounded-lg",
            "bg-zinc-100 dark:bg-zinc-800",
            "hover:bg-zinc-200 dark:hover:bg-zinc-700",
        ],
        ghost: [
            "rounded-lg",
            "hover:bg-zinc-100 dark:hover:bg-zinc-800",
            "border border-zinc-200 dark:border-zinc-800",
        ],
    };

    const sizes = {
        sm: "h-8 px-3 text-sm",
        default: "h-10 px-4",
        lg: "h-11 px-5",
    };

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
            onClick={handleClick}
            {...props}
        >
            <div
                className={cn(
                    "flex items-center gap-2",
                    "transition-all duration-200"
                )}
            >
                <Icon
                    className={cn(
                        "transition-all duration-200",
                        size === "sm" && "w-3.5 h-3.5",
                        size === "default" && "w-4 h-4",
                        size === "lg" && "w-5 h-5",
                        "group-hover:rotate-[-8deg] group-hover:scale-110",
                        "group-active:scale-95"
                    )}
                />
                {showLabel && <span className="capitalize">{mode}</span>}
            </div>
            <span
                className={cn(
                    "absolute inset-0",
                    "bg-linear-to-r from-zinc-500/0 via-zinc-500/10 to-zinc-500/0",
                    "translate-x-[-50%]",
                    "group-hover:translate-x-[50%]",
                    "transition-transform duration-500",
                    "ease-out"
                )}
            />
        </Button>
    );
}
