import { Route, Routes } from 'react-router-dom';
import AppBar from './components/AppBar';
import ProductView from './components/common/ProductView';
import ChangePassword from './components/auth/ChangePassword';
import ErrorPage from './components/auth/ErrorPage';
import Home from './components/page/Home';
import LoginPage from './components/auth/LoginPage';
import ProductGallery from './components/page/ProductGallery';
import Profile from './components/page/Profile';
import SignUpPage from './components/auth/SignUpPage';
import IsAuthorized from './components/auth/IsAuthorized';
import { useSelector } from 'react-redux';
// import PrivateRoutes from './components/auth/PrivateRoutes';
function App() {
  localStorage.setItem('isLogin', false)
  const isLogin = useSelector(state => state.auth.isLogin)
  return (
    <div className="App">
      <AppBar />
      <Routes >
        {/* method 1 */}

        {/* <Route element={<PrivateRoutes />}>
          <Route exact path='/' element={<Home />} />
          <Route path='/products' element={<ProductGallery />} />
          <Route path="/products/:productId" element={<ProductView />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/reset' element={<ChangePassword />} />
        </Route>
        <Route exact path='/login' name="login" element={<LoginPage />} />
        <Route exact path='/signup' element={<SignUpPage />} />
        <Route path='*' element={<ErrorPage />} /> */}

        {/* method 2 */}
        <Route exact path='/' element={<IsAuthorized Component={Home} />} />
        <Route exact path='/products' element={<IsAuthorized Component={ProductGallery} />} />
        <Route exact path='/profile' element={<IsAuthorized Component={Profile} />} />
        <Route exact path='/reset' element={<IsAuthorized Component={ChangePassword} />} />
        <Route exact path='/login' name="login" element={<LoginPage />} />
        <Route exact path='/signup' element={<SignUpPage />} />
        <Route path="/products/:productId" element={<ProductView />} />
        <Route path='*' element={<ErrorPage />} />

        {/* original */}
        {/* <Route exact path='/' element={
          <IsAuthorized>
            <Home />
          </IsAuthorized>} />
        <Route exact path='/products' element={
          <IsAuthorized>
            <ProductGallery />
          </IsAuthorized>} />
        <Route exact path='profile' element={
          <IsAuthorized>
            <Profile />
          </IsAuthorized>} />
        <Route exact path='reset' element={
          <IsAuthorized>
            <ChangePassword />
          </IsAuthorized>} />
        <Route exact path='/login' name="login" element={<LoginPage />} />
        <Route exact path='/signup' element={<SignUpPage />} />
        <Route path="/products/:productId" element={<ProductView />} />
        <Route path='*' element={<ErrorPage />} /> */}






      </Routes>
    </div>
  );
}

export default App;