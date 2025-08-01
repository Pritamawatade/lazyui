import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Btn13Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    icon?: string;
    label?: string;
    className?: string;
}

export default function Btn13({
    label = "Welcome",
    className,
    ...props
}: Btn13Props) {
    return (
        <Button
            variant="ghost"
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
            {/* Gradient border using pseudo-element */}
            <div className="absolute inset-0 rounded-lg p-[2px] bg-linear-to-b from-[#336C4F] via-[#0C1F21] to-[#0D6437]">
                <div className="absolute inset-0 bg-[#0C1F21] rounded-lg opacity-90" />
            </div>

            {/* Base dark background */}
            <div className="absolute inset-[2px] bg-[#0C1F21] rounded-lg opacity-95" />

            {/* Multiple gradient layers */}
            <div className="absolute inset-[2px] bg-linear-to-r from-[#0C1F21] via-[#0C1F21] to-[#0C1F21] rounded-lg opacity-90" />
            <div className="absolute inset-[2px] bg-linear-to-b from-[#347B52]/40 via-[#0C1F21] to-[#0D6437]/30 rounded-lg opacity-80" />
            <div className="absolute inset-[2px] bg-linear-to-br from-[#87F6B7]/10 via-[#0C1F21] to-[#17362A]/50 rounded-lg" />

            {/* Subtle edge glow */}
            <div className="absolute inset-[2px] shadow-[inset_0_0_10px_rgba(135,246,183,0.1)] rounded-lg" />

            {/* Content wrapper */}
            <div className="relative flex items-center justify-center gap-2">
                <span className="text-lg font-light bg-linear-to-b from-[#8AEECA] to-[#73F8A8] bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(135,246,183,0.4)] tracking-tighter">
                    {label}
                </span>
            </div>

            {/* Hover effects */}
            <div className="absolute inset-[2px] opacity-0 transition-opacity duration-300 bg-linear-to-r from-[#17362A]/20 via-[#87F6B7]/10 to-[#17362A]/20 group-hover:opacity-100 rounded-lg" />
        </Button>
    );
}
