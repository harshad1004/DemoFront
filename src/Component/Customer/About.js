import axios from "axios";
import React, {useEffect, useState} from "react";

// const personalData = [
//   {
//     image: "images/client.jpg",
//     name: "Harshad Nikhare",
//     occupation: "Software developer",
//     desc: "Dignissimos reprehenderit repellendus nobis error quibusdam? Atque animi sint unde quis reprehenderit, et, perspiciatis, debitis totam est deserunt eius officiis ipsum ducimus ad labore modi voluptatibus accusantium sapiente nam! Quaerat.",
//   },
//   {
//     image: "images/client.jpg",
//     name: "Bansari Shukla",
//     occupation: "Software developer",
//     desc: "Dignissimos reprehenderit repellendus nobis error quibusdam? Atque animi sint unde quis reprehenderit, et, perspiciatis, debitis totam est deserunt eius officiis ipsum ducimus ad labore modi voluptatibus accusantium sapiente nam! Quaerat.",
//   },
//   {
//     image: "images/client.jpg",
//     name: "Dhara Khojiji",
//     occupation: "Software developer",
//     desc: "Dignissimos reprehenderit repellendus nobis error quibusdam? Atque animi sint unde quis reprehenderit, et, perspiciatis, debitis totam est deserunt eius officiis ipsum ducimus ad labore modi voluptatibus accusantium sapiente nam! Quaerat.",
//   },
// ];
const About = () => {
  const [about, setAbout] = useState([])
  useEffect(() => {
       fetchAbout();
  }, [])
  const fetchAbout = () => {
      axios
       .get("http://localhost:5000/api/aboutUs/abouttUs")
       .then((data) => {
         console.log(data.data.aboutusdata)
        setAbout(data.data.aboutusdata)
       })
       .catch((err) => {
        console.log(err.response);
       })
  }
  
  return (
    <>
      <section className="client_section layout_padding">
        <div className="container">
          <div className="heading_container heading_center">
            <h2>About us</h2>
          </div>
         
              <div
                id="carouselExample3Controls"
                className="carousel slide"
                data-ride="carousel"
              >
                <div className="carousel-inner">
                {about.map((data, index) => {
            return (
                  <div key={index} className={index === 0 ? "carousel-item active" : "carousel-item" } >
                    <div className="box col-lg-10 mx-auto">
                      <div className="img_container">
                        {/* <div className="img-box">
                          <div className="img_box-inner">
                            <img src="images/client.jpg" alt="" />
                          </div>
                        </div> */}
                      </div>
                      <div className="detail-box">
                        <h5>{data.title}</h5>
                        <h6>{data.text}</h6>
                        {/* <p>{data.desc}</p> */}
                      </div>
                    </div>
                  </div>
                   );
                  })}
                </div>
                <div className="carousel_btn_box">
                  <a
                    className="carousel-control-prev"
                    href="#carouselExample3Controls"
                    role="button"
                    data-slide="prev"
                  >
                    <i className="fa fa-long-arrow-left" aria-hidden="true"></i>
                    <span className="sr-only">Previous</span>
                  </a>
                  <a
                    className="carousel-control-next"
                    href="#carouselExample3Controls"
                    role="button"
                    data-slide="next"
                  >
                    <i
                      className="fa fa-long-arrow-right"
                      aria-hidden="true"
                    ></i>
                    <span className="sr-only">Next</span>
                  </a>
                </div>
                
              </div>
           
        </div>
      </section>
    </>
  );
};

export default About;
// .get(
//   `localhost:5000/api/aboutUs/abouttUs`,

//   {
//     headers: {
//       authorization: `Bearer ${token}`,
//     },
//   }
// )