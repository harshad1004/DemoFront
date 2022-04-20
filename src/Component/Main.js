import React from "react";
import Gallery from "./Gallery/Gallery";
import Contact from "./Contact/Contact";
import Customer from "./Customer/About";
import SliderComponent from "./Slider/SliderComponent";
const Main = () => {
  return (
    <>
      <SliderComponent />

      <Gallery />

      <Contact />

      <Customer />
    </>
  );
};

export default Main;
