import './App.css'
import { Routes, Route, Link, useLocation } from 'react-router-dom'
import PrivateRoute from './privateRoutes';
import Home from './components/login';
import Dashboard from './components/dashboard';


function App() {
  const location = useLocation();

  return (
  <div className="App">
      <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route element={<PrivateRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
      </Routes>
    </div>
  )
}

export default App
