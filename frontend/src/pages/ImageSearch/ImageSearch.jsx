import React, { useState, useRef, useEffect } from "react";
import "./ImageSearch.css";
// import { ProductDetails } from "../ProductDetails/ProductDetails";
import { ProductListing } from "../ProductListing/ProductListing";

function ImageSearch() {
  const [imageSrc, setImageSrc] = useState("");
  const [annotatedImage, setAnnotatedImage] = useState("");
  const [croppedImages, setCroppedImages] = useState([]);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const fileInputRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const [classLabels, setClassLabels] = useState([]);
  const [allProducts, setAllProducts] = useState([]); // State to store all products
  const [filteredProducts, setFilteredProducts] = useState([]);

  console.log(imageSrc, annotatedImage, croppedImages);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImageSrc(URL.createObjectURL(file));
      // If you want to start scanning right after image selection, call `handleSubmit()`
      handleSubmit(event);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const fileInput = document.getElementById("imageInput");
    const file = fileInput.files[0];
    if (file) {
      const formData = new FormData();
      formData.append("image", file); // Make sure to append the file to formData
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
        setSelectedImageIndex(null); // Reset selection
        setIsLoading(false); // Stop loading animation
        console.log(data);
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
    const matchingProducts = allProducts.filter((product) =>
      product.category_name.toLowerCase().includes(label.toLowerCase())
    );
    console.log(label, "Matching Products:", matchingProducts);
    setFilteredProducts(matchingProducts);
    console.log("Matching Products:", matchingProducts);
    setIsLoading(false); // Assume image processing is done and loading is complete
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "http://localhost:8000/api/store/products/"
        );
        if (response.ok) {
          const products = await response.json();
          console.log("Products:", products);
          setAllProducts(products); // Set the products in state, pass them to components, etc.
          // Set the products in state, pass them to components, etc.
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
          {/* <button onClick={handleSubmit} className="submit-button">
          Upload and Detect
        </button> */}
        </div>
        {/* {isLoading && <div className="scanning-overlay"></div>} */}

        <div className="images-container">
          {isLoading && (
            <div className="annotated-image-section">
              {imageSrc && (
                <img src={imageSrc} alt="Uploading" className="full-image" />
              )}
              <div className="scanning-overlay"></div>
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
      <div className="product-details-container">
        {/* <ProductDetails /> */}
      </div>
      <div className="product-listing-container">
        <h2>Matching Products</h2>
        <ProductListing products={filteredProducts} />
      </div>
    </>
  );
}

export default ImageSearch;
