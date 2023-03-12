import { useLocation } from 'react-router-dom';
import RoutesPath from './routes/Routes'
import AppBar from './components/AppBar';
import { useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';
function App() {
  const location = useLocation()
  const [status, setStatus] = useState(JSON.parse(localStorage.getItem('isLogin')))
  useEffect(() => {
    setStatus(JSON.parse(localStorage.getItem('isLogin')))
  }, [location])

  return (
    <div className="App">
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <AppBar status={status} />
      <RoutesPath />
    </div>
  );
}

export default App;