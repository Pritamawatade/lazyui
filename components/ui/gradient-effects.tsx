import { cn } from "@/lib/utils";

export const GradientShadow = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="relative">
      <div
        className={cn(
          "absolute inset-0 blur-xl opacity-50 dark:opacity-30 transition-opacity duration-500 group-hover:opacity-70",
          className
        )}
      />
      <div className="relative">{children}</div>
    </div>
  );
};

export const RadialGradient = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="relative">
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-r from-violet-500/30 via-transparent to-fuchsia-500/30 opacity-0 transition-opacity duration-500 group-hover:opacity-100",
          className
        )}
        style={{
          maskImage: "radial-gradient(circle at center, black, transparent)",
          WebkitMaskImage: "radial-gradient(circle at center, black, transparent)",
        }}
      />
      {children}
    </div>
  );
};
