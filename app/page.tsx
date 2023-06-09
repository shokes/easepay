'use client';
import Advert from '@/components/Advert';
import Hero from '@/components/Hero';
import Navigation from '@/components/Navigation';
import DashboardSample from '@/components/DashboardSample';
import Companies from '@/components/Companies';

export default function Home() {
  return (
    <main>
      <Advert />
      <Navigation />
      <Hero />
      <DashboardSample />
      <Companies />
    </main>
  );
}
