import React, { useState } from 'react';
import './App.css'; 

function Card({ bio, fullName, image, username }) {
  const [isFollowing, setIsFollowing] = useState(false);

  const handleButtonClick = () => {
    setIsFollowing(prevState => !prevState);
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <img className="profile-picture" src={image} alt="" />
        <div className="profile-info">
          <div>
            <h1 className="name">{fullName}</h1>
            <p className="username">@{username}</p>
            <div className="profile-body">
        <p className="bio">{bio}</p>
      </div>
      <div className="stats">
        <span className="following">4 Following</span>
        <span className="followers">97.1K Followers</span>
      </div>
          </div>
          <div>
            <button 
              className={`follow-button ${isFollowing ? 'following-button' : ''}`} 
              onClick={handleButtonClick}
            >
              {isFollowing ? 'Following' : 'Follow'}
            </button>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Card;
