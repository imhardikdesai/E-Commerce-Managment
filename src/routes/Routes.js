import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import ProductView from '../components/common/ProductView';
import ChangePassword from '../view/auth/ChangePassword';
import ErrorPage from '../view/auth/ErrorPage';
import LoginPage from '../view/auth/LoginPage';
import PrivateRoutes from '../view/auth/PrivateRoutes';
import SignUpPage from '../view/auth/SignUpPage';
import ProductGallery from '../view/page/ProductGallery';
import Profile from '../view/page/Profile';

/**
 * It renders a Routes component that contains a Route component that renders a PrivateRoutes component
 * that contains a Route component that renders a Navigate component that redirects to the products
 * page
 */
const RoutesPath = () => (
    <Routes >
        <Route element={<PrivateRoutes />}>
            <Route path="/" element={<Navigate to="/products" />} />
            <Route path='/products' element={<ProductGallery />} />
            <Route path="/products/:productId" element={<ProductView />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/reset' element={<ChangePassword />} />
        </Route>
        <Route exact path='/login' name="login" element={<LoginPage />} />
        <Route exact path='/signup' element={<SignUpPage />} />
        <Route path='*' element={<ErrorPage />} />
    </Routes>
);

export default RoutesPath;
