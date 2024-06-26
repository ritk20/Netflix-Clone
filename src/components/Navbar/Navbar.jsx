import React, { useEffect, useRef } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import search_icon from "../../assets/search_icon.svg";
import bell_icon from "../../assets/bell_icon.svg";
import profile_icon from "../../assets/profile_img.png";
import caret_icon from "../../assets/caret_icon.svg";
import { logout } from "../../firebase";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        navRef.current.classList.add("navbar-black");
      } else {
        navRef.current.classList.remove("navbar-black");
      }
    });
  }, []);

  return (
    <div ref={navRef} className="navbar">
      <div className="navbar-left">
        <img onClick={() => navigate("/")} src={logo} alt="logo" />
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by Languages</li>
        </ul>
      </div>
      <div className="navbar-right">
        <img src={search_icon} alt="search" className="icons" />
        <p>Children</p>
        <img src={bell_icon} alt="notif" className="icons" />

        <div className="navbar-profile">
          <img
            onClick={() => navigate("/profile")}
            src={profile_icon}
            alt="profile"
            className="profile"
          />
          <img src={caret_icon} alt="" />

          <div className="dropdown">
            <p
              onClick={() => {
                logout();
              }}
            >
              Sign Out
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
