import { useMemo } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { themes } from "../../lib/themes";
import { THEME } from "../../lib/constants";

type ThemeKey = keyof typeof themes;
const T = themes[THEME as ThemeKey];

export function Confetti() {
  const pieces = useMemo(
    () =>
      Array.from({ length: 70 }).map((_, i) => ({
        id: i,
        size: Math.random() * 10 + 6,
        x: Math.random() * 100,
        delay: Math.random() * 4,
        duration: Math.random() * 6 + 6,
        rotate: Math.random() * 180,
      })),
    []
  );

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {pieces.map((p) => (
        <motion.div
          key={p.id}
          initial={{ y: -50, opacity: 0, rotate: 0 }}
          animate={{ y: [ -50, 110 + Math.random() * 10 ], opacity: [0, 1, 1, 0.9], rotate: p.rotate }}
          transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: "easeInOut" }}
          className="absolute"
          style={{ left: `${p.x}%` }}
        >
          <Star className="size-4 opacity-60" />
        </motion.div>
      ))}
    </div>
  );
}
