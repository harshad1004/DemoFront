import React from "react";
import { Link } from "react-router-dom";
//import { FcGoogle } from "react-icons/bs";
import  {FaGoogle}  from "react-icons/fa";
import  {FaFacebook}  from "react-icons/fa";
import  {FaLinkedin}  from "react-icons/fa";
import  {FaYoutube}  from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="full">
                <div className="logo_footer">
                  <Link to="#">
                    <img width="210" src="images/logo.png" alt="#" />
                  </Link>
                </div>
                <div className="information_f">
                  <p>
                    <strong>ADDRESS:</strong> 28 White tower, Street Name New
                    York City, USA
                  </p>
                  <p>
                    <strong>TELEPHONE:</strong> +91 987 654 3210
                  </p>
                  <p>
                    <strong>EMAIL:</strong> yourmain@gmail.com
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="widget_menu">
                <h3>Menu</h3>
                <ul style={{fontWeight:"bold"}}>
                  <li style={{margin:"5px", paddingTop:"5px"}}>
                    <Link to="/"> <span> Home</span></Link>
                  </li>
                  <li style={{margin:"5px", paddingTop:"5px"}}>
                    <Link to="/about">About</Link>
                  </li>
                  {/* <li>
                    <Link to="#">Services</Link>
                  </li> */}
                  {/* <li>
                    <Link to="">Testimonial</Link>
                  </li> */}
                  <li style={{margin:"5px", paddingTop:"5px"}}>
                    <Link to="/gallery">Gallery</Link>
                  </li>
                  <li style={{margin:"5px", paddingTop:"5px"}}>
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <div className="widget_menu">
                <h3>Media</h3>
                <ul >
                  <li style={{margin:"5px", paddingTop:"5px"}}>
                     <a href="/www.google.com">
                  <FaGoogle 
                     color="#4285F4"
                     size="23px"
                     />
                     </a>
                  </li>
                  <li style={{margin:"5px", paddingTop:"5px"}}>
                  <a href="/www.facebook.com">
                    <FaFacebook 
                     color="#4267B2"
                     size="23px" />
                       </a>
                  </li>
                  <li style={{margin:"5px", paddingTop:"5px"}}>
                  <a href="/https://in.linkedin.com/">
                    <FaLinkedin 
                     color="#0077b5"
                     size="23px" />
                          </a>
                  </li>
                  <li style={{margin:"5px", paddingTop:"5px"}}>
                    <a href="/www.youtube.com">
                       <FaYoutube 
                     color="#FF0000"
                     size="23px"
                     />
                     </a>
                  </li>
                 
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
