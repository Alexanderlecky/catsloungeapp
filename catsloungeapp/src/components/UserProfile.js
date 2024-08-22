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
      <h2>Your Profile</h2>
      <p>Here you can view and manage your favorite cat facts and images.</p>
      {/* Add more profile-related content here */}
    </div>
  );
}

export default UserProfile;
