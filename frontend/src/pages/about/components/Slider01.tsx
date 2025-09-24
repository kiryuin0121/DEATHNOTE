import React from "react";
import Slider from "../../../components/Slider";

const Slider01 = () => {
  const images = [
    {
      src: "/images/about/slides/slide01.png",
      alt: "slide01",
    },
    {
      src: "/images/about/slides/slide02.png",
      alt: "slide02",
    },
    {
      src: "/images/about/slides/slide03.png",
      alt: "slide03",
    },
    {
      src: "/images/about/slides/slide04.png",
      alt: "slide04",
    },
    {
      src: "/images/about/slides/slide05.png",
      alt: "slide05",
    },
    {
      src: "/images/about/slides/slide06.png",
      alt: "slide06",
    },
    {
      src: "/images/about/slides/slide07.png",
      alt: "slide07",
    },
    {
      src: "/images/about/slides/slide08.png",
      alt: "slide08",
    },
    {
      src: "/images/about/slides/slide09.png",
      alt: "slide09",
    },
    {
      src: "/images/about/slides/slide10.png",
      alt: "slide10",
    },
  ];
  return <Slider images={images} reverseDirection={true} />;
};

export default Slider01;
