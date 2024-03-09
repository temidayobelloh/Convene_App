import './sign-up-modal.css';

const SignUpModal = ({ isOpen, onClose }) => {
    const handleResetPassword = () => {
        // Implement reset password logic
        alert('Reset password functionality will be implemented here.');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Implement sign-up logic
        alert('Sign up functionality will be implemented here.');
    };

    return (
        <div className={`modal ${isOpen ? 'show' : ''}`}>
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                <h2>Sign Up</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input type="text" placeholder="Username" required />
                    </div>
                    <div className="form-group">
                        <input type="email" placeholder="Email" required />
                    </div>
                    <div className="form-group">
                        <input type="password" placeholder="Password" required />
                    </div>
                    <button type="submit" className="signup-button">Sign Up</button>
                </form>
                <p className="reset-password" onClick={handleResetPassword}>Forgot your password? Reset it here.</p>
            </div>
        </div>
    );
}

export default SignUpModal;
