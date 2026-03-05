import { site } from "../content/site";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("theme");
    const isDark = saved ? saved === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches;
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  if (!mounted) {
    return (
      <span className="inline-block h-[38px] w-[86px] rounded-full border border-zinc-200 dark:border-zinc-800" />
    );
  }

  return (
    
    <button
      onClick={() => {
        const next = !dark;
        setDark(next);
        document.documentElement.classList.toggle("dark", next);
        localStorage.setItem("theme", next ? "dark" : "light");
      }}
      className="rounded-full border border-zinc-200 px-3 py-2 text-sm hover:bg-zinc-50 dark:border-zinc-800 dark:hover:bg-zinc-900"
    >
      {dark ? "Light" : "Dark"}
    </button>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="py-10">
      <h2 className="text-lg font-semibold tracking-tight">{title}</h2>
      <div className="mt-4 text-zinc-700 dark:text-zinc-300">{children}</div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-5 pb-24 pt-10 bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50 min-h-screen">
      <header className="flex items-start justify-between gap-6">
        <div>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">{site.location}</p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight">{site.name}</h1>
          <p className="mt-2 text-zinc-700 dark:text-zinc-300">{site.roleLine}</p>
          <p className="mt-4 leading-relaxed text-zinc-700 dark:text-zinc-300">{site.intro}</p>

          <div className="mt-5 flex flex-wrap gap-3">
            <a
              className="rounded-full border border-zinc-200 px-4 py-2 text-sm hover:bg-zinc-50 dark:border-zinc-800 dark:hover:bg-zinc-900"
              href={site.cv.href}
            >
              {site.cv.label}
            </a>

            <a className="underline underline-offset-4 hover:opacity-80" href={site.links.telegram}>Telegram</a>
            <a className="underline underline-offset-4 hover:opacity-80" href={site.links.github}>GitHub</a>
            <a className="underline underline-offset-4 hover:opacity-80" href={site.links.linkedin}>LinkedIn</a>
            <a className="underline underline-offset-4 hover:opacity-80" href={site.links.email}>Email</a>
          </div>
        </div>

        <ThemeToggle />
      </header>

      <div className="mt-10 border-t border-zinc-200 dark:border-zinc-800" />

      {site.caseGroups.map((g: any) => (
        <Section key={g.title} title={g.title}>
          <div className="grid gap-4">
            {g.items.length === 0 ? (
              <p className="text-sm text-zinc-600 dark:text-zinc-400">(кейсы добавим)</p>
            ) : (
              g.items.map((c: any) => (
                <Link
                  key={c.slug}
                  to={`/cases/${c.slug}`}
                  className="group block rounded-2xl border border-zinc-200 p-5 hover:bg-zinc-50 dark:border-zinc-800 dark:hover:bg-zinc-900"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-medium">{c.title}</h3>
                      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{c.subtitle}</p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {c.tags.map((t: string) => (
                          <span key={t} className="rounded-full border border-zinc-200 px-3 py-1 text-xs dark:border-zinc-800">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                    <span className="text-sm opacity-40 group-hover:opacity-80">→</span>
                  </div>
                </Link>
              ))
            )}
          </div>
        </Section>
      ))}

      <Section title="Experience">
        <div className="grid gap-4">
          {site.experience.map((e: any) => (
            <div key={e.title + e.period} className="rounded-2xl border border-zinc-200 p-5 dark:border-zinc-800">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <p className="font-medium">{e.title}</p>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">{e.period}</p>
              </div>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm">
                {e.bullets.map((b: string) => <li key={b}>{b}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Skills">
        <div className="flex flex-wrap gap-2">
          {site.skills.map((s: string) => (
            <span key={s} className="rounded-full border border-zinc-200 px-3 py-1 text-xs dark:border-zinc-800">
              {s}
            </span>
          ))}
        </div>
      </Section>

      <Section title="Courses">
        <ul className="list-disc pl-5">
          {site.courses.map((c: string) => <li key={c}>{c}</li>)}
        </ul>
      </Section>

      <Section title="Sport">
        <ul className="list-disc pl-5">
          {site.sport.map((s: string) => <li key={s}>{s}</li>)}
        </ul>
      </Section>

      <footer className="mt-10 border-t border-zinc-200 pt-8 text-sm text-zinc-600 dark:border-zinc-800 dark:text-zinc-400">
        © {new Date().getFullYear()} {site.name}.
      </footer>
    </main>
  );
}