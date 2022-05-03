import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const Gallery = () => {
  const [error, setError] = useState("");
  const [image, setImage] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/gallery/")
      .then((data) => {
        if (data.status) {
          setImage(data.data.data);
        }
      })
      .catch((err) => {
        setError(err.response.data.messages);
        toast.error(error);
      });
  }, []);
  const trueImages = image.filter((image) => image.status === true);
  return (
    <>
      <section className="product_section layout_padding">
        <div className="container">
          <div className="heading_container heading_center">
            <h2>
              Our <span>Gallery</span>
            </h2>
          </div>

          <div className="row">
            {trueImages.slice(0, 9).map((img, index) => {
              return (
                <div key={index} className="col-sm-6 col-md-4 col-lg-4">
                  <div className="box">
                    <div className="img-box">
                      <img src={`http://${img.url}`} alt="" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="btn-box">
            <Link to="gallery">Show More</Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
