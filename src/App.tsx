import { useEffect, useState, type CSSProperties, type ReactNode } from 'react'
import { ExternalIcon, GitHubIcon, LinkedInIcon, MoonIcon, ProjectArt, SunIcon } from './components/Icons'
import { Reveal } from './components/Reveal'
import { about, education, experience, profile, projects, skills, type TimelineItem } from './content'
import { applyTheme, readStoredTheme, resolveInitialTheme, type Theme } from './lib/theme'

const YEAR = new Date().getFullYear()

const NAV = [
  { id: 'sobre', label: 'Sobre' },
  { id: 'competencias', label: 'Competências' },
  { id: 'projetos', label: 'Projetos' },
  { id: 'trajetoria', label: 'Trajetória' },
  { id: 'contato', label: 'Contato' },
]

function PlaceholderBadge() {
  return (
    <span className="badge-placeholder" title="Texto provisório: edite src/content.ts">
      Conteúdo provisório
    </span>
  )
}

function Header() {
  const [theme, setTheme] = useState<Theme>(() =>
    resolveInitialTheme(readStoredTheme(), window.matchMedia?.('(prefers-color-scheme: light)').matches ?? false),
  )
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => applyTheme(theme), [theme])

  // destaca no menu a seção visível
  useEffect(() => {
    const sections = NAV.map((n) => document.getElementById(n.id)).filter((s): s is HTMLElement => !!s)
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActive(visible.target.id)
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: [0, 0.25, 0.5] },
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <header className="header">
      <div className="container header__inner">
        <a href="#inicio" className="header__logo" aria-label="Matheus Bonfatti — início">
          <span aria-hidden="true">MB</span>
        </a>
        <nav id="menu" className={`nav${open ? ' is-open' : ''}`} aria-label="Seções">
          {NAV.map((n) => (
            <a key={n.id} href={`#${n.id}`} aria-current={active === n.id ? 'location' : undefined} onClick={() => setOpen(false)}>
              {n.label}
            </a>
          ))}
        </nav>
        <div className="header__actions">
          <button
            type="button"
            className="icon-button"
            onClick={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
            aria-label={theme === 'dark' ? 'Ativar tema claro' : 'Ativar tema escuro'}
            title={theme === 'dark' ? 'Tema claro' : 'Tema escuro'}
          >
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </button>
          <button type="button" className="icon-button menu-button" aria-expanded={open} aria-controls="menu" onClick={() => setOpen((o) => !o)}>
            <span className="sr-only">{open ? 'Fechar menu' : 'Abrir menu'}</span>
            <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d={open ? 'M6 6l12 12M18 6 6 18' : 'M4 7h16M4 12h16M4 17h16'} />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="hero__glow" aria-hidden="true" />
      <div className="container hero__inner">
        <p className="eyebrow">Portfólio</p>
        <h1 className="hero__name">{profile.displayName}</h1>
        <p className="hero__headline">{profile.headline}</p>
        <p className="hero__intro">{profile.intro}</p>
        <div className="hero__actions">
          <a href="#projetos" className="btn btn--primary">
            Ver projetos
          </a>
          <a href="#contato" className="btn btn--ghost">
            Entrar em contato
          </a>
        </div>
        <ul className="hero__social" aria-label="Perfis">
          <li>
            <a href={profile.links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn de Matheus Bonfatti (abre em nova aba)">
              <LinkedInIcon /> LinkedIn
            </a>
          </li>
          <li>
            <a href={profile.links.github} target="_blank" rel="noreferrer" aria-label="GitHub de Matheus Bonfatti (abre em nova aba)">
              <GitHubIcon /> GitHub
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}

function SectionHeader({ id, kicker, title, children }: { id: string; kicker: string; title: string; children?: ReactNode }) {
  return (
    <header className="section__header">
      <p className="eyebrow">{kicker}</p>
      <h2 id={`${id}-title`}>{title}</h2>
      {children && <p className="section__lead">{children}</p>}
    </header>
  )
}

function Timeline({ items, emptyLabel }: { items: TimelineItem[]; emptyLabel: string }) {
  if (!items.length) return <p className="muted">{emptyLabel}</p>
  return (
    <ol className="timeline">
      {items.map((item, i) => (
        <li key={i} className={item.placeholder ? 'is-placeholder' : undefined}>
          <p className="timeline__period">{item.period}</p>
          <h4>
            {item.title} <span className="muted">· {item.organization}</span>
          </h4>
          <p>{item.description}</p>
          {item.placeholder && <PlaceholderBadge />}
        </li>
      ))}
    </ol>
  )
}

export default function App() {
  return (
    <>
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        <Hero />

        <section id="sobre" className="section" aria-labelledby="sobre-title">
          <div className="container narrow">
            <Reveal>
              <SectionHeader id="sobre" kicker="01" title="Sobre mim" />
              <div className={`about${about.placeholder ? ' is-placeholder' : ''}`}>
                {about.paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
                {about.placeholder && <PlaceholderBadge />}
              </div>
            </Reveal>
          </div>
        </section>

        <section id="competencias" className="section section--alt" aria-labelledby="competencias-title">
          <div className="container">
            <Reveal>
              <SectionHeader id="competencias" kicker="02" title="Competências técnicas">
                Tecnologias e práticas aplicadas nos projetos apresentados abaixo.
              </SectionHeader>
            </Reveal>
            <div className="skills">
              {skills.map((g, i) => (
                <Reveal key={g.title} delay={i * 80}>
                  <div className="skill-card">
                    <h3>{g.title}</h3>
                    <ul>
                      {g.items.map((s) => (
                        <li key={s}>{s}</li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="projetos" className="section" aria-labelledby="projetos-title">
          <div className="container">
            <Reveal>
              <SectionHeader id="projetos" kicker="03" title="Projetos em destaque">
                Aplicações completas, testadas e publicadas. Cada uma tem repositório próprio com instruções de instalação.
              </SectionHeader>
            </Reveal>
            <div className="projects">
              {projects.map((p, i) => (
                <Reveal key={p.id} delay={(i % 2) * 100}>
                  <article className="project" style={{ '--accent': p.accent } as CSSProperties}>
                    <div className="project__art">
                      <ProjectArt icon={p.icon} accent={p.accent} />
                    </div>
                    <div className="project__body">
                      <h3>{p.name}</h3>
                      <p>{p.summary}</p>
                      <ul className="project__highlights">
                        {p.highlights.map((h) => (
                          <li key={h}>{h}</li>
                        ))}
                      </ul>
                      <ul className="tags" aria-label="Tecnologias">
                        {p.tech.map((t) => (
                          <li key={t}>{t}</li>
                        ))}
                      </ul>
                      <div className="project__links">
                        <a className="btn btn--primary btn--sm" href={p.demoUrl} target="_blank" rel="noreferrer">
                          Abrir aplicação <ExternalIcon />
                        </a>
                        <a className="btn btn--ghost btn--sm" href={p.repoUrl} target="_blank" rel="noreferrer">
                          <GitHubIcon size={16} /> Código
                        </a>
                        {p.extraLink && (
                          <a className="btn btn--link btn--sm" href={p.extraLink.url} target="_blank" rel="noreferrer">
                            {p.extraLink.label}
                          </a>
                        )}
                      </div>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="trajetoria" className="section section--alt" aria-labelledby="trajetoria-title">
          <div className="container">
            <Reveal>
              <SectionHeader id="trajetoria" kicker="04" title="Experiência e formação" />
            </Reveal>
            <div className="journey">
              <Reveal>
                <h3>Experiência profissional</h3>
                <Timeline items={experience} emptyLabel="Nenhuma experiência cadastrada." />
              </Reveal>
              <Reveal delay={100}>
                <h3>Formação</h3>
                <Timeline items={education} emptyLabel="Nenhuma formação cadastrada." />
              </Reveal>
            </div>
          </div>
        </section>

        <section id="contato" className="section" aria-labelledby="contato-title">
          <div className="container narrow">
            <Reveal>
              <SectionHeader id="contato" kicker="05" title="Vamos conversar?">
                Estou aberto a conversar sobre oportunidades, projetos e tecnologia. O melhor caminho é pelo LinkedIn.
              </SectionHeader>
              <div className="contact">
                <a className="contact__card" href={profile.links.linkedin} target="_blank" rel="noreferrer">
                  <LinkedInIcon size={28} />
                  <span>
                    <strong>LinkedIn</strong>
                    <span className="muted">Mensagens e conexões</span>
                  </span>
                  <ExternalIcon />
                </a>
                <a className="contact__card" href={profile.links.github} target="_blank" rel="noreferrer">
                  <GitHubIcon size={28} />
                  <span>
                    <strong>GitHub</strong>
                    <span className="muted">@Theusiiin — código dos projetos</span>
                  </span>
                  <ExternalIcon />
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer__inner">
          <p>
            © {YEAR} {profile.name}. Desenvolvido com React, TypeScript e Vite.
          </p>
          <nav aria-label="Rodapé" className="footer__links">
            <a href={profile.links.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href={profile.links.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href="https://github.com/Theusiiin/portfolio-matheus-bonfatti" target="_blank" rel="noreferrer">
              Código deste site
            </a>
            <a href="#inicio">Voltar ao topo ↑</a>
          </nav>
        </div>
      </footer>
    </>
  )
}
