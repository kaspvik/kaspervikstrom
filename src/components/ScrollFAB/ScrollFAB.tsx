"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./ScrollFAB.module.css";

// Ordered section IDs matching page flow
const SECTIONS = ["hero", "work", "process", "about", "contact"];

// SVG ring dimensions
const SIZE = 64;
const STROKE = 2.5;
const RADIUS = (SIZE - STROKE) / 2;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

function ChevronIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
      <path
        d="M4.5 6.75L9 11.25L13.5 6.75"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SparkleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
      <path
        d="M9 1.5L10.5 7.5L16.5 9L10.5 10.5L9 16.5L7.5 10.5L1.5 9L7.5 7.5L9 1.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const NAVBAR_HEIGHT = 64;

export default function ScrollFAB() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [atBottom, setAtBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? scrollTop / docHeight : 0;
      const clamped = Math.min(progress, 1);

      setScrollProgress(clamped);
      setAtBottom(clamped >= 0.98);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = useCallback(() => {
    if (atBottom) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    // Find the first section whose top is below the current viewport midpoint
    const viewportMid = window.scrollY + window.innerHeight / 2;

    for (const id of SECTIONS) {
      const el = document.getElementById(id);
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY;
        if (top > viewportMid + 16) {
          // Offset for sticky navbar so the title isn't hidden behind it
          window.scrollTo({ top: top - NAVBAR_HEIGHT, behavior: "smooth" });
          return;
        }
      }
    }

    // Past all sections — scroll to very bottom
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  }, [atBottom]);

  const ringOffset = CIRCUMFERENCE * (1 - scrollProgress);

  return (
    <AnimatePresence>
      <motion.button
          className={styles.fab}
          onClick={handleClick}
          aria-label={atBottom ? "Back to top" : "Scroll to next section"}
          initial={{ opacity: 0, scale: 0.7, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.7, y: 12 }}
          whileTap={{ scale: 0.86 }}
          transition={{ type: "spring", stiffness: 380, damping: 22 }}
        >
          {/* Circular progress ring */}
          <svg
            className={styles.ring}
            width={SIZE}
            height={SIZE}
            viewBox={`0 0 ${SIZE} ${SIZE}`}
          >
            <circle
              className={styles.ringTrack}
              cx={SIZE / 2}
              cy={SIZE / 2}
              r={RADIUS}
              fill="none"
              strokeWidth={STROKE}
            />
            <circle
              className={styles.ringProgress}
              cx={SIZE / 2}
              cy={SIZE / 2}
              r={RADIUS}
              fill="none"
              strokeWidth={STROKE}
              strokeDasharray={CIRCUMFERENCE}
              strokeDashoffset={ringOffset}
              strokeLinecap="round"
              transform={`rotate(-90 ${SIZE / 2} ${SIZE / 2})`}
            />
          </svg>

          {/* Glass core */}
          <div className={styles.core}>
            <AnimatePresence mode="wait">
              {atBottom ? (
                <motion.span
                  key="sparkle"
                  initial={{ opacity: 0, rotate: -60, scale: 0.5 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 60, scale: 0.5 }}
                  transition={{ duration: 0.22, ease: "easeOut" }}
                  className={styles.icon}
                >
                  <SparkleIcon />
                </motion.span>
              ) : (
                <motion.span
                  key="chevron"
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6 }}
                  transition={{ duration: 0.18, ease: "easeOut" }}
                  className={styles.icon}
                >
                  <ChevronIcon />
                </motion.span>
              )}
            </AnimatePresence>
          </div>
        </motion.button>
    </AnimatePresence>
  );
}
