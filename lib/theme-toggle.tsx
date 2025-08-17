"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { SunMoon } from "lucide-react";

export function ThemeToggle() {
    const { setTheme, theme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Don't render anything until mounted to prevent hydration mismatch
    if (!mounted) {
        return (
            <div className="w-5 h-5">
                {/* Placeholder to maintain layout */}
            </div>
        );
    }

    return (
        <div
            className="cursor-pointer"
            onClick={() => {
                setTheme(resolvedTheme === "dark" ? "light" : "dark");
            }}
        >
            {resolvedTheme === "light" ? (
                <SunMoon className="h-5 w-5 text-black" />
            ) : (
                <SunMoon
                    className="h-5 w-5 rotate-180 text-white"
                    color="white"
                />
            )}
        </div>
    );
}
