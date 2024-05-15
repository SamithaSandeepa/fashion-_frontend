import React, { useState } from "react";
import "./AddProduct.css"; // Assuming you have a CSS file for styling

export const AddProduct = () => {
  const [formData, setFormData] = useState({
    name: "",
    original_price: "",
    discounted_price: "",
    category_name: "",
    is_stock: true,
    rating: 0,
    reviews: 0,
    description: "",
    trending: false,
    size: 0,
    img_url: null, // Assuming you have an input for image upload
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    const newValue = type === "checkbox" ? checked : files ? files[0] : value;
    setFormData((prevData) => ({ ...prevData, [name]: newValue }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      formDataToSend.append(key, value);
    });

    try {
      const response = await fetch(
        "http://localhost:8000/api/store/products/",
        {
          method: "POST",
          body: formDataToSend,
        }
      );

      if (!response.ok) {
        throw new Error("Failed to add product");
      }

      const data = await response.json();
      console.log("Product added successfully:", data);
      // Optionally, you can redirect or show a success message here
    } catch (error) {
      console.error("Error adding product:", error.message);
      // Handle error, show error message, etc.
    }
  };

  return (
    <div className="add-product-container">
      <h1>Add Product</h1>
      <form className="product-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Product Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="original_price">Original Price:</label>
          <input
            type="number"
            id="original_price"
            name="original_price"
            value={formData.original_price}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="discounted_price">Discounted Price:</label>
          <input
            type="number"
            id="discounted_price"
            name="discounted_price"
            value={formData.discounted_price}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="category_name">Category:</label>
          <input
            type="text"
            id="category_name"
            name="category_name"
            value={formData.category_name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="is_stock">In Stock:</label>
          <input
            type="checkbox"
            id="is_stock"
            name="is_stock"
            checked={formData.is_stock}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="rating">Rating:</label>
          <input
            type="number"
            id="rating"
            name="rating"
            value={formData.rating}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="reviews">Reviews:</label>
          <input
            type="number"
            id="reviews"
            name="reviews"
            value={formData.reviews}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="trending">Trending:</label>
          <input
            type="checkbox"
            id="trending"
            name="trending"
            checked={formData.trending}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="size">Size:</label>
          <input
            type="number"
            id="size"
            name="size"
            value={formData.size}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="img_url">Product Image:</label>
          <input
            type="file"
            id="img_url"
            name="img_url"
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <button type="submit">Add Product</button>
        </div>
      </form>
    </div>
  );
};
