import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#1a102a] bg-opacity-95 text-white shadow-md flex gap-8 px-12 py-4 items-center">
      <Link href="/" className="text-lg font-bold tracking-wide">KlikkFix</Link>
      <div className="flex gap-6 ml-8">
        <Link href="/about" className="hover:text-purple-400 transition">About</Link>
        <Link href="/features" className="hover:text-purple-400 transition">Features</Link>
        <Link href="/download" className="hover:text-purple-400 transition">Download</Link>
        <Link href="/pricing" className="hover:text-purple-400 transition">Pricing</Link>
        <Link href="/contact" className="hover:text-purple-400 transition">Contact</Link>
      </div>
    </nav>
  );
} 