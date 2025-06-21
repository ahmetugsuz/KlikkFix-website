import Image from "next/image";
import macPointer from '../public/logos/mac-cursor-6.png';
import '../app/globals.css'

export default function RightKlikkIntro() {
    return (
      <section className="w-full min-h-screen px-6 py-36 flex flex-col items-center justify-center text-center scroll-mt-0 snap-start">
        <h2 className="text-4xl md:text-5xl font-bold text-white max-w-4xl leading-snug">
            Just a mouse-click away.
        </h2>
        <p className="text-xl text-purple-300 font-medium mb-10">Never been so easy.</p>
  
        <div className="bg-[#23143a] bg-opacity-90 rounded-2xl px-8 py-6 shadow-lg border border-[#2a1a3a] mb-10">
          <p className="text-purple-400 text-sm uppercase mb-2 tracking-wide">How it works</p>
          <p className="text-white font-medium inline-flex items-center">
            Highlight your text → right-click → <span className="text-purple-500 inline-flex items-center font-semibold"> KlikkFix  </span> 
          </p>
        </div>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed">
  Handle daily tasks like <strong>“Translate”</strong>,{" "}
  <strong>“Rewrite”</strong>, <strong>“Professional Text”</strong> and more right from your mouse-click — but that’s not all.
</p>

<a
  href="#MagicalSection"
  className="flex items-center gap-2 text-lg md:text-xl text-gray-300 hover:text-purple-300 transition-colors mt-4"
>
  <span className="mt-1 text-2xl animate-bounce opacity-60">↓</span>
</a>

      </section>
    );
  }
  