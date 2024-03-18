import React, { createContext, useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate, useLocation } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [auth, setAuth] = useState(() => {
    const token = localStorage.getItem("token");
    return token ? { isAuth: true, token } : { isAuth: false, token: "" };
  });

  const [loginCredential, setLoginCredential] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loginLoading, setLoginLoading] = useState(false);

  const loginHandler = async (event, username, password) => {
    event.preventDefault();
    setLoginLoading(true);

    try {
      const response = await fetch("http://localhost:8000/api/auth/login/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        const { token } = data;
        localStorage.setItem("token", token);
        setAuth({ isAuth: true, token });

        toast.success(`Welcome back, ${username}!`);
        navigate(location.state?.from?.pathname || "/");
      } else {
        throw new Error(data.detail || "Login failed");
      }
    } catch (error) {
      setError(error.message);
      toast.error(error.message);
    } finally {
      setLoginLoading(false);
    }
  };

  const logoutHandler = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("isAuth");
    setAuth({ isAuth: false, token: "" });
    navigate("/login");
  };

  const updateAuth = (newAuthState) => {
    setAuth(newAuthState);
    if (newAuthState.isAuth && newAuthState.token) {
      localStorage.setItem("token", newAuthState.token);
      // Set other necessary items in localStorage
    } else {
      localStorage.removeItem("token");
      // Remove other items as needed
    }
  };

  return (
    <AuthContext.Provider
      value={{
        auth,
        loginCredential,
        setLoginCredential,
        loginHandler,
        logoutHandler,
        updateAuth,
        error,
        loginLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
