import React, { useState, useRef, useEffect } from "react";
import "./ImageSearch.css";
import { ProductListingSection } from "../ProductListing/components/ProductListingSection/ProductListingSection";
import { Loader } from "../../components/Loader/Loader";

function ImageSearch() {
  const [imageSrc, setImageSrc] = useState("");
  const [annotatedImage, setAnnotatedImage] = useState("");
  const [croppedImages, setCroppedImages] = useState([]);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const fileInputRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const [classLabels, setClassLabels] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImageSrc(URL.createObjectURL(file));
      handleSubmit(event);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const fileInput = document.getElementById("imageInput");
    const file = fileInput.files[0];
    if (file) {
      const formData = new FormData();
      formData.append("image", file);
      setIsLoading(true);
      try {
        const response = await fetch(
          "http://localhost:8000/api/search/detect",
          {
            method: "POST",
            body: formData,
          }
        );
        const data = await response.json();

        setImageSrc(URL.createObjectURL(file));

        setAnnotatedImage(data.annotated_image_path || "");
        setCroppedImages(data.cropped_images_paths || []);
        setClassLabels(data.class_labels || []);
        setSelectedImageIndex(null);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  const selectImage = (index, label) => {
    setSelectedImageIndex(index);

    const matchingProducts = allProducts.filter((product) => {
      const normalizedLabel = label.toLowerCase().trim();
      const productLabel = product.image_search_label.toLowerCase().trim();

      return productLabel.includes(normalizedLabel);
    });

    setFilteredProducts(matchingProducts);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "http://localhost:8000/api/store/products/"
        );
        if (response.ok) {
          const products = await response.json();
          setAllProducts(products);
        } else {
          throw new Error("Failed to fetch products");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <div className="image-search-container">
        <div className="upload-section">
          <input
            type="file"
            id="imageInput"
            name="image"
            accept="image/*"
            ref={fileInputRef}
            onChange={handleImageChange}
            style={{ display: "none" }}
          />
          <button onClick={triggerFileInput} className="upload-button">
            Choose Image
          </button>
        </div>

        <div className="images-container">
          {isLoading && (
            <div className="annotated-image-section">
              {imageSrc && (
                <img src={imageSrc} alt="Uploading" className="full-image" />
              )}
              <div className="scanning-overlay">
                <Loader loading={isLoading} />
              </div>
            </div>
          )}
          {!isLoading && annotatedImage && (
            <div className="annotated-image-section">
              <img
                src={annotatedImage}
                alt="Annotated"
                className="full-image"
              />
            </div>
          )}

          <div className="cropped-images-section">
            <h2>Detected Items</h2>
            <div className="cropped-images-grid">
              {croppedImages.map((image, index) => (
                <div
                  key={index}
                  className={`cropped-image-container ${
                    selectedImageIndex === index ? "selected" : ""
                  }`}
                  onClick={() => selectImage(index, classLabels[index])}
                >
                  <img
                    src={image}
                    alt={`Cropped ${index}`}
                    className="cropped-image"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="product-listing-container">
        <h2>Matching Products</h2>
        {filteredProducts.length === 0 ? (
          <>
            <p>No matching products found. Showing all products:</p>
            <ProductListingSection products={allProducts} />
          </>
        ) : (
          <ProductListingSection products={filteredProducts} />
        )}
      </div>
    </>
  );
}

export default ImageSearch;
