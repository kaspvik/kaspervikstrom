"use client";

import { motion } from "framer-motion";
import styles from "./About.module.css";

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
  return (
    <section id="about" className={styles.section}>
      <div className={styles.inner}>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className={styles.title}>About</h2>
          <p className={styles.body}>
            I&apos;m a fullstack-trained developer with a strong interest in
            frontend, UI, accessibility, and user experience. I enjoy creating
            digital products that feel thoughtful, modern, and easy to use.
          </p>
          <p className={styles.body}>
            My background includes school projects, internship work, client
            projects, and component-based frontend development. I&apos;ve worked
            with UI implementation, Storybook, Figma, API integration, and both
            frontend and backend development.
          </p>
          <p className={styles.body}>
            What drives me most is the combination of creativity and structure —
            finding ways to turn ideas, layouts, and user needs into real
            products.
          </p>
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
