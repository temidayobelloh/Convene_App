import NavigationBar from './Components/Navigation Bar/nav-bar';
import './App.css';
import HeroSection from './Components/HeroSection/hero-section';
import SignUpModal from './Components/SignUpModal/sign-up-modal';
import MeetupPage from './Components/Pages/MeetUp/meeet-up-list';
import Aside from './Components/Pages/MeetUp/Aside/aside';
import Footer from './Components/Pages/MeetUp/Footer/footer';
import { Route, Routes } from 'react-router-dom';
import Events from './Components/Pages/Events/event';
import Groups from './Components/Pages/Groups/group';
import Questions from './Components/Pages/Questions/question';

const App =()=>{
  return (
  <div>
    <NavigationBar />
    <Routes>
    <Route path ="/events/*" element={<Events/>}/>
    <Route path ="/groups" element={<Groups/>}/>
    <Route path ="/questions" element={<Questions/>}/>
    </Routes>
    <HeroSection />
    <SignUpModal />
    <div className="main-container">
      <MeetupPage />
      <Aside />
    </div>
      <Footer />
    </div>
  );
};

export default App;

