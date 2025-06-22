'use client';
import '../app/globals.css';
import Image from "next/image";
import IntroSection from "../components/IntroSection";
import RightKlikkIntro from '../components/RightKlikkIntro';
import MagicalClickIntro from "../components/MagicalClickIntro";
import FadeSection from "../components/FadeSection";  
import Link from "next/link";
import AOSInitializer from '../components/AOSInitializer';
import ClientLayout from '../components/ClientLayout';
import ToolShowcaseSection from "../components/ToolShowCase";
import DashImg from '../public/extensionScreenshots/Dashboard.png';

import { useEffect } from 'react';

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
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 300);
      }
    }
  }, []);
  
  return (

    <main className="flex flex-col items-center justify-start w-full scroll-smooth snap-y snap-mandatory pt-32 pb-48 relative">
      <AOSInitializer />

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
      <div className="absolute left-16 top-16 md:left-32 md:top-15 z-20 text-left pt-32 pb-48 snap-start">
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
              width={600}
              height={400}
              quality={100} // Ensure max compression quality
              priority
              className="rounded-3xl shadow-2xl border border-[#2a1a3a]"
              style={{
                imageRendering: 'auto',
                transform: 'translateZ(0)',
                WebkitBackfaceVisibility: 'hidden',
              }}
            />
          </div>
          <div className="relative z-10 ml-45 mb-10">
          <Image
            src="/dashboard.png"
            alt="Dashboard"
            width={640}
            height={400}
            quality={100} // Ensure max compression quality
            priority
            className="rounded-3xl shadow-2xl border border-[#2a1a3a]"
            style={{
              imageRendering: 'auto',
              transform: 'translateZ(0)',
              willChange: 'transform',
              WebkitBackfaceVisibility: 'hidden',
            }}
          />

          </div>
        </div>
        {/* CTA section on the right */}  
        <div className="flex flex-col items-center justify-center ml-8">
          <span className="mb-4 text-2xl font-bold text-purple-300 text-center">Start using AI in your browser instantly!</span>
          <a href="#downloads" className="bg-gradient-to-r from-purple-600 to-purple-400 hover:bg-purple-700 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition-all duration-200 text-lg transform hover:-translate-y-0.5 hover:shadow-[0_0_24px_4px_rgba(168,85,247,0.35)] scroll-smooth">
            Get KlikkFix
          </a>
        </div>
      </div>
      {/* Intro Section: Tired of tabs */}
      <FadeSection>
        <IntroSection />
      </FadeSection>

      {/*Right Klikk intro section*/}
      <FadeSection>
        <RightKlikkIntro />
      </FadeSection>

      {/* Magical Click Intro Section */}
      <FadeSection>
        <MagicalClickIntro />
      </FadeSection>
      <ToolShowcaseSection />
      {/* Features Section */}
      <section id='features' className="w-full min-h-screen px-4 py-24 items-center justify-center scroll-mt-32 snap-start">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Features</h2>
        <div className="flex justify-center w-full">
        <div className="max-w-6xl items-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
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
        </div>
      </section>
      {/* Download Section */}
      <section id="downloads" className="scroll-mt-20 w-full min-h-screen max-w-5xl py-32 px-4 flex flex-col items-center justify-center snap-start">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Get KlikkFix for Your Browser</h2>
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
    </main>
  );
}
