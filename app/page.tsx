'use client';
import '../app/globals.css';
import Image from "next/image";
import IntroSection from "../components/IntroSection";
import RightKlikkIntro from '../components/RightKlikkIntro';
import MagicalClickIntro from "../components/MagicalClickIntro";
import FadeSection from "../components/FadeSection";  
import FeaturesPage from './features/page';
import Link from "next/link";
import AOSInitializer from '../components/AOSInitializer';
import ClientLayout from '../components/ClientLayout';
import ToolShowcaseSection from "../components/ToolShowCase";
import DashImg from '../public/extensionScreenshots/Dashboard.png';
import DownloadPage from './download/page';
import MobileGate from "@/components/MobileGate";

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

    <main className="flex flex-col items-center justify-start w-full scroll-smooth snap-y snap-mandatory pt-37 pb-48 relative">

      {/* 1. MOBILE VIEW: Visible ONLY on small screens */}
      <div className="block md:hidden w-full h-screen">
        <MobileGate />
      </div>
      
      {/* 2. DESKTOP VIEW: Hidden on mobile, Visible on medium+ screens */}
      <div className="hidden md:block w-full">

      <AOSInitializer />
      <div className="relative w-full flex flex-row justify-center items-center " style={{ minHeight: 400, paddingTop: '8rem' }}>

      {/* Title and subtitle, upper left but still prominent */}
      <div className="absolute left-16 top-16 md:left-32 md:top-5 z-20 text-left pt-30 pb-48 mt-2 snap-start">
        <h1 className="text-5xl font-bold mb-4 tracking-wide text-white drop-shadow-lg">KlikkFix</h1>
        <p className="text-lg text-gray-300 mb-5 shadow-sm mt-[-7]"
          style={{
            WebkitMaskImage: 'linear-gradient(to right, white 30%, transparent 100%) opacity-[0.8] ', WebkitMaskRepeat: 'no-repeat', maskRepeat: 'no-repeat',
          }}>
          Easiest and fastest way to use AI</p>


      </div>
      <div className="flex flex-row justify-center items-center w-full mt-60 mb-8 gap-8" style={{ minHeight: 400 }}>
        {/* Images on the left-bottom */}
        <div className="relative flex flex-col items-end justify-end" style={{ minWidth: 700 }}>
          <div className="absolute -left-5 -bottom-5 z-0" style={{ filter: 'brightness(0.70)' }} data-aos="fade-up-small" data-aos-duration="1200" data-aos-delay="250">
            <Image
              src="/plan.jpg"
              alt="Plan page"
              width={600}
              height={400}
              quality={100} // Ensure max compression quality
              priority
              className="rounded-3xl shadow-2xl border border-[#2a1a3a]"
              style={{
                imageRendering: 'pixelated',
                maskImage: 'linear-gradient(to top, transparent 5%, rgba(255,255,255,0.1) 45%, white 70%)',
                transform: 'translateZ(0)',
                WebkitBackfaceVisibility: 'hidden',
              }}
            />
          </div>
          <div className="relative z-0 ml-40 mb-8 " style={{ filter: 'brightness(0.95)' }} data-aos="fade-up-small" data-aos-duration="1200" data-aos-delay="50">
            <Image
              src="/dashboard.png"
              alt="Dashboard"
              width={640}
              height={400}
              quality={100} // Ensure max compression quality
              priority
              className="rounded-3xl shadow-2xl border border-[#2a1a3a]"
              style={{
                imageRendering: 'pixelated',
                transform: 'translateZ(0)',
                willChange: 'transform',
                maskImage: 'linear-gradient(to top, transparent 5%, rgba(255,255,255, 1) 40%, white 100%)',

                WebkitBackfaceVisibility: 'hidden',
              }}
            />

          </div>
        </div>
        {/* CTA section on the right */}
        <div className="flex flex-col items-center justify-center ml-8">
          <span className="mb-6 text-2xl font-bold text-purple-300 text-center">
            Start using AI in your browser instantly!
          </span>

                <div className="flex flex-row gap-4">
        {/* Preview Button */}
        <a href="#demo" className="group relative p-[2px] rounded-md bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 animate-gradient bg-[length:200%_200%]">
          <span className="flex items-center justify-center px-6 py-3 bg-gray-900 rounded-md text-white text-lg font-semibold relative z-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              className="w-6 h-6 mr-2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 5v14l11-7z" />
            </svg>
            <span>Preview</span>
            <span className="overflow-hidden max-w-0 group-hover:max-w-[5rem] transition-all duration-350 ease-in-out ml-1">
              &nbsp;Demo
            </span>
          </span>
        </a>

        {/* KlikkFix Button */}
        <a href="#downloads" className="group relative p-[2px] rounded-md bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 animate-gradient bg-[length:200%_200%] hover:brightness-110  transition-transform  ">
          <span className="px-8 py-3 bg-transparent rounded-md text-white text-lg font-semibold block ">
            Try KlikkFix
          </span>
        </a>
      </div>

        </div>
      </div>
            {/* Single large filled SVG wave across the screen, behind the images, with a smooth fade to black */}
            <svg
        className="absolute bottom-0 left-0 w-full pointer-events-none z-[120] "
        style={{  zIndex: 110 }}
        height="270"
        viewBox="0 0 1440 270"
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
          <linearGradient id="fadeToBlack" x1="0" y1="120" x2="0" y2="270" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="white" stopOpacity="1" />
            <stop offset="100%" stopColor="black" stopOpacity="0.6" />
          </linearGradient>
          <mask id="fadeMask">
            <rect x="0" y="0" width="1440" height="270" fill="url(#fadeToBlack)" />
          </mask>
        </defs>
        <g mask="url(#fadeMask)">
          <path
            d="M0 120 Q 360 0 720 120 T 1440 120 V270 H0 Z"
            fill="url(#mainFilledWave)"
            opacity="1"
            z={999}

          />
        </g>
        </svg>
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
      <FadeSection>
        <FeaturesPage />
      </FadeSection>

      {/* Download Section */}
      <FadeSection>
        <DownloadPage />
      </FadeSection>

      </div>
    </main>
  );
}
