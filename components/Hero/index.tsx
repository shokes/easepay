import React, { useEffect } from 'react';
import Container from '../Container';
import {
  HeroText1,
  HeroText2,
  Paragraph,
  SignUpStyles,
  AnimationContainerStyles,
  HeroText2Mobile,
} from './index.styles';
import Button from '../Button';
import { HiOutlineArrowSmRight } from 'react-icons/hi';
import Image from 'next/image';
import icon from '../../public/assets/images/icon.png';
import gsap from 'gsap';

const Hero = () => {
  useEffect(() => {
    const box = document.getElementById('box');

    const tl = gsap.timeline({
      repeat: -1,
      ease: 'power2.out',
    });

    tl.to(
      box,
      {
        y: -120,
        delay: 1.5,
      },
      '<'
    )
      .to(
        box,
        {
          y: -240,
          delay: 1.5,
        },
        '<1'
      )
      .to(
        box,
        {
          y: -360,
          delay: 1.5,
        },
        '<1'
      )
      .to(
        box,
        {
          y: 0,
          delay: 1.5,
        },
        '<1'
      );
  }, []);

  return (
    <Container>
      <video
        loop
        muted
        autoPlay
        playsInline
        className='absolute top-0 left-0 right-0 bottom-0 -z-20 h-[1071px] w-full object-cover'
      >
        <source src='/vid.mp4' type='video/mp4' />
      </video>

      <div className='mb-[24px]'>
        <HeroText1>Business banking with</HeroText1>

        <div className='hidden md:block'>
          <AnimationContainerStyles>
            <div id='box'>
              <HeroText2>Zero fees</HeroText2>
              <HeroText2>Free Wires</HeroText2>
              <HeroText2>Unlimited Reward</HeroText2>
              <HeroText2>No credit check</HeroText2>
            </div>
          </AnimationContainerStyles>
        </div>
        <div className='md:hidden'>
          <HeroText2Mobile className=''>No credit check</HeroText2Mobile>
        </div>

        <Paragraph>
          Thousands of entrepreneurs bank on Winden to start or grow their
          business.
        </Paragraph>
        <Paragraph>Open an account in under 3 minutes.</Paragraph>
      </div>

      <Button bg='bg-[#6936F5]'>
        <span className='flex items-center gap-[30.39px]'>
          Get started <HiOutlineArrowSmRight className='w-[32px] h-[30px]' />
        </span>
      </Button>
      <div className='flex items-end gap-[8px]'>
        <Image src={icon} width={24} height={24} alt='icon' />
        <SignUpStyles>
          Sign up today and earn up to $200. Conditions apply. **
        </SignUpStyles>
      </div>
    </Container>
  );
};

export default Hero;
