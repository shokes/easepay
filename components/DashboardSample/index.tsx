import React from 'react';
import dashboard from '../../public/assets/images/dashboardImage.png';
import Image from 'next/image';
import card from '../../public/assets/images/card.png';
import Container from '../Container';

const DashboardSample = () => {
  return (
    <section className='mt-[107px]'>
      <div className='text-red-500  max-w-[1280px] mx-auto  relative'>
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
          className='absolute top-[-100px] -z-10 right-0'
        />

        <div className='text-red-600 z-50 absolutottom-[-54rem]'>see how</div>
      </div>
    </section>
  );
};

export default DashboardSample;
