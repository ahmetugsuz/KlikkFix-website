import Link from "next/link";
import ProductExperiences from "@/components/landing-v2/ProductExperiences";
import DesktopExperience from "@/components/landing-v2/DesktopExperience";
import MagicalClick from "@/components/landing-v2/MagicalClick";
import ProductDetails from "@/components/landing-v2/ProductDetails";
import DemoVideo from "@/components/landing-v2/DemoVideo";
import ProductGallery from "@/components/landing-v2/ProductGallery";
import styles from "@/components/landing-v2/landing-v2.module.css";

// Replace with "/videos/klikkfix-demo.mp4" when the final edit is ready.
const demoSource = "/videos/KlikkFix_Marketing_Video_v4.mp4";

const steps = [
  { title: "Select", text: "Highlight the text you want to work with." },
  { title: "Trigger KlikkFix", text: "Right-click in your browser or use a keyboard shortcut on desktop." },
  { title: "Keep going", text: "Get the result without leaving your workflow." },
];

export default function LandingV2Page() {
  return (
    <main id="main-content" className={styles.page} tabIndex={-1}>
      <section className={styles.hero} aria-labelledby="landing-title">
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}><span className={styles.statusDot} /> YOUR WORKFLOW. WITH AI.</p>
          <h1 id="landing-title">AI. <span>One click away.</span></h1>
          <p className={styles.subtitle}>Rewrite, summarize, translate, and more.<br className={styles.desktopBreak} /> Use AI without leaving your workflow.</p>
        </div>
        <DemoVideo src={demoSource} />
        <div className={styles.demoCta}>
          <Link href="#downloads" className={styles.primaryCta}>Try KlikkFix <span aria-hidden="true">↗</span></Link>
          <p className={styles.ctaNote}>Browser extension · Desktop apps for Mac & Windows</p>
        </div>
      </section>

      <section className={styles.storySection} aria-labelledby="problem-title">
        <div className={styles.sectionHeading}>
          <p className={styles.eyebrow}>LESS TIME BETWEEN YOU AND THE ANSWER</p>
          <h2 id="problem-title">AI shouldn’t interrupt<br /><span>your workflow.</span></h2>
          <p>Using AI shouldn’t mean leaving your work behind. The copying, prompting, and switching back all interrupt your flow.</p>
        </div>
        <div className={styles.beforeFlow}>
          <p className={styles.eyebrow}>THE TRADITIONAL WAY</p>
          <ol>{["Leave your workflow", "Open an AI tab", "Copy & paste", "Explain with a prompt ", "Copy the result", "Switch back to your workflow"].map((item) => <li key={item}>{item}</li>)}</ol>
        </div>
        <div className={styles.solutionHeading}>
          <p className={styles.eyebrow}>THERE’S A SHORTER WAY</p>
          <h2>Bring AI to your work.</h2>
          <p>A right-click in your browser. A shortcut on desktop. Two ways to reach the same result: staying in your flow.</p>
        </div>
        <ol className={styles.steps}>
          {steps.map((step, index) => (
            <li key={step.title}>
              <span className={styles.stepNumber}>0{index + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <ProductExperiences />

      <MagicalClick />

      <DesktopExperience />

      <section className={styles.product} id="dashboard" aria-labelledby="product-title">
        <div className={styles.sectionHeading}>
          <p className={styles.eyebrow}>YOUR TOOLS. YOUR SETUP.</p>
          <h2 id="product-title">Make KlikkFix yours.</h2>
          <p>Keep the AI actions you use most within reach. Choose your browser tools in the dashboard, and assign custom shortcuts in the desktop app.</p>
        </div>
        <ProductGallery />
      </section>

      <ProductDetails />

      <section className={styles.closing} aria-labelledby="closing-title">
        <div><p className={styles.eyebrow}>YOUR NEXT CLICK, UPGRADED.</p><h2 id="closing-title">Stop switching.<br />Start doing.</h2><p className={styles.closingCopy}>Bring AI into your workflow with KlikkFix.</p></div>
        <Link href="#downloads" className={styles.primaryCta}>Try KlikkFix <span aria-hidden="true">↗</span></Link>
      </section>
    </main>
  );
}
