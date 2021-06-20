import React from 'react';
import { Heading2 } from 'styles/components/Text';
import { TextField } from 'components/Input';
import { StButton as Button } from 'styles/components/Button';

import type { TextFieldProps } from 'components/Input/TextField';

interface FormProps {
  title: string;
  fieldSets: TextFieldProps[];
  buttonText: string;
}

const BasicTextFormFields = ({ title, fieldSets, buttonText }: FormProps) => {
  return (
    <>
      <Heading2 color="gray3">{title}</Heading2>
      {fieldSets.map((fieldSet) => (
        <TextField {...fieldSet} key={fieldSet.name} />
      ))}
      <Button type="submit">{buttonText}</Button>
    </>
  );
};

export default BasicTextFormFields;
