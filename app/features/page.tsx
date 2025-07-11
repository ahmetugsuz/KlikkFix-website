const features = [
  {
    icon: "🖱",
    title: "Right-Click Activation",
    desc: "Use via the browser's context menu: just highlight → right-click → enhance.",
  },
  {
    icon: "🔧",
    title: "AI Text Enhancement",
    desc: "Improve clarity, tone, grammar, and fluency of selected text using advanced AI models.",
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
    icon: "🔒",
    title: "Privacy-Focused",
    desc: "No logging or storage of user text. AI runs securely via backend proxy.",
  },
  {
    icon: "💳",
    title: "Stripe Integration",
    desc: "Supports Basic (free), Pro, and Premium plans. Includes daily request limits and feature access control.",
  },

];

export default function FeaturesPage() {
  return (
    <section id="features" className="w-full min-h-screen px-4 py-24 flex flex-col items-center justify-center scroll-mt-12 snap-start">
      <h2 className="text-4xl font-bold text-white mb-4 text-center">
        KlikkFix Features
      </h2>

      <h3 className="text-lg text-gray-400 text-center max-w-2xl mx-auto mb-4">
        Discover how KlikkFix enhances your browser with smart, secure, and AI-powered productivity tools.
      </h3>
      <div className="w-14 h-1 bg-purple-500 rounded-full mb-10 mx-auto"></div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-6xl py-6 px-4">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="bg-gradient-to-br from-[#2a1046] via-[#23143a] to-[#1a0d2e] bg-opacity-90 backdrop-blur-md rounded-2xl py-8 px-6 flex flex-col items-start shadow-lg border border-[#2a1a3a] h-full transition-transform duration-200 hover:scale-105 hover:shadow-[0_0_24px_4px_rgba(168,85,247,0.4)] hover:border-purple-500"

          >
            <span className="mb-3 inline-flex items-center justify-center w-12 h-12 rounded-xl border border-[#3c2c4f] bg-gradient-to-br from-[#4b1d80] via-[#2f1d46] to-[#1a0d2e] shadow-md text-2xl text-white ring-1 ring-white/5">
              <span className="leading-none ">{feature.icon}</span>
            </span>

            <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
            <p className="text-gray-300 text-m">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>

  );
} 