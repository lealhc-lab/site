import Link from "next/link";
import { site } from "@/content/site";

export function Header() {
  return (
    <header className="header">
      <div className="wrap">
        <Link href="/" className="logo" aria-label={site.name}>
          flaviol<span>.</span>
        </Link>
        <nav className="nav mono" aria-label="Principal">
          <Link href="/#cases">Cases</Link>
          <Link href="/#sobre">Sobre</Link>
          <Link href="/#conhecimento">Conhecimento</Link>
          <Link href="/#contato" className="nav-cta">Contato ↗</Link>
        </nav>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="wrap">
      <div className="footer mono">
        <span>© {new Date().getFullYear()} {site.name}</span>
        <span>{site.role} · {site.location}</span>
      </div>
    </footer>
  );
}
