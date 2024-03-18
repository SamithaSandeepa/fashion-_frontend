import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Questionnaire.css'; 

const Questionnaire = () => {

 const navigate = useNavigate();

  const [formData, setFormData] = useState({
    gender: '',
    ageGroup: '',
    province: '',
    hobby: '',
    color: '',
    sport: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); 
  };

  const handleButtonClick = () => {
    const requiredFields = ['gender', 'ageGroup', 'province', 'hobby', 'color', 'sport'];
    const isAnyFieldEmpty = requiredFields.some(field => !formData[field]);
    
    if (isAnyFieldEmpty) {
      alert("Please fill in all required fields.");
      return;
    }
  
    // If all required fields are filled, proceed with navigation
    console.log(formData);
    // Logic for what happens when the button is clicked
    //console.log("Button was clicked.");
    navigate('/');  
  };

  const renderPlaceholder = (name, placeholder) => {
    if (!formData[name]) {
      return <option value="" disabled>{placeholder}</option>;
    }
  };

  return (
    <div className="questionnaire2">
      <h1>User Questionnaire</h1>
      <form onSubmit={handleSubmit}>
      <div className="form-group">
          <label>What is your Gender?</label>
          <select name="gender" value={formData.gender} onChange={handleChange} required>
          {renderPlaceholder("gender", "Select Gender")}
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <div className="form-group">
          <label>Which Age Group do you belong to?</label>
          <select name="ageGroup" value={formData.ageGroup} onChange={handleChange} required>
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
          <select name="province" value={formData.province} onChange={handleChange} required>
          {renderPlaceholder("province", "Select Province")}
            <option value="Central Province">Central Province</option>
            <option value="Eastern Province">Eastern Province</option>
            <option value="North Central Province">North Central Province</option>
            <option value="North Western Province">North Western Province</option>
            <option value="Sabaragamuwa Province">Sabaragamuwa Province</option>
            <option value="Southern Province">Southern Province</option>
            <option value="Uva Province">Uva Province</option>
            <option value="Western Province">Western Province</option>
          </select>
        </div>
        <div className="form-group">
          <label>What is your Hobby?</label>
          <select name="hobby" value={formData.hobby} onChange={handleChange} required>
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
          <select name="color" value={formData.color} onChange={handleChange} required>
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
          <select name="sport" value={formData.sport} onChange={handleChange} required>
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
        <button type="submit" onClick={handleButtonClick}>Submit</button>
      </form>
    </div>
  );
};

export default Questionnaire;
