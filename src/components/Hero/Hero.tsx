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
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
};

export default function Hero() {
  const { lang } = useLang();
  const t = messages[lang].hero;

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.inner}>
        <div className={styles.content}>
          <motion.span
            className={styles.label}
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeUp}>
            {t.label}
          </motion.span>

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
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}>
          <Image
            src="/images/portfolioimage.png"
            alt="Portfolio image in the making"
            width={1000}
            height={1000}
            className={styles.visualImage}
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
