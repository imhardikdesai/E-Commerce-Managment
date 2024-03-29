import * as Yup from 'yup';

/* This is a validation schema for the password field. */
export const passwordSchema = Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .max(32, 'Password cannot be more than 32 characters')
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
    .matches(/[0-9]/, 'Password must contain at least one digit')
    .matches(/[!@#$%^&*(),.?":{}|<>]/, 'Password must contain at least one special character')
    .required('Password is Required')
