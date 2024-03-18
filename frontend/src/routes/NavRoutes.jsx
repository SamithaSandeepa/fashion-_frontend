import React from "react";
import { Home } from "../pages/Home/Home";
import { Cart } from "../pages/Cart/Cart";
import { Route, Routes } from "react-router-dom";
import { Login } from "../pages/auth/Login/Login";
import { ProductListing } from "../pages/ProductListing/ProductListing";
import { ProductDetails } from "../pages/ProductDetails/ProductDetails";
import { RequiresAuth } from "../components/requires-auth/RequiresAuth";
import { Signup } from "../pages/auth/Signup/Signup";
import { Logout } from "../pages/auth/Logout/Logout";
import { Checkout } from "../pages/Checkout/Checkout";
import { Wishlist } from "../pages/Wishlist/Wishlist";
import { UserProfile } from "../pages/UserProfile/UserProfile";
import { Profile } from "../pages/UserProfile/Profile/Profile";
import { Addresses } from "../pages/UserProfile/Addresses/Addresses";
import { Orders } from "../pages/UserProfile/Orders/Orders";
import { PageNotFound } from "../pages/PageNotFound/PageNotFound";
import { AdminDashboard } from "../pages/Admin/AdminDashboard";
import { CustomerSentiment } from "../pages/Admin/CustomerSentiment/CustomerSentiments";
import { ProductReview } from "../pages/Admin/CustomerSentiment/ProductReview";
import { Reviewsexplain } from "../pages/Admin/CustomerSentiment/Reviewsexplain";
import ImageSearch from "../pages/ImageSearch/ImageSearch";
import { BarGraph } from "../pages/Admin/CustomerSentiment/BarGraph"; // Make sure to import the BarGraph component correctly}
import { Questionnaire } from "../pages/auth/Signup/Questionnaire";
import { UserProfileA } from "../pages/UserProfile/anjalee_profile/UserProfile";

export const NavRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/cart"
        element={
          <RequiresAuth>
            <Cart />
          </RequiresAuth>
        }
      />
      <Route
        path="/wishlist"
        element={
          <RequiresAuth>
            <Wishlist />
          </RequiresAuth>
        }
      />
      <Route path="*" element={<PageNotFound />} />
      <Route path="/login" element={<Login />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/product-listing" element={<ProductListing />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/product-details/:productId" element={<ProductDetails />} />
      <Route
        path="/checkout"
        element={
          <RequiresAuth>
            <Checkout />
          </RequiresAuth>
        }
      />
      <Route path="/profile" element={<UserProfile />}>
        <Route
          path="/profile/"
          element={
            <RequiresAuth>
              <Profile />
            </RequiresAuth>
          }
        />
        <Route path="/profile/orders" element={<Orders />} />
        <Route path="/profile/addresses" element={<Addresses />} />
      </Route>
      {/* admin path */}
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/sentiment-analysis" element={<CustomerSentiment />} />
      <Route path="/product-review/:id" element={<ProductReview />} />
      <Route path="/negative-reviews/:productId" element={<Reviewsexplain />} />
      <Route path="/positive-reviews/:productId" element={<Reviewsexplain />} />
      <Route path="/neutral-reviews/:productId" element={<Reviewsexplain />} />
      <Route
        path="/slightly-positive-reviews/:productId"
        element={<Reviewsexplain />}
      />
      <Route
        path="/slightly-negative-reviews/:productId"
        element={<Reviewsexplain />}
      />
      <Route path="/bar-graph" element={<BarGraph />} />

      {/* image search */}
      <Route path="/image-search" element={<ImageSearch />} />

      {/* recommend */}
      <Route path="/questionnaire" element={<Questionnaire />} />
      <Route path="/user-profile" element={<UserProfileA />} />
    </Routes>
  );
};
