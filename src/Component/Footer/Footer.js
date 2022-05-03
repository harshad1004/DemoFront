import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
const Footer = () => {
  const [error, setError] = useState("");
  const [about, setAbout] = useState([]);
  useEffect(() => {
    fetchAbout();
  }, []);
  const fetchAbout = () => {
    axios
      .get("http://localhost:5000/api/aboutUs/")
      .then((data) => {
        setAbout(data.data.aboutusdata);
      })
      .catch((err) => {
        setError(err.response);
        toast.error(error);
      });
  };

  return (
    <>
      {about.map((about) => {
        return (
          <footer className="footer-distributed" key={about._id}>
            <div className="footer-left">
              <h3>
                Company<span>logo</span>
              </h3>

              <p className="footer-links">
                <Link to="/">Home</Link>
                <br></br>
                <Link to="/gallery">Gallery</Link>
                <br></br>
                <Link to="/contact">Contact</Link>
              </p>
            </div>

            <div className="footer-center">
              <div>
                <i className="fa fa-map-marker"></i>
                <p>
                  <span>{about.addresses}</span>
                </p>
              </div>

              <div>
                <i className="fa fa-phone"></i>
                <p>{about.contactNumber}</p>
              </div>

              <div>
                <i className="fa fa-envelope"></i>
                <p>
                  <a href="mailto:support@company.com">{about.email}</a>
                </p>
              </div>
            </div>

            <div className="footer-right">
              <p className="footer-company-about">
                <span>{about.title}</span>
                {about.text}
              </p>

              <div className="footer-icons">
                <a href="https://www.facebook.com/" target="_blank">
                  <i className="fa fa-facebook"></i>
                </a>
                <a href="https://twitter.com/?lang=en" target="_blank">
                  <i className="fa fa-twitter"></i>
                </a>
                <a href="https://www.linkedin.com/signup" target="_blank">
                  <i className="fa fa-linkedin"></i>
                </a>
                <a href="https://github.com/" target="_blank">
                  <i className="fa fa-github"></i>
                </a>
              </div>
            </div>
          </footer>
        );
      })}
    </>
  );
};

export default Footer;
