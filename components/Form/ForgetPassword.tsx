import React, { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import forgetPasswordSchema from './schemas/forgetPasswordOrResendEmail';
import { MdText } from 'styles/components/Text';
import { AuthType, emailFields } from './constants/auth';
import BasicTextFormFields from './BasicTextFormFields';
import { AuthCard } from 'styles/components/Card';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import {
  forgetPassword,
  updateAuthType,
  selectAuth,
} from 'features/auth/authSlice';

import type { SubmitHandler } from 'react-hook-form';
import type { TextFieldProps } from 'components/Input/TextField';

interface FormValues {
  email: string;
}

const ForgetPassword = () => {
  const { handleSubmit, control } = useForm({
    resolver: yupResolver(forgetPasswordSchema),
  });

  const loading = useAppSelector(selectAuth('status')) === 'loading';

  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    dispatch(forgetPassword(data));
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
    <AuthCard
      position="right"
      width="5.2rem"
      onSubmit={handleSubmit(onSubmit)}
      as="form"
      noValidate
    >
      <BasicTextFormFields
        title="Forget Password"
        fieldSets={formFields}
        buttonText="continue"
        isLoading={loading}
      />
      <MdText
        $marginTop="m16"
        color="blue2"
        clickable={true}
        onClick={() => dispatch(updateAuthType(AuthType.SIGN_UP))}
      >
        Create a new account
      </MdText>
    </AuthCard>
  );
};

export default ForgetPassword;
