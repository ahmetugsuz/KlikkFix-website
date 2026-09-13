"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./landing-v2.module.css";

type DemoVideoProps = {
  src?: string;
  poster?: string;
  label?: string;
};

export default function DemoVideo({
  src,
  poster = "/videos/klikkfix-demo-poster.jpg",
  label = "KlikkFix demo: select text and turn it into a professional email",
}: DemoVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [autoplay, setAutoplay] = useState(false);
  const [paused, setPaused] = useState(true);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    setFailed(false);
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    function updatePlayback() {
      const video = videoRef.current;
      setAutoplay(!preference.matches);
      if (preference.matches) {
        video?.pause();
      } else if (src && video) {
        // Explicitly set the property as well for mobile autoplay policies.
        video.muted = true;
        void video.play().catch(() => setPaused(true));
      }
    }
    updatePlayback();
    preference.addEventListener("change", updatePlayback);
    return () => preference.removeEventListener("change", updatePlayback);
  }, [src]);

  function togglePlayback() {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      void video.play().catch(() => setPaused(true));
    } else {
      video.pause();
    }
  }

  return (
    <figure className={styles.demo} id="demo">
      <div className={styles.videoFrame}>
        {src && !failed ? (
          <video
            ref={videoRef}
            className={styles.video}
            src={src}
            poster={poster}
            preload="none"
            muted
            playsInline
            autoPlay={autoplay}
            loop
            controls={false}
            aria-label={label}
            aria-describedby="demo-description"
            onPlay={() => setPaused(false)}
            onPause={() => setPaused(true)}
            onError={() => { setFailed(true); setPaused(true); }}
          />
        ) : (
          <div className={styles.placeholder} role="img" aria-label="Demo preview unavailable">
            <span className={styles.placeholderMark} aria-hidden="true">K.</span>
            <p>{failed ? "The demo couldn’t load. Please try again later." : "Product demo coming soon."}</p>
          </div>
        )}
        {src && !failed && (
          <button className={styles.motionControl} onClick={togglePlayback} aria-label={paused ? "Resume demo" : "Pause demo"}>
            <span aria-hidden="true">{paused ? "▷" : "Ⅱ"}</span>
            {paused ? "Resume demo" : "Pause demo"}
          </button>
        )}
      </div>
      <figcaption className={styles.demoCaption}>
        <span><span className={styles.statusDot} /> KlikkFix in action</span>
        <span>Select text. Make it professional. Keep working.</span>
      </figcaption>
      <p id="demo-description" className={styles.srOnly}>
        In this recording, a user selects a rough email in Outlook, chooses KlikkFix’s
        Professional Text action, and receives a polished email in the same compose window.
        The demonstration is understandable without audio.
      </p>
    </figure>
  );
}
