"use client";

import { useLang } from "@/context/LanguageContext";
import en from "@/messages/en.json";
import sv from "@/messages/sv.json";
import Link from "next/link";
import styles from "./Navbar.module.css";
import { useJazzMode } from "./hooks/jazzMode";

const messages = { en, sv };

export default function Navbar() {
  const { lang, toggle } = useLang();
  const t = messages[lang].nav;
  const { jazzMode, setJazzMode, muted, toggleMute, audioRef } = useJazzMode();

  return (
    <header className={styles.header}>
      <audio ref={audioRef} src="/jazz.mp3" loop />
      <nav className={styles.nav}>
        <Link href="/" className={styles.logo}>
          Kasper Vikström
        </Link>

        <ul className={styles.links}>
          <li>
            <Link href="#work">{t.work}</Link>
          </li>
          <li>
            <Link href="#about">{t.about}</Link>
          </li>
          <li>
            <Link href="#experience">{t.experience}</Link>
          </li>
          <li>
            <Link href="#contact">{t.contact}</Link>
          </li>
        </ul>

        <div className={styles.jazzGroup}>
          <button
            className={`${styles.jazzBtn} ${jazzMode ? styles.jazzActive : ""}`}
            onClick={() => setJazzMode((prev) => !prev)}
            aria-pressed={jazzMode}
            aria-label="Toggle Jazz Mode">
            {jazzMode ? "Jazz On" : "Jazz Mode"}
          </button>

          {jazzMode && (
            <button
              className={`${styles.saxBtn} ${muted ? styles.saxMuted : ""}`}
              onClick={toggleMute}
              aria-pressed={muted}
              aria-label={muted ? "Unmute jazz" : "Mute jazz"}>
              🎷
            </button>
          )}
        </div>

        <button
          onClick={toggle}
          className={styles.langToggle}
          aria-label="Toggle language">
          {lang === "en" ? "SV" : "EN"}
        </button>

        <Link href="#work" className={styles.cta}>
          {t.cta}
        </Link>
      </nav>
    </header>
  );
}
