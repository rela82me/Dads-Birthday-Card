import React from "react";

export function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`rounded-3xl border border-black/10 bg-white/70 shadow-sm ${className}`}>{children}</div>;
}
