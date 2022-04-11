import React from "react";
import {Link} from "react-router-dom";
const GalleryData = [
   {
      category:"Men's Shirt",
      price:" $75",
      image:"images/p1.png"
   }, 
   {
     category:"Men's Shirt",
     price:"$80",
     image:"images/p2.png"
   },
   {
     category:"Women's Dress",
     price:"$68",
     image:"images/p3.png"
   },
   {
     category:"Women's Dress",
     price:" $70",
     image:"images/p4.png"
   },
   {
     category:"Women's Dress",
     price:" $75",
     image:"images/p5.png"
   },
   {
     category:"Women's Dress",
     price:" $58",
     image:"images/p6.png"
   },
   {
     category:"Women's Dress",
     price:" $80",
     image:"images/p7.png"
   },
   {
     category:"Men's Shirt",
     price:" $65",
     image:"images/p8.png"
   },
   {
     category:"Men's Shirt",
     price:" $65",
     image:"images/p9.png"
   }
];

const Gallery = () => {
    
    return(
       <>
       <section className="product_section layout_padding">
         <div className="container">
            <div className="heading_container heading_center">
               <h2>
                  Our <span>Gallery</span>
               </h2>
            </div>
            
               
            <div className="row">
               {GalleryData.map((Gallery,index) =>{
                  return (
               <div key={index} className="col-sm-6 col-md-4 col-lg-4">
                  <div className="box">
                     <div className="option_container">
                        <div className="options">
                           <a href="gallery/page" className="option1">
                           Visit page
                           </a>
                           <a href="gallery/page" className="option2">
                           Buy Now
                           </a>
                        </div>
                     </div>
                     <div className="img-box">
                        <img src={Gallery.image} alt="" />
                     </div>
                     <div className="detail-box">
                        <h5>
                        {Gallery.category}
                        </h5>
                        <h6>
                        {Gallery.price}
                        </h6>
                     </div>
                  </div>
                   
               </div>
                  )
                  })}
               
            </div>
            <div className="btn-box">
               <Link to="gallery">
                Show More
               </Link>
            </div>
         </div>
      </section>
          
       </>
    )
};

export default Gallery;

   

