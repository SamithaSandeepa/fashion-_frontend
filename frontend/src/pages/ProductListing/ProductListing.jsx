import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Filter } from "./components/Filter/Filter";
import { ProductListingSection } from "./components/ProductListingSection/ProductListingSection";
import "./ProductListing.css";

export const ProductListing = ({ products: propProducts }) => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState(propProducts || []);
  const [recommendations, setRecommendations] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const productsResponse = await fetch(
          "http://localhost:8000/api/store/products/"
        );
        const productsData = await productsResponse.json();
        setProducts(productsData);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
      setLoading(false);
    };

    if (!propProducts || propProducts.length === 0) {
      fetchProducts();
    }
  }, [propProducts]);

  useEffect(() => {
    const fetchRecommendations = async () => {
      setLoading(true);
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

        const requestData = {};

        if (profileData.gender === "Male") requestData["Gender_Male"] = 1;
        else if (profileData.gender === "Female")
          requestData["Gender_Female"] = 1;
        console.log(profileData.gender);
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
        setRecommendations(recommendationData);
      } catch (error) {
        console.error("Error fetching recommendations:", error);
      }
      setLoading(false);
    };

    fetchRecommendations();
  }, []);

  useEffect(() => {
    if (recommendations && recommendations.length > 0 && products.length > 0) {
      const recommendedProducts = products.filter((product) =>
        recommendations.some((recommendation) =>
          product.description.includes(recommendation)
        )
      );
      const otherProducts = products.filter(
        (product) =>
          !recommendations.some((recommendation) =>
            product.description.includes(recommendation)
          )
      );
      const sortedProducts = [...recommendedProducts, ...otherProducts];
      setProducts(sortedProducts);
    }
  }, [recommendations, products.length]);

  return loading ? (
    <div>Loading...</div>
  ) : (
    <div className="page-container">
      <Filter className="filters" />
      <ProductListingSection
        className="products-container"
        products={products}
      />
    </div>
  );
};
