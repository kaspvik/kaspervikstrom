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

const softSkills = [
  "Kundservice & bemötande",
  "Kommunikation",
  "Marknadsföring",
  "Eventplanering",
  "Projektledning",
  "Ledarskap",
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

            <section className={styles.section}>
              <h2 className={styles.sectionLabel}>Övriga färdigheter</h2>
              <ul className={styles.bulletList}>
                {softSkills.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </section>
          </aside>

          <div className={styles.main}>
            <section className={styles.section}>
              <h2 className={styles.sectionLabel}>Profil</h2>
              <p className={styles.profileText}>
                Fullstackutbildad frontendutvecklare med ett genuint intresse
                för UI, tillgänglighet och användarupplevelse. Jag är en person
                som sprider energi och glädje i gruppen och trivs verkligen med
                att jobba nära andra människor, oavsett om det är i ett team,
                med kunder eller i ideella sammanhang.
              </p>
              <p className={styles.profileText}>
                Jag trivs i skärningspunkten mellan kreativitet och struktur,
                och är som bäst när jag får omvandla idéer och layouts till
                moderna, genomtänkta produkter som faktiskt är enkla att
                använda. Min bakgrund spänner över frontend-utveckling,
                designsystem, kommunikation och projektledning, och jag lär mig
                snabbt i nya sammanhang.
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
                <p className={styles.timelineDesc}>
                  Utvecklade en intern dashboard- och presentationslösning för
                  visualisering av nyckeltal och information. Jobbade med
                  Next.js och TypeScript, byggde återanvändbara komponenter i
                  Storybook, implementerade widget- och slidefunktionalitet samt
                  drev gränssnittsarbete med fokus på UX, tydlig struktur och
                  visuell genomtänkthet.
                </p>
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
                <span className={styles.timelineDate}>Jan 2019 – Pågående</span>
              </div>
              <div className={styles.timelineContent}>
                <h3 className={styles.timelineRole}>Butiksäljare</h3>
                <p className={styles.timelineOrg}>Lyko AB</p>
                <p className={styles.timelineDesc}>
                  Ansvarar för utmärkt kundservice inom skönhet och hårvård.
                  Hjälper kunder att hitta rätt produkter baserat på deras
                  individuella behov. Rollen har stärkt kompetenser inom
                  kundbemötande, teamarbete och försäljning.
                </p>
              </div>
            </div>

            {/* Pondus */}
            <div className={styles.timelineItem}>
              <div className={styles.timelineMeta}>
                <span className={styles.timelineDate}>Apr 2018 – Jan 2019</span>
              </div>
              <div className={styles.timelineContent}>
                <h3 className={styles.timelineRole}>Butiksäljare</h3>
                <p className={styles.timelineOrg}>Pondus</p>
                <p className={styles.timelineDesc}>
                  Retail med fokus på försäljning av märkeskläder, kundservice
                  och att guida kunder till rätt produkter utifrån deras behov.
                </p>
              </div>
            </div>

            {/* Espresso House – grouped */}
            <div className={styles.timelineItem}>
              <div className={styles.timelineMeta}>
                <span className={styles.timelineDate}>Aug 2016 – Maj 2018</span>
              </div>
              <div className={styles.timelineContent}>
                <p className={styles.timelineOrg}>
                  Espresso House Group · 1 år 10 mån
                </p>

                <h3 className={styles.timelineRole}>Seniorbarista</h3>
                <p className={styles.timelineSubDate}>
                  Mar 2017 – Maj 2018 · 1 år 3 mån
                </p>
                <p className={styles.timelineDesc}>
                  Ansvarade för utbildning av nya baristor, kvalitetssäkring i
                  det dagliga arbetet och maskinunderhåll. Under min tid utsågs
                  butiken till Nordens trevligaste shop två år i rad, vilket gav
                  mig möjligheten att resa till New York med teamet.
                </p>

                <h3
                  className={styles.timelineRole}
                  style={{ marginTop: "0.75rem" }}>
                  Barista
                </h3>
                <p className={styles.timelineSubDate}>
                  Aug 2016 – Mar 2017 · 8 mån
                </p>
                <p className={styles.timelineDesc}>
                  Kundservice och baristaarbete i högt tempo med fokus på
                  kvalitet och gästupplevelse.
                </p>
              </div>
            </div>
          </div>
        </section>

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
                <p className={styles.timelineDesc}>
                  Ansvarade för sektionens sociala medier och hemsida,
                  producerade text och media för studiesociala aktiviteter samt
                  marknadsförde föreningars evenemang i samarbete med andra
                  sektioner och Göta studentkår.
                </p>
                <p className={styles.timelineDesc}>
                  Studentrepresentant i Fakultetsstyrelsen och Humanistiska
                  utbildningsberedningen, företrädde studentperspektivet i
                  frågor om studiemiljö, kurslitteratur och utbildningskvalitet.
                  Ledande ansvar inom eventföreningen Humöret.
                </p>
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
                <span className={styles.timelineDate}>Jun 2024 – Aug 2024</span>
              </div>
              <div className={styles.timelineContent}>
                <h3 className={styles.timelineRole}>
                  Risk- och kriskommunikation
                </h3>
                <p className={styles.timelineOrg}>Örebro Universitet</p>
                <p className={styles.timelineDesc}>
                  Grunderna i risk- och krishantering samt strategisk
                  kommunikation. Praktisk träning i klarspråk och
                  beredskapsplaner.
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
