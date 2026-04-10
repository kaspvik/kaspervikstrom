"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import styles from "./flinq.module.css";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" },
  }),
};

export default function FlinqPage() {
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
              Client Work
            </motion.span>
            <motion.h1 className={styles.title} custom={1} variants={fadeUp}>
              Flinq
            </motion.h1>
            <motion.p className={styles.intro} custom={2} variants={fadeUp}>
              Design and launch of a new website for Flinq, a company focused on
              cost savings and analysis within supply chain. The goal was to
              quickly communicate business value, build trust, and make it easy
              for potential customers to take the next step.
            </motion.p>
            <motion.div className={styles.links} custom={3} variants={fadeUp}>
              <a
                href="https://flinq.se/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.linkBtn}>
                ↗ Visit site
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className={styles.imageWrap}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}>
            <Image
              src="/images/flinq-sign.jpeg"
              alt="Flinq website"
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
            <h2 className={styles.sectionTitle}>About the project</h2>
            <p>
              The project involved designing and launching a website that
              clearly explains what Flinq does, what problem they solve, and how
              to get in touch — with business value and user experience at the
              centre.
            </p>
            <p>
              The site was built using One, which enabled an efficient workflow
              where design, content, and structure could be developed in
              parallel. This allowed for quick iteration and landing on a
              solution that is easy to maintain and ready to scale.
            </p>
          </div>

          <div className={styles.focus}>
            <h2 className={styles.sectionTitle}>Focus areas</h2>
            <ul className={styles.tags}>
              {[
                "Clear structure",
                "Business-driven content",
                "Fast performance",
                "Trust & credibility",
                "Easy to maintain",
              ].map((t) => (
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
