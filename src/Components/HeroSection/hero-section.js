import { useState } from 'react';
import './hero-section.css';
import SignUpModal from '../SignUpModal/sign-up-modal';
import LoginModal from '../LoginModal/login-modal';

const HeroSection = () => {
    const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

    const handleSignUpButtonClick = () => {
        setIsSignUpModalOpen(true);
    };

    const handleLoginButtonClick = () => {
        setIsLoginModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsSignUpModalOpen(false);
        setIsLoginModalOpen(false);
    };

    return (
        <div className="hero-container">
            <div className="hero-content">
                <h1 className="hero-title">Welcome to Convene</h1>
                <p className="hero-subtitle">Crowd-source questions for your meetups</p>
                <div className="cta-buttons">
                    <button className="cta-button signup-button" onClick={handleSignUpButtonClick}>Sign Up</button>
                    <button className="cta-button login-button" onClick={handleLoginButtonClick}>Login</button>
                </div>
            </div>
            <SignUpModal isOpen={isSignUpModalOpen} onClose={handleCloseModal} />
            <LoginModal isOpen={isLoginModalOpen} onClose={handleCloseModal} />
        </div>
    );
}

export default HeroSection;
