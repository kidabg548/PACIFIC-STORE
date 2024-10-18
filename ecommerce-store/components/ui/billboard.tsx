"use client"

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from "react-slick";

const Imagelist = [
  {
    id: 1,
    img: "/images/join us.png",
  },
  {
    id: 2,
    img: "/images/off sale.png",
  },
  {
    id: 3,
    img: "/images/shopping.png",
  },
  {
    id: 4,
    img: "/images/makeup1.png",
  },
  {
    id: 5,
    img: "/images/makeup.png",
  },
  {
    id: 6,
    img: "/images/childrens.png",
  },
  {
    id: 7,
    img: "/images/Gaming is a Lifestyle.png",
  },
];


const Billboard = () => {

  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <Slider {...settings}>

{Imagelist.map((data) => (

  <div key={data.id} className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
    <div className="relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover">
      <img 
        className=" w-full h-full object-cover rounded-xl" 
        src={data.img} 
        alt="" 
      />
    </div>
  </div>
))}

    </Slider>   
  );
};

export default Billboard;









