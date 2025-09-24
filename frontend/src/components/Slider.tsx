import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Image } from "../types/image";
import { Autoplay } from "swiper/modules";
type Props = {
  images: Image[];
  reverseDirection: boolean;
};
const Slider = ({ images, reverseDirection }: Props) => {
  return (
    <div className="w-screen h-auto mx-auto">
      <Swiper
        spaceBetween={2}
        slidesPerView={3}
        breakpoints={{
          1024: {
            slidesPerView: 5,
          },
        }}
        loop={true}
        speed={10000}
        autoplay={{
          delay: 0,
          reverseDirection: reverseDirection,
        }}
        modules={[Autoplay]}
      >
        {images.map((image: Image, i) => (
          <SwiperSlide key={i} className="flex items-center justify-center">
            <img
              src={image.src}
              alt={image.alt}
              className="h-[15vh] lg:h-[25vh] w-auto object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
