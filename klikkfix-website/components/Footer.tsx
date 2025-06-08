export default function Footer() {
  return (
    <footer className="w-full text-center py-6 text-gray-400 text-sm mt-20 border-t border-[#2a1a3a] bg-[#1a102a] bg-opacity-80">
      © {new Date().getFullYear()} KlikkFix. All rights reserved. | <a href="/contact" className="underline hover:text-purple-300">Contact</a>
    </footer>
  );
} 