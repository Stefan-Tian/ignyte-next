import { useController } from 'react-hook-form';
import styled from 'styled-components';
import {
  StInput,
  InputMessage,
  InputWrapper,
  InputLabel,
} from 'styles/components/Input';
import { MarginProps } from 'styles/utils';
import { capitalize } from 'utils';

import type { UseControllerProps } from 'react-hook-form';

export interface TextFieldProps extends MarginProps, UseControllerProps {
  placeholder?: string;
  $formatHint?: string;
  message?: string;
  type: string;
  helpClicker?: string;
  helpHandler?: () => void;
  readOnly?: boolean;
}

const Help = styled.div`
  position: absolute;
  bottom: -0.2rem;
  right: 0.05rem;
  font-size: ${(props) => props.theme.fontSize.normalMD};
  color: ${(props) => props.theme.color.blue2};
  cursor: pointer;
`;

const TextField = ({
  $formatHint = '',
  name,
  message,
  type,
  rules,
  control,
  defaultValue,
  helpClicker,
  helpHandler,
  readOnly = false,
  ...marginProps
}: TextFieldProps) => {
  const {
    field: { ref, ...inputProps },
    fieldState: { error },
  } = useController({ name, control, rules, defaultValue });

  const CapitalizedName = capitalize(name);
  return (
    <InputWrapper {...marginProps}>
      <StInput
        {...inputProps}
        $formatHint={$formatHint}
        placeholder={CapitalizedName}
        type={type}
        id={name}
        ref={ref}
        onFocus={(e) => (e.target.placeholder = $formatHint)}
        onBlur={(e) => (e.target.placeholder = CapitalizedName)}
        readOnly={readOnly}
      />
      <InputLabel htmlFor={name}>{CapitalizedName}</InputLabel>
      {message && !error ? (
        <InputMessage variant="explanation">{message}</InputMessage>
      ) : null}
      {error ? (
        <InputMessage variant="error">{error.message}</InputMessage>
      ) : null}
      {helpClicker ? <Help onClick={helpHandler}>{helpClicker}</Help> : null}
    </InputWrapper>
  );
};

export default TextField;
