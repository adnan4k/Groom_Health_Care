import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import PreviousBtn from "./PreviousBtn";
// import NextBtn from "./NextBtn";
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
// import ArrowBackIos from "@mui/icons-material/ArrowBackIos";

function Testimony() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true); // Added loading state
  const [error, setError] = useState(null); // Added error state

  useEffect(() => {
    // Fetch data from the API
    const fetchData = async () => {
      try {
        const response = await fetch('https://backend.es4h.org/testimony/get-testimony');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        setData(result); // Assuming the API returns an array of testimonials
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const settings = {
    dots: true,
    fade: false,
    autoplay: true,
    infinite: true,
    speed: 800,
    autoplaySpeed: 6000,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    // nextArrow: <NextBtn icon={ArrowForwardIosIcon} />,
    // prevArrow: <PreviousBtn icon={ArrowBackIos} />,
    endDots: (dots) => <ul>{dots}</ul>,
    customPaging: (i) => (
      <div className="ft-slick__dots--custom">
        <div className="loading" />
      </div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="testimonial bg-[#17a49d33] mb-[3%]">
      <div className="w-[90%] ml-[5%] items-center justify-center py-10 mx-2 sm:mx-14">
        <Slider {...settings}>
          {data.map((item) => (
            <div key={item.id} className="p-4 w grid grid-cols-1 sm:grid-cols-3">
              <div className="bg-white p-5 rounded-lg shadow-lg">
                <div className="flex flex-row">
                  <img
                    src={`https://backend.es4h.org/images/${item.image}`}
                    alt={item.name}
                    className="mx-auto w-32 rounded-full"
                  />©
                  <h2 className="text-center text-xl font-semibold mt-[20%] -ml-[10%]">
                    {item.name}
                  </h2>
                </div>
                <p className="text-center my-5">{item.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Testimony;
