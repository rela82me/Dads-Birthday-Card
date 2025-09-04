// Tailwind theme tokens
export const themes = {
  gold: {
    bg: "from-amber-100 via-rose-100 to-amber-50",
    glow: "bg-amber-400/40",
    text: "text-amber-900",
    accent: "bg-gradient-to-br from-amber-500 to-rose-400",
    ring: "ring-amber-500/40",
  },
  ocean: {
    bg: "from-cyan-100 via-sky-100 to-indigo-100",
    glow: "bg-sky-400/40",
    text: "text-sky-900",
    accent: "bg-gradient-to-br from-sky-500 to-indigo-500",
    ring: "ring-sky-500/40",
  },
  forest: {
    bg: "from-emerald-100 via-lime-100 to-emerald-50",
    glow: "bg-emerald-400/40",
    text: "text-emerald-900",
    accent: "bg-gradient-to-br from-emerald-500 to-teal-500",
    ring: "ring-emerald-500/40",
  },
  violet: {
    bg: "from-fuchsia-100 via-violet-100 to-rose-100",
    glow: "bg-violet-400/40",
    text: "text-violet-900",
    accent: "bg-gradient-to-br from-violet-600 to-fuchsia-500",
    ring: "ring-violet-500/40",
  },
} as const;
