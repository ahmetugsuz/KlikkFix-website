# Landing page variant

Compare `/landing-v2` against `/`. The original homepage and global styles are unchanged.
The shared navbar selects the dedicated navigation only for the exact variant route.
CSS Modules isolate styles; shell overrides require the variant's page class to be present.

The demo currently uses the existing 30-second Outlook recording with a JPEG poster
extracted from that recording. No video downloads until the visitor presses play.
Playback begins muted and includes native controls. A text description accompanies it.

To use the final edit:

1. Add `public/videos/klikkfix-demo.mp4` (browser-compatible H.264 MP4 recommended).
2. Set `demoSource` in `page.tsx` to `/videos/klikkfix-demo.mp4`.
3. Replace `public/videos/klikkfix-demo-poster.jpg` with a matching poster.
4. Update the demo label, caption, and text description in `DemoVideo.tsx` if the content changes.

`DemoVideo` accepts `src`, `poster`, `label`, and `mode`. The default mode is
`click-to-play`. Set `mode="autoplay"` for muted, looping, inline playback;
autoplay is disabled for reduced-motion users, and native pause controls remain available.
Omit `src` for a clean placeholder. An unavailable or unsupported source displays
a readable fallback without changing the container dimensions.

The download CTA uses the existing `/download` page. This variant is mobile-readable;
installing the product still requires a supported desktop browser/computer.
