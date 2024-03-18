import React, { useState } from 'react';
import './UserProfile.css';
import defaultAvatar from '../OIP.jpg';

const UserProfile = () => {

  const [profileImage, setProfileImage] = useState('');

  const imageSrc = profileImage || defaultAvatar;

  const [isEditable, setIsEditable] = useState(false);
  const [formData, setFormData] = useState({
    userName: 'Nicky Thomas',
    gender: 'Female',
    location: 'Western',
    hobby: 'Reading',
    favoriteColor: 'Red',
    sport: 'Basket Ball',
    ageGroup: '20 - 29'
  });

  const toggleEdit = () => {
    setIsEditable(!isEditable);
  };

  const handleDelete = () => {
    const confirmDelete = window.confirm("Do you want to delete this profile?");
    if (confirmDelete) {
      console.log("Profile deleted");
    } else {
      console.log("Profile deletion cancelled.");
    }
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="user-profile">
      <div className="profile-section">
        <img src={imageSrc} alt="Profile" className="profile-photo"/>
        <h2>Profile Photo</h2>
      </div>
      <div className="info-section">
        {Object.entries(formData).map(([key, value]) => (
          <div className="info-item" key={key}>
            <label htmlFor={key}>{key.replace(/([A-Z])/g, ' $1').trim()}:</label>
            <input
              type="text"
              id={key}
              name={key}
              value={value}
              placeholder={value}
              onChange={handleInputChange}
              readOnly={!isEditable}
              className={!isEditable ? 'readonly' : ''}
            />
          </div>          
        ))}
        <div className="action-buttons">
          <button className="edit" onClick={toggleEdit}>{isEditable ? 'Save' : 'Edit'}</button>
          <button className="delete" onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
