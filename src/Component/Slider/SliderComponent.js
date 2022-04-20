import axios from "axios";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderComponent = () => {
  const [slider, setSlider] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/slider")
      .then((data) => {
        console.log(data, "helloooo");
        if (data.data.status===true) {
          console.log(data.data.status, "data data status");
          setSlider(data.data.data);
          console.log(data.data.data, "datadatadata");
          console.log(data.status, "data status");
          // console.log("uploaded", typeof data);
          // console.log("uploaded", data);
        }
      })
      .catch((err) => {
        console.log(err.response.data.message);
      });
  }, []);
  console.log("slider line no 21", slider);
  console.log("slider", typeof slider);
  var settings = {
    dots: true,
    infinite: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
  };
  return (
    <div className="content">
      <Slider {...settings}>
        {slider.map((slider) => (
          <img src={`http://${slider.url}`} key={slider._id}></img>
        ))}
      </Slider>
    </div>
  );
};

export default SliderComponent;
