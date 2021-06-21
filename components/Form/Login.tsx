import React, { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import loginSchema from './schemas/login';
import { MdText } from 'styles/components/Text';
import { AuthType, emailFields, passwordFields } from './constants/auth';
import BasicTextFormFields from './BasicTextFormFields';
import AuthGoogle from './AuthGoogle';
import { AuthCard } from 'styles/components/Card';
import { useAppDispatch } from 'app/hooks';
import { login } from 'features/auth/authSlice';

import type { SubmitHandler } from 'react-hook-form';
import type { TextFieldProps } from 'components/Input/TextField';
import type { AuthFormProps } from './constants/auth';

interface FormValues {
  email: string;
  password: string;
}

const Login = ({ setAuthType }: AuthFormProps) => {
  const { handleSubmit, control } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    dispatch(login(data));
  };

  const formFields: TextFieldProps[] = useMemo(() => {
    return [
      {
        ...emailFields,
        control,
      },
      {
        ...passwordFields,
        control,
        helpClicker: 'forget password?',
        helpHandler: () => setAuthType(AuthType.FORGET_PASSWORD),
      },
    ];
  }, [setAuthType, control]);

  return (
    <AuthCard
      width="5.2rem"
      onSubmit={handleSubmit(onSubmit)}
      as="form"
      noValidate
    >
      <BasicTextFormFields
        title="Login"
        fieldSets={formFields}
        buttonText="continue"
      />
      <AuthGoogle />
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

export default Login;
