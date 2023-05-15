import React from 'react';
import Navigation from '../Navigation';
import Container from '../Container';
import { HeroText1, HeroText2, Paragraph } from './index.styles';
import Button from '../Button';

const Hero = () => {
  return (
    <Container>
      <div className='mb-[150px]'>
        <Navigation />
      </div>

      <div className='w-[832px]'>
        <HeroText1>Business banking with</HeroText1>
        <HeroText2>No credit check</HeroText2>
        <Paragraph>
          Thousands of entrepreneurs bank on Winden to start or grow their
          business. Open an account in under 3 minutes.
        </Paragraph>
      </div>

      <Button bg='bg-[#6936F5]'>Get Started</Button>

      <div className='font-bold text-[14px] leading-[24px] mt-[24px]'>
        Sign up today and earn up to $200. Conditions apply. **
      </div>
    </Container>
  );
};

export default Hero;