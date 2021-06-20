import React from 'react';
import { OrDivider } from 'styles/components/Input';
import { StButton as Button } from 'styles/components/Button';

const AuthGoogle = () => {
  return (
    <>
      <OrDivider>or</OrDivider>
      <Button type="button" variant="secondary">
        Continue with Google
      </Button>
    </>
  );
};

export default AuthGoogle;
