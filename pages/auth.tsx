import React, { useState } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { AuthType } from 'components/Form/constants/auth';
import { Heading2 } from 'styles/components/Text';
import signinPerson from 'public/signin-person.png';
import NamedLogo from 'components/NamedLogo';
import { Login, Signup, ForgetPassword } from 'components/Form';

const Wrapper = styled.div`
  width: 13rem;
  position: relative;
  margin: auto;
`;

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

const Auth: React.FC = () => {
  const [authType, setAuthType] = useState<AuthType>(AuthType.SIGN_UP);

  return (
    <Wrapper>
      <NamedLogo />
      <PersonImageWrapper>
        <Image src={signinPerson} alt="person image" />
      </PersonImageWrapper>
      <Message color="blue3">
        A platform for you to share your knowledge,
        <br /> keep track of your fitness plans and
        <br /> subscribe to like-minded people.
      </Message>
      {authType === AuthType.LOG_IN && <Login setAuthType={setAuthType} />}
      {authType === AuthType.SIGN_UP && <Signup setAuthType={setAuthType} />}
      {authType === AuthType.FORGET_PASSWORD && (
        <ForgetPassword setAuthType={setAuthType} />
      )}
    </Wrapper>
  );
};

export default Auth;
