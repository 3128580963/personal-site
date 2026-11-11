import { useEffect, useState } from 'react'
import { profile, skills, projects, experience, heroImage, aboutImage } from './data.js'

const NAV_LINKS = [
  { id: 'about', label: '关于' },
  { id: 'skills', label: '专长' },
  { id: 'projects', label: '作品' },
  { id: 'experience', label: '经历' },
  { id: 'contact', label: '联系' },
]

function ThemeToggle() {
  const [theme, setTheme] = useState(() => {
    try { return document.documentElement.dataset.theme || '' } catch { return '' }
  })

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try { localStorage.setItem('theme', theme) } catch {}
  }, [theme])

  const isDark =
    theme === 'dark' ||
    (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)

  return (
    <button
      className="theme-toggle"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      aria-label="切换深浅色"
      title="切换深浅色"
    >
      {isDark ? '☀️' : '🌙'}
    </button>
  )
}

function Nav() {
  return (
    <header className="nav">
      <div className="nav-inner">
        <a className="brand" href="#top">
          <span className="brand-mark" aria-hidden="true" />
          {profile.name}
        </a>
        <nav className="nav-links">
          {NAV_LINKS.map(l => (
            <a key={l.id} href={`#${l.id}`}>{l.label}</a>
          ))}
        </nav>
        <ThemeToggle />
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero" id="top">
      <span className="geo geo-circle" aria-hidden="true" />
      <span className="geo geo-ring" aria-hidden="true" />
      <div className="hero-inner">
        <div className="hero-text reveal">
          <p className="hero-kicker">{profile.location} — {profile.englishName}</p>
          <h1 className="hero-name">{profile.name}</h1>
          <p className="hero-role">{profile.role}</p>
          <p className="hero-tagline">{profile.tagline}</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#projects">
              查看作品 <span className="btn-arrow">→</span>
            </a>
            <a className="btn btn-ghost" href="#contact">联系我</a>
          </div>
        </div>
        <div className="hero-media reveal">
          <img className="hero-img" src={heroImage} alt="极简室内设计作品" />
          <span className="hero-caption">Selected · 极简住宅改造</span>
        </div>
      </div>
    </section>
  )
}

function SectionTitle({ num, eyebrow, title }) {
  return (
    <div className="section-title reveal">
      <span className="eyebrow">
        <span className="eyebrow-dot" aria-hidden="true" />
        {num} — {eyebrow}
      </span>
      <h2>{title}</h2>
    </div>
  )
}

function About() {
  return (
    <section className="section" id="about">
      <SectionTitle num="01" eyebrow="About" title="关于我" />
      <div className="about-grid">
        <p className="about-text reveal">{profile.intro}</p>
        <div className="about-media reveal">
          <img className="about-img" src={aboutImage} alt="室内设计工作场景" loading="lazy" />
        </div>
      </div>
    </section>
  )
}

function Skills() {
  return (
    <section className="section" id="skills">
      <SectionTitle num="02" eyebrow="Expertise" title="专长领域" />
      <div className="skills-grid">
        {skills.map((g, i) => (
          <div className="skill-group reveal" key={g.group}>
            <span className={`skill-mark mark-${i % 3}`} aria-hidden="true" />
            <h3>{g.group}</h3>
            <div className="skill-pills">
              {g.items.map(s => <span className="pill" key={s}>{s}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function Projects() {
  return (
    <section className="section" id="projects">
      <SectionTitle num="03" eyebrow="Selected Works" title="作品集" />
      <div className="projects-grid">
        {projects.map((p, i) => (
          <article
            className={`project-card reveal${i === 0 ? ' project-card--featured' : ''}`}
            key={p.name}
          >
            <div className="project-media">
              <img className="project-img" src={p.image} alt={p.name} loading="lazy" />
              <span className="project-index">{String(i + 1).padStart(2, '0')}</span>
            </div>
            <div className="project-body">
              <div className="project-head">
                <h3>{p.name}</h3>
                <span className="project-year">{p.year}</span>
              </div>
              <p>{p.desc}</p>
              <div className="project-tags">
                {p.tags.map(t => <span className="tag" key={t}>{t}</span>)}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function Experience() {
  return (
    <section className="section" id="experience">
      <SectionTitle num="04" eyebrow="Experience" title="经历" />
      <div className="timeline">
        {experience.map(e => (
          <div className="timeline-item reveal" key={e.period + e.title}>
            <div className="timeline-dot" aria-hidden="true" />
            <div className="timeline-body">
              <span className="period">{e.period}</span>
              <h3>{e.title}</h3>
              <span className="org">{e.org}</span>
              <p>{e.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section className="section" id="contact">
      <SectionTitle num="05" eyebrow="Contact" title="联系我" />
      <div className="contact-wrap reveal">
        <p className="contact-line">
          邮箱：<a href={`mailto:${profile.email}`}>{profile.email}</a>
        </p>
        <div className="socials">
          {profile.socials.map(s => (
            <a key={s.label} className="social-link" href={s.url} target="_blank" rel="noreferrer">
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <p>© {new Date().getFullYear()} {profile.name} · 室内设计</p>
        <p className="footer-motto">Less is more</p>
      </div>
    </footer>
  )
}

export default function App() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    if (!('IntersectionObserver' in window)) {
      els.forEach(el => el.classList.add('is-visible'))
      return
    }
    const io = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )
    els.forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <div className="page">
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
