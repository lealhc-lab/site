import Link from "next/link";
import { notFound } from "next/navigation";
import { cases, PREVIEW_TEMPLATE, type CaseImage } from "@/content/cases";
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
  return {
    title: c ? `${c.title} — ${site.name}` : site.name,
    description: c?.summary.context,
    openGraph: c?.cover ? { images: [c.cover] } : undefined,
  };
}

function Gallery({ images }: { images: CaseImage[] }) {
  return (
    <div className={`case-gallery${images.length > 1 ? " pair" : ""}`}>
      {images.map((img) => (
        <figure key={img.src}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={img.src} alt={img.caption} loading="lazy" />
          <figcaption className="mono">{img.caption}</figcaption>
        </figure>
      ))}
    </div>
  );
}

export default async function CasePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const list = publishable();
  const index = list.findIndex((x) => x.slug === slug);
  const c = list[index];
  if (!c) notFound();
  const next = list[(index + 1) % list.length];

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

          {c.cover && (
            <div className="case-cover">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={c.cover} alt={`${c.company} — visão geral do projeto`} />
            </div>
          )}

          {c.metrics && (
            <div className="case-metrics">
              {c.metrics.map((m) => (
                <div key={m.label}>
                  <div className="stat-value">{m.value}</div>
                  <div className="stat-label mono">{m.label}</div>
                </div>
              ))}
            </div>
          )}

          {c.sections.map((s) => (
            <section className="case-body" key={s.heading}>
              <div>
                {s.label && <span className="section-label mono">{s.label}</span>}
                <h2>{s.heading}</h2>
              </div>
              <div>
                {s.body.map((p, i) => <p key={i}>{p}</p>)}
                {s.list && (
                  <ul className="case-list">
                    {s.list.map((li) => <li key={li}>{li}</li>)}
                  </ul>
                )}
                {s.quote && (
                  <blockquote className="case-quote">
                    <p>“{s.quote.text}”</p>
                    <cite className="mono">{s.quote.author}</cite>
                  </blockquote>
                )}
              </div>
              {s.images && <Gallery images={s.images} />}
            </section>
          ))}

          {next && next.slug !== c.slug && (
            <Link href={`/cases/${next.slug}/`} className="case-next">
              <span className="mono">Próximo case</span>
              <span className="case-next-title">{next.title} ↗</span>
            </Link>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
