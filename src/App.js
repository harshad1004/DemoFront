import Header from "./Component/Header/Header";
import "./App.css";
import Footer from "./Component/Footer/Footer";
import AllGallery from "./Component/Gallery/AllGallery";
import About from "./Component/Customer/About";
import Main from "./Component/Main";
import Contact from "./Component/Contact/Contact";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<AllGallery />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
