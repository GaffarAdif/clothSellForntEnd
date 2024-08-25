import React from "react";
import Slider from "react-slick";

export default function SimpleSlider() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true
  };
  return (
    <Slider {...settings}>
      <div className="h-fit ">
      <img className='w-full' src="./Images/Product_images/t_shart (41).jpeg" alt="iamagge" />

      </div>
      <div className="h-fit ">
      <img className='w-full' src="./Images/Product_images/t_shart (42).jpeg" alt="iamagge" />

      </div>
      <div className="h-fit ">
      <img className='w-full' src="./Images/Product_images/t_shart (43).jpeg" alt="iamagge" />

      </div>
      <div className="h-fit ">
      <img className='w-full' src="./Images/Product_images/t_shart (44).jpeg" alt="iamagge" />

      </div>
      <div className="h-fit ">
      <img className='w-full' src="./Images/Product_images/t_shart (45).jpeg" alt="iamagge" />

      </div>

    </Slider>
  );
}