import Navbar from './Components/Navigation Bar/nav-bar';
import {useState , useEffect} from 'react';
import './App.css';
import HeroSection from './Components/HeroSection/hero-section';
import SignUpModal from './Components/SignUpModal/sign-up-modal';


function App() {
  const current_theme = localStorage.getItem ('current_theme');
  const [theme, setTheme]= useState(current_theme ? current_theme : 'light');

  useEffect (()=>{localStorage.setItem(current_theme, theme)},[theme]);
  return (
    <div className={`container ${theme}`}>
    <Navbar theme ={theme} setTheme={setTheme} />
    <HeroSection/>
    <SignUpModal/>
    </div>
  );
}

export default App;

