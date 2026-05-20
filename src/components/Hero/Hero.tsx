"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import styles from "./Hero.module.css";
import { useLang } from "@/context/LanguageContext";
import en from "@/messages/en.json";
import sv from "@/messages/sv.json";

const messages = { en, sv };

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.55, ease: "easeOut" },
  }),
};

export default function Hero() {
  const { lang } = useLang();
  const t = messages[lang].hero;

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.inner}>
        <div className={styles.content}>
          <motion.div
            className={styles.badge}
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeUp}>
            <span className={styles.badgeDot} />
            {t.label}
          </motion.div>

          <motion.h1
            className={styles.headline}
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeUp}>
            {t.headline}
          </motion.h1>

          <motion.p
            className={styles.intro}
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeUp}>
            {t.intro}
          </motion.p>

          <motion.div
            className={styles.actions}
            custom={3}
            initial="hidden"
            animate="visible"
            variants={fadeUp}>
            <Link href="/#work" className={styles.btnPrimary}>
              {t.btnPrimary}
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
            <Link href="/#about" className={styles.btnSecondary}>
              {t.btnSecondary}
            </Link>
          </motion.div>

          <motion.p
            className={styles.micro}
            custom={4}
            initial="hidden"
            animate="visible"
            variants={fadeUp}>
            {t.micro}
          </motion.p>
        </div>

        <motion.div
          className={styles.visual}
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}>
          <div className={styles.imageWrap}>
            <Image
              src="/images/portfolio-picture.jpg"
              alt="Kasper Vikström"
              fill
              className={styles.visualImage}
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
