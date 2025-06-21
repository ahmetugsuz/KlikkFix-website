// components/IntroSection.tsx
import Image from 'next/image';
import AiTabsCopilot from '../public/AITabs/AiTabsCopilot.png';

export default function IntroSection() {
  return (
    <section className="w-full h-screen md:pt-32 py-24 px-6 flex flex-col items-center justify-center text-center snap-start ">
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 max-w-3xl leading-tight">
        Tired of having multiple tabs open for AI-tasks?
      </h2>

      <Image
        src={AiTabsCopilot}
        alt="AI Tasks Screenshot"
        className="w-full max-w-3xl rounded-2xl shadow-2xl border border-[#2a1a3a] mb-6"
        priority
      />

      <p className="text-xl text-gray-300 mt-4">
        We might have the solution for you
      </p>
    </section>
  );
}
