"use client";

import ProjectNav from "@/components/ProjectNav/ProjectNav";
import { useLang } from "@/context/LanguageContext";
import en from "@/messages/en.json";
import sv from "@/messages/sv.json";
import { motion } from "framer-motion";
import Image from "next/image";
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
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}>
          <ProjectNav
            compact
            back={{ href: "/#work", label: common.backToWork }}
            prev={{
              href: "/projects/webdoc",
              name: "Webdoc Insights",
              category: messages[lang].projects.webdoc.category,
            }}
            next={{
              href: "/projects/flinq",
              name: "Flinq",
              category: messages[lang].projects.flinq.category,
            }}
            others={[
              {
                href: "/projects/webdoc",
                name: "Webdoc Insights",
                category: messages[lang].projects.webdoc.category,
              },
              {
                href: "/projects/flinq",
                name: "Flinq",
                category: messages[lang].projects.flinq.category,
              },
              {
                href: "/projects/akarui",
                name: "Hikari",
                category: messages[lang].projects.akarui.category,
              },
            ]}
          />
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
              src="/images/boomi-screen-opt.png"
              alt="Logo image for Boomi Countdown"
              width={1600}
              height={900}
              className={styles.image}
              sizes="(max-width: 768px) 100vw, 55vw"
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

        {t.testimonialQuote && (
          <motion.blockquote
            className={styles.testimonial}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}>
            <p className={styles.testimonialQuote}>"{t.testimonialQuote}"</p>
            <footer className={styles.testimonialAuthor}>
              {t.testimonialName}
              {t.testimonialRole && (
                <span className={styles.testimonialRole}>
                  {" "}
                  — {t.testimonialRole}
                </span>
              )}
            </footer>
          </motion.blockquote>
        )}

        <motion.div
          className={styles.sections}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.5 }}>
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>{t.goalTitle}</h2>
            <p>{t.goal}</p>
          </div>
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>{t.challengeTitle}</h2>
            <p>{t.challenge}</p>
          </div>
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>{t.solutionTitle}</h2>
            <p>{t.solution}</p>
          </div>
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>{t.outcomeTitle}</h2>
            <p>{t.outcome}</p>
          </div>
        </motion.div>

        <ProjectNav
          prev={{
            href: "/projects/webdoc",
            name: "Webdoc Insights",
            category: messages[lang].projects.webdoc.category,
          }}
          next={{
            href: "/projects/flinq",
            name: "Flinq",
            category: messages[lang].projects.flinq.category,
          }}
        />
      </div>
    </main>
  );
}
