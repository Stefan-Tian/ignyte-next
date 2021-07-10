import React, { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import signupSchema from './schemas/signup';
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
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { signup, updateAuthType, selectAuth } from 'features/auth/authSlice';

import type { SubmitHandler } from 'react-hook-form';
import type { TextFieldProps } from 'components/Input/TextField';

interface FormValues {
  nickname: string;
  email: string;
  password: string;
}

interface SignupProps {
  setResendToEmail: (email: string) => void;
}

const Signup = ({ setResendToEmail }: SignupProps) => {
  const { handleSubmit, control } = useForm({
    resolver: yupResolver(signupSchema),
  });

  const dispatch = useAppDispatch();

  const setAuthType = (type: AuthType) => dispatch(updateAuthType(type));
  const loading = useAppSelector(selectAuth('status')) === 'loading';

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    await dispatch(signup(data));
    setResendToEmail(data.email);
    setAuthType(AuthType.RESEND_VERIFICATION_EMAIL);
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
    <>
      <AuthCard
        width="5.2rem"
        position="right"
        onSubmit={handleSubmit(onSubmit)}
        as="form"
        noValidate
      >
        <BasicTextFormFields
          title="Signup"
          fieldSets={formFields}
          buttonText="continue"
          isLoading={loading}
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
    </>
  );
};

export default Signup;
