import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { BsEyeSlash, BsEye } from "react-icons/bs";
import { useAuth } from "../../../contexts/AuthProvider";
import { useData } from "../../../contexts/DataProvider";

export const Login = () => {
  const { loading } = useData();
  const { error, loginCredential, setLoginCredential, loginHandler } =
    useAuth();

  const [hidePassword, setHidePassword] = useState(true);
  const { username, password } = loginCredential;

  return (
    !loading && (
      <div className="login-container">
        <h2>Login</h2>
        <form
          onSubmit={(e) => loginHandler(e, username, password)}
          className="login-body"
        >
          <div className="username-container">
            <label htmlFor="username">Username</label>
            <input
              value={username}
              required
              onChange={(e) =>
                setLoginCredential({
                  ...loginCredential,
                  username: e.target.value,
                })
              }
              id="username"
              placeholder="Username"
              type="text"
            />
          </div>

          <div className="password-container">
            <label htmlFor="password">Password</label>
            <div className="input-container">
              <input
                value={password}
                required
                onChange={(e) =>
                  setLoginCredential({
                    ...loginCredential,
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

          <div className="remember-me-container">
            <input name="remember-me" type="checkbox" />
            <label htmlFor="remember-me">Keep me signed in</label>
            <p>Forgot your password?</p>
          </div>

          {error && <span className="error">{error}</span>}

          <div className="login-btn-container">
            <input value="Login" type="submit" />
            {/* <button
              onClick={(e) => loginHandler(e, "testusername", "testpassword")}
            >
              Login with Test Credentials
            </button> */}
          </div>

          <Link className="new-account" to="/signup">
            Create a new account?
          </Link>
        </form>
      </div>
    )
  );
};
