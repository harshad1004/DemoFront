import React from "react";
const SliderAgain = () => {
  return (
    <>
      <div id="customCarousel1" className="carousel slide" data-ride="carousel">
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
        </ol>

        <div className="carousel-inner">
            <section className="slider_section">

           
          <div className="slider_bg_box">
            <div className="carousel-item active">
              <img className="d-block w-100" src="images/slider-bg.jpg" />
            </div>
            <div className="container ">
              <div className="row">
                <div className="col-md-7 col-lg-6 ">
                  <div className="detail-box">
                    <h1>
                      <span>hidhdbcjh</span>
                      <br />
                      vffsdfsdf
                    </h1>
                    <p>sdadadad</p>
                    {/* <div className="btn-box">
                                                    <a href="" className="btn1">
                                                    Shop Now
                                                    </a>
                                                 </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="images/slider-bg.jpg" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="images/slider-bg.jpg" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="images/slider-bg.jpg" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="images/slider-bg.jpg" />
          </div>
        </section>
        </div>
      </div>
    </>
  );
};

export default SliderAgain;
