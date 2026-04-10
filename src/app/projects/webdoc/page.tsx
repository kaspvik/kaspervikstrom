"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./webdoc.module.css";

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
  const [lightbox, setLightbox] = useState<string | null>(null);

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox]);

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

        <motion.div className={styles.hero} initial="hidden" animate="visible">
          <motion.span className={styles.category} custom={0} variants={fadeUp}>
            Internship Project
          </motion.span>
          <motion.h1 className={styles.title} custom={1} variants={fadeUp}>
            Webdoc Insights
          </motion.h1>
          <motion.p className={styles.intro} custom={2} variants={fadeUp}>
            Webdoc Insights is an internal web application for visualising key
            metrics and building presentation views with dynamic content. The
            project consists of a dashboard, a presentation editor, and a
            presentation player.
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
          {images.map(({ src, alt }) => (
            <button
              key={src}
              className={styles.imageThumb}
              onClick={() => setLightbox(src)}
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

        {lightbox && (
          <div
            className={styles.lightbox}
            onClick={() => setLightbox(null)}
            role="dialog"
            aria-modal="true">
            <div className={styles.lightboxInner}>
              <Image
                src={lightbox}
                alt=""
                fill
                className={styles.lightboxImg}
              />
            </div>
          </div>
        )}

        <motion.div
          className={styles.details}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.5 }}>
          <div className={styles.role}>
            <h2 className={styles.sectionTitle}>My role</h2>
            <p>
              I worked primarily with frontend development and UI, contributing
              to building reusable components in Storybook, developing widgets
              for statistics display, and creating various slides for presenting
              data such as weather, traffic, and key metrics.
            </p>
            <p>
              The focus was on creating a flexible, modern, and clear user
              experience where data becomes more accessible and visually
              engaging.
            </p>
          </div>

          <div className={styles.stack}>
            <h2 className={styles.sectionTitle}>Tech Stack</h2>
            <ul className={styles.tags}>
              {tech.map((t) => (
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
