import axios from "axios";
import { useEffect, useState } from "react";

const Slider = () => {
  const [slider, setSlider] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/slider")
      .then((data) => {
        if (data.status) {
          setSlider(data.data.data);

          console.log("uploaded", typeof data);
          console.log("uploaded", data);
        }
      })
      .catch((err) => {
        console.log(err.response.data.message);
      });
  }, []);
  console.log("slider", slider);
  console.log("slider", typeof slider);

  return (
    <>
      <div id="customCarousel1" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          {slider?.map((slider, index) => {
            console.log(index, "index");
            return (
              <div
                key={index}
                className={
                  index === 0 ? "carousel-item active" : "carousel-item"
                }
              >
                <section className="slider_section">
                  <div className="slider_bg_box">
                    <img src={[slider.data]} alt="" />
                  </div>
                  {/* <div className="container ">
                    <div className="row">
                      <div className="col-md-7 col-lg-6 ">
                        <div className="detail-box">
                          <h1>
                            <span>{slider.path}</span>
                            <br />
                            {slider.brand}
                          </h1>
                          <p>{slider.text}</p>
                        </div>
                      </div>
                    </div>
                  </div> */}
                </section>
              </div>
            );
          })}
        </div>
        <div>
          <div className="container">
            <ol className="carousel-indicators">
              <li
                data-target="#customCarousel1"
                data-slide-to="0"
                className="active"
              ></li>
              <li data-target="#customCarousel1" data-slide-to="1"></li>
              <li data-target="#customCarousel1" data-slide-to="2"></li>
              <li data-target="#customCarousel1" data-slide-to="3"></li>
              <li data-target="#customCarousel1" data-slide-to="4"></li>
              <li data-target="#customCarousel1" data-slide-to="5"></li>
            </ol>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;
