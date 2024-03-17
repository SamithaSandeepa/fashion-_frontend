import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ProductImage } from "./components/ProductImage/ProductImage";
import { ProductDescription } from "./components/ProductDescription/ProductDescription";
import "./ProductDetails.css";

export const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `http://localhost:8000/api/store/products/${productId}/`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    product && (
      <div className="products-page-container">
        <ProductImage selectedProduct={product} />
        <ProductDescription selectedProduct={product} />
      </div>
    )
  );
};
