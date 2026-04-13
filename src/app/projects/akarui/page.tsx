"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import styles from "./akarui.module.css";

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

const features = [
  "Admin CRUD panel",
  "Shopping cart",
  "Checkout & validation",
  "Order confirmation",
  "LocalStorage persistence",
  "Responsive design",
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
              Group Project
            </motion.span>
            <motion.h1 className={styles.title} custom={1} variants={fadeUp}>
              Hikari
            </motion.h1>
            <motion.p className={styles.intro} custom={2} variants={fadeUp}>
              A full-stack e-commerce web application for a fictional candle
              brand. Built as a group assignment covering a complete webshop
              with product listings, cart, checkout, order confirmation, and an
              admin panel for managing products.
            </motion.p>
            <motion.div className={styles.links} custom={3} variants={fadeUp}>
              <a
                href="https://nextjs-webshop-ts-react-akarui.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.linkBtn}>
                ↗ Live demo
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
              Hikari is a candle e-commerce store built with Next.js App Router,
              using Server Actions for all CRUD operations and Prisma with SQLite
              as the database layer. The project was developed in a group as part
              of a school assignment, covering both the customer-facing store and
              a full admin panel.
            </p>
            <p>
              The store lets customers browse products, manage their cart, fill
              in shipping details with full form validation, and receive a
              confirmation with a unique order number. The admin panel supports
              adding, editing, and removing products from the database.
            </p>
            <p>
              I also created all product images and mockups for the store —
              designing the candle visuals used across the product listings and
              detail pages.
            </p>
          </div>

          <div className={styles.right}>
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Tech stack</h2>
              <ul className={styles.tags}>
                {tech.map((t) => (
                  <li key={t} className={styles.tag}>
                    {t}
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Features</h2>
              <ul className={styles.tags}>
                {features.map((f) => (
                  <li key={f} className={styles.tag}>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
