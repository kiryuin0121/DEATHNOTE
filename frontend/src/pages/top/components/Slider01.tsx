import React from "react";
import Slider from "../../../components/Slider";

const Slider01 = () => {
  const images = [
    {
      src: "/images/top/slides/slide1.png",
      alt: "slide1",
    },
    {
      src: "/images/top/slides/slide2.png",
      alt: "slide2",
    },
    {
      src: "/images/top/slides/slide3.png",
      alt: "slide3",
    },
    {
      src: "/images/top/slides/slide4.png",
      alt: "slide4",
    },
    {
      src: "/images/top/slides/slide5.jpg",
      alt: "slide5",
    },
    {
      src: "/images/top/slides/slide6.png",
      alt: "slide6",
    },
    {
      src: "/images/top/slides/slide7.png",
      alt: "slide7",
    },
    {
      src: "/images/top/slides/slide8.jpg",
      alt: "slide8",
    },
    {
      src: "/images/top/slides/slide9.png",
      alt: "slide9",
    },
  ];
  return <Slider images={images} reverseDirection={true} />;
};

export default Slider01;
