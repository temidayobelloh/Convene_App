import { useState } from 'react';
/*import firebase from '../services/firebase'; // Import Firebase service*/

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = formData;

    /*try {
      // Sign in user with email and password using Firebase Authentication
      await firebase.auth().signInWithEmailAndPassword(email, password);
      alert('Login successful!'); // Optionally, display a success message
      // Reset form fields after successful login
      setFormData({
        email: '',
        password: '',
      });
    } catch (error) {
      console.error('Error signing in:', error.message);
      // Optionally, display an error message to the user
      alert('Login failed. Please check your email and password.');
    }
  };
  */
  return (
    <div>
      <h2>Login</h2>
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
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
}
export default Login;
