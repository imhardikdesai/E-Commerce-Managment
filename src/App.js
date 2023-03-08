import { Route, Routes } from 'react-router-dom';
import './App.css';
import AppBar from './components/AppBar';
import ProductView from './components/common/ProductView';
import ChangePassword from './components/page/ChangePassword';
import Home from './components/page/Home';
import ProductGallery from './components/page/ProductGallery';
import Profile from './components/page/Profile';
import SignUpPage from './components/page/SignUpPage';
function App() {
  return (
    <div className="App">
      <AppBar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/products' element={<ProductGallery />} />
        <Route path="/products/:productId" element={<ProductView />} />
        <Route exact path='profile' element={<Profile />} />
        <Route exact path='reset' element={<ChangePassword />} />
        <Route exact path='logout' element={<SignUpPage />} />
      </Routes>
    </div>
  );
}

export default App;
