"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styles from "./landing-v2.module.css";

// Three distinct desktop views, then the original browser dashboard.
const slides = [
  {
    src: "/MarketingImages/wider_desktopView_dashboard.png",
    label: "Desktop · Personalized assistant",
    alt: "KlikkFix desktop dashboard with writing tone, writing habits, personalization controls, and shortcut settings",
  },
  {
    src: "/MarketingImages/hotkey_configuration_FullSizeView.png",
    label: "Desktop · Custom shortcuts",
    alt: "KlikkFix desktop hotkey configuration for code improvement, summarization, improving text, professional text, and translation",
  },
  {
    src: "/MarketingImages/linguisticDNAProfile_FullSizeView.png",
    label: "Desktop · Linguistic DNA profiles",
    alt: "KlikkFix desktop Linguistic DNA screen with saved writing style profiles and controls to edit or add a profile",
  },
  {
    src: "/dashboard.png",
    label: "Browser · Your tools and settings",
    alt: "KlikkFix browser dashboard with available tools, selected tools, and account settings",
  },
];

export default function ProductGallery() {
  const galleryRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [stopped, setStopped] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [inView, setInView] = useState(false);
  const [visible, setVisible] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(true);
  const [loaded, setLoaded] = useState<string[]>([]);
  const automatic = !stopped && !reducedMotion;

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotion = () => setReducedMotion(preference.matches);
    const updateVisibility = () => setVisible(!document.hidden);
    updateMotion();
    updateVisibility();
    preference.addEventListener("change", updateMotion);
    document.addEventListener("visibilitychange", updateVisibility);
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: 0.25 });
    if (galleryRef.current) observer.observe(galleryRef.current);
    return () => {
      preference.removeEventListener("change", updateMotion);
      document.removeEventListener("visibilitychange", updateVisibility);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!automatic || hovered || !inView || !visible || !loaded.includes(slides[active].src)) return;
    const timer = window.setTimeout(() => setActive((index) => (index + 1) % slides.length), 5000);
    return () => window.clearTimeout(timer);
  }, [active, automatic, hovered, inView, visible, loaded]);

  function selectSlide(index: number) {
    setStopped(true);
    setActive((index + slides.length) % slides.length);
  }

  return (
    <div ref={galleryRef} className={styles.productGallery} role="region" aria-roledescription="carousel" aria-label="KlikkFix product screenshots"
      onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      {!reducedMotion && (
        <button type="button" className={styles.galleryRotation} onClick={() => setStopped((value) => !value)} aria-label={automatic ? "Pause image rotation" : "Resume image rotation"}>
          <span aria-hidden="true">{automatic ? "Ⅱ" : "▷"}</span> {automatic ? "Pause slideshow" : "Resume slideshow"}
        </button>
      )}
      <div className={styles.dashboardFrame}>
        <div className={styles.galleryStage}>
          {slides.map((slide, index) => (
            <div key={slide.src} className={styles.gallerySlide} data-active={index === active} aria-hidden={index !== active} role="group" aria-roledescription="slide" aria-label={`${index + 1} of ${slides.length}: ${slide.label}`}>
              <a href={slide.src} target="_blank" rel="noopener noreferrer" tabIndex={index === active ? 0 : -1} onFocus={() => setStopped(true)} aria-label={`Open full-size screenshot: ${slide.label}`}>
                <Image src={slide.src} alt={slide.alt} fill sizes="(max-width: 760px) 92vw, 920px" loading="lazy"
                  className={`${styles.galleryImage} ${slide.src === "/dashboard.png" ? styles.galleryBrowserImage : ""}`}
                  onLoad={() => setLoaded((current) => current.includes(slide.src) ? current : [...current, slide.src])} />
              </a>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.galleryFooter}>
        <p aria-live={automatic ? "off" : "polite"} aria-atomic="true">{slides[active].label}<span>Click image to view full size ↗</span></p>
        <div className={styles.galleryNavigation} role="group" aria-label="Choose product screenshot" onFocusCapture={() => setStopped(true)}>
          <button type="button" onClick={() => selectSlide(active - 1)} aria-label="Previous screenshot">←</button>
          {slides.map((slide, index) => (
            <button type="button" key={slide.src} className={styles.galleryDot} aria-label={`Show ${slide.label}`} aria-current={index === active ? "true" : undefined} onClick={() => selectSlide(index)}><span /></button>
          ))}
          <button type="button" onClick={() => selectSlide(active + 1)} aria-label="Next screenshot">→</button>
        </div>
      </div>
    </div>
  );
}
