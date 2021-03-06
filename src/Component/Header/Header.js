import React from "react";
import { Link } from "react-router-dom";

const header = [
  {
    id: "1",
    name: "Home",
    path: "/",
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
            {/* <Link className="navbar-brand" to="/">
              <img width="250" src="images/logo.png" alt="#" />
            </Link> */}
            <h2 style={{ color: "black" }}>Demo Task</h2>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav" style={{ color: "black" }}>
                {header.map((header, index) => {
                  return (
                    <li key={index} style={{ color: "black" }}>
                      <Link
                        style={{ color: "black" }}
                        className={
                          index === 0 ? "nav-link active " : "nav-link"
                        }
                        to={header.path}
                      >
                        {header.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
