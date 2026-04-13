"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import styles from "./Hero.module.css";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
};

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <div className={styles.content}>
          <motion.span
            className={styles.label}
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeUp}>
            Fullstack Developer / UI-Focused
          </motion.span>

          <motion.h1
            className={styles.headline}
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeUp}>
            Fullstack developer focused on modern UI, accessibility, and
            thoughtful digital experiences.
          </motion.h1>

          <motion.p
            className={styles.intro}
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeUp}>
            I'm a fullstack-trained developer with a passion for thoughtful
            interfaces, strong component structure, and user-centered design.
          </motion.p>

          <motion.div
            className={styles.actions}
            custom={3}
            initial="hidden"
            animate="visible"
            variants={fadeUp}>
            <Link href="#work" className={styles.btnPrimary}>
              View My Work
            </Link>
            <Link href="#about" className={styles.btnSecondary}>
              About Me
            </Link>
          </motion.div>

          <motion.p
            className={styles.micro}
            custom={4}
            initial="hidden"
            animate="visible"
            variants={fadeUp}>
            Based in Gothenburg, Sweden · Available for work and freelance
            opportunities
          </motion.p>
        </div>

        <motion.div
          className={styles.visual}
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}>
          {/* Project visuals go here */}
          <div className={styles.visualPlaceholder} aria-hidden="true" />
        </motion.div>
      </div>
    </section>
  );
}
