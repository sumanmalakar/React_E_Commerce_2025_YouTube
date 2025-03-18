import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { trendingProducts } from "../context/data";

const TrendingSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 100,
    cssEase: "linear",
    arrows: false, // Hide arrows properly
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container text-center my-5">
      <Slider {...settings}>
        {trendingProducts.map((product, index) => (
          <div key={index} className="slide">
            <img
              src={product.image}
              alt={product.name}
              className="slide-image"
              style={{
                height: "180px",
                width: "180px",
                border: "1px solid blue",
              }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TrendingSlider;
