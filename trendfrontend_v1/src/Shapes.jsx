import React, { useState } from 'react';
import './colors.css';
import Chart from './Piechart';

function Colors() {
  const[gender,setGender] = useState();
  const[year,setYear] = useState();
  const[month,setMonth] = useState();
  const[age,setAge] = useState();
  const [accessories,setIsCheckedA] = useState(false);
  const [jeans,setIsCheckedJ] = useState(false);
  const [skirts,setIsCheckedS] = useState(false);
  const [tops,setIsCheckedT] = useState(false);
  return (
    <div>
      <center><Chart /></center>
      <div id="main">
        <form>
          <div className="sub-div">
            <label htmlFor="gender">Gender:</label>
            <div>
              <input type="radio" id="male" name="gender" value="male" onChange={(e) => {setGender(e.target.value)} }/>
              <label htmlFor="male">Male</label>
            </div>
            <div>
              <input type="radio" id="female" name="gender" value="female" onChange={(e) => {setGender(e.target.value)} }/>
              <label htmlFor="female">Female</label>
            </div>
          </div>
          <div className="sub-div">
            <label htmlFor="year">Year</label>
            <div>
              <input type="radio" id="2022" name="year" value="2022" onChange={(e) => {setYear(e.target.value)} }/>
              <label htmlFor="2020">2022</label>
            </div>
            <div>
              <input type="radio" id="2021" name="year" value="2021" onChange={(e) => {setYear(e.target.value)} }/>
              <label htmlFor="2021">2021</label>
            </div>
            <div>
              <input type="radio" id="2020" name="year" value="2020" onChange={(e) => {setYear(e.target.value)} }/>
              <label htmlFor="2020">2020</label>
            </div>
            <div>
              <input type="radio" id="2019" name="year" value="2019" onChange={(e) => {setYear(e.target.value)} }/>
              <label htmlFor="2019">2019</label>
            </div>
          </div>
          <div className="sub-div">
            <label htmlFor="month">Month</label>
            <div>
              <input type="radio" id="August" name="month" value="August" onChange={(e) => {setMonth(e.target.value)} }/>
              <label htmlFor="August">August</label>
            </div>
            <div>
              <input type="radio" id="December" name="month" value="December" onChange={(e) => {setMonth(e.target.value)} }/>
              <label htmlFor="December">December</label>
            </div>
            <div>
              <input type="radio" id="January" name="month" value="January" onChange={(e) => {setMonth(e.target.value)} }/>
              <label htmlFor="January">January</label>
            </div>
            <div>
              <input type="radio" id="July" name="month" value="January" onChange={(e) => {setMonth(e.target.value)} }/>
              <label htmlFor="January">July</label>
            </div>
          </div>
          <div className="sub-div">
            <label htmlFor="age">Age</label>
            <div>
              <input type="radio" id="18-24" name="age" value="18-24" onChange={(e) => {setAge(e.target.value)} }/>
              <label htmlFor="18-24">18-24</label>
            </div>
            <div>
              <input type="radio" id="25-30" name="age" value="25-30" onChange={(e) => {setAge(e.target.value)} }/>
              <label htmlFor="25-30">25-30</label>
            </div>
            <div>
              <input type="radio" id="31-40" name="age" value="31-40" onChange={(e) => {setAge(e.target.value)} }/>
              <label htmlFor="31-40">31-40</label>
            </div>
            <div>
              <input type="radio" id="41-50" name="age" value="41-50" onChange={(e) => {setAge(e.target.value)} }/>
              <label htmlFor="41-50">41-50</label>
            </div>
          </div>
          <div className="sub-div">
            <label htmlFor="categories">Categories</label>
            <div>
                <input type="checkbox" id="accessories" value="accessories" onChange={(e) => {setIsCheckedA(e.target.checked)}}/>
                <label htmlFor='access'>Accessories</label>
            </div>
            <div>
                <input type="checkbox" id="jeans" value="jeans" onChange={(e) => {setIsCheckedJ(e.target.checked)}} />
                <label htmlFor='Jeans'>Jeans</label>
            </div>
            <div>
                <input type="checkbox" id="skirts"  value="skirts" onChange={(e) => {setIsCheckedS(e.target.checked)}} />
                <label htmlFor='Skirts'>Skirts</label>
            </div>
            <div>
                <input type="checkbox" id="tops"  value="tops" onChange={(e) => {setIsCheckedT(e.target.checked)}} />
                <label htmlFor='Tops'>Tops</label>
            </div>
            
          </div>
          <center><button className="colorful-button" type="submit">Predict</button></center> {/* Standard HTML button */}
        </form>
      </div>
    </div>
  );
}

export default Colors;
