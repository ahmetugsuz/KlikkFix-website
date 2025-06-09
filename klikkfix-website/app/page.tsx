import Image from "next/image";
import Link from "next/link";

const features = [
  {
    icon: "🖱",
    title: "Right-Click Activation",
    desc: "Use via the browser's context menu: just highlight → right-click → enhance.",
  },
  {
    icon: "🔧",
    title: "AI Text Enhancement",
    desc: "Improve clarity, tone, grammar, and fluency of selected text using OpenAI's powerful models.",
  },
  {
    icon: "🧠",
    title: "Context-Aware AI",
    desc: "Understands sentence meaning for natural-sounding output.",
  },
  {
    icon: "🌐",
    title: "Universal Web Compatibility",
    desc: "Works on most websites including Gmail, Google Docs, LinkedIn, Notion, and more.",
  },
  {
    icon: "🎨",
    title: "Custom Tool Selection",
    desc: "Choose from tools like 'Rewrite', 'Make Concise', 'Fix Grammar', and 'Make Formal'.",
  },
  {
    icon: "🔒",
    title: "Privacy-Focused",
    desc: "No logging or storage of user text. AI runs securely via backend proxy.",
  },
  {
    icon: "💳",
    title: "Stripe Integration",
    desc: "Supports Basic (free), Pro, and Premium plans. Includes daily request limits and feature access control.",
  },
  {
    icon: "🛡",
    title: "Secure OAuth Login",
    desc: "Sign in via Google, Microsoft, or GitHub — no passwords needed.",
  },
];

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen w-full relative overflow-x-hidden pb-24 pt-16">
      {/* Single large filled SVG wave across the screen, behind the images, with a smooth fade to black */}
      <svg
        className="absolute left-0 w-full z-0 pointer-events-none"
        style={{ top: 'calc(50vh + 60px)' }}
        height="220"
        viewBox="0 0 1440 220"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="mainFilledWave" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
            <stop stopColor="#38bdf8" stopOpacity="1" />
            <stop offset="0.3" stopColor="#6366f1" stopOpacity="0.95" />
            <stop offset="0.6" stopColor="#a855f7" stopOpacity="0.95" />
            <stop offset="1" stopColor="#ec4899" stopOpacity="1" />
          </linearGradient>
          <linearGradient id="fadeToBlack" x1="0" y1="120" x2="0" y2="220" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="white" stopOpacity="1" />
            <stop offset="100%" stopColor="black" stopOpacity="0" />
          </linearGradient>
          <mask id="fadeMask">
            <rect x="0" y="0" width="1440" height="220" fill="url(#fadeToBlack)" />
          </mask>
        </defs>
        <g mask="url(#fadeMask)">
          <path
            d="M0 120 Q 360 0 720 120 T 1440 120 V220 H0 Z"
            fill="url(#mainFilledWave)"
            opacity="0.4"
          />
        </g>
      </svg>
      {/* Title and subtitle, upper left but still prominent */}
      <div className="absolute left-16 top-16 md:left-32 md:top-15 z-20 text-left">
        <h1 className="text-5xl font-bold mb-2 tracking-wide text-white drop-shadow-lg">KlikkFix</h1>
        <p className="text-lg text-gray-400 mb-10 shadow-sm">“Easiest and fastest way to use AI”</p>
      </div>
      <div className="flex flex-row justify-center items-center w-full mt-50 mb-8 gap-8" style={{ minHeight: 400 }}>
        {/* Images on the left-bottom */}
        <div className="relative flex flex-col items-end justify-end" style={{ minWidth: 700 }}>
          <div className="absolute -left-15 -bottom-5 z-0" style={{ filter: 'brightness(0.85)' }}>
            <Image
              src="/plan.jpg"
              alt="Plan page"
              width={576}
              height={360}
              className="rounded-3xl shadow-2xl border border-[#2a1a3a]"
              priority
            />
          </div>
          <div className="relative z-10 ml-45 mb-10">
            <Image
              src="/dashboard.png"
              alt="Dashboard"
              width={640}
              height={400}
              className="rounded-3xl shadow-2xl border border-[#2a1a3a]"
              priority
            />
          </div>
        </div>
        {/* CTA section on the right */}
        <div className="flex flex-col items-center justify-center ml-8">
          <span className="mb-4 text-2xl font-bold text-purple-300 text-center">Start using AI in your browser instantly!</span>
            <Link href="#"className="bg-gradient-to-r from-purple-600 to-purple-400 hover:bg-purple-700 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition-all duration-200 text-lg transform hover:scale-105 hover:shadow-[0_0_24px_4px_rgba(168,85,247,0.35)]">
            Get KlikkFix
          </Link>
        </div>
      </div>
      {/* Features Section */}
      <section className="w-full max-w-6xl mt-32 px-4">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-[#23143a] bg-opacity-80 rounded-2xl p-6 flex flex-col items-start shadow-lg border border-[#2a1a3a] h-full transition-transform duration-200 hover:scale-105 hover:shadow-[0_0_24px_4px_rgba(168,85,247,0.4)] hover:border-purple-500"
            >
              <span className="text-3xl mb-3">{feature.icon}</span>
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-300 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>
      {/* Download Section */}
      <section className="w-full max-w-5xl mt-32 px-4 flex flex-col items-center">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Get KlikkFix for Your Browser</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {/* Chrome Extension Card */}
          <div className="bg-[#23143a] bg-opacity-90 rounded-2xl p-8 flex flex-col items-center shadow-lg border border-[#2a1a3a]">
            <h3 className="text-2xl font-semibold text-white mb-2">Chrome Extension</h3>
            <p className="text-gray-300 mb-6 text-center">Install KlikkFix on Google Chrome for instant AI-powered text enhancement, rewriting, and more—right from your browser.</p>
            <a
              href="https://chrome.google.com/webstore/detail/klikkfix/your-chrome-extension-id"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-purple-600 to-purple-400 hover:bg-purple-700 text-white font-semibold px-6 py-2 rounded-full shadow-lg transition-colors duration-200 text-base"
            >
              Get for Chrome
            </a>
          </div>
          {/* Microsoft Edge Card */}
          <div className="bg-[#23143a] bg-opacity-90 rounded-2xl p-8 flex flex-col items-center shadow-lg border border-[#2a1a3a]">
            <h3 className="text-2xl font-semibold text-white mb-2">Microsoft Edge</h3>
            <p className="text-gray-300 mb-6 text-center">KlikkFix is also available for Microsoft Edge. Enjoy the same seamless AI features on your favorite browser.</p>
            <a
              href="https://microsoftedge.microsoft.com/addons/detail/klikkfix/your-edge-extension-id"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-blue-600 to-purple-400 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-full shadow-lg transition-colors duration-200 text-base"
            >
              Get for Edge
            </a>
          </div>
          {/* Safari Card */}
          <div className="bg-[#23143a] bg-opacity-90 rounded-2xl p-8 flex flex-col items-center shadow-lg border border-[#2a1a3a] opacity-70">
            <h3 className="text-2xl font-semibold text-white mb-2">Safari</h3>
            <p className="text-gray-300 mb-6 text-center">KlikkFix for Safari is not available yet. Stay tuned for updates and support for your favorite Apple browser!</p>
            <span className="bg-gray-700 text-gray-300 font-semibold px-6 py-2 rounded-full shadow text-base cursor-not-allowed">Not available yet</span>
          </div>
        </div>
      </section>
    </main>
  );
}
