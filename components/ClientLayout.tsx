// components/ClientLayout.tsx
'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 800,
      easing: 'ease-out',
      offset: 100, // or even 50 for early trigger on smaller screens
    });
      
  }, []);

  return <>{children}</>;
}
