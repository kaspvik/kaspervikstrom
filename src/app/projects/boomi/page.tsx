"use client";

import { useLang } from "@/context/LanguageContext";
import en from "@/messages/en.json";
import sv from "@/messages/sv.json";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import ProjectNav from "@/components/ProjectNav/ProjectNav";
import styles from "./boomi.module.css";

const messages = { en, sv };

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
  const { lang } = useLang();
  const t = messages[lang].projects.boomi;
  const common = messages[lang].common;

  return (
    <main className={styles.page}>
      <div className={styles.inner}>
        <motion.div
          className={styles.back}
          initial={{ opacity: 0, x: -8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}>
          <Link href="/#work">{common.backToWork}</Link>
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
              {t.category}
            </motion.span>
            <motion.h1 className={styles.title} custom={1} variants={fadeUp}>
              Boomi Countdown
            </motion.h1>
            <motion.p className={styles.intro} custom={2} variants={fadeUp}>
              {t.intro}
            </motion.p>
            <motion.div className={styles.links} custom={3} variants={fadeUp}>
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
              alt="Logo image for Boomi Countdown"
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
            <h2 className={styles.sectionTitle}>{t.roleTitle}</h2>
            <p>{t.role1}</p>
            <p>{t.role2}</p>
          </div>

          <div className={styles.stack}>
            <h2 className={styles.sectionTitle}>{t.stackTitle}</h2>
            <ul className={styles.tags}>
              {tech.map((t) => (
                <li key={t} className={styles.tag}>
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        <ProjectNav
          prev={{ href: "/projects/webdoc", name: "Webdoc Insights", category: messages[lang].projects.webdoc.category }}
          next={{ href: "/projects/flinq", name: "Flinq", category: messages[lang].projects.flinq.category }}
        />
      </div>
    </main>
  );
}
