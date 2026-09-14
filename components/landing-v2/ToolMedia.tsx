"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styles from "./landing-v2.module.css";

type Media =
  | { kind: "image"; source: string; width: number; height: number; alt: string }
  | { kind: "video"; source: string; description: string; poster?: string };

const mediaByTool: Record<string, Media> = {
  "Improve Text": { kind: "image", source: "/demoImages/Improve.png", width: 1859, height: 1034, alt: "Original KlikkFix Improve Text demonstration" },
  "Professional Text": { kind: "video", source: "/demoVideoes/outlookDemoProfessional.mp4", poster: "/videos/klikkfix-demo-poster.jpg", description: "A user selects a rough email in Outlook and uses Professional Text to replace it with a polished version in the same compose window." },
  Summarize: { kind: "video", source: "/demoVideoes/DemoSummarizeNorskeLeksikon.mp4", description: "KlikkFix’s original recording demonstrates summarizing selected text from a Norwegian encyclopedia article in the browser." },
  Translate: { kind: "image", source: "/demoImages/VGTranslateEdited.png", width: 1356, height: 1119, alt: "Original KlikkFix Translate demonstration on a VG webpage" },
  "Solve Problem": { kind: "image", source: "/demoImages/ToolSolvedProblem.png", width: 1846, height: 1211, alt: "Original KlikkFix Solve Problem demonstration and result" },
};

export default function ToolMedia({ name }: { name: string }) {
  const media = mediaByTool[name];
  const videoRef = useRef<HTMLVideoElement>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let visible = false;
    function updatePlayback() {
      if (!video) return;
      if (visible && !preference.matches) {
        video.muted = true;
        void video.play().catch(() => { /* Native controls remain available. */ });
      } else video.pause();
    }
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      updatePlayback();
    }, { threshold: 0.15 });
    observer.observe(video);
    preference.addEventListener("change", updatePlayback);
    return () => {
      observer.disconnect();
      preference.removeEventListener("change", updatePlayback);
      video.pause();
    };
  }, [name]);

  if (!media) return null;

  return (
    <figure className={styles.toolMedia}>
      {media.kind === "image" ? (
        <a href={media.source} target="_blank" rel="noopener noreferrer" aria-label={`Open full-size ${name} screenshot in a new tab`}>
          <Image src={media.source} width={media.width} height={media.height} unoptimized alt={media.alt} sizes="(max-width: 760px) 90vw, 700px" className={styles.toolScreenshot} />
        </a>
      ) : failed ? (
        <p className={styles.mediaFallback}>This recording couldn’t load. The text example is still available below.</p>
      ) : (
        <video ref={videoRef} src={media.source} poster={media.poster} preload="metadata" muted loop playsInline controls aria-label={`${name} product recording`} aria-describedby="tool-recording-description" onError={() => setFailed(true)} className={styles.toolRecording} />
      )}
      <figcaption>{media.kind === "image" ? "Product screenshot · Open to view full size ↗" : "Product recording · Playback controls available"}</figcaption>
      {media.kind === "video" && <p id="tool-recording-description" className={styles.srOnly}>{media.description}</p>}
    </figure>
  );
}
