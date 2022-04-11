import React from "react";
const personalData = [
  {
    image: "images/client.jpg",
    name: "Harshad Nikhare",
    occupation: "Software developer",
    desc: "Dignissimos reprehenderit repellendus nobis error quibusdam? Atque animi sint unde quis reprehenderit, et, perspiciatis, debitis totam est deserunt eius officiis ipsum ducimus ad labore modi voluptatibus accusantium sapiente nam! Quaerat.",
  },
  {
    image: "images/client.jpg",
    name: "Bansari Shukla",
    occupation: "Software developer",
    desc: "Dignissimos reprehenderit repellendus nobis error quibusdam? Atque animi sint unde quis reprehenderit, et, perspiciatis, debitis totam est deserunt eius officiis ipsum ducimus ad labore modi voluptatibus accusantium sapiente nam! Quaerat.",
  },
  {
    image: "images/client.jpg",
    name: "Dhara Khojiji",
    occupation: "Software developer",
    desc: "Dignissimos reprehenderit repellendus nobis error quibusdam? Atque animi sint unde quis reprehenderit, et, perspiciatis, debitis totam est deserunt eius officiis ipsum ducimus ad labore modi voluptatibus accusantium sapiente nam! Quaerat.",
  },
];
const About = () => {
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
                {personalData.map((data, index) => {
            return (
                  <div key={index} className={index === 0 ? "carousel-item active" : "carousel-item" } >
                    <div className="box col-lg-10 mx-auto">
                      <div className="img_container">
                        <div className="img-box">
                          <div className="img_box-inner">
                            <img src={data.image} alt="" />
                          </div>
                        </div>
                      </div>
                      <div className="detail-box">
                        <h5>{data.name}</h5>
                        <h6>{data.occupation}</h6>
                        <p>{data.desc}</p>
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
