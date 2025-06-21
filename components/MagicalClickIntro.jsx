// components/MagicalClickIntro.jsx
import Image from 'next/image';
import magicalClickImg from '../public/MagicalClickDesign/magicDesign.png';


export default function MagicalClickIntro() {
    return (
      <section className="min-h-screen snap-start flex flex-col items-center justify-center text-center px-6" id="MagicalSection">
        <h2 className="text-4xl md:text-5xl font-bold text-white max-w-4xl leading-snug">
          We just merged all of your favorite AIs into{" "}
          <span className="text-purple-400">one-click</span>.
        </h2>
        <Image src="/MagicalClickDesign/magicDesign.png" width={200} height={200}  alt="Magical Click" className="h-auto mt-20 mb-10 drop-shadow-[0_0_30px_rgba(168,85,247,0.1)] border-none" />
        <p className="mt-6 text-xl text-gray-300">
          We call it <span className="text-white font-semibold drop-shadow-[0_0_30px_rgba(168,85,247,0.4)]">MagicalClick</span>.
        </p>
      </section>
    );
  }
  