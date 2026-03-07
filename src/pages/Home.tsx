import { site } from "../content/site";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setMounted(true);

    const saved = localStorage.getItem("theme");
    const isDark = saved
      ? saved === "dark"
      : window.matchMedia("(prefers-color-scheme: dark)").matches;

    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  if (!mounted) {
    return (
      <span className="inline-block h-[38px] w-[86px] rounded-full border border-white/40" />
    );
  }

  
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="py-10">
      <h2 className="text-lg font-semibold tracking-tight">{title}</h2>
      <div className="mt-4 text-zinc-700 dark:text-zinc-300">{children}</div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50">
      <section
        className="relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(15,63,122,0.5), rgba(15,63,122,0.2)), url(${site.hero.background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="mx-auto max-w-3xl px-5 pt-16 pb-12">
          <div className="h-[220px] sm:h-[320px]" />

          <div className="flex items-end justify-between gap-6">
            <div className="flex items-end gap-4">
              <img
                src={site.hero.avatar}
                alt={site.name}
                className="h-28 w-28 rounded-full border-2 border-white object-cover shadow-lg sm:h-40 sm:w-40"
              />

              <div className="pb-2 text-white">
                <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                  {site.name}
                </h1>
                <p className="mt-1 text-white/90">{site.roleLine}</p>
              </div>
            </div>

            <ThemeToggle />
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-5 pb-24 pt-10">
        <section>
          
          <p className="mt-4 leading-relaxed text-zinc-700 dark:text-zinc-300">
            {site.intro}
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
            <a
              className="rounded-full border border-zinc-200 px-4 py-2 text-sm hover:bg-zinc-50 dark:border-zinc-800 dark:hover:bg-zinc-900"
              href={site.cv.href}
              target="_blank"
              rel="noreferrer"
            >
              {site.cv.label}
            </a>

            {site.links.telegram ? (
              <a
                className="underline underline-offset-4 hover:opacity-80"
                href={site.links.telegram}
                target="_blank"
                rel="noreferrer"
              >
                Telegram
              </a>
            ) : null}

            {site.links.github ? (
              <a
                className="underline underline-offset-4 hover:opacity-80"
                href={site.links.github}
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            ) : null}

            {site.links.linkedin ? (
              <a
                className="underline underline-offset-4 hover:opacity-80"
                href={site.links.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            ) : null}

            <a
              className="underline underline-offset-4 hover:opacity-80"
              href={site.links.email}
            >
              Email
            </a>
          </div>
        </section>

        <div className="mt-10 border-t border-zinc-200 dark:border-zinc-800" />

        {site.caseGroups.map((g: any) => (
          <Section key={g.title} title={g.title}>
            <div className="grid gap-4">
              {g.items.length === 0 ? (
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  (кейсы добавим)
                </p>
              ) : (
                g.items.map((c: any) => (
                  <Link
                    key={c.slug}
                    to={`/cases/${c.slug}`}
                    className="group block rounded-2xl border border-zinc-200 p-5 transition hover:bg-zinc-50 dark:border-zinc-800 dark:hover:bg-zinc-900"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="w-full">
                        {c.cover ? (
                          <img
                            src={c.cover}
                            alt={c.title}
                            className="mb-4 max-h-56 w-full rounded-xl border border-zinc-200 object-contain dark:border-zinc-800"
                            loading="lazy"
                          />
                        ) : null}

                        <h3 className="font-medium">{c.title}</h3>
                        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                          {c.subtitle}
                        </p>

                        <div className="mt-3 flex flex-wrap gap-2">
                          {c.tags.map((t: string) => (
                            <span
                              key={t}
                              className="rounded-full border border-zinc-200 px-3 py-1 text-xs dark:border-zinc-800"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>

                      <span className="text-sm opacity-40 group-hover:opacity-80">
                        →
                      </span>
                    </div>
                  </Link>
                ))
              )}
            </div>
          </Section>
        ))}

        <Section title="Опыт">
          <div className="grid gap-4">
            {site.experience.map((e: any) => (
              <div
                key={e.title + e.period}
                className="rounded-2xl border border-zinc-200 p-5 dark:border-zinc-800"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <p className="font-medium">{e.title}</p>
                  {e.period ? (
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">
                      {e.period}
                    </p>
                  ) : null}
                </div>

                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm">
                  {e.bullets.map((b: string) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Навыки">
          <div className="flex flex-wrap gap-2">
            {site.skills.map((s: string) => (
              <span
                key={s}
                className="rounded-full border border-zinc-200 px-3 py-1 text-xs dark:border-zinc-800"
              >
                {s}
              </span>
            ))}
          </div>
        </Section>

        <Section title="Курсы">
          <ul className="list-disc space-y-2 pl-5">
            {site.courses.map((c: string) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </Section>

        <Section title="Спорт">
          <div className="grid gap-6 md:grid-cols-[320px_1fr] md:items-start">
            {site.sportImage ? (
              <img
                src={site.sportImage}
                alt="Sport"
                className="w-full rounded-2xl border border-zinc-200 object-cover dark:border-zinc-800"
              />
            ) : null}

            <ul className="list-disc space-y-3 pl-5">
              {site.sport.map((s: string) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
        </Section>

        <footer className="mt-10 border-t border-zinc-200 pt-8 text-sm text-zinc-600 dark:border-zinc-800 dark:text-zinc-400">
          <p>© {new Date().getFullYear()} {site.name}.</p>
          <p className="mt-2">
            <a className="underline underline-offset-4" href={site.links.email}>
              {site.links.email.replace("mailto:", "")}
            </a>
          </p>
        </footer>
      </div>
    </main>
  );
}