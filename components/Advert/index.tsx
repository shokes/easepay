import React from 'react';
import ad from '../../public/assets/images/div.png';
import Image from 'next/image';

const Advert = () => {
  return (
    <div>
      <Image src={ad} width={1920} height={48} alt='ad' />
    </div>
  );
};

export default Advert;
