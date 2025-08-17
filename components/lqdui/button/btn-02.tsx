import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Btn02({
    className,
    children = "Continue",
    ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
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
            {children}
        </Button>
    );
}
