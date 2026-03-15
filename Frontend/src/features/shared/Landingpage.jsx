import React from "react";
import { Link } from "react-router-dom";

const spotlightCards = [
  {
    title: "Midnight DJ Sets",
    text: "Curated mixes for late-night focus, deep drives, and after-hours energy.",
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Mood-Matched Playlists",
    text: "Jump from calm acoustic mornings to heavy bass workouts in one tap.",
    image:
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Live Concert Energy",
    text: "Bring stage lights, crowd rush, and festival warmth right into your queue.",
    image:
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=900&q=80",
  },
];

const stats = [
  { value: "24/7", label: "music discovery flow" },
  { value: "50+", label: "mood combinations" },
  { value: "1 tap", label: "from feeling to playlist" },
];

const Landingpage = () => {
  return (
    <main className="min-h-screen overflow-hidden bg-[#090909] text-white">
      <section className="relative isolate">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(251,146,60,0.35),_transparent_38%),radial-gradient(circle_at_bottom_right,_rgba(234,88,12,0.25),_transparent_32%)]" />
        <div className="absolute left-[-8rem] top-20 h-72 w-72 rounded-full bg-[#f97316]/20 blur-3xl" />
        <div className="absolute right-[-6rem] top-12 h-64 w-64 rounded-full bg-[#ea580c]/20 blur-3xl" />

        <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 py-12 lg:px-10">
          <nav className="mb-14 flex items-center justify-between">
            <div className="text-2xl font-black uppercase tracking-[0.35em] text-orange-400">
              Moodify
            </div>
            <div className="flex items-center gap-3">
              <Link
                to="/login"
                className="rounded-full border border-orange-500/40 px-5 py-2 text-sm font-semibold text-orange-100 transition hover:border-orange-300 hover:text-white"
              >
                Sign in
              </Link>
              <Link
                to="/register"
                className="rounded-full bg-orange-500 px-5 py-2 text-sm font-semibold text-black transition hover:bg-orange-400"
              >
                Create account
              </Link>
            </div>
          </nav>

          <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <div className="mb-5 inline-flex rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2 text-sm font-medium text-orange-200">
                Music that matches your exact vibe
              </div>
              <h1 className="max-w-3xl text-5xl font-black leading-tight sm:text-6xl lg:text-7xl">
                Turn every mood into an
                <span className="block text-orange-400">immersive soundtrack.</span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
                Discover songs for focus, joy, heartbreak, workouts, and midnight
                drives with a bold player experience built around emotion.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  to="/login"
                  className="rounded-full bg-orange-500 px-7 py-4 text-center text-base font-bold text-black transition hover:bg-orange-400"
                >
                  Start listening
                </Link>
                <Link
                  to="/register"
                  className="rounded-full border border-zinc-700 bg-black/40 px-7 py-4 text-center text-base font-semibold text-white transition hover:border-orange-500/60 hover:text-orange-200"
                >
                  Join Moodify
                </Link>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm"
                  >
                    <div className="text-2xl font-black text-orange-400">
                      {stat.value}
                    </div>
                    <div className="mt-1 text-sm text-zinc-300">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-6 top-8 hidden h-28 w-28 rounded-full border border-orange-400/40 lg:block" />
              <div className="absolute -right-6 bottom-10 hidden h-24 w-24 rounded-full bg-orange-500/20 blur-2xl lg:block" />
              <div className="overflow-hidden rounded-[2rem] border border-orange-500/20 bg-[#111111] shadow-[0_30px_100px_rgba(0,0,0,0.6)]">
                <div
                  className="min-h-[520px] bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "linear-gradient(180deg, rgba(9,9,9,0.15), rgba(9,9,9,0.88)), url('https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1200&q=80')",
                  }}
                >
                  <div className="flex min-h-[520px] flex-col justify-between p-6">
                    <div className="flex items-center justify-between">
                      <div className="rounded-full bg-black/55 px-4 py-2 text-sm font-medium text-orange-200 backdrop-blur-sm">
                        Now playing
                      </div>
                      <div className="rounded-full border border-white/15 bg-black/45 px-4 py-2 text-sm text-zinc-100">
                        Burnt Orange Sessions
                      </div>
                    </div>

                    <div className="rounded-[1.75rem] border border-white/10 bg-black/55 p-5 backdrop-blur-md">
                      <div className="text-sm uppercase tracking-[0.3em] text-orange-300">
                        Featured mix
                      </div>
                      <div className="mt-3 text-3xl font-black">
                        Heatwave Nights
                      </div>
                      <div className="mt-2 text-zinc-300">
                        Bass-heavy drops, glowing synths, and live-stage intensity.
                      </div>
                      <div className="mt-6 flex items-center gap-3">
                        <button className="rounded-full bg-orange-500 px-5 py-3 text-sm font-bold text-black transition hover:bg-orange-400">
                          Play now
                        </button>
                        <button className="rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:border-orange-400 hover:text-orange-200">
                          Explore moods
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-10">
        <div className="mb-8 flex items-end justify-between gap-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-300">
              Built for music lovers
            </p>
            <h2 className="mt-3 text-3xl font-black sm:text-4xl">
              Explore scenes that feel alive.
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-zinc-400">
            A cinematic landing page with warm tones, strong contrast, and artist-led
            imagery to make the product feel energetic from the first screen.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {spotlightCards.map((card) => (
            <article
              key={card.title}
              className="group overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#121212] shadow-[0_20px_60px_rgba(0,0,0,0.45)]"
            >
              <div
                className="h-72 bg-cover bg-center transition duration-500 group-hover:scale-105"
                style={{
                  backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.05), rgba(0,0,0,0.65)), url('${card.image}')`,
                }}
              />
              <div className="p-6">
                <h3 className="text-2xl font-black text-orange-300">{card.title}</h3>
                <p className="mt-3 text-sm leading-7 text-zinc-300">{card.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Landingpage;
