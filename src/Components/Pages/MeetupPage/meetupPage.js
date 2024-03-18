import './meetupPage.css';
import MeetupPage from '../MeetUp/MeetUpPage/meet-up-page';
import Aside from '../MeetUp/Aside/aside';
import Footer from '../../Footer/footer';

const MeetUpPage = () => {
  return (
    <div className="meet-up-container">
      <MeetupPage/>
      <Aside/>
    </div>
  )
}

export default MeetUpPage;
