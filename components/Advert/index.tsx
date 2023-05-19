import React from 'react';
import ad from '../../public/assets/images/adbackground.png';
import Image from 'next/image';
import Container from '../Container';
import { IoMdClose } from 'react-icons/io';
import { useState } from 'react';
import { HiOutlineArrowSmRight } from 'react-icons/hi';
import Typography from '../Typography';
import { EarnContainer } from './index.styles';

const Advert = () => {
  const [hideAd, setHideAd] = useState(false);

  return (
    <div className={`relative ${hideAd && 'hidden'}`}>
      <Container>
        <div className='flex items-center'>
          <EarnContainer className='text-center py-[12px]'>
            <Typography as='h5' font='font-regular'>
              **Earn up to $200 for getting started{' '}
            </Typography>
            <HiOutlineArrowSmRight className='w-[16px] h-[16px]' />
          </EarnContainer>
          <div className='flex-none'>
            <IoMdClose
              className='text-white cursor-pointer'
              onClick={() => setHideAd(true)}
            />
          </div>
        </div>
      </Container>
      <Image
        src={ad}
        width={1920}
        height={48}
        alt='ad'
        className='absolute inset-0 h-full -z-10 w-full object-cover'
      />
    </div>
  );
};

export default Advert;
