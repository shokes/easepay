import React from 'react';
import styled from 'styled-components';
import { ContainerStyles } from './index.styles';

const Container = ({ children }: { children: React.ReactNode }) => {
  return <ContainerStyles>{children}</ContainerStyles>;
};

export default Container;
