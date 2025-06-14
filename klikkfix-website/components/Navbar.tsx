"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
        show ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
      style={{ width: "fit-content" }}
    >
      <nav className="rounded-full bg-[#1a102a] bg-opacity-95 text-white shadow-lg flex gap-8 px-12 py-3 items-center mx-auto w-fit">
        <Link href="/" className="text-lg font-bold tracking-wide">KlikkFix</Link>
        <div className="flex gap-10 ml-8">
          <Link href="/about" className="hover:text-purple-400 transition">About</Link>
          <Link href="/features" className="hover:text-purple-400 transition">Features</Link>
          <Link href="/download" className="hover:text-purple-400 transition">Download</Link>
          <Link href="/pricing" className="hover:text-purple-400 transition">Pricing</Link>
          <Link href="/contact" className="hover:text-purple-400 transition">Contact</Link>
        </div>
      </nav>
    </div>
  );
} 