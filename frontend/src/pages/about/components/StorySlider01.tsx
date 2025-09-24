import FadeSlider from "./FadeSlider";

const StorySlider01 = () => {
  const images = [
    {
      src: "/images/about/slides/story01.png",
      alt: "story01",
    },
    {
      src: "/images/about/slides/story02.png",
      alt: "story02",
    },
    {
      src: "/images/about/slides/story03.png",
      alt: "story03",
    },
    {
      src: "/images/about/slides/story04.png",
      alt: "story04",
    },
  ];
  return <FadeSlider images={images} />;
};

export default StorySlider01;
