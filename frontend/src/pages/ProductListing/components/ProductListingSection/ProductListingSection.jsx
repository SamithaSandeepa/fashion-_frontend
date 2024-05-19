import React, { useEffect, useState } from "react";
import "./ProductListingSection.css";
import Tilt from "react-parallax-tilt";
import { Link } from "react-router-dom";
import { BsFillStarFill } from "react-icons/bs";
import { SyncLoader } from "react-spinners";

export const ProductListingSection = ({ products: propProducts }) => {
  const [localProducts, setLocalProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true); // Start loading when fetching
      try {
        if (!propProducts) {
          const response = await fetch(
            "http://localhost:8000/api/store/products/"
          );
          if (response.ok) {
            const products = await response.json();
            setLocalProducts(products);
          } else {
            throw new Error("Failed to fetch products");
          }
        } else {
          setLocalProducts(propProducts);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setIsLoading(false); // Stop loading after fetching
      }
    };

    fetchProducts();
  }, [propProducts]);

  const products = propProducts || localProducts;

  if (isLoading) {
    return (
      <div className="loader-container">
        <SyncLoader color="black" />
      </div>
    );
  }

  return (
    <div className="product-card-container">
      {products.length === 0
        ? setIsLoading(true)
        : products.map((product) => (
            <Tilt
              key={product.id}
              tiltMaxAngleX={5}
              tiltMaxAngleY={5}
              glareEnable={false}
              transitionSpeed={2000}
              scale={1.02}
            >
              <div className="product-card">
                <Link to={`/product-details/${product.id}`}>
                  <div className="product-card-image">
                    <img src={product.img_url} alt={product.name} />
                  </div>
                </Link>

                <div className="product-card-details">
                  <h3>{product.name}</h3>
                  <p className="ratings">
                    {product.rating} <BsFillStarFill color="orange" /> (
                    {product.reviews} reviews)
                  </p>
                  <div className="price-container">
                    <p className="original-price">
                      Rs {product.original_price}
                    </p>
                    <p className="discount-price">
                      Rs {product.discounted_price}
                    </p>
                  </div>
                  <p>Gender: {product.gender}</p>
                </div>
              </div>
            </Tilt>
          ))}
    </div>
  );
};
