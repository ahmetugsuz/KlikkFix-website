'use client';
import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import ToolExample from './ToolExample';
import macPointer from '../public/logos/mac-cursor-6.png';

const tools = [
  { key: 'improve', label: 'Improve Text' },
  { key: 'professional', label: 'Professional Text' },
  { key: 'solve', label: 'Solve' },
  { key: 'summarize', label: 'Summarize Text' },
  { key: 'translate', label: 'Translate Text' },
];

<span className="w-4 h-4">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="white"
    viewBox="0 0 24 24"
    className="w-4 h-4"
  >
    <path d="M6 2l12 10-5 1 5 9-9-12 5-1z" />
  </svg>
</span>


export default function ToolShowcaseSection() {
  const [selectedTool, setSelectedTool] = useState(null);
  const [isPointerActive, setIsPointerActive] = useState(true);


  return (
    <section id='demo' className="relative h-screen w-full px-8 snap-start overflow-hidden" onMouseEnter={() => setIsPointerActive(true)} onMouseLeave={() => setIsPointerActive(false)}> 
  
      {/* ✅ Top Left Tool Buttons with pointer on the right */}
      <div className="absolute top-24 left-6 z-10 bg-white/5 backdrop-blur-md rounded-xl p-4 shadow-sm w-[200px] border border-white/10">


          {/* 🏷️ Tools Label */}
          <div className="mb-4 text-xs font-semibold text-purple-200 tracking-widest uppercase">

          Tools in use
        </div>
        <div className="flex flex-col gap-2">
          {tools.map((tool) => (
            <div key={tool.key} className="relative">
              <button
                onClick={() => setSelectedTool(tool.key)}
                className={`cursor-pointer px-5 py-3 rounded-lg border text-white font-medium text-sm w-full text-left transition-all duration-200 ${
                  selectedTool === tool.key
                    ? 'bg-purple-600 border-purple-400 shadow-md'
                    : 'bg-[#1a1024] border border-white/10 hover:bg-purple-700/20 '
                }`}
                
              >
                {tool.label}
              </button>
              
              {tool.key === 'improve' && !selectedTool && (
                <div className="absolute left-full top-1/2 -translate-y-1/2 flex items-center whitespace-nowrap pl-4">
                  <span className="text-white text-xl rotate-180 animate-pulse">➜</span>
                  <span className="ml-2 text-purple-300 font-semibold text-lg animate-pulse opacity-90">
                    Select a tool to see how KlikkFix works!
                  </span>
                </div>
              )}
  
              {/* 🖱️ Pointer icon on the right side of active button */}
              {selectedTool === tool.key && (
                <Image
                    src={macPointer}
                    alt="cursor"
                    width={16}
                    height={16}
                    className={`absolute -right-5 top-1/2 -translate-y-1/2 z-10 drop-shadow-xl pointer-glow rotate-[-10deg] animate-infinite animate-pulse pointer-events-none ${
                      isPointerActive ? 'animate-pulse' : ''
                    }`}
                />
              )}
            </div>
          ))}
        </div>
      </div>
  
      {/* ✅ Main Content Area Positioned Carefully */}
      <div className={`ml-[200px] mt-[120px] w-full h-full flex items-start justify-center transition-opacity duration-500 ${!selectedTool ? 'opacity-65 pointer-events-none' : 'opacity-100'}`}>
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedTool}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="w-full max-w-[80vw] h-full max-h-[80vh] px-0"
          >
            <ToolExample type={selectedTool} />
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
  
}
