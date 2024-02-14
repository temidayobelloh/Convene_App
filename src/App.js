import LandingPage from './Components/Pages/Landing Page/landing-page';
import SignUp from './Components/Authentication/sign-up';
import Login from './Components/Authentication/login';
import ResetPassword from './Components/Authentication/reset-password';
import './App.css';

function App() {
  return (
    <>
    <LandingPage/>
    <SignUp/>
    <Login/>
    <ResetPassword/>
    </>
  );
}

export default App;
