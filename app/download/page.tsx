"use client";

import { useState } from "react";
import Image from "next/image";

export default function DownloadPage() {
  const [showInfo, setShowInfo] = useState(false);

  // No 'e' argument needed anymore. Pure logic.
  const handleDownload = () => {
    setShowInfo(true);

    // Trigger the download programmatically
    const link = document.createElement("a");
    link.href = "/downloads/KlikkFix-Setup.exe";
    link.download = "KlikkFix-Setup.exe";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="downloads"
      className="scroll-mt-20 w-full min-h-screen max-w-5xl py-32 px-4 flex flex-col items-center justify-center snap-start relative"
    >
      <h2 className="text-3xl font-bold text-white mb-2 text-center">
        Download KlikkFix
      </h2>
      <h3 className="text-lg text-gray-400 text-center max-w-2xl mx-auto mb-10">
        Get the latest Desktop versions of KlikkFix
      </h3>
      
      <div className="w-14 h-1 bg-purple-500 rounded-full mb-10 mx-auto"></div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-20 w-full justify-center">
        
        {/* Chrome Extension Card */}
        <div className="bg-[#23143a] bg-opacity-90 rounded-2xl p-8 flex flex-col items-center shadow-lg border border-[#2a1a3a] w-[340px] min-h-[500px] transition-shadow duration-300 hover:shadow-2xl">
          <Image
            src="/logos/chrome.png"
            alt="Chrome Logo"
            width={56}
            height={56}
            className="mb-4"
            priority
          />
          <h3 className="text-2xl font-semibold text-white mb-2">
            Chrome Extension
          </h3>
          <ul className="text-gray-300 mb-6 text-left list-disc pl-5 space-y-4 leading-relaxed">
            <li>Buy premium subscription to access the paid desktop version</li>
            <li>Right-click on highlighted text to use</li>
            <li>Instant AI-powered text enhancement inside your browser</li>
            <li>Rewrite, expand, or summarize text, and more...</li>
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

        {/* Windows Desktop App Card */}
        <div className="bg-[#23143a] bg-opacity-90 rounded-2xl p-8 flex flex-col items-center shadow-lg border border-[#2a1a3a] w-[340px] min-h-[500px] transition-shadow duration-300 hover:shadow-2xl">
          <Image
            src="/logos/microsoft_Icon.png"
            alt="Windows Logo"
            width={56}
            height={56}
            className="mb-4"
            priority
          />
          <h3 className="text-2xl font-semibold text-white mb-2">
            Windows Desktop
          </h3>
          <ul className="text-gray-300 mb-6 text-left list-disc pl-5 space-y-4 leading-relaxed">
            <li><span className="text-white"></span> Faster, smoother, and way more capable than the extension.</li>
            <li><span className="text-white">Works Everywhere:</span> Enhance Text or Code in any application</li>
            <li><span className="text-white">Your Customized Shortcuts:</span> Runs instantly on highlighted text right at your fingertips wherever you are on your PC</li>
            <li><span className="text-white">Personalized Writing DNA:</span> AI that learns and mimics your unique writing style, that sounds like you.</li>
          </ul>
          {/* Changed to button to fix 'e' error and handle logic cleaner */}
          <button
            onClick={handleDownload}
            className="bg-gradient-to-r from-blue-600 to-purple-400 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-full shadow-lg transition-all duration-200 text-base mt-auto transform hover:-translate-y-1 hover:shadow-xl"
          >
            Download for Windows
          </button>
        </div>

        {/* MacOS Card */}
        <div className="bg-[#23143a] bg-opacity-90 rounded-2xl p-8 flex flex-col items-center shadow-lg border border-[#2a1a3a] w-[340px] min-h-[500px] opacity-70 transition-shadow duration-300 hover:shadow-2xl">
          <Image
            src="/logos/Apple.svg"
            alt="Apple Logo"
            width={50}
            height={50}
            className="mb-4 -mt-1.5"
            priority
          />
          <h3 className="text-2xl font-semibold text-white mb-2">MacOS</h3>
          <ul className="text-gray-300 mb-6 text-left list-disc pl-5 space-y-4 leading-relaxed">
            <li>Coming soon to MacOS</li>
            <li>All the same features across your Mac</li>
            <li>Stay tuned for updates</li>
          </ul>
          <span className="bg-gray-700 text-gray-300 font-semibold px-6 py-2 rounded-full shadow text-base cursor-not-allowed mt-auto">
            Not available yet
          </span>
        </div>
      </div>

      {showInfo && (
  <>
    {/* Full-screen overlay */}
    <div className="fixed top-0 left-0 w-screen h-screen z-40 bg-black/50"></div>

    {/* Centered popup */}
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
      <div className="bg-[#1a0f2e] rounded-2xl p-8 max-w-md w-[90vw] shadow-[0_0_50px_rgba(0,0,0,0.5)] border-2 border-purple-500/50 text-center">
        <h4 className="text-xl font-bold text-white mb-4">
          Installing on Windows?
        </h4>
        <p className="text-gray-300 mb-4 leading-relaxed text-sm text-left">
          You might see a blue <strong>"Windows Protected Your PC"</strong> window. This is normal for new apps.
        </p>
        
        <div className="bg-[#2a1a3a] p-4 rounded-lg mb-6 text-left border border-white/10">
            <p className="text-gray-200 text-sm mb-2 font-semibold">How to open:</p>
            <ol className="list-decimal list-inside text-gray-400 text-sm space-y-1">
                <li>Click <strong className="text-white border-b border-gray-500">More info</strong></li>
                <li>Click <strong className="text-white border-b border-gray-500">Run anyway</strong></li>
            </ol>
        </div>
        
        <button
          onClick={() => setShowInfo(false)}
          className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 rounded-xl transition shadow-lg"
        >
          Got it!
        </button>
      </div>
    </div>
  </>
)}


    </section>
  );
}