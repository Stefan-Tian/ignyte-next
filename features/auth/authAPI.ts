import api from 'services';

export interface ForgetPasswordData {
  email: string;
}

export interface ResetPasswordData {
  token: string;
  password: string;
}

export interface LoginData extends ForgetPasswordData {
  password: string;
}

export interface SignupData extends LoginData {
  nickname: string;
}

export interface VerifyData {
  token: string;
}

export type ResendEmailData = ForgetPasswordData;
export interface AuthResponse {
  message?: string;
  errors?: {
    message: string;
  }[];
}

const userAPI = {
  login: async (data: LoginData) =>
    await api<LoginData, AuthResponse>('post', '/login', data),
  signup: async (data: SignupData) =>
    await api<SignupData, AuthResponse>('post', '/register', data),
  forgetPassword: async (data: ForgetPasswordData) =>
    await api<ForgetPasswordData, AuthResponse>(
      'post',
      '/forget-password',
      data
    ),
  resetPassword: async (data: ResetPasswordData) =>
    await api<ResetPasswordData, AuthResponse>('post', '/reset-password', data),
  verifyAccount: async (data: VerifyData) =>
    await api<VerifyData, AuthResponse>('get', 'verify', data),
  resendVerificationEmail: async (data: ResendEmailData) =>
    await api<ResendEmailData, AuthResponse>(
      'post',
      'resend-verification-email',
      data
    ),
};

export default userAPI;
