import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

interface Btn15Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
}

export default function Btn15({
  className,
  label = "Explore Component",
  ...props
}: Btn15Props) {
  return (
    <Button
      {...props}
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
    >
      {/* Main frosted glass layer */}
      {/* <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/[0.25] to-white/[0.05] dark:from-white/[0.15] dark:to-white/[0.02] pointer-events-none" /> */}

      {/* Top highlight - creates the glossy effect */}
      {/* <div className="absolute inset-x-0 top-0 h-1/2 rounded-t-full bg-gradient-to-b from-white/[0.4] to-transparent dark:from-white/[0.25] dark:to-transparent pointer-events-none" /> */}

      {/* Inner glow/rim light */}
      <div
        className="absolute inset-0 rounded-full pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(255,255,255,0.3) 0%, transparent 50%)",
          mask: "linear-gradient(black, black) content-box, linear-gradient(black, black)",
          maskComposite: "xor",
          padding: "1px",
        }}
      />

      {/* Content with proper contrast */}
      <div className="relative z-10 flex items-center justify-center gap-2">
        <span className="text-black/80 dark:text-white/90 font-medium text-sm tracking-wide">
          {label}
        </span>
        <ArrowUpRight className="w-4 h-4 text-black/60 dark:text-white/70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
      </div>
    </Button>
  );
}
