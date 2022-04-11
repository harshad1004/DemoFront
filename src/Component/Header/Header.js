import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const header = [
  {
    id: "1",
    name: "Home",
    path: "/",
  },
  {
    id: "2",
    name: "About",
    path: "/about",
  },
  {
    id: "3",
    name: "Gallery",
    path: "/gallery",
  },
  {
    id: "4",
    name: "Contact",
    path: "/contact",
  },
];
const Header = () => {
  return (
    <>
      <header className="header_section">
        <div className="container">
          <nav className="navbar navbar-expand-lg custom_nav-container ">
            <Link className="navbar-brand" to="/">
              <img width="250" src="images/logo.png" alt="#" />
            </Link>
            {/* <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className=""> </span>
            </button> */}
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav">
                {header.map((header, index) => {
               
                  return (
                    <li  key={index} className={index === 0 ? "nav-item active" : "nav-item"}>
                    
                      <Link className={index === 0 ? "nav-link " : "nav-link"} to={header.path}>
                        {header.name}
                      </Link>
                    </li>
                  );
                })}
                <li className="nav-item">
                  <Link className="nav-link" to="login">
                    <FaUserCircle />
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
