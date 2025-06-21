import Image from 'next/image';
import { useState, useEffect, useRef, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import improveTextImg from '../public/demoImages/Improve.png';
import ToolsDraaging from '../public/extensionScreenshots/ToolsDroppingSummarize.png'
import ToolsDropping  from '../public/extensionScreenshots/ToolsDroppingSummarize.png'
import ToolsWithoutSummarize  from '../public/extensionScreenshots/ToolsWithoutSummarize.png'
import Tools2 from '../public/extensionScreenshots/Tools2.png';

const interestText = {
  improve: "Make your words clearer and sharper",
  professional: "Sound confident and capable in every message you write.",
  solve: "Let KlikkFix handle the math, logic, or code — instantly.",
  summarize: "Get straight to the point without missing the point.",
  magic: "Because smart people shouldn't waste time rewriting the same things.",
};


const toolDescriptions = {
  improve: 'Improving texts has never been easier. Mark the text you want to improve and right-Klikk!',
  professional: 'Transform casual writing into professional-grade content.',
  solve: 'Lets get straight to the point. Solve IT.',
  summarize: "Too long to read? Summarize what you're reading on the spot, or even your own writings.",
  magic: 'A magical touch that does more than improve — it transforms.',
};

const toolTitles = {
  improve: 'Improve Text',
  professional: 'Professional Text',
  solve: 'Solve',
  summarize: 'Summarize Text',
  magic: 'MagicalClick',
};

const toolImages = {
  improve: {
    type: 'image',
    src: improveTextImg,
  },
  professional: {
    type: 'video',
    src: "/demoVideoes/outlookDemoProfessional.mp4"
  },
  solve: {
    type: 'image',
    src: '/demoImages/ToolSolvedProblem.png',
    
  },
  summarize: {
    type: 'video',
    src: '/demoVideoes/DemoSummarizeNorskeLeksikon.mp4',
    muted: true
  },
};

const toolExamples = {
  improve: {
    before: 'this thing is kind of hard to read and maybe you can help me make it sound like not bad?',
    after: 'This text is somewhat difficult to read, and perhaps you could help me make it sound better?',
  },
  professional: {
    before: 'yo can u help me with this?',
    after: 'Could you please assist me with this?',
  },
  solve: {
    before: '2x + 3 = 7, find x.',
    after: 'x = 2',
  },
  summarize: {
    before: 'I am writing to inform you that your application has been received.',
    after: 'Your application was received.',
  },
};

const shortcutSymbol = {
  shift: '/shortcutsSymbols/shift.svg',
  shiftFilled: '/shortcutsSymbols/shift-fill.svg',
  //ctrl: '/shortcutsSymbols/ctrl-ModifiedDesign.png',
  //plus: '/shortcutsSymbols/plus.png',
  command: '/shortcutsSymbols/command.png',
  //P: '/shortcutsSymbols/P.png',
  //I: '/shortcutsSymbols/I.png',
  //S: '/shortcutsSymbols/S.png',
  L: '/shortcutsSymbols/L.png',
};



const ShortcutKeys = memo(({ sequence }) => {
  if (!sequence || sequence.length === 0) return null;

  return (
    <div className="items-center">
      <p className="text-xs text-gray-500 font-semibold px-2 text-center">KEYBOARD SHORTCUT</p>
      <div className="flex items-center justify-center gap-2 mt-2">
        {sequence.map((key, index) => {
          const isPlus = key === 'plus';
          const isCtrl = key === 'ctrl';
          const isI = key === 'I';

          return (
            <div
              key={index}
              className={`w-10 h-10 flex items-center justify-center rounded-md
                ${isPlus || isCtrl ? 'bg-zinc-800 font-bold' : 'bg-zinc-800'} 
                ${isCtrl ? 'text-black' : 'text-black font-bold text-2xl'}
                ${isI ? 'font-serif tracking-tight' : ''}
              `}
            >
              {shortcutSymbol[key] ? (
                <Image
                  src={shortcutSymbol[key]}
                  alt={key}
                  width={isPlus ? 40 : 25}
                  height={isPlus ? 40 : 25}
                  unoptimized
                />
              ) : (
                <span className="text-m font-bold ">{key === 'plus' ? '+' : key}</span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
});




export default function ToolExample({ type }) {
  const visual = toolImages[type];
  const example = toolExamples[type];
  const timerRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(0);
  const pages = ['visual', 'text'];

  const [isMac, setIsMac] = useState(false);

  if (!type || !toolDescriptions[type]) {
    return (
      <div className="w-full min-w-[80vw] min-h-[600px] flex flex-col items-center justify-center space-y-8 text-center mt-10 -ml-20">
  
        {/* Subtitle */}
        <h2 className="text-4xl md:text-5xl font-bold text-white max-w-4xl leading-snug">
          Fully customizable tools from your{" "}
          <span className="text-purple-400">Dashboard</span>
        </h2>
    
        {/* Image Grid */}
        <div className="flex flex-wrap justify-center gap-6 max-w-6xl px-4">
          <div className="w-[280px] md:w-[30%] p-4 rounded-2xl bg-[#1a0e25] bg-opacity-40 shadow-lg opacity-70">
            <Image src={ToolsWithoutSummarize} alt="tools image" className="rounded-xl w-full h-auto" />
          </div>
          <div className="w-[280px] md:w-[30%] p-4 rounded-2xl bg-[#1a0e25] bg-opacity-40 shadow-lg opacity-80">
            <Image src={ToolsDropping} alt="tools image" className="rounded-xl w-full h-auto" />
          </div>
          <div className="w-[280px] md:w-[30%] p-4 rounded-2xl bg-[#1a0e25] bg-opacity-40 shadow-lg opacity-100">
            <Image src={Tools2} alt="tools image" className="rounded-xl w-full h-auto" />
          </div>
        </div>
      </div>
    );
    
  }
  

  useEffect(() => {
    setIsMac(navigator.platform.toUpperCase().includes('MAC'));
  }, []);


  const shortcutSequences = {
    improve: [isMac ? 'shift' : 'shiftFilled', isMac ? 'command' : 'ctrl', 'I'],
    professional: [isMac ? 'shift' : 'shiftFilled', isMac ? 'command' : 'ctrl', 'P'],
    solve: [isMac ? 'shift' : 'shiftFilled', isMac ? 'command' : 'ctrl', 'S'],
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % pages.length);
    }, 24000);
    timerRef.current = timer;
    return () => clearInterval(timer);
  }, []);

  return (
    <div className={`w-full min-w-[80vw] h-auto min-h-[600px] lg:min-h-[700px] -ml-40 p-10 rounded-2xl text-white shadow-lg relative overflow-hidden transition-colors duration-500 ${
      currentPage === 1 ? 'bg-[#13091a]  border-2 border-purple-600' : 'bg-transparent'
    }`}>
      <p className="text-2xl md:text-3xl font-semibold text-center text-purple-200 -mt-5 mb-6 max-w-3xl mx-auto">
        {toolDescriptions[type]}
      </p>

      {currentPage === 0 && (
        <div className="absolute top-15 right-0 z-20">
          <ShortcutKeys sequence={shortcutSequences[type]} />
        </div>
      )}

      <div className="relative w-full max-w-5xl mx-auto min-h-[460px] bg-transparent border-none">
        <AnimatePresence mode="wait">
          {currentPage === 0 && visual && (
            <motion.div
              key="visual"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="relative h-[260px] w-full"
            >
              {visual.type === 'image' ? (
                <Image
                  src={visual.src}
                  alt="Original"
                  width={1000}
                  height={1000}
                  className="rounded-lg z-10 shadow-md"
                />
              ) : (
                <video
                  autoPlay
                  loop
                  src={visual.src}
                  muted={visual.muted ? true : false}
                  playsInline
                  controls={false}
                  disablePictureInPicture
                  controlsList="nodownload nofullscreen noremoteplayback"
                  className="w-full h-[600px] object-contain rounded-xl shadow-lg"
                />
              )}
            </motion.div>
          )}

          {currentPage === 1 && (
            <motion.div
              key="text"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col space-y-4 text-sm px-4 max-w-2xl mx-auto"
            >
              <div>
                <p className="text-purple-400 mb-1">Before:</p>
                <p className="bg-black bg-opacity-30 p-3 rounded">{example.before}</p>
              </div>
              <div>
                <p className="text-purple-400 mb-1">After:</p>
                <p className="bg-black bg-opacity-30 p-3 rounded">{example.after}</p>
              </div>

                {/* Spacer */}
              <div className="flex-grow" />

                              {/* Spacer */}
                              <div className="flex-grow" />
                {/* Spacer */}
                <div className="flex-grow" />

                {/* Spacer */}
                <div className="flex-grow" />
                {/* Spacer */}
                <div className="flex-grow" />
                {/* Spacer */}
                <div className="flex-grow" />
                {/* Spacer */}
                <div className="flex-grow" />
                {/* Spacer */}
                <div className="flex-grow" />
                {/* Spacer */}
                <div className="flex-grow" />
                {/* Spacer */}
                <div className="flex-grow" />
                {/* Spacer */}
                <div className="flex-grow" />
                {/* Spacer */}
                <div className="flex-grow" />
                {/* Spacer */}
                <div className="flex-grow" />
                {/* Spacer */}
                <div className="flex-grow" />

              <div className='flex flex-col justify-between h-full mt-10 '>
                {/* Extra insight or selling point */}
                <p className="mt-6 text-center text-purple-300 font-medium">
                  {interestText[type]}
                </p>

                {/* CTA button */}
                <div className="mt-4 flex justify-center">
                  <a
                    href="#downloads"
                    className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg shadow transition-all"
                  >
                    Try KlikkFix Now
                  </a>
                </div>
              </div>

            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="absolute bottom-6 right-6 flex gap-2">
        {pages.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentPage(index);
              clearInterval(timerRef.current);
              timerRef.current = setInterval(() => {
                setCurrentPage((prev) => (prev + 1) % pages.length);
              }, 30000);
            }}
            className={`w-3 h-3 rounded-full transition-all cursor-pointer ${
              currentPage === index ? 'bg-white' : 'bg-white/30'
            }`}
          />
        ))}
      </div>
    </div>
  );
}