import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Questionnaire.css";
import axios from "axios";

export const Questionnaire = () => {
  const navigate = useNavigate();
  // get token from local storage
  const token = localStorage.getItem("token");
  console.log(token);

  const [formData, setFormData] = useState({
    gender: "",
    ageGroup: "",
    province: "",
    hobby: "",
    color: "",
    sport: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(formData);
  };

  const handleButtonClick = async () => {
    const requiredFields = [
      "gender",
      "ageGroup",
      "province",
      "hobby",
      "color",
      "sport",
    ];
    const isAnyFieldEmpty = requiredFields.some((field) => !formData[field]);

    if (isAnyFieldEmpty) {
      alert("Please fill in all required fields.");
      return;
    }

    // Map user answers to encoded array based on column names
    const encodedData = [
      formData.gender === "Female" ? 1 : 0,
      formData.gender === "Male" ? 1 : 0,
      formData.ageGroup === "0-19" ? 1 : 0,
      formData.ageGroup === "20-29" ? 1 : 0,
      formData.ageGroup === "30-39" ? 1 : 0,
      formData.ageGroup === "40-49" ? 1 : 0,
      formData.ageGroup === "50-59" ? 1 : 0,
      formData.ageGroup === "60+" ? 1 : 0,
      formData.province === "Central Province" ? 1 : 0,
      formData.province === "Eastern Province" ? 1 : 0,
      formData.province === "North Central Province" ? 1 : 0,
      formData.province === "North Western Province" ? 1 : 0,
      formData.province === "Northen Province" ? 1 : 0, // "Northen Province" should be "Northern Province"
      formData.province === "Sabaragamuwa Province" ? 1 : 0,
      formData.province === "Southern Province" ? 1 : 0,
      formData.province === "Uva Province" ? 1 : 0,
      formData.province === "Western Province" ? 1 : 0,
      formData.hobby === "Cooking" ? 1 : 0,
      formData.hobby === "Cricket" ? 1 : 0,
      formData.hobby === "Other" ? 1 : 0,
      formData.hobby === "Painting" ? 1 : 0,
      formData.hobby === "Reading" ? 1 : 0,
      formData.hobby === "Sports" ? 1 : 0,
      formData.hobby === "Traveling" ? 1 : 0,
      formData.hobby === "Watching Movies" ? 1 : 0,
      formData.color === "Black" ? 1 : 0,
      formData.color === "Blue" ? 1 : 0,
      formData.color === "Green" ? 1 : 0,
      formData.color === "Other" ? 1 : 0,
      formData.color === "Purple" ? 1 : 0,
      formData.color === "Red" ? 1 : 0,
      formData.color === "White" ? 1 : 0,
      formData.color === "Yellow" ? 1 : 0,
      formData.sport === "BallSports" ? 1 : 0,
      formData.sport === "Cricket" ? 1 : 0,
      formData.sport === "No Sport" ? 1 : 0,
      formData.sport === "Other" ? 1 : 0,
      formData.sport === "Running" ? 1 : 0,
      formData.sport === "Soccer" ? 1 : 0,
      formData.sport === "Swimming" ? 1 : 0,
      formData.sport === "Tennis" ? 1 : 0,
    ];

    // Convert the encodedData into the desired array format
    console.log(encodedData);

    /// use fetch to post the data to the backend
    const response = await fetch(
      "http://localhost:8000/api/recom/predict-personality/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Authorization: `Token ${token}`,
        },
        body: JSON.stringify({ data: encodedData }),
      }
    );

    const predictionsData = await response.json();

    console.log(predictionsData);

    // Create JSON object to add profile data along with predicted traits
    const profileData = {
      gender: formData.gender,
      ageGroup: formData.ageGroup,
      province: formData.province,
      hobby: formData.hobby,
      color: formData.color,
      sport: formData.sport,
      Openness_Level: predictionsData.predictions[0],
      Conscientiousness_Level: predictionsData.predictions[1],
      Extroversion_Level: predictionsData.predictions[2],
      Agreeableness_Level: predictionsData.predictions[3],
      Neuroticism_Level: predictionsData.predictions[4],
    };
    console.log(profileData);

    // Send form data to save in user profile
    const saveProfileResponse = await fetch(
      "http://localhost:8000/api/auth/profile/",
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(profileData),
      }
    );

    if (!saveProfileResponse.ok) {
      alert("Failed to save profile data.");
      return;
    }
    // Now you can send this profileData object to another API endpoint to save the data in the user profile

    // Redirect after successful submission
    navigate("/");
  };

  const renderPlaceholder = (name, placeholder) => {
    if (!formData[name]) {
      return (
        <option value="" disabled>
          {placeholder}
        </option>
      );
    }
  };

  return (
    <div className="questionnaire2">
      <h1>User Questionnaire</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>What is your Gender?</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
          >
            {renderPlaceholder("gender", "Select Gender")}
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <div className="form-group">
          <label>Which Age Group do you belong to?</label>
          <select
            name="ageGroup"
            value={formData.ageGroup}
            onChange={handleChange}
            required
          >
            {renderPlaceholder("ageGroup", "Select Age-Group")}
            <option value="0-19">0-19</option>
            <option value="20-29">20-29</option>
            <option value="30-39">30-39</option>
            <option value="40-49">40-49</option>
            <option value="50-59">50-59</option>
            <option value="60+">60+</option>
          </select>
        </div>
        <div className="form-group">
          <label>Which Province are you from?</label>
          <select
            name="province"
            value={formData.province}
            onChange={handleChange}
            required
          >
            {renderPlaceholder("province", "Select Province")}
            <option value="Central Province">Central Province</option>
            <option value="Eastern Province">Eastern Province</option>
            <option value="North Central Province">
              North Central Province
            </option>
            <option value="North Western Province">
              North Western Province
            </option>
            <option value="Northern Province">Northern Province</option>
            <option value="Sabaragamuwa Province">Sabaragamuwa Province</option>
            <option value="Southern Province">Southern Province</option>
            <option value="Uva Province">Uva Province</option>
            <option value="Western Province">Western Province</option>
          </select>
        </div>
        <div className="form-group">
          <label>What is your Hobby?</label>
          <select
            name="hobby"
            value={formData.hobby}
            onChange={handleChange}
            required
          >
            {renderPlaceholder("hobby", "Select Hobby")}
            <option value="Reading">Reading</option>
            <option value="Sports">Sports</option>
            <option value="Cooking">Cooking</option>
            <option value="Painting">Painting</option>
            <option value="Traveling">Traveling</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label>Select your favorite color from below</label>
          <select
            name="color"
            value={formData.color}
            onChange={handleChange}
            required
          >
            {renderPlaceholder("color", "Select Color")}
            <option value="White">White</option>
            <option value="Yellow">Yellow</option>
            <option value="Green">Green</option>
            <option value="Purple">Purple</option>
            <option value="Red">Red</option>
            <option value="Blue">Blue</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label>Select your favorite sport</label>
          <select
            name="sport"
            value={formData.sport}
            onChange={handleChange}
            required
          >
            {renderPlaceholder("sport", "Select Sport")}
            <option value="Tennis">Tennis</option>
            <option value="Swimming">Swimming</option>
            <option value="Soccer">Soccer</option>
            <option value="Cricket">Cricket</option>
            <option value="Running">Running</option>
            <option value="NetBall/Basketball">Ball-Sport</option>
            <option value="Other">Other</option>
            <option value="No Sport">No Sport</option>
          </select>
        </div>
        <button type="submit" onClick={handleButtonClick}>
          Submit
        </button>
      </form>
    </div>
  );
};