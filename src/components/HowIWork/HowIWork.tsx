"use client";

import { motion } from "framer-motion";
import styles from "./HowIWork.module.css";

const cards = [
  {
    title: "UI with intention",
    body: "I care about layout, hierarchy, spacing, and visual clarity. Good design should not only look good — it should make things easier to understand and use.",
  },
  {
    title: "Accessibility from the start",
    body: "I want interfaces to be readable, inclusive, and usable for more people. Accessibility is something I want to keep improving in every project.",
  },
  {
    title: "Component-based thinking",
    body: "I enjoy building reusable components and structured UI systems that make products easier to scale and maintain.",
  },
  {
    title: "Curious and fast-learning",
    body: "I like exploring new tools, workflows, and technologies early, especially when they can improve how something is built or experienced.",
  },
];

export default function HowIWork() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <h2 className={styles.title}>How I Work</h2>
          <p className={styles.intro}>
            I enjoy combining visual thinking with technical structure —
            building interfaces that feel modern, clear, and usable.
          </p>
        </div>

        <div className={styles.grid}>
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              className={styles.card}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.08, duration: 0.4, ease: "easeOut" }}
            >
              <h3 className={styles.cardTitle}>{card.title}</h3>
              <p className={styles.cardBody}>{card.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
