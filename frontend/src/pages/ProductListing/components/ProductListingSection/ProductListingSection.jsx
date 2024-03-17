import React, { useEffect, useState } from "react";
import "./ProductListingSection.css";
import Tilt from "react-parallax-tilt";
import { Link } from "react-router-dom";
import { AiOutlineHeart, AiTwotoneHeart } from "react-icons/ai";
import { BsFillStarFill } from "react-icons/bs";

export const ProductListingSection = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          "http://localhost:8000/api/store/products/"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="product-card-container">
      {!products.length ? (
        <h2 className="no-products-found">
          Sorry, there are no matching products!
        </h2>
      ) : (
        products.map((product) => {
          const {
            id,
            name,
            original_price,
            discounted_price,
            category_name,
            is_stock,
            rating,
            reviews,
            trending,
            img,
          } = product;

          return (
            <Tilt
              key={id}
              tiltMaxAngleX={5}
              tiltMaxAngleY={5}
              glareEnable={false}
              transitionSpeed={2000}
              scale={1.02}
            >
              <div className="product-card">
                <Link to={`/product-details/${id}`}>
                  <div className="product-card-image">
                    <img src={img} alt={name} />
                  </div>
                </Link>

                <div className="product-card-details">
                  <h3>{name}</h3>
                  <p className="ratings">
                    {rating} <BsFillStarFill color="orange" /> ({reviews}{" "}
                    reviews)
                  </p>
                  <div className="price-container">
                    <p className="original-price">${original_price}</p>
                    <p className="discount-price">${discounted_price}</p>
                  </div>
                  <p>Gender: {category_name}</p>
                  <div className="info">
                    {!is_stock && <p className="out-of-stock">Out of stock</p>}
                    {trending && <p className="trending">Trending</p>}
                  </div>
                </div>

                {/* Buttons and actions here */}
              </div>
            </Tilt>
          );
        })
      )}
    </div>
  );
};
