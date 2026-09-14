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

The primary CTA and navbar Download link target the on-page `#downloads` section.
That section keeps the existing product download destinations and links to `/download` for details. This variant is mobile-readable;
installing the product still requires a supported desktop browser/computer.

Refinement: the primary CTA follows the demo. The dashboard, tool overview, closing CTA,
and existing footer share restrained blue/purple/magenta accents. Footer presentation
is scoped by the variant marker; its existing links and contact submission remain intact.

## Content mapping

- IntroSection: restore the AI-tab problem as a concise before-flow, followed by the solution.
- RightKlikkIntro: retain the right-click explanation through Select / Use AI / Done; omit the redundant intro video.
- MagicalClickIntro + ToolShowCase + ToolExample: one dedicated interactive MagicalClick section, with original before/after examples. Rewrite, Shorten, and Expand use explanatory action guides, not invented demo outputs.
- Original dashboard: retained with existing v2 image treatment, after tools and workflow.
- FeaturesPage: restore activation, text enhancement/context, customization, and privacy; omit Stripe implementation details.
- DownloadPage: restore Chrome, Windows, and Apple Silicon Mac options with original URLs; the Edge destination is labeled as the general Add-ons store.
- Footer: keep all existing links and submission functionality with unchanged v2 styling.

Only dedicated variant files change. Stop the development server before `npm run build`,
then restart it afterward: both commands use `.next` in this Next.js version.

## Media and layout polish

The original Improve, Translate, and Solve PNGs are RGBA assets with transparent
backgrounds. They are served from public URLs without build-time image decoding
(Turbopack exceeded its image memory limit on the original Translate export).
No transparency re-export is required. Both original recordings are restored in
the tool panel, with native controls, muted inline loops, visibility-aware playback,
and reduced-motion handling. Text examples remain directly below the media.
Rewrite, Shorten, and Expand retain their action guides because the original site
has no dedicated media for these actions.

The icon-only navigation sits within a reserved top band. All navbar links target
local anchors, including the contact footer, using shared scroll clearance.
Full-width page atmosphere and container-query-width demo glows replace fixed
negative decoration insets. Content remains constrained to the existing widths.
Section spacing uses shared responsive tokens. Footer and helper text are larger.
