import Image from "next/image";
import Link from "next/link";
import styles from "./landing-v2.module.css";

const features = [
  ["Right-click activation", "Start with the text in front of you. Highlight it and choose an action from the browser’s context menu."],
  ["Clearer, more natural writing", "Improve clarity, grammar, tone, and fluency. Context-aware AI works with the meaning of your selected text."],
  ["A setup that fits your work", "Choose the actions you use most in your dashboard, from professional writing to translation and problem-solving."],
  ["Privacy-focused processing", "Your text is processed through a backend proxy without logging or storage. Read the privacy policy for details."],
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
          <h2 id="platform-title">In your browser.<br /><span>Across your workday.</span></h2>
          <p>Use the extension on supported websites, including Gmail, Google Docs, LinkedIn, and Notion. Desktop apps bring KlikkFix into your Mac and Windows workflow.</p>
        </div>
        <div className={styles.platformList}>
          <article>
            <Image src="/logos/chrome.png" alt="" width={32} height={32} />
            <h3>Chrome extension</h3>
            <p>AI actions for the text you select in your browser.</p>
            <a href="https://chromewebstore.google.com/detail/klikkfix/ofoakggookgcolmahjmnfkamcjfahala" className={styles.textLink} target="_blank" rel="noopener noreferrer">Get for Chrome ↗</a>
          </article>
          <article>
            <Image src="/logos/microsoft_Icon.png" alt="" width={32} height={32} />
            <h3>Windows desktop</h3>
            <p>Work with selected text and custom shortcuts across applications.</p>
            <a href="/downloads/KlikkFix-Setup.exe" download className={styles.textLink}>Download for Windows ↓</a>
          </article>
          <article>
            <Image src="/logos/Apple.svg" alt="" width={32} height={32} className={styles.appleIcon} />
            <h3>Mac desktop</h3>
            <p>Bring AI to your writing in Notes, Mail, and other apps. Built for Apple Silicon.</p>
            <a href="/downloads/KlikkFix-2.0.1.dmg" download className={styles.textLink}>Download for Mac ↓</a>
          </article>
        </div>
        <div className={styles.compatibilityNote}>
          <p>Installation requires a supported desktop computer. Website behavior may vary. Desktop apps require premium access.</p>
          <div><Link href="/download">View product & download details ↗</Link><a href="https://microsoftedge.microsoft.com/addons/Microsoft-Edge-Extensions-Home" target="_blank" rel="noopener noreferrer">Browse Edge Add-ons ↗</a></div>
        </div>
      </section>
    </>
  );
}
