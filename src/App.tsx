import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import ErrorPage from './pages/ErrorPage';
import SignIn from './pages/Onboarding/SignIn/SignIn';
import SignUp from './pages/Onboarding/SignUp/SignUp';
import './styles/style.scss';

function App() {
  return (
    <Router>
      {/* <nav>
        <Link to='/'>Home</Link>
        <Link to='/sign-in'>Sign in</Link>
      </nav> */}
      <Routes>
        <Route path='/' element={<SignUp />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
