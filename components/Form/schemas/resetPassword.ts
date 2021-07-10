import * as yup from 'yup';

export default yup.object().shape({
  password: yup
    .string()
    .required('Please put in a password.')
    .min(4, 'The length should be at least 4'),
});
