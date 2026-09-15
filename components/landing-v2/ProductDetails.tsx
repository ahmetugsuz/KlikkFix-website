import Image from "next/image";
import Link from "next/link";
import styles from "./landing-v2.module.css";

const features = [
  ["AI where you work", "Start with the text in front of you. Use a right-click in the browser or your assigned keyboard shortcut in the desktop app."],
  ["Clearer, more natural writing", "Improve clarity, grammar, tone, and fluency. Context-aware AI works with the meaning of your selected text."],
  ["A setup that fits your work", "Choose your browser actions and assign your desktop shortcuts around the tasks you do most."],
  ["Privacy-focused processing", "Understand how your text is handled when you use KlikkFix. Read the privacy policy for processing and data-handling details."],
];

export default function ProductDetails() {
  return (
    <>
      <section className={styles.storySection} id="features" aria-labelledby="features-title">
        <div className={styles.featureLayout}>
          <div className={styles.detailHeading}>
            <p className={styles.eyebrow}>BUILT AROUND YOUR WORK</p>
            <h2 id="features-title">Useful by design.</h2>
            <p>The tools you need, with fewer interruptions between a task and its result.</p>
          </div>
          <dl className={styles.featureList}>
            {features.map(([title, description], index) => (
              <div key={title}>
                <dt><span aria-hidden="true">0{index + 1}</span>{title}</dt>
                <dd>{description}{index === 3 && <> <a href="https://ahmetugsuz.github.io/klikkFix-extension/privacy" target="_blank" rel="noopener noreferrer">Privacy policy ↗</a></>}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
      <section className={styles.storySection} id="downloads" aria-labelledby="platform-title">
        <div className={styles.sectionHeading}>
          <p className={styles.eyebrow}>WORKS WHERE YOU WORK</p>
          <h2 id="platform-title">Get KlikkFix where you work.</h2>
          <p>Choose your platform and get started.</p>
        </div>
        <div className={styles.platformList}>
          <article>
            <Image src="/logos/chrome.png" alt="" width={32} height={32} />
            <h3>Chrome extension</h3>
            <p>AI actions, right in your browser’s right-click menu.</p>
            <div className={styles.platformAction}>
              <a href="https://chromewebstore.google.com/detail/klikkfix/ofoakggookgcolmahjmnfkamcjfahala" className={styles.textLink} target="_blank" rel="noopener noreferrer">Get for Chrome ↗</a>
            </div>
          </article>
          <article>
            <Image src="/logos/microsoft_Icon.png" alt="" width={32} height={32} />
            <h3>Windows desktop</h3>
            <p>Select text and use AI through keyboard shortcuts.</p>
            <div className={styles.platformAction}>
              <a href="/downloads/KlikkFix-Setup.exe" download className={styles.textLink}>Download for Windows ↓</a>
              <p className={styles.trialNote}>1 month free · No card required</p>
            </div>
          </article>
          <article>
            <Image src="/logos/Apple.svg" alt="" width={32} height={32} className={styles.appleIcon} />
            <h3>macOS</h3>
            <p>AI for your writing on Mac. Built for Apple Silicon.</p>
            <div className={styles.platformAction}>
              <a href="/downloads/KlikkFix-2.0.1.dmg" download className={styles.textLink}>Download for macOS ↓</a>
              <p className={styles.trialNote}>1 month free · No card required</p>
            </div>
          </article>
        </div>
        <div className={styles.compatibilityNote}>
          <div><Link href="/download">View product & download details ↗</Link><a href="https://microsoftedge.microsoft.com/addons/Microsoft-Edge-Extensions-Home" target="_blank" rel="noopener noreferrer">Browse Edge Add-ons ↗</a></div>
        </div>
      </section>
    </>
  );
}
