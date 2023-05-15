'use client';
import styled from 'styled-components';
import Advert from '@/components/Advert';
import Hero from '@/components/Hero';

export default function Home() {
  return (
    <main>
      <Advert />
      <Hero />
    </main>
  );
}

const Title = styled.h2`
  color: pink;

  @media (min-width: 768px) {
    color: red;
  }
`;
