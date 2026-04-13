"use client";

import { useLang } from "@/context/LanguageContext";
import en from "@/messages/en.json";
import sv from "@/messages/sv.json";
import { motion } from "framer-motion";
import styles from "./Contact.module.css";

const messages = { en, sv };

const links = [
  {
    id: "email",
    href: "mailto:kasper.vik@hotmail.com",
    label: "kasper.vik@hotmail.com",
    external: false,
  },
  {
    id: "phone",
    href: "tel:+46736200915",
    label: "073 620 09 15",
    external: false,
  },
  {
    id: "github",
    href: "https://github.com/kaspvik",
    label: "github.com/kaspvik",
    external: true,
  },
  {
    id: "linkedin",
    href: "https://www.linkedin.com/in/kasper-vikström-386856156",
    label: "linkedin.com/in/kasper-vikström",
    external: true,
  },
];

export default function Contact() {
  const { lang } = useLang();
  const t = messages[lang].contact;

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.inner}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}>
          <h2 className={styles.title}>{t.title}</h2>
          <p className={styles.intro}>{t.intro}</p>

          <ul className={styles.list}>
            {links.map((link, i) => (
              <motion.li
                key={link.id}
                className={styles.item}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.4, ease: "easeOut" }}>
                <span className={styles.linkLabel}>{t.labels[link.id as keyof typeof t.labels]}</span>
                <a
                  href={link.href}
                  className={styles.link}
                  {...(link.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}>
                  {link.label}
                  {link.external && <span className={styles.arrow}>↗</span>}
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
