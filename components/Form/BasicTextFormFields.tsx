import React from 'react';
import { Heading2 } from 'styles/components/Text';
import { TextField } from 'components/Input';
import { FixedSizeButton } from 'styles/components/Button';
import { ButtonLoading } from 'components/Loading';

import type { TextFieldProps } from 'components/Input/TextField';

interface FormProps {
  title: string;
  fieldSets: TextFieldProps[];
  buttonText: string;
  isLoading: boolean;
}

const BasicTextFormFields = ({
  title,
  fieldSets,
  buttonText,
  isLoading,
}: FormProps) => {
  return (
    <>
      <Heading2 color="gray3">{title}</Heading2>
      {fieldSets.map((fieldSet) => (
        <TextField {...fieldSet} key={fieldSet.name} />
      ))}
      <FixedSizeButton height="0.52rem" type="submit">
        {isLoading ? <ButtonLoading /> : buttonText}
      </FixedSizeButton>
    </>
  );
};

export default BasicTextFormFields;
