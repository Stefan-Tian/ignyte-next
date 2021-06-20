import styled from 'styled-components';
import { Input } from 'reakit/Input';
import { marginHelper } from '../utils';

import type { MarginProps } from '../utils';

interface InputWrapperProps extends MarginProps {
  width?: string;
}

interface InputProps {
  $formatHint?: string;
}

interface MessageProps {
  variant?: 'error' | 'explanation';
}

const InputWrapper = styled.div<InputWrapperProps>`
  position: relative;
  display: flex;
  width: ${(props) => (props.width ? props.width : '100%')};
  ${marginHelper}
`;

const InputLabel = styled.label`
  opacity: 0;
  position: absolute;
  left: calc(0.16rem + 1px);
  top: -0.02rem;
  font-size: ${(props) => props.theme.fontSize.normalMD};
  color: ${(props) => props.theme.color.light};
  transition: all 0.3s ease;
`;

const StInput = styled(Input)<InputProps>`
  background-color: ${(props) => props.theme.color.darkLight};
  border-radius: ${(props) => props.theme.borderRadius.xs};
  font-size: ${(props) => props.theme.fontSize.normalLG};
  color: ${(props) => props.theme.color.light};
  padding: ${(props) => props.theme.padding.p16};
  transition: border 0.3s ease;
  width: 100%;
  border: 1px solid ${(props) => props.theme.color.darkLight};

  ::placeholder {
    color: ${(props) => props.theme.color.gray3};
  }

  :-webkit-autofill,
  :-webkit-autofill:hover {
    -webkit-text-fill-color: ${(props) => props.theme.color.light};
    border: 1px solid ${(props) => props.theme.color.darkLight};
  }

  :focus,
  :-webkit-autofill:focus {
    -webkit-text-fill-color: ${(props) => props.theme.color.light};
    border: 1px solid ${(props) => props.theme.color.darkNeutral};

    ::placeholder {
      -webkit-text-fill-color: ${(props) => props.theme.color.gray3};
    }
  }

  :focus ~ ${InputLabel} {
    opacity: 1;
    transform: translateY(-0.08rem);
  }
`;

const InputMessage = styled.div<MessageProps>`
  position: absolute;
  bottom: -0.2rem;
  left: 0.05rem;
  font-size: ${(props) => props.theme.fontSize.normalMD};
  color: ${(props) =>
    props.variant === 'explanation'
      ? props.theme.color.gray4
      : props.theme.color.error};
`;

const OrDivider = styled.div`
  width: 100%;
  height: 0.2rem;
  font-size: ${(props) => props.theme.fontSize.normalLG};
  margin: ${(props) => props.theme.margin.m24} 0;
  text-align: center;
  color: ${(props) => props.theme.color.gray4};
  position: relative;
  opacity: 0.7;

  ::before,
  ::after {
    content: '';
    position: absolute;
    top: 50%;
    height: 2px;
    width: 45%;
    opacity: 0.2;
    background-color: ${(props) => props.theme.color.gray4};
  }

  ::before {
    right: 55%;
  }

  ::after {
    left: 55%;
  }
`;

export { StInput, InputWrapper, InputMessage, InputLabel, OrDivider };
