import './aside.css';
import React from 'react';

const Aside = () => {
  return (
    <aside className="aside">
      <div className="upcoming-events">
        <h3>Upcoming Meetups</h3>
        <ul className="events-list">
          <li>
            <strong>Virtual Crafting</strong> - April 15, 2024.<br />
            Location: Virtual<br />
            <a href="#">More info</a>
          </li>
          <li>
            <strong>Online Workshop</strong> - April 20, 2024.<br />
            Location: Online<br />
            <a href="#">More info</a>
          </li>
          <li>
            <strong>Tech Unite Africa</strong> - May 25, 2024.<br />
            Location: Africa<br />
            <a href="#">More info</a>
          </li>
        </ul>
      </div>

      <div className="stats-container">
        <h3>Stats</h3>
        <ul className="stats-list">
          <li className="stat-box">
            <span className="label">Questions:</span> <span className="value">100</span>
          </li>
          <li className="stat-box">
            <span className="label">Answers:</span> <span className="value">50</span>
          </li>
          <li className="stat-box">
            <span className="label">Users:</span> <span className="value">200</span>
          </li>
        </ul>
      </div>
      <div className="tag-section">
        <h3>Tags</h3>
        <ul className="tag-list">
          <li>Answers</li>
          <li>Lorem</li>
          <li>WordPress</li>
          <li>Question</li>
          <li>Happy</li>
        </ul>
      </div>
      
    </aside>
  );
};

export default Aside;
