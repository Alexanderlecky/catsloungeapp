import React, { useState } from 'react';
import "../styles/RegistrationPage.css";

function RegistrationPage({ onRegister }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");

  const handleRegistration = (e) => {
    e.preventDefault();

    // Basic validation
    if (password.length < 8) {
      setError("Password must be at least 8 characters long.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // Save user data (In a real app, you'd send a request to the backend here)
    const userData = {
      email: email,
      password: password, // Note: In a real app, never save passwords directly
      username: username,
    };

    // Save user data in localStorage (or handle via a backend API)
    localStorage.setItem("user", JSON.stringify(userData));

    // Clear fields and redirect or show a success message
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setUsername("");
    setError("");
    onRegister(userData);
  };

  return (
    <div className="registration-page">
      <h2>Register</h2>
      <form onSubmit={handleRegistration}>
        <div className="registration-field">
          <label>Username:</label>
          <input 
            type="text" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            required
          />
        </div>
        <div className="registration-field">
          <label>Email:</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required
          />
        </div>
        <div className="registration-field">
          <label>Password:</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
            minLength={8}
          />
        </div>
        <div className="registration-field">
          <label>Confirm Password:</label>
          <input 
            type="password" 
            value={confirmPassword} 
            onChange={(e) => setConfirmPassword(e.target.value)} 
            required 
            minLength={8}
          />
        </div>
        {error && <p className="error">{error}</p>}
        <button type="submit" className="btn register-btn">Register</button>
      </form>
    </div>
  );
}

export default RegistrationPage;
