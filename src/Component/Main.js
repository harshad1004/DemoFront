import React from "react";
import Gallery from "./Gallery/Gallery";
import Contact from "./Contact/Contact";
import SliderComponent from "./Slider/SliderComponent";
const Main = () => {
  return (
    <div>
      <SliderComponent />
      <Gallery />
      <Contact />
    </div>
  );
};

export default Main;
