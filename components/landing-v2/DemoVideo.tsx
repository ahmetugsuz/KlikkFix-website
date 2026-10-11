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
  const [muted, setMuted] = useState(true);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    setFailed(false);
    setMuted(true);
    // Every new source starts silently; only a visitor's click enables sound.
    if (videoRef.current) videoRef.current.muted = true;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    function updatePlayback() {
      const video = videoRef.current;
      setAutoplay(!preference.matches);
      if (preference.matches) {
        video?.pause();
      } else if (src && video) {
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

  function toggleMute() {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setMuted(video.muted);
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
            muted={muted}
            playsInline
            autoPlay={autoplay}
            loop
            controls={false}
            aria-label={label}
            aria-describedby="demo-description"
            onPlay={() => setPaused(false)}
            onPause={() => setPaused(true)}
            onVolumeChange={(event) => setMuted(event.currentTarget.muted)}
            onError={() => { setFailed(true); setPaused(true); }}
          />
        ) : (
          <div className={styles.placeholder} role="img" aria-label="Demo preview unavailable">
            <span className={styles.placeholderMark} aria-hidden="true">K.</span>
            <p>{failed ? "The demo couldn’t load. Please try again later." : "Product demo coming soon."}</p>
          </div>
        )}
        {src && !failed && (
          <div className={styles.videoControls} role="group" aria-label="Demo controls">
            <button type="button" className={styles.motionControl} onClick={toggleMute} aria-label={muted ? "Unmute demo" : "Mute demo"}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M11 5 6 9H3v6h3l5 4V5Z" />
                {muted ? <path d="m17 9 5 6m0-6-5 6" /> : <><path d="M15 8a6 6 0 0 1 0 8" /><path d="M18 5a10 10 0 0 1 0 14" /></>}
              </svg>
              {muted ? "Unmute" : "Mute"}
            </button>
            <button type="button" className={styles.motionControl} onClick={togglePlayback} aria-label={paused ? "Resume demo" : "Pause demo"}>
              <span aria-hidden="true">{paused ? "▷" : "Ⅱ"}</span>
              {paused ? "Resume demo" : "Pause demo"}
            </button>
          </div>
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
