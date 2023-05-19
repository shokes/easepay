import React from 'react';
import styled from 'styled-components';
import { ContainerStyles } from './index.styles';

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <ContainerStyles className='w-[90%] lg:max-w-[1184px] '>
      {children}
    </ContainerStyles>
  );
};

export default Container;
