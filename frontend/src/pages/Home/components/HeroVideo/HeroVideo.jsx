import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./HeroVideo.css";

export const HeroVideo = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleShopNow = async () => {
    setIsLoading(true);

    try {
      const token = localStorage.getItem("token");
      const profileResponse = await fetch(
        "http://localhost:8000/api/auth/profile/",
        {
          method: "GET",
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      );
      const profileData = await profileResponse.json();
      console.log("Profile Data:", profileData);

      // Fetch all products
      const productsResponse = await fetch(
        "http://localhost:8000/api/store/products/"
      );
      const products = await productsResponse.json();
      console.log("Products:", products);

      // Initialize requestData
      const requestData = {};

      // Map gender to requestData
      if (profileData.gender === "Male") requestData["Gender_Male"] = 1;
      else if (profileData.gender === "Female")
        requestData["Gender_Female"] = 1;

      // Map favorite color to requestData
      const colorMap = {
        Blue: "Favorite Color_Blue",
        Green: "Favorite Color_Green",
        Other: "Favorite Color_Other",
        Purple: "Favorite Color_Purple",
        Red: "Favorite Color_Red",
        White: "Favorite Color_White",
        Yellow: "Favorite Color_Yellow",
      };
      requestData[colorMap[profileData.color]] = 1;

      // Map personality levels to requestData
      const personalityMap = {
        Openness_Level: {
          High: "Openness Level_High",
          Low: "Openness Level_Low",
        },
        Conscientiousness_Level: {
          High: "Conscientiousness Level_High",
          Low: "Conscientiousness Level_Low",
        },
        Extroversion_Level: {
          High: "Extroversion Level_High",
          Low: "Extroversion Level_Low",
        },
        Agreeableness_Level: {
          High: "Agreeableness Level_High",
          Low: "Agreeableness Level_Low",
        },
        Neuroticism_Level: {
          High: "Neuroticism Level_High",
          Low: "Neuroticism Level_Low",
        },
      };

      Object.keys(personalityMap).forEach((key) => {
        const value = profileData[key];
        const field = personalityMap[key][value];
        if (field) requestData[field] = 1;
      });

      // Map age group to requestData
      const ageGroupMap = {
        "0-19": "Age Category_0-19",
        "20-29": "Age Category_20-29",
        "30-39": "Age Category_30-39",
        "40-49": "Age Category_40-49",
        "50-59": "Age Category_50-59",
        "60+": "Age Category_60+",
      };
      requestData[ageGroupMap[profileData.ageGroup]] = 1;

      console.log("Request Data:", requestData);

      const recommendResponse = await fetch(
        "http://localhost:8000/api/recom/predict-fashion/",
        {
          method: "POST",
          headers: {
            Authorization: `Token ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestData),
        }
      );
      const recommendationData = await recommendResponse.json();
      console.log("Recommendation Data:", recommendationData);
      console.log("Recommendations:", recommendationData);
      // Filter and sort products based on recommendations
      // Update this logic if the structure of recommendationData is different
      const recommendations = recommendationData || []; // Adjust this line based on your actual API response structure
      console.log("Recommendations:", recommendations);
      // Filter and sort products based on recommendations
      const recommendedProducts = products.filter((product) =>
        recommendations.some((recommendation) =>
          product.description.includes(recommendation)
        )
      );
      console.log("Recommended Products:", recommendedProducts);
      const otherProducts = products.filter(
        (product) =>
          !recommendations.some((recommendation) =>
            product.description.includes(recommendation)
          )
      );
      console.log("Other Products:", otherProducts);
      const sortedProducts = [...recommendedProducts, ...otherProducts];
      console.log("Sorted Products:", sortedProducts);

      // Navigate to the ProductListing page with sorted products
      navigate("/product-listing", { state: { products: sortedProducts } });
      setIsLoading(false);
    } catch (error) {
      console.error("Error:", error);
      setIsLoading(false);
    }
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
