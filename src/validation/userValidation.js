import * as Yup from 'yup';
import { mobileSchema } from './schema/MobileSchema';
import { passwordSchema } from './schema/PasswordSchema';


export const updateProfile = Yup.object().shape({
    firstName: Yup.string()
        .required('Name is required'),
    email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
    mobile: mobileSchema,
});

export const changePassword = Yup.object().shape({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().required('Password is Required')
});

