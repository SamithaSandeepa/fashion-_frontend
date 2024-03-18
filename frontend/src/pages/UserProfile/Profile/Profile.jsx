// Profile.js
import React, { useState, useEffect } from "react";
import "./Profile.css";
import defaultAvatar from "./OIP.jpg";

export const Profile = () => {
  const [profileData, setProfileData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await fetch(
          "http://localhost:8000/api/auth/profile/",
          {
            method: "GET",
            headers: {
              Authorization: `Token ${token}`,
            },
          }
        );
        const data = await response.json();
        setProfileData(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching profile data:", error);
        setIsLoading(false);
      }
    };

    fetchProfileData();
  }, []);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    // Handle saving changes to the profile data
    setIsEditing(false);
  };

  const handleDelete = () => {
    const confirmDelete = window.confirm("Do you want to delete this profile?");
    if (confirmDelete) {
      // Perform deletion logic
    }
  };

  return (
    <div className="user-profile">
      {isLoading ? (
        <p>Loading profile...</p>
      ) : (
        <>
          {profileData ? (
            <div className="profile-details">
              <div className="profile-section">
                <img
                  src={profileData.user.profile_photo || defaultAvatar}
                  alt="Profile"
                  className="profile-photo"
                />
                <h2>Profile Photo</h2>
              </div>
              <div className="info-section">
                {/* <div className="info-item">
                  <label htmlFor="firstName">First Name:</label>
                  <input
                    type="text"
                    id="firstName"
                    value={profileData.user.first_name}
                    readOnly={!isEditing}
                  />
                </div>
                <div className="info-item">
                  <label htmlFor="lastName">Last Name:</label>
                  <input
                    type="text"
                    id="lastName"
                    value={profileData.user.last_name}
                    readOnly={!isEditing}
                  />
                </div>
                <div className="info-item">
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    id="email"
                    value={profileData.user.email}
                    readOnly={!isEditing}
                  />
                </div> */}
                <div className="info-item">
                  <label htmlFor="gender">Gender:</label>
                  <input
                    type="text"
                    id="gender"
                    value={profileData.gender}
                    readOnly={!isEditing}
                  />
                </div>
                <div className="info-item">
                  <label htmlFor="ageGroup">Age Group:</label>
                  <input
                    type="text"
                    id="ageGroup"
                    value={profileData.ageGroup}
                    readOnly={!isEditing}
                  />
                </div>
                <div className="info-item">
                  <label htmlFor="province">Province:</label>
                  <input
                    type="text"
                    id="province"
                    value={profileData.province}
                    readOnly={!isEditing}
                  />
                </div>
                <div className="info-item">
                  <label htmlFor="hobby">Hobby:</label>
                  <input
                    type="text"
                    id="hobby"
                    value={profileData.hobby}
                    readOnly={!isEditing}
                  />
                </div>
                <div className="info-item">
                  <label htmlFor="color">Favorite Color:</label>
                  <input
                    type="text"
                    id="color"
                    value={profileData.color}
                    readOnly={!isEditing}
                  />
                </div>
                <div className="info-item">
                  <label htmlFor="sport">Favorite Sport:</label>
                  <input
                    type="text"
                    id="sport"
                    value={profileData.sport}
                    readOnly={!isEditing}
                  />
                </div>
                <div className="info-item">
                  <label htmlFor="Openness_Level">Openness Level:</label>
                  <input
                    type="text"
                    id="Openness_Level"
                    value={profileData.Openness_Level}
                    readOnly={!isEditing}
                  />
                </div>
                <div className="info-item">
                  <label htmlFor="Conscientiousness_Level">
                    Conscientiousness Level:
                  </label>
                  <input
                    type="text"
                    id="Conscientiousness_Level"
                    value={profileData.Conscientiousness_Level}
                    readOnly={!isEditing}
                  />
                </div>
                <div className="info-item">
                  <label htmlFor="Extroversion_Level">
                    Extroversion Level:
                  </label>
                  <input
                    type="text"
                    id="Extroversion_Level"
                    value={profileData.Extroversion_Level}
                    readOnly={!isEditing}
                  />
                </div>
                <div className="info-item">
                  <label htmlFor="Agreeableness_Level">
                    Agreeableness Level:
                  </label>
                  <input
                    type="text"
                    id="Agreeableness_Level"
                    value={profileData.Agreeableness_Level}
                    readOnly={!isEditing}
                  />
                </div>
                <div className="info-item">
                  <label htmlFor="Neuroticism_Level">Neuroticism Level:</label>
                  <input
                    type="text"
                    id="Neuroticism_Level"
                    value={profileData.Neuroticism_Level}
                    readOnly={!isEditing}
                  />
                </div>
                <div className="action-buttons">
                  {isEditing ? (
                    <button className="save" onClick={handleSave}>
                      Save
                    </button>
                  ) : (
                    <button className="edit" onClick={handleEdit}>
                      Edit
                    </button>
                  )}
                  <button className="delete" onClick={handleDelete}>
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <p>No profile data available.</p>
          )}
        </>
      )}
    </div>
  );
};
