import convene from '../../assets/partner_exchange_FILL0_wght400_GRAD0_opsz24.svg';
import './nav-bar.css';

 import { Link } from 'react-router-dom';
 
 const NavBar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="logo-link">
        <img src={convene} className="convenelogo" alt="Convene Logo" />
      </Link>
      <ul className="nav-links">
        <li>
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/events" className="nav-link">
            Events
          </Link>
        </li>
        <li>
          <Link to="/groups" className="nav-link">
            User
          </Link>
        </li>
        <li>
          <Link to="/questions" className="nav-link">
            Questions
          </Link>
        </li>
      </ul>
    </nav>
  );
};

 
 export default NavBar;