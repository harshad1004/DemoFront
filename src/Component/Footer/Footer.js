import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
//import { FcGoogle } from "react-icons/bs";
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  const [about, setAbout] = useState([]);
  useEffect(() => {
    fetchAbout();
}, [])
const fetchAbout = () => {
   axios
    .get("http://localhost:5000/api/aboutUs/")
    .then((data) => {
     // console.log(data.data.aboutusdata)
     setAbout(data.data.aboutusdata)
    })
    .catch((err) => {
     console.log(err.response);
    })
}
// console.log(about,"about")

  return (
    <>
      {about.map((about) =>{
        return (

      <footer className="footer-distributed">
        <div className="footer-left">
          <h3>
            Company<span>logo</span>
          </h3>

          <p className="footer-links">
            <a href="https://demo.tutorialzine.com/2015/01/freebie-5-responsive-footer-templates/footer-distributed-with-address-and-phones.html#">
              Home
            </a>
            ·
            <a href="https://demo.tutorialzine.com/2015/01/freebie-5-responsive-footer-templates/footer-distributed-with-address-and-phones.html#">
              Blog
            </a>
            ·
            <a href="https://demo.tutorialzine.com/2015/01/freebie-5-responsive-footer-templates/footer-distributed-with-address-and-phones.html#">
              Pricing
            </a>
            ·
            <a href="https://demo.tutorialzine.com/2015/01/freebie-5-responsive-footer-templates/footer-distributed-with-address-and-phones.html#">
              About
            </a>
            ·
            <a href="https://demo.tutorialzine.com/2015/01/freebie-5-responsive-footer-templates/footer-distributed-with-address-and-phones.html#">
              Faq
            </a>
            ·
            <a href="https://demo.tutorialzine.com/2015/01/freebie-5-responsive-footer-templates/footer-distributed-with-address-and-phones.html#">
              Contact
            </a>
          </p>

          <p className="footer-company-name">Company Name © 2022</p>
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
            {/* <span>About the company</span>
             */}
             <span>{about.title}</span>
            {about.text}
          </p>

          <div className="footer-icons">
            <a href="https://demo.tutorialzine.com/2015/01/freebie-5-responsive-footer-templates/footer-distributed-with-address-and-phones.html#">
              <i className="fa fa-facebook"></i>
            </a>
            <a href="https://demo.tutorialzine.com/2015/01/freebie-5-responsive-footer-templates/footer-distributed-with-address-and-phones.html#">
              <i className="fa fa-twitter"></i>
            </a>
            <a href="https://demo.tutorialzine.com/2015/01/freebie-5-responsive-footer-templates/footer-distributed-with-address-and-phones.html#">
              <i className="fa fa-linkedin"></i>
            </a>
            <a href="https://demo.tutorialzine.com/2015/01/freebie-5-responsive-footer-templates/footer-distributed-with-address-and-phones.html#">
              <i className="fa fa-github"></i>
            </a>
          </div>
        </div>
      </footer>
        )
      })}
    </>
  );
};

export default Footer;
{
  /* <footer>
  <div classNameName="container">
    <div classNameName="row">
      <div classNameName="col-md-5">
        <div classNameName="full">
          <div classNameName="logo_footer">
            <Link to="#">
              <img width="210" src="images/logo.png" alt="#" />
            </Link>
          </div>
          <div classNameName="information_f">
            <p>
              <strong>ADDRESS:</strong> 28 White tower, Street Name New York
              City, USA
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
      <div classNameName="col-md-4">
        <div classNameName="widget_menu">
          <h3>Menu</h3>
          <ul style={{ fontWeight: "bold" }}>
            <li style={{ margin: "5px", paddingTop: "5px" }}>
              <Link to="/">
                {" "}
                <span> Home</span>
              </Link>
            </li>
            <li style={{ margin: "5px", paddingTop: "5px" }}>
              <Link to="/about">About</Link>
            </li>
            {/* <li>
                    <Link to="#">Services</Link>
                  </li> */
}
{
  /* <li>
                    <Link to="">Testimonial</Link>
                  </li> */
}
//             <li style={{ margin: "5px", paddingTop: "5px" }}>
//               <Link to="/gallery">Gallery</Link>
//             </li>
//             <li style={{ margin: "5px", paddingTop: "5px" }}>
//               <Link to="/contact">Contact</Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//       <div classNameName="col-md-3">
//         <div classNameName="widget_menu">
//           <h3>Media</h3>
//           <ul>
//             <li style={{ margin: "5px", paddingTop: "5px" }}>
//               <a href="/www.google.com">
//                 <FaGoogle color="#4285F4" size="23px" />
//               </a>
//             </li>
//             <li style={{ margin: "5px", paddingTop: "5px" }}>
//               <a href="/www.facebook.com">
//                 <FaFacebook color="#4267B2" size="23px" />
//               </a>
//             </li>
//             <li style={{ margin: "5px", paddingTop: "5px" }}>
//               <a href="/https://in.linkedin.com/">
//                 <FaLinkedin color="#0077b5" size="23px" />
//               </a>
//             </li>
//             <li style={{ margin: "5px", paddingTop: "5px" }}>
//               <a href="/www.youtube.com">
//                 <FaYoutube color="#FF0000" size="23px" />
//               </a>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   </div>
// </footer>; */}
