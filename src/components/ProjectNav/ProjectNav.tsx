"use client";

import { useLang } from "@/context/LanguageContext";
import en from "@/messages/en.json";
import sv from "@/messages/sv.json";
import Link from "next/link";
import styles from "./ProjectNav.module.css";

const messages = { en, sv };

interface ProjectLink {
  href: string;
  name: string;
  category: string;
}

interface Props {
  prev?: ProjectLink;
  next?: ProjectLink;
  compact?: boolean;
  back?: { href: string; label: string };
  others?: ProjectLink[];
}

export default function ProjectNav({ prev, next, compact, back, others }: Props) {
  const { lang } = useLang();
  const t = messages[lang].common;

  if (compact) {
    return (
      <nav className={styles.navCompact} aria-label="Project navigation">
        {back && (
          <Link href={back.href} className={styles.backLink}>
            {back.label}
          </Link>
        )}
        {(others || prev || next) && (
          <div className={styles.compactGroup}>
            <span className={styles.compactTitle}>{t.otherProjects}</span>
            {others && others.length > 0 && (
              <ul className={`${styles.othersList} ${styles.desktopOnly}`}>
                {others.map((p) => (
                  <li key={p.href}>
                    <Link href={p.href} className={styles.othersLink} onClick={() => window.scrollTo(0, 0)}>
                      {p.name} →
                    </Link>
                  </li>
                ))}
              </ul>
            )}
            {(prev || next) && (
              <div className={`${styles.compactPrevNext} ${styles.mobileOnly}`}>
                {prev && (
                  <Link href={prev.href} className={styles.othersLink} onClick={() => window.scrollTo(0, 0)}>
                    {prev.name} →
                  </Link>
                )}
                {next && (
                  <Link href={next.href} className={styles.othersLink} onClick={() => window.scrollTo(0, 0)}>
                    {next.name} →
                  </Link>
                )}
              </div>
            )}
          </div>
        )}
      </nav>
    );
  }

  return (
    <nav className={styles.nav} aria-label="Project navigation">
      <div className={styles.side}>
        {prev && (
          <Link href={prev.href} className={styles.link} onClick={() => window.scrollTo(0, 0)}>
            <span className={styles.label}>{t.prevProject}</span>
            <span className={styles.category}>{prev.category}</span>
            <span className={styles.name}>{prev.name}</span>
          </Link>
        )}
      </div>
      <div className={`${styles.side} ${styles.sideRight}`}>
        {next && (
          <Link href={next.href} className={`${styles.link} ${styles.linkRight}`} onClick={() => window.scrollTo(0, 0)}>
            <span className={styles.label}>{t.nextProject}</span>
            <span className={styles.category}>{next.category}</span>
            <span className={styles.name}>{next.name}</span>
          </Link>
        )}
      </div>
    </nav>
  );
}
