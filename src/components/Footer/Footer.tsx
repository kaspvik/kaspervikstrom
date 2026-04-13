"use client";

import { useLang } from "@/context/LanguageContext";
import en from "@/messages/en.json";
import sv from "@/messages/sv.json";
import styles from "./Footer.module.css";

const messages = { en, sv };

export default function Footer() {
  const { lang } = useLang();
  const t = messages[lang].footer;

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <span className={styles.name}>Kasper Vikström</span>
        <p className={styles.tagline}>{t.tagline}</p>
      </div>
    </footer>
  );
}
