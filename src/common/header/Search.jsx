import React, { useState, useEffect } from "react";
import logo from "../../components/assets/images/logo.svg";
import { Link } from "react-router-dom";
import "./Search.css"; // Include CSS for styling the theme

const Search = ({ CartItem }) => {
  const [darkMode, setDarkMode] = useState(false);

  // Handle scroll to fix header
  useEffect(() => {
    const handleScroll = () => {
      const search = document.querySelector(".search");
      search.classList.toggle("active", window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle dark mode
  const toggleTheme = () => {
    setDarkMode((prevMode) => !prevMode);
    if (!darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  };

  return (
    <>
      <section className="search">
        <div className="container c_flex">
          <div className="logo width">
            <img src={logo} alt="Logo" />
          </div>

          <div className="search-box f_flex">
            <i className="fa fa-search"></i>
            <input type="text" placeholder="Search and hit enter..." />
            <span>All Category</span>
          </div>

          <div className="icon f_flex width">
            <i className="fa fa-user icon-circle"></i>
            <div className="cart">
              <Link to="/cart">
                <i className="fa fa-shopping-bag icon-circle"></i>
                <span>{CartItem.length === 0 ? "" : CartItem.length}</span>
              </Link>
            </div>
            <button className="theme-toggle" onClick={toggleTheme}>
              {darkMode ? "🌙" : "☀️"}
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Search;
