"use client";

import Image from "next/image";
import styles from "./cv.module.css";

const techFrontend = [
  "HTML5",
  "CSS / SASS",
  "JavaScript",
  "TypeScript",
  "React",
  "Vue",
  "Next.js",
  "CSS Modules",
  "Tailwind CSS",
];
const techTools = [
  "Git",
  "Storybook",
  "Figma",
  "Zustand",
  "Firebase",
  "Supabase",
  "Prisma / SQLite",
  "Drupal",
  "One CMS",
  "dnd-kit",
  "ECharts",
];
const liaStack = [
  "Next.js",
  "TypeScript",
  "Storybook",
  "dnd-kit",
  "ECharts",
  "Zustand",
  "CSS Modules",
  "SASS",
];

function MailIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden>
      <rect
        x="1.5"
        y="3.5"
        width="13"
        height="9"
        rx="1.5"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path
        d="M1.5 5l6.5 4.5L14.5 5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path
        d="M3 2.5h3l1.5 3-1.75 1.25a7.5 7.5 0 0 0 3.5 3.5L10.5 8.5l3 1.5v3A1.5 1.5 0 0 1 12 14.5C6.5 14.5 1.5 9.5 1.5 4A1.5 1.5 0 0 1 3 2.5Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path
        d="M8 1.5A4.5 4.5 0 0 1 12.5 6c0 3-4.5 8.5-4.5 8.5S3.5 9 3.5 6A4.5 4.5 0 0 1 8 1.5Z"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <circle cx="8" cy="6" r="1.5" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 16 16"
      fill="currentColor"
      aria-hidden>
      <path d="M8 1C4.13 1 1 4.13 1 8a7 7 0 0 0 4.79 6.63c.35.06.48-.15.48-.34v-1.2c-1.95.42-2.36-.94-2.36-.94-.32-.81-.78-1.03-.78-1.03-.64-.43.05-.42.05-.42.7.05 1.07.72 1.07.72.62 1.07 1.64.76 2.04.58.06-.45.24-.76.44-.93-1.56-.18-3.2-.78-3.2-3.47 0-.77.27-1.39.72-1.88-.07-.18-.31-.89.07-1.86 0 0 .59-.19 1.93.72A6.7 6.7 0 0 1 8 4.84c.6 0 1.2.08 1.76.23 1.34-.91 1.93-.72 1.93-.72.38.97.14 1.68.07 1.86.45.49.72 1.11.72 1.88 0 2.7-1.64 3.29-3.2 3.47.25.22.47.64.47 1.29v1.92c0 .19.13.4.48.34A7 7 0 0 0 15 8c0-3.87-3.13-7-7-7Z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 16 16"
      fill="currentColor"
      aria-hidden>
      <path d="M2.5 1A1.5 1.5 0 1 0 2.5 4 1.5 1.5 0 0 0 2.5 1ZM1 5.5h3V15H1V5.5ZM6 5.5h2.9v1.3h.04C9.4 5.9 10.5 5.3 11.8 5.3c3.1 0 3.7 2.1 3.7 4.7V15h-3v-4.3c0-1 0-2.4-1.5-2.4-1.4 0-1.7 1.1-1.7 2.3V15H6V5.5Z" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden>
      <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.4" />
      <path
        d="M8 1.5c-2 2-3 4-3 6.5s1 4.5 3 6.5M8 1.5c2 2 3 4 3 6.5s-1 4.5-3 6.5M1.5 8h13"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ExtLinkIcon() {
  return (
    <svg
      width="9"
      height="9"
      viewBox="0 0 10 10"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{
        display: "inline",
        verticalAlign: "middle",
        marginLeft: "0.15em",
        opacity: 0.45,
      }}
      aria-hidden>
      <path d="M1.5 8.5L8.5 1.5M5 1.5h3v3" />
    </svg>
  );
}

