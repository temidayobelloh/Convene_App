import './sign-up-modal.css';

const SignUpModal = ({ isOpen, onClose }) => {
    const handleResetPassword = () => {
        // Implement reset password logic
        alert('Reset password functionality will be implemented here.');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const formData = new FormData(e.target);
        const username = formData.get('username');
        const email = formData.get('email');
        const password = formData.get('password');
    
        try {
            const response = await fetch('http://localhost:3003/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, email, password })
            });
    
            if (response.ok) {
                alert('Sign up successful! Please log in.'); 
                onClose(); // Close the modal after successful signup
            } else {
                const data = await response.json();
                alert(data.error || 'Sign up failed. Please try again.');
            }
        } catch (error) {
            console.error('Error during sign up:', error);
            alert('An error occurred. Please try again later.');
        }
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
                    <button type="submit" className="signup-button">Join Convene</button>
                </form>
                <p className="reset-password" onClick={handleResetPassword}>Forgot your password? Reset it here.</p>
            </div>
        </div>
    );
}

export default SignUpModal;
