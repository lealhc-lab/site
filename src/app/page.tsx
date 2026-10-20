import Link from "next/link";
import { site } from "@/content/site";
import { cases, PREVIEW_TEMPLATE } from "@/content/cases";
import { Header, Footer } from "@/components/Header";

const tones = ["deep", "blue", "cyan", "aqua"] as const;

function Stamp() {
  const label = `${site.role} · ${site.company} · ${site.location} · `;
  return (
    <svg className="stamp" viewBox="0 0 200 200" aria-hidden="true">
      <defs>
        <path id="circle" d="M100,100 m-80,0 a80,80 0 1,1 160,0 a80,80 0 1,1 -160,0" />
      </defs>
      <circle cx="100" cy="100" r="96" fill="none" stroke="var(--aqua)" strokeWidth="1" />
      <circle cx="100" cy="100" r="64" fill="none" stroke="var(--aqua)" strokeWidth="1" />
      <text>
        <textPath href="#circle" textLength="500">{label + label}</textPath>
      </text>
      <text x="100" y="112" textAnchor="middle" style={{ fontSize: 34, fontWeight: 700, letterSpacing: 0 }}>
        FL
      </text>
    </svg>
  );
}

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* HERO */}
        <section className="hero">
          <div className="hero-grid" />
          <Stamp />
          <div className="wrap">
            <div className="hero-meta mono">
              <span>{site.name}</span>
              <span>Portfólio · {new Date().getFullYear()}</span>
            </div>
            <h1>
              {site.hero.greeting}
              <span className="cursor" aria-hidden="true" />
            </h1>
            <div className="hero-bottom">
              <p className="hero-statement">{site.hero.statement}</p>
              <div className="stats">
                {site.hero.stats.map((s) => (
                  <div className="stat" key={s.label}>
                    <div className="stat-value">{s.value.startsWith("[") ? "—" : s.value}</div>
                    <div className="stat-label mono">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CASES */}
        <section className="section" id="cases">
          <div className="wrap">
            <div className="section-head">
              <span className="section-label mono">01 — Cases</span>
              <h2 className="section-title">Trabalho selecionado</h2>
            </div>
            <div className="cases">
              {cases.map((c, i) => {
                const linkable = !c.draft || (PREVIEW_TEMPLATE && i === 0);
                const inner = (
                  <>
                    <div className="case-top mono">
                      <span>{c.company} · {c.year}</span>
                      {linkable && <span className="case-arrow" aria-hidden="true">↗</span>}
                    </div>
                    <div>
                      <div className="case-num">{c.number}</div>
                      <h3 className="case-title">{c.title}</h3>
                      <div className="case-tags mono">
                        {c.tags.map((t) => <span className="tag" key={t}>{t}</span>)}
                      </div>
                    </div>
                    {c.draft && <span className="sticker">EM<br />BREVE</span>}
                  </>
                );
                return linkable ? (
                  <Link key={c.slug} href={`/cases/${c.slug}/`} className="case-card" data-tone={tones[i % 4]}>
                    {inner}
                  </Link>
                ) : (
                  <div key={c.slug} className="case-card" data-tone={tones[i % 4]}>{inner}</div>
                );
              })}
            </div>
          </div>
        </section>

        {/* SOBRE */}
        <section className="section" id="sobre">
          <div className="wrap">
            <div className="section-head">
              <span className="section-label mono">02 — Sobre</span>
              <h2 className="section-title">{site.about.title}</h2>
            </div>
            <div className="about">
              <div>
                {site.about.paragraphs.map((p) => <p key={p}>{p}</p>)}
              </div>
              <ol className="career">
                {site.career.map((c, i) => (
                  <li key={i}>
                    <span className="period mono">{c.period}</span>
                    <span>
                      <span className="role">{c.role}</span><br />
                      <span className="company">{c.company}</span>
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* CONHECIMENTO */}
        <section className="section" id="conhecimento">
          <div className="wrap">
            <div className="section-head">
              <span className="section-label mono">03 — Comunidade</span>
              <h2 className="section-title">{site.knowledge.title}</h2>
            </div>
            <p className="knowledge-intro">
              Sempre disponível para compartilhar conhecimento — seja em <em>eventos</em>, <em>aulas</em> em graduação e
              pós-graduação ou em conteúdos como <em>podcasts</em>.
            </p>

            <div className="photos">
              {site.knowledge.photos.map((ph, i) => (
                <figure key={i}>
                  {ph.src ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={ph.src} alt={ph.caption} loading="lazy" />
                  ) : (
                    <div className="photo-empty mono">Foto {String(i + 1).padStart(2, "0")}</div>
                  )}
                  <figcaption className="mono">{ph.caption}</figcaption>
                </figure>
              ))}
            </div>

            <div className="podcast">
              <div>
                <span className="mono">Podcast · {site.knowledge.podcast.show}</span>
                <h3>{site.knowledge.podcast.episode}</h3>
                <p>{site.knowledge.podcast.description}</p>
              </div>
              <iframe
                src={site.knowledge.podcast.embed}
                title={`${site.knowledge.podcast.show} — ${site.knowledge.podcast.episode}`}
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* CONTATO */}
        <section className="contact" id="contato">
          <div className="wrap">
            <span className="section-label mono">04 — Contato</span>
            <a className="contact-big" href={`mailto:${site.email}`} style={{ marginTop: 24 }}>
              Vamos<br />conversar ↗
            </a>
            <div className="contact-links mono">
              <a className="btn primary" href={`mailto:${site.email}`}>E-mail</a>
              <a className="btn" href={site.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
              <a className="btn" href={site.cvUrl} target="_blank" rel="noopener noreferrer">Currículo (PDF)</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
