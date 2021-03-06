import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ErrorPage from './pages/ErrorPage';
import SignIn from './pages/Onboarding/SignIn';
import SignUp from './pages/Onboarding/SignUp';
import './styles/style.scss';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<SignUp />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
