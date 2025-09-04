import { useMemo } from "react";
import { motion } from "framer-motion";
import { Heart, Sparkles, Gift, Camera, Star, Music2, Crown, ArrowDownRight } from "lucide-react";

import { DAD_NAME, BIRTHDAY_YEAR, THEME, GALLERY } from "./lib/constants";
import { themes } from "./lib/themes";

import { Confetti, BackdropGlow, Starscape } from "./components/effects";
import { Section, Divider } from "./components/layout";
import { Button, Card, CardHeader, CardTitle, CardContent, Badge } from "./components/ui";

type ThemeKey = keyof typeof themes;
const T = themes[THEME as ThemeKey];

export default function BirthdayCard() {
  const yearSpan = `${BIRTHDAY_YEAR}`;

  return (
    <div className={`min-h-screen w-full bg-gradient-to-br ${T.bg} relative text-zinc-900`}>
      <Starscape />
      <BackdropGlow />
      <Confetti />

      {/* Hero */}
      <header className="relative">
        <Section id="hero">
          <div className="pt-20 pb-14 md:pt-28 md:pb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              className={`mx-auto max-w-3xl text-center ${T.text}`}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/40 px-3 py-1 text-sm backdrop-blur">
                <Sparkles className="size-4" />
                <span>Happy Birthday {DAD_NAME}</span>
              </div>
              <h1 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-6xl">
                Your kindness set our compass. Your laughter kept us warm.
              </h1>
              <p className="mx-auto mt-5 max-w-2xl text-zinc-700">
                Today we celebrate the everyday hero who made hard days softer and good days brighter. Thank you for the lessons, the dad jokes, and the unshakable love.
              </p>

              <div className="mt-8 flex items-center justify-center gap-3">
                <Button className={`${T.accent} text-white shadow-lg shadow-black/10`}
                  onClick={() => document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" })}>
                  <Camera className="mr-2 size-4" /> Memories
                </Button>
                <Button variant="outline" className={`backdrop-blur border-white/50 ${T.ring}`} onClick={() => document.getElementById("letter")?.scrollIntoView({ behavior: "smooth" })}>
                  <Heart className="mr-2 size-4" /> Open Letter
                </Button>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="mx-auto mt-12 grid w-full max-w-5xl grid-cols-2 gap-3 sm:grid-cols-4"
              >
                {["Steadfast", "Clever", "Patient", "Funny"].map((tag) => (
                  <motion.div
                    key={tag}
                    whileHover={{ y: -3 }}
                    className={`rounded-2xl border border-white/40 bg-white/50 px-4 py-3 text-sm font-medium backdrop-blur`}
                  >
                    {tag}
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 1.2 }}
                className="mt-10 flex items-center justify-center text-xs text-zinc-600"
              >
                <Crown className="mr-2 size-4" /> Year {yearSpan}
              </motion.div>
            </motion.div>
          </div>
        </Section>
      </header>

      <Divider />

      {/* Timeline */}
      <Section id="timeline" delay={0.1}>
        <div className="mx-auto max-w-4xl">
          <Card className="border-white/40 bg-white/60 backdrop-blur">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl">
                <Gift className="size-5" /> Milestones we treasure
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="relative ml-3 space-y-6 before:absolute before:left-2 before:top-0 before:h-full before:w-px before:bg-gradient-to-b before:from-black/10 before:to-black/0">
                {[
                  { title: "Little lessons with big impact", body: "You taught us the craft of doing things right, even when no one is watching." },
                  { title: "The day you backed our wild idea", body: "That simple yes unlocked a world that now defines us." },
                  { title: "Quiet strength", body: "You never asked for thanks. You just showed up. That is what real love looks like." },
                ].map((t, i) => (
                  <motion.li key={i} className="relative pl-8" initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.05 * i }}>
                    <div className={`absolute left-0 top-1 grid size-4 place-items-center rounded-full ${T.accent} ring-2 ring-white`}></div>
                    <h3 className="text-base font-semibold">{t.title}</h3>
                    <p className="mt-1 text-sm text-zinc-700">{t.body}</p>
                  </motion.li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </Section>

      <Divider />

      {/* Gallery */}
      <Section id="gallery" delay={0.15}>
        <div className="mx-auto max-w-6xl">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold flex items-center gap-2"><Camera className="size-5" /> Favorite snapshots</h2>
            <div className="text-xs text-zinc-600 flex items-center gap-1"><ArrowDownRight className="size-4" /> click a tile</div>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
            {GALLERY.map((g) => (
              <motion.figure
                key={g.src}
                whileHover={{ y: -4 }}
                className="group relative overflow-hidden rounded-2xl border border-white/50 bg-white/60 shadow-sm backdrop-blur"
              >
                <img src={g.src} alt={g.alt} className="h-44 w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/50 to-transparent p-2 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">
                  {g.alt}
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </Section>

      <Divider />

      {/* Letter */}
      <Section id="letter" delay={0.2}>
        <div className="mx-auto max-w-3xl">
          <Card className="border-white/40 bg-white/60 backdrop-blur">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl"><Heart className="size-5" /> A note from the heart</CardTitle>
            </CardHeader>
            <CardContent>
              <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.9 }} className="leading-relaxed text-zinc-800">
                Dear {DAD_NAME},
                <br />
                Thank you for steady hands when life shook a little. Thank you for bad puns that rescued good moods. Thank you for making room for our mistakes and cheering for our second tries. You taught us how to be brave, not by talking about courage, but by living it.
                <br /><br />
                Here is to more backyard music, more dinners that go long, and more stories that get better each time we tell them.
                <br /><br />
                We love you. Happy Birthday.
              </motion.p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Badge icon={<Music2 className="size-3" />}>Play the anthem later</Badge>
                <Badge icon={<Sparkles className="size-3" />}>Wish made</Badge>
                <Badge icon={<Heart className="size-3" />}>Family first</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>

      <Divider />

      {/* Footer */}
      <footer className="pb-16 pt-6">
        <Section id="footer" delay={0.25}>
          <div className="mx-auto max-w-4xl">
            <div className="rounded-2xl border border-white/40 bg-white/50 p-6 backdrop-blur">
              <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
                <div className="text-center sm:text-left">
                  <p className="text-sm text-zinc-600">Made with love by your family</p>
                  <p className="text-xs text-zinc-500">This little site is a hug that loops forever</p>
                </div>
                <Button className={`${T.accent} text-white shadow`} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                  Back to top
                </Button>
              </div>
            </div>
          </div>
        </Section>
      </footer>
    </div>
  );
}
