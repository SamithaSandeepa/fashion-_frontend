import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Filter } from "./components/Filter/Filter";
import { ProductListingSection } from "./components/ProductListingSection/ProductListingSection";
import "./ProductListing.css";
import { Loader } from "../../components/Loader/Loader";

// Utility function to shuffle an array
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

export const ProductListing = ({ products: propProducts }) => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [recommendations, setRecommendations] = useState([]);
  const location = useLocation();
  const [gender, setGender] = useState("");
  const [recommendedProducts, setRecommendedProducts] = useState([]);
  const [otherProducts, setOtherProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const productsResponse = await fetch(
          "http://localhost:8000/api/store/products/"
        );
        const productsData = await productsResponse.json();
        setProducts(productsData);
        console.log("productsData", productsData);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
      setLoading(false);
    };

    if (!propProducts || propProducts.length === 0) {
      fetchProducts();
    } else {
      setProducts(propProducts);
    }
  }, [propProducts]);

  useEffect(() => {
    if (!propProducts || propProducts.length === 0) {
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
          console.log("profileData", profileData);
          setGender(profileData.gender);

          const requestData = {};

          if (profileData.gender === "Male") requestData["Gender_Male"] = 1;
          else if (profileData.gender === "Female")
            requestData["Gender_Female"] = 1;

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
          console.log("requestData", requestData);
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
          setRecommendations(recommendationData);
          console.log("recommendationData", recommendationData);
        } catch (error) {
          console.error("Error fetching recommendations:", error);
        }
        setLoading(false);
      };

      fetchRecommendations();
    }
  }, [propProducts]);

  useEffect(() => {
    if (products.length > 0) {
      let recProducts = [];

      if (recommendations.length > 0) {
        recProducts = products.filter((product) =>
          recommendations.some((recommendation) => {
            const [column, value] = recommendation.split(" ");
            if (product.gender === gender) {
              switch (column) {
                case "fashion_style":
                  return product.fashion_style === value;
                case "fashion_brand":
                  return product.fashion_brand === value;
                case "cloth_type":
                  return product.cloth_type === value;
                case "garment_fitting":
                  return product.garment_fitting === value;
                default:
                  return false;
              }
            }
            return false;
          })
        );
      }

      if (recProducts.length === 0) {
        // If no recommended products are found, or if recommendations are empty,
        // select 6 random products filtered by gender
        const genderFilteredProducts = products.filter(
          (product) => product.gender === gender
        );
        recProducts = shuffleArray(genderFilteredProducts).slice(0, 6);
      }

      const othProducts = products.filter(
        (product) => !recProducts.includes(product)
      );

      setRecommendedProducts(shuffleArray(recProducts));
      setOtherProducts(shuffleArray(othProducts));
      setLoading(false); // Stop loading after processing data
    }
  }, [recommendations, products, gender]);

  return loading ? (
    <Loader loading={loading} />
  ) : (
    <div className="page-container">
      <Filter className="filters" />
      <div className="products-container">
        <ProductListingSection products={recommendedProducts} />
        {recommendedProducts.length > 0 && <hr className="separator" />}
        <ProductListingSection products={otherProducts} />
      </div>
    </div>
  );
};
