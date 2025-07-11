import Image from "next/image";

export default function DownloadPage() {
  return (
    <section id="downloads" className="scroll-mt-20 w-full min-h-screen max-w-5xl py-32 px-4 flex flex-col items-center justify-center snap-start">
    <h2 className="text-3xl font-bold text-white mb-8 text-center">Get KlikkFix for Your Browser</h2>
    <div className="w-14 h-1 bg-purple-500 rounded-full mb-10 mx-auto"></div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-20 w-full justify-center">
      {/* Chrome Extension Card */}
      <div className="bg-[#23143a] bg-opacity-90 rounded-2xl p-8 flex flex-col items-center shadow-lg border border-[#2a1a3a] w-[340px] min-h-[500px] transition-shadow duration-300 hover:shadow-2xl">
        <Image src="/logos/chrome.png" alt="Chrome Logo" width={56} height={56} className="mb-4" priority />
        <h3 className="text-2xl font-semibold text-white mb-2">Chrome Extension</h3>
        <ul className="text-gray-300 mb-6 text-left list-disc pl-5 space-y-2 leading-relaxed">
          <li>Instant AI-powered text enhancement</li>
          <li>Rewrite, expand, or summarize text</li>
          <li>Works on Gmail, Docs, LinkedIn, and more</li>
          <li>Right-click to use</li>
        </ul>
        <a
          href="https://chromewebstore.google.com/detail/klikkfix/ofoakggookgcolmahjmnfkamcjfahala"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-purple-600 to-purple-400 hover:bg-purple-700 text-white font-semibold px-6 py-2 rounded-full shadow-lg transition-all duration-200 text-base mt-auto transform hover:-translate-y-1 hover:shadow-xl"
        >
          Get for Chrome
        </a>
      </div>
      {/* Microsoft Edge Card */}
      <div className="bg-[#23143a] bg-opacity-90 rounded-2xl p-8 flex flex-col items-center shadow-lg border border-[#2a1a3a] w-[340px] min-h-[500px] transition-shadow duration-300 hover:shadow-2xl">
        <Image src="/logos/microsoft_Icon.png" alt="Edge Logo" width={56} height={56} className="mb-4" priority />
        <h3 className="text-2xl font-semibold text-white mb-2">Microsoft Edge</h3>
        <ul className="text-gray-300 mb-6 text-left list-disc pl-5 space-y-2 leading-relaxed">
          <li>All Chrome features, now on Edge</li>
          <li>Seamless AI text tools</li>
          <li>Works on most websites</li>
          <li>Easy install from Edge Add-ons</li>
        </ul>
        <a
          href="https://microsoftedge.microsoft.com/addons/Microsoft-Edge-Extensions-Home"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-blue-600 to-purple-400 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-full shadow-lg transition-all duration-200 text-base mt-auto transform hover:-translate-y-1 hover:shadow-xl"
        >
          Get for Edge
        </a>
      </div>
      {/* Safari Card */}
      <div className="bg-[#23143a] bg-opacity-90 rounded-2xl p-8 flex flex-col items-center shadow-lg border border-[#2a1a3a] w-[340px] min-h-[500px] opacity-70 transition-shadow duration-300 hover:shadow-2xl">
        <Image src="/logos/Apple.svg" alt="Safari Logo" width={50} height={50} className="mb-4 -mt-1.5" priority />
        <h3 className="text-2xl font-semibold text-white mb-2">Safari</h3>
        <ul className="text-gray-300 mb-6 text-left list-disc pl-5 space-y-2 leading-relaxed">
          <li>Coming soon to Safari</li>
          <li>All the same AI features</li>
          <li>Stay tuned for updates</li>
        </ul>
        <span className="bg-gray-700 text-gray-300 font-semibold px-6 py-2 rounded-full shadow text-base cursor-not-allowed mt-auto">Not available yet</span>
      </div>
    </div>
  </section>
  );
} 