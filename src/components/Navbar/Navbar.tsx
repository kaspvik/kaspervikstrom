"use client";

import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/" className={styles.logo}>
          Kasper Vikström
        </Link>
        <ul className={styles.links}>
          <li><Link href="#work">Work</Link></li>
          <li><Link href="#about">About</Link></li>
          <li><Link href="#experience">Experience</Link></li>
          <li><Link href="#contact">Contact</Link></li>
        </ul>
        <Link href="#work" className={styles.cta}>
          View Projects
        </Link>
      </nav>
    </header>
  );
}
