import React, { useState } from 'react';
import "../styles/ProfileSettingsPage.css";

function ProfileSettingsPage() {
  const [name, setName] = useState("Alexander Karanja");
  const [email, setEmail] = useState("alexander@example.com");
  const [location, setLocation] = useState("Nairobi, Kenya");
  const [password, setPassword] = useState("");
  const [notifications, setNotifications] = useState(true);

  const handleSaveChanges = () => {
    // Handle save changes logic (e.g., API call to update user data)
    alert("Your changes have been saved.");
  };

  return (
    <div className="profile-settings-page">
      <h1>Profile Settings</h1>

      <div className="settings-section">
        <label>
          Name:
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
          />
        </label>
      </div>

      <div className="settings-section">
        <label>
          Email:
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
          />
        </label>
      </div>

      <div className="settings-section">
        <label>
          Location:
          <input 
            type="text" 
            value={location} 
            onChange={(e) => setLocation(e.target.value)} 
          />
        </label>
      </div>

      <div className="settings-section">
        <label>
          Password:
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            placeholder="Enter new password"
          />
        </label>
      </div>

      <div className="settings-section">
        <label>
          Notifications:
          <input 
            type="checkbox" 
            checked={notifications} 
            onChange={(e) => setNotifications(e.target.checked)} 
          />
          Enable email notifications
        </label>
      </div>

      <button className="btn save-changes" onClick={handleSaveChanges}>
        Save Changes
      </button>
    </div>
  );
}

export default ProfileSettingsPage;
