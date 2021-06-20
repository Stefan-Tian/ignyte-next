import * as yup from 'yup';
import loginSchema from './login';

export default loginSchema.shape({
  nickname: yup.string().required().min(2, 'The length should be at least 2.'),
});
