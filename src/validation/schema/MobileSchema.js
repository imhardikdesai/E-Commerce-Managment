import * as Yup from 'yup';

export const mobileSchema = Yup.string()
    .matches(/^[0-9]+$/, 'Mobile number can only contain numeric characters')
    .min(10, 'Mobile number must be at least 10 digits')
    .max(12, 'Mobile number cannot be more than 12 digits')
    .required('Mobile Number is required')
