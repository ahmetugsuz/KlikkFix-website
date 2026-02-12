import Image from "next/image";

export default function MobileGate() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0f0817] px-6 text-center">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-[#0f0817] to-[#0f0817] pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center">
        <Image
          src="/favicon.ico" 
          alt="KlikkFix Logo"
          width={80}
          height={80}
          className="mb-6 drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]"
        />
        
        <h1 className="text-3xl font-bold text-white mb-3">
          Desktop Required
        </h1>
        
        <p className="text-gray-400 text-lg mb-8 max-w-xs leading-relaxed">
          KlikkFix is a powerful productivity tool designed for your <strong>Mac</strong> and <strong>PC</strong> workflow.
        </p>

        <div className="bg-white/5 border border-white/10 rounded-xl p-6 w-full max-w-sm backdrop-blur-sm">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-[#2a1a3a] rounded-full flex items-center justify-center">
              <span className="text-xl">💻</span>
            </div>
            <div className="h-px w-12 bg-gray-600"></div>
            <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center shadow-[0_0_10px_rgba(147,51,234,0.5)]">
              <span className="text-xl">🚀</span>
            </div>
          </div>
          <p className="text-gray-300 text-sm">
            Please visit <span className="text-white font-mono bg-white/10 px-1 rounded">klikkfix.com</span> on your computer to download the app.
          </p>
        </div>

        {/* You can still let them read the whitepaper on mobile! */}
        <a
          href="/whitepaper/WhitepaperV1.pdf"
          target="_blank" 
          className="mt-12 text-gray-500 hover:text-white text-sm underline underline-offset-4 transition-colors"
        >
          Read the Whitepaper instead
        </a>
      </div>
    </div>
  );
}