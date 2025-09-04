import { motion } from "framer-motion";
import React from "react";

export function Section({ id, children, delay = 0 }: { id: string; children: React.ReactNode; delay?: number }) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.8, delay }}
      className="mx-auto max-w-6xl px-4 sm:px-6"
    >
      {children}
    </motion.section>
  );
}
