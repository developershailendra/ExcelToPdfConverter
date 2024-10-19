import React from "react";
import "./Navbar.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
// import Home from "../../Home";
import Register from "../login&Register/Register";
import Login from "../login&Register/Login";
import App from "../../App";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="logo">MyLogo</div>
        <ul className="nav-links">
          <li>
            {/* <a href="#home">Home</a> */}
            <Link to="/">Home</Link>
          </li>
          <li>
            {/* <a href="#about">Register</a> */}
            <Link to="/register">Register</Link>
          </li>
          <li>
            {/* <a href="#contact">Login</a> */}
            <Link to="/login">Login</Link>
          </li>
        </ul>
        <div className="menu-icon">
          {/* You can add a menu icon here for mobile view */}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
