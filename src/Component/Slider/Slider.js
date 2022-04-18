import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
const SliderData = [
  {
    id: "0",
    sale: "Sale 20% off",
    brand: "On Everything",
    text: "Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fugiat hic? Esse dicta aliquid error repudiandae earum suscipit fugiat molestias, veniam, vel architecto veritatis delectus repellat modi impedit sequi.",
    image: "images/slider-bg.jpg",
  },
  {
    id: "1",
    sale: "Sale 40% off",
    brand: "Off Everything",
    text: "Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fugiat hic? Esse dicta aliquid error repudiandae earum suscipit fugiat molestias, veniam, vel architecto veritatis delectus repellat modi impedit sequi.",
    image: "images/arrival-bg.png",
  },
  {
    id: "2",
    sale: "Sale 60% off",
    brand: "On Everything",
    text: "Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fugiat hic? Esse dicta aliquid error repudiandae earum suscipit fugiat molestias, veniam, vel architecto veritatis delectus repellat modi impedit sequi.",
    image: "images/slider-bg.jpg",
  },
  {
    id: "3",
    sale: "Sale 80% off",
    brand: "Off Everything",
    text: "Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fugiat hic? Esse dicta aliquid error repudiandae earum suscipit fugiat molestias, veniam, vel architecto veritatis delectus repellat modi impedit sequi.",
    image: "images/arrival-bg.png",
  },
  {
    id: "4",
    sale: "Sale 100% off",
    brand: "Off Everything",
    text: "Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fugiat hic? Esse dicta aliquid error repudiandae earum suscipit fugiat molestias, veniam, vel architecto veritatis delectus repellat modi impedit sequi.",
    image: "images/slider-bg.jpg",
  },
  {
    id: "5",
    sale: "Sale 120% off",
    brand: "On Everything",
    text: "Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fugiat hic? Esse dicta aliquid error repudiandae earum suscipit fugiat molestias, veniam, vel architecto veritatis delectus repellat modi impedit sequi.",
    image: "images/arrival-bg.png",
  },
];
const Slider = () => {
  const [sliderData, setSliderData] = useState([]);
  useEffect(() => {
    fetchSlide();
  }, []);
  const fetchSlide = () => {
    axios
      .get("http://localhost:5000/api/slider")
      .then((data) => {
        console.log("57", data);
        setSliderData(data.data.data);
      })
      .catch((err) => {
        console.log(err.response.data.message);
      });
  };
  //  console.log(sliderData, "slider");
  console.log(sliderData, "65");
  return (
    <>
      <div id="customCarousel1" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          {sliderData.map((slider, index) => {
            {
              console.log(slider, "72");
            }
            return (
              <div
                key={index}
                className={
                  index === 0 ? "carousel-item active" : "carousel-item"
                }
              >
                <section className="slider_section">
                  <div className="slider_bg_box">
                    <img src={slider} alt="" />
                  </div>
                  <div className="container ">
                    <div className="row">
                      <div className="col-md-7 col-lg-6 ">
                        <div className="detail-box">
                          <h1>
                            {/* <span>{slider.sale}</span> */}
                            <br />
                            {/* {slider.brand} */}
                          </h1>
                          {/* <p>{slider.text}</p> */}
                          <div className="btn-box">
                            <a href="" className="btn1">
                              Shop Now
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
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
