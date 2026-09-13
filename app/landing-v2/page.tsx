import Image from "next/image";
import Link from "next/link";
import DemoVideo from "@/components/landing-v2/DemoVideo";
import dashboard from "@/public/dashboard.png";
import styles from "@/components/landing-v2/landing-v2.module.css";

// Replace with "/videos/klikkfix-demo.mp4" when the final edit is ready.
const demoSource = "/demoVideoes/outlookDemoProfessional.mp4";

const steps = [
  { title: "Select", text: "Highlight text directly where you’re working." },
  { title: "Use AI", text: "Right-click to rewrite, summarize, translate, or solve." },
  { title: "Done", text: "Get the result and carry on with your work." },
];

export default function LandingV2Page() {
  return (
    <main id="main-content" className={styles.page} tabIndex={-1}>
      <section className={styles.hero} aria-labelledby="landing-title">
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}><span className={styles.statusDot} /> YOUR WORKFLOW. WITH AI.</p>
          <h1 id="landing-title">AI. <span>One click away.</span></h1>
          <p className={styles.subtitle}>Rewrite, summarize, and translate right in your browser.<br className={styles.desktopBreak} /> Keep your focus. Skip the app switching.</p>
        </div>
        <DemoVideo src={demoSource} />
        <div className={styles.demoCta}>
          <Link href="/download" className={styles.primaryCta}>Try KlikkFix <span aria-hidden="true">↗</span></Link>
          <p className={styles.ctaNote}>Start with the Chrome extension · Also available for Mac & Windows</p>
        </div>
      </section>

      <section className={styles.product} id="features" aria-labelledby="product-title">
        <div className={styles.sectionHeading}>
          <p className={styles.eyebrow}>A SHORTER PATH FROM THOUGHT TO DONE</p>
          <h2 id="product-title">Your everyday AI tools.<br /><span>All within reach.</span></h2>
          <p>Choose the tools you use most. Keep them together in your KlikkFix dashboard, ready for your next right-click.</p>
        </div>
        <div className={styles.dashboardFrame}>
          <Image src={dashboard} alt="KlikkFix dashboard with available tools, selected tools, and account settings" sizes="(max-width: 760px) 92vw, 920px" className={styles.dashboard} />
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
        <div className={styles.toolOverview}>
          <div>
            <p className={styles.eyebrow}>THE RIGHT TOOL. RIGHT THERE.</p>
            <h3>Small actions.<br />A smoother workday.</h3>
          </div>
          <dl className={styles.toolList}>
            <div><dt>Improve & rewrite</dt><dd>Make your writing clearer, or give an email a professional tone.</dd></div>
            <div><dt>Summarize & shorten</dt><dd>Get to the key points and turn long text into something concise.</dd></div>
            <div><dt>Translate & solve</dt><dd>Work across languages or get help with a question you’ve selected.</dd></div>
          </dl>
        </div>
      </section>

      <section className={styles.closing} aria-labelledby="closing-title">
        <div><p className={styles.eyebrow}>YOUR NEXT CLICK, UPGRADED.</p><h2 id="closing-title">Stop switching.<br />Start doing.</h2><p className={styles.closingCopy}>Bring AI into your workflow with KlikkFix.</p></div>
        <Link href="/download" className={styles.primaryCta}>Try KlikkFix <span aria-hidden="true">↗</span></Link>
      </section>
    </main>
  );
}
