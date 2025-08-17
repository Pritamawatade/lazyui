import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";

interface Btn11Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children?: React.ReactNode;
    showIcon?: boolean;
}

export default function Btn11({
    className,
    children = "Button",
    showIcon = true,
    ...props
}: Btn11Props) {
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
            {...props}
        >
            <div className="flex items-center justify-center gap-2">
                <span className="relative">
                    {children}
                    <span className={cn(
                        "absolute -bottom-px left-0 w-full h-px",
                        "bg-linear-to-r from-zinc-400/0 via-zinc-400/50 to-zinc-400/0",
                        "dark:from-zinc-600/0 dark:via-zinc-600/50 dark:to-zinc-600/0",
                        "opacity-0 group-hover:opacity-100",
                        "transition-opacity duration-200"
                    )} />
                </span>
                {showIcon && (
                    <ChevronRight 
                        className={cn(
                            "w-4 h-4",
                            "transform group-hover:translate-x-0.5",
                            "transition-transform duration-200"
                        )}
                    />
                )}
            </div>
        </Button>
    );
} 