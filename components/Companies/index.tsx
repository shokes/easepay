import React from 'react';
import techCrunch from '../../public/assets/images/tech.png';
import forbes from '../../public/assets/images/forbes.png';
import ent from '../../public/assets/images/entre.png';
import times from '../../public/assets/images/times.png';
import wall from '../../public/assets/images/Frame.png';
import Image from 'next/image';
import Container from '../Container';
import { CompanyStyles } from './index.styles';

const companyImages = [
  {
    id: 1,
    image: techCrunch,
    name: 'techcrunch',
  },
  { id: 2, image: forbes, name: 'forbes' },
  { id: 3, image: ent, name: 'entrepreneur' },
  { id: 4, image: times, name: 'tech times' },
  { id: 5, image: wall, name: 'the wall street jornal' },
];

const Companies = () => {
  return (
    <Container>
      <CompanyStyles>
        {companyImages.map((item) => {
          const { id, image, name } = item;
          return (
            <div key={id}>
              <Image src={image} width={250} height={250} alt={name} />
            </div>
          );
        })}
      </CompanyStyles>
    </Container>
  );
};

export default Companies;
