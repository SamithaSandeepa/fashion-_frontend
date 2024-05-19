import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./HeroVideo.css";

export const HeroVideo = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleShopNow = async () => {
    setIsLoading(true);

    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login"); // Navigate to the login page if the user is not logged in
    } else {
      navigate("/product-listing");
    }

    setIsLoading(false);
  };

  return (
    <div className="hero-video-container">
      <div className="hero-video">
        <img
          src="https://promoalltest-blog.cdnpromo.com/wp-content/uploads/2018/09/Blog_-6-Fashion-Brands-Using-Video-Marketing-Effectively.jpg"
          alt="Fallback"
          style={{ width: "100%" }}
        />
      </div>

      <div className="hero-text">
        <h1>Elevate Your Style</h1>
        <h2>Discover the Pinnacle of Fashion Excellence</h2>
      </div>

      <button
        onClick={handleShopNow}
        className="shop-now-btn"
        disabled={isLoading}
      >
        {isLoading ? "Loading..." : "Shop Now"}
      </button>
    </div>
  );
};
