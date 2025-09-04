import { themes } from "../../lib/themes";
import { THEME } from "../../lib/constants";

type ThemeKey = keyof typeof themes;
const T = themes[THEME as ThemeKey];

export function BackdropGlow() {
  return (
    <div className="absolute inset-0 -z-10">
      <div className={`pointer-events-none absolute -top-40 left-10 h-72 w-72 blur-3xl ${T.glow} rounded-full`} />
      <div className={`pointer-events-none absolute bottom-0 right-0 h-96 w-96 blur-3xl ${T.glow} rounded-full`} />
    </div>
  );
}
