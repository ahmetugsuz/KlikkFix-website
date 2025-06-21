'use client';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function AOSInitializer() {
  useEffect(() => {
    AOS.init({
      once: false, // Animate only once
      duration: 800,
      easing: 'ease-out',
    });
  }, []);

  return null; // No visual output
}
