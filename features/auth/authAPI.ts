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

export interface AuthResponse {
  message?: string;
  error?: {
    message: string;
  }[];
}

const userAPI = {
  login: (data: LoginData) =>
    api<LoginData, AuthResponse>('post', '/login', data),
  signup: (data: SignupData) =>
    api<SignupData, AuthResponse>('post', '/register', data),
  forgetPassword: (data: ForgetPasswordData) =>
    api<ForgetPasswordData, AuthResponse>('post', 'forget-password', data),
  resetPassword: (data: ResetPasswordData) =>
    api<ResetPasswordData, AuthResponse>('post', 'reset-password', data),
};

export default userAPI;
