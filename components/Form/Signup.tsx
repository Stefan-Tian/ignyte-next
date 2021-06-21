import React, { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import loginSchema from './schemas/login';
import { MdText } from 'styles/components/Text';
import {
  AuthType,
  nicknameFields,
  emailFields,
  passwordFields,
} from './constants/auth';
import { AuthCard } from 'styles/components/Card';
import BasicTextFormFields from './BasicTextFormFields';
import AuthGoogle from './AuthGoogle';
import { useAppDispatch } from 'app/hooks';
import { signup } from 'features/auth/authSlice';

import type { SubmitHandler } from 'react-hook-form';
import type { TextFieldProps } from 'components/Input/TextField';
import type { AuthFormProps } from './constants/auth';

interface FormValues {
  nickname: string;
  email: string;
  password: string;
}

const Signup = ({ setAuthType }: AuthFormProps) => {
  const { handleSubmit, control } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    dispatch(signup(data));
  };

  const formFields: TextFieldProps[] = useMemo(() => {
    return [
      {
        ...nicknameFields,
        control,
      },
      {
        ...emailFields,
        control,
      },
      {
        ...passwordFields,
        control,
      },
    ];
  }, [control]);

  return (
    <AuthCard
      width="5.2rem"
      onSubmit={handleSubmit(onSubmit)}
      as="form"
      noValidate
    >
      <BasicTextFormFields
        title="Signup"
        fieldSets={formFields}
        buttonText="continue"
      />
      <AuthGoogle />
      <MdText
        $marginTop="m16"
        color="blue2"
        clickable={true}
        onClick={() => setAuthType(AuthType.LOG_IN)}
      >
        Already have an account?
      </MdText>
    </AuthCard>
  );
};

export default Signup;
