import Link from "next/link";
import { notFound } from "next/navigation";
import { cases, PREVIEW_TEMPLATE } from "@/content/cases";
import { site } from "@/content/site";
import { Header, Footer } from "@/components/Header";

function publishable() {
  return cases.filter((c, i) => !c.draft || (PREVIEW_TEMPLATE && i === 0));
}

export function generateStaticParams() {
  return publishable().map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const c = cases.find((x) => x.slug === slug);
  return { title: c ? `${c.title} — ${site.name}` : site.name };
}

export default async function CasePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const c = publishable().find((x) => x.slug === slug);
  if (!c) notFound();

  const tldr = [
    { label: "Contexto", value: c.summary.context },
    { label: "Meu papel", value: c.summary.role },
    { label: "Time", value: c.summary.team },
    { label: "Resultado", value: c.summary.outcome },
  ];

  return (
    <>
      <Header />
      {c.draft && <div className="draft-banner mono">Modelo de layout — conteúdo em preparação</div>}
      <main>
        <section className="case-hero">
          <div className="wrap">
            <Link href="/#cases" className="back mono">← Todos os cases</Link>
            <div className="mono" style={{ color: "var(--aqua)", marginBottom: 20 }}>
              Case {c.number} · {c.company} · {c.year}
            </div>
            <h1>{c.title}</h1>
            <div className="case-tags mono" style={{ marginTop: 32 }}>
              {c.tags.map((t) => <span className="tag" key={t}>{t}</span>)}
            </div>
          </div>
        </section>

        <div className="wrap">
          <dl className="tldr">
            {tldr.map((t) => (
              <div key={t.label}>
                <dt className="mono">{t.label}</dt>
                <dd>{t.value}</dd>
              </div>
            ))}
          </dl>

          {c.sections.map((s) => (
            <section className="case-body" key={s.heading}>
              <h2>{s.heading}</h2>
              <div>
                {s.body.map((p, i) => <p key={i}>{p}</p>)}
                {s.image && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={s.image} alt="" style={{ marginTop: 32 }} loading="lazy" />
                )}
              </div>
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
