"use client";

import { useLang } from "@/context/LanguageContext";
import en from "@/messages/en.json";
import sv from "@/messages/sv.json";
import Link from "next/link";
import styles from "./Navbar.module.css";
import { useDarkMode } from "./hooks/darkMode";

const messages = { en, sv };

function SunIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
      <circle cx="8" cy="8" r="3" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M8 1v1.5M8 13.5V15M1 8h1.5M13.5 8H15M3.05 3.05l1.06 1.06M11.89 11.89l1.06 1.06M12.95 3.05l-1.06 1.06M4.11 11.89l-1.06 1.06"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path
        d="M13.5 10A6 6 0 0 1 6 2.5a6 6 0 1 0 7.5 7.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Navbar() {
  const { lang, toggle } = useLang();
  const t = messages[lang].nav;
  const { darkMode, setDarkMode } = useDarkMode();

  return (
    <header className={styles.header}>
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

        <button
          className={styles.themeToggle}
          onClick={() => setDarkMode((prev: boolean) => !prev)}
          aria-pressed={darkMode}
          aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
        >
          {darkMode ? <SunIcon /> : <MoonIcon />}
        </button>

        <button
          onClick={toggle}
          className={styles.langToggle}
          aria-label="Toggle language"
        >
          {lang === "en" ? "SV" : "EN"}
        </button>

        <Link href="#work" className={styles.cta}>
          {t.cta}
        </Link>
      </nav>
    </header>
  );
}
