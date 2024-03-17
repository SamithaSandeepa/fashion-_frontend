// ProductImage.jsx is a child component of ProductDetails.jsx

import "./ProductImage.css";
import Tilt from "react-parallax-tilt";

import React from "react";
import { products } from "../../../../backend/db/products";

export const ProductImage = ({ selectedProduct }) => {
  return (
    <Tilt
      tiltEnable={false}
      scale={1.05}
      transitionSpeed={1000}
      className="product-details-image"
    >
      {" "}
      <img src={selectedProduct?.img} alt={selectedProduct.name} />
    </Tilt>
  );
};
