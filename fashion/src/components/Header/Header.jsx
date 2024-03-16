import "./Header.css";
import { CgHeart } from "react-icons/cg";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import { GrSearch, GrCamera } from "react-icons/gr";
// import { useData } from "../../contexts/DataProvider";
// import { useAuth } from "../../contexts/AuthProvider";
import { CgShoppingCart } from "react-icons/cg";
// import { useUserData } from "../../contexts/UserDataProvider";
import { SiTaichilang } from "react-icons/si";

export const Header = () => {
  // const { auth } = useAuth();
  // const { dispatch } = useData();
  const navigate = useNavigate();
  // const { userDataState } = useUserData();
  const [showHamburger, setShowHamburger] = useState(true);
  const [uploadedImage, setUploadedImage] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedImage(reader.result);
      };
      reader.readAsDataURL(file);
      // Implement the classification code here if needed
    }
  };

  const handleRemoveImage = () => {
    setUploadedImage(null);
    // Reset any additional classification results or state here
  };

  const handleImageSearch = () => {
    navigate("/image-search"); // Replace "/image-search" with the actual URL of your image search engine page
  };

  const getActiveStyle = ({ isActive }) => {
    return { color: isActive ? "white" : "" };
  };

  // const totalProductsInCart = userDataState.cartProducts?.reduce(
  //   (acc, curr) => {
  //     return acc + curr.qty;
  //   },
  //   0
  // );

  // const isProductInCart = () => (Number(totalProductsInCart) ? true : false);

  // const totalProductsInWishlist = userDataState.wishlistProducts.length;

  // const isProductInWishlist = () =>
  //   Number(totalProductsInWishlist) ? true : false;

  return (
    <nav>
      <div className="nav-logo-home-button">
        <NavLink style={getActiveStyle} to="/">
          <SiTaichilang />
          <span className="brand-name">BASH</span>
        </NavLink>
      </div>

      <div className="nav-input-search">
        <input
          // onChange={(e) =>
          //   dispatch({ type: "SEARCH", payload: e.target.value })
          // }
          onKeyDown={(e) => {
            e.key === "Enter" && navigate("/product-listing");
          }}
          placeholder="Search"
        />
        {/* <input
          type="file"
          id="imageUpload"
          accept="image/*"
          className="hidden"
          onChange={handleImageUpload}
        /> */}

        <button onClick={handleImageSearch}>
          <GrSearch size={16} />
        </button>
        <label htmlFor="imageUpload" className="image-upload-icon">
          <GrCamera size={16} />
        </label>
      </div>

      {uploadedImage && (
        <div className="uploaded-image-section">
          <div>
            <img src={uploadedImage} alt="Uploaded Preview" />
            <button onClick={handleRemoveImage} className="image-remove-icon">
              {/* Replace with close icon of your choice */}x
            </button>
          </div>
          {/* Add a placeholder for classification result if needed */}
        </div>
      )}

      <div
        className={
          !showHamburger
            ? "nav-link-container-mobile nav-link-container"
            : "nav-link-container"
        }
      >
        <NavLink
          onClick={() => setShowHamburger(true)}
          style={getActiveStyle}
          to="/product-listing"
        >
          Explore
        </NavLink>
        {/* <NavLink
          onClick={() => setShowHamburger(true)}
          style={getActiveStyle}
          to={auth.isAuth ? "/profile" : "/login"}
        >
          {!auth.isAuth ? "Login" : "Profile"}
        </NavLink> */}
        {/* <NavLink
          onClick={() => setShowHamburger(true)}
          style={getActiveStyle}
          to="wishlist"
        >
          <span>{!showHamburger ? "Wishlist" : ""}</span>
          <CgHeart size={25} className="wishlist" />{" "}
          {isProductInWishlist() && (
            <span className="cart-count cart-count-mobile">
              {totalProductsInWishlist}
            </span>
          )}
        </NavLink> */}
        {/* <NavLink
          onClick={() => setShowHamburger(true)}
          style={getActiveStyle}
          to="/cart"
        >
          <span>{!showHamburger ? "Cart" : ""}</span>
          <CgShoppingCart size={25} className="cart" />{" "}
          {isProductInCart() && (
            <span className="cart-count cart-count-mobile">
              {" "}
              {totalProductsInCart}{" "}
            </span>
          )}
        </NavLink> */}
      </div>
      {showHamburger && (
        <div className="hamburger-icon" onClick={() => setShowHamburger(false)}>
          <RxHamburgerMenu size={20} />
        </div>
      )}
      {!showHamburger && (
        <div
          className="cross-tab-icon cross-tab-icon-mobile"
          onClick={() => setShowHamburger(true)}
        >
          <RxCross2 color={"rgb(106, 106, 65)"} size={25} />
        </div>
      )}
    </nav>
  );
};
