import './login-modal.css';

const LoginModal = ({ isOpen, onClose }) => {
    const handleLogin = () => {
        alert('Login functionality will be implemented here.');
    };

    const handleForgotPassword = () => {
        // Implement forgot password logic
        alert('Forgot password functionality will be implemented here.');
    };

    return (
        <div className={`modal ${isOpen ? 'show' : ''}`}>
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                <h2>Login</h2>
                <form>
                    <div className="form-group">
                        <input type="email" placeholder="Email" required />
                    </div>
                    <div className="form-group">
                        <input type="password" placeholder="Password" required />
                    </div>
                    <button type="submit" className="login-button" onClick={handleLogin}>Login</button>
                </form>
                <p className="forgot-password" onClick={handleForgotPassword}>Forgot your password? Reset it here.</p>
            </div>
        </div>
    );
}

export default LoginModal;
