// HeaderClient.tsx
'use client';

import { useState, useEffect } from 'react';
import { Header } from './index';

export default function HeaderClient() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return <Header isScrolled={isScrolled} />;
}
