import React, { useEffect, useState } from "react";
import "./ProductListingSection.css";
import Tilt from "react-parallax-tilt";
import { Link } from "react-router-dom";
import { BsFillStarFill } from "react-icons/bs";

export const ProductListingSection = ({ products: propProducts }) => {
  const [localProducts, setLocalProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      if (!propProducts) {
        setIsLoading(true); // Start loading when fetching
        try {
          const response = await fetch(
            "http://localhost:8000/api/store/products/"
          );
          if (response.ok) {
            const products = await response.json();
            setLocalProducts(products);
          } else {
            throw new Error("Failed to fetch products");
          }
        } catch (error) {
          console.error("Error fetching products:", error);
        }
        setIsLoading(false); // Stop loading after fetching
      } else {
        setLocalProducts(propProducts);
        setIsLoading(false); // Stop loading immediately if using prop products
      }
    };

    fetchProducts();
  }, [propProducts]);

  const products = propProducts || localProducts;

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="product-card-container">
      {products.length === 0 ? (
        <h2 className="no-products-found">
          Sorry, there are no matching products!
        </h2>
      ) : (
        products.map((product) => (
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
                  <img src={product.img} alt={product.name} />
                </div>
              </Link>

              <div className="product-card-details">
                <h3>{product.name}</h3>
                <p className="ratings">
                  {product.rating} <BsFillStarFill color="orange" /> (
                  {product.reviews} reviews)
                </p>
                <div className="price-container">
                  <p className="original-price">${product.original_price}</p>
                  <p className="discount-price">${product.discounted_price}</p>
                </div>
                <p>Gender: {product.category_name}</p>
              </div>
            </div>
          </Tilt>
        ))
      )}
    </div>
  );
};
