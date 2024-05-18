import React, { useContext, useState } from 'react';
import "./colorsbar.scss";
import { Link } from "react-router-dom";
import PaletteIcon from '@mui/icons-material/Palette';
import { DarkModeContext } from "../../context/darkModeContext";
import axios from "axios";

function Colorsbar() {
    const [gender, setGender] = useState("");
    const [month, setMonth] = useState("");
    const [year, setYear] = useState();
    const [age, setAge] = useState("");
    const [Outerwear, setOuterwear] = useState("");
    const [Shirts, setShirts] = useState("");
    const [Shorts, setShorts] = useState("");
    const [Trousers, setTrousers] = useState("");
    const [Tshirts, setTshirts] = useState("");
    const [Dresses, setDresses] = useState("");
    const [jeans, setJeans] = useState("");
    const [skirts, setSkirts] = useState("");
    const [tops, setTops] = useState("");
    const [pred, setPred] = useState("");
    const { dispatch } = useContext(DarkModeContext);

    const [formData, setFormData] = useState({
        category: '',
        gender: '',
        year: '',
        month: '',
        age: '',
    });
    const [message, setMessage] = useState("")

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    console.log(formData);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Create a FormData object
        // const formToSend = new FormData();
        // formToSend.append('gender', formData.gender);
        // formToSend.append('month', formData.month);
        // formToSend.append('year', formData.year);
        // formToSend.append('age', formData.age);
        // formToSend.append('category', formData.category);

        // Convert form data to JSON
        const formToSend = {
            gender: formData.gender,
            month: formData.month,
            year: formData.year,
            age: formData.age,
            category: formData.category
        };        

        try {
            const response = await axios.post('http://localhost:8000/predict_colour', formToSend, {
                headers: { 'Content-Type': 'application/json' }
            });
            setMessage(response.data.colour);
            setPred(response.data.colour);
            console.log(response.data.colour);
        } catch (error) {
            console.error("There was an error with the request", error);
            // Handle your error appropriately
        }
        
        // try {
        //     const response = await axios({
        //         method: 'post',
        //         url: 'http://localhost:8000/predict_colour',
        //         data: formToSend,
        //         headers: { 'Content-Type': 'multipart/form-data' }
        //     });
        //     setMessage(response.data.colour);
        //     setPred(response.data.colour);
        //     console.log(pred);
        // } catch (error) {
        //     console.error("There was an error with the request", error);
        //     // Handle your error appropriately
        // }
    };

    const handleGenderChange = (e) => {

        const { value } = e.target;

        setGender(value);

        setFormData({

            ...formData,

            gender: value

        });

    };

    const renderSubDivs = () => {
        switch (gender) {
            case "MEN":
                return (
                    <>

                        <div className="sub-div">
                            <label htmlFor="categories">Categories</label>
                            <div>
                                <input type="radio" id="Outerwear" name="category" value="Outerwear" onChange={handleChange} />
                                <label htmlFor='Outerwear'>Outerwear</label>
                            </div>
                            <div>
                                <input type="radio" id="Shirts" name="category" value="Shirts" onChange={handleChange} />
                                <label htmlFor='Shirts'>Shirts</label>
                            </div>
                            <div>
                                <input type="radio" id="Shorts" name="category" value="Shorts" onChange={handleChange} />
                                <label htmlFor='Shorts'>Shorts</label>
                            </div>
                            <div>
                                <input type="radio" id="Trousers" name="category" value="Trousers" onChange={handleChange} />
                                <label htmlFor='Trousers'>Trousers</label>
                            </div>
                            <div>
                                <input type="radio" id="Tshirts" name="category" value="Tshirts" onChange={handleChange} />
                                <label htmlFor='Tshirts'>Tshirts</label>
                            </div>
                        </div>

                    </>
                );
            case "WOMEN":
                return (
                    <>
                        <div className="sub-div">
                            <label htmlFor="categories">Categories</label>
                            <div>
                                <input type="radio" id="Dresses" name="category" value="Dresses" onChange={handleChange} />
                                <label htmlFor='Dresses'>Dresses</label>
                            </div>
                            <div>
                                <input type="radio" id="jeans" name="category" value="Jeans" onChange={handleChange} />
                                <label htmlFor='Jeans'>Jeans</label>
                            </div>
                            <div>
                                <input type="radio" id="skirts" name="category" value="Skirts" onChange={handleChange} />
                                <label htmlFor='Skirts'>Skirts</label>
                            </div>
                            <div>
                                <input type="radio" id="tops" name="category" value="Tops" onChange={handleChange} />
                                <label htmlFor='Tops'>Tops</label>
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
            <div className="top">
                <Link to="/" style={{ textDecoration: "none" }}>
                    <PaletteIcon />
                    <span className="logo">Colors</span>
                </Link>
            </div>
            <hr />
            <div className="center">
                <form onSubmit={handleSubmit}>
                    <div className="sub-div">
                        <label htmlFor="gender">Gender:</label>
                        <div>
                            <input type="radio" id="male" name="gender" value="MEN" onChange={handleGenderChange} />
                            <label htmlFor="male">Male</label>
                        </div>
                        <div>
                            <input type="radio" id="female" name="gender" value="WOMEN" onChange={handleGenderChange} />
                            <label htmlFor="female">Female</label>
                        </div>
                    </div>
                    {renderSubDivs()}

                    <div className="sub-div">
                        <label htmlFor="year">Year</label>
                        <div>
                            <input type="radio" id="2024" name="year" value="2024" onChange={handleChange} />
                            <label htmlFor="2024">2024</label>
                        </div>
                        <div>
                            <input type="radio" id="2025" name="year" value="2025" onChange={handleChange} />
                            <label htmlFor="2025">2025</label>
                        </div>
                        <div>
                            <input type="radio" id="2026" name="year" value="2026" onChange={handleChange} />
                            <label htmlFor="2026">2026</label>
                        </div>
                        <div>
                            <input type="radio" id="2027" name="year" value="2027" onChange={handleChange} />
                            <label htmlFor="2027">2027</label>
                        </div>
                    </div>

                    <div className="sub-div">
                        <label htmlFor="month">Month</label>
                        <div className='scroll-div'>

                            <div>
                                <input type="radio" id="January" name="month" value="January" onChange={handleChange} />
                                <label htmlFor="January">January</label>
                            </div>
                            <div>
                                <input type="radio" id="February" name="month" value="February" onChange={handleChange} />
                                <label htmlFor="February">February</label>
                            </div>
                            <div>
                                <input type="radio" id="March" name="month" value="March" onChange={handleChange} />
                                <label htmlFor="March">March</label>
                            </div>
                            <div>
                                <input type="radio" id="April" name="month" value="April" onChange={handleChange} />
                                <label htmlFor="April">April</label>
                            </div>
                            <div>
                                <input type="radio" id="May" name="month" value="May" onChange={handleChange} />
                                <label htmlFor="May">May</label>
                            </div>
                            <div>
                                <input type="radio" id="June" name="month" value="June" onChange={handleChange} />
                                <label htmlFor="June">June</label>
                            </div>
                            <div>
                                <input type="radio" id="July" name="month" value="July" onChange={handleChange} />
                                <label htmlFor="July">July</label>
                            </div>
                            <div>
                                <input type="radio" id="August" name="month" value="August" onChange={handleChange} />
                                <label htmlFor="August">August</label>
                            </div>
                            <div>
                                <input type="radio" id="September" name="month" value="September" onChange={handleChange} />
                                <label htmlFor="September">September</label>
                            </div>
                            <div>
                                <input type="radio" id="October" name="month" value="October" onChange={handleChange} />
                                <label htmlFor="October">October</label>
                            </div>
                            <div>
                                <input type="radio" id="November" name="month" value="November" onChange={handleChange} />
                                <label htmlFor="November">November</label>
                            </div>
                            <div>
                                <input type="radio" id="December" name="month" value="December" onChange={handleChange} />
                                <label htmlFor="December">December</label>
                            </div>



                        </div>
                    </div>
                    <div className="sub-div">
                        <label htmlFor="age">Age</label>
                        <div>
                            <input type="radio" id="18-24" name="age" value="18-24" onChange={handleChange} />
                            <label htmlFor="18-24">18-24</label>
                        </div>
                        <div>
                            <input type="radio" id="25-30" name="age" value="25-30" onChange={handleChange} />
                            <label htmlFor="25-30">25-30</label>
                        </div>
                        <div>
                            <input type="radio" id="31-40" name="age" value="31-40" onChange={handleChange} />
                            <label htmlFor="31-40">31-40</label>
                        </div>
                        <div>
                            <input type="radio" id="41-50" name="age" value="41-50" onChange={handleChange} />
                            <label htmlFor="41-50">41-50</label>
                        </div>
                    </div>


                    <button className="colorful-button" type="submit">Predict</button>
                    {/* Standard HTML button */}
                </form>
            </div>
            <div className="bottom">
                <div
                    className="colorOption"
                    onClick={() => dispatch({ type: "LIGHT" })}
                ></div>
                <div
                    className="colorOption"
                    onClick={() => dispatch({ type: "DARK" })}
                ></div>
            </div>
            <div className="predictvalue">
                Predicted Value = {pred}
            </div>
        </div>
    )
}

export default Colorsbar;