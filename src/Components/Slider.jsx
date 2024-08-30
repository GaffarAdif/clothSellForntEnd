import React from "react";
import Slider from "react-slick";

export default function SimpleSlider() {
  let ScroolViewImage = 0;

  if (window.innerWidth < 768) {
    ScroolViewImage = 2;
  }
  if (window.innerWidth > 768 && window.innerWidth < 1024) {
    ScroolViewImage = 3;
  }
  if (window.innerWidth > 1024) {
    ScroolViewImage = 4;
  }

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: ScroolViewImage,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Slider {...settings}>
      <div className="h-fit px-1 ">
        <img
          className="w-full"
          src="./Images/Product_images/t_shart (41).jpeg"
          alt="iamagge"
        />
      </div>
      <div className="h-fit px-1 ">
        <img
          className="w-full"
          src="./Images/Product_images/t_shart (42).jpeg"
          alt="iamagge"
        />
      </div>
      <div className="h-fit px-1 ">
        <img
          className="w-full"
          src="./Images/Product_images/t_shart (43).jpeg"
          alt="iamagge"
        />
      </div>
      <div className="h-fit px-1 ">
        <img
          className="w-full"
          src="./Images/Product_images/t_shart (44).jpeg"
          alt="iamagge"
        />
      </div>
      <div className="h-fit px-1 ">
        <img
          className="w-full"
          src="./Images/Product_images/t_shart (45).jpeg"
          alt="iamagge"
        />
      </div>
    </Slider>
  );
}
