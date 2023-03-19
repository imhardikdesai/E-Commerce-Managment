import * as Yup from 'yup';
import { mobileSchema } from './schema/MobileSchema';
import { passwordSchema } from './schema/PasswordSchema';

/* Creating a schema for the signup form. */

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
/* Creating a schema for the login form. */

export const loginSchema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
    password: Yup.string()
        .required('Password is Required')
});
/* A validation schema for the change password form. */

export const changePassword = Yup.object().shape({
    passwordCurrent: passwordSchema,
    passwordNew: passwordSchema,
    passwordNewConfirm: Yup.string()
        .oneOf([Yup.ref('passwordNew'), null], 'Passwords must match')
        .required('Confirm Password is required')
});

