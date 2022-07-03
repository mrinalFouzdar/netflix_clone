import React, { useState } from "react";
import "./navbar.css";
import SearchIcon from "@mui/icons-material/Search";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { NavLink, useNavigate } from "react-router-dom";
function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const nevigate = useNavigate();
  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  const handleNevigate = () => {
    nevigate("/");
  };

  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        {/* left side */}
        <div className="left">
          <img
            src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
            alt=""
            className="left-img"
            onClick={handleNevigate}
          />
          <NavLink
            to="/"
            className="link_style"
            style={({ isActive }) => ({
              color: isActive ? "gray" : "wheat",
              textDecoration: isActive ? "underline" : "none",
            })}
          >
            Home
          </NavLink>
          <NavLink
            to="/tvshows"
            className="link_style"
            state={{ state: "Tv Shows" }}
            style={({ isActive }) => ({
              color: isActive ? "gray" : "wheat",
              textDecoration: isActive ? "underline" : "none",
            })}
          >
            TV Shows
          </NavLink>
          <NavLink
            to="/movies"
            className="link_style"
            state={{ state: "Movies" }}
            style={({ isActive }) => ({
              color: isActive ? "gray" : "wheat",
              textDecoration: isActive ? "underline" : "none",
            })}
          >
            Movies
          </NavLink>
          <NavLink
            to="/new_Popular"
            className="link_style"
            state={{ state: "New & Popular" }}
            style={({ isActive }) => ({
              color: isActive ? "gray" : "wheat",
              textDecoration: isActive ? "underline" : "none",
            })}
          >
            New & Popular
          </NavLink>
          <NavLink
            to="/myList"
            className="link_style"
            state={{ state: "My List" }}
            style={({ isActive }) => ({
              color: isActive ? "gray" : "wheat",
              textDecoration: isActive ? "underline" : "none",
            })}
          >
            My List
          </NavLink>
        </div>

        {/* right side */}
        <div className="right">
          <SearchIcon className="icon" sx={{ fontSize: "30px" }} />
          <CardGiftcardIcon className="icon" sx={{ fontSize: "30px" }} />
          <NotificationsIcon className="icon" sx={{ fontSize: "30px" }} />
          <img
            src="https://cdn.pixabay.com/photo/2020/07/14/13/07/icon-5404125_960_720.png"
            alt=""
            className="rightimg"
          />
          <ArrowDropDownIcon className="icon" sx={{ fontSize: "30px" }} />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
