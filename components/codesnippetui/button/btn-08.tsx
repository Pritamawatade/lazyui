"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Twitter, Facebook, Linkedin, Link } from "lucide-react";

export default function Btn08({
    className,
    ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
    const [isHovered, setIsHovered] = useState(false);
    const shareButtons = [
        { icon: Twitter },
        { icon: Facebook },
        { icon: Linkedin },
        { icon: Link },
    ];

    return (
        <div
            className="relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
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
                {...props}
            >
                <span className="flex items-center gap-2">
                    <Link className="w-4 h-4" />
                    Share
                </span>
            </Button>

            <div className="absolute top-0 left-0 flex h-10">
                {shareButtons.map((button, index) => (
                    <button
                        type="button"
                        key={index}
                        className={cn(
                            "h-10",
                            "w-10",
                            "flex items-center justify-center",
                            "bg-black dark:bg-white",
                            "text-white dark:text-black",
                            "transition-all duration-300",
                            index === 0 && "rounded-l-md",
                            index === 3 && "rounded-r-md",
                            "border-r border-white/10 dark:border-black/10 last:border-r-0",
                            "hover:bg-gray-900 dark:hover:bg-gray-100",
                            "transform",
                            isHovered
                                ? "translate-x-[0%] opacity-100"
                                : "translate-x-[-100%] opacity-0",
                            index === 0 && "transition-all duration-200",
                            index === 1 &&
                                "transition-all duration-200 delay-[50ms]",
                            index === 2 &&
                                "transition-all duration-200 delay-100",
                            index === 3 &&
                                "transition-all duration-200 delay-150"
                        )}
                    >
                        <button.icon className="w-4 h-4" />
                    </button>
                ))}
            </div>
        </div>
    );
}
