import React from 'react';
import UserProfile from '../components/UserProfile';
import "../styles/ProfilePage.css";

function ProfilePage() {
  return (
    <div className="profile-page">
      <header className="profile-header">
        <h1>Your Profile</h1>
      </header>
      <main>
        <UserProfile />
      </main>
      <footer className="profile-footer">
        <p>© 2024 The Cats Lounge. All rights reserved.</p>
        <p>
          Need help? Contact our <a href="/support">Support Team</a>.
        </p>
      </footer>
    </div>
  );
}

export default ProfilePage;
