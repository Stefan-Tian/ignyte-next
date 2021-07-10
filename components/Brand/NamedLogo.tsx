import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import logo from 'public/logo.png';
import { Heading1 } from 'styles/components/Text';
import { ImageWrapper } from 'styles/components/Wrapper';

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
`;

const NamedLogo: React.FC = (props) => (
  <Wrapper {...props}>
    <ImageWrapper width="0.46rem" height="0.46rem">
      <Image src={logo} alt="logo" layout="responsive" />
    </ImageWrapper>
    <Heading1 color="blue">Ignyte</Heading1>
  </Wrapper>
);

export default NamedLogo;
