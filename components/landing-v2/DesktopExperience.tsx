import DesktopMedia, { type DesktopMediaSource } from "./DesktopMedia";
import styles from "./landing-v2.module.css";

// Add a real asset here when ready. Undefined renders the shortcut illustration
// without making any requests for future files. See this route's README.
const desktopMedia: DesktopMediaSource | undefined = undefined;

export default function DesktopExperience() {
  return (
    <section id="desktop" className={styles.storySection} aria-labelledby="desktop-title">
      <div className={styles.desktopLayout}>
        <div className={styles.detailHeading}>
          <p className={styles.eyebrow}>DESKTOP EXPERIENCE · MAC & WINDOWS</p>
          <h2 id="desktop-title">Your commands.<br />Your shortcuts.</h2>
          <p>Select text in your current application, press the assigned shortcut, and keep going.</p>
          <p className={styles.desktopBenefit}>Polish a message. Summarize a passage. Translate selected text. All without opening another AI app.</p>
          <a href="#downloads" className={styles.textLink}>Get KlikkFix for desktop <span aria-hidden="true">↓</span></a>
        </div>
        <DesktopMedia media={desktopMedia} />
      </div>
    </section>
  );
}
