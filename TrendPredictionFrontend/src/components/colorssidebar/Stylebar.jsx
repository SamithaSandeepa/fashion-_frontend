import React, { useState, useContext } from 'react';
import { Link } from "react-router-dom";
import FormatColorFillIcon from '@mui/icons-material/FormatColorFill';
import { DarkModeContext } from "../../context/darkModeContext";
import "./stylebar.scss";
import axios from "axios";

function Colorsbar() {
    const [gender, setGender] = useState("");
    const [month, setMonth] = useState("");
    const [year, setYear] = useState("");
    const [age, setAge] = useState("");
    const [category, setCategory] = useState("");
    const [predictedValue1, setPredictedValue1] = useState("");
    const [predictedValue2, setPredictedValue2] = useState("");
    const { dispatch } = useContext(DarkModeContext);

    const handleGenderChange = (e) => {
        setGender(e.target.value);
    };

    const handleCategoryChange = (e) => {
        setCategory(e.target.value);
    };

    const handleMonthChange = (e) => {
        setMonth(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/predict_style', {
                gender,
                month,
                category
            });
            const data = response.data;
            setPredictedValue1(data.sleeve);
            setPredictedValue2(data.neck);
        } catch (error) {
            console.error("There was an error making the request!", error);
        }
    };

    const renderSubDivs = () => {
        switch (gender) {
            case "Men":
                return (
                    <>
                        <div className="sub-div">
                            <label>Categories</label>
                            <div>
                                <input type="radio" id="Outerwear" name="category" value="Topwear" onChange={handleCategoryChange} />
                                <label htmlFor="Outerwear">Outerwear</label>
                            </div>
                            <div>
                                <input type="radio" id="Shirts" name="category" value="shirt" onChange={handleCategoryChange} />
                                <label htmlFor="Shirts">Shirts</label>
                            </div>
                            <div>
                                <input type="radio" id="Trousers" name="category" value="Topwear" onChange={handleCategoryChange} />
                                <label htmlFor="Trousers">Tshirt</label>
                            </div>
                        </div>
                    </>
                );
            case "Women":
                return (
                    <>
                        <div className="sub-div">
                            <label>Categories</label>
                            <div>
                                <input type="radio" id="Dresses" name="category" value="Dress" onChange={handleCategoryChange} />
                                <label htmlFor="Dresses">Dresses</label>
                            </div>
                            <div>
                                <input type="radio" id="Tops" name="category" value="Topwear" onChange={handleCategoryChange} />
                                <label htmlFor="Tops">Tops</label>
                            </div>
                            <div>
                                <input type="radio" id="Skirts" name="category" value="shirt" onChange={handleCategoryChange} />
                                <label htmlFor="Skirts">Blouses</label>
                            </div>
                        </div>
                    </>
                );
            default:
                return null;
        }
    };


    return (
        <div className="sidebar">
            {/* ... your other code ... */}
            <div className="center">
                <form onSubmit={handleSubmit}>
                    {/* Gender radio buttons */}
                    <div className="sub-div">
                        <label htmlFor="gender">Gender:</label>
                        <div>
                            <input type="radio" id="male" name="gender" value="Men" onChange={handleGenderChange} />
                            <label htmlFor="male">Male</label>
                        </div>
                        <div>
                            <input type="radio" id="female" name="gender" value="Women" onChange={handleGenderChange} />
                            <label htmlFor="female">Female</label>
                        </div>
                    </div>

                    {renderSubDivs()}
                    <div className="sub-div">
                        <label htmlFor="months">Months:</label>
                        <div>
                            <input type="radio" id="dec-jan-feb" name="months" value="Winter" onChange={handleMonthChange} />
                            <label htmlFor="dec-jan-feb">December, January, February</label>
                        </div>
                        <div>
                            <input type="radio" id="mar-apr-may" name="months" value="Spring" onChange={handleMonthChange} />
                            <label htmlFor="mar-apr-may">March, April, May</label>
                        </div>
                        <div>
                            <input type="radio" id="jun-jul-aug" name="months" value="Summer" onChange={handleMonthChange} />
                            <label htmlFor="jun-jul-aug">June, July, August</label>
                        </div>
                        <div>
                            <input type="radio" id="sept-oct-nov" name="months" value="Fall" onChange={handleMonthChange} />
                            <label htmlFor="sept-oct-nov">September, October, November</label>
                        </div>
                    </div>
                    <button className="colorful-button" type="submit">Predict</button>
                </form>
                {/* ... your predicted values ... */}
                <p>Predicted Sleeve: {predictedValue1}</p>
                <p>Predicted Neck: {predictedValue2}</p>
            </div>
            {/* ... your bottom section ... */}
        </div>
    );
}

export default Colorsbar;


// import React, { useState,useEffect } from 'react';
// import "./stylebar.scss";
// import axios from 'axios';
// import { Link } from "react-router-dom";
// import FormatColorFillIcon from '@mui/icons-material/FormatColorFill';
// import { DarkModeContext } from "../../context/darkModeContext";
// import { useContext } from "react";

// function Colorsbar() {
//     const [gender, setGender] = useState("");
//     const [month, setMonth] = useState("");
//     const [year, setYear] = useState("");
//     const [age, setAge] = useState("");
//     const [category, setCategory] = useState("");
//     const [predictedValue1, setPredictedValue1] = useState("");
//     const [predictedValue2, setPredictedValue2] = useState("");
//     const { dispatch } = useContext(DarkModeContext);

//     const handleGenderChange = (e) => {
//         setGender(e.target.value);
//     };

//     const handleCategoryChange = (e) => {
//         setCategory(e.target.value);
//     };


