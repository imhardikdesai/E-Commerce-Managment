import * as Yup from 'yup';
import { mobileSchema } from './schema/MobileSchema';


/* A validation schema for the Update profile page. */
export const updateProfile = Yup.object().shape({
    firstName: Yup.string()
        .required('Name is required'),
    email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
    mobile: mobileSchema,
});

/* A validation schema for the change password page. */
export const changePassword = Yup.object().shape({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().required('Password is Required')
});

