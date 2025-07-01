"use client";

import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import Favicon from '../public/favicon/favicon.svg'

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const [show, setShow] = useState(true);

  useEffect(() => {
    const heroSection = document.querySelector("#hero");

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShow(!entry.isIntersecting); // show navbar when hero is *not* visible
      },
      { threshold: 0.6 }
    );

    if (heroSection) observer.observe(heroSection);

    return () => {
      if (heroSection) observer.unobserve(heroSection);
    };
  }, []);

  const handleScrollToSection = (id: string) => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleClick = (id: string) => {
    if (pathname === "/") {
      handleScrollToSection(id);
    } else {
      router.push(`/${id}`);
    }
  };

  return (
    <div
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
        show ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
      style={{ width: "fit-content" }}
    >
      <nav
        className="sticky rounded-full backdrop-blur-md bg-transparent text-white shadow-lg flex gap-8 px-12 py-3 items-center mx-auto w-fit"
        style={{ backgroundColor: "rgba(30, 30, 30, 0.5)", boxShadow: "0 2px 6px rgba(0,0,0,0.25)" }}
      >

        <Link href="/" className="text-lg font-bold tracking-wide"><Image src={Favicon} alt="favicon" width={25}/></Link>
        <div className="flex gap-10 ml-8">
          <button
            onClick={() => handleClick("#demo")}
            className="hover:text-purple-400 transition cursor-pointer"
          >
            Demo
          </button>
          <button
            onClick={() => handleClick("#features")}
            className="hover:text-purple-400 transition cursor-pointer"
          >
            Features
          </button>
          <button
            onClick={() => handleClick("#downloads")}
            className="hover:text-purple-400 transition cursor-pointer"
          >
            Download
          </button>
          <Link href="/pricing" className="hover:text-purple-400 transition cursor-pointer">
            Pricing
          </Link>
          <Link href="/contact" className="hover:text-purple-400 transition cursor-pointer">
            Contact
          </Link>
        </div>
      </nav>
    </div>
  );
}
