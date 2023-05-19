import React from 'react';
import dashboard from '../../public/assets/images/dashboardImage.png';
import Image from 'next/image';
import card from '../../public/assets/images/card.png';
import Container from '../Container';
import phone1 from '../../public/assets/images/phone1.png';
import phone2 from '../../public/assets/images/phone2.png';
import phone3 from '../../public/assets/images/phone3.png';
import { SeeHowStyles } from './index.styles';

const DashboardSample = () => {
  return (
    <section className='mt-[230px] md:mt-[120px] mb-[265px]'>
      <div className=' max-w-[1280px] mx-auto  relative'>
        <Image
          src={dashboard}
          width={1280}
          height={800}
          alt='dashboard'
          className=''
        />
        <Image
          src={card}
          width={487.62}
          height={263.7}
          alt='credit card'
          className='absolute top-[-171px] -z-10 right-0'
        />

        <Image
          src={phone1}
          width={770}
          height={670.86}
          alt='phone 1'
          className='absolute top-[592px]  right-[432px]'
        />

        <Image
          src={phone2}
          width={500}
          height={729.33}
          alt='phone 2'
          className='absolute top-[557px]  right-[316px]'
        />

        <Image
          src={phone3}
          width={628}
          height={682.17}
          alt='phone 3'
          className='absolute top-[41rem]  right-[3rem]'
        />
        <SeeHowStyles>See how</SeeHowStyles>
      </div>
    </section>
  );
};

export default DashboardSample;
