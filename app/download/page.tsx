export default function DownloadPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen w-full bg-transparent py-16">
      <h1 className="text-4xl font-bold mb-12 text-white">Get KlikkFix for Your Browser</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl px-4">
        {/* Chrome Extension Card */}
        <div className="bg-[#23143a] bg-opacity-90 rounded-2xl p-8 flex flex-col items-center shadow-lg border border-[#2a1a3a]">
          <h2 className="text-2xl font-semibold text-white mb-2">Chrome Extension</h2>
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
          <h2 className="text-2xl font-semibold text-white mb-2">Microsoft Edge</h2>
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
          <h2 className="text-2xl font-semibold text-white mb-2">Safari</h2>
          <p className="text-gray-300 mb-6 text-center">KlikkFix for Safari is not available yet. Stay tuned for updates and support for your favorite Apple browser!</p>
          <span className="bg-gray-700 text-gray-300 font-semibold px-6 py-2 rounded-full shadow text-base cursor-not-allowed">Not available yet</span>
        </div>
      </div>
    </main>
  );
} 