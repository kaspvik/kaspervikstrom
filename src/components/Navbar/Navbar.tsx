"use client";

import { useLang } from "@/context/LanguageContext";
import en from "@/messages/en.json";
import sv from "@/messages/sv.json";
import Link from "next/link";
import styles from "./Navbar.module.css";

const messages = { en, sv };

export default function Navbar() {
  const { lang, toggle } = useLang();
  const t = messages[lang].nav;

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/" className={styles.logo}>
          Kasper Vikström
        </Link>
        <ul className={styles.links}>
          <li><Link href="#work">{t.work}</Link></li>
          <li><Link href="#about">{t.about}</Link></li>
          <li><Link href="#experience">{t.experience}</Link></li>
          <li><Link href="#contact">{t.contact}</Link></li>
        </ul>
        <button onClick={toggle} className={styles.langToggle} aria-label="Toggle language">
          {lang === "en" ? "SV" : "EN"}
        </button>
        <Link href="#work" className={styles.cta}>
          {t.cta}
        </Link>
      </nav>
    </header>
  );
}
