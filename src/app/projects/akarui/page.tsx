"use client";

import { useLang } from "@/context/LanguageContext";
import en from "@/messages/en.json";
import sv from "@/messages/sv.json";
import { motion } from "framer-motion";
import Image from "next/image";
import ProjectNav from "@/components/ProjectNav/ProjectNav";
import styles from "./akarui.module.css";

const messages = { en, sv };

const tech = [
  "Next.js",
  "React",
  "TypeScript",
  "Material UI",
  "Prisma ORM",
  "SQLite",
  "Zod",
  "React Hook Form",
  "Vercel",
];


const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" },
  }),
};

export default function AkaruiPage() {
  const { lang } = useLang();
  const t = messages[lang].projects.akarui;
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
            prev={{ href: "/projects/flinq", name: "Flinq", category: messages[lang].projects.flinq.category }}
            next={{ href: "/projects/webdoc", name: "Webdoc Insights", category: messages[lang].projects.webdoc.category }}
            others={[
              { href: "/projects/webdoc", name: "Webdoc Insights", category: messages[lang].projects.webdoc.category },
              { href: "/projects/boomi", name: "Boomi Countdown", category: messages[lang].projects.boomi.category },
              { href: "/projects/flinq", name: "Flinq", category: messages[lang].projects.flinq.category },
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
              Hikari
            </motion.h1>
            <motion.p className={styles.intro} custom={2} variants={fadeUp}>
              {t.intro}
            </motion.p>
            <motion.div className={styles.links} custom={3} variants={fadeUp}>
              <a
                href="https://nextjs-webshop-ts-react-akarui.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.linkBtn}>
                {t.liveDemo}
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
                  <path d="M2 11L11 2M11 2H5M11 2V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a
                href="https://github.com/plugga-tech/nextjs-webshop-ts-react-akarui"
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
              src="/images/hikari-products.png"
              alt="Hikari – product listing"
              width={1600}
              height={900}
              className={styles.image}
              sizes="(max-width: 768px) 100vw, 55vw"
              priority
            />
          </motion.div>
        </div>

        <motion.div
          className={styles.stackFeatures}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.5 }}>
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>{t.stackTitle}</h2>
            <ul className={styles.tags}>
              {tech.map((item) => (
                <li key={item} className={styles.tag}>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>{t.featuresTitle}</h2>
            <ul className={styles.tags}>
              {t.features.map((f) => (
                <li key={f} className={styles.tag}>
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

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
          prev={{ href: "/projects/flinq", name: "Flinq", category: messages[lang].projects.flinq.category }}
          next={{ href: "/projects/webdoc", name: "Webdoc Insights", category: messages[lang].projects.webdoc.category }}
        />
      </div>
    </main>
  );
}
