import { useParams, Link } from "react-router-dom";
import { site } from "../content/site";

export default function CasePage() {
  const { slug } = useParams();

  const all = site.caseGroups.flatMap((g: any) => g.items);
  const c = all.find((x: any) => x.slug === slug);

  if (!c) {
    return (
      <div className="min-h-screen bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50 p-10">
        <h1 className="text-2xl font-semibold">404</h1>
        <Link className="mt-6 inline-block underline underline-offset-4" to="/">
          ← На главную
        </Link>
      </div>
    );
  }

  return (
    <main className="mx-auto max-w-3xl px-5 pb-24 pt-10 bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50 min-h-screen">
      <Link to="/" className="text-sm text-zinc-600 underline underline-offset-4 hover:opacity-80 dark:text-zinc-400">
        ← Назад
      </Link>

      <h1 className="mt-6 text-3xl font-semibold tracking-tight">{c.title}</h1>
      <p className="mt-2 text-zinc-700 dark:text-zinc-300">{c.subtitle}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {c.tags.map((t: string) => (
          <span key={t} className="rounded-full border border-zinc-200 px-3 py-1 text-xs dark:border-zinc-800">
            {t}
          </span>
        ))}
      </div>

      {c.external ? (
        <div className="mt-6">
          <a className="underline underline-offset-4 hover:opacity-80" href={c.external}>
            Внешняя ссылка →
          </a>
        </div>
      ) : null}

      <div className="mt-10 space-y-8">
        {c.sections.map((s: any) => (
          <section key={s.h}>
            <h2 className="text-lg font-semibold">{s.h}</h2>
            <div className="mt-3 space-y-3 text-zinc-700 dark:text-zinc-300">
              {s.p.map((p: string) => <p key={p}>{p}</p>)}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}