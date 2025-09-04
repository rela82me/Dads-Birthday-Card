import React from "react";

export function Badge({ children, icon }: { children: React.ReactNode; icon?: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full border border-black/10 bg-white/80 px-3 py-1 text-xs shadow-sm backdrop-blur-md">
      {icon}
      {children}
    </span>
  );
}
