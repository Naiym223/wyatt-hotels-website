'use client';

import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import StatsSection from '@/components/StatsSection';
import ExperiencesSection from '@/components/ExperiencesSection';
import JoinSection from '@/components/JoinSection';

export default function Home() {
  return (
    <main className="min-h-screen smooth-scroll">
      <HeroSection />
      <AboutSection />
      <StatsSection />
      <ExperiencesSection />
      <JoinSection />
    </main>
  );
}