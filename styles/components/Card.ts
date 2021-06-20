import styled from 'styled-components';
import { fade } from 'styles/keyframes';

interface CardProps {
  width?: string;
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

const AuthCard = styled(Card)`
  position: absolute;
  right: 0rem;
  top: 2rem;
  animation: ${fade} 0.6s ease-in;
`;

export { Card, AuthCard };
