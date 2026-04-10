"use client";

import LazyVideo from "@/components/LazyVideo/LazyVideo";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import styles from "./SelectedWork.module.css";

const projects = [
  {
    id: "webdoc",
    title: "Webdoc Dashboard",
    category: "Internship Project",
    description:
      "A dashboard and presentation concept focused on clear information hierarchy, reusable components, and slide-based communication.",
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
    category: "Exam Project",
    description:
      "A playful interactive project combining strong visual identity, frontend logic, and an engaging user experience.",
    tags: ["React", "Game UI", "Interactive Design", "Frontend"],
    featured: false,
    href: "/projects/boomi",
    image: "/images/boomi-header.png",
  },
  {
    id: "onecom",
    title: "One.com Project",
    category: "Client Work",
    description:
      "A client website developed from provided design direction, with focus on implementation quality, responsiveness, and visual consistency.",
    tags: ["Client Work", "Responsive UI", "Frontend"],
    featured: false,
  },
  {
    id: "gottigheter",
    title: "Gottigheter",
    category: "Personal Project",
    description:
      "A visually driven web project with a playful tone, built to explore interface design and interaction.",
    tags: ["Frontend", "UI Design"],
    featured: false,
  },
];

export default function SelectedWork() {
  return (
    <section id="work" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <h2 className={styles.title}>Selected Work</h2>
          <p className={styles.intro}>
            A selection of projects spanning internship work, client work, exam
            projects, and interactive concepts — with a focus on UI, structure,
            and user experience.
          </p>
        </div>

        <div className={styles.grid}>
          {projects.map((project, i) => {
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
                    {project.category}
                  </span>
                  <h3 className={styles.cardTitle}>{project.title}</h3>
                  <p className={styles.cardDescription}>
                    {project.description}
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
