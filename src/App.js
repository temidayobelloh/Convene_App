import './App.css';
import { BrowserRouter, Route, Routes, NavLink} from 'react-router-dom';
import Home from './Components/Pages/Home/home';
import Questions from './Components/Pages/Questions/questions';
import Profile from './Components/Pages/Profile/profile';
import MeetUpPage from './Components/Pages/MeetupPage/meetupPage';


const App =()=>{
  return (
  <BrowserRouter>
  <header>
  <nav>
  <h1>Convene</h1>
  <NavLink to="/">Home</NavLink>
  <NavLink to="/profile">Profile</NavLink>
  <NavLink to="/meetups">MeetUp&Events</NavLink>
  <NavLink to="/questions">Questions</NavLink>
  </nav>
  </header>
  <main>
  <Routes>
    <Route path="/" element= {<Home/>}/>
    <Route path ="/profile" element={<Profile/>}/>
    <Route path ="/meetups" element={<MeetUpPage/>}/>
    <Route path ="/questions" element={<Questions/>}/>
    </Routes>
    </main>
    </BrowserRouter>
  );
};
export default App;

