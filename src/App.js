import { useLocation } from 'react-router-dom';
import RoutesPath from './routes/Routes'
import AppBar from './components/AppBar';
import { useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';
function App() {
  /* This is a hook that is used to check if the user is logged in or not. */
  const location = useLocation()
  const [status, setStatus] = useState(JSON.parse(localStorage.getItem('isLogin')))
  useEffect(() => {
    setStatus(JSON.parse(localStorage.getItem('isLogin')))
  }, [location])

  return (
  /* This is the main component of the app. It is the parent component of all the other components. */
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