"use client";

import LazyVideo from "@/components/LazyVideo/LazyVideo";
import { useLang } from "@/context/LanguageContext";
import en from "@/messages/en.json";
import sv from "@/messages/sv.json";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import styles from "./SelectedWork.module.css";

const messages = { en, sv };

const projects = [
  {
    id: "webdoc",
    title: "Webdoc Dashboard",
    tags: [
      "React",
      "TypeScript",
      "Storybook",
      "Dashboard UI",
      "API Integration",
    ],
    featured: true,
    href: "/projects/webdoc",
    video: "/videos/webdoc-slides.mp4",
  },
  {
    id: "boomi",
    title: "Boomi Countdown",
    tags: ["React", "Firebase", "Game UI", "Interactive Design", "Fullstack"],
    featured: false,
    href: "/projects/boomi",
    image: "/images/boomi-header.png",
  },
  {
    id: "flinq",
    title: "Flinq",
    tags: ["Client Work", "Web Design", "One.com", "Performance"],
    featured: false,
    href: "/projects/flinq",
    image: "/images/flinq.png",
  },
  {
    id: "akarui",
    title: "Hikari",
    tags: ["Next.js", "TypeScript", "Prisma", "Material UI", "Product Design"],
    featured: true,
    href: "/projects/akarui",
    video: "/videos/hikari-video.mp4",
  },
];

export default function SelectedWork() {
  const { lang } = useLang();
  const t = messages[lang].selectedWork;

  return (
    <section id="work" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <h2 className={styles.title}>{t.title}</h2>
          <p className={styles.intro}>{t.intro}</p>
        </div>

        <div className={styles.grid}>
          {projects.map((project, i) => {
            const projectT = t.projects[project.id as keyof typeof t.projects];
            const card = (
              <motion.article
                key={project.id}
                className={`${styles.card} ${project.featured ? styles.featured : ""}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  delay: i * 0.08,
                  duration: 0.45,
                  ease: "easeOut",
                }}>
                <div className={styles.cardVisual}>
                  {project.video && (
                    <LazyVideo
                      src={project.video}
                      className={styles.cardVideo}
                    />
                  )}
                  {project.image && !project.video && (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className={styles.cardVideo}
                      style={{ objectFit: "cover" }}
                    />
                  )}
                </div>
                <div className={styles.cardBody}>
                  <span className={styles.cardCategory}>
                    {projectT.category}
                  </span>
                  <h3 className={styles.cardTitle}>{project.title}</h3>
                  <p className={styles.cardDescription}>
                    {projectT.description}
                  </p>
                  <ul className={styles.tags} aria-label="Technologies">
                    {project.tags.map((tag) => (
                      <li key={tag} className={styles.tag}>
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            );

            return project.href ? (
              <Link
                key={project.id}
                href={project.href}
                className={styles.cardLink}>
                {card}
              </Link>
            ) : (
              card
            );
          })}
        </div>
      </div>
    </section>
  );
}
