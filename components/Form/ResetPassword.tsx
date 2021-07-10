import React, { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import resetPasswordSchema from './schemas/resetPassword';
import { passwordFields } from './constants/auth';
import BasicTextFormFields from './BasicTextFormFields';
import { AuthCard } from 'styles/components/Card';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { resetPassword, selectAuth } from 'features/auth/authSlice';

import type { SubmitHandler } from 'react-hook-form';
import type { TextFieldProps } from 'components/Input/TextField';

interface FormValues {
  password: string;
}

interface ResetProps {
  token: string;
}

const ResetPassword = ({ token }: ResetProps) => {
  const { handleSubmit, control } = useForm({
    resolver: yupResolver(resetPasswordSchema),
  });

  const dispatch = useAppDispatch();

  const loading = useAppSelector(selectAuth('status')) === 'loading';

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    const dataWithToken = { ...data, token };
    dispatch(resetPassword(dataWithToken));
  };

  const formFields: TextFieldProps[] = useMemo(() => {
    return [
      {
        ...passwordFields,
        control,
      },
    ];
  }, [control]);

  return (
    <AuthCard
      position="center"
      width="5.2rem"
      onSubmit={handleSubmit(onSubmit)}
      as="form"
      noValidate
    >
      <BasicTextFormFields
        title="Reset Password"
        fieldSets={formFields}
        buttonText="continue"
        isLoading={loading}
      />
    </AuthCard>
  );
};

export default ResetPassword;
