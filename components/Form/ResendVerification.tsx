import React, { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import resendEmailSchema from './schemas/forgetPasswordOrResendEmail';
import { emailFields } from './constants/auth';
import BasicTextFormFields from './BasicTextFormFields';
import { AuthCard } from 'styles/components/Card';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { resendVerificationEmail, selectAuth } from 'features/auth/authSlice';

import type { SubmitHandler } from 'react-hook-form';
import type { TextFieldProps } from 'components/Input/TextField';

interface FormValues {
  email: string;
}

interface ResendProps {
  resendToEmail: string;
}

const ResendVerification = ({ resendToEmail }: ResendProps) => {
  const { handleSubmit, control } = useForm({
    resolver: yupResolver(resendEmailSchema),
  });

  const dispatch = useAppDispatch();

  const loading = useAppSelector(selectAuth('status')) === 'loading';

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    dispatch(resendVerificationEmail(data));
  };

  const formFields: TextFieldProps[] = useMemo(() => {
    return [
      {
        ...emailFields,
        defaultValue: resendToEmail,
        readOnly: true,
        control,
      },
    ];
  }, [control, resendToEmail]);

  return (
    <AuthCard
      position="right"
      width="5.2rem"
      onSubmit={handleSubmit(onSubmit)}
      as="form"
      noValidate
    >
      <BasicTextFormFields
        title="Didn't get the email?"
        fieldSets={formFields}
        buttonText="resend verification email"
        isLoading={loading}
      />
    </AuthCard>
  );
};

export default ResendVerification;
