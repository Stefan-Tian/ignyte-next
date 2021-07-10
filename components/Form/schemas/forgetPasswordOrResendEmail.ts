import * as yup from 'yup';

export default yup.object().shape({
  email: yup
    .string()
    .required('Please put in an email.')
    .email('Invalid email format.'),
});
