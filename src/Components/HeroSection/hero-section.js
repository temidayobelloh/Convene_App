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
                <h1 className="hero-title">Welcome to Convene!</h1>
                <p className="hero-subtitle">Where interests connect, and questions are answered.
No matter your passion, Convene brings together like-minded individuals just like you.
Join us to engage, learn, and prioritize the questions that matter most to you.</p>
                <div className="cta-buttons">
                    <button className="cta-button signup-button" onClick={handleSignUpButtonClick}>Join us!</button>
                    <button className="cta-button login-button" onClick={handleLoginButtonClick}>Login</button>
                </div>
            </div>
            <SignUpModal isOpen={isSignUpModalOpen} onClose={handleCloseModal} />
            <LoginModal isOpen={isLoginModalOpen} onClose={handleCloseModal} />
        </div>
    );
}

export default HeroSection;
