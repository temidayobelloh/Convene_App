import React from 'react'
import './home.css';
import HeroSection from '../../HeroSection/hero-section';
import Footer from '../../Footer/footer';

const Home = () => {
  return (
    <div className="home-container">
      <HeroSection/>
      <Footer/>
    </div>
  )
}

export default Home;
