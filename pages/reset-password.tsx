import React from 'react';
import { wrapper } from 'app/store';
import { ResetPassword as ResetPasswordForm } from 'components/Form';
import { PageWrapper } from 'styles/components/Wrapper';
import NamedLogo from 'components/Brand/NamedLogo';

interface ResetProps {
  token: string;
}

const ResetPassword = ({ token }: ResetProps) => {
  return (
    <PageWrapper>
      <NamedLogo />
      <ResetPasswordForm token={token || ''} />
    </PageWrapper>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  () =>
    async ({ query }) => {
      const { token } = query;

      return {
        props: { token },
      };
    }
);

export default ResetPassword;
