import Image from "next/image";
import Link from "next/link";
import styles from "./landing-v2.module.css";

export default function LandingNavigation() {
  return (
    <header className={styles.header}>
      <a className={styles.skipLink} href="#main-content">Skip to content</a>
      <nav className={styles.nav} aria-label="Main navigation">
        <Link href="/" className={styles.brand} aria-label="KlikkFix home">
          <Image src="/favicon/favicon.svg" alt="" width={28} height={28} />
          <span>KlikkFix</span>
        </Link>
        <div className={styles.navLinks}>
          <a href="#demo">Demo</a>
          <a href="#features">Features</a>
          <Link href="/download">Download</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </nav>
    </header>
  );
}
