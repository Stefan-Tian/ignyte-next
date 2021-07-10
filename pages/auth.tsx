import React, { useState } from 'react';
import Image from 'next/image';
import { useAppSelector } from 'app/hooks';
import styled from 'styled-components';
import { AuthType } from 'components/Form/constants/auth';
import { Heading2 } from 'styles/components/Text';
import { PageWrapper } from 'styles/components/Wrapper';
import signinPerson from 'public/signin-person.png';
import NamedLogo from 'components/Brand/NamedLogo';
import { Login, Signup, ForgetPassword } from 'components/Form';
import ResendVerification from 'components/Form/ResendVerification';
import { selectAuth } from 'features/auth/authSlice';

const Message = styled(Heading2)`
  position: absolute;
  top: 1.8rem;
  left: 0.1rem;
  font-weight: 400;
  line-height: 1.4;
`;

const PersonImageWrapper = styled.div`
  width: calc(6.33rem * 1.2);
  height: calc(4.74rem * 1.2);
  position: absolute;
  top: 3.8rem;
`;

const Auth = () => {
  const [resendToEmail, setResendToEmail] = useState<string>('');
  const authType = useAppSelector(selectAuth('authType')) as AuthType;

  return (
    <PageWrapper>
      <NamedLogo />
      <PersonImageWrapper>
        <Image src={signinPerson} alt="person image" />
      </PersonImageWrapper>
      <Message color="blue3">
        A platform for you to share your knowledge,
        <br /> keep track of your fitness plans and
        <br /> subscribe to like-minded people.
      </Message>
      {authType === AuthType.LOG_IN && <Login />}
      {authType === AuthType.SIGN_UP && (
        <Signup setResendToEmail={setResendToEmail} />
      )}
      {authType === AuthType.FORGET_PASSWORD && <ForgetPassword />}
      {authType === AuthType.RESEND_VERIFICATION_EMAIL && (
        <ResendVerification resendToEmail={resendToEmail} />
      )}
    </PageWrapper>
  );
};

export default Auth;
