import styled from 'styled-components';
import { fadeIn } from 'styles/keyframes';

interface CardProps {
  width?: string;
}

interface AuthProps extends CardProps {
  position: 'right' | 'center';
}

const Card = styled.div<CardProps>`
  background-color: ${({ theme }) => theme.color.darkBlue};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  padding: ${({ theme }) => theme.padding.p32};
  box-shadow: ${({ theme }) => theme.shadow.sm};
  display: flex;
  flex-direction: column;
  align-items: center;

  width: ${({ width }) => (width ? width : '100%')};
`;

const AuthCard = styled(Card)<AuthProps>`
  position: absolute;
  top: 2rem;
  animation: ${fadeIn} 0.6s ease-in;

  ${({ position, width }) =>
    position === 'center'
      ? `
    right: calc(50% - ${width} / 2);
  `
      : `
    right: 0rem;
  `};
`;

export { Card, AuthCard };
