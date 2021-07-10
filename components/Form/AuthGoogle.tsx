import React from 'react';
import { OrDivider } from 'styles/components/Input';
import { FixedSizeButton } from 'styles/components/Button';

const AuthGoogle = () => {
  return (
    <>
      <OrDivider>or</OrDivider>
      <FixedSizeButton type="button" variant="secondary" height="0.52rem">
        <a href="api/auth/google">Continue with Google</a>
      </FixedSizeButton>
    </>
  );
};

export default AuthGoogle;
