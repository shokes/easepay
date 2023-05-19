import React from 'react';
import techCrunch from '../../public/assets/images/tech.png';
import forbes from '../../public/assets/images/forbes.png';
import ent from '../../public/assets/images/entre.png';
import times from '../../public/assets/images/times.png';
import wall from '../../public/assets/images/Frame.png';
import Image from 'next/image';
import Container from '../Container';

const companyImages = [
  {
    id: 1,
    image: techCrunch,
  },
  { id: 2, image: forbes },
  { id: 3, image: ent },
  { id: 4, image: times },
  { id: 5, image: wall },
];

const Companies = () => {
  return (
    <Container>
      <div className='flex items-center gap-[69px] pb-[45px]'>
        {companyImages.map((item) => {
          const { id, image } = item;
          return (
            <div key={id}>
              <Image src={image} width={250} height={250} alt='company' />
            </div>
          );
        })}
      </div>
    </Container>
  );
};

export default Companies;
