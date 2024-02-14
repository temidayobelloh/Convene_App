import React, {useState} from 'react';
/*import firebase from '../services/firebase'; // Import Firebase service*/

const SignUp = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    // Add more fields as needed (e.g., name, username)
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password, confirmPassword } = formData;

    // Validate form fields (e.g., check if passwords match)
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    /*try {
      // Create user with email and password using Firebase Authentication
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      alert('Sign up successful!'); // Optionally, display a success message
      // Reset form fields after successful sign-up
      setFormData({
        email: '',
        password: '',
        confirmPassword: '',
      });
    } catch (error) {
      console.error('Error signing up:', error.message);
      // Optionally, display an error message to the user
      alert('Sign up failed. Please try again.');
    }
  };*/
  return (
    <>
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Confirm Password:</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>
        {/* Add more form fields for additional user information if needed */}
        <button type="submit">Sign Up</button>
      </form>
    </div>
    </>
  );
};
}
export default SignUp;