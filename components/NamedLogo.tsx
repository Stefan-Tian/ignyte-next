import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import logo from 'public/logo.png';
import { Heading1 } from '../styles/components/Text';

const Wrapper = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
`;

const LogoWrapper = styled.div`
  width: 0.46rem;
  height: 0.46rem;
`;

const NamedLogo: React.FC = (props) => (
  <Wrapper {...props}>
    <LogoWrapper>
      <Image src={logo} alt="logo" layout="responsive" />
    </LogoWrapper>
    <Heading1 color="blue">Ignyte</Heading1>
  </Wrapper>
);

export default NamedLogo;
