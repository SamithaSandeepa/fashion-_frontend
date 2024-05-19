import React, { useState } from "react";
import "./AddProduct.css";

export const AddProduct = () => {
  const initialFormData = {
    name: "",
    gender: "",
    image_search_label: "",
    original_price: "",
    discounted_price: "",
    fashion_style: "",
    fashion_brand: "",
    cloth_type: "",
    garment_fitting: "",
    description: "",
    img_url: null,
  };

  const [formData, setFormData] = useState(initialFormData);

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
      console.log(data);
      console.log("Product added successfully:", data);
      alert("Product added successfully!");
      // Clear the form inputs
      setFormData(initialFormData);
    } catch (error) {
      console.error("Error adding product:", error.message);
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
          <label htmlFor="gender">Gender:</label>
          <select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="image_search_label">Image Search Label:</label>
          <select
            id="image_search_label"
            name="image_search_label"
            value={formData.image_search_label}
            onChange={handleChange}
          >
            <option value="">Select Image Search Label</option>
            <option value="Women_Activewear_Legging">
              Women Activewear Legging
            </option>
            <option value="Women_Activewear_Top">Women Activewear Top</option>
            <option value="Women_Dress_Casual">Women Dress Casual</option>
            <option value="Women_Dress_Summer">Women Dress Summer</option>
            <option value="Women_Top_Tshirt">Women Top Tshirt</option>
            <option value="Women_Top_Croptop">Women Top Croptop</option>
            <option value="Women_Top_Blouse">Women Top Blouse</option>
            <option value="Women_Bottom_Skirt">Women Bottom Skirt</option>
            <option value="Women_Bottom_Pant">Women Bottom Pant</option>
            <option value="Women_Bottom_Short">Women Bottom Short</option>
            <option value="Women_Outwear_Jacket">Women Outerwear Jacket</option>
            <option value="Women_Outwear_Coat">Women Outerwear Coat</option>
            <option value="Women_Outwear_Cardigan">
              Women Outerwear Cardigan
            </option>
            <option value="Women_Suit_Skirtsuit">Women Suit Skirtsuit</option>
            <option value="Women_Suit_Pantsuit">Women Suit Pantsuit</option>
            <option value="Women_Swimwear_One-peiceswimsuit">
              Women Swimwear One-piece Swimsuit
            </option>
            <option value="Women_swimwear_swimcover">
              Women Swimwear Swim Cover
            </option>
            <option value="Men_Top_Tshirt">Men Top Tshirt</option>
            <option value="Men_Top_Poloshirt">Men Top Poloshirt</option>
            <option value="Men_Top_Dressshirt">Men Top Dressshirt</option>
            <option value="Men_Top_Sweater">Men Top Sweater</option>
            <option value="Men_Bottom_Trouser">Men Bottom Trouser</option>
            <option value="Men_Bottom_Short">Men Bottom Short</option>
            <option value="Men_Outwear_Jacket">Men Outerwear Jacket</option>
            <option value="Men_Outwear_Windbreaker">
              Men Outerwear Windbreaker
            </option>
            <option value="Men_Outwear_Vests">Men Outerwear Vests</option>
            <option value="Men_Suit_Businesssuit">
              Men Suit Business Suit
            </option>
            <option value="Men_Suit_Blazer">Men Suit Blazer</option>
            <option value="Men_Activewear_Top">Men Activewear Top</option>
            <option value="Men_Activewear_Pant">Men Activewear Pant</option>
            <option value="Men_Swimwear_Swimtrunk">
              Men Swimwear Swimtrunk
            </option>
            <option value="Other">Other</option>
          </select>
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
          <label htmlFor="fashion_style">Fashion Style:</label>
          <select
            id="fashion_style"
            name="fashion_style"
            value={formData.fashion_style}
            onChange={handleChange}
          >
            <option value="">Select Fashion Style</option>
            <option value="Casual">Casual</option>
            <option value="Formal">Formal</option>
            <option value="Minimalist">Minimalist</option>
            <option value="Sporty">Sporty</option>
            <option value="Vintage">Vintage</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="fashion_brand">Fashion Brand:</label>
          <select
            id="fashion_brand"
            name="fashion_brand"
            value={formData.fashion_brand}
            onChange={handleChange}
          >
            <option value="">Select Fashion Brand</option>
            <option value="Gucci">Gucci</option>
            <option value="H&M">H&M</option>
            <option value="Zara">Zara</option>
            <option value="Adidas">Adidas</option>
            <option value="Nike">Nike</option>
            <option value="No_Brand">No Brand</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="cloth_type">Cloth Type:</label>
          <select
            id="cloth_type"
            name="cloth_type"
            value={formData.cloth_type}
            onChange={handleChange}
          >
            <option value="">Select Cloth Type</option>
            <option value="Dresses">Dresses</option>
            <option value="Tops">Tops</option>
            <option value="Skirt">Skirt</option>
            <option value="Shirt">Shirt</option>
            <option value="Bottoms">Bottoms</option>
            <option value="Trouser">Trouser</option>
            <option value="Footwear">Footwear</option>
            <option value="T-shirt">T-shirt</option>
            <option value="Other">Other</option>
          </select>
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
          <label htmlFor="garment_fitting">Garment Fitting:</label>
          <select
            id="garment_fitting"
            name="garment_fitting"
            value={formData.garment_fitting}
            onChange={handleChange}
          >
            <option value="">Select Garment Fitting</option>
            <option value="Slim_Fit">Slim Fit</option>
            <option value="Regular_Fit">Regular Fit</option>
            <option value="Classic_Fit">Classic Fit</option>
            <option value="Baggy">Baggy</option>
            <option value="Other">Other</option>
          </select>
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
