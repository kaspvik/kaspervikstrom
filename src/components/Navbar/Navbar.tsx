"use client";

import Link from "next/link";
import styles from "./Navbar.module.css";
import { useJazzMode } from "./hooks/jazzMode";

export default function Navbar() {
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
            <Link href="#work">Work</Link>
          </li>
          <li>
            <Link href="#about">About</Link>
          </li>
          <li>
            <Link href="#experience">Experience</Link>
          </li>
          <li>
            <Link href="#contact">Contact</Link>
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
        <Link href="#work" className={styles.cta}>
          View Projects
        </Link>
      </nav>
    </header>
  );
}
