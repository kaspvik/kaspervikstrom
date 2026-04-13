import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <span className={styles.name}>Kasper Vikström</span>
        <p className={styles.tagline}>
          Based in Gothenburg, Sweden · Available for work and freelance
        </p>
      </div>
    </footer>
  );
}
