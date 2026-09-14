import styles from "./landing-v2.module.css";

export default function ProductExperiences() {
  return (
    <section className={styles.storySection} aria-labelledby="experiences-title">
      <div className={styles.sectionHeading}>
        <p className={styles.eyebrow}>AI WITHOUT LEAVING YOUR WORKFLOW</p>
        <h2 id="experiences-title">One workflow.<br /><span>Two ways to use KlikkFix.</span></h2>
      </div>
      <div className={styles.experienceChoices}>
        <article>
          <p className={styles.eyebrow}>BROWSER EXTENSION</p>
          <h3>AI from your right-click menu.</h3>
          <p>Select text in your browser, right-click, and choose the AI action you need. Keep working in the same tab.</p>
          <a href="#magicalclick" className={styles.textLink}>Explore MagicalClick <span aria-hidden="true">↓</span></a>
        </article>
        <article>
          <p className={styles.eyebrow}>DESKTOP APP</p>
          <h3>Your AI tools. Now on your keyboard.</h3>
          <p>Assign AI actions to custom shortcuts. Select text in the app you’re using and press your shortcut to run the command.</p>
          <a href="#desktop" className={styles.textLink}>Explore desktop shortcuts <span aria-hidden="true">↓</span></a>
        </article>
      </div>
    </section>
  );
}
