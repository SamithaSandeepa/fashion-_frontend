import React from 'react';
import { useNavigate } from 'react-router-dom';
import './main.css';

function App() {
  const navigate = useNavigate();

  const handleNavigation = (page) => {
    navigate(page);
  };

  return (
    <div className="trend-container">
    <h1>Latest Trends</h1>
    <div className="container">
      <div className="left">
        <div className="top-row">
          <div className="sub-div" onClick={() => handleNavigation('/colors')}>
            <img src="https://img.freepik.com/premium-photo/family-shopping-fashion-store_79405-1094.jpg" alt="Image 1" />
            <span className="sub-text">Colors</span>
          </div>
          <div className="sub-div" onClick={() => handleNavigation('/prints')}>
            <img src="https://img.freepik.com/premium-photo/clothing-sale-fashion-style-people-concept-happy-woman-choosing-clothes-shopping-center-mall_380164-175230.jpg" alt="Image 2" />
            <span className="sub-text">Prints</span>
          </div>
        </div>
        <div className="bottom-row">
          <div className="sub-div" onClick={() => handleNavigation('/fabrics')}>
            <img src="https://www.shutterstock.com/image-photo/blurred-showcases-fashion-boutique-sportswear-600nw-524159932.jpg" alt="Image 3" />
            <span className="sub-text">Fabrics</span>
          </div>
          <div className="sub-div" onClick={() => handleNavigation('/shapes')}>
            <img src="https://img.freepik.com/premium-photo/woman-shopping-clothes-store_746318-1129.jpg" alt="Image 4" />
            <span className="sub-text">Shapes</span>
          </div>
        </div>
      </div>
      <div className="right">
      <h1>Trending Colours</h1>
      </div>
    </div>
    </div>
  );
}

export default App;
