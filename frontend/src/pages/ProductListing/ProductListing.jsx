import React from "react";
import { useLocation } from "react-router-dom";
import { Filter } from "./components/Filter/Filter";
import { ProductListingSection } from "./components/ProductListingSection/ProductListingSection";
import { useData } from "../../contexts/DataProvider";
import "./ProductListing.css";

export const ProductListing = ({ products: propProducts }) => {
  const { loading } = useData();
  const location = useLocation();
  const stateProducts = location.state?.products;
  console.log("State Products:", stateProducts);

  // Use products from React Router state if available, otherwise use propProducts
  const products = stateProducts || propProducts;

  console.log("Products in ProductListing:", products);

  return (
    !loading && (
      <div className="page-container">
        <Filter className="filters" />
        <ProductListingSection
          className="products-container"
          products={products}
        />
      </div>
    )
  );
};
