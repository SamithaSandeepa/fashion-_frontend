import React from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../contexts/AuthProvider";
import { useUserData } from "../../../contexts/UserDataProvider";
import "./Logout.css";

export const Logout = () => {
  const navigate = useNavigate();
  const { logoutHandler } = useAuth(); // Assuming logoutHandler is provided by useAuth
  const { dispatch } = useUserData();

  const handleLogout = () => {
    logoutHandler(); // Call the logoutHandler from AuthContext
    toast.success("You're logged out successfully!");
    dispatch({ type: "SET_CART", payload: [] });
    dispatch({ type: "SET_WISHLIST", payload: [] });
    navigate("/");
  };

  return (
    <div className="logout-container">
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};
