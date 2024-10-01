import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import {
  AiOutlineHeart,
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
} from "react-icons/ai";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Card = ({ room }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <Link to={``} className="col-span-1 cursor-pointer group">
      <div className="flex flex-col gap-2 w-full">
        <div className="aspect-square w-full relative overflow-hidden rounded-xl">
          <Slider {...settings}>
            {room?.images?.map((image, index) => (
              <div key={index}>
                <img
                  className="object-cover h-full w-full"
                  src={image}
                  alt={`Room ${index + 1}`}
                />
              </div>
            ))}
          </Slider>
          <div className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md">
            <AiOutlineHeart size={20} className="text-red-500" />
          </div>
        </div>
        <div className="font-semibold text-lg">{room?.location}</div>
        <div className="font-light text-neutral-500">5 nights .</div>
        <div className="flex flex-row items-center gap-1">
          <div className="font-semibold">$ {room?.price}</div>
          <div className="font-light">night</div>
        </div>
      </div>
    </Link>
  );
};

// Custom Arrow Components
function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/2 right-3 transform -translate-y-1/2 bg-gray-100 p-2 rounded-full cursor-pointer z-10"
      onClick={onClick}
    >
      <AiOutlineArrowRight size={20} />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/2 left-3 transform -translate-y-1/2 bg-gray-100 p-2 rounded-full cursor-pointer z-10"
      onClick={onClick}
    >
      <AiOutlineArrowLeft size={20} />
    </div>
  );
}

export default Card;
