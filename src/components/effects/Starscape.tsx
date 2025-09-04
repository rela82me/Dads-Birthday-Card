import { useMemo } from "react";
import { motion } from "framer-motion";

export function Starscape() {
  const stars = useMemo(
    () =>
      Array.from({ length: 180 }).map((_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        s: Math.random() * 1.2 + 0.3,
        o: Math.random() * 0.8 + 0.2,
      })),
    []
  );

  return (
    <div className="absolute inset-0 -z-20">
      {stars.map((s) => (
        <motion.div
          key={s.id}
          className="absolute rounded-full bg-black/50"
          style={{ left: `${s.x}%`, top: `${s.y}%`, width: s.s, height: s.s, opacity: s.o }}
          animate={{ opacity: [s.o, s.o * 0.6, s.o] }}
          transition={{ duration: 3 + Math.random() * 4, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}
