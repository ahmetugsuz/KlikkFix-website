# Landing page variant

Compare `/landing-v2` against `/`. The original homepage and global styles are unchanged.
The shared navbar selects the dedicated navigation only for the exact variant route.
CSS Modules isolate styles; shell overrides require the variant's page class to be present.

The demo currently uses the existing 30-second Outlook recording with a JPEG poster
extracted from that recording. Playback starts automatically, muted, inline, and loops
using the native video element. A discreet pause/resume button replaces native controls.
A text description accompanies the recording. Loop continuity depends on the source edit;
the browser restarts the existing recording without a custom timer or player library.

To use the final edit:

1. Add `public/videos/klikkfix-demo.mp4` (browser-compatible H.264 MP4 recommended).
2. Set `demoSource` in `page.tsx` to `/videos/klikkfix-demo.mp4`.
3. Replace `public/videos/klikkfix-demo-poster.jpg` with a matching poster.
4. Update the demo label, caption, and text description in `DemoVideo.tsx` if the content changes.

`DemoVideo` accepts `src`, `poster`, and `label`. Autoplay begins after checking the
reduced-motion preference. Reduced-motion users initially see a static poster and can
choose to resume. Changing that preference to reduced motion pauses playback immediately.
If the browser blocks autoplay, the poster and resume control remain available.
Omit `src` for a clean placeholder. An unavailable or unsupported source displays
a readable fallback without changing the container dimensions.

The download CTA uses the existing `/download` page. This variant is mobile-readable;
installing the product still requires a supported desktop browser/computer.

Refinement: the primary CTA follows the demo. The dashboard, tool overview, closing CTA,
and existing footer share restrained blue/purple/magenta accents. Footer presentation
is scoped by the variant marker; its existing links and contact submission remain intact.
