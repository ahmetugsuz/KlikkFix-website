"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styles from "./landing-v2.module.css";

export type DesktopMediaSource =
  | { kind: "image"; src: string; alt: string; width: number; height: number }
  | { kind: "video"; src: string; description: string; poster?: string; autoplay?: boolean };

function ShortcutIllustration() {
  return (
    <figure className={styles.shortcutIllustration}>
      <p className={styles.eyebrow}>CUSTOM SHORTCUTS</p>
      <ul className={styles.shortcutMappings}>
        {["Professional Text", "Summarize", "Translate", "Rewrite"].map((action) => (
          <li key={action}><span className={styles.keycap}>Your shortcut</span><span aria-hidden="true">→</span><span>{action}</span></li>
        ))}
      </ul>
      <p className={styles.shortcutFlow}>Select text <span aria-hidden="true">→</span> Press your shortcut <span aria-hidden="true">→</span> Keep working</p>
      <figcaption>Shortcut concept illustration. You choose the keys; these are not default bindings or an app screenshot.</figcaption>
    </figure>
  );
}

function DesktopVideo({ media }: { media: Extract<DesktopMediaSource, { kind: "video" }> }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [visible, setVisible] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let inView = false;
    function updatePlayback() {
      if (!video) return;
      if (inView && visible && media.autoplay !== false && !preference.matches) {
        video.muted = true;
        void video.play().catch(() => { /* Native controls provide manual playback. */ });
      } else video.pause();
    }
    const observer = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting;
      if (inView) setVisible(true);
      updatePlayback();
    }, { threshold: 0.15 });
    observer.observe(video);
    preference.addEventListener("change", updatePlayback);
    return () => { observer.disconnect(); preference.removeEventListener("change", updatePlayback); video.pause(); };
  }, [media.autoplay, visible]);

  if (failed) return <ShortcutIllustration />;
  return (
    <figure className={styles.desktopMedia}>
      <video ref={videoRef} src={visible ? media.src : undefined} poster={media.poster} preload="none" muted playsInline loop={media.autoplay !== false} controls aria-label="KlikkFix desktop workflow demo" aria-describedby="desktop-video-description" onError={() => setFailed(true)} />
      <figcaption id="desktop-video-description">{media.description}</figcaption>
    </figure>
  );
}

export default function DesktopMedia({ media }: { media?: DesktopMediaSource }) {
  const [failedImage, setFailedImage] = useState<string>();
  if (!media || !media.src || failedImage === media.src) return <ShortcutIllustration />;
  if (media.kind === "video") return <DesktopVideo key={media.src} media={media} />;
  return (
    <figure className={styles.desktopMedia}>
      <Image src={media.src} alt={media.alt} width={media.width} height={media.height} sizes="(max-width: 760px) 90vw, 560px" loading="lazy" onError={() => setFailedImage(media.src)} />
      <figcaption>{media.alt}</figcaption>
    </figure>
  );
}
