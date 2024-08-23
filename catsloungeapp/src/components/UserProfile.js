import React from 'react';
import "../styles/UserProfile.css";

function UserProfile() {
  return (
    <div className="user-profile">
      <img 
        src="https://via.placeholder.com/150" 
        alt="User Profile" 
        className="profile-picture"
      />
      <h2>Alexander Karanja</h2>
      <p>Cat Enthusiast | Developer | Animal Lover</p>

      <div className="profile-details">
        <h3>Profile Details</h3>
        <p><strong>Email:</strong> alexander@example.com</p>
        <p><strong>Location:</strong> Nairobi, Kenya</p>
        <p><strong>Member Since:</strong> January 2023</p>
      </div>

      <div className="profile-actions">
        <h3>Manage Your Profile</h3>
        <button className="btn edit-profile">Edit Profile</button>
        <button className="btn view-favorites">View Favorite Cats</button>
        <button className="btn logout">Logout</button>
      </div>
    </div>
  );
}

export default UserProfile;