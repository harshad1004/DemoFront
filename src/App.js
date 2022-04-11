import Header from "./Component/Header/Header";
import "./App.css";
// import Slider from "./Component/Slider/Slider";
// import Arrival from "./Component/Arrival";
// import Gallery from "./Component/Gallery/Gallery";
// import Contact from "./Component/Contact/Contact";
// import Customer from "./Component/Customer/Customer";
 import Footer from "./Component/Footer/Footer";
// import WhyShop from "./Component/WhyShop";
// import ContentSlider from "./Component/Slider/ContentSlider";
// import SliderAgain from "./Component/SliderAgain";
import {  Route, Routes } from "react-router-dom";
import AllGallery from "./Component/Gallery/AllGallery";
import About from "./Component/Customer/About";
import Main from "./Component/Main";
import Contact from "./Component/Contact/Contact";
function App() {
  
  return (
    <>
      {/* <div className="hero_area">
        <Header />
        
      </div> */}

       <Header />
       <Routes>
       <Route  exact path="/" element={<Main />} />
       <Route   path="/about" element={<About />} />
       <Route   path="/contact" element={<Contact />} />
      <Route   path="/gallery" element={<AllGallery />} />
       </Routes>
      
      

      <Footer />
    </>
  );
}

export default App;
