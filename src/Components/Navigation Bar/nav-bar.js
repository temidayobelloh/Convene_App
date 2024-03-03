import React from 'react';
import conveneLogo from '../../assets/convene_logo.svg';
import searchIconLight from '../../assets/search-w.png';
import searchIconDark from '../../assets/search-b.png';
import logoLight from '../../assets/day.png';
import logoDark from '../../assets/night.png';

import './nav-bar.css';
const Navbar = ({theme, setTheme}) => {
    const toggle_mode =()=>{
        theme =='light' ? setTheme('dark') : setTheme ('light');
    }
  return (
    <div className='nav_bar'>
      <img src={conveneLogo} alt='' className='convene_logo'/>
      <ul>
        <li>Home</li>
        <li>Events</li>
        <li>Groups</li>
        <li>Profile</li>
        </ul>
        <div className='search-box'>
        <input type="text" placeholder="Search here"/>
        <img src={searchIconLight} alt='search-icon'/>
        </div>
        <img onClick={()=>{toggle_mode()}} src={theme ==='light' ? logoLight : logoDark} alt='toggle-icon' className='toggle_icon'/>
    </div>
  )
}

export default Navbar;
