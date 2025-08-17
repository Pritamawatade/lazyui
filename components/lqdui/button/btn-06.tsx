"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Check, Copy } from "lucide-react";
import { useState } from "react";

interface Btn06Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    textToCopy: string;
    successDuration?: number;
}

export default function Btn06({
    className,
    textToCopy = "https://ui.codesnipet.dev/",
    successDuration = 1000,
    ...props
}: Btn06Props) {
    const [isCopied, setIsCopied] = useState(false);

    async function handleCopy() {
        try {
            await navigator.clipboard.writeText(textToCopy);
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), successDuration);
        } catch (err) {
            console.error("Failed to copy text:", err);
        }
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
            onClick={handleCopy}
            {...props}
        >
            <div
                className={cn(
                    "w-full flex items-center justify-center gap-2",
                    "transition-transform duration-200",
                    isCopied && "scale-105"
                )}
            >
                {isCopied ? (
                    <>
                        <Check className="w-4 h-4 text-emerald-500" />
                        <span>Copied!</span>
                    </>
                ) : (
                    <>
                        <Copy
                            className={cn(
                                "w-4 h-4 transition-transform duration-200",
                                "group-hover:scale-110"
                            )}
                        />
                        <span>Copy code</span>
                    </>
                )}
            </div>
        </Button>
    );
}
