import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box } from "@mui/material";
import { NextArrow, PrevArrow } from "./CustomArrows";

const MultiRowImageCarousel = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 100, // Faster transition speed
    slidesToShow: 4,
    slidesToScroll: 1,
    rows: 2, // Number of rows
    slidesPerRow: 1, // Number of slides per row
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          rows: 2,
          slidesPerRow: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          rows: 2,
          slidesPerRow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 1,
          slidesPerRow: 1,
        },
      },
    ],
  };

  return (
    <Box sx={{ my: 4, position: "relative" }}>
      <Slider {...settings}>
        {images.map((image, index) => (
          <Box key={index} sx={{ padding: "0 18px", margin: '0' }}>
            <img
              src={image}
              alt={`slide ${index}`}
              style={{ width: "100%", height: "auto" }}
            />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default MultiRowImageCarousel;
