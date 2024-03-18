import React, { useState } from "react";
import "./Signup.css";
import { Link, useNavigate } from "react-router-dom";
import { BsEyeSlash, BsEye } from "react-icons/bs";
import { useAuth } from "../../../contexts/AuthProvider";
import { toast } from "react-hot-toast";

export const Signup = () => {
  const navigate = useNavigate();
  const { updateAuth } = useAuth();

  const [hidePassword, setHidePassword] = useState(true);
  const [hideConfirmPassword, setHideConfirmPassword] = useState(true);
  const [signUpLoading, setSignUpLoading] = useState(false);
  const [error, setError] = useState("");

  const [signupCredential, setSignupCredential] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    user_type: "1",
  });

  const signupHandler = async () => {
    if (signupCredential.password !== signupCredential.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      setSignUpLoading(true);
      setError("");

      const response = await fetch("http://localhost:8000/api/auth/register/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: signupCredential.username,
          password: signupCredential.password,
          email: signupCredential.email,
          user_type: signupCredential.user_type,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSignUpLoading(false);
        toast.success(
          `You've successfully signed up, ${signupCredential.username}`
        );

        // In your signupHandler function
        updateAuth({
          token: data.token,
          isAuth: true,
          username: signupCredential.username,
        });

        localStorage.setItem("token", data.token);
        localStorage.setItem("isAuth", true);
        navigate("/");
      } else {
        throw new Error(data.detail || "Failed to sign up");
      }
    } catch (error) {
      setSignUpLoading(false);
      setError(error.message || "An error occurred during signup");
    }
  };

  return (
    !signUpLoading && (
      <div className="signup-container">
        <h2>Sign Up</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            signupHandler();
          }}
          className="signup-body"
        >
          <div className="username-container">
            <label htmlFor="username">Username</label>
            <input
              required
              value={signupCredential.username}
              onChange={(e) =>
                setSignupCredential({
                  ...signupCredential,
                  username: e.target.value,
                })
              }
              id="username"
              placeholder="Username"
              type="text"
            />
          </div>

          <div className="email-container">
            <label htmlFor="email">Email</label>
            <input
              required
              value={signupCredential.email}
              onChange={(e) =>
                setSignupCredential({
                  ...signupCredential,
                  email: e.target.value,
                })
              }
              id="email"
              placeholder="Email Address"
              type="email"
            />
          </div>

          <div className="password-container">
            <label htmlFor="password">Password</label>
            <div className="input-container">
              <input
                required
                value={signupCredential.password}
                onChange={(e) =>
                  setSignupCredential({
                    ...signupCredential,
                    password: e.target.value,
                  })
                }
                id="password"
                placeholder="Password"
                type={hidePassword ? "password" : "text"}
              />
              {hidePassword ? (
                <BsEyeSlash
                  className="hide-show-password-eye"
                  onClick={() => setHidePassword(!hidePassword)}
                />
              ) : (
                <BsEye
                  className="hide-show-password-eye"
                  onClick={() => setHidePassword(!hidePassword)}
                />
              )}
            </div>
          </div>
          <div className="confirm-password-container">
            <label htmlFor="confirm-password">Confirm Password</label>
            <div className="input-container">
              <input
                required
                value={signupCredential.confirmPassword}
                onChange={(e) =>
                  setSignupCredential({
                    ...signupCredential,
                    confirmPassword: e.target.value,
                  })
                }
                id="confirm-password"
                placeholder="Confirm Password"
                type={hideConfirmPassword ? "password" : "text"}
              />
              {hideConfirmPassword ? (
                <BsEyeSlash
                  className="hide-show-password-eye"
                  onClick={() => setHideConfirmPassword(!hideConfirmPassword)}
                />
              ) : (
                <BsEye
                  className="hide-show-password-eye"
                  onClick={() => setHideConfirmPassword(!hideConfirmPassword)}
                />
              )}
            </div>
          </div>

          {/* Error display and submission button */}
          {error && <p className="error">{error}</p>}

          <div className="signup-btn-container">
            <input value="Sign Up" type="submit" />
          </div>
          <Link to="/login">Already have an account?</Link>
        </form>
      </div>
    )
  );
};
