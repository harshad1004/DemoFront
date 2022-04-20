import React, { useState, useEffect } from "react";
const GalleryData = [
  {
    category: "Men's Shirt",
    price: " $75",
    image: "images/p1.png",
  },
  {
    category: "Men's Shirt",
    price: "$80",
    image: "images/p2.png",
  },
  {
    category: "Women's Dress",
    price: "$68",
    image: "images/p3.png",
  },
  {
    category: "Women's Dress",
    price: " $70",
    image: "images/p4.png",
  },
  {
    category: "Women's Dress",
    price: " $75",
    image: "images/p5.png",
  },
  {
    category: "Women's Dress",
    price: " $58",
    image: "images/p6.png",
  },
  {
    category: "Women's Dress",
    price: " $80",
    image: "images/p7.png",
  },
  {
    category: "Men's Shirt",
    price: " $65",
    image: "images/p8.png",
  },
  {
    category: "Men's Shirt",
    price: " $65",
    image: "images/p9.png",
  },
  {
    category: "Men's Shirt",
    price: " $65",
    image: "images/p9.png",
  },
  {
    category: "Men's Shirt",
    price: " $65",
    image: "images/p9.png",
  },
  {
    category: "Men's Shirt",
    price: " $65",
    image: "images/p9.png",
  },
  {
    category: "Men's Shirt",
    price: " $65",
    image: "images/p9.png",
  },
  {
    category: "Men's Shirt",
    price: " $65",
    image: "images/p9.png",
  },
  {
    category: "Men's Shirt",
    price: " $65",
    image: "images/p9.png",
  },
  {
    category: "Men's Shirt",
    price: " $65",
    image: "images/p9.png",
  },
  {
    category: "Men's Shirt",
    price: " $65",
    image: "images/p9.png",
  },
  {
    category: "Men's Shirt",
    price: " $65",
    image: "images/p9.png",
  },
  {
    category: "Men's Shirt",
    price: " $65",
    image: "images/p9.png",
  },
  {
    category: "Men's Shirt",
    price: " $65",
    image: "images/p9.png",
  },
];

const AllGallery = () => {
  const [moreimages, setMoreImages] = useState(4);
  const LoadMoreImages = () => {
    setMoreImages((preValue) => preValue + 4);
  };
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
            {GalleryData.slice(0, moreimages).map((Gallery, index) => {
              return (
                <div key={index} className="col-sm-6 col-md-3 col-lg-3">
                  <div className="box">
                    <div className="img-box">
                      <img src={Gallery.image} alt="" />
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
