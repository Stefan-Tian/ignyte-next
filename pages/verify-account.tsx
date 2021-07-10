import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { wrapper } from 'app/store';
import { updateAuthType, verifyAccount } from 'features/auth/authSlice';
import { selectErrors, selectSuccess } from 'features/toast/toastSlice';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { AuthType } from 'components/Form/constants/auth';

const VerifyAccount = () => {
  const success = useAppSelector(selectSuccess);
  const errors = useAppSelector(selectErrors);
  const dispatch = useAppDispatch();
  const router = useRouter();

  useEffect(() => {
    if (success.length > 0) {
      dispatch(updateAuthType(AuthType.LOG_IN));
      router.push('/auth');
    }
  }, [success, router, dispatch]);

  useEffect(() => {
    if (errors.length > 0) {
      dispatch(updateAuthType(AuthType.RESEND_VERIFICATION_EMAIL));
      router.push('/auth');
    }
  }, [errors, router, dispatch]);

  return null;
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ query }) => {
      const { token } = query;

      if (typeof token === 'string') {
        await store.dispatch(verifyAccount({ token }));
      }

      return {
        props: {},
      };
    }
);

export default VerifyAccount;
