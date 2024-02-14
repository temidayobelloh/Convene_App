import React, {useState} from 'react';
/*import firebase from '../services/firebase'; // Import Firebase service*/

const ResetPassword = () => {
  const [email, setEmail] = useState('');
  const [resetSent, setResetSent] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    /*try {
      // Send password reset email using Firebase Authentication
      await firebase.auth().sendPasswordResetEmail(email);
      setResetSent(true);
      setError('');
    } catch (error) {
      console.error('Error sending password reset email:', error.message);
      setError(error.message);
    }
  };
  */

  return (
    <div>
      <h2>Reset Password</h2>
      {resetSent ? (
        <p>Password reset email sent. Check your email inbox for instructions.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Reset Password</button>
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </form>
      )}
    </div>
  );
};
}
export default ResetPassword;
