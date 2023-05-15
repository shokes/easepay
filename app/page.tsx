'use client';
import styled from 'styled-components';
import Advert from '@/components/Advert';
import Hero from '@/components/Hero';

export default function Home() {
  return (
    <main>
      <Advert />
      <Hero />
      <video
        loop
        muted
        autoPlay
        playsInline
        className='absolute top-0 left-0 right-0 bottom-0 -z-10 h-[900px] w-full object-cover'
      >
        <source src='/vid.mp4' type='video/mp4' />
      </video>
    </main>
  );
}
