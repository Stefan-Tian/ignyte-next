import type { TextFieldProps } from 'components/Input/TextField';

export enum AuthType {
  SIGN_UP = 'Signup',
  LOG_IN = 'Login',
  FORGET_PASSWORD = 'Forget password',
  RESET_PASSWORD = 'Reset password',
  RESEND_VERIFICATION_EMAIL = 'Resend verification email',
}

export const nicknameFields: TextFieldProps = {
  $formatHint: 'Diligent learner',
  name: 'nickname',
  type: 'text',
  defaultValue: '',
  $marginBottom: 'm40',
};

export const emailFields: TextFieldProps = {
  $formatHint: 'finneasandferb@disney.com',
  name: 'email',
  type: 'email',
  defaultValue: '',
  $marginBottom: 'm40',
};

export const passwordFields: TextFieldProps = {
  name: 'password',
  type: 'password',
  defaultValue: '',
  $marginBottom: 'm40',
};
