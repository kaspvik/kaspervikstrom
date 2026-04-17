"use client";

import { useLang } from "@/context/LanguageContext";
import en from "@/messages/en.json";
import sv from "@/messages/sv.json";
import { motion } from "framer-motion";
import styles from "./About.module.css";

const messages = { en, sv };

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Storybook",
  "Figma",
  "API Integration",
  "Frontend Architecture",
  "UX/UI",
  "Accessibility",
];

export default function About() {
  const { lang } = useLang();
  const t = messages[lang].about;

  return (
    <section id="about" className={styles.section}>
      <div className={styles.inner}>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}>
          <h2 className={styles.title}>{t.title}</h2>
          <p className={styles.body}>{t.body1}</p>
          <p className={styles.body}>{t.body2}</p>
          <p className={styles.body}>{t.body3}</p>
          <p className={styles.body}>{t.body4}</p>
          <p className={styles.body}>{t.cta}</p>
          <ul className={styles.skills} aria-label="Skills">
            {skills.map((skill) => (
              <li key={skill} className={styles.skill}>
                {skill}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
