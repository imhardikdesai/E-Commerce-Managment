import * as Yup from 'yup';
import { mobileSchema } from './schema/MobileSchema';
import { passwordSchema } from './schema/PasswordSchema';


export const signupSchema = Yup.object().shape({
    firstName: Yup.string()
        .required('Name is required'),
    email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
    mobile: mobileSchema,
    password: passwordSchema,
    cPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Confirm Password is required'),
});

export const loginSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().required('Password is Required')
});

