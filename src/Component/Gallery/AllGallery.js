import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const AllGallery = () => {
  const [error, setError] = useState("");
  const [img, setImg] = useState(4);
  const [moreimages, setMoreImages] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/gallery/")
      .then((data) => {
        if (data.status) {
          setMoreImages(data.data.data);
        }
      })
      .catch((err) => {
        setError(err.response.data.message);
        toast.error(error);
      });
  }, []);
  const LoadMoreImages = () => {
    setImg((preValue) => preValue + 4);
  };
  const trueImages = moreimages.filter((image) => image.status === true);

  return (
    <>
      <section className="product_section layout_padding">
        <div className="container">
          <div className="heading_container heading_center">
            <h2>
              All <span>Images</span>
            </h2>
          </div>

          <div className="row">
            {trueImages.slice(0, img).map((img, index) => {
              return (
                <div key={index} className="col-sm-6 col-md-3 col-lg-3">
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
            <button
              style={{
                boxShadow:
                  "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)",
                color: "red",
                width: "150px",
                height: "44px",
                borderRadius: "30px",
              }}
              onClick={LoadMoreImages}
            >
              Load More
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default AllGallery;
