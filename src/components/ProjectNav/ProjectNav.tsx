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
}

export default function ProjectNav({ prev, next }: Props) {
  const { lang } = useLang();
  const t = messages[lang].common;

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
