import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link
import "../styles/LoginPage.css";

function LoginPage({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Basic validation
    if (password.length < 8) {
      setError("Password must be at least 8 characters long.");
      return;
    }

    // Save user data (In a real app, you'd send a request to the backend here)
    const userData = {
      email: email,
      password: password, // Note: In a real app, never save passwords directly
    };

    // Save user data in localStorage (or handle via a backend API)
    localStorage.setItem("user", JSON.stringify(userData));

    // Clear fields and redirect
    setEmail("");
    setPassword("");
    setError("");
    onLogin(userData);
  };

  return (
    <div className="login-page">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className="login-field">
          <label>Email:</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required
          />
        </div>
        <div className="login-field">
          <label>Password:</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
            minLength={8}
          />
        </div>
        {error && <p className="error">{error}</p>}
        <button type="submit" className="btn login-btn">Login</button>
      </form>
      <p>Don't have an account? <Link to="/register">Register here</Link></p>
    </div>
  );
}

export default LoginPage;