//     const handleSubmit = async (e) => {
//         setPredictedValue1("long sleeve");
//         setPredictedValue2("collar");
//         // e.preventDefault();
//         // try {
//         //     const response = await axios.post("", {
//         //         gender,
//         //         month,
//         //         year,
//         //         category
//         //         // Add other fields as needed
//         //     });
//         //     // Handle the response here
//         //     setPredictedValue1("long sleeve");
//         //     setPredictedValue2("collar");
//         // } catch (error) {
//         //     console.error("Error:", error);
//         // }
//     };

//     const renderSubDivs = () => {
//         switch (gender) {
//             case "Men":
//                 return (
//                     <>
//                         <div className="sub-div">
//                             <label htmlFor="categories">Categories</label>
//                             <div>
//                                 <input type="radio" id="Outerwear" name="category" value="Outerwear" onChange={handleCategoryChange} />
//                                 <label htmlFor='Outerwear'>Outerwear</label>
//                             </div>
//                             <div>
//                                 <input type="radio" id="Shirts" name="category" value="Shirts" onChange={handleCategoryChange} />
//                                 <label htmlFor='Shirts'>Shirts</label>
//                             </div>
//                         </div>
//                     </>
//                 );
//             case "Women":
//                 return (
//                     <>
//                         <div className="sub-div">
//                             <label htmlFor="categories">Categories</label>
//                             <div>
//                                 <input type="radio" id="Dresses" name="category" value="Dress" onChange={handleCategoryChange} />
//                                 <label htmlFor='Dresses'>Dresses</label>
//                             </div>
//                             <div>
//                                 <input type="radio" id="ShirtBlouse" name="category" value="ShirtBlouse" onChange={handleCategoryChange} />
//                                 <label htmlFor='ShirtBlouse'>Shirt Blouse</label>
//                             </div>
//                             <div>
//                                 <input type="radio" id="tops" name="category" value="tops" onChange={handleCategoryChange} />
//                                 <label htmlFor='Tops'>Tops</label>
//                             </div>
//                         </div>
//                     </>
//                 );
//             default:
//                 return null;
//         }
//     };

//     return (
//         <div className="sidebar">
//             <div className="top">
//                 <Link to="/" style={{ textDecoration: "none" }}>
//                     <FormatColorFillIcon />
//                     <span className="logo">Styles</span>
//                 </Link>
//             </div>
//             <hr />
//             <div className="center">
//                 <form onSubmit={handleSubmit}>
//                     <div className="sub-div">
//                         <label htmlFor="gender">Gender:</label>
//                         <div>
//                             <input type="radio" id="male" name="gender" value="Men" onChange={handleGenderChange} />
//                             <label htmlFor="male">Male</label>
//                         </div>
//                         <div>
//                             <input type="radio" id="female" name="gender" value="Women" onChange={handleGenderChange} />
//                             <label htmlFor="female">Female</label>
//                         </div>
//                     </div>
//                     {renderSubDivs()}

//                     <div className="sub-div">
//                         <label htmlFor="year">Year</label>
//                         <div>
//                             <input type="radio" id="2022" name="year" value="2022" onChange={(e) => { setYear(e.target.value) }} />
//                             <label htmlFor="2020">2022</label>
//                         </div>
//                         <div>
//                             <input type="radio" id="2021" name="year" value="2021" onChange={(e) => { setYear(e.target.value) }} />
//                             <label htmlFor="2021">2021</label>
//                         </div>
//                         <div>
//                             <input type="radio" id="2020" name="year" value="2020" onChange={(e) => { setYear(e.target.value) }} />
//                             <label htmlFor="2020">2020</label>
//                         </div>
//                         <div>
//                             <input type="radio" id="2019" name="year" value="2019" onChange={(e) => { setYear(e.target.value) }} />
//                             <label htmlFor="2019">2019</label>
//                         </div>
//                     </div>

//                     <div className="sub-div">
//                         <label htmlFor="seasons">Seasons</label>
//                         <div>
//                             <input type="radio" id="Dec,Jan,Feb" name="month" value="Winter" onChange={(e) => { setMonth(e.target.value) }} />
//                             <label htmlFor="Dec,Jan,Feb">Dec,Jan,Feb</label>
//                         </div>
//                         <div>
//                             <input type="radio" id="March,Apr,May" name="month" value="Spring" onChange={(e) => { setMonth(e.target.value) }} />
//                             <label htmlFor="March,Apr,May">March,Apr,May</label>
//                         </div>
//                         <div>
//                             <input type="radio" id="Jun,July,Aug" name="month" value="Summer" onChange={(e) => { setMonth(e.target.value) }} />
//                             <label htmlFor="Jun,July,Aug">Jun,July,Aug</label>
//                         </div>
//                         <div>
//                             <input type="radio" id="Sept,Oct,Nov" name="month" value="Fall" onChange={(e) => { setMonth(e.target.value) }} />
//                             <label htmlFor="Sept,Oct,Nov">Sept,Oct,Nov</label>
//                         </div>
//                     </div>

//                     <button className="colorful-button" type="submit">Predict</button>{/* Standard HTML button */}
//                 </form>
//                 {/* Display predicted values */}

//             </div>
//             <div className="bottom">
//                 <div
//                     className="colorOption"
//                     onClick={() => dispatch({ type: "LIGHT" })}
//                 ></div>
//                 <div
//                     className="colorOption"
//                     onClick={() => dispatch({ type: "DARK" })}
//                 ></div>
//             </div>

//             {predictedValue1 && <div>Predicted Value 1: {predictedValue1}</div>}
//             {predictedValue2 && <div>Predicted Value 2: {predictedValue2}</div>}
//         </div>
//     )
// }

// export default Colorsbar;

