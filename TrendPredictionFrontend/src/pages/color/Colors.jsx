import React, {useEffect, useState} from 'react'
import axios from 'axios';
import "./colors.scss";
import Sidebar from '../../components/colorssidebar/Colorsbar';
import Navbar from '../../components/navbar/Navbar';
import Colorchart from '../../components/colorchart/Colorcharts';
import {useNavigate} from 'react-router-dom'; // Import useNavigate

function Colors() {
    //let [predictedValue, setPredictedValue] = useState("");
    const navigate = useNavigate(); // Initialize navigate
    // useEffect(() => {
    //   LoadData();
    // }, []);
    //
    // async function LoadData() {
    //   try {
    //     const response = await axios.get("http://localhost:5000/predict_colour");
    //     const data = response.data;
    //     // Assuming the predicted value is stored in a property called 'predictedValue' in the response data
    //     setPredictedValue(data.predictedValue);
    //   } catch (error) {
    //     console.error("Error fetching data:", error);
    //   }
    // }
    const handleNavigation = () => {
        navigate('/'); // Navigate to '/dashboard' route
    };

    return (
        <div className="colors">
            <Sidebar/>
            <div className="homeContainer">
                <Navbar/>
                <div className="chartcontainer">
                    <Colorchart/>
                </div>
                {/*<div className="predictvalue">Predicted Value = {PredictedValue} </div>*/}
                <button className="homeBtn" onClick={handleNavigation}>Navigate to Dashboard</button>
            </div>
        </div>
    )
}

export default Colors;