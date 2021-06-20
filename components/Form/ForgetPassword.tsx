import React, { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import loginSchema from './schemas/login';
import { MdText } from 'styles/components/Text';
import { AuthType, emailFields, passwordFields } from './constants/auth';
import BasicTextFormFields from './BasicTextFormFields';
import { AuthCard } from 'styles/components/Card';

import type { SubmitHandler } from 'react-hook-form';
import type { TextFieldProps } from 'components/Input/TextField';
import type { AuthFormProps } from './constants/auth';

interface FormValues {
  email: string;
  password: string;
}

const ForgetPassword = ({ setAuthType }: AuthFormProps) => {
  const { handleSubmit, control } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };

  const formFields: TextFieldProps[] = useMemo(() => {
    return [
      {
        ...emailFields,
        message: 'We will send you a password reset link',
        control,
      },
    ];
  }, [control]);

  return (
    <AuthCard width="5.2rem" onSubmit={handleSubmit(onSubmit)} noValidate>
      <BasicTextFormFields
        title="Forget Password"
        fieldSets={formFields}
        buttonText="continue"
      />
      <MdText
        $marginTop="m16"
        color="blue2"
        clickable={true}
        onClick={() => setAuthType(AuthType.SIGN_UP)}
      >
        Create a new account
      </MdText>
    </AuthCard>
  );
};

export default ForgetPassword;
