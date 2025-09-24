import FadeSlider from "./FadeSlider";

const StorySlider02 = () => {
  const images = [
    {
      src: "/images/about/slides/story05.png",
      alt: "story05",
    },
    {
      src: "/images/about/slides/story06.png",
      alt: "story06",
    },
    {
      src: "/images/about/slides/story07.png",
      alt: "story07",
    },
    {
      src: "/images/about/slides/story08.png",
      alt: "story08",
    },
  ];
  return <FadeSlider images={images} />;
};

export default StorySlider02;
