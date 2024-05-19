import React from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">ADMIN</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <span className="icon">&#127968;</span>
            <span>Dashboard</span>
          </li>
          <p className="title">LISTS</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <span className="icon">&#128100;</span>
              <span>Users</span>
            </li>
          </Link>
          <Link to="/colors" style={{ textDecoration: "none" }}>
            <li>
              <span className="icon">&#127912;</span>
              <span>Colors</span>
            </li>
          </Link>
          <Link to="/pattern" style={{ textDecoration: "none" }}>
            <li>
              <span className="icon">&#127748;</span>
              <span>Prints</span>
            </li>
          </Link>
          <Link to="/style" style={{ textDecoration: "none" }}>
            <li>
              <span className="icon">&#128396;</span>
              <span>Styles</span>
            </li>
          </Link>
          <p className="title">Current Trends</p>
          <a
            href="http://127.0.0.1:8000/currenttrends?tshirts"
            style={{ textDecoration: "none" }}
          >
            <li>
              <span className="icon">&#128085;</span>
              <span>T Shirts</span>
            </li>
          </a>
          <a
            href="http://127.0.0.1:5000/currenttrends?dresses"
            style={{ textDecoration: "none" }}
          >
            <li>
              <span className="icon">&#128087;</span>
              <span>Dresses</span>
            </li>
          </a>
          <a
            href="http://127.0.0.1:5000/currenttrends?skirts"
            style={{ textDecoration: "none" }}
          >
            <li>
              <span className="icon">&#128082;</span>
              <span>Skirts</span>
            </li>
          </a>
          <p className="title">SERVICE</p>
          <li>
            <span className="icon">&#9881;</span>
            <span>System Health</span>
          </li>
          <li>
            <span className="icon">&#128187;</span>
            <span>Logs</span>
          </li>
          <li>
            <span className="icon">&#9881;</span>
            <span>Settings</span>
          </li>
          <p className="title">USER</p>
          <li>
            <span className="icon">&#128100;</span>
            <span>Profile</span>
          </li>
          <li>
            <span className="icon">&#128682;</span>
            <span>Logout</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
