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

export default function FeaturesPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen w-full bg-transparent py-16">
      <h1 className="text-4xl font-bold mb-12 text-white">KlikkFix Features</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full max-w-6xl px-4">
        {features.map((feature) => (
          <div key={feature.title} className="bg-[#23143a] bg-opacity-90 rounded-2xl p-6 flex flex-col items-start shadow-lg border border-[#2a1a3a] h-full">
            <span className="text-3xl mb-3">{feature.icon}</span>
            <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
            <p className="text-gray-300 text-sm">{feature.desc}</p>
          </div>
        ))}
      </div>
    </main>
  );
} 