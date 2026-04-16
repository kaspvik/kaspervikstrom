"use client";

import ProjectNav from "@/components/ProjectNav/ProjectNav";
import { useLang } from "@/context/LanguageContext";
import en from "@/messages/en.json";
import sv from "@/messages/sv.json";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styles from "./webdoc.module.css";

const messages = { en, sv };

const tech = [
  "Next.js",
  "TypeScript",
  "Zustand",
  "dnd-kit",
  "ECharts",
  "Storybook",
  "SASS",
  "CSS Modules",
];

const images = [
  { src: "/images/widget-page.png", alt: "Widget page" },
  { src: "/images/presentation-page.png", alt: "Presentation editor" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" },
  }),
};

export default function WebdocPage() {
  const { lang } = useLang();
  const t = messages[lang].projects.webdoc;
  const common = messages[lang].common;
  const [lightbox, setLightbox] = useState<number | null>(null);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    if (lightbox === null) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight") setLightbox((i) => (i !== null ? Math.min(i + 1, images.length - 1) : null));
      if (e.key === "ArrowLeft") setLightbox((i) => (i !== null ? Math.max(i - 1, 0) : null));
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [lightbox]);

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
            prev={{ href: "/projects/akarui", name: "Hikari", category: messages[lang].projects.akarui.category }}
            next={{ href: "/projects/boomi", name: "Boomi Countdown", category: messages[lang].projects.boomi.category }}
            others={[
              { href: "/projects/boomi", name: "Boomi Countdown", category: messages[lang].projects.boomi.category },
              { href: "/projects/flinq", name: "Flinq", category: messages[lang].projects.flinq.category },
              { href: "/projects/akarui", name: "Hikari", category: messages[lang].projects.akarui.category },
            ]}
          />
        </motion.div>

        <motion.div className={styles.hero} initial="hidden" animate="visible">
          <motion.span className={styles.category} custom={0} variants={fadeUp}>
            {t.category}
          </motion.span>
          <motion.h1 className={styles.title} custom={1} variants={fadeUp}>
            Webdoc Insights
          </motion.h1>
          <motion.p className={styles.intro} custom={2} variants={fadeUp}>
            {t.intro}
          </motion.p>
        </motion.div>

        <motion.div
          className={styles.images}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}>
          <div className={`${styles.imageFeatured} ${styles.imageVideo}`}>
            <video
              src="/videos/webdoc-slides.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className={styles.img}
            />
          </div>
          {images.map(({ src, alt }, index) => (
            <button
              key={src}
              className={styles.imageThumb}
              onClick={() => setLightbox(index)}
              aria-label={`Enlarge: ${alt}`}>
              <Image
                src={src}
                alt={alt}
                fill
                sizes="(max-width: 768px) 85vw, 430px"
                className={styles.img}
              />
            </button>
          ))}
        </motion.div>

        {lightbox !== null && (
          <div
            className={styles.lightbox}
            onClick={() => setLightbox(null)}
            role="dialog"
            aria-modal="true"
            onTouchStart={(e) => { touchStartX.current = e.touches[0].clientX; }}
            onTouchEnd={(e) => {
              if (touchStartX.current === null) return;
              const delta = touchStartX.current - e.changedTouches[0].clientX;
              if (delta > 50) setLightbox((i) => i !== null ? Math.min(i + 1, images.length - 1) : null);
              if (delta < -50) setLightbox((i) => i !== null ? Math.max(i - 1, 0) : null);
              touchStartX.current = null;
            }}>
            <div className={styles.lightboxInner}>
              <Image
                src={images[lightbox].src}
                alt={images[lightbox].alt}
                fill
                className={styles.lightboxImg}
              />
              <div className={styles.lightboxDots}>
                {images.map((_, i) => (
                  <span key={i} className={`${styles.dot} ${i === lightbox ? styles.dotActive : ""}`} />
                ))}
              </div>
            </div>
          </div>
        )}

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
            href: "/projects/akarui",
            name: "Hikari",
            category: messages[lang].projects.akarui.category,
          }}
          next={{
            href: "/projects/boomi",
            name: "Boomi Countdown",
            category: messages[lang].projects.boomi.category,
          }}
        />
      </div>
    </main>
  );
}
