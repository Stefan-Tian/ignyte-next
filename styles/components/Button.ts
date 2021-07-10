import { Button } from 'reakit/Button';
import styled from 'styled-components';

import { marginHelper, MarginProps } from 'styles/utils';

interface ButtonProps extends MarginProps {
  width?: string;
  variant?: 'primary' | 'secondary' | 'inverted';
}

const BaseButton = styled(Button)<ButtonProps>`
  border-radius: ${(props) => props.theme.borderRadius.xs};
  font-size: ${(props) => props.theme.fontSize.normalMD};
  color: ${(props) => props.theme.color.light};
  padding: ${(props) => props.theme.padding.p16};
  transition: filter 0.6s;
  width: ${(props) => (props.width ? props.width : '100%')};
  cursor: pointer;
  background-color: ${(props) =>
    props.variant === 'secondary'
      ? props.theme.color.purple
      : props.theme.color.blue};

  ${marginHelper};

  a {
    color: inherit;
    text-decoration: none;
  }

  :hover {
    filter: brightness(1.2);
  }
`;

interface FixedSizeButtonProps extends ButtonProps {
  height: string;
}

const FixedSizeButton = styled(BaseButton)<FixedSizeButtonProps>`
  width: ${(props) => (props.width ? props.width : '100%')};
`;

export { FixedSizeButton };
