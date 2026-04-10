"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import styles from "./boomi.module.css";

const tech = [
  "React",
  "TypeScript",
  "Vite",
  "Firebase / Firestore",
  "Zustand",
  "PixiJS / @pixi/react",
  "Howler.js",
  "CSS Modules",
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" },
  }),
};

export default function BoomiPage() {
  return (
    <main className={styles.page}>
      <div className={styles.inner}>
        <motion.div
          className={styles.back}
          initial={{ opacity: 0, x: -8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}>
          <Link href="/#work">← Back to work</Link>
        </motion.div>

        <div className={styles.heroRow}>
          <motion.div
            className={styles.heroText}
            initial="hidden"
            animate="visible">
            <motion.span
              className={styles.category}
              custom={0}
              variants={fadeUp}>
              Exam Project
            </motion.span>
            <motion.h1 className={styles.title} custom={1} variants={fadeUp}>
              Boomi Countdown
            </motion.h1>
            <motion.p className={styles.intro} custom={2} variants={fadeUp}>
              A fast, social party game for 4–12 players. Players connect via
              mobile or desktop to a shared room where a pixelated bomb creature
              — Boomi — is passed around during a 60-second round. One player
              secretly places Boomi. Everyone else tries to figure out who.
            </motion.p>
            <motion.div
              className={styles.links}
              custom={3}
              variants={fadeUp}>
              <a
                href="https://boomi-countdown.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.linkBtn}>
                ↗ Live demo
              </a>
              <a
                href="https://github.com/kaspvik/boomi-countdown"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.linkBtn}>
                GitHub repo
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className={styles.imageWrap}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}>
            <Image
              src="/images/boomi-screen.png"
              alt="Boomi Countdown – game screenshot"
              width={1600}
              height={900}
              className={styles.image}
              priority
            />
          </motion.div>
        </div>

        <motion.div
          className={styles.details}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.5 }}>
          <div className={styles.role}>
            <h2 className={styles.sectionTitle}>My role</h2>
            <p>
              Solo project — I handled everything from game design and UX to
              frontend development and deployment. This included building the
              real-time multiplayer flow with Firestore, designing the pixel UI
              system, implementing sprite animations with PixiJS, and adding
              sound effects and background music via Howler.js.
            </p>
            <p>
              The project was built over six weeks as part of a school exam,
              with a focus on playability, accessibility (WCAG 2.1 A/AA), and a
              coherent retro aesthetic throughout.
            </p>
          </div>

          <div className={styles.stack}>
            <h2 className={styles.sectionTitle}>Tech Stack</h2>
            <ul className={styles.tags}>
              {tech.map((t) => (
                <li key={t} className={styles.tag}>
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
