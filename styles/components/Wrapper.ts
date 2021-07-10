import styled, { css } from 'styled-components';
import { fadeIn, fadeOut } from '../keyframes';

export const PageWrapper = styled.div`
  width: 13rem;
  position: relative;
  margin: auto;
`;

interface ImageProps {
  width: string;
  height: string;
  opacity?: string;
  clickable?: boolean;
}

export const ImageWrapper = styled.div<ImageProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.width};
  ${(props) =>
    props.opacity
      ? `
    opacity: ${props.opacity}
  `
      : ''};

  ${(props) => props.clickable && `cursor: pointer`};
`;

interface ToasterProps {
  type: 'error' | 'success';
  $fadeOut: boolean;
}

export const ToastGroupWrapper = styled.div`
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  top: 0.8rem;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const ToastWrapper = styled.div<ToasterProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.12rem;
  min-width: 4rem;
  padding: ${(props) => `${props.theme.padding.p8} ${props.theme.padding.p16}`};
  border-radius: ${(props) => props.theme.borderRadius.xs};
  box-shadow: ${(props) => props.theme.shadow.sm};
  animation: ${fadeIn} 0.3s ease-in-out;

  ${({ type, theme }) =>
    type === 'error' &&
    `
      background-color: ${theme.color.error};
    `}

  ${({ type, theme }) =>
    type === 'success' &&
    `
      background-color: ${theme.color.success};
  `}

  ${({ $fadeOut }) =>
    $fadeOut &&
    css`
      animation: ${fadeOut} 0.3s linear forwards;
    `}
`;
