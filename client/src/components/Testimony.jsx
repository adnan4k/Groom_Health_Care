
import React from "react";
import axios from "axios";
import { useState,useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PreviousBtn from "./PreviousBtn";
import NextBtn from "./NextBtn";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIos from "@mui/icons-material/ArrowBackIos";

function Testimony() {
  const [data,setData] = useState([]);
  useEffect(() => {
    // Function to fetch data from the API
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:4000/testimony/get-testimony');
        console.log(response.data[0].image);
        setData(response.data); // Assuming the response data is the array of testimonies
      } catch (error) {
        console.error("Error fetching testimonies:", error);
      }
    };

    fetchData();
  }, [])
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
        <Slider {...settings}>{data.map((item) => (
          <div className="p-4 w grid grid-cols-1 sm:grid sm:grid-cols-3  ">
            <div className=" bg-white p-5 rounded-lg shadow-lg">
            <div className="flex flex-row">
            <img src={`http://localhost:4000/images/${item.image}`} alt={item.name} className="mx-auto" />
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
