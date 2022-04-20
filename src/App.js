import Header from "./Component/Header/Header";
import "./App.css";
import Footer from "./Component/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import AllGallery from "./Component/Gallery/AllGallery";
import Main from "./Component/Main";
import Contact from "./Component/Contact/Contact";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<AllGallery />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
