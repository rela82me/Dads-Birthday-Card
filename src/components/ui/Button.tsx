import React from "react";
import { themes } from "../../lib/themes";
import { THEME } from "../../lib/constants";

type ThemeKey = keyof typeof themes;
const T = themes[THEME as ThemeKey];

export function Button({ children, className = "", variant = "solid", onClick }: { children: React.ReactNode; className?: string; variant?: "solid" | "outline"; onClick?: () => void }) {
  const base = "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium transition active:scale-[.98]";
  const styles = variant === "outline" ? "border border-black/10 bg-white/60 hover:bg-white/80" : "shadow bg-black/90 text-white hover:bg-black";
  return (
    <button onClick={onClick} className={`${base} ${styles} ${className}`}>{children}</button>
  );
}
