import { motion } from "framer-motion";
import { themes } from "../../lib/themes";
import { THEME } from "../../lib/constants";

type ThemeKey = keyof typeof themes;
const T = themes[THEME as ThemeKey];

export function Divider() {
  return (
    <div className="my-14 flex items-center justify-center">
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className={`h-px w-40 origin-left bg-gradient-to-r from-transparent via-black/20 to-transparent`}
      />
    </div>
  );
}
