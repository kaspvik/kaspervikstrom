"use client";

import { useLang } from "@/context/LanguageContext";
import en from "@/messages/en.json";
import sv from "@/messages/sv.json";
import { motion } from "framer-motion";
import styles from "./HowIWork.module.css";

const messages = { en, sv };

export default function HowIWork() {
  const { lang } = useLang();
  const t = messages[lang].howIWork;

  return (
    <section id="process" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <h2 className={styles.title}>{t.title}</h2>
        </div>

        <div className={styles.grid}>
          {t.cards.map((card, i) => (
            <motion.div
              key={i}
              className={styles.card}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.08, duration: 0.4, ease: "easeOut" }}>
              <h3 className={styles.cardTitle}>{card.title}</h3>
              <p className={styles.cardBody}>{card.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
