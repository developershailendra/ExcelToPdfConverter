import React, { useState } from 'react';
import './Form.css'; // Import your CSS file for styling

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState(''); // State to hold success/error messages

  const handleSubmit = async (event) => {
    event.preventDefault();
    const userData = { username, password };

    try {
      const response = await fetch('http://localhost:8080/home/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      const text = await response.text(); // Get the response as text
      console.log('Response text:', text); // Log the response text

      if (response.headers.get('content-type')?.includes('application/json')) {
        const data = JSON.parse(text); // Parse the text as JSON
        if (response.ok) {
          console.log('Login successful:', data);
          alert(text);
        } else {
          console.error('Login failed:', data.error);
          alert(text);
        }
      } else {
        console.error('Received non-JSON response:', text);
        alert(text);
      }
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <div className="containerlogin">
      <form className="form" onSubmit={handleSubmit}>
        <h2 id='h2'>Login</h2>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input 
            type="text" 
            id="username" 
            value={username} 
            onChange={(event) => setUsername(event.target.value)} 
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input 
            type="password" 
            id="password" 
            value={password} 
            onChange={(event) => setPassword(event.target.value)} 
            required 
          />
        </div>
        <button type="submit" className="btn2">Login</button>
      </form>
      {message && <p className="message">{message}</p>} {/* Display message */}
    </div>
  );
};

export default Login;