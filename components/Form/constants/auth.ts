import type { TextFieldProps } from 'components/Input/TextField';

export enum AuthType {
  SIGN_UP = 'Signup',
  LOG_IN = 'Login',
  FORGET_PASSWORD = 'Forget password',
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

export interface AuthFormProps {
  setAuthType: React.Dispatch<React.SetStateAction<AuthType>>;
}
