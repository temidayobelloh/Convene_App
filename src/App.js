import Navbar from './Components/Navigation Bar/nav-bar';
import { useState } from 'react';
import './App.css';

function App() {
  const [theme, setTheme]= useState('light');
  return (
    <div className={`container ${theme}`}>
    <Navbar theme ={theme} setTheme={setTheme} />
    </div>
  );
}

export default App;