export default function CVPage() {
  return (
    <div className={styles.root}>
      <button className={styles.printBtn} onClick={() => window.print()}>
        <span>Skriv ut / Spara PDF</span>
      </button>

      {/* ─────────────────── SIDA 1 ─────────────────── */}
      <div className={styles.page}>
        <header className={styles.heroHeader}>
          <div className={styles.heroRow}>
            <div className={styles.heroNames}>
              <h1 className={styles.nameFirst}>Kasper</h1>
              <span className={styles.nameLast}>Vikström</span>
              <p className={styles.heroJobTitle}>Front End Developer</p>
            </div>
          </div>
          <div className={styles.heroPhoto}>
            <Image
              src="/images/portfolio-picture.jpg"
              alt="Kasper Vikström"
              fill
              sizes="397px"
              className={styles.heroPhotoImg}
              priority
            />
          </div>
        </header>

        <div className={styles.contactRow}>
          <a
            href="mailto:kasper.vik@hotmail.com"
            className={styles.contactItem}>
            <MailIcon /> kasper.vik@hotmail.com
          </a>
          <span className={styles.contactDot} />
          <a href="tel:+46736200915" className={styles.contactItem}>
            <PhoneIcon /> 073-620 09 15
          </a>
          <span className={styles.contactDot} />
          <span className={styles.contactItem}>
            <PinIcon /> Göteborg
          </span>
          <span className={styles.contactDot} />
          <a
            href="https://github.com/kaspvik"
            className={styles.contactItem}
            target="_blank"
            rel="noopener noreferrer">
            <GithubIcon /> GitHub
          </a>
          <span className={styles.contactDot} />
          <a
            href="https://www.linkedin.com/in/kasper-vikström-386856156"
            className={styles.contactItem}
            target="_blank"
            rel="noopener noreferrer">
            <LinkedinIcon /> LinkedIn
          </a>
          <span className={styles.contactDot} />
          <a
            href="https://kaspervikstrom.se"
            className={styles.contactItem}
            target="_blank"
            rel="noopener noreferrer">
            <GlobeIcon /> Portfolio
          </a>
        </div>

        <div className={styles.body}>
          <aside className={styles.aside}>
            <section className={styles.section}>
              <h2 className={styles.sectionLabel}>Språk</h2>
              <div className={styles.langItem}>
                <span className={styles.langName}>Svenska</span>
                <span className={styles.langLevel}>Modersmål</span>
              </div>
              <div className={styles.langItem}>
                <span className={styles.langName}>Engelska</span>
                <span className={styles.langLevel}>
                  Goda kunskaper i tal och skrift
                </span>
              </div>
            </section>
          </aside>

          <div className={styles.main}>
            <section className={styles.section}>
              <h2 className={styles.sectionLabel}>Profil</h2>
              <p className={styles.profileText}>
                Nyutexaminerad frontendutvecklare som trivs i gränslandet mellan
                design och kod. Van att arbeta nära UX och omsätta Figmaunderlag
                till välstrukturerade komponenter med hög visuell kvalitet. Har
                genom LIA och skarpa kunduppdrag erfarenhet av tvärfunktionella
                team och bidrar aktivt till både tekniska diskussioner och ett
                bra klimat i gruppen. Söker nu min första roll som
                frontendutvecklare.
              </p>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionLabel}>Teknisk kompetens</h2>
              <div className={styles.skillBlock}>
                <span className={styles.skillGroupLabel}>
                  Frontend & ramverk
                </span>
                <div className={styles.tags}>
                  {techFrontend.map((s) => (
                    <span key={s} className={styles.tag}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>
              <div className={styles.skillBlock}>
                <span className={styles.skillGroupLabel}>Verktyg & övrigt</span>
                <div className={styles.tags}>
                  {techTools.map((s) => (
                    <span key={s} className={styles.tag}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* ─────────────────── SIDA 2 ─────────────────── */}
      <div className={`${styles.page} ${styles.pageInner}`}>
        <div className={styles.pageRunning}>
          <span className={styles.pageRunningMonogram}>KV</span>
          <span className={styles.pageRunningName}>Kasper Vikström</span>
        </div>

        <section className={styles.section}>
          <h2 className={styles.sectionLabel}>Arbetslivserfarenhet</h2>

          <div className={styles.timeline}>
            {/* LIA */}
            <div className={styles.timelineItem}>
              <div className={styles.timelineMeta}>
                <span className={styles.timelineDate}>Sep 2025 – Apr 2026</span>
              </div>
              <div className={styles.timelineContent}>
                <h3 className={styles.timelineRole}>
                  Frontendutvecklare – LIA
                </h3>
                <p className={styles.timelineOrg}>Webdoc, Carasent Group</p>
                <ul
                  className={styles.bulletList}
                  style={{ marginTop: "0.25rem" }}>
                  <li>
                    Byggde produktionssatt dashboard- och presentationslösning
                    med Next.js och TypeScript – används dagligen av ~100
                    anställda
                  </li>
                  <li>
                    Utvecklade 20–30 återanvändbara UI-komponenter i Storybook
                    med isolerad testning och komponentdokumentation
                  </li>
                  <li>
                    Implementerade drag-and-drop för slides (dnd-kit) och
                    interaktiva datavisualiseringar (ECharts)
                  </li>
                  <li>
                    Drev gränssnittsarbetet självständigt och bidrog till agila
                    processer i ett team om 6–8 personer
                  </li>
                </ul>
                <div className={styles.tags} style={{ marginTop: "0.5rem" }}>
                  {liaStack.map((s) => (
                    <span key={s} className={styles.tag}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Lyko */}
            <div className={styles.timelineItem}>
              <div className={styles.timelineMeta}>
                <span className={styles.timelineDate}>
                  Jan 2019 – nu (deltid)
                </span>
              </div>
              <div className={styles.timelineContent}>
                <h3 className={styles.timelineRole}>Butikssäljare</h3>
                <p className={styles.timelineOrg}>Lyko AB</p>
                <ul
                  className={styles.bulletList}
                  style={{ marginTop: "0.25rem" }}>
                  <li>
                    Rådgivande försäljning och kundservice inom hårvård och
                    skönhet.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionLabel}>Projekt</h2>
          <div className={styles.projectGrid}>
            <div className={styles.projectCard}>
              <div
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  gap: "0.3rem",
                  flexWrap: "wrap",
                }}>
                <h3 className={styles.projectName} style={{ margin: 0 }}>
                  <a
                    href="https://nextjs-webshop-ts-react-akarui.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: "inherit",
                      textDecoration: "underline",
                      textUnderlineOffset: "2px",
                    }}>
                    Hikari
                    <ExtLinkIcon />
                  </a>
                </h3>
                <span
                  style={{ color: "var(--color-text-muted)", opacity: 0.35 }}>
                  –
                </span>
                <span className={styles.projectCategory}>Skolprojekt</span>
              </div>
              <p className={styles.projectDesc}>
                Fullstack e-handelsplattform i grupp om 4 – produktlistning,
                varukorg, checkout, orderbekräftelse och adminpanel.
              </p>
              <div
                className={styles.tags}
                style={{ marginTop: "auto", paddingTop: "0.5rem" }}>
                <span className={styles.tag}>Next.js</span>
                <span className={styles.tag}>TypeScript</span>
                <span className={styles.tag}>Prisma</span>
                <span className={styles.tag}>Material UI</span>
              </div>
            </div>

            <div className={styles.projectCard}>
              <div
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  gap: "0.3rem",
                  flexWrap: "wrap",
                }}>
                <h3 className={styles.projectName} style={{ margin: 0 }}>
                  <a
                    href="https://flinq.se/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: "inherit",
                      textDecoration: "underline",
                      textUnderlineOffset: "2px",
                    }}>
                    Flinq
                    <ExtLinkIcon />
                  </a>
                </h3>
                <span
                  style={{ color: "var(--color-text-muted)", opacity: 0.35 }}>
                  –
                </span>
                <span className={styles.projectCategory}>Kunduppdrag</span>
              </div>
              <p className={styles.projectDesc}>
                Designade och lanserade live-webbplats för verklig kund med
                fokus på tydlig kommunikation och konvertering.
              </p>
              <div
                className={styles.tags}
                style={{ marginTop: "auto", paddingTop: "0.5rem" }}>
                <span className={styles.tag}>Web Design</span>
                <span className={styles.tag}>One.com</span>
              </div>
            </div>

            <div className={styles.projectCard}>
              <div
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  gap: "0.3rem",
                  flexWrap: "wrap",
                }}>
                <h3 className={styles.projectName} style={{ margin: 0 }}>
                  <a
                    href="https://boomi-countdown.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: "inherit",
                      textDecoration: "underline",
                      textUnderlineOffset: "2px",
                    }}>
                    Boomi Countdown
                    <ExtLinkIcon />
                  </a>
                </h3>
                <span
                  style={{ color: "var(--color-text-muted)", opacity: 0.35 }}>
                  –
                </span>
                <span className={styles.projectCategory}>Examensarbete</span>
              </div>
              <p className={styles.projectDesc}>
                Realtids-multiplayerspel för 4–12 spelare med synkroniserat
                spelläge via Firebase. Utsedd till årets bästa examensarbete
                2025 av Medieinstitutet.
              </p>
              <div
                className={styles.tags}
                style={{ marginTop: "auto", paddingTop: "0.5rem" }}>
                <span className={styles.tag}>React</span>
                <span className={styles.tag}>Firebase</span>
                <a
                  href="https://www.figma.com/design/tYiUJVHlg6IAlJMTxUxRn0/Boomi?node-id=0-1&t=njOSmugY4CDMoU9N-1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.tag} ${styles.tagLink}`}
                  style={{ textDecoration: "none" }}>
                  Figma
                  <ExtLinkIcon />
                </a>
              </div>
            </div>

            <div className={styles.projectCard}>
              <div
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  gap: "0.3rem",
                  flexWrap: "wrap",
                }}>
                <h3 className={styles.projectName} style={{ margin: 0 }}>
                  <a
                    href="https://kaspervikstrom.se"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: "inherit",
                      textDecoration: "underline",
                      textUnderlineOffset: "2px",
                    }}>
                    Webdoc Dashboard
                    <ExtLinkIcon />
                  </a>
                </h3>
                <span
                  style={{ color: "var(--color-text-muted)", opacity: 0.35 }}>
                  –
                </span>
                <span className={styles.projectCategory}>LIA</span>
              </div>
              <p className={styles.projectDesc}>
                Produktionssatt dashboard- och presentationslösning med 20–30
                Storybook-komponenter. Se portfolio för mer.
              </p>
              <div
                className={styles.tags}
                style={{ marginTop: "auto", paddingTop: "0.5rem" }}>
                <span className={styles.tag}>Next.js</span>
                <span className={styles.tag}>TypeScript</span>
                <span className={styles.tag}>Storybook</span>
                <span className={styles.tag}>ECharts</span>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ─────────────────── SIDA 3 ─────────────────── */}
      <div className={`${styles.page} ${styles.pageInner}`}>
        <div className={styles.pageRunning}>
          <span className={styles.pageRunningMonogram}>KV</span>
          <span className={styles.pageRunningName}>Kasper Vikström</span>
        </div>

        <section className={styles.section}>
          <h2 className={styles.sectionLabel}>Ideellt arbete</h2>

          <div className={styles.timeline}>
            <div className={styles.timelineItem}>
              <div className={styles.timelineMeta}>
                <span className={styles.timelineDate}>Apr 2021 – Jun 2023</span>
              </div>
              <div className={styles.timelineContent}>
                <h3 className={styles.timelineRole}>
                  Kommunikatör & studentrepresentant
                </h3>
                <p className={styles.timelineOrg}>
                  Humanistsektionen / Humanistiska fakulteten, Göteborgs
                  Universitet
                </p>
                <ul
                  className={styles.bulletList}
                  style={{ marginTop: "0.25rem" }}>
                  <li>
                    Ansvarade för sektionens sociala medier och hemsida,
                    producerade text och media för studiesociala aktiviteter
                  </li>
                  <li>
                    Marknadsförde föreningars evenemang i samarbete med andra
                    sektioner och Göta studentkår
                  </li>
                  <li>
                    Studentrepresentant i Fakultetsstyrelsen och Humanistiska
                    utbildningsberedningen – företrädde studentperspektivet i
                    frågor om studiemiljö, kurslitteratur och
                    utbildningskvalitet
                  </li>
                  <li>Ledande ansvar inom eventföreningen Humöret</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionLabel}>Utbildning</h2>

          <div className={styles.timeline}>
            <div className={styles.timelineItem}>
              <div className={styles.timelineMeta}>
                <span className={styles.timelineDate}>Aug 2024 – Apr 2026</span>
              </div>
              <div className={styles.timelineContent}>
                <h3 className={styles.timelineRole}>Front End Developer</h3>
                <p className={styles.timelineOrg}>Medieinstitutet Göteborg</p>
                <p className={styles.timelineDesc}>
                  Bred kompetens inom avancerad webbutveckling med fokus på
                  form, funktion och användarupplevelse. HTML, CSS, JavaScript
                  och TypeScript samt API:er, databaser och komponentbibliotek i
                  agila projekt.
                </p>
              </div>
            </div>

            <div className={styles.timelineItem}>
              <div className={styles.timelineMeta}>
                <span className={styles.timelineDate}>Mar 2023 – Maj 2023</span>
              </div>
              <div className={styles.timelineContent}>
                <h3 className={styles.timelineRole}>Elements of AI</h3>
                <p className={styles.timelineOrg}>Linköpings Universitet</p>
                <p className={styles.timelineDesc}>
                  Introduktionskurs som kombinerar teori och praktik för en
                  grundläggande förståelse av artificiell intelligens.
                </p>
              </div>
            </div>

            <div className={styles.timelineItem}>
              <div className={styles.timelineMeta}>
                <span className={styles.timelineDate}>Aug 2020 – Jun 2023</span>
              </div>
              <div className={styles.timelineContent}>
                <h3 className={styles.timelineRole}>
                  Fil. kand. – Medier, estetik och kulturellt entreprenörskap
                </h3>
                <p className={styles.timelineOrg}>Göteborgs Universitet</p>
                <p className={styles.timelineDesc}>
                  Studier inom projektledning, entreprenörskap och gestaltning
                  av medier utifrån ett vetenskapligt perspektiv.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
