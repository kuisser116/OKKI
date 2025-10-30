import './App.css'
import { Routes, Route, useLocation } from 'react-router-dom'
import PrivateRoute from './privateRoutes';
import Home from './components/login';
import Dashboard from './components/dashboard';
import CoursesPage from './components/CoursesPage';
import CourseLanding from './components/CourseLanding';
import UserProfile from './components/UserProfile';

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/course/:id" element={<CourseLanding />} />
          <Route path="/profile" element={<UserProfile />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App