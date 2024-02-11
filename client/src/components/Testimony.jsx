
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PreviousBtn from "./PreviousBtn";
import NextBtn from "./NextBtn";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIos from "@mui/icons-material/ArrowBackIos";

function Testimony() {
  const sliderData = [
    {
      id: 1,
      name: "Dr Abdulwahid",
      image: "/images/sliderImage1.png",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis"
    },
    {
      id: 2, // Ensure unique ID
      name: "Dr Abdulwahid",
      image: "/images/sliderImage1.png",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis"
    },
    {
      id: 3, // Ensure unique ID
      name: "Dr Abdulwahid",
      image: "/images/sliderImage1.png",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis"
    },
  ];
  const settings = {
    dots: true,
    fade: false,
    autoplay: true,
    infinite: true,
    speed: 800,
    autoplaySpeed: 6000,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <NextBtn icon={ArrowForwardIosIcon} />,
    prevArrow: <PreviousBtn icon={ArrowBackIos} />,
    endDots: (dots) => <ul>{dots}</ul>,
    customPaging: (i) => (
      <div className="ft-slick__dots--custom">
        <div className="loading" />
      </div>
    )
  };
  
  return (
    <div className="testimonial bg-[#AFFCF833] mb-[3%] ">
      <div className="w-[90%] ml-[5%] items-center justify-center py-10">
        <Slider {...settings}>{sliderData.map((item) => (
          <div className="p-4 w grid grid-cols-1 sm:grid sm:grid-cols-3  ">
            <div className=" bg-white p-5 rounded-lg shadow-lg">
            <div className="flex flex-row">
            <img src={item.image} alt={item.name} className="mx-auto" />
            <h2 className="text-center text-xl font-semibold mt-[20%] -ml-[10%] ">{item.name}</h2>
            </div>
            <p className="text-center my-5">{item.description}</p>
            </div>
          </div>
      ))}</Slider>
      </div>
    </div>
  );
}
export default Testimony;
