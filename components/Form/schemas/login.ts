import * as yup from 'yup';

export default yup.object().shape({
  email: yup
    .string()
    .required('Please put in an email.')
    .email('Invalid email format.'),
  password: yup
    .string()
    .required('Please put in a password.')
    .min(4, 'The length should be at least 4'),
});
